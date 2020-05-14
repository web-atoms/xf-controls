import Bind from "@web-atoms/core/dist/core/Bind";
import XNode from "@web-atoms/core/dist/core/XNode";
import XF from "../../clr/XF";
import AtomXFContentPage from "../../pages/AtomXFContentPage";
import AtomXFCalendar from "../AtomXFCalendar";

export default class CalendarTest extends AtomXFContentPage {

    public date: any;

    public create() {
        this.render(<XF.ContentPage title="Calendar Test">
            <XF.StackLayout>
                <AtomXFCalendar selectedDate={Bind.twoWays(() => this.date)}/>
                <XF.Label text={Bind.oneWay(() => this.date)}/>
            </XF.StackLayout>
        </XF.ContentPage>);
    }

}
