//tslint:disable
import XNode from "@web-atoms/core/dist/core/XNode";
import XF from "./XF";

declare var bridge: any;

namespace RgPluginsPopup {
    export declare class PopupPage extends XF.ContentPage {
    }
};

(RgPluginsPopup as any) = {
    get PopupPage() {
        return this._PopupPage || (this._PopupPage = bridge.getClass("Rg.Plugins.Popup.Pages.PopupPage,Rg.Plugins.Popup"));
    }
}

export default RgPluginsPopup;
