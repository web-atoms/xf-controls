// tslint:disable
            import { AtomXFControl } from "web-atoms-core/dist/xf/controls/AtomXFControl";
                

        import SearchPageViewModel from "./view-models/SearchPageViewModel";

        export default class Root extends AtomXFControl {

                protected create(): void {
                    super.create();

                    this.element = this.createControl("Rg.Plugins.Popup.Pages.PopupPage");

                    

                    this.loadXaml(`	<pages:PopupPage xmlns:pages="clr-namespace:Rg.Plugins.Popup.Pages;assembly=Rg.Plugins.Popup" xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml" xmlns="http://xamarin.com/schemas/2014/forms" xmlns:wa="clr-namespace:WebAtoms;assembly=WebAtoms" x:Name="e3">
	  
	  <Grid>
	    
	    <Grid.RowDefinitions>
	      
	      <RowDefinition Height="Auto"/>
	      
	      <RowDefinition/>
	      
	    </Grid.RowDefinitions>
	    
	    <Entry x:Name="e1"/>
	    
	    <ListView Grid.Row="1" x:Name="e2">
	      
	      
	    </ListView>
	    
	  </Grid>
	  
	</pages:PopupPage>`);

                    
            const e1 = this.find("e1");
            
            this.bind(e1, "Text",  [["viewModel","comboBox","searchText"]], true  );

            this.runAfterInit( () =>
            this.setLocalValue(e1, "IsVisible",  (((this.viewModel) ? this.viewModel.comboBox : undefined) ? this.viewModel.comboBox.searchEnabled : undefined) ) );


            const e2 = this.find("e2");
            
            this.setTemplate(e2, "ItemTemplate", () => new (Root_e2_Creator(this))(this.app));
            

            this.bind(e2, "ItemsSource",  [["viewModel","comboBox","items"]], false , (v1) => (v1) );


            const e3 = this.find("e3");
            
                this.setLocalValue(e3, "viewModel",  this.resolve(SearchPageViewModel) );

            this.bind(e3, "Title",  [["viewModel","title"]], false , (v1) => (v1) );

                }
            }

            
// template
function Root_e2_Creator(__creator: any): any {
    return class Root_e2 extends AtomXFControl {

                protected create(): void {
                    super.create();

                    this.element = this.createControl("WebAtoms.AtomView");

                    

                    this.loadXaml(`	<wa:AtomView xmlns:pages="clr-namespace:Rg.Plugins.Popup.Pages;assembly=Rg.Plugins.Popup" xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml" xmlns="http://xamarin.com/schemas/2014/forms" xmlns:wa="clr-namespace:WebAtoms;assembly=WebAtoms" x:Name="e1"></wa:AtomView>`);

                    
            const e1 = this.find("e1");
            
                this.setPrimitiveValue(e1, "DataTemplate",  this.viewModel.comboBox.itemTemplate );

            this.runAfterInit( () =>
            this.setLocalValue(e1, "eventTapGesture",  () => this.viewModel.close((this.data)) ) );

                }
            }

            
        ;
}
        