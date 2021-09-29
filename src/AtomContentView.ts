import { AtomBridge } from "@web-atoms/core/dist/core/AtomBridge";
import { AtomXFControl } from "@web-atoms/core/dist/xf/controls/AtomXFControl";
import XF from "./clr/XF";

export default class AtomContentView extends AtomXFControl {

    constructor(a: any, e?: any) {
        super(a, e ?? new XF.ContentView());
    }

}
