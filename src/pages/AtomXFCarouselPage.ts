import { App } from "@web-atoms/core/dist/App";
import { AtomBridge } from "@web-atoms/core/dist/core/AtomBridge";
import { AtomXFControl } from "@web-atoms/core/dist/xf/controls/AtomXFControl";
import XF from "../clr/XF";

export default class AtomXFCarouselPage extends AtomXFControl {

    constructor(app: App, e?: any) {
        super(app, e || AtomBridge.instance.create(XF.CarouselPage));
    }

}
