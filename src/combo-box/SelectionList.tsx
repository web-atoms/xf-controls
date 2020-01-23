import Bind from "@web-atoms/core/dist/core/Bind";
import XNode from "@web-atoms/core/dist/core/XNode";
import { AtomXFControl } from "@web-atoms/core/dist/xf/controls/AtomXFControl";
import AtomContentView from "../AtomContentView";
import XF from "../controls/XF";
import SearchPageViewModel from "./SearchPageViewModel";

export default class SelectionList extends AtomContentView {

    public viewModel: SearchPageViewModel;

    public create() {
        this.render(
        <XF.ContentPage>
                <XF.Grid>

                <XF.Grid.RowDefinitions>
                    <XF.RowDefinition height="Auto"/>
                    <XF.RowDefinition/>
                </XF.Grid.RowDefinitions>
                <XF.SearchBar
                    isVisible={Bind.oneWay(() => this.viewModel.comboBox.showSearch)}
                    text={Bind.twoWays(() => this.viewModel.comboBox.searchText)}
                    />
                <XF.CollectionView
                    { ... XF.Grid.Row(1) }
                    itemsSource={Bind.oneWay(() => this.viewModel.comboBox.items)}
                    selectionMode="Single"
                    selectedItem={Bind.twoWays(() => this.viewModel.selectedItem)}
                    eventSelectionChanged={Bind.event(() => this.viewModel.close(this.viewModel.selectedItem) )}
                    itemTemplate={Bind.oneWay(() => this.viewModel.comboBox.itemTemplate)}>
                </XF.CollectionView>
            </XF.Grid>
        </XF.ContentPage>);
    }

}
