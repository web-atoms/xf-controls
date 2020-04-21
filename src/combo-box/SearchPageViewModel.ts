import { Watch } from "@web-atoms/core/dist/view-model/AtomViewModel";
import { AtomWindowViewModel } from "@web-atoms/core/dist/view-model/AtomWindowViewModel";
import AtomXFComboBox, { ItemSearchFunction } from "./AtomXFComboBox";

export default class SearchPageViewModel extends AtomWindowViewModel  {

    public selectedItem: any;

    public comboBox: AtomXFComboBox;

    public init(): Promise<void> {
        (this.comboBox as any).windowViewModel = this;
        return super.init();
    }

    @Watch
    public items(): any {
        const items = this.comboBox.items;
        const s = this.comboBox.search;
        const st = this.comboBox.searchText;
        if (s && st) {
            return this.filtered(items, s, st);
        }
        return items;
    }

    private filtered(items: any[], search: ItemSearchFunction, searchText: string) {
        if (Array.isArray(search)) {
            const old = search as string[];
            search = (item, st: string) => {
                for (const iterator of old) {
                    const f = item[iterator] ;
                    if (!f) { continue; }
                    const sf = f.toString() as string;
                    if (sf.toLocaleLowerCase().indexOf(st) !== -1) {
                        return true;
                    }
                }
                return false;
            };
        }
        return items.filter((item) => (search as any)(item, searchText.toLocaleLowerCase()));
    }

}
