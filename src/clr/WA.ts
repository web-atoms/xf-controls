//tslint:disable
import XNode, { RootObject, NodeFactory, AttachedNode } from "@web-atoms/core/dist/core/XNode";
import XF from "./XF";

const NSAtoms = "WebAtoms.Controls";
const NSAssembly = "WebAtoms.XF";

declare var bridge: any;

namespace WA {
    export declare class AtomView extends XF.ContentView {
        public static dataTemplate: NodeFactory;
        public static emptyDataTemplate: NodeFactory;
    
        public dataTemplate: any;
        public emptyDataTemplate: any;
    }
    
    export declare class AtomViewCell extends XF.ViewCell {
        public static dataTemplate: NodeFactory;
        public static command: NodeFactory;
    
        public dataTemplate: any;
        public command: any;
    }
    
    
    export declare class AtomToolbarItem extends XF.ToolbarItem {
    
        public isVisible: boolean;
    
    }
    
    export declare class GroupBy {
        public static itemsSource: NodeFactory;
    };
    
    export declare class Markdown {
        public static text: AttachedNode;
    }
    
    export declare class AtomRepeater extends XF.ListView {
    
    }
    
    export declare class AtomForm extends XF.ContentView {
    
        public static fieldStyle: NodeFactory;
    
        submitCommand: any;
        fieldStyle: any;
    }
    
    
    export declare class AtomField extends XF.ContentView {
    
        public label?: string;
        public isRequired?: boolean;
        public labelColor?: string;
        public error?: string;
        public errorColor?: string;
        public errorBackgroundColor?: string;
    }
    
    export declare class AtomTemplateSelector extends RootObject {
        public static templates: NodeFactory;
        public static templateSelector: NodeFactory;
        selector: (data: any) => number;
    }
};

function create(name: string) {
    return {
        get() {
            const t = bridge.getClass(`${NSAtoms}.${name}, ${NSAssembly}`); 
            Object.defineProperty(this, name, {
                value: t
            });
            return t;
        }
    };
}

Object.defineProperties( (WA as any), {
    AtomRepeater: create("AtomRepeater"),
    AtomToolbarItem: create("AtomToolbarItem"),
    AtomView: create("AtomView"),
    AtomViewCell: create("AtomViewCell"),
    AtomForm: create("AtomForm"),
    AtomField: create("AtomField"),
    GroupBy: create("GroupBy"),
    Markdown: create("Markdown"),
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

export default WA;
