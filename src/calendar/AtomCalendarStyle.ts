import Colors from "@web-atoms/core/dist/core/Colors";
import { AtomStyle } from "@web-atoms/core/dist/web/styles/AtomStyle";
import { IStyleDeclaration } from "@web-atoms/core/dist/web/styles/IStyleDeclaration";

export default class AtomCalendarStyle extends AtomStyle {

    public get root(): IStyleDeclaration {
        return {
            subclasses: {
                " Label": {
                    subclasses: {
                        ".is-today": {
                            backgroundColor: Colors.lightGreen
                        },
                        ".is-other-month": {
                            backgroundColor: Colors.lightGray
                        },
                        ".is-weekend": {
                            color: Colors.darkGray
                        },
                        ".is-selected": {
                            backgroundColor: Colors.blue
                        }
                    }
                }
            }
        };
    }
}
