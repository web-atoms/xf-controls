//tslint:disable
import XNode, { RootObject, NodeFactory, AttachedNode } from "@web-atoms/core/dist/core/XNode";
import XF from "./XF";

const NSAtoms = "WebAtoms.Controls";
const NSAssembly = "WebAtoms.XF";

declare var bridge: any;

declare class AtomView extends XF.ContentView {
    public static dataTemplate: NodeFactory;
    public static emptyDataTemplate: NodeFactory;

    public dataTemplate: any;
    public emptyDataTemplate: any;
}

declare class AtomViewCell extends XF.ViewCell {
    public static dataTemplate: NodeFactory;
    public static command: NodeFactory;

    public dataTemplate: any;
    public command: any;
}


declare class AtomToolbarItem extends XF.ToolbarItem {

    public isVisible: boolean;

}

declare class GroupBy {
    public static itemsSource: NodeFactory;
};

declare class Markdown {
    public static text: AttachedNode;
}

declare class AtomRepeater extends XF.ListView {

}

declare class AtomForm extends XF.ContentView {

    public static fieldStyle: NodeFactory;

    submitCommand: any;
    fieldStyle: any;
}


declare class AtomField extends XF.ContentView {

    public label?: string;
    public isRequired?: boolean;
    public labelColor?: string;
    public error?: string;
    public errorColor?: string;
    public errorBackgroundColor?: string;
}

declare class AtomTemplateSelector extends RootObject {
    public static templates: NodeFactory;
    public static templateSelector: NodeFactory;
    selector: (data: any) => number;
}

const WA = {
    get AtomRepeater(): typeof AtomRepeater { return this._AtomRepeater || (this._AtomRepeater = bridge.getClass(`${NSAtoms}.AtomRepeater, ${NSAssembly}`)); },
    get AtomToolbarItem(): typeof AtomToolbarItem { return this._AtomToolbarItem || (this._AtomToolbarItem = bridge.getClass(`${NSAtoms}.AtomToolbarItem, ${NSAssembly}`)); },
    get AtomView(): typeof  AtomView { return this._AtomView || (this._AtomView = bridge.getClass(`${NSAtoms}.AtomView, ${NSAssembly}`)); },
    get AtomViewCell(): typeof  AtomViewCell { return this._AtomViewCell || (this._AtomViewCell = bridge.getClass(`${NSAtoms}.AtomViewCell, ${NSAssembly}`)); },
    get AtomForm(): typeof AtomForm { return this._AtomForm || (this._AtomForm = bridge.getClass(`${NSAtoms}.AtomForm, ${NSAssembly}`)); },
    get AtomField(): typeof AtomField { return this._AtomField || (this._AtomField = bridge.getClass(`${NSAtoms}.AtomField, ${NSAssembly}`)) ; },
    get AtomTemplateSelector(): typeof AtomTemplateSelector { return this._AtomTemplateSelector || (this._AtomTemplateSelector = bridge.getClass(`${NSAtoms}.AtomTemplateSelector, ${NSAssembly}`)) ; },
    get GroupBy(): typeof GroupBy { return this._GroupBy || (this._GroupBy = bridge.getClass(`${NSAtoms}.GroupBy, ${NSAssembly}`)); },
    get Markdown(): typeof Markdown { return this._Markdown || (this._Markdown = bridge.getClass(`${NSAtoms}.Markdown, ${NSAssembly}`)); }
};

export default WA;
