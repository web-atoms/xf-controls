import Bind from "@web-atoms/core/dist/core/Bind";
import XNode from "@web-atoms/core/dist/core/XNode";
import { AtomXFControl } from "@web-atoms/core/dist/xf/controls/AtomXFControl";
import RgPluginsPopup from "../clr/RgPluginsPopup";
// tslint:disable-next-line: max-line-length
import XF from "../clr/XF";
import SearchPageViewModel from "./SearchPageViewModel";

export default class SearchPage extends AtomXFControl {

	public viewModel: SearchPageViewModel;

	public create() {

		this.viewModel = this.resolve(SearchPageViewModel);

		this.render(<RgPluginsPopup.PopupPage>
			<XF.Grid
				margin="10"
				backgroundColor="White">
				<XF.Grid.rowDefinitions>
					<XF.RowDefinition height="Auto"/>
					<XF.RowDefinition/>
				</XF.Grid.rowDefinitions>
				<XF.Grid.columnDefinitions>
					<XF.ColumnDefinition/>
					<XF.ColumnDefinition width="Auto"/>
				</XF.Grid.columnDefinitions>
				<XF.Entry
					text={Bind.twoWays(() => this.viewModel.comboBox.searchText)}
					isVisible={Bind.oneWay(() => this.viewModel.comboBox.showSearch)}/>
				<XF.ListView
					{ ... XF.Grid.row(1) }
					{ ...  XF.Grid.columnSpan(2) }
					cachingStrategy="RecycleElement"
					itemsSource={Bind.oneTime(() => this.viewModel.comboBox.items)}
					itemTemplate={Bind.oneTime(() => this.viewModel.comboBox.itemTemplate)}/>
			</XF.Grid>
		</RgPluginsPopup.PopupPage>);
	}

}
