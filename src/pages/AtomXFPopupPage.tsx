import { AtomBridge } from "@web-atoms/core/dist/core/AtomBridge";
import Bind from "@web-atoms/core/dist/core/Bind";
import Colors from "@web-atoms/core/dist/core/Colors";
import XNode from "@web-atoms/core/dist/core/XNode";
import { AtomXFControl } from "@web-atoms/core/dist/xf/controls/AtomXFControl";
import WA from "../clr/WA";
import X from "../clr/X";
import XF from "../clr/XF";

const controlTemplate = <XF.ControlTemplate>
<XF.Grid>
    <XF.Grid.rowDefinitions>
        <XF.RowDefinition height={20} />
        <XF.RowDefinition height={30}/>
        <XF.RowDefinition/>
        <XF.RowDefinition height={50} />
    </XF.Grid.rowDefinitions>
    <XF.Grid.columnDefinitions>
        <XF.ColumnDefinition width={50} />
        <XF.ColumnDefinition/>
        <XF.ColumnDefinition width={30}/>
        <XF.ColumnDefinition width={50}/>
    </XF.Grid.columnDefinitions>
    <XF.BoxView
        { ... XF.Grid.row(1) }
        { ... XF.Grid.column(1) }
        { ... XF.Grid.rowSpan(2) }
        { ... XF.Grid.columnSpan(2) }
        backgroundColor={Colors.white}
        />
    <XF.Label
        padding={5}
        { ... XF.Grid.row(1) }
        { ... XF.Grid.column(1) }
        verticalOptions="Center"
        text={X.TemplateBinding("Title")}/>
    <XF.ImageButton
        { ... XF.Grid.row(1) }
        { ... XF.Grid.column(2) }
        source="res://WebAtoms.XF/Images.DeleteImage.png"
        command={Bind.event((x) => x.viewModel?.cancel())}/>
    <XF.ContentPresenter
        padding={5}
        { ... XF.Grid.row(2) }
        { ... XF.Grid.column(1) }
        { ... XF.Grid.columnSpan(2) }
        />
</XF.Grid>
</XF.ControlTemplate>;

export default class AtomXFPopupPage extends AtomXFControl {

    public title: string;

    constructor(a: any, e?: any) {
        super(a, e ?? AtomBridge.instance.create(WA.AtomPopupPage));
    }

    protected preCreate() {
        super.preCreate();
        this.render(<WA.AtomPopupPage
            title={Bind.oneWay(() => this.viewModel.title)}/>);
    }
}
