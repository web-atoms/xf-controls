import { CancelToken } from "@web-atoms/core/dist/core/types";
import { AtomViewModel, Watch } from "@web-atoms/core/dist/view-model/AtomViewModel";
import Load from "@web-atoms/core/dist/view-model/Load";
import DateTime from "@web-atoms/date-time/dist/DateTime";

export type DateEnabledFunc = (d: ICalendarItem) => boolean;

export interface ILabelValue {
    label?: string;
    value?: any;
}

export interface ICalendarItem {
    label: string;
    type?: string;
    isToday: boolean;
    isOtherMonth: boolean;
    isWeekend: boolean;
    value: DateTime;
    x?: number;
    y?: number;
}

export default class AtomCalendarViewModel extends AtomViewModel {

    public owner: any;

    public items: ICalendarItem[];

    public get year() {
        return this.start.year;
    }

    public set year(v: number) {
        if (this.start.year === v) {
            return;
        }
        const s = this.mStart;
        this.mStart = new DateTime(v, s.month, s.day);
        this.refresh("start");
    }

    public get month() {
        return this.start.month;
    }

    public set month(v: number) {
        if (this.start.month === v) {
            return;
        }
        const s = this.mStart;
        this.mStart = new DateTime(s.year, v, s.day);
        this.refresh("start");
    }

    private mStart: DateTime;
    public get start(): DateTime {
        return this.mStart || (this.mStart = this.owner.selectedDate || DateTime.today);
    }
    public set start(value: DateTime) {
        this.mStart = value;
        this.refresh("year");
        this.refresh("month");
        this.refresh("start");
    }

    @Watch
    public get enableFunc(): DateEnabledFunc {
        return this.owner.enableFunc;
    }

    @Watch
    public get yearList(): ILabelValue[] {
        const start = this.year + this.owner.yearStart;
        const end = this.year + this.owner.yearEnd;

        const a = [];
        for (let index = start; index <= end; index++) {
            a.push({ label: index + "", value: index });
        }
        return a;
    }

    @Load({ watch: true })
    public loadSelectedDate() {
        // tslint:disable-next-line: no-string-literal
        const s = this["start"] as any as Date;
        const sel = this.owner.selectedDate as Date;
        if (s.getFullYear() !== sel.getFullYear()) {
            // tslint:disable-next-line: no-string-literal
            this["start"] = new DateTime(sel.getFullYear(), sel.getMonth(), sel.getDate());
            return;
        }
        if (s.getMonth() !== sel.getMonth()) {
            // tslint:disable-next-line: no-string-literal
            this["start"] = new DateTime(sel.getFullYear(), sel.getMonth(), sel.getDate());
            return;
        }
    }

    @Load({ init: true, watch: true, watchDelayMS: 100 })
    public loadItems(ct: CancelToken) {
        if (ct.cancelled) {
            return;
        }
        const today = DateTime.today;
        const start = this.start;
        let startDate = new DateTime(start.year, start.month, 1);
        while (startDate.dayOfWeek !== 1) {
            startDate = startDate.add(-1);
        }
        const a = [];
        const y = startDate.year;
        const m = startDate.month;
        for (let index = 0; index < 42; index++) {
            const cd = startDate.add(index);
            a.push({
                y: Math.abs(index / 7),
                x: index % 7,
                label: cd.day + "",
                type: null,
                value: cd,
                isToday: cd.equals(today),
                isOtherMonth: start.month !== cd.month,
                isWeekend: (cd.dayOfWeek === 0 || cd.dayOfWeek === 6)
            });
        }
        const o = this.owner;
        o.element.dispatchEvent(new CustomEvent("refresh", {
            detail: {
                year: start.year,
                month: start.month
            }
        }));
        o.currentDate = startDate;
        this.items = a;
    }

    // public async init() {
    //     if (this.owner.selectedDate) {
    //         this.start = this.selectedDate;
    //     }
    // }

    public changeMonth(step: number): void {
        const s = this.start.addMonths(step);
        const start = this.year + this.owner.yearStart;
        const end = this.year + this.owner.yearEnd;
        const sy = s.year;
        if (sy < start || sy > end) {
            return;
        }
        this.start = s;
        this.refresh("start");
    }

    public dateClicked(item: ICalendarItem): void {
        const e = this.owner.element as any;
        this.owner.selectedDate = item.value;
        e.dispatchEvent(new CustomEvent("dateClicked", { detail: item } ));
    }

}
