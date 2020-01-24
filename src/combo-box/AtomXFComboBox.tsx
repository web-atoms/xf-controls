import { AtomBridge } from "@web-atoms/core/dist/core/AtomBridge";
import Bind from "@web-atoms/core/dist/core/Bind";
import Colors from "@web-atoms/core/dist/core/Colors";
import { PropertyBinding } from "@web-atoms/core/dist/core/PropertyBinding";
import { IClassOf } from "@web-atoms/core/dist/core/types";
import XNode from "@web-atoms/core/dist/core/XNode";
import { AtomXFControl } from "@web-atoms/core/dist/xf/controls/AtomXFControl";
import { PopupPage } from "../clr/RgPluginsPopup";
import WA from "../clr/WA";
import XF from "../clr/XF";
import AtomXFLink from "../link/AtomXFLink";
import AtomXFContentPage from "../pages/AtomXFContentPage";
import AtomXFPopupPage from "../pages/AtomXFPopupPage";
import SearchPageViewModel from "./SearchPageViewModel";
import SelectionList from "./SelectionList";

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

    public items: any[];

    public value: any;

    public valuePath: string | ((item: any) => string);

    public dropDownImage: any;

    constructor(a: any, e?: any) {
        super(a, e || AtomBridge.instance.create(XF.Grid));
    }

    protected preCreate() {
        this.prompt = "Select";
        this.showSearch = true;
        this.showAsPopup = true;
        this.searchText = "";
        this.items = null;
        this.value = null;
        this.valuePath = "value";
        this.selectedItem = null;
        this.promptTemplate = null;
        this.itemTemplate = null;
        this.dropDownImage = "res://WebAtoms.XF/Images.DropDownImage.png";
        this.selectionViewTemplate = null;

        const vf = (item) => {
            const vp = this.valuePath;
            if (typeof vp === "function") {
                return vp(item);
            }
            return item[vp];
        };

        this.registerDisposable(new PropertyBinding(
            this,
            null,
            "value",
            [["this", "selectedItem"]],
            true, {
                fromSource: (v) => this.value = vf(this.selectedItem),
                fromTarget: (v) => this.selectedItem = this.items.find((x) => vf(x) === this.value)
            }, this));
    }

    protected create() {

        const ImageButton = XNode.attach(AtomXFLink, XF.ImageButton);

        this.render(<XF.Grid>

            {/** Default Prompt Template */}
            <AtomXFComboBox.promptTemplate>
                <XF.DataTemplate>
                    <XF.Label text={Bind.oneWay(() => this.prompt)}/>
                </XF.DataTemplate>
            </AtomXFComboBox.promptTemplate>

            {/** Default Item Template */}
            <AtomXFComboBox.itemTemplate>
                <XF.DataTemplate>
                    <XF.Label
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

            <XF.Grid.ColumnDefinitions>
                <XF.ColumnDefinition/>
                <XF.ColumnDefinition width="Auto"/>
            </XF.Grid.ColumnDefinitions>
            <WA.AtomView
                bindingContext={Bind.oneWay(() => this.selectedItem)}
                dataTemplate={Bind.oneWay(() => this.itemTemplate)}
                emptyDataTemplate={Bind.oneWay(() => this.promptTemplate)}/>

            <AtomXFLink
                { ... XF.Grid.Column(1)}
                // source={Bind.oneWay(() => this.dropDownImage)}
                // for={XF.ImageButton.toString()}
                // source="res://WebAtoms.XF/Images.DropDownImage.png"
                text="Change"
                page={Bind.oneWay(() => this.showAsPopup ? SearchPopupPage : SearchPage )}
                eventResult={Bind.event((s, e) => this.selectedItem = e.detail)}
                parameters={Bind.oneWay(() => ({
                    "title": this.prompt,
                    "ref:selectedItem": this.selectedItem,
                    "ref:comboBox": this
                }))}
                />
        </XF.Grid>);
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
            <PopupPage title={Bind.oneWay(() => this.viewModel.title)}>
                <XF.Grid>
                    <XF.Grid.RowDefinitions>
                        <XF.RowDefinition height={20} />
                        <XF.RowDefinition height="auto"/>
                        <XF.RowDefinition height={50} />
                    </XF.Grid.RowDefinitions>
                    <XF.Grid.ColumnDefinitions>
                        <XF.ColumnDefinition width={50} />
                        <XF.ColumnDefinition width="auto"/>
                        <XF.ColumnDefinition width={50}/>
                    </XF.Grid.ColumnDefinitions>
                    <XF.Grid
                        padding={5}
                        backgroundColor="white"
                        { ... XF.Grid.Column(1) }
                        { ... XF.Grid.Row(1) }
                        >
                        <XF.Grid.RowDefinitions>
                            <XF.RowDefinition height="auto"/>
                            <XF.RowDefinition/>
                        </XF.Grid.RowDefinitions>
                        <XF.Grid.ColumnDefinitions>
                            <XF.ColumnDefinition/>
                            <XF.ColumnDefinition width="auto"/>
                        </XF.Grid.ColumnDefinitions>
                    <XF.Label
                        text={Bind.oneWay(() => this.viewModel.title)}/>
                    <XF.ImageButton
                        { ... XF.Grid.Column(1) }
                        source="res://WebAtoms.XF/Images.DeleteImage.png"
                        command={Bind.event(() => this.viewModel.cancel())}
                        />
                    <WA.AtomView
                        { ... XF.Grid.Row(1) }
                        { ... XF.Grid.ColumnSpan(2) }
                        emptyDataTemplate={Bind.oneWay(() => this.viewModel.comboBox.selectionViewTemplate)}/>
                    </XF.Grid>
            </XF.Grid>
        </PopupPage>);
    }
}
