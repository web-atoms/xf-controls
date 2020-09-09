import Bind from "@web-atoms/core/dist/core/Bind";
import XNode from "@web-atoms/core/dist/core/XNode";
import { AtomXFControl } from "@web-atoms/core/dist/xf/controls/AtomXFControl";
import AtomContentView from "../AtomContentView";
import WA from "../clr/WA";
import XF from "../clr/XF";

export default class ChooserList extends AtomContentView {

    public create() {
        this.render(
        <XF.ContentPage
            styleClass={Bind.oneWay(() => this.viewModel.comboBox.controlStyle.name)}>
                <XF.Grid rowDefinitions="auto,*,auto">

                <XF.SearchBar
                    isVisible={Bind.oneWay(() => this.viewModel.comboBox.showSearch)}
                    text={Bind.twoWays(() => this.viewModel.comboBox.searchText)}
                    />
                <XF.ListView
                    { ... XF.Grid.row(1) }
                    cachingStrategy="RecycleElement"
                    itemsSource={Bind.oneWay(() => this.viewModel.selectableList.items)}>
                    <XF.ListView.itemTemplate>
                        <XF.DataTemplate>
                            <XF.ViewCell>
                                <WA.AtomView
                                    dataTemplate={Bind.oneWay(() => this.viewModel.comboBox.itemTemplate)}>
                                    <WA.AtomView.gestureRecognizers>
                                        <XF.TapGestureRecognizer
                                            command={Bind.event((x) => {
                                                x.data.selected = !x.data.selected;
                                            })}/>
                                    </WA.AtomView.gestureRecognizers>
                                </WA.AtomView>
                            </XF.ViewCell>
                        </XF.DataTemplate>
                    </XF.ListView.itemTemplate>
                </XF.ListView>
                <XF.StackLayout
                    { ... XF.Grid.row(2) }
                    orientation="Horizontal">
                    <XF.Button text="Cancel" command={() => this.viewModel.close(this.viewModel.selectableList.value)}/>
                    <XF.Button text="Cancel" command={() => this.viewModel.cancel()}/>
                </XF.StackLayout>
            </XF.Grid>
        </XF.ContentPage>);
    }

}
