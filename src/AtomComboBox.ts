import { CancelToken, IClassOf } from "web-atoms-core/dist/core/types";
import { NavigationService } from "web-atoms-core/dist/services/NavigationService";
import { AtomXFControl } from "web-atoms-core/dist/xf/controls/AtomXFControl";

import { AtomList } from "web-atoms-core/dist/core/AtomList";

import IFetchEvent from "web-atoms-core/dist/core/IFetchEvent";

import { BindableProperty } from "web-atoms-core/dist/core/BindableProperty";

import { default as SearchPage } from "./SearchPage";

import ReferenceService from "web-atoms-core/dist/services/ReferenceService";

export default class Root extends AtomXFControl {

    public itemTemplate: IClassOf<AtomXFControl> = null;

    public itemHostTemplate: IClassOf<AtomXFControl> = SearchPage;

    @BindableProperty
    public selectedItem: any = null;

    public previousItem: any;

    @BindableProperty
    public value: any;

    @BindableProperty
    public label: any;

    @BindableProperty
    public searchText: string = null;

    public readonly items: AtomList<any> = new AtomList<any>();

    public itemsSource: (fetchEvent: IFetchEvent) => Promise<any[]> | any[] = null;

    public valueFunc: ((item: any) => any) = null;

    public searchEnabled: boolean = true;

    private created: boolean = false;

    private lastSearchText: string = undefined;

    private cancelToken: CancelToken = null;

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

            const value = await ns.openPage(`app://class/${iht.key}`, {
                "ref:comboBox": parent
            });

            this.selectedItem = value;
        } catch (e) {
            this.selectedItem = this.previousItem;
            // tslint:disable-next-line:triple-equals
            if (e != "cancelled") {
                // tslint:disable-next-line:no-console
                console.warn(e);
            }
        }
    }

    public onPropertyChanged(name: string): void {
        switch (name) {
            case "searchText":
            case "value":
                this.onSearchTextChanged();
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

    protected onSearchTextChanged(): void {

        if (this.lastSearchText === this.searchText) {
            return;
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

            if (!this.selectedItem) {
                this.selectedItem = this.items[0];
            }

        });

    }

    protected preCreate(): void {
        this.element = this.createControl("Xamarin.Forms.Grid");
    }

    protected createElement(): void {
        this.loadXaml(`	<Grid xmlns:js="js-binder"
        xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml"
        xmlns="http://xamarin.com/schemas/2014/forms"
        xmlns:atom="clr-namespace:WebAtoms;assembly=WebAtoms"
        x:Name="e2">
            <Grid.ColumnDefinitions>
                <ColumnDefinition/>
                <ColumnDefinition Width="Auto"/>
            </Grid.ColumnDefinitions>
            <atom:AtomView
                x:Name="content"/>
        </Grid>`);

        this.setPrimitiveValue(this.element, "eventTapGesture", () => this.app.runAsync(() => this.openWindow()));

        const content = this.find("content");

        this.bind(content, "BindingContext", [["this", "selectedItem"]], false, null, this);
        this.bind(content, "DataTemplate", [["this", "itemTemplate"]], false, null, this);
    }
}
