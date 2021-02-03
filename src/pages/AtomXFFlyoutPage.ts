import { AtomBridge } from "@web-atoms/core/dist/core/AtomBridge";
import { AtomXFControl } from "@web-atoms/core/dist/xf/controls/AtomXFControl";
import XF from "../clr/XF";

export default class AtomXFFlyoutPage extends AtomXFControl {

    constructor(app: any, e?: any) {
        super(app, e || AtomBridge.instance.create(XF.FlyoutPage as any));
    }

}
