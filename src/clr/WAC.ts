//tslint:disable
import Bind from "@web-atoms/core/dist/core/Bind";
import { ColorItem } from "@web-atoms/core/dist/core/Colors";
import XNode, { RootObject, NodeFactory, AttachedNode } from "@web-atoms/core/dist/core/XNode";
import RgPluginsPopup from "./RgPluginsPopup";
import XF from "./XF";

const NSAtoms = "WebAtoms.XF.Controls";
const NSAssembly = "WebAtoms.XF.Controls";

declare var bridge: any;

namespace WAC {
    export declare class AtomEntry extends XF.Entry {

    }
}

function create(name: string) {
    return {
        configurable: true,
        enumerable: true,
        get() {
            const t = bridge.getClass(`${NSAtoms}.${name}, ${NSAssembly}`); 
            Object.defineProperty(this, name, {
                enumerable: true,
                configurable: true,
                writable: true,
                value: t
            });
            return t;
        }
    };
}

Object.defineProperties( (WAC as any), {
    AtomEntry: create("AtomEntry")
        // get AtomToolbarItem(): typeof AtomToolbarItem { return this._AtomToolbarItem || (this._AtomToolbarItem = bridge.getClass(`${NSAtoms}.AtomToolbarItem, ${NSAssembly}`)); },
        // get AtomView(): typeof  AtomView { return this._AtomView || (this._AtomView = bridge.getClass(`${NSAtoms}.AtomView, ${NSAssembly}`)); },
        // get AtomViewCell(): typeof  AtomViewCell { return this._AtomViewCell || (this._AtomViewCell = bridge.getClass(`${NSAtoms}.AtomViewCell, ${NSAssembly}`)); },
        // get AtomForm(): typeof AtomForm { return this._AtomForm || (this._AtomForm = bridge.getClass(`${NSAtoms}.AtomForm, ${NSAssembly}`)); },
        // get AtomField(): typeof AtomField { return this._AtomField || (this._AtomField = bridge.getClass(`${NSAtoms}.AtomField, ${NSAssembly}`)) ; },
        // get AtomTemplateSelector(): typeof AtomTemplateSelector { return this._AtomTemplateSelector || (this._AtomTemplateSelector = bridge.getClass(`${NSAtoms}.AtomTemplateSelector, ${NSAssembly}`)) ; },
        // get GroupBy(): typeof GroupBy { return this._GroupBy || (this._GroupBy = bridge.getClass(`${NSAtoms}.GroupBy, ${NSAssembly}`)); },
        // get Markdown(): typeof Markdown { return this._Markdown || (this._Markdown = bridge.getClass(`${NSAtoms}.Markdown, ${NSAssembly}`)); }
    }
);

export default WAC;
