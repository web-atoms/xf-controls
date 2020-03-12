import Bind from "@web-atoms/core/dist/core/Bind";
import XNode from "@web-atoms/core/dist/core/XNode";
import { AtomXFControl } from "@web-atoms/core/dist/xf/controls/AtomXFControl";
import AtomContentView from "../AtomContentView";
import XF from "../clr/XF";
import SearchPageViewModel from "./SearchPageViewModel";

export default class SelectionList extends AtomContentView {

    public viewModel: SearchPageViewModel;

    public create() {
        this.render(
        <XF.ContentPage>
                <XF.Grid>

                <XF.Grid.rowDefinitions>
                    <XF.RowDefinition height="Auto"/>
                    <XF.RowDefinition/>
                </XF.Grid.rowDefinitions>
                <XF.SearchBar
                    isVisible={Bind.oneWay(() => this.viewModel.comboBox.showSearch)}
                    text={Bind.twoWays(() => this.viewModel.comboBox.searchText)}
                    />
                <XF.CollectionView
                    { ... XF.Grid.row(1) }
                    itemTemplate={Bind.oneWay(() => this.viewModel.comboBox.itemTemplate)}
                    itemsSource={Bind.oneWay(() => this.viewModel.comboBox.items)}
                    selectionMode="Single"
                    selectedItem={Bind.twoWays(() => this.viewModel.selectedItem)}
                    eventSelectionChanged={Bind.event(() => {
                        // tslint:disable-next-line: no-console
                        console.log(`Selection event`);
                        setTimeout(() => {
                            this.viewModel.close(this.viewModel.selectedItem);
                        }, 250);
                    })}>
                </XF.CollectionView>
            </XF.Grid>
        </XF.ContentPage>);
    }

}
