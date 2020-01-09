//tslint:disable
import XNode from "@web-atoms/core/dist/core/XNode";

export interface IAtomView {
    dataTemplate?: any;
}

export interface IAtomViewConstructor {
    (a?: Partial<IAtomView>, node?: XNode): XNode;
    dataTemplate: (a?: any, ... nodes: XNode[]) => XNode;
}

export const AtomView: IAtomViewConstructor = XNode.prepare("WebAtoms.AtomView;WebAtoms") as any;

AtomView.dataTemplate = XNode.prepare("WebAtoms.AtomView:DataTemplate;WebAtoms", true, true);