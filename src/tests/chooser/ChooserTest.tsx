import Bind from "@web-atoms/core/dist/core/Bind";
import XNode from "@web-atoms/core/dist/core/XNode";
import { AtomViewModel } from "@web-atoms/core/dist/view-model/AtomViewModel";
import AtomChooser from "../../chooser/AtomChooser";
import XF from "../../clr/XF";
import AtomXFContentPage from "../../pages/AtomXFContentPage";

class VM extends AtomViewModel {
    public genderList = [
        { label: "Male", value: "male" },
        { label: "Female", value: "female" }
    ];

    public gender = ["female"];
}

export default class ChooserTest extends AtomXFContentPage {

    public viewModel: VM;
    public create() {

        this.viewModel = this.resolve(VM);

        this.render(<XF.ContentPage>
            <XF.StackLayout>
                <AtomChooser
                    labelPath="label"
                    valuePath="value"
                    showSearch={false}
                    items={Bind.oneWay(() => this.viewModel.genderList)}
                    value={Bind.twoWays(() => this.viewModel.gender)}
                    />
            </XF.StackLayout>
        </XF.ContentPage>);
    }

}
