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
    public static templateSelector: AttachedNode;
    selector: (data: any) => number;
}

const WA = {
    AtomRepeater: bridge.getClass(`${NSAtoms}.AtomRepeater;${NSAssembly}`) as typeof AtomRepeater,
    AtomToolbarItem: bridge.getClass(`${NSAtoms}.AtomToolbarItem;${NSAssembly}`) as typeof AtomToolbarItem,
    AtomView: bridge.getClass(`${NSAtoms}.AtomView;${NSAssembly}`) as typeof AtomView,
    AtomForm: bridge.getClass(`${NSAtoms}.AtomForm;${NSAssembly}`) as typeof AtomForm,
    AtomField: bridge.getClass(`${NSAtoms}.AtomField;${NSAssembly}`) as typeof AtomField,
    AtomTemplateSelector: bridge.getClass(`${NSAtoms}.AtomTemplateSelector;${NSAssembly}`) as typeof AtomTemplateSelector,
    GroupBy: bridge.getClass(`${NSAtoms}.GroupBy;${NSAssembly}`) as typeof GroupBy,
    Markdown: bridge.getClass(`${NSAtoms}.Markdown;${NSAssembly}`) as typeof Markdown,
};

export default WA;
