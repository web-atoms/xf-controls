//tslint:disable
import XNode, { RootObject } from "@web-atoms/core/dist/core/XNode";
import XF, { IListView, IToolbarItem } from "./XF";
import Bind from "@web-atoms/core/dist/core/Bind";

const NSAtoms = XNode.namespace("WebAtoms.Controls", "WebAtoms.XF");

@NSAtoms("AtomView")
class AtomView extends RootObject {
    public static dataTemplate = XNode.template(XF.DataTemplate);
}

export interface IAtomView {
    dataTemplate?: any;
    [key: string]: any;
}

export interface IAtomViewConstructor {
    (a?: Partial<IAtomView>, node?: XNode): XNode;
    dataTemplate: (a?: any, ... nodes: XNode[]) => XNode;
    emptyDataTemplate: (a?: any, ... nodes: XNode[]) => XNode;
}

export const AtomView: IAtomViewConstructor = XNode.prepare("WebAtoms.Controls.AtomView;WebAtoms.XF") as any;

AtomView.dataTemplate = XNode.prepare("WebAtoms.Controls.AtomView:DataTemplate;WebAtoms.XF", true, true);
AtomView.emptyDataTemplate = XNode.prepare("WebAtoms.Controls.AtomView:EmptyDataTemplate;WebAtoms.XF", true, true);


export interface IAtomToolbarItem extends IToolbarItem {
    [key: string]: any;
}

export interface IAtomToolbarItemConstructor {
    (a?: Partial<IAtomToolbarItem>, node?: XNode): XNode;
    iconImageSource?: ( a: any, ... nodes: XNode[]) => XNode;
//     dataTemplate: (a?: any, ... nodes: XNode[]) => XNode;
}

export const AtomToolbarItem: IAtomToolbarItemConstructor = XNode.prepare("WebAtoms.Controls.AtomToolbarItem;WebAtoms.XF") as any;
AtomToolbarItem.iconImageSource = XNode.prepare("Xamarin.Forms.ToolbarItem:IconImageSource;Xamarin.Forms.Core", true, false);

// AtomView.dataTemplate = XNode.prepare("WebAtoms.Controls.AtomView:DataTemplate;WebAtoms.XF", true, true);
export interface IAtomListView extends IListView {
    [key: string]: any;
}

export interface IAtomListViewConstructor {
    (a?: Partial<IAtomListView>, node?: XNode): XNode;
    itemTemplate: (a?: any, ... nodes: XNode[]) => XNode;
}

export const AtomListView: IAtomListViewConstructor = XNode.prepare("WebAtoms.Controls.AtomListView;WebAtoms.XF") as any;

AtomListView.itemTemplate = XNode.prepare("WebAtoms.Controls.AtomListView:ItemTemplate;WebAtoms.XF", true, true);

const GroupBy = {
    itemsSource: XNode.attached("WebAtoms.Controls.GroupBy:ItemsSource;WebAtoms")
};

export interface IAtomRepeater extends IListView {

}

export interface IAtomRepeaterConstructor {
    (a?: Partial<IAtomRepeater>, node?: XNode): XNode;
    itemTemplate: (a?: any, ... nodes: XNode[]) => XNode;
}

export const AtomRepeater: IAtomRepeaterConstructor = XNode.prepare("WebAtoms.Controls.AtomRepeater;WebAtoms.XF") as any;
AtomRepeater.itemTemplate = XNode.prepare("WebAtoms.Controls.AtomRepeater:ItemTemplate;WebAtoms.XF", true, true);

export interface IAtomForm {
    submitCommand?: any;
    [key: string]: any;
}

export interface IAtomFormConstructor {
    (a?: Partial<IAtomForm>, ... node: XNode[]): XNode;
    fieldStyle: (a?: any, ... node: XNode[]) => XNode;
}

const AtomForm: IAtomFormConstructor = XNode.prepare("WebAtoms.Controls.AtomForm;WebAtoms.XF") as any;
AtomForm.fieldStyle = XNode.prepare("WebAtoms.Controls.AtomForm:FieldStyle;WebAtoms.XF", true, true);


export interface IAtomField {
    label?: string | Bind;
    isRequired?: boolean | Bind;
    labelColor?: string | Bind;
    error?: string | Bind;
    errorColor?: string | Bind;
    errorBackgroundColor?: string | Bind;
    [key: string]: any;
}

export interface IAtomFieldConstructor {
    (a?: Partial<IAtomField>, node?: XNode): XNode;
}

const AtomField: IAtomFieldConstructor = XNode.prepare("WebAtoms.Controls.AtomField;WebAtoms.XF") as any;

export interface IAtomTemplateSelector {
    selector: (data: any) => number | Bind;
}

export interface IAtomTemplateSelectorConstructor {
    (a?: Partial<IAtomTemplateSelector>, ... node: XNode[]): XNode;
    templates: (a?: any, ... node: XNode[]) => XNode;
    templateSelector: (a?: any, ... node: XNode[]) => XNode;
}

const AtomTemplateSelector: IAtomTemplateSelectorConstructor = XNode.prepare("WebAtoms.Controls.AtomTemplateSelector;WebAtoms.XF") as any;
AtomTemplateSelector.templates = XNode.prepare("WebAtoms.Controls.AtomTemplateSelector:Templates;WebAtoms.XF", true, true);
AtomTemplateSelector.templateSelector = XNode.prepare("WebAtoms.Controls.AtomTemplateSelector:TemplateSelector;WebAtoms.XF", true, false);

const WA = {
    AtomListView,
    AtomRepeater,
    AtomToolbarItem,
    AtomView,
    AtomForm,
    AtomField,
    AtomTemplateSelector,
    GroupBy
};

export default WA;
