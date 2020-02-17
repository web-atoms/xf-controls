//tslint:disable
import XNode, { RootObject } from "@web-atoms/core/dist/core/XNode";
import XF from "./XF";
import Bind from "@web-atoms/core/dist/core/Bind";

const NSAtoms = XNode.namespace("WebAtoms.Controls", "WebAtoms.XF");

@NSAtoms("AtomView")
class AtomView extends RootObject {
    public static dataTemplate = XNode.template();
    public static emptyDataTemplate = XNode.template();
}

@NSAtoms("AtomToolbrItem")
class AtomToolbarItem extends XF.ToolbarItem {

    public static iconImageSource = XNode.template();

    public iconImageSource: string;
}

@NSAtoms("GroupBy")
class GroupBy {
    public static itemsSource = XNode.attached()
};

@NSAtoms("AtomRepeater")
class AtomRepeater extends XF.ListView {

}

@NSAtoms("AtomForm")
class AtomForm extends RootObject {

    public static fieldStyle = XNode.attached();

    submitCommand: any;
    fieldStyle: any;
}


@NSAtoms("AtomField")
class AtomField extends RootObject {

    public label?: string | Bind;
    public isRequired?: boolean | Bind;
    public labelColor?: string | Bind;
    public error?: string | Bind;
    public errorColor?: string | Bind;
    public errorBackgroundColor?: string | Bind;
}

@NSAtoms("AtomTemplateSelector")
class AtomTemplateSelector extends RootObject {
    public static templates = XNode.template();
    public static templateSelector = XNode.attached();
    selector: (data: any) => number | Bind;
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
