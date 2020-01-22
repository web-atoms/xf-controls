import Bind from "@web-atoms/core/dist/core/Bind";
import XNode from "@web-atoms/core/dist/core/XNode";
import { AtomViewModel } from "@web-atoms/core/dist/view-model/AtomViewModel";
import { AtomXFControl } from "@web-atoms/core/dist/xf/controls/AtomXFControl";
import XF from "../../controls/XF";
import AtomContentPage from "../../pages/AtomContentPage";
import AtomComboBox from "../AtomComboBox";

export default class ComboBoxTest extends AtomContentPage {

    public movies;

    public selectedMovie;

    public create() {

        this.movies = [
            { label: "Movie 1" },
            { label: "Movie 2" }
        ];

        this.selectedMovie = this.movies[0];

        this.render(<XF.ContentPage>
            <XF.StackLayout>
                <AtomComboBox
                    items={this.movies}
                    selectedItem={Bind.twoWays(() => this.selectedMovie)}
                    />
            </XF.StackLayout>
        </XF.ContentPage>);
    }

}
