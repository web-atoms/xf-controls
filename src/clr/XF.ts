//tslint:disable
import XNode, { RootObject, NodeFactory, AttachedNode } from "@web-atoms/core/dist/core/XNode";
import Bind from "@web-atoms/core/dist/core/Bind";
import { ColorItem } from "@web-atoms/core/dist/core/Colors";

declare var bridge: any;
const assemblyName = `Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null`;
let ns = ``;
function create(name: string, ns: string) {
    return {
        get() {
            const t = bridge.getClass(`${ns}.${name}, ${assemblyName}`); 
            Object.defineProperty(this, name, {
                value: t
            });
            return t;
        }
    };
}

namespace XF {
    export declare class AbsoluteLayout extends XF.Layout$Generic {
        public static autoSize: number | null | Bind;
        public static layoutBounds: AttachedNode;
        public static layoutFlags: AttachedNode;
        public children: RootObject;
    }
    export declare class ActivityIndicator extends XF.View {
        public static isRunning: AttachedNode;
        public static color: AttachedNode;
        public color: XF.Color;
        public isRunning: boolean | null | Bind;
    }
    export declare class AdaptiveTrigger extends XF.StateTriggerBase {
        public static minWindowHeight: AttachedNode;
        public static minWindowWidth: AttachedNode;
        public minWindowHeight: number | null | Bind;
        public minWindowWidth: number | null | Bind;
    }
    export declare class Application extends XF.Element {
        public static logWarningsToApplicationOutput: boolean | null | Bind;
        public static current: XF.Application;
        public dispatcher: RootObject;
        public appLinks: RootObject;
        public mainPage: XF.Page;
        public static mainPage: AttachedNode;
        public properties: RootObject /*System.Collections.Generic.IDictionary`2[[System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e],[System.Object, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]]*/;
        public navigationProxy: RootObject;
        public panGestureId: number | null | Bind;
        public static resources: AttachedNode;
        public userAppTheme: "Unspecified" | "Light" | "Dark" | string | number | null | undefined | Bind;
        public requestedTheme: "Unspecified" | "Light" | "Dark" | string | number | null | undefined | Bind;
    }
    export declare class AppLinkEntry extends XF.Element {
        public static title: AttachedNode;
        public static description: AttachedNode;
        public static thumbnail: AttachedNode;
        public static appLinkUri: AttachedNode;
        public static isLinkActive: AttachedNode;
        public appLinkUri: RootObject /*System.Uri*/;
        public description: string | null | Bind;
        public isLinkActive: boolean | null | Bind;
        public keyValues: RootObject /*System.Collections.Generic.IDictionary`2[[System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e],[System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]]*/;
        public thumbnail: XF.ImageSource;
        public title: string | null | Bind;
    }
    export declare class AutomationProperties extends RootObject {
        public static helpText: AttachedNode;
        public static isInAccessibleTree: AttachedNode;
        public static labeledBy: AttachedNode;
        public static name: AttachedNode;
    }
    export declare class BaseMenuItem extends XF.Element {
    }
    export declare class BindableLayout extends RootObject {
        public static itemsSource: AttachedNode;
        public static itemTemplate: AttachedNode;
        public static itemTemplateSelector: AttachedNode;
        public static emptyView: AttachedNode;
        public static emptyViewTemplate: AttachedNode;
    }
    export declare class BindableObject extends RootObject {
        public static inheritedBindingContext: AttachedNode;
        public static bindingContext: AttachedNode;
        public dispatcher: RootObject;
        public bindingContext: RootObject /*System.Object*/;
    }
    export declare class BoxView extends XF.View {
        public static color: AttachedNode;
        public static cornerRadius: AttachedNode;
        public color: XF.Color;
        public cornerRadius: RootObject;
    }
    export declare class Brush extends XF.Element {
        public static default: XF.Brush;
        public static aliceBlue: XF.SolidColorBrush;
        public static antiqueWhite: XF.SolidColorBrush;
        public static aqua: XF.SolidColorBrush;
        public static aquamarine: XF.SolidColorBrush;
        public static azure: XF.SolidColorBrush;
        public static beige: XF.SolidColorBrush;
        public static bisque: XF.SolidColorBrush;
        public static black: XF.SolidColorBrush;
        public static blanchedAlmond: XF.SolidColorBrush;
        public static blue: XF.SolidColorBrush;
        public static blueViolet: XF.SolidColorBrush;
        public static brown: XF.SolidColorBrush;
        public static burlyWood: XF.SolidColorBrush;
        public static cadetBlue: XF.SolidColorBrush;
        public static chartreuse: XF.SolidColorBrush;
        public static chocolate: XF.SolidColorBrush;
        public static coral: XF.SolidColorBrush;
        public static cornflowerBlue: XF.SolidColorBrush;
        public static cornsilk: XF.SolidColorBrush;
        public static crimson: XF.SolidColorBrush;
        public static cyan: XF.SolidColorBrush;
        public static darkBlue: XF.SolidColorBrush;
        public static darkCyan: XF.SolidColorBrush;
        public static darkGoldenrod: XF.SolidColorBrush;
        public static darkGray: XF.SolidColorBrush;
        public static darkGreen: XF.SolidColorBrush;
        public static darkKhaki: XF.SolidColorBrush;
        public static darkMagenta: XF.SolidColorBrush;
        public static darkOliveGreen: XF.SolidColorBrush;
        public static darkOrange: XF.SolidColorBrush;
        public static darkOrchid: XF.SolidColorBrush;
        public static darkRed: XF.SolidColorBrush;
        public static darkSalmon: XF.SolidColorBrush;
        public static darkSeaGreen: XF.SolidColorBrush;
        public static darkSlateBlue: XF.SolidColorBrush;
        public static darkSlateGray: XF.SolidColorBrush;
        public static darkTurquoise: XF.SolidColorBrush;
        public static darkViolet: XF.SolidColorBrush;
        public static deepPink: XF.SolidColorBrush;
        public static deepSkyBlue: XF.SolidColorBrush;
        public static dimGray: XF.SolidColorBrush;
        public static dodgerBlue: XF.SolidColorBrush;
        public static firebrick: XF.SolidColorBrush;
        public static floralWhite: XF.SolidColorBrush;
        public static forestGreen: XF.SolidColorBrush;
        public static fuchsia: XF.SolidColorBrush;
        public static gainsboro: XF.SolidColorBrush;
        public static ghostWhite: XF.SolidColorBrush;
        public static gold: XF.SolidColorBrush;
        public static goldenrod: XF.SolidColorBrush;
        public static gray: XF.SolidColorBrush;
        public static green: XF.SolidColorBrush;
        public static greenYellow: XF.SolidColorBrush;
        public static honeydew: XF.SolidColorBrush;
        public static hotPink: XF.SolidColorBrush;
        public static indianRed: XF.SolidColorBrush;
        public static indigo: XF.SolidColorBrush;
        public static ivory: XF.SolidColorBrush;
        public static khaki: XF.SolidColorBrush;
        public static lavender: XF.SolidColorBrush;
        public static lavenderBlush: XF.SolidColorBrush;
        public static lawnGreen: XF.SolidColorBrush;
        public static lemonChiffon: XF.SolidColorBrush;
        public static lightBlue: XF.SolidColorBrush;
        public static lightCoral: XF.SolidColorBrush;
        public static lightCyan: XF.SolidColorBrush;
        public static lightGoldenrodYellow: XF.SolidColorBrush;
        public static lightGray: XF.SolidColorBrush;
        public static lightGreen: XF.SolidColorBrush;
        public static lightPink: XF.SolidColorBrush;
        public static lightSalmon: XF.SolidColorBrush;
        public static lightSeaGreen: XF.SolidColorBrush;
        public static lightSkyBlue: XF.SolidColorBrush;
        public static lightSlateGray: XF.SolidColorBrush;
        public static lightSteelBlue: XF.SolidColorBrush;
        public static lightYellow: XF.SolidColorBrush;
        public static lime: XF.SolidColorBrush;
        public static limeGreen: XF.SolidColorBrush;
        public static linen: XF.SolidColorBrush;
        public static magenta: XF.SolidColorBrush;
        public static maroon: XF.SolidColorBrush;
        public static mediumAquamarine: XF.SolidColorBrush;
        public static mediumBlue: XF.SolidColorBrush;
        public static mediumOrchid: XF.SolidColorBrush;
        public static mediumPurple: XF.SolidColorBrush;
        public static mediumSeaGreen: XF.SolidColorBrush;
        public static mediumSlateBlue: XF.SolidColorBrush;
        public static mediumSpringGreen: XF.SolidColorBrush;
        public static mediumTurquoise: XF.SolidColorBrush;
        public static mediumVioletRed: XF.SolidColorBrush;
        public static midnightBlue: XF.SolidColorBrush;
        public static mintCream: XF.SolidColorBrush;
        public static mistyRose: XF.SolidColorBrush;
        public static moccasin: XF.SolidColorBrush;
        public static navajoWhite: XF.SolidColorBrush;
        public static navy: XF.SolidColorBrush;
        public static oldLace: XF.SolidColorBrush;
        public static olive: XF.SolidColorBrush;
        public static oliveDrab: XF.SolidColorBrush;
        public static orange: XF.SolidColorBrush;
        public static orangeRed: XF.SolidColorBrush;
        public static orchid: XF.SolidColorBrush;
        public static paleGoldenrod: XF.SolidColorBrush;
        public static paleGreen: XF.SolidColorBrush;
        public static paleTurquoise: XF.SolidColorBrush;
        public static paleVioletRed: XF.SolidColorBrush;
        public static papayaWhip: XF.SolidColorBrush;
        public static peachPuff: XF.SolidColorBrush;
        public static peru: XF.SolidColorBrush;
        public static pink: XF.SolidColorBrush;
        public static plum: XF.SolidColorBrush;
        public static powderBlue: XF.SolidColorBrush;
        public static purple: XF.SolidColorBrush;
        public static red: XF.SolidColorBrush;
        public static rosyBrown: XF.SolidColorBrush;
        public static royalBlue: XF.SolidColorBrush;
        public static saddleBrown: XF.SolidColorBrush;
        public static salmon: XF.SolidColorBrush;
        public static sandyBrown: XF.SolidColorBrush;
        public static seaGreen: XF.SolidColorBrush;
        public static seaShell: XF.SolidColorBrush;
        public static sienna: XF.SolidColorBrush;
        public static silver: XF.SolidColorBrush;
        public static skyBlue: XF.SolidColorBrush;
        public static slateBlue: XF.SolidColorBrush;
        public static slateGray: XF.SolidColorBrush;
        public static snow: XF.SolidColorBrush;
        public static springGreen: XF.SolidColorBrush;
        public static steelBlue: XF.SolidColorBrush;
        public static tan: XF.SolidColorBrush;
        public static teal: XF.SolidColorBrush;
        public static thistle: XF.SolidColorBrush;
        public static tomato: XF.SolidColorBrush;
        public static transparent: XF.SolidColorBrush;
        public static turquoise: XF.SolidColorBrush;
        public static violet: XF.SolidColorBrush;
        public static wheat: XF.SolidColorBrush;
        public static white: XF.SolidColorBrush;
        public static whiteSmoke: XF.SolidColorBrush;
        public static yellow: XF.SolidColorBrush;
        public static yellowGreen: XF.SolidColorBrush;
        public isEmpty: boolean | null | Bind;
    }
    export declare class Button extends XF.View {
        public static command: AttachedNode;
        public static commandParameter: AttachedNode;
        public static contentLayout: AttachedNode;
        public static text: AttachedNode;
        public static textColor: AttachedNode;
        public static characterSpacing: AttachedNode;
        public static font: AttachedNode;
        public static fontFamily: AttachedNode;
        public static fontSize: AttachedNode;
        public static textTransform: AttachedNode;
        public static fontAttributes: AttachedNode;
        public static borderWidth: AttachedNode;
        public static borderColor: AttachedNode;
        public static borderRadius: AttachedNode;
        public static cornerRadius: AttachedNode;
        public static imageSource: AttachedNode;
        public static image: AttachedNode;
        public static padding: AttachedNode;
        public static isPressed: AttachedNode;
        public padding: RootObject;
        public borderColor: XF.Color;
        public borderRadius: number | null | Bind;
        public cornerRadius: number | null | Bind;
        public borderWidth: number | null | Bind;
        public contentLayout: RootObject;
        public command: RootObject /*System.Windows.Input.ICommand*/;
        public commandParameter: RootObject /*System.Object*/;
        public font: RootObject;
        public imageSource: XF.ImageSource;
        public image: XF.FileImageSource;
        public text: string | null | Bind;
        public textColor: XF.Color;
        public characterSpacing: number | null | Bind;
        public isPressed: boolean | null | Bind;
        public fontAttributes: "None" | "Bold" | "Italic" | string | number | null | undefined | Bind;
        public fontFamily: string | null | Bind;
        public fontSize: number | null | Bind;
        public textTransform: "None" | "Default" | "Lowercase" | "Uppercase" | string | number | null | undefined | Bind;
    }
    export declare class CarouselPage extends XF.MultiPage$Generic {
    }
    export declare class Cell extends XF.Element {
        public static isEnabled: AttachedNode;
        public static defaultCellHeight: number | null | Bind;
        public static contextActions: AttachedNode;
        public hasContextActions: boolean | null | Bind;
        public isContextActionsLegacyModeEnabled: boolean | null | Bind;
        public height: number | null | Bind;
        public isEnabled: boolean | null | Bind;
        public renderHeight: number | null | Bind;
    }
    export declare class EntryCell extends XF.Cell {
        public static text: AttachedNode;
        public static label: AttachedNode;
        public static placeholder: AttachedNode;
        public static labelColor: AttachedNode;
        public static keyboard: AttachedNode;
        public static horizontalTextAlignment: AttachedNode;
        public static verticalTextAlignment: AttachedNode;
        public static xAlign: AttachedNode;
        public horizontalTextAlignment: "Start" | "Center" | "End" | string | number | null | undefined | Bind;
        public verticalTextAlignment: "Start" | "Center" | "End" | string | number | null | undefined | Bind;
        public keyboard: RootObject;
        public label: string | null | Bind;
        public labelColor: XF.Color;
        public placeholder: string | null | Bind;
        public text: string | null | Bind;
        public xAlign: "Start" | "Center" | "End" | string | number | null | undefined | Bind;
    }
    export declare class ImageCell extends XF.TextCell {
        public static imageSource: AttachedNode;
        public imageSource: XF.ImageSource;
    }
    export declare class SwitchCell extends XF.Cell {
        public static on: AttachedNode;
        public static text: AttachedNode;
        public static onColor: AttachedNode;
        public onColor: XF.Color;
        public on: boolean | null | Bind;
        public text: string | null | Bind;
    }
    export declare class TextCell extends XF.Cell {
        public static command: AttachedNode;
        public static commandParameter: AttachedNode;
        public static text: AttachedNode;
        public static detail: AttachedNode;
        public static textColor: AttachedNode;
        public static detailColor: AttachedNode;
        public command: RootObject /*System.Windows.Input.ICommand*/;
        public commandParameter: RootObject /*System.Object*/;
        public detail: string | null | Bind;
        public detailColor: XF.Color;
        public text: string | null | Bind;
        public textColor: XF.Color;
    }
    export declare class ViewCell extends XF.Cell {
        public view: XF.View;
        public static view: AttachedNode;
    }
    export declare class CheckBox extends XF.View {
        public static isChecked: AttachedNode;
        public static color: AttachedNode;
        public static isCheckedVisualState: string | null | Bind;
        public color: XF.Color;
        public isChecked: boolean | null | Bind;
    }
    export declare class ClickGestureRecognizer extends XF.GestureRecognizer {
        public static command: AttachedNode;
        public static commandParameter: AttachedNode;
        public static numberOfClicksRequired: AttachedNode;
        public static buttons: AttachedNode;
        public command: RootObject /*System.Windows.Input.ICommand*/;
        public commandParameter: RootObject /*System.Object*/;
        public numberOfClicksRequired: number | null | Bind;
        public buttons: "Primary" | "Secondary" | string | number | null | undefined | Bind;
    }
    export declare class Color extends RootObject /*System.ValueType*/ {
        public static default: XF.Color;
        public static accent: XF.Color;
        public static aliceBlue: XF.Color;
        public static antiqueWhite: XF.Color;
        public static aqua: XF.Color;
        public static aquamarine: XF.Color;
        public static azure: XF.Color;
        public static beige: XF.Color;
        public static bisque: XF.Color;
        public static black: XF.Color;
        public static blanchedAlmond: XF.Color;
        public static blue: XF.Color;
        public static blueViolet: XF.Color;
        public static brown: XF.Color;
        public static burlyWood: XF.Color;
        public static cadetBlue: XF.Color;
        public static chartreuse: XF.Color;
        public static chocolate: XF.Color;
        public static coral: XF.Color;
        public static cornflowerBlue: XF.Color;
        public static cornsilk: XF.Color;
        public static crimson: XF.Color;
        public static cyan: XF.Color;
        public static darkBlue: XF.Color;
        public static darkCyan: XF.Color;
        public static darkGoldenrod: XF.Color;
        public static darkGray: XF.Color;
        public static darkGreen: XF.Color;
        public static darkKhaki: XF.Color;
        public static darkMagenta: XF.Color;
        public static darkOliveGreen: XF.Color;
        public static darkOrange: XF.Color;
        public static darkOrchid: XF.Color;
        public static darkRed: XF.Color;
        public static darkSalmon: XF.Color;
        public static darkSeaGreen: XF.Color;
        public static darkSlateBlue: XF.Color;
        public static darkSlateGray: XF.Color;
        public static darkTurquoise: XF.Color;
        public static darkViolet: XF.Color;
        public static deepPink: XF.Color;
        public static deepSkyBlue: XF.Color;
        public static dimGray: XF.Color;
        public static dodgerBlue: XF.Color;
        public static firebrick: XF.Color;
        public static floralWhite: XF.Color;
        public static forestGreen: XF.Color;
        public static fuchsia: XF.Color;
        public static fuschia: XF.Color;
        public static gainsboro: XF.Color;
        public static ghostWhite: XF.Color;
        public static gold: XF.Color;
        public static goldenrod: XF.Color;
        public static gray: XF.Color;
        public static green: XF.Color;
        public static greenYellow: XF.Color;
        public static honeydew: XF.Color;
        public static hotPink: XF.Color;
        public static indianRed: XF.Color;
        public static indigo: XF.Color;
        public static ivory: XF.Color;
        public static khaki: XF.Color;
        public static lavender: XF.Color;
        public static lavenderBlush: XF.Color;
        public static lawnGreen: XF.Color;
        public static lemonChiffon: XF.Color;
        public static lightBlue: XF.Color;
        public static lightCoral: XF.Color;
        public static lightCyan: XF.Color;
        public static lightGoldenrodYellow: XF.Color;
        public static lightGray: XF.Color;
        public static lightGreen: XF.Color;
        public static lightPink: XF.Color;
        public static lightSalmon: XF.Color;
        public static lightSeaGreen: XF.Color;
        public static lightSkyBlue: XF.Color;
        public static lightSlateGray: XF.Color;
        public static lightSteelBlue: XF.Color;
        public static lightYellow: XF.Color;
        public static lime: XF.Color;
        public static limeGreen: XF.Color;
        public static linen: XF.Color;
        public static magenta: XF.Color;
        public static maroon: XF.Color;
        public static mediumAquamarine: XF.Color;
        public static mediumBlue: XF.Color;
        public static mediumOrchid: XF.Color;
        public static mediumPurple: XF.Color;
        public static mediumSeaGreen: XF.Color;
        public static mediumSlateBlue: XF.Color;
        public static mediumSpringGreen: XF.Color;
        public static mediumTurquoise: XF.Color;
        public static mediumVioletRed: XF.Color;
        public static midnightBlue: XF.Color;
        public static mintCream: XF.Color;
        public static mistyRose: XF.Color;
        public static moccasin: XF.Color;
        public static navajoWhite: XF.Color;
        public static navy: XF.Color;
        public static oldLace: XF.Color;
        public static olive: XF.Color;
        public static oliveDrab: XF.Color;
        public static orange: XF.Color;
        public static orangeRed: XF.Color;
        public static orchid: XF.Color;
        public static paleGoldenrod: XF.Color;
        public static paleGreen: XF.Color;
        public static paleTurquoise: XF.Color;
        public static paleVioletRed: XF.Color;
        public static papayaWhip: XF.Color;
        public static peachPuff: XF.Color;
        public static peru: XF.Color;
        public static pink: XF.Color;
        public static plum: XF.Color;
        public static powderBlue: XF.Color;
        public static purple: XF.Color;
        public static red: XF.Color;
        public static rosyBrown: XF.Color;
        public static royalBlue: XF.Color;
        public static saddleBrown: XF.Color;
        public static salmon: XF.Color;
        public static sandyBrown: XF.Color;
        public static seaGreen: XF.Color;
        public static seaShell: XF.Color;
        public static sienna: XF.Color;
        public static silver: XF.Color;
        public static skyBlue: XF.Color;
        public static slateBlue: XF.Color;
        public static slateGray: XF.Color;
        public static snow: XF.Color;
        public static springGreen: XF.Color;
        public static steelBlue: XF.Color;
        public static tan: XF.Color;
        public static teal: XF.Color;
        public static thistle: XF.Color;
        public static tomato: XF.Color;
        public static transparent: XF.Color;
        public static turquoise: XF.Color;
        public static violet: XF.Color;
        public static wheat: XF.Color;
        public static white: XF.Color;
        public static whiteSmoke: XF.Color;
        public static yellow: XF.Color;
        public static yellowGreen: XF.Color;
        public isDefault: boolean | null | Bind;
        public a: number | null | Bind;
        public r: number | null | Bind;
        public g: number | null | Bind;
        public b: number | null | Bind;
        public hue: number | null | Bind;
        public saturation: number | null | Bind;
        public luminosity: number | null | Bind;
    }
    export declare class ColumnDefinition extends XF.BindableObject {
        public static width: AttachedNode;
        public width: RootObject;
    }
    export declare class CompareStateTrigger extends XF.StateTriggerBase {
        public static property: AttachedNode;
        public static value: AttachedNode;
        public property: RootObject /*System.Object*/;
        public value: RootObject /*System.Object*/;
    }
    export declare class CompressedLayout extends RootObject {
        public static isHeadless: AttachedNode;
        public static headlessOffset: AttachedNode;
    }
    export declare class Constraint extends RootObject {
        public static ativeToView: AttachedNode;
    }
    export declare class ContentPage extends XF.TemplatedPage {
        public static content: AttachedNode;
        public content: XF.View;
    }
    export declare class ContentPresenter extends XF.Layout {
        public static content: AttachedNode;
        public content: XF.View;
    }
    export declare class ContentView extends XF.TemplatedView {
        public static content: AttachedNode;
        public content: XF.View;
    }
    export declare class ControlTemplate extends XF.ElementTemplate {
    }
    export declare class DataTemplate extends XF.ElementTemplate {
        public bindings: RootObject /*System.Collections.Generic.IDictionary`2[[Xamarin.Forms.BindableProperty, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null],[Xamarin.Forms.BindingBase, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null]]*/;
        public values: RootObject /*System.Collections.Generic.IDictionary`2[[Xamarin.Forms.BindableProperty, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null],[System.Object, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]]*/;
    }
    export declare class DataTemplateSelector extends XF.DataTemplate {
    }
    export declare class DatePicker extends XF.View {
        public static format: AttachedNode;
        public static date: AttachedNode;
        public static minimumDate: AttachedNode;
        public static maximumDate: AttachedNode;
        public static textColor: AttachedNode;
        public static characterSpacing: AttachedNode;
        public static fontFamily: AttachedNode;
        public static fontSize: AttachedNode;
        public static fontAttributes: AttachedNode;
        public static textTransform: AttachedNode;
        public date: Date | null | Bind;
        public format: string | null | Bind;
        public textTransform: "None" | "Default" | "Lowercase" | "Uppercase" | string | number | null | undefined | Bind;
        public maximumDate: Date | null | Bind;
        public minimumDate: Date | null | Bind;
        public textColor: XF.Color;
        public characterSpacing: number | null | Bind;
        public fontAttributes: "None" | "Bold" | "Italic" | string | number | null | undefined | Bind;
        public fontFamily: string | null | Bind;
        public fontSize: number | null | Bind;
    }
    export declare class DeviceStateTrigger extends XF.StateTriggerBase {
        public static device: AttachedNode;
        public device: string | null | Bind;
    }
    export declare class DragGestureRecognizer extends XF.GestureRecognizer {
        public static canDrag: AttachedNode;
        public static dropCompletedCommand: AttachedNode;
        public static dropCompletedCommandParameter: AttachedNode;
        public static dragStartingCommand: AttachedNode;
        public static dragStartingCommandParameter: AttachedNode;
        public canDrag: boolean | null | Bind;
        public dropCompletedCommand: RootObject /*System.Windows.Input.ICommand*/;
        public dropCompletedCommandParameter: RootObject /*System.Object*/;
        public dragStartingCommand: RootObject /*System.Windows.Input.ICommand*/;
        public dragStartingCommandParameter: RootObject /*System.Object*/;
    }
    export declare class DropGestureRecognizer extends XF.GestureRecognizer {
        public static allowDrop: AttachedNode;
        public static dragOverCommand: AttachedNode;
        public static dragOverCommandParameter: AttachedNode;
        public static dragLeaveCommand: AttachedNode;
        public static dragLeaveCommandParameter: AttachedNode;
        public static dropCommand: AttachedNode;
        public static dropCommandParameter: AttachedNode;
        public allowDrop: boolean | null | Bind;
        public dragOverCommand: RootObject /*System.Windows.Input.ICommand*/;
        public dragOverCommandParameter: RootObject /*System.Object*/;
        public dragLeaveCommand: RootObject /*System.Windows.Input.ICommand*/;
        public dragLeaveCommandParameter: RootObject /*System.Object*/;
        public dropCommand: RootObject /*System.Windows.Input.ICommand*/;
        public dropCommandParameter: RootObject /*System.Object*/;
    }
    export declare class Easing extends RootObject {
        public static linear: XF.Easing;
        public static sinOut: XF.Easing;
        public static sinIn: XF.Easing;
        public static sinInOut: XF.Easing;
        public static cubicIn: XF.Easing;
        public static cubicOut: XF.Easing;
        public static cubicInOut: XF.Easing;
        public static bounceOut: XF.Easing;
        public static bounceIn: XF.Easing;
        public static springIn: XF.Easing;
        public static springOut: XF.Easing;
    }
    export declare class Editor extends XF.InputView {
        public static text: AttachedNode;
        public static fontFamily: AttachedNode;
        public static fontSize: AttachedNode;
        public static fontAttributes: AttachedNode;
        public static textColor: AttachedNode;
        public static characterSpacing: AttachedNode;
        public static placeholder: AttachedNode;
        public static placeholderColor: AttachedNode;
        public static isTextPredictionEnabled: AttachedNode;
        public static autoSize: AttachedNode;
        public autoSize: "Disabled" | "TextChanges" | string | number | null | undefined | Bind;
        public fontAttributes: "None" | "Bold" | "Italic" | string | number | null | undefined | Bind;
        public isTextPredictionEnabled: boolean | null | Bind;
        public fontFamily: string | null | Bind;
        public fontSize: number | null | Bind;
    }
    export declare class Effect extends RootObject {
        public element: XF.Element;
        public static element: AttachedNode;
        public isAttached: boolean | null | Bind;
        public resolveId: string | null | Bind;
    }
    export declare class Element extends XF.BindableObject {
        public static menu: AttachedNode;
        public static automationId: AttachedNode;
        public static classId: AttachedNode;
        public automationId: string | null | Bind;
        public classId: string | null | Bind;
        public static effects: AttachedNode;
        public id: RootObject /*System.Guid*/;
        public parentView: XF.VisualElement;
        public static parentView: AttachedNode;
        public styleId: string | null | Bind;
        public static logicalChildren: AttachedNode;
        public realParent: XF.Element;
        public static realParent: AttachedNode;
        public parent: XF.Element;
        public static parent: AttachedNode;
        public effectControlProvider: RootObject;
        public platform: RootObject;
    }
    export declare class ElementTemplate extends RootObject {
    }
    export declare class Entry extends XF.InputView {
        public static returnType: AttachedNode;
        public static returnCommand: AttachedNode;
        public static returnCommandParameter: AttachedNode;
        public static placeholder: AttachedNode;
        public static placeholderColor: AttachedNode;
        public static isPassword: AttachedNode;
        public static text: AttachedNode;
        public static textColor: AttachedNode;
        public static characterSpacing: AttachedNode;
        public static horizontalTextAlignment: AttachedNode;
        public static verticalTextAlignment: AttachedNode;
        public static fontFamily: AttachedNode;
        public static fontSize: AttachedNode;
        public static fontAttributes: AttachedNode;
        public static isTextPredictionEnabled: AttachedNode;
        public static cursorPosition: AttachedNode;
        public static selectionLength: AttachedNode;
        public static clearButtonVisibility: AttachedNode;
        public horizontalTextAlignment: "Start" | "Center" | "End" | string | number | null | undefined | Bind;
        public verticalTextAlignment: "Start" | "Center" | "End" | string | number | null | undefined | Bind;
        public isPassword: boolean | null | Bind;
        public fontAttributes: "None" | "Bold" | "Italic" | string | number | null | undefined | Bind;
        public fontFamily: string | null | Bind;
        public fontSize: number | null | Bind;
        public isTextPredictionEnabled: boolean | null | Bind;
        public returnType: "Default" | "Done" | "Go" | "Next" | "Search" | "Send" | string | number | null | undefined | Bind;
        public cursorPosition: number | null | Bind;
        public selectionLength: number | null | Bind;
        public returnCommand: RootObject /*System.Windows.Input.ICommand*/;
        public returnCommandParameter: RootObject /*System.Object*/;
        public clearButtonVisibility: "Never" | "WhileEditing" | string | number | null | undefined | Bind;
    }
    export declare class FileImageSource extends XF.ImageSource {
        public static file: AttachedNode;
        public isEmpty: boolean | null | Bind;
        public file: string | null | Bind;
    }
    export declare class FlexLayout extends XF.Layout$Generic {
        public static order: AttachedNode;
        public static grow: AttachedNode;
        public static shrink: AttachedNode;
        public static alignSelf: AttachedNode;
        public static basis: AttachedNode;
        public static direction: AttachedNode;
        public static justifyContent: AttachedNode;
        public static alignContent: AttachedNode;
        public static alignItems: AttachedNode;
        public static position: AttachedNode;
        public static wrap: AttachedNode;
        public direction: "Row" | "RowReverse" | "Column" | "ColumnReverse" | string | number | null | undefined | Bind;
        public justifyContent: "Center" | "Start" | "End" | "SpaceBetween" | "SpaceAround" | "SpaceEvenly" | string | number | null | undefined | Bind;
        public alignContent: "Stretch" | "Center" | "Start" | "End" | "SpaceBetween" | "SpaceAround" | "SpaceEvenly" | string | number | null | undefined | Bind;
        public alignItems: "Stretch" | "Center" | "Start" | "End" | string | number | null | undefined | Bind;
        public position: "Relative" | "Absolute" | string | number | null | undefined | Bind;
        public wrap: "NoWrap" | "Wrap" | "Reverse" | string | number | null | undefined | Bind;
    }
    export declare class FlyoutPage extends XF.Page {
        public static isGestureEnabled: AttachedNode;
        public static isPresented: AttachedNode;
        public static flyoutLayoutBehavior: AttachedNode;
        public detail: XF.Page;
        public static detail: AttachedNode;
        public isGestureEnabled: boolean | null | Bind;
        public isPresented: boolean | null | Bind;
        public flyout: XF.Page;
        public static flyout: AttachedNode;
        public flyoutLayoutBehavior: "Default" | "SplitOnLandscape" | "Split" | "Popover" | "SplitOnPortrait" | string | number | null | undefined | Bind;
        public canChangeIsPresented: boolean | null | Bind;
        public detailBounds: RootObject;
        public flyoutBounds: RootObject;
        public shouldShowSplitMode: boolean | null | Bind;
    }
    export declare class MasterDetailPage extends XF.FlyoutPage {
        public static masterBehavior: AttachedNode;
        public master: XF.Page;
        public static master: AttachedNode;
        public masterBounds: RootObject;
        public masterBehavior: "Default" | "SplitOnLandscape" | "Split" | "Popover" | "SplitOnPortrait" | string | number | null | undefined | Bind;
    }
    export declare class FontImageSource extends XF.ImageSource {
        public static color: AttachedNode;
        public static fontFamily: AttachedNode;
        public static glyph: AttachedNode;
        public static size: AttachedNode;
        public isEmpty: boolean | null | Bind;
        public color: XF.Color;
        public fontFamily: string | null | Bind;
        public glyph: string | null | Bind;
        public size: number | null | Bind;
    }
    export declare class FormattedString extends XF.Element {
        public static spans: AttachedNode;
    }
    export declare class Frame extends XF.ContentView {
        public static outlineColor: AttachedNode;
        public static borderColor: AttachedNode;
        public static hasShadow: AttachedNode;
        public static cornerRadius: AttachedNode;
        public hasShadow: boolean | null | Bind;
        public outlineColor: XF.Color;
        public borderColor: XF.Color;
        public cornerRadius: number | null | Bind;
    }
    export declare class GestureElement extends XF.Element {
        public static gestureRecognizers: AttachedNode;
    }
    export declare class GestureRecognizer extends XF.Element {
    }
    export declare class GradientBrush extends XF.Brush {
        public static gradientStops: AttachedNode;
    }
    export declare class GradientStop extends XF.Element {
        public static color: AttachedNode;
        public static offset: AttachedNode;
        public color: XF.Color;
        public offset: number | null | Bind;
    }
    export declare class Grid extends XF.Layout$Generic {
        public static column: AttachedNode;
        public static columnSpan: AttachedNode;
        public static row: AttachedNode;
        public static rowSpan: AttachedNode;
        public static rowSpacing: AttachedNode;
        public static columnSpacing: AttachedNode;
        public static columnDefinitions: AttachedNode;
        public static rowDefinitions: AttachedNode;
        public children: RootObject;
        public columnSpacing: number | null | Bind;
        public rowSpacing: number | null | Bind;
    }
    export declare class HtmlWebViewSource extends XF.WebViewSource {
        public static html: AttachedNode;
        public static baseUrl: AttachedNode;
        public baseUrl: string | null | Bind;
        public html: string | null | Bind;
    }
    export declare class Image extends XF.View {
        public static source: AttachedNode;
        public static aspect: AttachedNode;
        public static isOpaque: AttachedNode;
        public static isLoading: AttachedNode;
        public static isAnimationPlaying: AttachedNode;
        public aspect: "AspectFit" | "AspectFill" | "Fill" | string | number | null | undefined | Bind;
        public isLoading: boolean | null | Bind;
        public isOpaque: boolean | null | Bind;
        public isAnimationPlaying: boolean | null | Bind;
        public source: XF.ImageSource;
    }
    export declare class ImageButton extends XF.View {
        public static command: AttachedNode;
        public static commandParameter: AttachedNode;
        public static cornerRadius: AttachedNode;
        public static borderWidth: AttachedNode;
        public static borderColor: AttachedNode;
        public static source: AttachedNode;
        public static aspect: AttachedNode;
        public static isOpaque: AttachedNode;
        public static isLoading: AttachedNode;
        public static isPressed: AttachedNode;
        public static padding: AttachedNode;
        public borderColor: XF.Color;
        public cornerRadius: number | null | Bind;
        public borderWidth: number | null | Bind;
        public aspect: "AspectFit" | "AspectFill" | "Fill" | string | number | null | undefined | Bind;
        public isLoading: boolean | null | Bind;
        public isPressed: boolean | null | Bind;
        public isOpaque: boolean | null | Bind;
        public command: RootObject /*System.Windows.Input.ICommand*/;
        public commandParameter: RootObject /*System.Object*/;
        public source: XF.ImageSource;
        public padding: RootObject;
    }
    export declare class ImageSource extends XF.Element {
        public isEmpty: boolean | null | Bind;
    }
    export declare class IndicatorView extends XF.TemplatedView {
        public static indicatorsShape: AttachedNode;
        public static position: AttachedNode;
        public static count: AttachedNode;
        public static maximumVisible: AttachedNode;
        public static indicatorTemplate: AttachedNode;
        public static hideSingle: AttachedNode;
        public static indicatorColor: AttachedNode;
        public static selectedIndicatorColor: AttachedNode;
        public static indicatorSize: AttachedNode;
        public static itemsSource: AttachedNode;
        public indicatorsShape: "Circle" | "Square" | string | number | null | undefined | Bind;
        public indicatorLayout: XF.Layout$Generic;
        public static indicatorLayout: AttachedNode;
        public position: number | null | Bind;
        public count: number | null | Bind;
        public maximumVisible: number | null | Bind;
        public indicatorTemplate: XF.DataTemplate;
        public hideSingle: boolean | null | Bind;
        public indicatorColor: XF.Color;
        public selectedIndicatorColor: XF.Color;
        public indicatorSize: number | null | Bind;
        public itemsSource: RootObject /*System.Collections.IEnumerable*/;
    }
    export declare class InputView extends XF.View {
        public static text: AttachedNode;
        public static keyboard: AttachedNode;
        public static isSpellCheckEnabled: AttachedNode;
        public static maxLength: AttachedNode;
        public static isReadOnly: AttachedNode;
        public static placeholder: AttachedNode;
        public static placeholderColor: AttachedNode;
        public static textColor: AttachedNode;
        public static characterSpacing: AttachedNode;
        public static textTransform: AttachedNode;
        public maxLength: number | null | Bind;
        public text: string | null | Bind;
        public keyboard: RootObject;
        public isSpellCheckEnabled: boolean | null | Bind;
        public isReadOnly: boolean | null | Bind;
        public placeholder: string | null | Bind;
        public placeholderColor: XF.Color;
        public textColor: XF.Color;
        public characterSpacing: number | null | Bind;
        public textTransform: "None" | "Default" | "Lowercase" | "Uppercase" | string | number | null | undefined | Bind;
    }
    export declare class Behavior extends XF.BindableObject {
    }
    export declare class Behavior$Generic extends XF.Behavior {
    }
    export declare class DataTrigger extends XF.TriggerBase {
        public binding: RootObject;
        public static setters: AttachedNode;
        public value: RootObject /*System.Object*/;
    }
    export declare class EventTrigger extends XF.TriggerBase {
        public static actions: AttachedNode;
        public event: string | null | Bind;
    }
    export declare class MultiTrigger extends XF.TriggerBase {
        public static conditions: AttachedNode;
        public static setters: AttachedNode;
    }
    export declare class Trigger extends XF.TriggerBase {
        public property: RootObject;
        public static setters: AttachedNode;
        public value: RootObject /*System.Object*/;
    }
    export declare class TriggerBase extends XF.BindableObject {
        public static enterActions: AttachedNode;
        public static exitActions: AttachedNode;
        public isSealed: boolean | null | Bind;
        public targetType: RootObject /*System.Type*/;
    }
    export declare class ItemsView$Generic extends XF.View {
        public static itemsSource: AttachedNode;
        public static itemTemplate: AttachedNode;
        public itemsSource: RootObject /*System.Collections.IEnumerable*/;
        public itemTemplate: XF.DataTemplate;
        public static templatedItems: AttachedNode;
    }
    export declare class CarouselView extends XF.ItemsView {
        public static loop: AttachedNode;
        public static peekAreaInsets: AttachedNode;
        public static visibleViews: AttachedNode;
        public static isDragging: AttachedNode;
        public static isBounceEnabled: AttachedNode;
        public static isSwipeEnabled: AttachedNode;
        public static isScrollAnimated: AttachedNode;
        public static currentItem: AttachedNode;
        public static currentItemChangedCommand: AttachedNode;
        public static currentItemChangedCommandParameter: AttachedNode;
        public static position: AttachedNode;
        public static positionChangedCommand: AttachedNode;
        public static positionChangedCommandParameter: AttachedNode;
        public static itemsLayout: AttachedNode;
        public static currentItemVisualState: string | null | Bind;
        public static nextItemVisualState: string | null | Bind;
        public static previousItemVisualState: string | null | Bind;
        public static defaultItemVisualState: string | null | Bind;
        public loop: boolean | null | Bind;
        public peekAreaInsets: RootObject;
        public isDragging: boolean | null | Bind;
        public isBounceEnabled: boolean | null | Bind;
        public isSwipeEnabled: boolean | null | Bind;
        public isScrollAnimated: boolean | null | Bind;
        public currentItem: RootObject /*System.Object*/;
        public currentItemChangedCommand: RootObject /*System.Windows.Input.ICommand*/;
        public currentItemChangedCommandParameter: RootObject /*System.Object*/;
        public position: number | null | Bind;
        public positionChangedCommand: RootObject /*System.Windows.Input.ICommand*/;
        public positionChangedCommandParameter: RootObject /*System.Object*/;
        public itemsLayout: XF.LinearItemsLayout;
        public indicatorView: XF.IndicatorView;
        public static indicatorView: AttachedNode;
        public isScrolling: boolean | null | Bind;
        public animatePositionChanges: boolean | null | Bind;
        public animateCurrentItemChanges: boolean | null | Bind;
    }
    export declare class CollectionView extends XF.GroupableItemsView {
    }
    export declare class GridItemsLayout extends XF.ItemsLayout {
        public static span: AttachedNode;
        public static verticalItemSpacing: AttachedNode;
        public static horizontalItemSpacing: AttachedNode;
        public span: number | null | Bind;
        public verticalItemSpacing: number | null | Bind;
        public horizontalItemSpacing: number | null | Bind;
    }
    export declare class GroupableItemsView extends XF.SelectableItemsView {
        public static isGrouped: AttachedNode;
        public static groupHeaderTemplate: AttachedNode;
        public static groupFooterTemplate: AttachedNode;
        public isGrouped: boolean | null | Bind;
        public groupHeaderTemplate: XF.DataTemplate;
        public groupFooterTemplate: XF.DataTemplate;
    }
    export declare class ItemsLayout extends XF.BindableObject {
        public static snapPointsAlignment: AttachedNode;
        public static snapPointsType: AttachedNode;
        public orientation: "Vertical" | "Horizontal" | string | number | null | undefined | Bind;
        public snapPointsAlignment: "Start" | "Center" | "End" | string | number | null | undefined | Bind;
        public snapPointsType: "None" | "Mandatory" | "MandatorySingle" | string | number | null | undefined | Bind;
    }
    export declare class ItemsView extends XF.View {
        public static emptyView: AttachedNode;
        public static emptyViewTemplate: AttachedNode;
        public static itemsSource: AttachedNode;
        public static remainingItemsThresholdReachedCommand: AttachedNode;
        public static remainingItemsThresholdReachedCommandParameter: AttachedNode;
        public static horizontalScrollBarVisibility: AttachedNode;
        public static verticalScrollBarVisibility: AttachedNode;
        public static remainingItemsThreshold: AttachedNode;
        public static itemTemplate: AttachedNode;
        public static itemsUpdatingScrollMode: AttachedNode;
        public emptyView: RootObject /*System.Object*/;
        public emptyViewTemplate: XF.DataTemplate;
        public itemsSource: RootObject /*System.Collections.IEnumerable*/;
        public remainingItemsThresholdReachedCommand: RootObject /*System.Windows.Input.ICommand*/;
        public remainingItemsThresholdReachedCommandParameter: RootObject /*System.Object*/;
        public horizontalScrollBarVisibility: "Default" | "Always" | "Never" | string | number | null | undefined | Bind;
        public verticalScrollBarVisibility: "Default" | "Always" | "Never" | string | number | null | undefined | Bind;
        public remainingItemsThreshold: number | null | Bind;
        public itemTemplate: XF.DataTemplate;
        public itemsUpdatingScrollMode: "KeepItemsInView" | "KeepScrollOffset" | "KeepLastItemInView" | string | number | null | undefined | Bind;
    }
    export declare class LinearItemsLayout extends XF.ItemsLayout {
        public static vertical: RootObject;
        public static horizontal: RootObject;
        public static carouselVertical: RootObject;
        public static itemSpacing: AttachedNode;
        public itemSpacing: number | null | Bind;
    }
    export declare class SelectableItemsView extends XF.StructuredItemsView {
        public static selectionMode: AttachedNode;
        public static selectedItem: AttachedNode;
        public static selectedItems: AttachedNode;
        public static selectionChangedCommand: AttachedNode;
        public static selectionChangedCommandParameter: AttachedNode;
        public selectedItem: RootObject /*System.Object*/;
        public selectionChangedCommand: RootObject /*System.Windows.Input.ICommand*/;
        public selectionChangedCommandParameter: RootObject /*System.Object*/;
        public selectionMode: "None" | "Single" | "Multiple" | string | number | null | undefined | Bind;
    }
    export declare class StructuredItemsView extends XF.ItemsView {
        public static header: AttachedNode;
        public static headerTemplate: AttachedNode;
        public static footer: AttachedNode;
        public static footerTemplate: AttachedNode;
        public static itemsLayout: AttachedNode;
        public static itemSizingStrategy: AttachedNode;
        public header: RootObject /*System.Object*/;
        public headerTemplate: XF.DataTemplate;
        public footer: RootObject /*System.Object*/;
        public footerTemplate: XF.DataTemplate;
        public itemsLayout: RootObject;
        public itemSizingStrategy: "MeasureAllItems" | "MeasureFirstItem" | string | number | null | undefined | Bind;
    }
    export declare class IValueConverter extends RootObject {
    }
    export declare class Label extends XF.View {
        public static horizontalTextAlignment: AttachedNode;
        public static xAlign: AttachedNode;
        public static verticalTextAlignment: AttachedNode;
        public static yAlign: AttachedNode;
        public static textColor: AttachedNode;
        public static characterSpacing: AttachedNode;
        public static font: AttachedNode;
        public static text: AttachedNode;
        public static fontFamily: AttachedNode;
        public static fontSize: AttachedNode;
        public static fontAttributes: AttachedNode;
        public static textTransform: AttachedNode;
        public static textDecorations: AttachedNode;
        public static formattedText: AttachedNode;
        public static lineBreakMode: AttachedNode;
        public static lineHeight: AttachedNode;
        public static maxLines: AttachedNode;
        public static padding: AttachedNode;
        public static textType: AttachedNode;
        public textTransform: "None" | "Default" | "Lowercase" | "Uppercase" | string | number | null | undefined | Bind;
        public font: RootObject;
        public formattedText: XF.FormattedString;
        public horizontalTextAlignment: "Start" | "Center" | "End" | string | number | null | undefined | Bind;
        public lineBreakMode: "NoWrap" | "WordWrap" | "CharacterWrap" | "HeadTruncation" | "TailTruncation" | "MiddleTruncation" | string | number | null | undefined | Bind;
        public text: string | null | Bind;
        public textColor: XF.Color;
        public characterSpacing: number | null | Bind;
        public verticalTextAlignment: "Start" | "Center" | "End" | string | number | null | undefined | Bind;
        public xAlign: "Start" | "Center" | "End" | string | number | null | undefined | Bind;
        public yAlign: "Start" | "Center" | "End" | string | number | null | undefined | Bind;
        public fontAttributes: "None" | "Bold" | "Italic" | string | number | null | undefined | Bind;
        public textDecorations: "None" | "Underline" | "Strikethrough" | string | number | null | undefined | Bind;
        public fontFamily: string | null | Bind;
        public fontSize: number | null | Bind;
        public lineHeight: number | null | Bind;
        public maxLines: number | null | Bind;
        public padding: RootObject;
        public textType: "Text" | "Html" | string | number | null | undefined | Bind;
    }
    export declare class Layout$Generic extends XF.Layout {
        public static children: AttachedNode;
    }
    export declare class Layout extends XF.View {
        public static outChildIntoBoundingRegion: AttachedNode;
        public static isClippedToBounds: AttachedNode;
        public static cascadeInputTransparent: AttachedNode;
        public static padding: AttachedNode;
        public isClippedToBounds: boolean | null | Bind;
        public padding: RootObject;
        public cascadeInputTransparent: boolean | null | Bind;
        public children: RootObject /*System.Collections.Generic.IReadOnlyList`1[[Xamarin.Forms.Element, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null]]*/;
    }
    export declare class LinearGradientBrush extends XF.GradientBrush {
        public static startPoint: AttachedNode;
        public static endPoint: AttachedNode;
        public isEmpty: boolean | null | Bind;
        public startPoint: RootObject;
        public endPoint: RootObject;
    }
    export declare class ListView extends XF.ItemsView$Generic {
        public static isPullToRefreshEnabled: AttachedNode;
        public static isRefreshing: AttachedNode;
        public static refreshCommand: AttachedNode;
        public static header: AttachedNode;
        public static headerTemplate: AttachedNode;
        public static footer: AttachedNode;
        public static footerTemplate: AttachedNode;
        public static selectedItem: AttachedNode;
        public static selectionMode: AttachedNode;
        public static hasUnevenRows: AttachedNode;
        public static rowHeight: AttachedNode;
        public static groupHeaderTemplate: AttachedNode;
        public static isGroupingEnabled: AttachedNode;
        public static separatorVisibility: AttachedNode;
        public static separatorColor: AttachedNode;
        public static refreshControlColor: AttachedNode;
        public static horizontalScrollBarVisibility: AttachedNode;
        public static verticalScrollBarVisibility: AttachedNode;
        public footer: RootObject /*System.Object*/;
        public footerTemplate: XF.DataTemplate;
        public groupDisplayBinding: RootObject;
        public groupHeaderTemplate: XF.DataTemplate;
        public groupShortNameBinding: RootObject;
        public hasUnevenRows: boolean | null | Bind;
        public header: RootObject /*System.Object*/;
        public headerTemplate: XF.DataTemplate;
        public isGroupingEnabled: boolean | null | Bind;
        public isPullToRefreshEnabled: boolean | null | Bind;
        public isRefreshing: boolean | null | Bind;
        public refreshCommand: RootObject /*System.Windows.Input.ICommand*/;
        public rowHeight: number | null | Bind;
        public selectedItem: RootObject /*System.Object*/;
        public selectionMode: "None" | "Single" | string | number | null | undefined | Bind;
        public separatorColor: XF.Color;
        public refreshControlColor: XF.Color;
        public separatorVisibility: "Default" | "None" | string | number | null | undefined | Bind;
        public horizontalScrollBarVisibility: "Default" | "Always" | "Never" | string | number | null | undefined | Bind;
        public verticalScrollBarVisibility: "Default" | "Always" | "Never" | string | number | null | undefined | Bind;
        public cachingStrategy: "RetainElement" | "RecycleElement" | "RecycleElementAndDataTemplate" | string | number | null | undefined | Bind;
        public refreshAllowed: boolean | null | Bind;
        public footerElement: XF.Element;
        public static footerElement: AttachedNode;
        public headerElement: XF.Element;
        public static headerElement: AttachedNode;
    }
    export declare class Menu extends XF.BaseMenuItem {
        public static item: AttachedNode;
        public text: string | null | Bind;
        public static items: AttachedNode;
        public count: number | null | Bind;
        public isReadOnly: boolean | null | Bind;
    }
    export declare class MenuItem extends XF.BaseMenuItem {
        public static accelerator: AttachedNode;
        public static command: AttachedNode;
        public static commandParameter: AttachedNode;
        public static isDestructive: AttachedNode;
        public static iconImageSource: AttachedNode;
        public static icon: AttachedNode;
        public static isEnabled: AttachedNode;
        public static text: AttachedNode;
        public command: RootObject /*System.Windows.Input.ICommand*/;
        public commandParameter: RootObject /*System.Object*/;
        public icon: XF.FileImageSource;
        public iconImageSource: XF.ImageSource;
        public isDestructive: boolean | null | Bind;
        public text: string | null | Bind;
        public isEnabled: boolean | null | Bind;
        public static styleClass: AttachedNode;
        public static class: AttachedNode;
        public isEnabledPropertyName: string | null | Bind;
    }
    export declare class MultiPage$Generic extends XF.Page {
        public static index: AttachedNode;
        public static itemsSource: AttachedNode;
        public static itemTemplate: AttachedNode;
        public static selectedItem: AttachedNode;
        public itemsSource: RootObject /*System.Collections.IEnumerable*/;
        public itemTemplate: XF.DataTemplate;
        public selectedItem: RootObject /*System.Object*/;
        public currentPage: RootObject;
        public static currentPage: AttachedNode;
        public static children: AttachedNode;
    }
    export declare class NameScopeExtensions extends RootObject {
        public static dByName: AttachedNode;
    }
    export declare class NavigationPage extends XF.Page {
        public static backButtonTitle: AttachedNode;
        public static hasBackButton: AttachedNode;
        public static hasNavigationBar: AttachedNode;
        public static titleIcon: AttachedNode;
        public static titleIconImageSource: AttachedNode;
        public static titleView: AttachedNode;
        public static iconColor: AttachedNode;
        public static tint: AttachedNode;
        public static barBackgroundColor: AttachedNode;
        public static barBackground: AttachedNode;
        public static barTextColor: AttachedNode;
        public static currentPage: AttachedNode;
        public static rootPage: AttachedNode;
        public barBackgroundColor: XF.Color;
        public barBackground: XF.Brush;
        public barTextColor: XF.Color;
        public tint: XF.Color;
        public pages: RootObject /*System.Collections.Generic.IEnumerable`1[[Xamarin.Forms.Page, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null]]*/;
        public stackDepth: number | null | Bind;
        public currentPage: XF.Page;
        public rootPage: XF.Page;
    }
    export declare class NullEffect extends XF.Effect {
    }
    export declare class OpenGLView extends XF.View {
        public static hasRenderLoop: AttachedNode;
        public hasRenderLoop: boolean | null | Bind;
        public onDisplay: RootObject /*System.Action`1[[Xamarin.Forms.Rectangle, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null]]*/;
    }
    export declare class OrientationStateTrigger extends XF.StateTriggerBase {
        public static orientation: AttachedNode;
        public orientation: "Portrait" | "Landscape" | "PortraitUp" | "PortraitDown" | "LandscapeLeft" | "LandscapeRight" | "Other" | string | number | null | undefined | Bind;
    }
    export declare class Page extends XF.VisualElement {
        public static backgroundImageSource: AttachedNode;
        public static backgroundImage: AttachedNode;
        public static isBusy: AttachedNode;
        public static padding: AttachedNode;
        public static title: AttachedNode;
        public static iconImageSource: AttachedNode;
        public static icon: AttachedNode;
        public static busySetSignalName: string | null | Bind;
        public static alertSignalName: string | null | Bind;
        public static promptSignalName: string | null | Bind;
        public static actionSheetSignalName: string | null | Bind;
        public backgroundImage: string | null | Bind;
        public backgroundImageSource: XF.ImageSource;
        public icon: XF.FileImageSource;
        public iconImageSource: XF.ImageSource;
        public isBusy: boolean | null | Bind;
        public padding: RootObject;
        public title: string | null | Bind;
        public static toolbarItems: AttachedNode;
        public containerArea: RootObject;
        public ignoresContainerArea: boolean | null | Bind;
        public static internalChildren: AttachedNode;
    }
    export declare class PanGestureRecognizer extends XF.GestureRecognizer {
        public static touchPoints: AttachedNode;
        public touchPoints: number | null | Bind;
    }
    export declare class Picker extends XF.View {
        public static textColor: AttachedNode;
        public static characterSpacing: AttachedNode;
        public static title: AttachedNode;
        public static titleColor: AttachedNode;
        public static selectedIndex: AttachedNode;
        public static itemsSource: AttachedNode;
        public static selectedItem: AttachedNode;
        public static fontFamily: AttachedNode;
        public static fontSize: AttachedNode;
        public static fontAttributes: AttachedNode;
        public static horizontalTextAlignment: AttachedNode;
        public static verticalTextAlignment: AttachedNode;
        public static textTransform: AttachedNode;
        public fontAttributes: "None" | "Bold" | "Italic" | string | number | null | undefined | Bind;
        public fontFamily: string | null | Bind;
        public fontSize: number | null | Bind;
        public textTransform: "None" | "Default" | "Lowercase" | "Uppercase" | string | number | null | undefined | Bind;
        public static items: AttachedNode;
        public selectedIndex: number | null | Bind;
        public selectedItem: RootObject /*System.Object*/;
        public textColor: XF.Color;
        public characterSpacing: number | null | Bind;
        public title: string | null | Bind;
        public titleColor: XF.Color;
        public horizontalTextAlignment: "Start" | "Center" | "End" | string | number | null | undefined | Bind;
        public verticalTextAlignment: "Start" | "Center" | "End" | string | number | null | undefined | Bind;
        public itemDisplayBinding: RootObject;
    }
    export declare class PinchGestureRecognizer extends XF.GestureRecognizer {
        public isPinching: boolean | null | Bind;
    }
    export declare class PlatformEffect$Generic extends XF.Effect {
        public container: RootObject;
        public control: RootObject;
    }
    export declare class ProgressBar extends XF.View {
        public static progressColor: AttachedNode;
        public static progress: AttachedNode;
        public progressColor: XF.Color;
        public progress: number | null | Bind;
    }
    export declare class RadialGradientBrush extends XF.GradientBrush {
        public static center: AttachedNode;
        public static radius: AttachedNode;
        public isEmpty: boolean | null | Bind;
        public center: RootObject;
        public radius: number | null | Bind;
    }
    export declare class RadioButton extends XF.TemplatedView {
        public static defaultTemplate: XF.ControlTemplate;
        public static content: AttachedNode;
        public static value: AttachedNode;
        public static isChecked: AttachedNode;
        public static groupName: AttachedNode;
        public static textColor: AttachedNode;
        public static characterSpacing: AttachedNode;
        public static textTransform: AttachedNode;
        public static fontAttributes: AttachedNode;
        public static fontFamily: AttachedNode;
        public static fontSize: AttachedNode;
        public static borderColor: AttachedNode;
        public static cornerRadius: AttachedNode;
        public static borderWidth: AttachedNode;
        public static checkedVisualState: string | null | Bind;
        public static uncheckedVisualState: string | null | Bind;
        public static templateRootName: string | null | Bind;
        public static checkedIndicator: string | null | Bind;
        public static uncheckedButton: string | null | Bind;
        public content: RootObject /*System.Object*/;
        public value: RootObject /*System.Object*/;
        public isChecked: boolean | null | Bind;
        public groupName: string | null | Bind;
        public textColor: XF.Color;
        public characterSpacing: number | null | Bind;
        public textTransform: "None" | "Default" | "Lowercase" | "Uppercase" | string | number | null | undefined | Bind;
        public fontAttributes: "None" | "Bold" | "Italic" | string | number | null | undefined | Bind;
        public fontFamily: string | null | Bind;
        public fontSize: number | null | Bind;
        public borderWidth: number | null | Bind;
        public borderColor: XF.Color;
        public cornerRadius: number | null | Bind;
    }
    export declare class RadioButtonGroup extends RootObject {
        public static groupName: AttachedNode;
        public static selectedValue: AttachedNode;
    }
    export declare class RefreshView extends XF.ContentView {
        public static isRefreshing: AttachedNode;
        public static command: AttachedNode;
        public static commandParameter: AttachedNode;
        public static refreshColor: AttachedNode;
        public isRefreshing: boolean | null | Bind;
        public command: RootObject /*System.Windows.Input.ICommand*/;
        public commandParameter: RootObject /*System.Object*/;
        public refreshColor: XF.Color;
    }
    export declare class RelativeLayout extends XF.Layout$Generic {
        public static boundsConstraint: AttachedNode;
        public static heightConstraint: AttachedNode;
        public static widthConstraint: AttachedNode;
        public static xConstraint: AttachedNode;
        public static yConstraint: AttachedNode;
        public children: RootObject;
    }
    export declare class Routing extends RootObject {
        public static route: AttachedNode;
    }
    export declare class RoutingEffect extends XF.Effect {
    }
    export declare class RowDefinition extends XF.BindableObject {
        public static height: AttachedNode;
        public height: RootObject;
    }
    export declare class ScrollView extends XF.Layout {
        public static orientation: AttachedNode;
        public static scrollX: AttachedNode;
        public static scrollY: AttachedNode;
        public static contentSize: AttachedNode;
        public static horizontalScrollBarVisibility: AttachedNode;
        public static verticalScrollBarVisibility: AttachedNode;
        public layoutAreaOverride: RootObject;
        public content: XF.View;
        public static content: AttachedNode;
        public contentSize: RootObject;
        public orientation: "Vertical" | "Horizontal" | "Both" | "Neither" | string | number | null | undefined | Bind;
        public scrollX: number | null | Bind;
        public scrollY: number | null | Bind;
        public horizontalScrollBarVisibility: "Default" | "Always" | "Never" | string | number | null | undefined | Bind;
        public verticalScrollBarVisibility: "Default" | "Always" | "Never" | string | number | null | undefined | Bind;
    }
    export declare class SearchBar extends XF.InputView {
        public static searchCommand: AttachedNode;
        public static searchCommandParameter: AttachedNode;
        public static text: AttachedNode;
        public static cancelButtonColor: AttachedNode;
        public static placeholder: AttachedNode;
        public static placeholderColor: AttachedNode;
        public static fontFamily: AttachedNode;
        public static fontSize: AttachedNode;
        public static fontAttributes: AttachedNode;
        public static horizontalTextAlignment: AttachedNode;
        public static verticalTextAlignment: AttachedNode;
        public static textColor: AttachedNode;
        public static characterSpacing: AttachedNode;
        public cancelButtonColor: XF.Color;
        public horizontalTextAlignment: "Start" | "Center" | "End" | string | number | null | undefined | Bind;
        public verticalTextAlignment: "Start" | "Center" | "End" | string | number | null | undefined | Bind;
        public searchCommand: RootObject /*System.Windows.Input.ICommand*/;
        public searchCommandParameter: RootObject /*System.Object*/;
        public fontAttributes: "None" | "Bold" | "Italic" | string | number | null | undefined | Bind;
        public fontFamily: string | null | Bind;
        public fontSize: number | null | Bind;
    }
    export declare class BackButtonBehavior extends XF.BindableObject {
        public static commandParameter: AttachedNode;
        public static command: AttachedNode;
        public static iconOverride: AttachedNode;
        public static isEnabled: AttachedNode;
        public static textOverride: AttachedNode;
        public command: RootObject /*System.Windows.Input.ICommand*/;
        public commandParameter: RootObject /*System.Object*/;
        public iconOverride: XF.ImageSource;
        public isEnabled: boolean | null | Bind;
        public textOverride: string | null | Bind;
    }
    export declare class BaseShellItem extends XF.NavigableElement {
        public static flyoutIcon: AttachedNode;
        public static icon: AttachedNode;
        public static isChecked: AttachedNode;
        public static isEnabled: AttachedNode;
        public static title: AttachedNode;
        public static tabIndex: AttachedNode;
        public static isTabStop: AttachedNode;
        public static isVisible: AttachedNode;
        public flyoutIcon: XF.ImageSource;
        public icon: XF.ImageSource;
        public isChecked: boolean | null | Bind;
        public isEnabled: boolean | null | Bind;
        public route: string | null | Bind;
        public title: string | null | Bind;
        public tabIndex: number | null | Bind;
        public isTabStop: boolean | null | Bind;
        public isVisible: boolean | null | Bind;
        public flyoutItemIsVisible: boolean | null | Bind;
    }
    export declare class NavigableElement extends XF.Element {
        public static navigation: AttachedNode;
        public static style: AttachedNode;
        public navigation: RootObject;
        public style: XF.Style;
        public static styleClass: AttachedNode;
        public static class: AttachedNode;
        public navigationProxy: RootObject;
    }
    export declare class SearchHandler extends XF.BindableObject {
        public static isFocusedPropertyKey: RootObject;
        public static isFocused: AttachedNode;
        public static keyboard: AttachedNode;
        public static horizontalTextAlignment: AttachedNode;
        public static verticalTextAlignment: AttachedNode;
        public static textColor: AttachedNode;
        public static characterSpacing: AttachedNode;
        public static cancelButtonColor: AttachedNode;
        public static fontFamily: AttachedNode;
        public static fontSize: AttachedNode;
        public static fontAttributes: AttachedNode;
        public static placeholder: AttachedNode;
        public static placeholderColor: AttachedNode;
        public static textTransform: AttachedNode;
        public static backgroundColor: AttachedNode;
        public static clearIconHelpText: AttachedNode;
        public static clearIconName: AttachedNode;
        public static clearIcon: AttachedNode;
        public static clearPlaceholderCommandParameter: AttachedNode;
        public static clearPlaceholderCommand: AttachedNode;
        public static clearPlaceholderEnabled: AttachedNode;
        public static clearPlaceholderHelpText: AttachedNode;
        public static clearPlaceholderIcon: AttachedNode;
        public static clearPlaceholderName: AttachedNode;
        public static commandParameter: AttachedNode;
        public static command: AttachedNode;
        public static displayMemberName: AttachedNode;
        public static isSearchEnabled: AttachedNode;
        public static itemsSource: AttachedNode;
        public static itemTemplate: AttachedNode;
        public static queryIconHelpText: AttachedNode;
        public static queryIconName: AttachedNode;
        public static queryIcon: AttachedNode;
        public static query: AttachedNode;
        public static searchBoxVisibility: AttachedNode;
        public static selectedItem: AttachedNode;
        public static showsResults: AttachedNode;
        public isFocused: boolean | null | Bind;
        public keyboard: RootObject;
        public horizontalTextAlignment: "Start" | "Center" | "End" | string | number | null | undefined | Bind;
        public verticalTextAlignment: "Start" | "Center" | "End" | string | number | null | undefined | Bind;
        public textColor: XF.Color;
        public textTransform: "None" | "Default" | "Lowercase" | "Uppercase" | string | number | null | undefined | Bind;
        public cancelButtonColor: XF.Color;
        public fontAttributes: "None" | "Bold" | "Italic" | string | number | null | undefined | Bind;
        public fontFamily: string | null | Bind;
        public characterSpacing: number | null | Bind;
        public fontSize: number | null | Bind;
        public placeholderColor: XF.Color;
        public placeholder: string | null | Bind;
        public backgroundColor: XF.Color;
        public clearIcon: XF.ImageSource;
        public clearIconHelpText: string | null | Bind;
        public clearIconName: string | null | Bind;
        public clearPlaceholderCommand: RootObject /*System.Windows.Input.ICommand*/;
        public clearPlaceholderCommandParameter: RootObject /*System.Object*/;
        public clearPlaceholderEnabled: boolean | null | Bind;
        public clearPlaceholderHelpText: string | null | Bind;
        public clearPlaceholderIcon: XF.ImageSource;
        public clearPlaceholderName: string | null | Bind;
        public command: RootObject /*System.Windows.Input.ICommand*/;
        public commandParameter: RootObject /*System.Object*/;
        public displayMemberName: string | null | Bind;
        public isSearchEnabled: boolean | null | Bind;
        public itemsSource: RootObject /*System.Collections.IEnumerable*/;
        public itemTemplate: XF.DataTemplate;
        public query: string | null | Bind;
        public queryIcon: XF.ImageSource;
        public queryIconHelpText: string | null | Bind;
        public queryIconName: string | null | Bind;
        public searchBoxVisibility: "Hidden" | "Collapsible" | "Expanded" | string | number | null | undefined | Bind;
        public selectedItem: RootObject /*System.Object*/;
        public showsResults: boolean | null | Bind;
    }
    export declare class Shell extends XF.Page {
        public static current: XF.Shell;
        public static flyoutItemIsVisible: AttachedNode;
        public static menuItemTemplate: AttachedNode;
        public static itemTemplate: AttachedNode;
        public static backButtonBehavior: AttachedNode;
        public static presentationMode: AttachedNode;
        public static flyoutBehavior: AttachedNode;
        public static flyoutWidth: AttachedNode;
        public static flyoutHeight: AttachedNode;
        public static navBarIsVisible: AttachedNode;
        public static navBarHasShadow: AttachedNode;
        public static searchHandler: AttachedNode;
        public static tabBarIsVisible: AttachedNode;
        public static titleView: AttachedNode;
        public static backgroundColor: AttachedNode;
        public static disabledColor: AttachedNode;
        public static foregroundColor: AttachedNode;
        public static tabBarBackgroundColor: AttachedNode;
        public static tabBarDisabledColor: AttachedNode;
        public static tabBarForegroundColor: AttachedNode;
        public static tabBarTitleColor: AttachedNode;
        public static tabBarUnselectedColor: AttachedNode;
        public static titleColor: AttachedNode;
        public static unselectedColor: AttachedNode;
        public static flyoutBackdrop: AttachedNode;
        public static currentItem: AttachedNode;
        public static currentState: AttachedNode;
        public static flyoutBackgroundImage: AttachedNode;
        public static flyoutBackgroundImageAspect: AttachedNode;
        public static flyoutBackgroundColor: AttachedNode;
        public static flyoutBackground: AttachedNode;
        public static flyoutHeaderBehavior: AttachedNode;
        public static flyoutHeader: AttachedNode;
        public static flyoutFooter: AttachedNode;
        public static flyoutHeaderTemplate: AttachedNode;
        public static flyoutFooterTemplate: AttachedNode;
        public static flyoutIsPresented: AttachedNode;
        public static items: AttachedNode;
        public static flyoutIcon: AttachedNode;
        public static flyoutVerticalScrollMode: AttachedNode;
        public static flyoutContent: AttachedNode;
        public static flyoutContentTemplate: AttachedNode;
        public currentPage: XF.Page;
        public static currentPage: AttachedNode;
        public flyoutVerticalScrollMode: "Disabled" | "Enabled" | "Auto" | string | number | null | undefined | Bind;
        public flyoutIcon: XF.ImageSource;
        public currentItem: XF.ShellItem;
        public currentState: RootObject;
        public flyoutBackgroundImage: XF.ImageSource;
        public flyoutBackgroundImageAspect: "AspectFit" | "AspectFill" | "Fill" | string | number | null | undefined | Bind;
        public flyoutBackgroundColor: XF.Color;
        public flyoutBackground: XF.Brush;
        public flyoutBackdrop: XF.Brush;
        public flyoutWidth: number | null | Bind;
        public flyoutHeight: number | null | Bind;
        public flyoutBehavior: "Disabled" | "Flyout" | "Locked" | string | number | null | undefined | Bind;
        public flyoutHeader: RootObject /*System.Object*/;
        public flyoutFooter: RootObject /*System.Object*/;
        public flyoutHeaderBehavior: "Default" | "Fixed" | "Scroll" | "CollapseOnScroll" | string | number | null | undefined | Bind;
        public flyoutHeaderTemplate: XF.DataTemplate;
        public flyoutFooterTemplate: XF.DataTemplate;
        public flyoutIsPresented: boolean | null | Bind;
        public itemTemplate: XF.DataTemplate;
        public menuItemTemplate: XF.DataTemplate;
        public flyoutItems: RootObject /*System.Collections.IEnumerable*/;
        public flyoutContent: RootObject /*System.Object*/;
        public flyoutContentTemplate: XF.DataTemplate;
    }
    export declare class ShellContent extends XF.BaseShellItem {
        public static menuItems: AttachedNode;
        public static content: AttachedNode;
        public static contentTemplate: AttachedNode;
        public content: RootObject /*System.Object*/;
        public contentTemplate: XF.DataTemplate;
    }
    export declare class ShellGroupItem extends XF.BaseShellItem {
        public static flyoutDisplayOptions: AttachedNode;
        public flyoutDisplayOptions: "AsSingleItem" | "AsMultipleItems" | string | number | null | undefined | Bind;
    }
    export declare class FlyoutItem extends XF.ShellItem {
        public static isVisible: AttachedNode;
        public static labelStyle: string | null | Bind;
        public static imageStyle: string | null | Bind;
        public static layoutStyle: string | null | Bind;
    }
    export declare class TabBar extends XF.ShellItem {
    }
    export declare class ShellItem extends XF.ShellGroupItem {
        public static currentItem: AttachedNode;
        public static items: AttachedNode;
        public currentItem: XF.ShellSection;
    }
    export declare class Tab extends XF.ShellSection {
    }
    export declare class ShellSection extends XF.ShellGroupItem {
        public static currentItem: AttachedNode;
        public static items: AttachedNode;
        public currentItem: XF.ShellContent;
        public stack: RootObject /*System.Collections.Generic.IReadOnlyList`1[[Xamarin.Forms.Page, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null]]*/;
    }
    export declare class Slider extends XF.View {
        public static minimum: AttachedNode;
        public static maximum: AttachedNode;
        public static value: AttachedNode;
        public static minimumTrackColor: AttachedNode;
        public static maximumTrackColor: AttachedNode;
        public static thumbColor: AttachedNode;
        public static thumbImageSource: AttachedNode;
        public static thumbImage: AttachedNode;
        public static dragStartedCommand: AttachedNode;
        public static dragCompletedCommand: AttachedNode;
        public minimumTrackColor: XF.Color;
        public maximumTrackColor: XF.Color;
        public thumbColor: XF.Color;
        public thumbImageSource: XF.ImageSource;
        public thumbImage: XF.FileImageSource;
        public dragStartedCommand: RootObject /*System.Windows.Input.ICommand*/;
        public dragCompletedCommand: RootObject /*System.Windows.Input.ICommand*/;
        public maximum: number | null | Bind;
        public minimum: number | null | Bind;
        public value: number | null | Bind;
    }
    export declare class SolidColorBrush extends XF.Brush {
        public static color: AttachedNode;
        public isEmpty: boolean | null | Bind;
        public color: XF.Color;
    }
    export declare class Span extends XF.GestureElement {
        public static style: AttachedNode;
        public static textDecorations: AttachedNode;
        public static textTransform: AttachedNode;
        public static backgroundColor: AttachedNode;
        public static textColor: AttachedNode;
        public static characterSpacing: AttachedNode;
        public static foregroundColor: AttachedNode;
        public static text: AttachedNode;
        public static font: AttachedNode;
        public static fontFamily: AttachedNode;
        public static fontSize: AttachedNode;
        public static fontAttributes: AttachedNode;
        public static lineHeight: AttachedNode;
        public style: XF.Style;
        public backgroundColor: XF.Color;
        public textColor: XF.Color;
        public characterSpacing: number | null | Bind;
        public textTransform: "None" | "Default" | "Lowercase" | "Uppercase" | string | number | null | undefined | Bind;
        public foregroundColor: XF.Color;
        public text: string | null | Bind;
        public font: RootObject;
        public fontAttributes: "None" | "Bold" | "Italic" | string | number | null | undefined | Bind;
        public fontFamily: string | null | Bind;
        public fontSize: number | null | Bind;
        public textDecorations: "None" | "Underline" | "Strikethrough" | string | number | null | undefined | Bind;
        public lineHeight: number | null | Bind;
    }
    export declare class StackLayout extends XF.Layout$Generic {
        public static orientation: AttachedNode;
        public static spacing: AttachedNode;
        public orientation: "Vertical" | "Horizontal" | string | number | null | undefined | Bind;
        public spacing: number | null | Bind;
    }
    export declare class StateTrigger extends XF.StateTriggerBase {
        public static isActive: AttachedNode;
        public isActive: boolean | null | Bind;
    }
    export declare class StateTriggerBase extends XF.BindableObject {
        public isActive: boolean | null | Bind;
        public isAttached: boolean | null | Bind;
    }
    export declare class Stepper extends XF.View {
        public static maximum: AttachedNode;
        public static minimum: AttachedNode;
        public static value: AttachedNode;
        public static increment: AttachedNode;
        public static stepperPosition: AttachedNode;
        public increment: number | null | Bind;
        public maximum: number | null | Bind;
        public minimum: number | null | Bind;
        public value: number | null | Bind;
        public stepperPosition: number | null | Bind;
    }
    export declare class StreamImageSource extends XF.ImageSource {
        public static stream: AttachedNode;
        public isEmpty: boolean | null | Bind;
        public stream: RootObject /*System.Func`2[[System.Threading.CancellationToken, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e],[System.Threading.Tasks.Task`1[[System.IO.Stream, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]], System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]]*/;
    }
    export declare class Style extends RootObject {
        public applyToDerivedTypes: boolean | null | Bind;
        public basedOn: XF.Style;
        public static basedOn: AttachedNode;
        public baseResourceKey: string | null | Bind;
        public static behaviors: AttachedNode;
        public canCascade: boolean | null | Bind;
        public class: string | null | Bind;
        public static setters: AttachedNode;
        public static triggers: AttachedNode;
        public targetType: RootObject /*System.Type*/;
    }
    export declare class SwipeGestureRecognizer extends XF.GestureRecognizer {
        public static command: AttachedNode;
        public static commandParameter: AttachedNode;
        public static direction: AttachedNode;
        public static threshold: AttachedNode;
        public command: RootObject /*System.Windows.Input.ICommand*/;
        public commandParameter: RootObject /*System.Object*/;
        public direction: "Right" | "Left" | "Up" | "Down" | string | number | null | undefined | Bind;
        public threshold: number | null | Bind;
    }
    export declare class SwipeItem extends XF.MenuItem {
        public static backgroundColor: AttachedNode;
        public static isVisible: AttachedNode;
        public backgroundColor: XF.Color;
        public isVisible: boolean | null | Bind;
    }
    export declare class SwipeItems extends XF.Element {
        public static mode: AttachedNode;
        public static swipeBehaviorOnInvoked: AttachedNode;
        public mode: "Reveal" | "Execute" | string | number | null | undefined | Bind;
        public swipeBehaviorOnInvoked: "Auto" | "Close" | "RemainOpen" | string | number | null | undefined | Bind;
        public item: RootObject;
        public count: number | null | Bind;
        public isReadOnly: boolean | null | Bind;
    }
    export declare class SwipeItemView extends XF.ContentView {
        public static command: AttachedNode;
        public static commandParameter: AttachedNode;
        public command: RootObject /*System.Windows.Input.ICommand*/;
        public commandParameter: RootObject /*System.Object*/;
    }
    export declare class SwipeView extends XF.ContentView {
        public static threshold: AttachedNode;
        public static leftItems: AttachedNode;
        public static rightItems: AttachedNode;
        public static topItems: AttachedNode;
        public static bottomItems: AttachedNode;
        public threshold: number | null | Bind;
    }
    export declare class Switch extends XF.View {
        public static isToggled: AttachedNode;
        public static onColor: AttachedNode;
        public static thumbColor: AttachedNode;
        public static switchOnVisualState: string | null | Bind;
        public static switchOffVisualState: string | null | Bind;
        public onColor: XF.Color;
        public thumbColor: XF.Color;
        public isToggled: boolean | null | Bind;
    }
    export declare class TabbedPage extends XF.MultiPage$Generic {
        public static barBackgroundColor: AttachedNode;
        public static barBackground: AttachedNode;
        public static barTextColor: AttachedNode;
        public static unselectedTabColor: AttachedNode;
        public static selectedTabColor: AttachedNode;
        public barBackgroundColor: XF.Color;
        public barBackground: XF.Brush;
        public barTextColor: XF.Color;
        public unselectedTabColor: XF.Color;
        public selectedTabColor: XF.Color;
    }
    export declare class TableRoot extends XF.TableSectionBase$Generic {
    }
    export declare class TableSectionBase$Generic extends XF.TableSectionBase {
        public count: number | null | Bind;
        public item: RootObject;
        public static item: AttachedNode;
    }
    export declare class TableSection extends XF.TableSectionBase$Generic {
    }
    export declare class TableSectionBase extends XF.BindableObject {
        public static title: AttachedNode;
        public static textColor: AttachedNode;
        public title: string | null | Bind;
        public textColor: XF.Color;
    }
    export declare class TableView extends XF.View {
        public static rowHeight: AttachedNode;
        public static hasUnevenRows: AttachedNode;
        public hasUnevenRows: boolean | null | Bind;
        public intent: "Menu" | "Settings" | "Form" | "Data" | string | number | null | undefined | Bind;
        public static root: AttachedNode;
        public rowHeight: number | null | Bind;
        public model: RootObject;
    }
    export declare class TapGestureRecognizer extends XF.GestureRecognizer {
        public static command: AttachedNode;
        public static commandParameter: AttachedNode;
        public static numberOfTapsRequired: AttachedNode;
        public static tappedCallback: AttachedNode;
        public static tappedCallbackParameter: AttachedNode;
        public command: RootObject /*System.Windows.Input.ICommand*/;
        public commandParameter: RootObject /*System.Object*/;
        public numberOfTapsRequired: number | null | Bind;
        public tappedCallback: RootObject /*System.Action`2[[Xamarin.Forms.View, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null],[System.Object, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]]*/;
        public tappedCallbackParameter: RootObject /*System.Object*/;
    }
    export declare class TemplatedPage extends XF.Page {
        public static controlTemplate: AttachedNode;
        public controlTemplate: XF.ControlTemplate;
    }
    export declare class TemplatedView extends XF.Layout {
        public static controlTemplate: AttachedNode;
        public controlTemplate: XF.ControlTemplate;
    }
    export declare class TimePicker extends XF.View {
        public static format: AttachedNode;
        public static textColor: AttachedNode;
        public static characterSpacing: AttachedNode;
        public static time: AttachedNode;
        public static fontFamily: AttachedNode;
        public static fontSize: AttachedNode;
        public static fontAttributes: AttachedNode;
        public static textTransform: AttachedNode;
        public format: string | null | Bind;
        public textColor: XF.Color;
        public characterSpacing: number | null | Bind;
        public time: RootObject /*System.TimeSpan*/;
        public fontAttributes: "None" | "Bold" | "Italic" | string | number | null | undefined | Bind;
        public fontFamily: string | null | Bind;
        public fontSize: number | null | Bind;
        public textTransform: "None" | "Default" | "Lowercase" | "Uppercase" | string | number | null | undefined | Bind;
    }
    export declare class ToolbarItem extends XF.MenuItem {
        public name: string | null | Bind;
        public order: "Default" | "Primary" | "Secondary" | string | number | null | undefined | Bind;
        public priority: number | null | Bind;
    }
    export declare class UriImageSource extends XF.ImageSource {
        public static uri: AttachedNode;
        public isEmpty: boolean | null | Bind;
        public cacheValidity: RootObject /*System.TimeSpan*/;
        public cachingEnabled: boolean | null | Bind;
        public uri: RootObject /*System.Uri*/;
    }
    export declare class UrlWebViewSource extends XF.WebViewSource {
        public static url: AttachedNode;
        public url: string | null | Bind;
    }
    export declare class View extends XF.VisualElement {
        public static verticalOptions: AttachedNode;
        public static horizontalOptions: AttachedNode;
        public static margin: AttachedNode;
        public static gestureRecognizers: AttachedNode;
        public horizontalOptions: RootObject;
        public margin: RootObject;
        public verticalOptions: RootObject;
    }
    export declare class VisualElement extends XF.NavigableElement {
        public static navigation: AttachedNode;
        public static style: AttachedNode;
        public static inputTransparent: AttachedNode;
        public static isEnabled: AttachedNode;
        public static x: AttachedNode;
        public static y: AttachedNode;
        public static anchorX: AttachedNode;
        public static anchorY: AttachedNode;
        public static translationX: AttachedNode;
        public static translationY: AttachedNode;
        public static width: AttachedNode;
        public static height: AttachedNode;
        public static rotation: AttachedNode;
        public static rotationX: AttachedNode;
        public static rotationY: AttachedNode;
        public static scale: AttachedNode;
        public static scaleX: AttachedNode;
        public static scaleY: AttachedNode;
        public static clip: AttachedNode;
        public static visual: AttachedNode;
        public static isVisible: AttachedNode;
        public static opacity: AttachedNode;
        public static backgroundColor: AttachedNode;
        public static background: AttachedNode;
        public static behaviors: AttachedNode;
        public static triggers: AttachedNode;
        public static widthRequest: AttachedNode;
        public static heightRequest: AttachedNode;
        public static minimumWidthRequest: AttachedNode;
        public static minimumHeightRequest: AttachedNode;
        public static isFocusedPropertyKey: RootObject;
        public static isFocused: AttachedNode;
        public static flowDirection: AttachedNode;
        public static tabIndex: AttachedNode;
        public static isTabStop: AttachedNode;
        public visual: RootObject;
        public flowDirection: "MatchParent" | "LeftToRight" | "RightToLeft" | string | number | null | undefined | Bind;
        public anchorX: number | null | Bind;
        public anchorY: number | null | Bind;
        public backgroundColor: XF.Color;
        public background: XF.Brush;
        public bounds: RootObject;
        public height: number | null | Bind;
        public heightRequest: number | null | Bind;
        public inputTransparent: boolean | null | Bind;
        public isEnabled: boolean | null | Bind;
        public isFocused: boolean | null | Bind;
        public isVisible: boolean | null | Bind;
        public minimumHeightRequest: number | null | Bind;
        public minimumWidthRequest: number | null | Bind;
        public opacity: number | null | Bind;
        public rotation: number | null | Bind;
        public rotationX: number | null | Bind;
        public rotationY: number | null | Bind;
        public scale: number | null | Bind;
        public scaleX: number | null | Bind;
        public scaleY: number | null | Bind;
        public tabIndex: number | null | Bind;
        public isTabStop: boolean | null | Bind;
        public translationX: number | null | Bind;
        public translationY: number | null | Bind;
        public width: number | null | Bind;
        public widthRequest: number | null | Bind;
        public x: number | null | Bind;
        public y: number | null | Bind;
        public clip: XF.Geometry;
        public batched: boolean | null | Bind;
        public disableLayout: boolean | null | Bind;
        public isInNativeLayout: boolean | null | Bind;
        public isNativeStateConsistent: boolean | null | Bind;
        public isPlatformEnabled: boolean | null | Bind;
        public static resources: AttachedNode;
    }
    export declare class VisualStateManager extends RootObject {
        public static visualStateGroups: AttachedNode;
        public static oState: AttachedNode;
    }
    export declare class WebView extends XF.View {
        public static source: AttachedNode;
        public static canGoBack: AttachedNode;
        public static canGoForward: AttachedNode;
        public static cookies: AttachedNode;
        public canGoBack: boolean | null | Bind;
        public canGoForward: boolean | null | Bind;
        public cookies: RootObject /*System.Net.CookieContainer*/;
        public source: XF.WebViewSource;
    }
    export declare class WebViewSource extends XF.BindableObject {
    }
    export declare class StyleSheet extends RootObject {
    }
    export declare class ArcSegment extends XF.PathSegment {
        public static point: AttachedNode;
        public static size: AttachedNode;
        public static rotationAngle: AttachedNode;
        public static sweepDirection: AttachedNode;
        public static isLargeArc: AttachedNode;
        public point: RootObject;
        public size: RootObject;
        public rotationAngle: number | null | Bind;
        public sweepDirection: "CounterClockwise" | "Clockwise" | string | number | null | undefined | Bind;
        public isLargeArc: boolean | null | Bind;
    }
    export declare class BezierSegment extends XF.PathSegment {
        public static point1: AttachedNode;
        public static point2: AttachedNode;
        public static point3: AttachedNode;
        public point1: RootObject;
        public point2: RootObject;
        public point3: RootObject;
    }
    export declare class CompositeTransform extends XF.Transform {
        public static centerX: AttachedNode;
        public static centerY: AttachedNode;
        public static scaleX: AttachedNode;
        public static scaleY: AttachedNode;
        public static skewX: AttachedNode;
        public static skewY: AttachedNode;
        public static rotation: AttachedNode;
        public static translateX: AttachedNode;
        public static translateY: AttachedNode;
        public centerX: number | null | Bind;
        public centerY: number | null | Bind;
        public scaleX: number | null | Bind;
        public scaleY: number | null | Bind;
        public skewX: number | null | Bind;
        public skewY: number | null | Bind;
        public rotation: number | null | Bind;
        public translateX: number | null | Bind;
        public translateY: number | null | Bind;
    }
    export declare class Ellipse extends XF.Shape {
    }
    export declare class EllipseGeometry extends XF.Geometry {
        public static center: AttachedNode;
        public static radiusX: AttachedNode;
        public static radiusY: AttachedNode;
        public center: RootObject;
        public radiusX: number | null | Bind;
        public radiusY: number | null | Bind;
    }
    export declare class Geometry extends XF.BindableObject {
    }
    export declare class GeometryGroup extends XF.Geometry {
        public static children: AttachedNode;
        public static fillRule: AttachedNode;
        public fillRule: "EvenOdd" | "Nonzero" | string | number | null | undefined | Bind;
    }
    export declare class GeometryHelper extends RootObject {
        public static ttenGeometry: AttachedNode;
    }
    export declare class Line extends XF.Shape {
        public static x1: AttachedNode;
        public static y1: AttachedNode;
        public static x2: AttachedNode;
        public static y2: AttachedNode;
        public x1: number | null | Bind;
        public y1: number | null | Bind;
        public x2: number | null | Bind;
        public y2: number | null | Bind;
    }
    export declare class LineGeometry extends XF.Geometry {
        public static startPoint: AttachedNode;
        public static endPoint: AttachedNode;
        public startPoint: RootObject;
        public endPoint: RootObject;
    }
    export declare class LineSegment extends XF.PathSegment {
        public static point: AttachedNode;
        public point: RootObject;
    }
    export declare class MatrixTransform extends XF.Transform {
        public static matrix: AttachedNode;
        public matrix: RootObject;
    }
    export declare class Path extends XF.Shape {
        public static data: AttachedNode;
        public static renderTransform: AttachedNode;
        public data: XF.Geometry;
        public renderTransform: XF.Transform;
    }
    export declare class PathFigure extends XF.BindableObject {
        public static segments: AttachedNode;
        public static startPoint: AttachedNode;
        public static isClosed: AttachedNode;
        public static isFilled: AttachedNode;
        public startPoint: RootObject;
        public isClosed: boolean | null | Bind;
        public isFilled: boolean | null | Bind;
    }
    export declare class PathGeometry extends XF.Geometry {
        public static figures: AttachedNode;
        public static fillRule: AttachedNode;
        public fillRule: "EvenOdd" | "Nonzero" | string | number | null | undefined | Bind;
    }
    export declare class PathSegment extends XF.BindableObject {
    }
    export declare class PolyBezierSegment extends XF.PathSegment {
        public static points: AttachedNode;
    }
    export declare class Polygon extends XF.Shape {
        public static points: AttachedNode;
        public static fillRule: AttachedNode;
        public fillRule: "EvenOdd" | "Nonzero" | string | number | null | undefined | Bind;
    }
    export declare class Polyline extends XF.Shape {
        public static points: AttachedNode;
        public static fillRule: AttachedNode;
        public fillRule: "EvenOdd" | "Nonzero" | string | number | null | undefined | Bind;
    }
    export declare class PolyLineSegment extends XF.PathSegment {
        public static points: AttachedNode;
    }
    export declare class PolyQuadraticBezierSegment extends XF.PathSegment {
        public static points: AttachedNode;
    }
    export declare class QuadraticBezierSegment extends XF.PathSegment {
        public static point1: AttachedNode;
        public static point2: AttachedNode;
        public point1: RootObject;
        public point2: RootObject;
    }
    export declare class Rectangle extends XF.Shape {
        public static radiusX: AttachedNode;
        public static radiusY: AttachedNode;
        public radiusX: number | null | Bind;
        public radiusY: number | null | Bind;
    }
    export declare class RectangleGeometry extends XF.Geometry {
        public static rect: AttachedNode;
        public rect: RootObject;
    }
    export declare class RotateTransform extends XF.Transform {
        public static angle: AttachedNode;
        public static centerX: AttachedNode;
        public static centerY: AttachedNode;
        public angle: number | null | Bind;
        public centerX: number | null | Bind;
        public centerY: number | null | Bind;
    }
    export declare class RoundRectangleGeometry extends XF.GeometryGroup {
        public static rect: AttachedNode;
        public static cornerRadius: AttachedNode;
        public rect: RootObject;
        public cornerRadius: RootObject;
    }
    export declare class ScaleTransform extends XF.Transform {
        public static scaleX: AttachedNode;
        public static scaleY: AttachedNode;
        public static centerX: AttachedNode;
        public static centerY: AttachedNode;
        public scaleX: number | null | Bind;
        public scaleY: number | null | Bind;
        public centerX: number | null | Bind;
        public centerY: number | null | Bind;
    }
    export declare class Shape extends XF.View {
        public static fill: AttachedNode;
        public static stroke: AttachedNode;
        public static strokeThickness: AttachedNode;
        public static strokeDashArray: AttachedNode;
        public static strokeDashOffset: AttachedNode;
        public static strokeLineCap: AttachedNode;
        public static strokeLineJoin: AttachedNode;
        public static strokeMiterLimit: AttachedNode;
        public static aspect: AttachedNode;
        public fill: XF.Brush;
        public stroke: XF.Brush;
        public strokeThickness: number | null | Bind;
        public strokeDashOffset: number | null | Bind;
        public strokeLineCap: "Flat" | "Square" | "Round" | string | number | null | undefined | Bind;
        public strokeLineJoin: "Miter" | "Bevel" | "Round" | string | number | null | undefined | Bind;
        public strokeMiterLimit: number | null | Bind;
        public aspect: "None" | "Fill" | "Uniform" | "UniformToFill" | string | number | null | undefined | Bind;
    }
    export declare class SkewTransform extends XF.Transform {
        public static angleX: AttachedNode;
        public static angleY: AttachedNode;
        public static centerX: AttachedNode;
        public static centerY: AttachedNode;
        public angleX: number | null | Bind;
        public angleY: number | null | Bind;
        public centerX: number | null | Bind;
        public centerY: number | null | Bind;
    }
    export declare class Transform extends XF.BindableObject {
        public static value: AttachedNode;
        public value: RootObject;
    }
    export declare class TransformGroup extends XF.Transform {
        public static children: AttachedNode;
    }
    export declare class TranslateTransform extends XF.Transform {
        public static x: AttachedNode;
        public static y: AttachedNode;
        public x: number | null | Bind;
        public y: number | null | Bind;
    }
}

export default XF;
export namespace Xamarin {
    export namespace Forms {
        export namespace PlatformConfiguration {
            export namespace WindowsSpecific {
                export declare class Application extends RootObject {
                    public static imageDirectory: AttachedNode;
                }
                export declare class FlyoutPage extends RootObject {
                    public static collapseStyle: AttachedNode;
                    public static collapsedPaneWidth: AttachedNode;
                }
                export declare class MasterDetailPage extends RootObject {
                    public static collapseStyle: AttachedNode;
                    public static collapsedPaneWidth: AttachedNode;
                }
                export declare class InputView extends RootObject {
                    public static detectReadingOrderFromContent: AttachedNode;
                }
                export declare class Label extends RootObject {
                    public static detectReadingOrderFromContent: AttachedNode;
                }
                export declare class ListView extends RootObject {
                    public static selectionMode: AttachedNode;
                }
                export declare class Page extends RootObject {
                    public static toolbarPlacement: AttachedNode;
                    public static toolbarDynamicOverflowEnabled: AttachedNode;
                }
                export declare class RefreshView extends RootObject {
                    public static refreshPullDirection: AttachedNode;
                }
                export declare class SearchBar extends RootObject {
                    public static isSpellCheckEnabled: AttachedNode;
                }
                export declare class TabbedPage extends RootObject {
                    public static headerIconsEnabled: AttachedNode;
                    public static headerIconsSize: AttachedNode;
                }
                export declare class VisualElement extends RootObject {
                    public static accessKey: AttachedNode;
                    public static accessKeyPlacement: AttachedNode;
                    public static accessKeyHorizontalOffset: AttachedNode;
                    public static accessKeyVerticalOffset: AttachedNode;
                    public static isLegacyColorModeEnabled: AttachedNode;
                }
                export declare class WebView extends RootObject {
                    public static isJavaScriptAlertEnabled: AttachedNode;
                    public static executionMode: AttachedNode;
                }
            }
            export namespace TizenSpecific {
                export declare class Application extends RootObject {
                    public static useBezelInteraction: AttachedNode;
                    public static overlayContent: AttachedNode;
                    public static activeBezelInteractionElement: AttachedNode;
                    public static activeBezelInteractionElementPropertyKey: RootObject;
                }
                export declare class Entry extends RootObject {
                    public static fontWeight: AttachedNode;
                }
                export declare class Image extends RootObject {
                    public static blendColor: AttachedNode;
                    public static file: AttachedNode;
                }
                export declare class ItemsView extends RootObject {
                    public static focusedItemScrollPosition: AttachedNode;
                }
                export declare class Label extends RootObject {
                    public static fontWeight: AttachedNode;
                }
                export declare class NavigationPage extends RootObject {
                    public static hasBreadCrumbsBar: AttachedNode;
                }
                export declare class Page extends RootObject {
                    public static breadCrumb: AttachedNode;
                }
                export declare class ProgressBar extends RootObject {
                    public static pulsingStatus: AttachedNode;
                    public static progressBarPulsingStatus: AttachedNode;
                }
                export declare class ScrollView extends RootObject {
                    public static verticalScrollStep: AttachedNode;
                    public static horizontalScrollStep: AttachedNode;
                }
                export declare class Switch extends RootObject {
                    public static color: AttachedNode;
                }
                export declare class VisualElement extends RootObject {
                    public static style: AttachedNode;
                    public static focusAllowed: AttachedNode;
                    public static nextFocusDirection: AttachedNode;
                    public static nextFocusUpView: AttachedNode;
                    public static nextFocusDownView: AttachedNode;
                    public static nextFocusLeftView: AttachedNode;
                    public static nextFocusRightView: AttachedNode;
                    public static nextFocusBackView: AttachedNode;
                    public static nextFocusForwardView: AttachedNode;
                    public static toolTip: AttachedNode;
                    public static isFocusAllowed: AttachedNode;
                }
            }
            export namespace macOSSpecific {
                export declare class NavigationPage extends RootObject {
                    public static navigationTransitionPushStyle: AttachedNode;
                    public static navigationTransitionPopStyle: AttachedNode;
                }
                export declare class Page extends RootObject {
                    public static tabOrder: AttachedNode;
                }
                export declare class TabbedPage extends RootObject {
                    public static tabsStyle: AttachedNode;
                }
            }
            export namespace iOSSpecific {
                export declare class Application extends RootObject {
                    public static panGestureRecognizerShouldRecognizeSimultaneously: AttachedNode;
                    public static handleControlUpdatesOnMainThread: AttachedNode;
                    public static enableAccessibilityScalingForNamedFontSizes: AttachedNode;
                }
                export declare class Cell extends RootObject {
                    public static defaultBackgroundColor: AttachedNode;
                }
                export declare class DatePicker extends RootObject {
                    public static updateMode: AttachedNode;
                }
                export declare class Entry extends RootObject {
                    public static adjustsFontSizeToFitWidth: AttachedNode;
                    public static cursorColor: AttachedNode;
                }
                export declare class FlyoutPage extends RootObject {
                    public static applyShadow: AttachedNode;
                }
                export declare class MasterDetailPage extends RootObject {
                    public static applyShadow: AttachedNode;
                }
                export declare class ListView extends RootObject {
                    public static separatorStyle: AttachedNode;
                    public static groupHeaderStyle: AttachedNode;
                    public static rowAnimationsEnabled: AttachedNode;
                }
                export declare class NavigationPage extends RootObject {
                    public static isNavigationBarTranslucent: AttachedNode;
                    public static statusBarTextColorMode: AttachedNode;
                    public static prefersLargeTitles: AttachedNode;
                    public static hideNavigationBarSeparator: AttachedNode;
                }
                export declare class Page extends RootObject {
                    public static prefersStatusBarHidden: AttachedNode;
                    public static preferredStatusBarUpdateAnimation: AttachedNode;
                    public static useSafeArea: AttachedNode;
                    public static largeTitleDisplay: AttachedNode;
                    public static prefersHomeIndicatorAutoHidden: AttachedNode;
                    public static safeAreaInsets: AttachedNode;
                    public static modalPresentationStyle: AttachedNode;
                }
                export declare class Picker extends RootObject {
                    public static updateMode: AttachedNode;
                }
                export declare class ScrollView extends RootObject {
                    public static shouldDelayContentTouches: AttachedNode;
                }
                export declare class SearchBar extends RootObject {
                    public static searchBarStyle: AttachedNode;
                }
                export declare class Slider extends RootObject {
                    public static updateOnTap: AttachedNode;
                }
                export declare class SwipeView extends RootObject {
                    public static swipeTransitionMode: AttachedNode;
                }
                export declare class TabbedPage extends RootObject {
                    public static translucencyMode: AttachedNode;
                }
                export declare class TimePicker extends RootObject {
                    public static updateMode: AttachedNode;
                }
                export declare class VisualElement extends RootObject {
                    public static blurEffect: AttachedNode;
                    public static isShadowEnabled: AttachedNode;
                    public static shadowColor: AttachedNode;
                    public static shadowRadius: AttachedNode;
                    public static shadowOffset: AttachedNode;
                    public static shadowOpacity: AttachedNode;
                    public static isLegacyColorModeEnabled: AttachedNode;
                    public static canBecomeFirstResponder: AttachedNode;
                }
                export declare class ShadowEffect extends XF.RoutingEffect {
                }
            }
            export namespace GTKSpecific {
                export declare class BoxView extends RootObject {
                    public static hasCornerRadius: AttachedNode;
                }
                export declare class NavigationPage extends RootObject {
                    public static backButtonIcon: AttachedNode;
                }
                export declare class TabbedPage extends RootObject {
                    public static tabPosition: AttachedNode;
                }
            }
            export namespace AndroidSpecific {
                export declare class Application extends RootObject {
                    public static windowSoftInputModeAdjust: AttachedNode;
                }
                export declare class Button extends RootObject {
                    public static useDefaultPadding: AttachedNode;
                    public static useDefaultShadow: AttachedNode;
                }
                export declare class Entry extends RootObject {
                    public static imeOptions: AttachedNode;
                }
                export declare class ImageButton extends RootObject {
                    public static isShadowEnabled: AttachedNode;
                    public static shadowColor: AttachedNode;
                    public static shadowRadius: AttachedNode;
                    public static shadowOffset: AttachedNode;
                }
                export declare class ListView extends RootObject {
                    public static isFastScrollEnabled: AttachedNode;
                }
                export declare class SwipeView extends RootObject {
                    public static swipeTransitionMode: AttachedNode;
                }
                export declare class TabbedPage extends RootObject {
                    public static isSwipePagingEnabled: AttachedNode;
                    public static isSmoothScrollEnabled: AttachedNode;
                    public static offscreenPageLimit: AttachedNode;
                    public static toolbarPlacement: AttachedNode;
                    public static barItemColor: AttachedNode;
                    public static barSelectedItemColor: AttachedNode;
                }
                export declare class ViewCell extends RootObject {
                    public static isContextActionsLegacyModeEnabled: AttachedNode;
                }
                export declare class VisualElement extends RootObject {
                    public static elevation: AttachedNode;
                    public static isLegacyColorModeEnabled: AttachedNode;
                }
                export declare class WebView extends RootObject {
                    public static mixedContentMode: AttachedNode;
                    public static enableZoomControls: AttachedNode;
                    public static displayZoomControls: AttachedNode;
                }
                export namespace AppCompat {
                    export declare class Application extends RootObject {
                        public static sendDisappearingEventOnPause: AttachedNode;
                        public static sendAppearingEventOnResume: AttachedNode;
                        public static shouldPreserveKeyboardOnResume: AttachedNode;
                    }
                    export declare class NavigationPage extends RootObject {
                        public static barHeight: AttachedNode;
                    }
                }
            }
        }
        export namespace Internals {
            export declare class CellExtensions extends RootObject {
                public static isGroupHeader: AttachedNode;
            }
            export declare class NameScope extends RootObject {
                public static nameScope: AttachedNode;
            }
            export declare class TextTransformUtilites extends RootObject {
                public static plainText: AttachedNode;
            }
            export declare class TemplatedItemsList$Generic extends XF.BindableObject {
                public static name: AttachedNode;
                public static shortName: AttachedNode;
                public groupDisplayBinding: RootObject;
                public groupHeaderTemplate: XF.DataTemplate;
                public static groupHeaderTemplate: AttachedNode;
                public groupHeaderTemplateProperty: RootObject;
                public groupShortNameBinding: RootObject;
                public headerContent: RootObject;
                public static headerContent: AttachedNode;
                public isGroupingEnabled: boolean | null | Bind;
                public isGroupingEnabledProperty: RootObject;
                public itemsSource: RootObject /*System.Collections.IEnumerable*/;
                public name: string | null | Bind;
                public static parent: AttachedNode;
                public progressiveLoadingProperty: RootObject;
                public shortName: string | null | Bind;
                public shortNames: RootObject /*System.Collections.Generic.IReadOnlyList`1[[System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]]*/;
                public count: number | null | Bind;
                public item: RootObject;
                public static item: AttachedNode;
            }
        }
    }
}
ns = "XF";
Object.defineProperties(XF as any, {
    AbsoluteLayout: create("AbsoluteLayout",ns),
    ActivityIndicator: create("ActivityIndicator",ns),
    AdaptiveTrigger: create("AdaptiveTrigger",ns),
    Application: create("Application",ns),
    AppLinkEntry: create("AppLinkEntry",ns),
    AutomationProperties: create("AutomationProperties",ns),
    BaseMenuItem: create("BaseMenuItem",ns),
    BindableLayout: create("BindableLayout",ns),
    BindableObject: create("BindableObject",ns),
    BoxView: create("BoxView",ns),
    Brush: create("Brush",ns),
    Button: create("Button",ns),
    CarouselPage: create("CarouselPage",ns),
    Cell: create("Cell",ns),
    EntryCell: create("EntryCell",ns),
    ImageCell: create("ImageCell",ns),
    SwitchCell: create("SwitchCell",ns),
    TextCell: create("TextCell",ns),
    ViewCell: create("ViewCell",ns),
    CheckBox: create("CheckBox",ns),
    ClickGestureRecognizer: create("ClickGestureRecognizer",ns),
    Color: create("Color",ns),
    ColumnDefinition: create("ColumnDefinition",ns),
    CompareStateTrigger: create("CompareStateTrigger",ns),
    CompressedLayout: create("CompressedLayout",ns),
    Constraint: create("Constraint",ns),
    ContentPage: create("ContentPage",ns),
    ContentPresenter: create("ContentPresenter",ns),
    ContentView: create("ContentView",ns),
    ControlTemplate: create("ControlTemplate",ns),
    DataTemplate: create("DataTemplate",ns),
    DataTemplateSelector: create("DataTemplateSelector",ns),
    DatePicker: create("DatePicker",ns),
    DeviceStateTrigger: create("DeviceStateTrigger",ns),
    DragGestureRecognizer: create("DragGestureRecognizer",ns),
    DropGestureRecognizer: create("DropGestureRecognizer",ns),
    Easing: create("Easing",ns),
    Editor: create("Editor",ns),
    Effect: create("Effect",ns),
    Element: create("Element",ns),
    ElementTemplate: create("ElementTemplate",ns),
    Entry: create("Entry",ns),
    FileImageSource: create("FileImageSource",ns),
    FlexLayout: create("FlexLayout",ns),
    FlyoutPage: create("FlyoutPage",ns),
    MasterDetailPage: create("MasterDetailPage",ns),
    FontImageSource: create("FontImageSource",ns),
    FormattedString: create("FormattedString",ns),
    Frame: create("Frame",ns),
    GestureElement: create("GestureElement",ns),
    GestureRecognizer: create("GestureRecognizer",ns),
    GradientBrush: create("GradientBrush",ns),
    GradientStop: create("GradientStop",ns),
    Grid: create("Grid",ns),
    HtmlWebViewSource: create("HtmlWebViewSource",ns),
    Image: create("Image",ns),
    ImageButton: create("ImageButton",ns),
    ImageSource: create("ImageSource",ns),
    IndicatorView: create("IndicatorView",ns),
    InputView: create("InputView",ns),
    Behavior: create("Behavior",ns),
    Behavior$Generic: create("Behavior`1",ns),
    DataTrigger: create("DataTrigger",ns),
    EventTrigger: create("EventTrigger",ns),
    MultiTrigger: create("MultiTrigger",ns),
    Trigger: create("Trigger",ns),
    TriggerBase: create("TriggerBase",ns),
    ItemsView$Generic: create("ItemsView`1",ns),
    CarouselView: create("CarouselView",ns),
    CollectionView: create("CollectionView",ns),
    GridItemsLayout: create("GridItemsLayout",ns),
    GroupableItemsView: create("GroupableItemsView",ns),
    ItemsLayout: create("ItemsLayout",ns),
    ItemsView: create("ItemsView",ns),
    LinearItemsLayout: create("LinearItemsLayout",ns),
    SelectableItemsView: create("SelectableItemsView",ns),
    StructuredItemsView: create("StructuredItemsView",ns),
    IValueConverter: create("IValueConverter",ns),
    Label: create("Label",ns),
    Layout$Generic: create("Layout`1",ns),
    Layout: create("Layout",ns),
    LinearGradientBrush: create("LinearGradientBrush",ns),
    ListView: create("ListView",ns),
    Menu: create("Menu",ns),
    MenuItem: create("MenuItem",ns),
    MultiPage$Generic: create("MultiPage`1",ns),
    NameScopeExtensions: create("NameScopeExtensions",ns),
    NavigationPage: create("NavigationPage",ns),
    NullEffect: create("NullEffect",ns),
    OpenGLView: create("OpenGLView",ns),
    OrientationStateTrigger: create("OrientationStateTrigger",ns),
    Page: create("Page",ns),
    PanGestureRecognizer: create("PanGestureRecognizer",ns),
    Picker: create("Picker",ns),
    PinchGestureRecognizer: create("PinchGestureRecognizer",ns),
    PlatformEffect$Generic: create("PlatformEffect`2",ns),
    ProgressBar: create("ProgressBar",ns),
    RadialGradientBrush: create("RadialGradientBrush",ns),
    RadioButton: create("RadioButton",ns),
    RadioButtonGroup: create("RadioButtonGroup",ns),
    RefreshView: create("RefreshView",ns),
    RelativeLayout: create("RelativeLayout",ns),
    Routing: create("Routing",ns),
    RoutingEffect: create("RoutingEffect",ns),
    RowDefinition: create("RowDefinition",ns),
    ScrollView: create("ScrollView",ns),
    SearchBar: create("SearchBar",ns),
    BackButtonBehavior: create("BackButtonBehavior",ns),
    BaseShellItem: create("BaseShellItem",ns),
    NavigableElement: create("NavigableElement",ns),
    SearchHandler: create("SearchHandler",ns),
    Shell: create("Shell",ns),
    ShellContent: create("ShellContent",ns),
    ShellGroupItem: create("ShellGroupItem",ns),
    FlyoutItem: create("FlyoutItem",ns),
    TabBar: create("TabBar",ns),
    ShellItem: create("ShellItem",ns),
    Tab: create("Tab",ns),
    ShellSection: create("ShellSection",ns),
    Slider: create("Slider",ns),
    SolidColorBrush: create("SolidColorBrush",ns),
    Span: create("Span",ns),
    StackLayout: create("StackLayout",ns),
    StateTrigger: create("StateTrigger",ns),
    StateTriggerBase: create("StateTriggerBase",ns),
    Stepper: create("Stepper",ns),
    StreamImageSource: create("StreamImageSource",ns),
    Style: create("Style",ns),
    SwipeGestureRecognizer: create("SwipeGestureRecognizer",ns),
    SwipeItem: create("SwipeItem",ns),
    SwipeItems: create("SwipeItems",ns),
    SwipeItemView: create("SwipeItemView",ns),
    SwipeView: create("SwipeView",ns),
    Switch: create("Switch",ns),
    TabbedPage: create("TabbedPage",ns),
    TableRoot: create("TableRoot",ns),
    TableSectionBase$Generic: create("TableSectionBase`1",ns),
    TableSection: create("TableSection",ns),
    TableSectionBase: create("TableSectionBase",ns),
    TableView: create("TableView",ns),
    TapGestureRecognizer: create("TapGestureRecognizer",ns),
    TemplatedPage: create("TemplatedPage",ns),
    TemplatedView: create("TemplatedView",ns),
    TimePicker: create("TimePicker",ns),
    ToolbarItem: create("ToolbarItem",ns),
    UriImageSource: create("UriImageSource",ns),
    UrlWebViewSource: create("UrlWebViewSource",ns),
    View: create("View",ns),
    VisualElement: create("VisualElement",ns),
    VisualStateManager: create("VisualStateManager",ns),
    WebView: create("WebView",ns),
    WebViewSource: create("WebViewSource",ns),
    StyleSheet: create("StyleSheet",ns),
    ArcSegment: create("ArcSegment",ns),
    BezierSegment: create("BezierSegment",ns),
    CompositeTransform: create("CompositeTransform",ns),
    Ellipse: create("Ellipse",ns),
    EllipseGeometry: create("EllipseGeometry",ns),
    Geometry: create("Geometry",ns),
    GeometryGroup: create("GeometryGroup",ns),
    GeometryHelper: create("GeometryHelper",ns),
    Line: create("Line",ns),
    LineGeometry: create("LineGeometry",ns),
    LineSegment: create("LineSegment",ns),
    MatrixTransform: create("MatrixTransform",ns),
    Path: create("Path",ns),
    PathFigure: create("PathFigure",ns),
    PathGeometry: create("PathGeometry",ns),
    PathSegment: create("PathSegment",ns),
    PolyBezierSegment: create("PolyBezierSegment",ns),
    Polygon: create("Polygon",ns),
    Polyline: create("Polyline",ns),
    PolyLineSegment: create("PolyLineSegment",ns),
    PolyQuadraticBezierSegment: create("PolyQuadraticBezierSegment",ns),
    QuadraticBezierSegment: create("QuadraticBezierSegment",ns),
    Rectangle: create("Rectangle",ns),
    RectangleGeometry: create("RectangleGeometry",ns),
    RotateTransform: create("RotateTransform",ns),
    RoundRectangleGeometry: create("RoundRectangleGeometry",ns),
    ScaleTransform: create("ScaleTransform",ns),
    Shape: create("Shape",ns),
    SkewTransform: create("SkewTransform",ns),
    Transform: create("Transform",ns),
    TransformGroup: create("TransformGroup",ns),
    TranslateTransform: create("TranslateTransform",ns),
});
ns = "Xamarin.Forms.PlatformConfiguration.WindowsSpecific";
Object.defineProperties(Xamarin.Forms.PlatformConfiguration.WindowsSpecific as any, {
    Application: create("Application",ns),
    FlyoutPage: create("FlyoutPage",ns),
    MasterDetailPage: create("MasterDetailPage",ns),
    InputView: create("InputView",ns),
    Label: create("Label",ns),
    ListView: create("ListView",ns),
    Page: create("Page",ns),
    RefreshView: create("RefreshView",ns),
    SearchBar: create("SearchBar",ns),
    TabbedPage: create("TabbedPage",ns),
    VisualElement: create("VisualElement",ns),
    WebView: create("WebView",ns),
});
ns = "Xamarin.Forms.PlatformConfiguration.TizenSpecific";
Object.defineProperties(Xamarin.Forms.PlatformConfiguration.TizenSpecific as any, {
    Application: create("Application",ns),
    Entry: create("Entry",ns),
    Image: create("Image",ns),
    ItemsView: create("ItemsView",ns),
    Label: create("Label",ns),
    NavigationPage: create("NavigationPage",ns),
    Page: create("Page",ns),
    ProgressBar: create("ProgressBar",ns),
    ScrollView: create("ScrollView",ns),
    Switch: create("Switch",ns),
    VisualElement: create("VisualElement",ns),
});
ns = "Xamarin.Forms.PlatformConfiguration.macOSSpecific";
Object.defineProperties(Xamarin.Forms.PlatformConfiguration.macOSSpecific as any, {
    NavigationPage: create("NavigationPage",ns),
    Page: create("Page",ns),
    TabbedPage: create("TabbedPage",ns),
});
ns = "Xamarin.Forms.PlatformConfiguration.iOSSpecific";
Object.defineProperties(Xamarin.Forms.PlatformConfiguration.iOSSpecific as any, {
    Application: create("Application",ns),
    Cell: create("Cell",ns),
    DatePicker: create("DatePicker",ns),
    Entry: create("Entry",ns),
    FlyoutPage: create("FlyoutPage",ns),
    MasterDetailPage: create("MasterDetailPage",ns),
    ListView: create("ListView",ns),
    NavigationPage: create("NavigationPage",ns),
    Page: create("Page",ns),
    Picker: create("Picker",ns),
    ScrollView: create("ScrollView",ns),
    SearchBar: create("SearchBar",ns),
    Slider: create("Slider",ns),
    SwipeView: create("SwipeView",ns),
    TabbedPage: create("TabbedPage",ns),
    TimePicker: create("TimePicker",ns),
    VisualElement: create("VisualElement",ns),
    ShadowEffect: create("ShadowEffect",ns),
});
ns = "Xamarin.Forms.PlatformConfiguration.GTKSpecific";
Object.defineProperties(Xamarin.Forms.PlatformConfiguration.GTKSpecific as any, {
    BoxView: create("BoxView",ns),
    NavigationPage: create("NavigationPage",ns),
    TabbedPage: create("TabbedPage",ns),
});
ns = "Xamarin.Forms.PlatformConfiguration.AndroidSpecific";
Object.defineProperties(Xamarin.Forms.PlatformConfiguration.AndroidSpecific as any, {
    Application: create("Application",ns),
    Button: create("Button",ns),
    Entry: create("Entry",ns),
    ImageButton: create("ImageButton",ns),
    ListView: create("ListView",ns),
    SwipeView: create("SwipeView",ns),
    TabbedPage: create("TabbedPage",ns),
    ViewCell: create("ViewCell",ns),
    VisualElement: create("VisualElement",ns),
    WebView: create("WebView",ns),
});
ns = "Xamarin.Forms.PlatformConfiguration.AndroidSpecific.AppCompat";
Object.defineProperties(Xamarin.Forms.PlatformConfiguration.AndroidSpecific.AppCompat as any, {
    Application: create("Application",ns),
    NavigationPage: create("NavigationPage",ns),
});
ns = "Xamarin.Forms.Internals";
Object.defineProperties(Xamarin.Forms.Internals as any, {
    CellExtensions: create("CellExtensions",ns),
    NameScope: create("NameScope",ns),
    TextTransformUtilites: create("TextTransformUtilites",ns),
    TemplatedItemsList$Generic: create("TemplatedItemsList`2",ns),
});

