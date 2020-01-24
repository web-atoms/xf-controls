import { AtomWindowViewModel } from "@web-atoms/core/dist/view-model/AtomWindowViewModel";
import AtomXFComboBox from "./AtomXFComboBox";

export default class SearchPageViewModel extends AtomWindowViewModel  {

    public selectedItem: any;

    public comboBox: AtomXFComboBox;

    public init(): Promise<void> {
        (this.comboBox as any).windowViewModel = this;
        return super.init();
    }

}
