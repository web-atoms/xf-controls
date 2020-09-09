import { AtomBinder } from "@web-atoms/core/dist/core/AtomBinder";
import { AtomBridge } from "@web-atoms/core/dist/core/AtomBridge";
import { AtomWatcher } from "@web-atoms/core/dist/core/AtomWatcher";
import Bind from "@web-atoms/core/dist/core/Bind";
import { BindableProperty } from "@web-atoms/core/dist/core/BindableProperty";
import Colors from "@web-atoms/core/dist/core/Colors";
import { PropertyBinding } from "@web-atoms/core/dist/core/PropertyBinding";
import { IClassOf } from "@web-atoms/core/dist/core/types";
import XNode from "@web-atoms/core/dist/core/XNode";
import { NavigationService } from "@web-atoms/core/dist/services/NavigationService";
import { AtomStyle } from "@web-atoms/core/dist/web/styles/AtomStyle";
import { IStyleDeclaration } from "@web-atoms/core/dist/web/styles/IStyleDeclaration";
import { AtomXFControl } from "@web-atoms/core/dist/xf/controls/AtomXFControl";
import RgPluginsPopup from "../clr/RgPluginsPopup";
import WA from "../clr/WA";
import XF from "../clr/XF";
import SearchPageViewModel from "../combo-box/SearchPageViewModel";
import SelectionList from "../combo-box/SelectionList";
import AtomXFLink from "../link/AtomXFLink";
import AtomXFContentPage from "../pages/AtomXFContentPage";
import AtomXFPopupPage from "../pages/AtomXFPopupPage";

import AtomSelectableList from "@web-atoms/core/dist/core/AtomSelectableList";
import ChooserList from "./ChooserList";

export type ItemSearchFunction  = ((item: any, search: string) => boolean) | string[];

export class AtomChooserStyle extends AtomStyle {

    public get root(): IStyleDeclaration {
        return {
            subclasses: {
                " .item": {
                    padding: 10
                }
            }
        };
    }
}

export default class AtomChooser extends AtomXFControl {

    public static itemTemplate = XNode.prepare("itemTemplate", true, true);

    public static promptTemplate = XNode.prepare("promptTemplate", true, true);

    public static selectionViewTemplate = XNode.prepare("selectionViewTemplate", true, true);

    public prompt: string;

    public itemTemplate: IClassOf<AtomXFControl>;

    public promptTemplate: IClassOf<AtomXFControl>;

    public showAsPopup: boolean;

    public showSearch: boolean;

    public searchText: string;

    @BindableProperty
    public selectedItems: any[];

    public selectionViewTemplate: any;

    public search: ItemSearchFunction;

    /**
     * Warning, this will be removed in future, do not use this
     */
    public itemPadding: number;

    @BindableProperty
    public items: any[];

    @BindableProperty
    public value: any;

    @BindableProperty
    public valuePath: string | ((item: any) => string);

    @BindableProperty
    public labelPath: string | ((item: any) => string);

    public dropDownImage: any;

    /**
     * Event fired when selection is changed by the user
     */
    public eventSelectionChanged: any;

    private selectableList: AtomSelectableList<any>;

    constructor(a: any, e?: any) {
        super(a, e || AtomBridge.instance.create(XF.Grid));
    }

    public onPropertyChanged(name: keyof AtomChooser): void {
        if (name === "items") {
            this.selectableList.replace(this.items);
            if (this.value !== undefined
                && (this.items && this.selectedItems.length >= 1)) {
                AtomBinder.refreshValue(this, "value");
                return;
            }
        }
    }

    protected preCreate() {
        const vf = (item, def?) => {
            if (item === undefined || item === null) {
                return def;
            }
            const vp = this.valuePath;
            if (typeof vp === "function") {
                return vp(item);
            }
            return item[vp];
        };
        const lf = (item, def?) => {
            if (item === undefined || item === null) {
                return def;
            }
            const vp = this.labelPath;
            if (typeof vp === "function") {
                return vp(item);
            }
            return item[vp];
        };

        this.selectableList = new AtomSelectableList(true, vf, lf);
        this.defaultControlStyle = AtomChooserStyle;
        this.prompt = "Select";
        this.showSearch = true;
        this.showAsPopup = true;
        this.searchText = "";
        this.itemPadding = 10;
        this.search = ["label", "value"];
        // this.value = null;
        this.valuePath = "value";
        // this.selectedItem = null;
        this.promptTemplate = null;
        this.itemTemplate = null;
        this.dropDownImage = "res://WebAtoms.XF/Images.DropDownImage.png";
        this.selectionViewTemplate = null;
        // if the items were updated... we need to refresh the selected item...

        // this.registerDisposable(new AtomWatcher(this, () => this.items, () => {
        //     if (this.selectedItem === undefined
        //         || this.selectedItem === null
        //         || (this.items && this.items.indexOf(this.selectedItem) === -1)) {
        //         AtomBinder.refreshValue(this, "value");
        //         return;
        //     }
        // }));
    }

    protected create() {

        // const ImageButton = XNode.attach(AtomXFLink, XF.ImageButton);

        this.render(<XF.Grid
            selectedItems={Bind.twoWays(() => this.selectableList.selectedItems)}
            value={Bind.twoWays(() => this.selectableList.value)}
            styleClass={this.controlStyle.name}
            >

            {/** Default Prompt Template */}
            <AtomChooser.promptTemplate>
                <XF.DataTemplate>
                    <XF.Label
                        verticalTextAlignment="Center"
                        styleClass="item"
                        text={Bind.oneWay(() => this.prompt)}/>
                </XF.DataTemplate>
            </AtomChooser.promptTemplate>

            {/** Default Item Template */}
            <AtomChooser.itemTemplate>
                <XF.DataTemplate>
                    <XF.Label
                        styleClass="item"
                        verticalTextAlignment="Center"
                        text={Bind.oneWay((x) => (x.data ? ( x.data.label) : null) || "Loading.." )}
                        backgroundColor={Bind.oneWay((x) => x.data.selected
                            ? Colors.lightBlue
                            : Colors.white )}
                        />
                </XF.DataTemplate>
            </AtomChooser.itemTemplate>

            <AtomChooser.selectionViewTemplate>
                <XF.DataTemplate>
                    <ChooserList/>
                </XF.DataTemplate>
            </AtomChooser.selectionViewTemplate>

            <XF.Grid.columnDefinitions>
                <XF.ColumnDefinition/>
                <XF.ColumnDefinition width="Auto"/>
            </XF.Grid.columnDefinitions>
            <XF.FlexLayout
                wrap="Wrap"
                justifyContent="SpaceAround"
                { ...  XF.BindableLayout.itemsSource(Bind.oneWay(() => this.selectableList.selectedItems))}
                { ... XF.BindableLayout.itemTemplate(Bind.oneWay(() => this.itemTemplate))}>
                </XF.FlexLayout>
            <XF.ImageButton
                { ... XF.Grid.column(1) }
                heightRequest={40}
                widthRequest={40}
                source="res://WebAtoms.XF/Images.DropDownImage.png"
                command={() => this.app.runAsync(() => this.openPopup())}/>
        </XF.Grid>);
    }

    protected async openPopup() {
        const oldValue = this.selectableList.value;
        try {
            const ns = this.resolve(NavigationService as any) as NavigationService;
            const r = await ns.openPage(this.showAsPopup ? SearchPopupPage : SearchPage, {
                "title": this.prompt,
                "ref:selectableList": this.selectableList,
                "ref:comboBox": this
            });
            this.selectableList.value = r as any;
            this.element.dispatchEvent(new CustomEvent("selectionChanged", { detail: r } ));
        } catch (e) {
            this.selectableList.value = oldValue;
            // tslint:disable-next-line: no-console
            console.error(e);
        }
    }

}

class SearchPage extends AtomXFContentPage {

    public viewModel: SearchPageViewModel;

    public create() {

        this.viewModel = this.resolve(SearchPageViewModel);

        this.render(
            <XF.ContentPage title={Bind.oneWay(() => this.viewModel.title)}>
            <WA.AtomView
                bindingContext="Empty"
                dataTemplate={Bind.oneWay(() => this.viewModel.comboBox.selectionViewTemplate)}/>
        </XF.ContentPage>);
    }
}

class SearchPopupPage extends AtomXFPopupPage {

    public viewModel: SearchPageViewModel;

    public create() {

        this.viewModel = this.resolve(SearchPageViewModel);

        this.render(<RgPluginsPopup.PopupPage>
            <WA.AtomView
                bindingContext="Empty"
                dataTemplate={Bind.oneWay(() => this.viewModel.comboBox.selectionViewTemplate)}/>
        </RgPluginsPopup.PopupPage>);
    }
}
