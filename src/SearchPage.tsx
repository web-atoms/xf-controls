import Bind from "@web-atoms/core/dist/core/xnode/Bind";
import XNode from "@web-atoms/core/dist/core/xnode/XNode";
import { AtomXFControl } from "@web-atoms/core/dist/xf/controls/AtomXFControl";
import { PopupPage } from "./controls/RgPluginsPopup";
// tslint:disable-next-line: max-line-length
import { ColumnDefinition, Entry, Grid, GridColumnSpan, GridRow, ListView, RowDefinition, ColumnDefinitionCollection, RowDefinitionCollection } from "./controls/XF";
import SearchPageViewModel from "./view-models/SearchPageViewModel";

export default class SearchPage extends AtomXFControl {

	public viewModel: SearchPageViewModel;

	public create() {

		this.viewModel = this.resolve(SearchPageViewModel);

		this.render(<PopupPage>
			<Grid
				margin="10"
				backgroundColor="White"
				rowDefinitions={
				<RowDefinitionCollection>
					<RowDefinition height="Auto"/>
					<RowDefinition/>
				</RowDefinitionCollection>}
				columnDefinitions={
					<ColumnDefinitionCollection>
					<ColumnDefinition/>
					<ColumnDefinition width="Auto"/>
					</ColumnDefinitionCollection>}
				>
				<Entry
					text={Bind.twoWays(() => this.viewModel.comboBox.searchText)}
					isVisible={Bind.oneWay(() => this.viewModel.comboBox.searchEnabled)}/>
				<ListView
					{ ... GridRow(1), GridColumnSpan(2) }
					cachingStrategy="RecycleElement"
					itemsSource={Bind.oneTime(() => this.viewModel.comboBox.items)}
					itemTemplate={Bind.oneTime(() => this.viewModel.comboBox.itemTemplate)}/>
			</Grid>
		</PopupPage>);
	}

}
