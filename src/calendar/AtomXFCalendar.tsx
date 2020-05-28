import Bind from "@web-atoms/core/dist/core/Bind";
import { IClassOf } from "@web-atoms/core/dist/core/types";
import XNode from "@web-atoms/core/dist/core/XNode";
import { AtomXFControl } from "@web-atoms/core/dist/xf/controls/AtomXFControl";
import DateTime from "@web-atoms/date-time/dist/DateTime";
import XF from "../clr/XF";
import AtomXFComboBox from "../combo-box/AtomXFComboBox";
import AtomXFGrid from "../controls/AtomXFGrid";
import AtomCalendarStyle from "./AtomXFCalendarStyle";
import AtomCalendarViewModel, { DateEnabledFunc, ICalendarItem } from "./AtomXFCalendarViewModel";

function toCss(a) {
    let r = "";
    for (const key in a) {
        if (a.hasOwnProperty(key)) {
            const element = a[key];
            if (element) {
                r += key + ",";
            }
        }
    }
    return r;
}

const monthList = [
    {label: "January", value: 0},
    {label: "February", value: 1},
    {label: "March", value: 2},
    {label: "April", value: 3},
    {label: "May", value: 4},
    {label: "June", value: 5},
    {label: "July", value: 6},
    {label: "August", value: 7},
    {label: "September", value: 8},
    {label: "October", value: 9},
    {label: "November", value: 10},
    {label: "December", value: 11}
];

const weekDays = [
    { label: "Mon", value: "Mon" },
    { label: "Tue", value: "Tue" },
    { label: "Wed", value: "Wed" },
    { label: "Thu", value: "Thu" },
    { label: "Fri", value: "Fri" },
    { label: "Sat", value: "Sat" },
    { label: "Sun", value: "Sun" }
];

const BindDay = Bind.forData<ICalendarItem>();

export default class AtomXFCalendar extends AtomXFGrid {

    public static itemTemplate = XNode.prepare("itemTemplate", true, true);

    public localViewModel: AtomCalendarViewModel;

    public selectedDate: Date;

    public yearStart: number;

    public yearEnd: number;

    public enableFunc: DateEnabledFunc;

    public currentDate: any;

    public itemTemplate: IClassOf<AtomXFControl>;

    public eventDateClicked: any;

    public create() {

        this.defaultControlStyle = AtomCalendarStyle;

        this.selectedDate = null;
        this.yearStart = -10;
        this.yearEnd = 10;
        this.enableFunc = null;
        this.itemTemplate = null;

        this.localViewModel = this.resolve(AtomCalendarViewModel, "owner");

        this.render(<XF.Grid
            styleClass={this.controlStyle.name}>

            <AtomXFCalendar.itemTemplate>
                <XF.DataTemplate>
                    <XF.Label
                        { ... XF.Grid.row(BindDay.oneTime((x) => x.data.y))}
                        { ... XF.Grid.column(BindDay.oneTime((x) => x.data.x))}
                        styleClass={BindDay.oneWay((x) => toCss({
                            "date-css": 1,
                            "is-other-month": x.data.isOtherMonth,
                            "is-today": x.data.isToday,
                            "is-weekend": x.data.isWeekend,
                            "is-selected": x.data.value.dateEquals(this.selectedDate),
                            "is-disabled": this.localViewModel.enableFunc
                                ? this.localViewModel.enableFunc(x.data)
                                : 0
                        }))}
                        text={BindDay.oneTime((x) => x.data.label)}>
                        <XF.Label.gestureRecognizers>
                            <XF.TapGestureRecognizer
                                command={BindDay.event((x) => this.localViewModel.dateClicked(x.data) )}/>
                        </XF.Label.gestureRecognizers>
                    </XF.Label>
                </XF.DataTemplate>
            </AtomXFCalendar.itemTemplate>

            <XF.Grid.rowDefinitions>
                <XF.RowDefinition height="auto"/>
                <XF.RowDefinition height="auto"/>
                <XF.RowDefinition/>
            </XF.Grid.rowDefinitions>
            <XF.Grid.columnDefinitions>
                <XF.ColumnDefinition width="auto"/>
                <XF.ColumnDefinition/>
                <XF.ColumnDefinition width="auto"/>
                <XF.ColumnDefinition width="auto"/>
            </XF.Grid.columnDefinitions>

            <AtomXFComboBox
                items={monthList}
                value={Bind.twoWays(() => this.localViewModel.month)}
                { ... XF.Grid.column(1)} />

            <AtomXFComboBox
                items={Bind.oneWay(() => this.localViewModel.yearList)}
                value={Bind.twoWays(() => this.localViewModel.year)}
                { ... XF.Grid.column(2)} />

            <XF.Grid
                class="week-days"
                { ... XF.Grid.row(1) }
                { ... XF.Grid.columnSpan(4) }>
                <XF.Grid.columnDefinitions>
                    <XF.ColumnDefinition/>
                    <XF.ColumnDefinition/>
                    <XF.ColumnDefinition/>
                    <XF.ColumnDefinition/>
                    <XF.ColumnDefinition/>
                    <XF.ColumnDefinition/>
                    <XF.ColumnDefinition/>
                </XF.Grid.columnDefinitions>
                <XF.Label text={weekDays[0].label}/>
                <XF.Label
                    { ... XF.Grid.column(1) }
                    text={weekDays[1].label}/>
                <XF.Label
                    { ... XF.Grid.column(2) }
                    text={weekDays[2].label}/>
                <XF.Label
                    { ... XF.Grid.column(3) }
                    text={weekDays[3].label}/>
                <XF.Label
                    { ... XF.Grid.column(4) }
                    text={weekDays[4].label}/>
                <XF.Label
                    { ... XF.Grid.column(5) }
                    text={weekDays[5].label}/>
                <XF.Label
                    { ... XF.Grid.column(6) }
                    text={weekDays[6].label}/>
            </XF.Grid>

            <XF.Grid
                { ... XF.BindableLayout.itemTemplate(Bind.oneWay(() => this.itemTemplate)) }
                { ... XF.BindableLayout.itemsSource(Bind.oneWay(() => this.localViewModel.items)) }
                { ... XF.Grid.row(2) }
                { ... XF.Grid.columnSpan(4) }>
                <XF.Grid.columnDefinitions>
                    <XF.ColumnDefinition/>
                    <XF.ColumnDefinition/>
                    <XF.ColumnDefinition/>
                    <XF.ColumnDefinition/>
                    <XF.ColumnDefinition/>
                    <XF.ColumnDefinition/>
                    <XF.ColumnDefinition/>
                </XF.Grid.columnDefinitions>
                <XF.Grid.rowDefinitions>
                    <XF.RowDefinition/>
                    <XF.RowDefinition/>
                    <XF.RowDefinition/>
                    <XF.RowDefinition/>
                    <XF.RowDefinition/>
                    <XF.RowDefinition/>
                </XF.Grid.rowDefinitions>
            </XF.Grid>
        </XF.Grid>);

    }

}
