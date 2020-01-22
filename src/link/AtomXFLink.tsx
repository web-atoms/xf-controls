import { App } from "@web-atoms/core/dist/App";
import { AtomBridge } from "@web-atoms/core/dist/core/AtomBridge";
import Bind from "@web-atoms/core/dist/core/Bind";
import { CancelToken } from "@web-atoms/core/dist/core/types";
import XNode from "@web-atoms/core/dist/core/XNode";
import { IPageOptions, NavigationService } from "@web-atoms/core/dist/services/NavigationService";
import { AtomXFControl } from "@web-atoms/core/dist/xf/controls/AtomXFControl";
import XF from "../controls/XF";

export default class AtomXFLink extends AtomXFControl {

    public static page = XNode.prepare("page", true, true);

    public page: string | any;

    public parameters: any;

    public isOpen: boolean;

    public cancelToken: CancelToken;

    public options: IPageOptions;

    /**
     * Block opening Popup/Page again till the opened page is closed or cancelled.
     * If set true, toggle will not work. Default is false.
     */
    public modal: boolean;

    /**
     * Setting Toggle (default true) true will close the already opened Popup/window, otherwise it will
     * open a new window if Modal is false.
     */
    public toggle: boolean;

    constructor(app: App, e?: any) {
        super(app, e || AtomBridge.instance.create(XF.Label));
    }

    public preCreate(): void {

        this.page = null;

        this.parameters = null;

        this.isOpen = false;

        this.options = null;

        this.modal = false;

        this.toggle = true;

        super.preCreate();

        this.render(<XF.Label>
            <XF.Label.GestureRecognizers>
                <XF.TapGestureRecognizer
                    command={Bind.event(() => {
                        // tslint:disable-next-line: no-console
                        console.log(`Opening popup`);
                        if (this.modal) {
                            return this.openPopup();
                        }
                        return this.app.runAsync(() => this.openPopup());
                    })}
                    />
            </XF.Label.GestureRecognizers>
        </XF.Label>);

        // this.bindEvent(
        //     this.element,
        //     "click",
        //     () => {
        //         if (this.modal) {
        //             return this.openPopup();
        //         }
        //         return this.app.runAsync(() => this.openPopup());
        //     });

        this.registerDisposable({
            dispose: () => {
                const ct = this.cancelToken;
                if (ct) {
                    ct.cancel();
                }
            }
        });
    }

    protected async openPopup(): Promise<void> {

        if (this.cancelToken) {
            if (this.toggle) {
                this.cancelToken.cancel();
                this.cancelToken = null;
                this.isOpen = false;
                return;
            } else {
                this.cancelToken.dispose();
            }
        }

        this.cancelToken = new CancelToken();

        try {
            const navigationService = this.app.resolve(NavigationService) as NavigationService;
            const pt = this.page;
            if (!pt) {
                // tslint:disable-next-line:no-console
                console.error("No popup template specified in PopupButton");
                return;
            }
            this.isOpen = true;
            const o = this.options ?
                { ... this.options, cancelToken: this.cancelToken } :
                { cancelToken: this.cancelToken };

            const getParametersEvent = new CustomEvent("getParameters", { detail: {} as any});

            this.element.dispatchEvent(getParametersEvent);

            const p =  getParametersEvent.detail.parameters || this.parameters;

            const result = await navigationService.openPage(pt, p, o);

            this.element.dispatchEvent(new CustomEvent("result", { detail: result }));

        } catch (e) {
            // tslint:disable-next-line: no-console
            console.error(e);
            // if element is disposed or null, ignore
            if (this.element) {
                this.element.dispatchEvent(new CustomEvent("error", { detail: e }));
            }
        } finally {
            this.cancelToken = null;
            this.isOpen = false;
        }
    }

}
