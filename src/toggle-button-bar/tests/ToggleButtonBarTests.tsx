import Bind from "@web-atoms/core/dist/core/Bind";
import XNode from "@web-atoms/core/dist/core/XNode";
import XF from "../../clr/XF";
import AtomXFContentPage from "../../pages/AtomXFContentPage";
import AtomXFToggleButtonBar from "../AtomXFToggleButtonBar";

export default class ToggleButtonBarTests extends AtomXFContentPage {

    public gender;

    public selectedGender;

    public create() {

        this.gender = [ {label: "Male", value: "male"}, { label: "Female", value: "female"} ];
        this.selectedGender = this.gender[1].value;

        this.render(<XF.ContentPage>
            <XF.Grid>
                <XF.Grid.RowDefinitions>
                    <XF.RowDefinition height="auto" />
                    <XF.RowDefinition/>
                </XF.Grid.RowDefinitions>
                <AtomXFToggleButtonBar
                    items={Bind.oneWay(() => this.gender)}
                    value={Bind.twoWays(() => this.selectedGender)}/>
                <XF.Label
                    { ... XF.Grid.Row(1) }
                    text={Bind.oneWay(() => this.selectedGender)}
                    />
            </XF.Grid>
        </XF.ContentPage>);
    }

}
