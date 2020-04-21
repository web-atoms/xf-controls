import { AtomBridge } from "@web-atoms/core/dist/core/AtomBridge";
import Bind from "@web-atoms/core/dist/core/Bind";
import Colors from "@web-atoms/core/dist/core/Colors";
import { PropertyBinding } from "@web-atoms/core/dist/core/PropertyBinding";
import { IClassOf } from "@web-atoms/core/dist/core/types";
import XNode from "@web-atoms/core/dist/core/XNode";
import { NavigationService } from "@web-atoms/core/dist/services/NavigationService";
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

    public items: any[];

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

    protected preCreate() {
        this.prompt = "Select";
        this.showSearch = true;
        this.showAsPopup = true;
        this.searchText = "";
        this.search = ["label", "value"];
        this.items = null;
        this.value = null;
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
                fromTarget: (v) => this.items.find((x) => vf(x) === v)
            }, this));
    }

    protected create() {

        // const ImageButton = XNode.attach(AtomXFLink, XF.ImageButton);

        this.render(<XF.Grid>

            {/** Default Prompt Template */}
            <AtomXFComboBox.promptTemplate>
                <XF.DataTemplate>
                    <XF.Label
                        padding={5}
                        text={Bind.oneWay(() => this.prompt)}/>
                </XF.DataTemplate>
            </AtomXFComboBox.promptTemplate>

            {/** Default Item Template */}
            <AtomXFComboBox.itemTemplate>
                <XF.DataTemplate>
                    <XF.Label
                        padding={5}
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

        this.render(
            <RgPluginsPopup.PopupPage title={Bind.oneWay(() => this.viewModel.title)}>
                <XF.Grid>
                    <XF.Grid.rowDefinitions>
                        <XF.RowDefinition height={20} />
                        <XF.RowDefinition/>
                        <XF.RowDefinition height={50} />
                    </XF.Grid.rowDefinitions>
                    <XF.Grid.columnDefinitions>
                        <XF.ColumnDefinition width={50} />
                        <XF.ColumnDefinition/>
                        <XF.ColumnDefinition width={50}/>
                    </XF.Grid.columnDefinitions>
                    <XF.Grid
                        padding={5}
                        backgroundColor="white"
                        { ... XF.Grid.column(1) }
                        { ... XF.Grid.row(1) }
                        >
                        <XF.Grid.rowDefinitions>
                            <XF.RowDefinition height={30}/>
                            <XF.RowDefinition/>
                        </XF.Grid.rowDefinitions>
                        <XF.Grid.columnDefinitions>
                            <XF.ColumnDefinition/>
                            <XF.ColumnDefinition width={30}/>
                        </XF.Grid.columnDefinitions>
                    <XF.Label
                        text={Bind.oneWay(() => this.viewModel.title)}/>
                    <XF.ImageButton
                        { ... XF.Grid.column(1) }
                        source="res://WebAtoms.XF/Images.DeleteImage.png"
                        command={Bind.event(() => this.viewModel.cancel())}
                        />
                    <WA.AtomView
                        { ... XF.Grid.row(1) }
                        { ... XF.Grid.columnSpan(2) }
                        emptyDataTemplate={Bind.oneWay(() => this.viewModel.comboBox.selectionViewTemplate)}/>
                    </XF.Grid>
            </XF.Grid>
        </RgPluginsPopup.PopupPage>);
    }
}
