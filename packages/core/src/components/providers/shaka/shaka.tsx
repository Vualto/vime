import { EventEmitter, Prop, State, Watch, Event, Listen, h, Method, Component } from "@stencil/core";
import { isUndefined, isString } from "util";
import { MediaType, withPlayerContext } from "../../..";
import { loadSDK } from "../../../utils/network";
import { MediaCrossOriginOption, MediaFileProvider, MediaPreloadOption } from "../file/MediaFileProvider";
import { dashRegex } from "../file/utils";
import { withProviderConnect } from "../MediaProvider";
import { createProviderDispatcher, ProviderDispatcher } from "../ProviderDispatcher";

@Component({
  tag: 'vime-shaka',
})
export class Shaka implements MediaFileProvider<any> {

    private shaka?: any;

    private dispatch!: ProviderDispatcher;

    private mediaEl?: HTMLVideoElement;

    private videoProvider!: HTMLVimeVideoElement;

    @State() hasAttached = false;

    /**
     * The URL of the `manifest.mpd` file to use.
     */
    @Prop() src!: string;

    @Watch('src')
    @Watch('hasAttached')
    onSrcChange() {
    if (!this.hasAttached) return;
        this.vLoadStart.emit();
        this.shaka!.load(this.src);
    }

    @Prop() version = '3.0.5';

  /**
   * The `dashjs` configuration.
   */
  @Prop({ attribute: 'config' }) config: Record<string, any> = {};

    @Prop() autoplay = false;

  /**
   * @inheritdoc
   */
  @Prop() crossOrigin?: MediaCrossOriginOption;

  /**
   * @inheritdoc
   */
  @Prop() preload?: MediaPreloadOption = 'metadata';

  /**
   * @inheritdoc
   */
  @Prop() poster?: string;

  /**
   * @inheritdoc
   */
  @Prop() controlsList?: string;

  /**
   * @inheritdoc
   */
  @Prop({ attribute: 'auto-pip' }) autoPiP?: boolean;

  /**
   * @inheritdoc
   */
  @Prop({ attribute: 'disable-pip' }) disablePiP?: boolean;

  /**
   * @inheritdoc
   */
  @Prop() disableRemotePlayback?: boolean;

  /**
   * The title of the current media.
   */
  @Prop() mediaTitle?: string;

  /**
   * @internal
   */
  @Event() vLoadStart!: EventEmitter<void>;

  constructor() {
    withProviderConnect(this);
    withPlayerContext(this, ['autoplay']);
  }

  connectedCallback() {
    this.dispatch = createProviderDispatcher(this);
    if (this.mediaEl) this.setupShaka();
  }

  disconnectedCallback() {
    this.destroyShaka();
  }

  private async setupShaka() {
    try {
        const url = `https://cdnjs.cloudflare.com/ajax/libs/shaka-player/${this.version}/shaka-player.compiled.js`;
        const ShakaSDK = await loadSDK(url, 'shaka');
        var shaka: any;

        if (!shaka.Player.isBrowserSupported()) {
            this.dispatch('errors', [new Error('Shaka player is not supported on this browser')]);
        }

        this.shaka = new ShakaSDK.Player(this.mediaEl);
        this.mediaEl!.addEventListener('canplay', () => {
            this.dispatch('mediaType', MediaType.Video);
            this.dispatch('currentSrc', this.src);
            this.dispatch('playbackReady', true);
        });

        this.shaka?.addEventListener('trackschanged', () => {
            let tracks = this.shaka?.getTextTracks();
            debugger;
            console.log(tracks);
            this.dispatch('textTracks', tracks);
        });

        this.hasAttached = true;
    } catch (e) {
      this.dispatch('errors', [e]);
    }
  }

  private async destroyShaka() {
    this.shaka?.unload();
    this.shaka?.destroy();
    this.hasAttached = false;
  }

  @Listen('vMediaElChange')
  async onMediaElChange(event: CustomEvent<HTMLVideoElement | undefined>) {
    this.destroyShaka();
    if (isUndefined(event.detail)) return;
    this.mediaEl = event.detail;
    await this.setupShaka();
  }

  /**
   * @internal
   */
  @Method()
  async getAdapter() {
    const adapter = await this.videoProvider.getAdapter();
    const canVideoProviderPlay = adapter.canPlay;
    return {
      ...adapter,
      getInternalPlayer: async () => this.shaka,
      canPlay: async (type: any) => (isString(type) && dashRegex.test(type))
        || canVideoProviderPlay(type),
    };
  }

  render() {
    return (
      <vime-video
        willAttach
        crossOrigin={this.crossOrigin}
        preload={this.preload}
        poster={this.poster}
        controlsList={this.controlsList}
        autoPiP={this.autoPiP}
        disablePiP={this.disablePiP}
        disableRemotePlayback={this.disableRemotePlayback}
        mediaTitle={this.mediaTitle}
        ref={(el: any) => { this.videoProvider = el; }}
      />
    );
  }
    
}