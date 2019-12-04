import { AtomWindowViewModel } from "@web-atoms/core/dist/view-model/AtomWindowViewModel";

export default class SearchPageViewModel extends AtomWindowViewModel  {

    public comboBox: any;

    public init(): Promise<void> {
        this.comboBox.windowViewModel = this;
        return super.init();
    }

}
