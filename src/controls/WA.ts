//tslint:disable
import XNode from "@web-atoms/core/dist/core/XNode";
import { IListView } from "./XF";

export interface IAtomView {
    dataTemplate?: any;
    [key: string]: any;
}

export interface IAtomViewConstructor {
    (a?: Partial<IAtomView>, node?: XNode): XNode;
    DataTemplate: (a?: any, ... nodes: XNode[]) => XNode;
}

export const AtomView: IAtomViewConstructor = XNode.prepare("WebAtoms.AtomView;WebAtoms") as any;

AtomView.DataTemplate = XNode.prepare("WebAtoms.AtomView:DataTemplate;WebAtoms", true, true);


export interface IAtomToolbarItem {
    [key: string]: any;
}

export interface IAtomToolbarItemConstructor {
    (a?: Partial<IAtomToolbarItem>, node?: XNode): XNode;
//     dataTemplate: (a?: any, ... nodes: XNode[]) => XNode;
}

export const AtomToolbarItem: IAtomToolbarItemConstructor = XNode.prepare("WebAtoms.AtomToolbarItem;WebAtoms") as any;

// AtomView.dataTemplate = XNode.prepare("WebAtoms.AtomView:DataTemplate;WebAtoms", true, true);
export interface IAtomListView extends IListView {
    [key: string]: any;
}

export interface IAtomListViewConstructor {
    (a?: Partial<IAtomListView>, node?: XNode): XNode;
    ItemTemplate: (a?: any, ... nodes: XNode[]) => XNode;
}

export const AtomListView: IAtomListViewConstructor = XNode.prepare("WebAtoms.AtomListView;WebAtoms") as any;

AtomListView.ItemTemplate = XNode.prepare("WebAtoms.AtomListView:ItemTemplate;WebAtoms", true, true);

export interface IAtomRepeater extends IListView {

}

export interface IAtomRepeaterConstructor {
    (a?: Partial<IAtomRepeater>, node?: XNode): XNode;
    ItemTemplate: (a?: any, ... nodes: XNode[]) => XNode;
}

export const AtomRepeater: IAtomRepeaterConstructor = XNode.prepare("WebAtoms.AtomRepeater;WebAtoms") as any;
AtomRepeater.ItemTemplate = XNode.prepare("WebAtoms.AtomRepeater:ItemTemplate;WebAtoms", true, true);

const WA = {
    AtomListView,
    AtomRepeater,
    AtomToolbarItem,
    AtomView
};

export default WA;
