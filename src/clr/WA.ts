//tslint:disable
import XNode, { RootObject } from "@web-atoms/core/dist/core/XNode";
import XF from "./XF";

const NSAtoms = XNode.namespace("WebAtoms.Controls", "WebAtoms.XF");

@NSAtoms("AtomView")
class AtomView extends XF.ContentView {
    public static dataTemplate = XNode.template();
    public static emptyDataTemplate = XNode.template();

    public dataTemplate: any;
    public emptyDataTemplate: any;
}

@NSAtoms("AtomToolbarItem")
class AtomToolbarItem extends XF.ToolbarItem {

    public isVisible: boolean;

}

@NSAtoms("GroupBy")
class GroupBy {
    public static itemsSource = XNode.attached()
};

@NSAtoms("AtomRepeater")
class AtomRepeater extends XF.ListView {

}

@NSAtoms("AtomForm")
class AtomForm extends XF.ContentView {

    public static fieldStyle = XNode.template();

    submitCommand: any;
    fieldStyle: any;
}


@NSAtoms("AtomField")
class AtomField extends XF.ContentView {

    public label?: string;
    public isRequired?: boolean;
    public labelColor?: string;
    public error?: string;
    public errorColor?: string;
    public errorBackgroundColor?: string;
}

@NSAtoms("AtomTemplateSelector")
class AtomTemplateSelector extends RootObject {
    public static templates = XNode.template();
    public static templateSelector = XNode.attached();
    selector: (data: any) => number;
}

const WA = {
    AtomRepeater,
    AtomToolbarItem,
    AtomView,
    AtomForm,
    AtomField,
    AtomTemplateSelector,
    GroupBy
};

export default WA;
