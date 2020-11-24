import { Prop, State, Watch } from "@stencil/core";
import { MediaFileProvider } from "../file/MediaFileProvider";
import { MediaProviderAdapter } from "../MediaProvider";
import { ProviderDispatcher } from "../ProviderDispatcher";

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
        // TODO no idea what this is
        this.vLoadStart.emit();
        // TODO needs to be the shaka way
        // this.shaka!.attachSource(this.src);
    }

    @Prop() version = 'latest';

  /**
   * The `dashjs` configuration.
   */
  @Prop({ attribute: 'config' }) config: Record<string, any> = {};

    crossOrigin?: "" | "anonymous" | "use-credentials" | undefined;
    preload?: "" | "none" | "metadata" | "auto" | undefined;
    poster?: string | undefined;
    controlsList?: string | undefined;
    autoPiP?: boolean | undefined;
    disablePiP?: boolean | undefined;
    disableRemotePlayback?: boolean | undefined;
    getAdapter(): Promise<MediaProviderAdapter<any>> {
        throw new Error("Method not implemented.");
    }
    
}