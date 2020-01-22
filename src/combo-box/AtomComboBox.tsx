import { AtomBridge } from "@web-atoms/core/dist/core/AtomBridge";
import Bind from "@web-atoms/core/dist/core/Bind";
import { IClassOf } from "@web-atoms/core/dist/core/types";
import XNode from "@web-atoms/core/dist/core/XNode";
import { AtomXFControl } from "@web-atoms/core/dist/xf/controls/AtomXFControl";
import WA from "../controls/WA";
import XF from "../controls/XF";
import AtomXFLink from "../link/AtomXFLink";
import AtomContentPage from "../pages/AtomContentPage";
import AtomPopupPage from "../pages/AtomPopupPage";
import SearchPageViewModel from "./SearchPageViewModel";
import SelectionList from "./SelectionList";
import { PopupPage } from "../controls/RgPluginsPopup";

export default class AtomComboBox extends AtomXFControl {

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

    public dropDownImage: any;

    constructor(a: any, e?: any) {
        super(a, e || AtomBridge.instance.create(XF.Grid));
    }

    protected preCreate() {
        this.prompt = "Select";
        this.showSearch = false;
        this.showAsPopup = true;
        this.searchText = "";
        this.items = null;
        this.selectedItem = null;
        this.promptTemplate = null;
        this.itemTemplate = null;
        this.dropDownImage = "res://WebAtoms.XF/Images.DropDownImage.png";
        this.selectionViewTemplate = SelectionList;
    }

    protected create() {

        const ImageButton = XNode.attach(AtomXFLink, XF.ImageButton);

        this.render(<XF.Grid>

            {/** Default Prompt Template */}
            <AtomComboBox.promptTemplate>
                <XF.DataTemplate>
                    <XF.Label text={Bind.oneWay(() => this.prompt)}/>
                </XF.DataTemplate>
            </AtomComboBox.promptTemplate>

            {/** Default Item Template */}
            <AtomComboBox.itemTemplate>
                <XF.DataTemplate>
                    <XF.Label text={Bind.oneWay((x) => x.data.label || x.data)}/>
                </XF.DataTemplate>
            </AtomComboBox.itemTemplate>

            <XF.Grid.ColumnDefinitions>
                <XF.ColumnDefinition/>
                <XF.ColumnDefinition width="Auto"/>
            </XF.Grid.ColumnDefinitions>
            <WA.AtomView
                bindingContext={Bind.oneWay(() => this.selectedItem)}
                dataTemplate={Bind.oneWay(() => this.itemTemplate)}
                emptyDataTemplate={Bind.oneWay(() => this.promptTemplate)}/>

            <AtomXFLink
                for={XF.Button}
                { ... XF.Grid.Column(1)}
                // source={Bind.oneWay(() => this.dropDownImage)}
                text="Change"
                page={Bind.oneWay(() => this.showAsPopup ? SearchPopupPage : SearchPage )}
                parameters={Bind.oneWay(() => ({
                    "title": this.prompt,
                    "ref:selectedItem": this.selectedItem,
                    "ref:comboBox": this
                }))}
                />
        </XF.Grid>);
    }

}

class SearchPage extends AtomContentPage {

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

class SearchPopupPage extends AtomPopupPage {

    public viewModel: SearchPageViewModel;

    public create() {

        this.viewModel = this.resolve(SearchPageViewModel);

        this.render(
            <PopupPage title={Bind.oneWay(() => this.viewModel.title)}>
            <WA.AtomView
                bindingContext="Empty"
                dataTemplate={Bind.oneWay(() => this.viewModel.comboBox.selectionViewTemplate)}/>
        </PopupPage>);
    }
}
