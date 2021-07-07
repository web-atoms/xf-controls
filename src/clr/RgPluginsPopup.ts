//tslint:disable
import XNode from "@web-atoms/core/dist/core/XNode";
import XF from "./XF";

declare var bridge: any;

namespace RgPluginsPopup {
    export declare class PopupPage extends XF.ContentPage {
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
