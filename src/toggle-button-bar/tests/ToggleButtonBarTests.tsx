import Bind from "@web-atoms/core/dist/core/Bind";
import XNode from "@web-atoms/core/dist/core/XNode";
import XF from "../../clr/XF";
import AtomXFContentPage from "../../pages/AtomXFContentPage";
import AtomXFToggleButtonBar from "../AtomXFToggleButtonBar";

// @web-atoms-pack: true

export default class ToggleButtonBarTests extends AtomXFContentPage {

    public gender;

    public selectedGender;

    public create() {

        this.gender = [ {label: "Male", value: "male"}, { label: "Female", value: "female"} ];
        this.selectedGender = this.gender[1].value;

        this.render(<XF.ContentPage title="Toggle Bar Sample">
            <XF.Grid>
                <XF.Grid.rowDefinitions>
                    <XF.RowDefinition height="auto" />
                    <XF.RowDefinition/>
                </XF.Grid.rowDefinitions>
                <AtomXFToggleButtonBar
                    items={Bind.oneWay(() => this.gender)}
                    value={Bind.twoWays(() => this.selectedGender)}/>
                <XF.Label
                    { ... XF.Grid.row(1) }
                    text={Bind.oneWay(() => this.selectedGender)}
                    />
            </XF.Grid>
        </XF.ContentPage>);
    }

}
