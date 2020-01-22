import { AtomBridge } from "@web-atoms/core/dist/core/AtomBridge";
import { AtomXFControl } from "@web-atoms/core/dist/xf/controls/AtomXFControl";
import { PopupPage } from "../controls/RgPluginsPopup";

export default class AtomPopupPage extends AtomXFControl {

    constructor(a: any, e?: any) {
        super(a, e || AtomBridge.instance.create(PopupPage));
    }

}
