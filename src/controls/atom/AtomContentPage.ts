import { AtomBridge } from "@web-atoms/core/dist/core/AtomBridge";
import { AtomXFControl } from "@web-atoms/core/dist/xf/controls/AtomXFControl";
import { ContentPage } from "../XF";

export default class AtomContentPage extends AtomXFControl {

    constructor(app, e) {
        super(app, e || AtomBridge.instance.create(ContentPage as any));
    }

}
