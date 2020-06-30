import XNode from "@web-atoms/core/dist/core/XNode";
import XF from "./XF";

declare var bridge: any;

declare class PopupPage extends XF.ContentPage {
}

const RgPluginsPopup = {
    PopupPage: bridge.getClass("Rg.Plugins.Popup.Pages.PopupPage,Rg.Plugins.Popup") as typeof PopupPage
};

export default RgPluginsPopup;
