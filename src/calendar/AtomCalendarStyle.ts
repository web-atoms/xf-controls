import Colors from "@web-atoms/core/dist/core/Colors";
import { AtomStyle } from "@web-atoms/core/dist/web/styles/AtomStyle";
import { IStyleDeclaration } from "@web-atoms/core/dist/web/styles/IStyleDeclaration";

export default class AtomCalendarStyle extends AtomStyle {

    public get root(): IStyleDeclaration {
        return {
            // backgroundColor: Colors.lightYellow,
            subclasses: {
                " .date-css": {
                    margin: 0,
                    padding: 5,
                    subclasses: {
                        ".is-today": {
                            backgroundColor: Colors.lightGreen
                        },
                        ".is-other-month": {
                            backgroundColor: Colors.lightGray
                        },
                        ".is-weekend": {
                            color: Colors.gray
                        },
                        ".is-selected": {
                            backgroundColor: Colors.blue,
                            color: Colors.white
                        }
                    }
                }
            }
        };
    }
}
