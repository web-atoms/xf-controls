import Bind from "@web-atoms/core/dist/core/Bind";
import XNode from "@web-atoms/core/dist/core/XNode";
import { AtomViewModel } from "@web-atoms/core/dist/view-model/AtomViewModel";
import { AtomXFControl } from "@web-atoms/core/dist/xf/controls/AtomXFControl";
import XF from "../../clr/XF";
import AtomXFContentPage from "../../pages/AtomXFContentPage";
import AtomXFComboBox from "../AtomXFComboBox";

export default class ComboBoxTest extends AtomXFContentPage {

    public movies;

    public selectedMovie;

    public create() {

        this.movies = [
            { label: "Movie 1", value: 1 },
            { label: "Movie 2", value: 2 }
        ];

        this.selectedMovie = this.movies[1].value;

        this.render(<XF.ContentPage>
            <XF.StackLayout>
                <AtomXFComboBox
                    items={this.movies}
                    value={Bind.twoWays(() => this.selectedMovie)}
                    />
            </XF.StackLayout>
        </XF.ContentPage>);
    }

}
