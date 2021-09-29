import { App } from "@web-atoms/core/dist/App";
import { AtomBridge } from "@web-atoms/core/dist/core/AtomBridge";
import { AtomXFControl } from "@web-atoms/core/dist/xf/controls/AtomXFControl";
import XF from "../clr/XF";

export default class AtomXFTabbedPage extends AtomXFControl {

    constructor(app: App, e?: any) {
        super(app, e ?? new XF.TabbedPage());
    }
}
