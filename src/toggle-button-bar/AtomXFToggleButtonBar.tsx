import { AtomBridge } from "@web-atoms/core/dist/core/AtomBridge";
import Bind from "@web-atoms/core/dist/core/Bind";
import { IClassOf } from "@web-atoms/core/dist/core/types";
import XNode from "@web-atoms/core/dist/core/XNode";
import { AtomViewModel } from "@web-atoms/core/dist/view-model/AtomViewModel";
import { AtomXFControl } from "@web-atoms/core/dist/xf/controls/AtomXFControl";
import XF from "../clr/XF";
import Colors from "@web-atoms/core/dist/core/Colors";
import { PropertyBinding } from "@web-atoms/core/dist/core/PropertyBinding";

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
                    <XF.Label
                        padding={10}
                        // tslint:disable-next-line: no-string-literal
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
                </XF.DataTemplate>
            </AtomXFToggleButtonBar.itemTemplate>
            <XF.CollectionView
                itemTemplate={Bind.oneWay(() => this.itemTemplate)}
                itemsSource={Bind.oneWay(() => this.items)}
                selectedItem={Bind.twoWays(() => this.selectedItem)}
                selectionMode="Single"
                // itemsLayout={<XF.LinearItemsLayout
                //     orientation="Horizontal"/>}
                >
                <XF.CollectionView.ItemsLayout>
                    <XF.LinearItemsLayout
                        orientation="Horizontal"/>
                </XF.CollectionView.ItemsLayout>
            </XF.CollectionView>
        </XF.Frame>);
    }

}
