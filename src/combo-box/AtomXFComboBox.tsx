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
import AtomXFLink from "../link/AtomXFLink";
import AtomXFContentPage from "../pages/AtomXFContentPage";
import AtomXFPopupPage from "../pages/AtomXFPopupPage";
import SearchPageViewModel from "./SearchPageViewModel";
import SelectionList from "./SelectionList";

export type ItemSearchFunction  = ((item: any, search: string) => boolean) | string[];

export class AtomXFComboBoxStyle extends AtomStyle {

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

export default class AtomXFComboBox extends AtomXFControl {

    public static itemTemplate = XNode.prepare("itemTemplate", true, true);

    public static promptTemplate = XNode.prepare("promptTemplate", true, true);

    public static selectionViewTemplate = XNode.prepare("selectionViewTemplate", true, true);

    public prompt: string;

    public itemTemplate: IClassOf<AtomXFControl>;

    public promptTemplate: IClassOf<AtomXFControl>;

    public showAsPopup: boolean;

    public showSearch: boolean;

    public searchText: string;

    public selectedItem: any;

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

    public valuePath: string | ((item: any) => string);

    public dropDownImage: any;

    /**
     * Event fired when selection is changed by the user
     */
    public eventSelectionChanged: any;

    constructor(a: any, e?: any) {
        super(a, e || AtomBridge.instance.create(XF.Grid));
    }

    public onPropertyChanged(name: keyof AtomXFComboBox): void {
        if (name === "items") {
            if (this.selectedItem === undefined
                || this.selectedItem === null
                || (this.items && this.items.indexOf(this.selectedItem) === -1)) {
                AtomBinder.refreshValue(this, "value");
                return;
            }
        }
    }

    protected preCreate() {
        this.defaultControlStyle = AtomXFComboBoxStyle;
        this.prompt = "Select";
        this.showSearch = true;
        this.showAsPopup = true;
        this.searchText = "";
        this.itemPadding = 10;
        this.search = ["label", "value"];
        // this.value = null;
        this.valuePath = "value";
        this.selectedItem = null;
        this.promptTemplate = null;
        this.itemTemplate = null;
        this.dropDownImage = "res://WebAtoms.XF/Images.DropDownImage.png";
        this.selectionViewTemplate = null;

        const vf = (item) => {
            if (item === undefined || item === null) {
                return null;
            }
            const vp = this.valuePath;
            if (typeof vp === "function") {
                return vp(item);
            }
            return item[vp];
        };

        this.registerDisposable(new PropertyBinding(
            this,
            this.element,
            "value",
            [["this", "selectedItem"]],
            true, {
                fromSource: (v) => vf(v),
                fromTarget: (v) => this.items ? this.items.find((x) => vf(x) === v) : undefined
            }, this));

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
            styleClass={this.controlStyle.name}
            >

            {/** Default Prompt Template */}
            <AtomXFComboBox.promptTemplate>
                <XF.DataTemplate>
                    <XF.Label
                        verticalTextAlignment="Center"
                        styleClass="item"
                        text={Bind.oneWay(() => this.prompt)}/>
                </XF.DataTemplate>
            </AtomXFComboBox.promptTemplate>

            {/** Default Item Template */}
            <AtomXFComboBox.itemTemplate>
                <XF.DataTemplate>
                    <XF.Label
                        styleClass="item"
                        verticalTextAlignment="Center"
                        text={Bind.oneWay((x) => (x.data ? ( x.data.label) : null) || "Loading.." )}
                        backgroundColor={Bind.oneWay((x) => x.data === x.viewModel.selectedItem
                            ? Colors.lightBlue
                            : Colors.white )}
                        />
                </XF.DataTemplate>
            </AtomXFComboBox.itemTemplate>

            <AtomXFComboBox.selectionViewTemplate>
                <XF.DataTemplate>
                    <SelectionList/>
                </XF.DataTemplate>
            </AtomXFComboBox.selectionViewTemplate>

            <XF.Grid.columnDefinitions>
                <XF.ColumnDefinition/>
                <XF.ColumnDefinition width="Auto"/>
            </XF.Grid.columnDefinitions>
            <WA.AtomView
                bindingContext={Bind.oneWay(() => this.selectedItem)}
                dataTemplate={Bind.oneWay(() => this.itemTemplate)}
                emptyDataTemplate={Bind.oneWay(() => this.promptTemplate)}/>

            <XF.ImageButton
                { ... XF.Grid.column(1) }
                heightRequest={40}
                widthRequest={40}
                source="res://WebAtoms.XF/Images.DropDownImage.png"
                command={() => this.app.runAsync(() => this.openPopup())}/>
        </XF.Grid>);
    }

    protected async openPopup() {
        try {
            const ns = this.resolve(NavigationService as any) as NavigationService;
            const r = await ns.openPage(this.showAsPopup ? SearchPopupPage : SearchPage, {
                "title": this.prompt,
                "ref:selectedItem": this.selectedItem,
                "ref:comboBox": this
            });
            this.selectedItem = r;
            this.element.dispatchEvent(new CustomEvent("selectionChanged", { detail: r } ));
        } catch (e) {
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
