import { AtomWindowViewModel } from "@web-atoms/core/dist/view-model/AtomWindowViewModel";
import AtomComboBox from "./AtomComboBox";

export default class SearchPageViewModel extends AtomWindowViewModel  {

    public selectedItem: any;

    public comboBox: AtomComboBox;

    public init(): Promise<void> {
        (this.comboBox as any).windowViewModel = this;
        return super.init();
    }

}
