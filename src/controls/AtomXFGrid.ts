import { AtomBridge } from "@web-atoms/core/dist/core/AtomBridge";
import { AtomXFControl } from "@web-atoms/core/dist/xf/controls/AtomXFControl";
import XF from "../clr/XF";

export default class AtomXFGrid extends AtomXFControl {
    constructor(app, e) {
        super(app, e || AtomBridge.instance.create(XF.Grid));
    }
}
