import { AtomBridge } from "@web-atoms/core/dist/core/AtomBridge";
import { AtomXFControl } from "@web-atoms/core/dist/xf/controls/AtomXFControl";
import XF from "../controls/XF";

export default class AtomMasterDetailPage extends AtomXFControl {

    constructor(app: any, e?: any) {
        super(app, e || AtomBridge.instance.create(XF.MasterDetailPage as any));
    }

}
