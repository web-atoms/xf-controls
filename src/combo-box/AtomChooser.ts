import { CancelToken, IClassOf } from "@web-atoms/core/dist/core/types";
import { NavigationService } from "@web-atoms/core/dist/services/NavigationService";
import { AtomXFControl } from "@web-atoms/core/dist/xf/controls/AtomXFControl";

import { AtomList } from "@web-atoms/core/dist/core/AtomList";

import IFetchEvent from "@web-atoms/core/dist/core/IFetchEvent";

import { BindableProperty } from "@web-atoms/core/dist/core/BindableProperty";

import { default as SearchPage } from "./SearchPage";

import { App } from "@web-atoms/core/dist/App";
import { AtomBridge } from "@web-atoms/core/dist/core/AtomBridge";
import XNode from "@web-atoms/core/dist/core/XNode";
import ReferenceService from "@web-atoms/core/dist/services/ReferenceService";
import XF from "../controls/XF";

export type Factory = () => AtomXFControl;

export default class AtomChooser extends AtomXFControl {

    public static itemTemplate = XNode.prepare("itemTemplate", true, true);

    public static emptyTemplate = XNode.prepare("emptyTemplate", true, true);

    public itemTemplate: IClassOf<AtomXFControl> = null;
    public emptyTemplate: IClassOf<AtomXFControl> = null;

    public itemHostTemplate: IClassOf<AtomXFControl> = SearchPage;

    @BindableProperty
    public labelTemplate: Factory = (() => new (LabelTemplateCreator(this))(this.app));

    // @BindableProperty
    public selectedItem: any = null;

    public previousItem: any;

    @BindableProperty
    public value: any;

    @BindableProperty
    public label: any = "Select";

    @BindableProperty
    public searchText: string = null;

    public readonly items: AtomList<any> = new AtomList<any>();

    @BindableProperty
    public itemsSource: (fetchEvent: IFetchEvent) => Promise<any[]> | any[] = null;

    public valueFunc: ((item: any) => any) = null;

    public searchEnabled: boolean = true;

    private created: boolean = false;

    private lastSearchText: string = undefined;

    private cancelToken: CancelToken = null;

    constructor(app: App, e?: any) {
        super(app, e || AtomBridge.instance.create("WebAtoms.AtomView"));
    }

    public onUpdateUI() {
        if (this.created) {
            return;
        }
        this.createElement();
        this.created = true;
    }

    public async openWindow(): Promise<void> {
        try {
            const rs = this.app.get(ReferenceService);

            const ns = this.app.resolve(NavigationService) as NavigationService;

            const iht = rs.put(this.itemHostTemplate);
            const parent = rs.put(this);

            this.previousItem = this.selectedItem;

            this.onSearchTextChanged(true);

            const value = await ns.openPage(`app://class/${iht.key}`, {
                "ref:comboBox": parent
            });

            this.selectedItem = value;
        } catch (e) {
            this.selectedItem = this.previousItem;
            // tslint:disable-next-line:triple-equals
            if (e != "cancelled") {
                // tslint:disable-next-line:no-console
                console.error(e);
            }
        }
    }

    public onPropertyChanged(name: string): void {
        switch (name) {
            case "itemsSource":
            case "searchText":
            case "value":
                this.onSearchTextChanged(true);
                break;
            case "selectedItem":
                const si = this.selectedItem;
                const vf = this.valueFunc;
                if (vf && si) {
                    this.value = vf (si);
                }
                break;
        }
    }

    protected onSearchTextChanged(force: boolean = false): void {

        if (!force) {
            if (this.lastSearchText === this.searchText) {
                return;
            }
        }

        this.lastSearchText = this.searchText;

        if (this.cancelToken) {
            this.cancelToken.cancel();
        }

        if (!this.itemsSource) {
            // tslint:disable-next-line:no-console
            console.warn("No itemsSource defined");
            return;
        }

        const c = new CancelToken();
        this.cancelToken = c;

        this.app.runAsync(async () => {
            const result = this.itemsSource({
                search: this.searchText,
                cancel: c,
                value: this.value
            });
            if (!result) {
                return;
            }
            const rp = result as Promise<any[]>;
            if (rp.then && rp.catch) {
                const items = await rp;
                if (c.cancelled) {
                    return;
                }
                this.items.replace(items || []);
            } else {
                const items = result as any[];
                if (c.cancelled) {
                    return;
                }
                this.items.replace(items || []);
            }

            // if (!this.selectedItem) {
            //     this.selectedItem = this.items[0] || null;
            // }

        });

    }

    protected createElement(): void {

        this.setPrimitiveValue(this.element, "eventTapGesture", () => this.app.runAsync(() => this.openWindow()));

        // dirty hack..
        if (this.selectedItem === undefined) {
            this.selectedItem = null;
        }
        this.bind(this.element, "DataTemplate",
            [
                ["this", "selectedItem"],
                ["this", "itemTemplate"],
                ["this", "labelTemplate"]
            ],
            false, (s, it, lt) => {
                return s ? it : lt;
            }, this);
        this.bind(this.element, "BindingContext", [["this", "selectedItem"]], false, null, this);
    }
}

// tslint:disable-next-line:variable-name
function LabelTemplateCreator(__creator: any) {
    return class LabelTemplate extends AtomXFControl {

        constructor(app: App, e?: any) {
            super(app, e || AtomBridge.instance.create(XF.Label));
        }

        public create(): void {
            super.create();
            this.bind(this.element, "Text", [["this", "label"]], false, null, __creator);
        }

    };
}
