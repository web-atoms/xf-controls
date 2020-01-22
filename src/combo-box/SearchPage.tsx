import Bind from "@web-atoms/core/dist/core/Bind";
import XNode from "@web-atoms/core/dist/core/XNode";
import { AtomXFControl } from "@web-atoms/core/dist/xf/controls/AtomXFControl";
import { PopupPage } from "../controls/RgPluginsPopup";
// tslint:disable-next-line: max-line-length
import XF from "../controls/XF";
import SearchPageViewModel from "./SearchPageViewModel";

export default class SearchPage extends AtomXFControl {

	public viewModel: SearchPageViewModel;

	public create() {

		this.viewModel = this.resolve(SearchPageViewModel);

		this.render(<PopupPage>
			<XF.Grid
				margin="10"
				backgroundColor="White">
				<XF.Grid.RowDefinitions>
					<XF.RowDefinition height="Auto"/>
					<XF.RowDefinition/>
				</XF.Grid.RowDefinitions>
				<XF.Grid.ColumnDefinitions>
					<XF.ColumnDefinition/>
					<XF.ColumnDefinition width="Auto"/>
				</XF.Grid.ColumnDefinitions>
				<XF.Entry
					text={Bind.twoWays(() => this.viewModel.comboBox.searchText)}
					isVisible={Bind.oneWay(() => this.viewModel.comboBox.showSearch)}/>
				<XF.ListView
					{ ... XF.Grid.Row(1) }
					{ ...  XF.Grid.ColumnSpan(2) }
					cachingStrategy="RecycleElement"
					itemsSource={Bind.oneTime(() => this.viewModel.comboBox.items)}
					itemTemplate={Bind.oneTime(() => this.viewModel.comboBox.itemTemplate)}/>
			</XF.Grid>
		</PopupPage>);
	}

}
