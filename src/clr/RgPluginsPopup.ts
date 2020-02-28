import XNode from "@web-atoms/core/dist/core/XNode";
import XF from "./XF";

const NSRG = XNode.namespace("Rg.Plugins.Popup.Pages", "Rg.Plugins.Popup");

@NSRG("PopupPage")
class PopupPage extends XF.ContentPage {
}

const RgPluginsPopup = {
    PopupPage
};

export default RgPluginsPopup;
