//tslint:disable
import XNode from "@web-atoms/core/dist/core/XNode";
import { IListView, IToolbarItem } from "./XF";
import Bind from "@web-atoms/core/dist/core/Bind";

export interface IAtomView {
    dataTemplate?: any;
    [key: string]: any;
}

export interface IAtomViewConstructor {
    (a?: Partial<IAtomView>, node?: XNode): XNode;
    DataTemplate: (a?: any, ... nodes: XNode[]) => XNode;
    EmptyDataTemplate: (a?: any, ... nodes: XNode[]) => XNode;
}

export const AtomView: IAtomViewConstructor = XNode.prepare("WebAtoms.Controls.AtomView;WebAtoms.XF") as any;

AtomView.DataTemplate = XNode.prepare("WebAtoms.Controls.AtomView:DataTemplate;WebAtoms.XF", true, true);
AtomView.EmptyDataTemplate = XNode.prepare("WebAtoms.Controls.AtomView:EmptyDataTemplate;WebAtoms.XF", true, true);


export interface IAtomToolbarItem extends IToolbarItem {
    [key: string]: any;
}

export interface IAtomToolbarItemConstructor {
    (a?: Partial<IAtomToolbarItem>, node?: XNode): XNode;
    IconImageSource?: ( a: any, ... nodes: XNode[]) => XNode;
//     dataTemplate: (a?: any, ... nodes: XNode[]) => XNode;
}

export const AtomToolbarItem: IAtomToolbarItemConstructor = XNode.prepare("WebAtoms.Controls.AtomToolbarItem;WebAtoms.XF") as any;
AtomToolbarItem.IconImageSource = XNode.prepare("Xamarin.Forms.ToolbarItem:IconImageSource;Xamarin.Forms.Core", true, false);

// AtomView.dataTemplate = XNode.prepare("WebAtoms.Controls.AtomView:DataTemplate;WebAtoms.XF", true, true);
export interface IAtomListView extends IListView {
    [key: string]: any;
}

export interface IAtomListViewConstructor {
    (a?: Partial<IAtomListView>, node?: XNode): XNode;
    ItemTemplate: (a?: any, ... nodes: XNode[]) => XNode;
}

export const AtomListView: IAtomListViewConstructor = XNode.prepare("WebAtoms.Controls.AtomListView;WebAtoms.XF") as any;

AtomListView.ItemTemplate = XNode.prepare("WebAtoms.Controls.AtomListView:ItemTemplate;WebAtoms.XF", true, true);

const GroupBy = {
    ItemsSource:
        (n: any) => ({ "WebAtoms.Controls.GroupBy:ItemsSource;WebAtoms": n})
};

export interface IAtomRepeater extends IListView {

}

export interface IAtomRepeaterConstructor {
    (a?: Partial<IAtomRepeater>, node?: XNode): XNode;
    ItemTemplate: (a?: any, ... nodes: XNode[]) => XNode;
}

export const AtomRepeater: IAtomRepeaterConstructor = XNode.prepare("WebAtoms.Controls.AtomRepeater;WebAtoms.XF") as any;
AtomRepeater.ItemTemplate = XNode.prepare("WebAtoms.Controls.AtomRepeater:ItemTemplate;WebAtoms.XF", true, true);

export interface IAtomForm {
    submitCommand?: any;
    [key: string]: any;
}

export interface IAtomFormConstructor {
    (a?: Partial<IAtomForm>, ... node: XNode[]): XNode;
    FieldStyle: (a?: any, ... node: XNode[]) => XNode;
}

const AtomForm: IAtomFormConstructor = XNode.prepare("WebAtoms.Controls.AtomForm;WebAtoms.XF") as any;
AtomForm.FieldStyle = XNode.prepare("WebAtoms.Controls.AtomForm:FieldStyle;WebAtoms.XF", true, true);


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
    Templates: (a?: any, ... node: XNode[]) => XNode;
    TemplateSelector: (a?: any, ... node: XNode[]) => XNode;
}

const AtomTemplateSelector: IAtomTemplateSelectorConstructor = XNode.prepare("WebAtoms.Controls.AtomTemplateSelector;WebAtoms.XF") as any;
AtomTemplateSelector.Templates = XNode.prepare("WebAtoms.Controls.AtomTemplateSelector:Templates;WebAtoms.XF", true, true);
AtomTemplateSelector.TemplateSelector = XNode.prepare("WebAtoms.Controls.AtomTemplateSelector:TemplateSelector;WebAtoms.XF", true, false);

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
