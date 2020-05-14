import Colors from "@web-atoms/core/dist/core/Colors";
import { AtomStyle } from "@web-atoms/core/dist/web/styles/AtomStyle";
import { IStyleDeclaration } from "@web-atoms/core/dist/web/styles/IStyleDeclaration";

export default class AtomCalendarStyle extends AtomStyle {

    public get root(): IStyleDeclaration {
        return {
            columnGap: "0",
            rowGap: "0",
            subclasses: {
                " grid": {
                    columnGap: "0",
                    rowGap: "0"
                },
                " .week-days": {
                    backgroundColor: Colors.orange,
                    padding: 10,
                    margin: 0,
                    color: Colors.white,
                    textAlign: "center"
                },
                " .date-css": {
                    margin: 0,
                    padding: 10,
                    backgroundColor: "initial",
                    color: "initial",
                    textAlign: "center"
                },
                " .is-today": {
                    backgroundColor: Colors.lightGreen
                },
                " .is-other-month": {
                    backgroundColor: Colors.lightGray
                },
                " .is-weekend": {
                    color: Colors.gray
                },
                " .is-selected": {
                    backgroundColor: Colors.blue,
                    color: Colors.white
                }
            }
        };
    }
}
