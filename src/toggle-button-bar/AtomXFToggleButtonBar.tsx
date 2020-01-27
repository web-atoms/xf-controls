import { AtomBridge } from "@web-atoms/core/dist/core/AtomBridge";
import Bind from "@web-atoms/core/dist/core/Bind";
import Colors from "@web-atoms/core/dist/core/Colors";
import { PropertyBinding } from "@web-atoms/core/dist/core/PropertyBinding";
import { IClassOf } from "@web-atoms/core/dist/core/types";
import XNode from "@web-atoms/core/dist/core/XNode";
import { AtomViewModel } from "@web-atoms/core/dist/view-model/AtomViewModel";
import { AtomXFControl } from "@web-atoms/core/dist/xf/controls/AtomXFControl";
import WA from "../clr/WA";
import XF from "../clr/XF";

class ToggleButtonBarViewModel extends AtomViewModel {

    public owner: AtomXFToggleButtonBar;

}

export default class AtomXFToggleButtonBar extends AtomXFControl {

    public static itemTemplate = XNode.prepare("itemTemplate", true, true);

    public items: any[];
    public selectedItem: any;
    public itemTemplate: IClassOf<AtomXFControl>;
    public labelPath: string;
    public valuePath: string | ((a: any) => string);
    public value: any;

    constructor(app: any, e?: any) {
        super(app, e || AtomBridge.instance.create(XF.Frame));
    }

    protected preCreate() {
        this.items = null;
        this.value = null;
        this.labelPath = "label";
        this.valuePath = "value";
        this.itemTemplate = null;
        this.selectedItem = null;

        const vf = (item) => {
            if (!item) {
                return null;
            }
            const vp = this.valuePath;
            if (typeof vp === "function") {
                return vp(item);
            }
            return item[vp];
        };

        this.registerDisposable(new PropertyBinding(
            this,
            null,
            "value",
            [["this", "selectedItem"]],
            true, {
                fromSource: (v) => this.value = vf(this.selectedItem),
                fromTarget: (v) => this.selectedItem = this.items.find((x) => vf(x) === this.value)
            }, this));
    }

    protected create() {

        this.localViewModel = this.resolve(ToggleButtonBarViewModel);
        this.localViewModel.owner = this;
        this.render(<XF.Frame
            padding={2}
            heightRequest={40}>
            <AtomXFToggleButtonBar.itemTemplate>
                <XF.DataTemplate>
                    <XF.Grid>
                        <XF.Label
                            padding={10}
                            text={Bind.oneWay((x) => x.data ? x.data[x.localViewModel.owner.labelPath] : ".")}
                            backgroundColor={Bind.oneWay((x) =>
                                x.data === x.localViewModel.owner.selectedItem
                                ? Colors.black
                                : Colors.white )}
                            textColor={Bind.oneWay((x) =>
                                x.data !== x.localViewModel.owner.selectedItem
                                ? Colors.black
                                : Colors.white )}
                            />
                    </XF.Grid>
                </XF.DataTemplate>
            </AtomXFToggleButtonBar.itemTemplate>
            <XF.StackLayout
                orientation="Horizontal"
                { ... XF.BindableLayout.itemTemplate(<XF.DataTemplate><WA.AtomView
                    dataTemplate={Bind.oneWay(() => this.itemTemplate)}>
                    <XF.View.gestureRecognizers>
                        <XF.TapGestureRecognizer
                            command={Bind.event((x) => this.selectedItem = x.data)}
                            />
                    </XF.View.gestureRecognizers>
                </WA.AtomView></XF.DataTemplate>) }
                { ... XF.BindableLayout.itemsSource(Bind.oneWay(() => this.items)) }>
            </XF.StackLayout>
        </XF.Frame>);
    }

}
