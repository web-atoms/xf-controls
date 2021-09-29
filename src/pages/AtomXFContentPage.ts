import { AtomBridge } from "@web-atoms/core/dist/core/AtomBridge";
import { AtomXFControl } from "@web-atoms/core/dist/xf/controls/AtomXFControl";
import XF from "../clr/XF";

export default class AtomXFContentPage extends AtomXFControl {

    constructor(app, e) {
        super(app, e ?? new XF.ContentPage());
    }

}
