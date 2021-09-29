import { AtomBridge } from "@web-atoms/core/dist/core/AtomBridge";
import { AtomXFControl } from "@web-atoms/core/dist/xf/controls/AtomXFControl";
import XF from "../clr/XF";

export default class AtomXFMasterDetailPage extends AtomXFControl {

    constructor(app: any, e?: any) {
        super(app, e ?? new XF.MasterDetailPage());
    }

}
