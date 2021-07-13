import { AtomBridge } from "@web-atoms/core/dist/core/AtomBridge";
import { AtomLoader } from "@web-atoms/core/dist/core/AtomLoader";
import Bind from "@web-atoms/core/dist/core/Bind";
import { BindableProperty } from "@web-atoms/core/dist/core/BindableProperty";
import { IClassOf, IDisposable } from "@web-atoms/core/dist/core/types";
import XNode from "@web-atoms/core/dist/core/XNode";
import { AtomWindowViewModel } from "@web-atoms/core/dist/view-model/AtomWindowViewModel";
import { AtomXFControl } from "@web-atoms/core/dist/xf/controls/AtomXFControl";
import XF from "../clr/XF";
import AtomXFContentView from "../controls/AtomXFContentView";

export default class AtomXFFrame extends AtomXFContentView {

    @BindableProperty
    public frame: IClassOf<AtomXFControl> | Bind;

    private oldView: IDisposable;

    public create() {
        this.render(<XF.ContentView
            content={Bind.oneWay(() => this.createView(this.frame))}></XF.ContentView>);
    }

    private createView(c) {
        this.oldView?.dispose();
        this.oldView = null;
        if (c.isControl) {
            const v = new c(this.app);
            this.oldView = this.registerDisposable(v);
            return v.element;
        }
        if (c.factory) {
            const e = AtomBridge.instance.create(c);
            return e;
        }
    }

}
