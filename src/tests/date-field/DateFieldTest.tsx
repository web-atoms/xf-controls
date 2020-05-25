import Bind from "@web-atoms/core/dist/core/Bind";
import XNode from "@web-atoms/core/dist/core/XNode";
import XF from "../../clr/XF";
import AtomXFDateField from "../../date-field/AtomDateField";
import AtomXFContentPage from "../../pages/AtomXFContentPage";

export default class DateFieldTest extends AtomXFContentPage {

    public date;

    public create() {

        this.date = null;

        this.render(<DateFieldTest>
            <XF.StackLayout>
                <AtomXFDateField
                    selectedDate={Bind.twoWays(() => this.date)}
                    />
                <XF.Label
                    text={Bind.oneWay(() => this.date)}
                    />
            </XF.StackLayout>
        </DateFieldTest>);
    }

}
