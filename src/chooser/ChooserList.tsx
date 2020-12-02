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
                <XF.Grid>
                    <XF.Grid.rowDefinitions>
                        <XF.RowDefinition height="auto"/>
                        <XF.RowDefinition height="*"/>
                        <XF.RowDefinition height="auto"/>
                    </XF.Grid.rowDefinitions>
                    <XF.Grid.columnDefinitions>
                        <XF.ColumnDefinition width="*"/>
                        <XF.ColumnDefinition width="*"/>
                    </XF.Grid.columnDefinitions>
                <XF.SearchBar
                    { ... XF.Grid.columnSpan(2) }
                    isVisible={Bind.oneWay(() => this.viewModel.comboBox.showSearch)}
                    text={Bind.twoWays(() => this.viewModel.comboBox.searchText)}
                    />
                <XF.ListView
                    { ... XF.Grid.row(1) }
                    { ... XF.Grid.columnSpan(2) }
                    cachingStrategy="RecycleElement"
                    itemsSource={Bind.oneWay(() => this.viewModel.selectableList.items)}
                    { ... WA.AtomViewCell.dataTemplate(Bind.oneWay(() => this.viewModel.comboBox.itemTemplate)) }
                    />
                <XF.Button
                    { ... XF.Grid.row(2) }
                    { ... XF.Grid.column(0) }
                    backgroundColor="#0abf53"
                    textColor="#ffffff"
                    heightRequest={40}
                    margin={5}
                    text="Select" command={() =>
                    this.viewModel.close(this.viewModel.selectableList.value)}/>
                <XF.Button
                    { ... XF.Grid.row(2) }
                    { ... XF.Grid.column(1) }
                    backgroundColor="#ff0000"
                    textColor="#ffffff"
                    heightRequest={40}
                    margin={5}
                    text="Cancel" command={() => this.viewModel.cancel()}/>
            </XF.Grid>
        </XF.ContentPage>);
    }

}
