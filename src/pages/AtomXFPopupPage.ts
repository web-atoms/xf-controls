import { AtomBridge } from "@web-atoms/core/dist/core/AtomBridge";
import { AtomXFControl } from "@web-atoms/core/dist/xf/controls/AtomXFControl";
import RgPluginsPopup from "../clr/RgPluginsPopup";

export default class AtomXFPopupPage extends AtomXFControl {

    constructor(a: any, e?: any) {
        super(a, e || AtomBridge.instance.create(RgPluginsPopup.PopupPage));
    }

}
