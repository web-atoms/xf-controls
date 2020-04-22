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
        <XF.ContentPage
            styleClass={Bind.oneWay(() => this.viewModel.comboBox.controlStyle.root.className)}>
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
                    itemSizingStrategy="MeasureAllItems"
                    itemTemplate={Bind.oneWay(() => this.viewModel.comboBox.itemTemplate)}
                    itemsSource={Bind.oneWay(() => this.viewModel.items )}
                    selectionMode="Single"
                    selectedItem={Bind.twoWays(() => this.viewModel.selectedItem)}
                    eventSelectionChanged={Bind.event(() => {
                        setTimeout(() => {
                            this.viewModel.close(this.viewModel.selectedItem);
                        }, 250);
                    })}>
                    {/* <XF.CollectionView.itemTemplate>
                        <XF.Label
                            text={Bind.oneTime((x) => x.data.label)}
                            />
                    </XF.CollectionView.itemTemplate> */}
                </XF.CollectionView>
                {/* <XF.ListView
                    { ... XF.Grid.row(1) }
                    itemsSource={Bind.oneWay(() => this.viewModel.comboBox.items)}
                    >
                    <XF.ListView.itemTemplate>
                        <XF.DataTemplate>
                            <XF.ViewCell>
                                <WA.AtomView
                                    dataTemplate={Bind.oneWay(() => this.viewModel.comboBox.itemTemplate)}
                                    />
                            </XF.ViewCell>
                        </XF.DataTemplate>
                    </XF.ListView.itemTemplate>
                </XF.ListView> */}
            </XF.Grid>
        </XF.ContentPage>);
    }

}
