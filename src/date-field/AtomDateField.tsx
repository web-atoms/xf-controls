import { AtomBridge } from "@web-atoms/core/dist/core/AtomBridge";
import Bind from "@web-atoms/core/dist/core/Bind";
import XNode from "@web-atoms/core/dist/core/XNode";
import AtomXFCalendar from "../calendar/AtomXFCalendar";
import { DateEnabledFunc } from "../calendar/AtomXFCalendarViewModel";
import XF from "../clr/XF";
import AtomXFLink from "../link/AtomXFLink";
import AtomXFPopupPage from "../pages/AtomXFPopupPage";
import { AtomStyle } from "@web-atoms/core/dist/web/styles/AtomStyle";
import { IStyleDeclaration } from "@web-atoms/core/dist/web/styles/IStyleDeclaration";

const controlTemplate = <XF.ControlTemplate>
    <XF.Grid>
        <XF.Grid.columnDefinitions>
            <XF.ColumnDefinition/>
            <XF.ColumnDefinition width="auto"/>
        </XF.Grid.columnDefinitions>
        <XF.ContentPresenter/>
        <XF.Image
            { ... XF.Grid.column(1) }
            source="res://WebAtoms.XF/Images.DropDownImage.png"/>
    </XF.Grid>
</XF.ControlTemplate>;

export class AtomXFDateFieldStyle extends AtomStyle {

    public get root(): IStyleDeclaration {
        return {
            padding: 10
        };
    }
}

export default class AtomXFDateField extends AtomXFLink.contentView {

    public static itemTemplate = XNode.prepare("itemTemplate", true, true);

    public selectedDate: Date;

    public yearStart: number;

    public yearEnd: number;

    public enableFunc: DateEnabledFunc;

    public itemTemplate: any;

    protected preCreate() {
        this.defaultControlStyle = AtomXFDateFieldStyle;
        super.preCreate();
        this.selectedDate = null;
        this.yearStart = -10;
        this.yearEnd = 10;
        this.enableFunc = null;
        this.parameters = { title: "Select Date" };
        this.render(<XF.ContentView
            styleClass={this.controlStyle.name}
            controlTemplate={controlTemplate}>
            <AtomXFLink.page>
                <AtomXFPopupPage>
                    <AtomXFCalendar
                        selectedDate={Bind.twoWays(() => this.selectedDate)}
                        yearStart={Bind.oneWay(() => this.yearStart)}
                        yearEnd={Bind.oneWay(() => this.yearEnd)}
                        enableFunc={Bind.oneWay(() => this.enableFunc)}
                        itemTemplate={Bind.oneWay(() => this.itemTemplate || undefined)}
                        eventDateClicked={Bind.event((s, e) => s.viewModel.close(e.detail.value))}
                                />
                </AtomXFPopupPage>
            </AtomXFLink.page>
            <XF.Label
                text={Bind.oneWay(() => this.selectedDate
                    ? this.selectedDate.toLocaleDateString()
                    : "Select")}
                eventResult={Bind.event((s, e) => this.selectedDate = e.detail)}/>
        </XF.ContentView>);
    }
}
