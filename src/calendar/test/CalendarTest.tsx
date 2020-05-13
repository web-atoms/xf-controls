import XNode from "@web-atoms/core/dist/core/XNode";
import XF from "../../clr/XF";
import AtomXFContentPage from "../../pages/AtomXFContentPage";
import AtomCalendar from "../AtomCalendar";

export default class CalendarTest extends AtomXFContentPage {

    public create() {
        this.render(<XF.ContentPage title="Calendar Test">
            <AtomCalendar/>
        </XF.ContentPage>);
    }

}
