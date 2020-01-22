import XNode from "@web-atoms/core/dist/core/XNode";
import { IContentPage } from "./XF";


export interface IPopupPage extends IContentPage {
    [key: string]: any;
}

export type IPopupPageConstructor = (a?: Partial<IPopupPage>, node?: XNode) => XNode;

export const PopupPage: IPopupPageConstructor = XNode.prepare("PopupPage|clr-namespace:Rg.Plugins.Popup.Pages;assembly=Rg.Plugins.Popup") as any;
