//tslint:disable
import Bind from "@web-atoms/core/dist/core/Bind";
import XNode from "@web-atoms/core/dist/core/XNode";
import XF from "./XF";

declare var bridge: any;

namespace RgPluginsPopup {
    export declare class PopupPage extends XF.ContentPage {

        public closeWhenBackgroundIsClicked: boolean;

        public backgroundClickedCommand: any;

        public backgroundClickedCommandParameter: any;

        public keyboardOffset: number | Bind;

        public hasKeyboardOffset: boolean | Bind;

        public backgroundInputTransparent: boolean | Bind;

        public androidTalkbackAccessibilityWorkaround: boolean | Bind;

        public systemPaddingSides: "Left" | "Top" | "Right" | "Bottom" | "All" | Bind;

        public systemPadding: any;

        public animation: any;

        public hasSystemPadding: boolean | Bind;

        public isAnimationEnabled: boolean | Bind;

        public isAnimating: boolean | Bind;
    }
};

const assemblyName = `Rg.Plugins.Popup`;
let ns = ``;
function create(name: string, ns: string) {
    return {
        configurable: true,
        enumerable: true,
        get() {
            const t = bridge.getClass(`${ns}.${name}, ${assemblyName}`); 
            Object.defineProperty(this, name, {
                configurable: true,
                enumerable: true,
                writable: true,
                value: t
            });
            return t;
        }
    };
}

Object.defineProperties((RgPluginsPopup as any), {
    PopupPage: create("PopupPage", "Rg.Plugins.Popup.Pages")
});

export default RgPluginsPopup;
