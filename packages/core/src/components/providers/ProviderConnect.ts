import { getElement, writeTask } from '@stencil/core';
import { Disposal } from '../../utils/Disposal';
import { listen } from '../../utils/dom';
import { createStencilHook } from '../../utils/stencil';
import { StateChange } from '../core/player/PlayerDispatcher';
import { PlayerProps } from '../core/player/PlayerProps';
import { AdapterHost, MediaProviderAdapter } from './MediaProvider';
import { Provider } from './Provider';
import { PROVIDER_CHANGE_EVENT } from './ProviderDispatcher';
import { ProviderWritableProps, isProviderWritableProp } from './ProviderProps';

export const PROVIDER_CACHE_KEY = Symbol('vmProviderCache');
export const PROVIDER_CONNECT_EVENT = 'vmMediaProviderConnect';
export const PROVIDER_DISCONNECT_EVENT = 'vmMediaProviderDisconnect';

export type ProviderCache = Map<keyof ProviderWritableProps, any>;

export type ProviderConnectEventDetail = AdapterHost;

export interface ProviderHost extends ProviderWritableProps {
  [PROVIDER_CACHE_KEY]?: ProviderCache
  ready: boolean
  currentProvider?: Provider
  logger?: PlayerProps['logger']
  provider?: AdapterHost
  adapter?: MediaProviderAdapter
  onProviderDisconnect?: () => void
}

export function withProviderHost(connector: ProviderHost) {
  const el = getElement(connector);
  const disposal = new Disposal();

  const cache: ProviderCache = new Map();
  connector[PROVIDER_CACHE_KEY] = cache;

  function initCache() {
    (Object.keys(connector) as (keyof ProviderWritableProps)[]).forEach((prop) => {
      cache.set(prop, connector[prop]);
    });
  }

  function onDisconnect(e?: Event) {
    e?.stopImmediatePropagation();
    writeTask(async () => {
      connector.ready = false;
      connector.provider = undefined;
      connector.adapter = undefined;
      cache.clear();
      connector.onProviderDisconnect?.();
    });
  }

  function onConnect(e: CustomEvent<ProviderConnectEventDetail>) {
    e.stopImmediatePropagation();
    initCache();

    const host = getElement(e.detail) as AdapterHost;
    if (connector.provider === host) return;

    const name = host
      ?.nodeName
      .toLowerCase()
      .replace('vm-', '');

    writeTask(async () => {
      onDisconnect();
      connector.provider = host;
      connector.adapter = await host?.getAdapter();
      connector.currentProvider = Object.values(Provider)
        .find((provider) => name === provider);
    });
  }

  function onChange(e: CustomEvent<StateChange<ProviderWritableProps>>) {
    e.stopImmediatePropagation();
    const { by, prop, value } = e.detail;

    if (!isProviderWritableProp(prop)) {
      connector.logger?.warn(`${by.nodeName} tried to change \`${prop}\` but it is readonly.`);
      return;
    }

    writeTask(() => {
      cache.set(prop, value);
      (connector as any)[prop] = value;
    });
  }

  createStencilHook(connector, () => {
    disposal.add(listen(el, PROVIDER_CONNECT_EVENT, onConnect));
    disposal.add(listen(el, PROVIDER_DISCONNECT_EVENT, onDisconnect));
    disposal.add(listen(el, PROVIDER_CHANGE_EVENT, onChange));
  }, () => {
    disposal.empty();
    cache.clear();
  });
}

export function withProviderConnect(ref: any) {
  const host = getElement(ref) as AdapterHost;

  const buildEvent = (name: string) => new CustomEvent<ProviderConnectEventDetail>(name, {
    bubbles: true,
    composed: true,
    detail: host,
  });

  const connectEvent = buildEvent(PROVIDER_CONNECT_EVENT);
  const disconnectEvent = buildEvent(PROVIDER_DISCONNECT_EVENT);

  createStencilHook(ref, () => {
    host.dispatchEvent(connectEvent);
  }, () => {
    host.dispatchEvent(disconnectEvent);
  });
}
