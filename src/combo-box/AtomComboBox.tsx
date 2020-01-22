import { AtomBridge } from "@web-atoms/core/dist/core/AtomBridge";
import XNode from "@web-atoms/core/dist/core/XNode";
import { AtomXFControl } from "@web-atoms/core/dist/xf/controls/AtomXFControl";
import XF from "../controls/XF";
import WA from "../controls/WA";
import Bind from "@web-atoms/core/dist/core/Bind";

export default class AtomComboBox extends AtomXFControl {

    public prompt: string;

    constructor(a: any, e?: any) {
        super(a, e || AtomBridge.instance.create(XF.Grid));
    }

    public create() {

        this.prompt = "Select";

        this.render(<XF.Grid>
            <XF.Grid.ColumnDefinitions>
                <XF.ColumnDefinition/>
                <XF.ColumnDefinition width="Auto"/>
            </XF.Grid.ColumnDefinitions>
            <WA.AtomView>
                <WA.AtomView.EmptyDataTemplate>
                    <XF.DataTemplate>
                        <XF.Label text={Bind.oneWay(() => this.prompt)}/>
                    </XF.DataTemplate>
                </WA.AtomView.EmptyDataTemplate>
            </WA.AtomView>
        </XF.Grid>);
    }

}
