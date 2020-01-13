//tslint:disable
import XNode from "@web-atoms/core/dist/core/XNode";
import { IListView } from "./XF";
import Bind from "@web-atoms/core/dist/core/Bind";

export interface IAtomView {
    dataTemplate?: any;
    [key: string]: any;
}

export interface IAtomViewConstructor {
    (a?: Partial<IAtomView>, node?: XNode): XNode;
    DataTemplate: (a?: any, ... nodes: XNode[]) => XNode;
}

export const AtomView: IAtomViewConstructor = XNode.prepare("WebAtoms.Controls.AtomView;WebAtoms") as any;

AtomView.DataTemplate = XNode.prepare("WebAtoms.Controls.AtomView:DataTemplate;WebAtoms", true, true);


export interface IAtomToolbarItem {
    [key: string]: any;
}

export interface IAtomToolbarItemConstructor {
    (a?: Partial<IAtomToolbarItem>, node?: XNode): XNode;
//     dataTemplate: (a?: any, ... nodes: XNode[]) => XNode;
}

export const AtomToolbarItem: IAtomToolbarItemConstructor = XNode.prepare("WebAtoms.Controls.AtomToolbarItem;WebAtoms") as any;

// AtomView.dataTemplate = XNode.prepare("WebAtoms.Controls.AtomView:DataTemplate;WebAtoms", true, true);
export interface IAtomListView extends IListView {
    [key: string]: any;
}

export interface IAtomListViewConstructor {
    (a?: Partial<IAtomListView>, node?: XNode): XNode;
    ItemTemplate: (a?: any, ... nodes: XNode[]) => XNode;
}

export const AtomListView: IAtomListViewConstructor = XNode.prepare("WebAtoms.Controls.AtomListView;WebAtoms") as any;

AtomListView.ItemTemplate = XNode.prepare("WebAtoms.Controls.AtomListView:ItemTemplate;WebAtoms", true, true);

export interface IAtomRepeater extends IListView {

}

export interface IAtomRepeaterConstructor {
    (a?: Partial<IAtomRepeater>, node?: XNode): XNode;
    ItemTemplate: (a?: any, ... nodes: XNode[]) => XNode;
}

export const AtomRepeater: IAtomRepeaterConstructor = XNode.prepare("WebAtoms.Controls.AtomRepeater;WebAtoms") as any;
AtomRepeater.ItemTemplate = XNode.prepare("WebAtoms.Controls.AtomRepeater:ItemTemplate;WebAtoms", true, true);

export interface IAtomForm {
    submitCommand?: any;
}

export interface IAtomFormConstructor {
    (a?: Partial<IAtomForm>, ... node: XNode[]): XNode;
    FieldStyle: (a?: any, ... node: XNode[]) => XNode;
}

const AtomForm: IAtomFormConstructor = XNode.prepare("WebAtoms.Controls.AtomForm;WebAtoms") as any;
AtomForm.FieldStyle = XNode.prepare("WebAtoms.Controls.AtomForm:FieldStyle;WebAtoms", true, true);


export interface IAtomField {
    label?: string | Bind;
    required?: boolean | Bind;
    labelColor?: string | Bind;
    error?: string | Bind;
    errorColor?: string | Bind;
    errorBackgroundColor?: string | Bind;
}

export interface IAtomFieldConstructor {
    (a?: Partial<IAtomField>, node?: XNode): XNode;
}

const AtomField: IAtomFieldConstructor = XNode.prepare("WebAtoms.Controls.AtomField;WebAtoms") as any;


const WA = {
    AtomListView,
    AtomRepeater,
    AtomToolbarItem,
    AtomView,
    AtomForm,
    AtomField
};

export default WA;
