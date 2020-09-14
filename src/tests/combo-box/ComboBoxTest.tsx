import Bind from "@web-atoms/core/dist/core/Bind";
import XNode from "@web-atoms/core/dist/core/XNode";
import { AtomViewModel } from "@web-atoms/core/dist/view-model/AtomViewModel";
import { AtomXFControl } from "@web-atoms/core/dist/xf/controls/AtomXFControl";
import XF from "../../clr/XF";
import AtomXFComboBox from "../../combo-box/AtomXFComboBox";
import AtomXFContentPage from "../../pages/AtomXFContentPage";

class VM extends AtomViewModel {
    public genderList = [
        { label: "Male", value: "male" },
        { label: "Female", value: "female" }
    ];

    public gender = "female";
}

export default class ComboBoxTest extends AtomXFContentPage {

    public viewModel: VM;
    public create() {

        this.viewModel = this.resolve(VM);

        this.render(<XF.ContentPage>
            <XF.StackLayout>
                <XF.BoxView heightRequest={50} widthRequest={1}/>
                <AtomXFComboBox
                    showSearch={false}
                    items={Bind.oneWay(() => this.viewModel.genderList)}
                    value={Bind.twoWays(() => this.viewModel.gender)}
                    />
            </XF.StackLayout>
        </XF.ContentPage>);
    }

}
