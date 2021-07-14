//tslint:disable
import XNode, { RootObject, NodeFactory, AttachedNode } from "@web-atoms/core/dist/core/XNode";
import Bind from "@web-atoms/core/dist/core/Bind";
import { ColorItem } from "@web-atoms/core/dist/core/Colors";

declare var bridge: any;
const assemblyName = `Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null`;
let ns = ``;
function create(name: string, ns: string) {
    return {
        configurable: true,
        enumerable: true,
        get() {
            const t = bridge.getClass(`${ns}.${name}, ${assemblyName}`); 
            Object.defineProperty(this, name, {
                configurable: true,
                enumerable: true,
                writable: true,
                value: t
            });
            return t;
        }
    };
}

namespace XF {
    export declare class AbsoluteLayout extends XF.Layout$Generic {
        public static autoSize: number | null;
        public static layoutBounds: AttachedNode;
        public static layoutFlags: AttachedNode;
        /**
        * Xamarin.Forms.AbsoluteLayout+IAbsoluteList`1[[Xamarin.Forms.View, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null]]
        */
        public children: RootObject | Bind;
    }
    export declare class ActivityIndicator extends XF.View {
        public static isRunning: AttachedNode;
        public static color: AttachedNode;
        /**
        * Xamarin.Forms.Color
        */
        public color: XF.Color | ColorItem | string | null | Bind;
        /**
        * System.Boolean
        */
        public isRunning: boolean | null | Bind;
    }
    export declare class AdaptiveTrigger extends XF.StateTriggerBase {
        public static minWindowHeight: AttachedNode;
        public static minWindowWidth: AttachedNode;
        /**
        * System.Double
        */
        public minWindowHeight: number | null | Bind;
        /**
        * System.Double
        */
        public minWindowWidth: number | null | Bind;
    }
    export declare class Application extends XF.Element {
        public static logWarningsToApplicationOutput: boolean | null;
        public static current: XF.Application;
        /**
        * Xamarin.Forms.IDispatcher
        */
        public dispatcher: RootObject | Bind;
        /**
        * Xamarin.Forms.IAppLinks
        */
        public appLinks: RootObject | Bind;
        /**
        * Xamarin.Forms.Page
        */
        public mainPage: XF.Page | Bind;
        public static mainPage: AttachedNode;
        /**
        * System.Collections.Generic.IDictionary`2[[System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e],[System.Object, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]]
        */
        public properties: RootObject /*System.Collections.Generic.IDictionary`2[[System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e],[System.Object, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]]*/ | Bind;
        /**
        * Xamarin.Forms.ResourceDictionary
        */
        public resources: any;
        public static resources: AttachedNode;
        /**
        * Xamarin.Forms.OSAppTheme
        */
        public userAppTheme: "Unspecified" | "Light" | "Dark" | Bind;
        /**
        * Xamarin.Forms.OSAppTheme
        */
        public requestedTheme: "Unspecified" | "Light" | "Dark" | Bind;
    }
    export declare class AppLinkEntry extends XF.Element {
        public static title: AttachedNode;
        public static description: AttachedNode;
        public static thumbnail: AttachedNode;
        public static appLinkUri: AttachedNode;
        public static isLinkActive: AttachedNode;
        /**
        * System.Uri
        */
        public appLinkUri: RootObject /*System.Uri*/ | Bind;
        /**
        * System.String
        */
        public description: string | null | Bind;
        /**
        * System.Boolean
        */
        public isLinkActive: boolean | null | Bind;
        /**
        * System.Collections.Generic.IDictionary`2[[System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e],[System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]]
        */
        public keyValues: RootObject /*System.Collections.Generic.IDictionary`2[[System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e],[System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]]*/ | Bind;
        /**
        * Xamarin.Forms.ImageSource
        */
        public thumbnail: /*ImageSource*/ any | Bind;
        /**
        * System.String
        */
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
        /**
        * Xamarin.Forms.IDispatcher
        */
        public dispatcher: RootObject | Bind;
        /**
        * System.Object
        */
        public bindingContext: RootObject /*System.Object*/ | Bind;
    }
    export declare class BoxView extends XF.View {
        public static color: AttachedNode;
        public static cornerRadius: AttachedNode;
        /**
        * Xamarin.Forms.Color
        */
        public color: XF.Color | ColorItem | string | null | Bind;
        /**
        * Xamarin.Forms.CornerRadius
        */
        public cornerRadius: /*CornerRadius*/ any | Bind;
    }
    export declare class Brush extends XF.Element {
        public static default: "AliceBlue" | "AntiqueWhite" | "Aqua" | "Aquamarine" | "Azure" | "Beige" | "Bisque" | "Black" | "BlanchedAlmond" | "Blue" | "BlueViolet" | "Brown" | "BurlyWood" | "CadetBlue" | "Chartreuse" | "Chocolate" | "Coral" | "CornflowerBlue" | "Cornsilk" | "Crimson" | "Cyan" | "DarkBlue" | "DarkCyan" | "DarkGoldenrod" | "DarkGray" | "DarkGreen" | "DarkKhaki" | "DarkMagenta" | "DarkOliveGreen" | "DarkOrange" | "DarkOrchid" | "DarkRed" | "DarkSalmon" | "DarkSeaGreen" | "DarkSlateBlue" | "DarkSlateGray" | "DarkTurquoise" | "DarkViolet" | "DeepPink" | "DeepSkyBlue" | "DimGray" | "DodgerBlue" | "Firebrick" | "FloralWhite" | "ForestGreen" | "Fuchsia" | "Gainsboro" | "GhostWhite" | "Gold" | "Goldenrod" | "Gray" | "Green" | "GreenYellow" | "Honeydew" | "HotPink" | "IndianRed" | "Indigo" | "Ivory" | "Khaki" | "Lavender" | "LavenderBlush" | "LawnGreen" | "LemonChiffon" | "LightBlue" | "LightCoral" | "LightCyan" | "LightGoldenrodYellow" | "LightGray" | "LightGreen" | "LightPink" | "LightSalmon" | "LightSeaGreen" | "LightSkyBlue" | "LightSlateGray" | "LightSteelBlue" | "LightYellow" | "Lime" | "LimeGreen" | "Linen" | "Magenta" | "Maroon" | "MediumAquamarine" | "MediumBlue" | "MediumOrchid" | "MediumPurple" | "MediumSeaGreen" | "MediumSlateBlue" | "MediumSpringGreen" | "MediumTurquoise" | "MediumVioletRed" | "MidnightBlue" | "MintCream" | "MistyRose" | "Moccasin" | "NavajoWhite" | "Navy" | "OldLace" | "Olive" | "OliveDrab" | "Orange" | "OrangeRed" | "Orchid" | "PaleGoldenrod" | "PaleGreen" | "PaleTurquoise" | "PaleVioletRed" | "PapayaWhip" | "PeachPuff" | "Peru" | "Pink" | "Plum" | "PowderBlue" | "Purple" | "Red" | "RosyBrown" | "RoyalBlue" | "SaddleBrown" | "Salmon" | "SandyBrown" | "SeaGreen" | "SeaShell" | "Sienna" | "Silver" | "SkyBlue" | "SlateBlue" | "SlateGray" | "Snow" | "SpringGreen" | "SteelBlue" | "Tan" | "Teal" | "Thistle" | "Tomato" | "Transparent" | "Turquoise" | "Violet" | "Wheat" | "White" | "WhiteSmoke" | "Yellow" | "YellowGreen" | XF.Brush | Bind;
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
        /**
        * System.Boolean
        */
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
        /**
        * Xamarin.Forms.Thickness
        */
        public padding: /*Thickness*/ any | Bind;
        /**
        * Xamarin.Forms.Color
        */
        public borderColor: XF.Color | ColorItem | string | null | Bind;
        /**
        * System.Int32
        */
        public cornerRadius: number | null | Bind;
        /**
        * System.Double
        */
        public borderWidth: number | null | Bind;
        /**
        * Xamarin.Forms.Button+ButtonContentLayout
        */
        public contentLayout: /*ButtonContentLayout*/ any | Bind;
        /**
        * System.Windows.Input.ICommand
        */
        public command: RootObject /*System.Windows.Input.ICommand*/ | Bind;
        /**
        * System.Object
        */
        public commandParameter: RootObject /*System.Object*/ | Bind;
        /**
        * Xamarin.Forms.Font
        */
        public font: /*Font*/ any | Bind;
        /**
        * Xamarin.Forms.ImageSource
        */
        public imageSource: /*ImageSource*/ any | Bind;
        /**
        * System.String
        */
        public text: string | null | Bind;
        /**
        * Xamarin.Forms.Color
        */
        public textColor: XF.Color | ColorItem | string | null | Bind;
        /**
        * System.Double
        */
        public characterSpacing: number | null | Bind;
        /**
        * System.Boolean
        */
        public isPressed: boolean | null | Bind;
        /**
        * Xamarin.Forms.FontAttributes
        */
        public fontAttributes: "None" | "Bold" | "Italic" | Bind;
        /**
        * System.String
        */
        public fontFamily: string | null | Bind;
        /**
        * System.Double
        */
        public fontSize: number | null | Bind;
        /**
        * Xamarin.Forms.TextTransform
        */
        public textTransform: "None" | "Default" | "Lowercase" | "Uppercase" | Bind;
    }
    export declare class CarouselPage extends XF.MultiPage$Generic {
    }
    export declare class Cell extends XF.Element {
        public static isEnabled: AttachedNode;
        public static defaultCellHeight: number;
        /**
        * System.Collections.Generic.IList`1[[Xamarin.Forms.MenuItem, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null]]
        */
        public contextActions: any;
        public static contextActions: AttachedNode;
        /**
        * System.Boolean
        */
        public hasContextActions: boolean | null | Bind;
        /**
        * System.Boolean
        */
        public isContextActionsLegacyModeEnabled: boolean | null | Bind;
        /**
        * System.Double
        */
        public height: number | null | Bind;
        /**
        * System.Boolean
        */
        public isEnabled: boolean | null | Bind;
        /**
        * System.Double
        */
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
        /**
        * Xamarin.Forms.TextAlignment
        */
        public horizontalTextAlignment: "Start" | "Center" | "End" | Bind;
        /**
        * Xamarin.Forms.TextAlignment
        */
        public verticalTextAlignment: "Start" | "Center" | "End" | Bind;
        /**
        * Xamarin.Forms.Keyboard
        */
        public keyboard: /*Keyboard*/ any | Bind;
        /**
        * System.String
        */
        public label: string | null | Bind;
        /**
        * Xamarin.Forms.Color
        */
        public labelColor: XF.Color | ColorItem | string | null | Bind;
        /**
        * System.String
        */
        public placeholder: string | null | Bind;
        /**
        * System.String
        */
        public text: string | null | Bind;
    }
    export declare class ImageCell extends XF.TextCell {
        public static imageSource: AttachedNode;
        /**
        * Xamarin.Forms.ImageSource
        */
        public imageSource: /*ImageSource*/ any | Bind;
    }
    export declare class SwitchCell extends XF.Cell {
        public static on: AttachedNode;
        public static text: AttachedNode;
        public static onColor: AttachedNode;
        /**
        * Xamarin.Forms.Color
        */
        public onColor: XF.Color | ColorItem | string | null | Bind;
        /**
        * System.Boolean
        */
        public on: boolean | null | Bind;
        /**
        * System.String
        */
        public text: string | null | Bind;
    }
    export declare class TextCell extends XF.Cell {
        public static command: AttachedNode;
        public static commandParameter: AttachedNode;
        public static text: AttachedNode;
        public static detail: AttachedNode;
        public static textColor: AttachedNode;
        public static detailColor: AttachedNode;
        /**
        * System.Windows.Input.ICommand
        */
        public command: RootObject /*System.Windows.Input.ICommand*/ | Bind;
        /**
        * System.Object
        */
        public commandParameter: RootObject /*System.Object*/ | Bind;
        /**
        * System.String
        */
        public detail: string | null | Bind;
        /**
        * Xamarin.Forms.Color
        */
        public detailColor: XF.Color | ColorItem | string | null | Bind;
        /**
        * System.String
        */
        public text: string | null | Bind;
        /**
        * Xamarin.Forms.Color
        */
        public textColor: XF.Color | ColorItem | string | null | Bind;
    }
    export declare class ViewCell extends XF.Cell {
        /**
        * Xamarin.Forms.View
        */
        public view: XF.View | Bind;
        public static view: AttachedNode;
    }
    export declare class CheckBox extends XF.View {
        public static isChecked: AttachedNode;
        public static color: AttachedNode;
        public static isCheckedVisualState: string;
        /**
        * Xamarin.Forms.Color
        */
        public color: XF.Color | ColorItem | string | null | Bind;
        /**
        * System.Boolean
        */
        public isChecked: boolean | null | Bind;
    }
    export declare class ClickGestureRecognizer extends XF.GestureRecognizer {
        public static command: AttachedNode;
        public static commandParameter: AttachedNode;
        public static numberOfClicksRequired: AttachedNode;
        public static buttons: AttachedNode;
        /**
        * System.Windows.Input.ICommand
        */
        public command: RootObject /*System.Windows.Input.ICommand*/ | Bind;
        /**
        * System.Object
        */
        public commandParameter: RootObject /*System.Object*/ | Bind;
        /**
        * System.Int32
        */
        public numberOfClicksRequired: number | null | Bind;
        /**
        * Xamarin.Forms.ButtonsMask
        */
        public buttons: "Primary" | "Secondary" | Bind;
    }
    export declare class Color extends RootObject /*System.ValueType*/ {
        public static default: XF.Color | ColorItem | string | null;
        public static accent: XF.Color | ColorItem | string | null;
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
        /**
        * System.Double
        */
        public a: number | null | Bind;
        /**
        * System.Double
        */
        public r: number | null | Bind;
        /**
        * System.Double
        */
        public g: number | null | Bind;
        /**
        * System.Double
        */
        public b: number | null | Bind;
        /**
        * System.Double
        */
        public hue: number | null | Bind;
        /**
        * System.Double
        */
        public saturation: number | null | Bind;
        /**
        * System.Double
        */
        public luminosity: number | null | Bind;
    }
    export declare class ColumnDefinition extends XF.BindableObject {
        public static width: AttachedNode;
        /**
        * Xamarin.Forms.GridLength
        */
        public width: "Auto" | number | string | Bind;
    }
    export declare class CompareStateTrigger extends XF.StateTriggerBase {
        public static property: AttachedNode;
        public static value: AttachedNode;
        /**
        * System.Object
        */
        public property: RootObject /*System.Object*/ | Bind;
        /**
        * System.Object
        */
        public value: RootObject /*System.Object*/ | Bind;
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
        /**
        * Xamarin.Forms.View
        */
        public content: XF.View | Bind;
    }
    export declare class ContentPresenter extends XF.Layout {
        public static content: AttachedNode;
        /**
        * Xamarin.Forms.View
        */
        public content: XF.View | Bind;
    }
    export declare class ContentView extends XF.TemplatedView {
        public static content: AttachedNode;
        /**
        * Xamarin.Forms.View
        */
        public content: XF.View | Bind;
    }
    export declare class ControlTemplate extends XF.ElementTemplate {
    }
    export declare class DataTemplate extends XF.ElementTemplate {
        /**
        * System.Collections.Generic.IDictionary`2[[Xamarin.Forms.BindableProperty, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null],[Xamarin.Forms.BindingBase, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null]]
        */
        public bindings: RootObject /*System.Collections.Generic.IDictionary`2[[Xamarin.Forms.BindableProperty, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null],[Xamarin.Forms.BindingBase, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null]]*/ | Bind;
        /**
        * System.Collections.Generic.IDictionary`2[[Xamarin.Forms.BindableProperty, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null],[System.Object, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]]
        */
        public values: RootObject /*System.Collections.Generic.IDictionary`2[[Xamarin.Forms.BindableProperty, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null],[System.Object, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]]*/ | Bind;
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
        /**
        * System.DateTime
        */
        public date: Date | null | Bind;
        /**
        * System.String
        */
        public format: string | null | Bind;
        /**
        * Xamarin.Forms.TextTransform
        */
        public textTransform: "None" | "Default" | "Lowercase" | "Uppercase" | Bind;
        /**
        * System.DateTime
        */
        public maximumDate: Date | null | Bind;
        /**
        * System.DateTime
        */
        public minimumDate: Date | null | Bind;
        /**
        * Xamarin.Forms.Color
        */
        public textColor: XF.Color | ColorItem | string | null | Bind;
        /**
        * System.Double
        */
        public characterSpacing: number | null | Bind;
        /**
        * Xamarin.Forms.FontAttributes
        */
        public fontAttributes: "None" | "Bold" | "Italic" | Bind;
        /**
        * System.String
        */
        public fontFamily: string | null | Bind;
        /**
        * System.Double
        */
        public fontSize: number | null | Bind;
    }
    export declare class DeviceStateTrigger extends XF.StateTriggerBase {
        public static device: AttachedNode;
        /**
        * System.String
        */
        public device: string | null | Bind;
    }
    export declare class DragGestureRecognizer extends XF.GestureRecognizer {
        public static canDrag: AttachedNode;
        public static dropCompletedCommand: AttachedNode;
        public static dropCompletedCommandParameter: AttachedNode;
        public static dragStartingCommand: AttachedNode;
        public static dragStartingCommandParameter: AttachedNode;
        /**
        * System.Boolean
        */
        public canDrag: boolean | null | Bind;
        /**
        * System.Windows.Input.ICommand
        */
        public dropCompletedCommand: RootObject /*System.Windows.Input.ICommand*/ | Bind;
        /**
        * System.Object
        */
        public dropCompletedCommandParameter: RootObject /*System.Object*/ | Bind;
        /**
        * System.Windows.Input.ICommand
        */
        public dragStartingCommand: RootObject /*System.Windows.Input.ICommand*/ | Bind;
        /**
        * System.Object
        */
        public dragStartingCommandParameter: RootObject /*System.Object*/ | Bind;
    }
    export declare class DropGestureRecognizer extends XF.GestureRecognizer {
        public static allowDrop: AttachedNode;
        public static dragOverCommand: AttachedNode;
        public static dragOverCommandParameter: AttachedNode;
        public static dragLeaveCommand: AttachedNode;
        public static dragLeaveCommandParameter: AttachedNode;
        public static dropCommand: AttachedNode;
        public static dropCommandParameter: AttachedNode;
        /**
        * System.Boolean
        */
        public allowDrop: boolean | null | Bind;
        /**
        * System.Windows.Input.ICommand
        */
        public dragOverCommand: RootObject /*System.Windows.Input.ICommand*/ | Bind;
        /**
        * System.Object
        */
        public dragOverCommandParameter: RootObject /*System.Object*/ | Bind;
        /**
        * System.Windows.Input.ICommand
        */
        public dragLeaveCommand: RootObject /*System.Windows.Input.ICommand*/ | Bind;
        /**
        * System.Object
        */
        public dragLeaveCommandParameter: RootObject /*System.Object*/ | Bind;
        /**
        * System.Windows.Input.ICommand
        */
        public dropCommand: RootObject /*System.Windows.Input.ICommand*/ | Bind;
        /**
        * System.Object
        */
        public dropCommandParameter: RootObject /*System.Object*/ | Bind;
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
        /**
        * Xamarin.Forms.EditorAutoSizeOption
        */
        public autoSize: "Disabled" | "TextChanges" | Bind;
        /**
        * Xamarin.Forms.FontAttributes
        */
        public fontAttributes: "None" | "Bold" | "Italic" | Bind;
        /**
        * System.Boolean
        */
        public isTextPredictionEnabled: boolean | null | Bind;
        /**
        * System.String
        */
        public fontFamily: string | null | Bind;
        /**
        * System.Double
        */
        public fontSize: number | null | Bind;
    }
    export declare class Effect extends RootObject {
        /**
        * Xamarin.Forms.Element
        */
        public element: XF.Element | Bind;
        public static element: AttachedNode;
        /**
        * System.Boolean
        */
        public isAttached: boolean | null | Bind;
        /**
        * System.String
        */
        public resolveId: string | null | Bind;
    }
    export declare class Element extends XF.BindableObject {
        public static menu: AttachedNode;
        public static automationId: AttachedNode;
        public static classId: AttachedNode;
        /**
        * System.String
        */
        public automationId: string | null | Bind;
        /**
        * System.String
        */
        public classId: string | null | Bind;
        /**
        * System.Collections.Generic.IList`1[[Xamarin.Forms.Effect, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null]]
        */
        public effects: any;
        public static effects: AttachedNode;
        /**
        * System.Guid
        */
        public id: RootObject /*System.Guid*/ | Bind;
        /**
        * System.String
        */
        public styleId: string | null | Bind;
        /**
        * Xamarin.Forms.Element
        */
        public parent: XF.Element | Bind;
        public static parent: AttachedNode;
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
        /**
        * Xamarin.Forms.TextAlignment
        */
        public horizontalTextAlignment: "Start" | "Center" | "End" | Bind;
        /**
        * Xamarin.Forms.TextAlignment
        */
        public verticalTextAlignment: "Start" | "Center" | "End" | Bind;
        /**
        * System.Boolean
        */
        public isPassword: boolean | null | Bind;
        /**
        * Xamarin.Forms.FontAttributes
        */
        public fontAttributes: "None" | "Bold" | "Italic" | Bind;
        /**
        * System.String
        */
        public fontFamily: string | null | Bind;
        /**
        * System.Double
        */
        public fontSize: number | null | Bind;
        /**
        * System.Boolean
        */
        public isTextPredictionEnabled: boolean | null | Bind;
        /**
        * Xamarin.Forms.ReturnType
        */
        public returnType: "Default" | "Done" | "Go" | "Next" | "Search" | "Send" | Bind;
        /**
        * System.Int32
        */
        public cursorPosition: number | null | Bind;
        /**
        * System.Int32
        */
        public selectionLength: number | null | Bind;
        /**
        * System.Windows.Input.ICommand
        */
        public returnCommand: RootObject /*System.Windows.Input.ICommand*/ | Bind;
        /**
        * System.Object
        */
        public returnCommandParameter: RootObject /*System.Object*/ | Bind;
        /**
        * Xamarin.Forms.ClearButtonVisibility
        */
        public clearButtonVisibility: "Never" | "WhileEditing" | Bind;
    }
    export declare class FileImageSource extends XF.ImageSource {
        public static file: AttachedNode;
        /**
        * System.Boolean
        */
        public isEmpty: boolean | null | Bind;
        /**
        * System.String
        */
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
        /**
        * Xamarin.Forms.FlexDirection
        */
        public direction: "Row" | "RowReverse" | "Column" | "ColumnReverse" | Bind;
        /**
        * Xamarin.Forms.FlexJustify
        */
        public justifyContent: "Center" | "Start" | "End" | "SpaceBetween" | "SpaceAround" | "SpaceEvenly" | Bind;
        /**
        * Xamarin.Forms.FlexAlignContent
        */
        public alignContent: "Stretch" | "Center" | "Start" | "End" | "SpaceBetween" | "SpaceAround" | "SpaceEvenly" | Bind;
        /**
        * Xamarin.Forms.FlexAlignItems
        */
        public alignItems: "Stretch" | "Center" | "Start" | "End" | Bind;
        /**
        * Xamarin.Forms.FlexPosition
        */
        public position: "Relative" | "Absolute" | Bind;
        /**
        * Xamarin.Forms.FlexWrap
        */
        public wrap: "NoWrap" | "Wrap" | "Reverse" | Bind;
    }
    export declare class FlyoutPage extends XF.Page {
        public static isGestureEnabled: AttachedNode;
        public static isPresented: AttachedNode;
        public static flyoutLayoutBehavior: AttachedNode;
        /**
        * Xamarin.Forms.Page
        */
        public detail: XF.Page | Bind;
        public static detail: AttachedNode;
        /**
        * System.Boolean
        */
        public isGestureEnabled: boolean | null | Bind;
        /**
        * System.Boolean
        */
        public isPresented: boolean | null | Bind;
        /**
        * Xamarin.Forms.Page
        */
        public flyout: XF.Page | Bind;
        public static flyout: AttachedNode;
        /**
        * Xamarin.Forms.FlyoutLayoutBehavior
        */
        public flyoutLayoutBehavior: "Default" | "SplitOnLandscape" | "Split" | "Popover" | "SplitOnPortrait" | Bind;
    }
    export declare class MasterDetailPage extends XF.FlyoutPage {
        public static masterBehavior: AttachedNode;
        /**
        * Xamarin.Forms.Page
        */
        public master: XF.Page | Bind;
        public static master: AttachedNode;
        /**
        * Xamarin.Forms.MasterBehavior
        */
        public masterBehavior: "Default" | "SplitOnLandscape" | "Split" | "Popover" | "SplitOnPortrait" | Bind;
    }
    export declare class FontImageSource extends XF.ImageSource {
        public static color: AttachedNode;
        public static fontFamily: AttachedNode;
        public static glyph: AttachedNode;
        public static size: AttachedNode;
        /**
        * System.Boolean
        */
        public isEmpty: boolean | null | Bind;
        /**
        * Xamarin.Forms.Color
        */
        public color: XF.Color | ColorItem | string | null | Bind;
        /**
        * System.String
        */
        public fontFamily: string | null | Bind;
        /**
        * System.String
        */
        public glyph: string | null | Bind;
        /**
        * System.Double
        */
        public size: number | null | Bind;
    }
    export declare class FormattedString extends XF.Element {
        /**
        * System.Collections.Generic.IList`1[[Xamarin.Forms.Span, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null]]
        */
        public spans: any;
        public static spans: AttachedNode;
    }
    export declare class Frame extends XF.ContentView {
        public static outlineColor: AttachedNode;
        public static borderColor: AttachedNode;
        public static hasShadow: AttachedNode;
        public static cornerRadius: AttachedNode;
        /**
        * System.Boolean
        */
        public hasShadow: boolean | null | Bind;
        /**
        * Xamarin.Forms.Color
        */
        public borderColor: XF.Color | ColorItem | string | null | Bind;
        /**
        * System.Single
        */
        public cornerRadius: number | null | Bind;
    }
    export declare class GestureElement extends XF.Element {
        /**
        * System.Collections.Generic.IList`1[[Xamarin.Forms.IGestureRecognizer, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null]]
        */
        public gestureRecognizers: any;
        public static gestureRecognizers: AttachedNode;
    }
    export declare class GestureRecognizer extends XF.Element {
    }
    export declare class GradientBrush extends XF.Brush {
        public static gradientStops: AttachedNode;
        /**
        * Xamarin.Forms.GradientStopCollection
        */
        public gradientStops: any;
    }
    export declare class GradientStop extends XF.Element {
        public static color: AttachedNode;
        public static offset: AttachedNode;
        /**
        * Xamarin.Forms.Color
        */
        public color: XF.Color | ColorItem | string | null | Bind;
        /**
        * System.Single
        */
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
        /**
        * Xamarin.Forms.Grid+IGridList`1[[Xamarin.Forms.View, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null]]
        */
        public children: RootObject | Bind;
        /**
        * Xamarin.Forms.ColumnDefinitionCollection
        */
        public columnDefinitions: any;
        /**
        * System.Double
        */
        public columnSpacing: number | null | Bind;
        /**
        * Xamarin.Forms.RowDefinitionCollection
        */
        public rowDefinitions: any;
        /**
        * System.Double
        */
        public rowSpacing: number | null | Bind;
    }
    export declare class HtmlWebViewSource extends XF.WebViewSource {
        public static html: AttachedNode;
        public static baseUrl: AttachedNode;
        /**
        * System.String
        */
        public baseUrl: string | null | Bind;
        /**
        * System.String
        */
        public html: string | null | Bind;
    }
    export declare class Image extends XF.View {
        public static source: AttachedNode;
        public static aspect: AttachedNode;
        public static isOpaque: AttachedNode;
        public static isLoading: AttachedNode;
        public static isAnimationPlaying: AttachedNode;
        /**
        * Xamarin.Forms.Aspect
        */
        public aspect: "AspectFit" | "AspectFill" | "Fill" | Bind;
        /**
        * System.Boolean
        */
        public isLoading: boolean | null | Bind;
        /**
        * System.Boolean
        */
        public isOpaque: boolean | null | Bind;
        /**
        * System.Boolean
        */
        public isAnimationPlaying: boolean | null | Bind;
        /**
        * Xamarin.Forms.ImageSource
        */
        public source: /*ImageSource*/ any | Bind;
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
        /**
        * Xamarin.Forms.Color
        */
        public borderColor: XF.Color | ColorItem | string | null | Bind;
        /**
        * System.Int32
        */
        public cornerRadius: number | null | Bind;
        /**
        * System.Double
        */
        public borderWidth: number | null | Bind;
        /**
        * Xamarin.Forms.Aspect
        */
        public aspect: "AspectFit" | "AspectFill" | "Fill" | Bind;
        /**
        * System.Boolean
        */
        public isLoading: boolean | null | Bind;
        /**
        * System.Boolean
        */
        public isPressed: boolean | null | Bind;
        /**
        * System.Boolean
        */
        public isOpaque: boolean | null | Bind;
        /**
        * System.Windows.Input.ICommand
        */
        public command: RootObject /*System.Windows.Input.ICommand*/ | Bind;
        /**
        * System.Object
        */
        public commandParameter: RootObject /*System.Object*/ | Bind;
        /**
        * Xamarin.Forms.ImageSource
        */
        public source: /*ImageSource*/ any | Bind;
        /**
        * Xamarin.Forms.Thickness
        */
        public padding: /*Thickness*/ any | Bind;
    }
    export declare class ImageSource extends XF.Element {
        /**
        * System.Boolean
        */
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
        /**
        * Xamarin.Forms.IndicatorShape
        */
        public indicatorsShape: "Circle" | "Square" | Bind;
        /**
        * Xamarin.Forms.Layout`1[[Xamarin.Forms.View, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null]]
        */
        public indicatorLayout: XF.Layout$Generic | Bind;
        public static indicatorLayout: AttachedNode;
        /**
        * System.Int32
        */
        public position: number | null | Bind;
        /**
        * System.Int32
        */
        public count: number | null | Bind;
        /**
        * System.Int32
        */
        public maximumVisible: number | null | Bind;
        /**
        * Xamarin.Forms.DataTemplate
        */
        public indicatorTemplate: XF.DataTemplate | Bind;
        /**
        * System.Boolean
        */
        public hideSingle: boolean | null | Bind;
        /**
        * Xamarin.Forms.Color
        */
        public indicatorColor: XF.Color | ColorItem | string | null | Bind;
        /**
        * Xamarin.Forms.Color
        */
        public selectedIndicatorColor: XF.Color | ColorItem | string | null | Bind;
        /**
        * System.Double
        */
        public indicatorSize: number | null | Bind;
        /**
        * System.Collections.IEnumerable
        */
        public itemsSource: RootObject /*System.Collections.IEnumerable*/ | Bind;
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
        /**
        * System.Int32
        */
        public maxLength: number | null | Bind;
        /**
        * System.String
        */
        public text: string | null | Bind;
        /**
        * Xamarin.Forms.Keyboard
        */
        public keyboard: /*Keyboard*/ any | Bind;
        /**
        * System.Boolean
        */
        public isSpellCheckEnabled: boolean | null | Bind;
        /**
        * System.Boolean
        */
        public isReadOnly: boolean | null | Bind;
        /**
        * System.String
        */
        public placeholder: string | null | Bind;
        /**
        * Xamarin.Forms.Color
        */
        public placeholderColor: XF.Color | ColorItem | string | null | Bind;
        /**
        * Xamarin.Forms.Color
        */
        public textColor: XF.Color | ColorItem | string | null | Bind;
        /**
        * System.Double
        */
        public characterSpacing: number | null | Bind;
        /**
        * Xamarin.Forms.TextTransform
        */
        public textTransform: "None" | "Default" | "Lowercase" | "Uppercase" | Bind;
    }
    export declare class Behavior extends XF.BindableObject {
    }
    export declare class Behavior$Generic extends XF.Behavior {
    }
    export declare class DataTrigger extends XF.TriggerBase {
        /**
        * Xamarin.Forms.BindingBase
        */
        public binding: RootObject | Bind;
        /**
        * System.Collections.Generic.IList`1[[Xamarin.Forms.Setter, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null]]
        */
        public setters: any;
        public static setters: AttachedNode;
        /**
        * System.Object
        */
        public value: RootObject /*System.Object*/ | Bind;
    }
    export declare class EventTrigger extends XF.TriggerBase {
        /**
        * System.Collections.Generic.IList`1[[Xamarin.Forms.TriggerAction, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null]]
        */
        public actions: any;
        public static actions: AttachedNode;
        /**
        * System.String
        */
        public event: string | null | Bind;
    }
    export declare class MultiTrigger extends XF.TriggerBase {
        /**
        * System.Collections.Generic.IList`1[[Xamarin.Forms.Condition, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null]]
        */
        public conditions: any;
        public static conditions: AttachedNode;
        /**
        * System.Collections.Generic.IList`1[[Xamarin.Forms.Setter, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null]]
        */
        public setters: any;
        public static setters: AttachedNode;
    }
    export declare class Trigger extends XF.TriggerBase {
        /**
        * Xamarin.Forms.BindableProperty
        */
        public property: /*BindableProperty*/ any | Bind;
        /**
        * System.Collections.Generic.IList`1[[Xamarin.Forms.Setter, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null]]
        */
        public setters: any;
        public static setters: AttachedNode;
        /**
        * System.Object
        */
        public value: RootObject /*System.Object*/ | Bind;
    }
    export declare class TriggerBase extends XF.BindableObject {
        /**
        * System.Collections.Generic.IList`1[[Xamarin.Forms.TriggerAction, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null]]
        */
        public enterActions: any;
        public static enterActions: AttachedNode;
        /**
        * System.Collections.Generic.IList`1[[Xamarin.Forms.TriggerAction, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null]]
        */
        public exitActions: any;
        public static exitActions: AttachedNode;
        /**
        * System.Boolean
        */
        public isSealed: boolean | null | Bind;
        /**
        * System.Type
        */
        public targetType: RootObject /*System.Type*/ | Bind;
    }
    export declare class ItemsView$Generic extends XF.View {
        public static itemsSource: AttachedNode;
        public static itemTemplate: AttachedNode;
        /**
        * System.Collections.IEnumerable
        */
        public itemsSource: RootObject /*System.Collections.IEnumerable*/ | Bind;
        /**
        * Xamarin.Forms.DataTemplate
        */
        public itemTemplate: XF.DataTemplate | Bind;
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
        public static currentItemVisualState: string;
        public static nextItemVisualState: string;
        public static previousItemVisualState: string;
        public static defaultItemVisualState: string;
        /**
        * System.Boolean
        */
        public loop: boolean | null | Bind;
        /**
        * Xamarin.Forms.Thickness
        */
        public peekAreaInsets: /*Thickness*/ any | Bind;
        /**
        * System.Collections.ObjectModel.ObservableCollection`1[[Xamarin.Forms.View, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null]]
        */
        public visibleViews: any;
        /**
        * System.Boolean
        */
        public isDragging: boolean | null | Bind;
        /**
        * System.Boolean
        */
        public isBounceEnabled: boolean | null | Bind;
        /**
        * System.Boolean
        */
        public isSwipeEnabled: boolean | null | Bind;
        /**
        * System.Boolean
        */
        public isScrollAnimated: boolean | null | Bind;
        /**
        * System.Object
        */
        public currentItem: RootObject /*System.Object*/ | Bind;
        /**
        * System.Windows.Input.ICommand
        */
        public currentItemChangedCommand: RootObject /*System.Windows.Input.ICommand*/ | Bind;
        /**
        * System.Object
        */
        public currentItemChangedCommandParameter: RootObject /*System.Object*/ | Bind;
        /**
        * System.Int32
        */
        public position: number | null | Bind;
        /**
        * System.Windows.Input.ICommand
        */
        public positionChangedCommand: RootObject /*System.Windows.Input.ICommand*/ | Bind;
        /**
        * System.Object
        */
        public positionChangedCommandParameter: RootObject /*System.Object*/ | Bind;
        /**
        * Xamarin.Forms.LinearItemsLayout
        */
        public itemsLayout: XF.LinearItemsLayout | Bind;
        /**
        * Xamarin.Forms.IndicatorView
        */
        public indicatorView: XF.IndicatorView | Bind;
        public static indicatorView: AttachedNode;
    }
    export declare class CollectionView extends XF.GroupableItemsView {
    }
    export declare class GridItemsLayout extends XF.ItemsLayout {
        public static span: AttachedNode;
        public static verticalItemSpacing: AttachedNode;
        public static horizontalItemSpacing: AttachedNode;
        /**
        * System.Int32
        */
        public span: number | null | Bind;
        /**
        * System.Double
        */
        public verticalItemSpacing: number | null | Bind;
        /**
        * System.Double
        */
        public horizontalItemSpacing: number | null | Bind;
    }
    export declare class GroupableItemsView extends XF.SelectableItemsView {
        public static isGrouped: AttachedNode;
        public static groupHeaderTemplate: AttachedNode;
        public static groupFooterTemplate: AttachedNode;
        /**
        * System.Boolean
        */
        public isGrouped: boolean | null | Bind;
        /**
        * Xamarin.Forms.DataTemplate
        */
        public groupHeaderTemplate: XF.DataTemplate | Bind;
        /**
        * Xamarin.Forms.DataTemplate
        */
        public groupFooterTemplate: XF.DataTemplate | Bind;
    }
    export declare class ItemsLayout extends XF.BindableObject {
        public static snapPointsAlignment: AttachedNode;
        public static snapPointsType: AttachedNode;
        /**
        * Xamarin.Forms.ItemsLayoutOrientation
        */
        public orientation: "Vertical" | "Horizontal" | Bind;
        /**
        * Xamarin.Forms.SnapPointsAlignment
        */
        public snapPointsAlignment: "Start" | "Center" | "End" | Bind;
        /**
        * Xamarin.Forms.SnapPointsType
        */
        public snapPointsType: "None" | "Mandatory" | "MandatorySingle" | Bind;
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
        /**
        * System.Object
        */
        public emptyView: RootObject /*System.Object*/ | Bind;
        /**
        * Xamarin.Forms.DataTemplate
        */
        public emptyViewTemplate: XF.DataTemplate | Bind;
        /**
        * System.Collections.IEnumerable
        */
        public itemsSource: RootObject /*System.Collections.IEnumerable*/ | Bind;
        /**
        * System.Windows.Input.ICommand
        */
        public remainingItemsThresholdReachedCommand: RootObject /*System.Windows.Input.ICommand*/ | Bind;
        /**
        * System.Object
        */
        public remainingItemsThresholdReachedCommandParameter: RootObject /*System.Object*/ | Bind;
        /**
        * Xamarin.Forms.ScrollBarVisibility
        */
        public horizontalScrollBarVisibility: "Default" | "Always" | "Never" | Bind;
        /**
        * Xamarin.Forms.ScrollBarVisibility
        */
        public verticalScrollBarVisibility: "Default" | "Always" | "Never" | Bind;
        /**
        * System.Int32
        */
        public remainingItemsThreshold: number | null | Bind;
        /**
        * Xamarin.Forms.DataTemplate
        */
        public itemTemplate: XF.DataTemplate | Bind;
        /**
        * Xamarin.Forms.ItemsUpdatingScrollMode
        */
        public itemsUpdatingScrollMode: "KeepItemsInView" | "KeepScrollOffset" | "KeepLastItemInView" | Bind;
    }
    export declare class LinearItemsLayout extends XF.ItemsLayout {
        public static vertical: RootObject;
        public static horizontal: RootObject;
        public static carouselVertical: RootObject;
        public static itemSpacing: AttachedNode;
        /**
        * System.Double
        */
        public itemSpacing: number | null | Bind;
    }
    export declare class SelectableItemsView extends XF.StructuredItemsView {
        public static selectionMode: AttachedNode;
        public static selectedItem: AttachedNode;
        public static selectedItems: AttachedNode;
        public static selectionChangedCommand: AttachedNode;
        public static selectionChangedCommandParameter: AttachedNode;
        /**
        * System.Object
        */
        public selectedItem: RootObject /*System.Object*/ | Bind;
        /**
        * System.Collections.Generic.IList`1[[System.Object, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]]
        */
        public selectedItems: any;
        /**
        * System.Windows.Input.ICommand
        */
        public selectionChangedCommand: RootObject /*System.Windows.Input.ICommand*/ | Bind;
        /**
        * System.Object
        */
        public selectionChangedCommandParameter: RootObject /*System.Object*/ | Bind;
        /**
        * Xamarin.Forms.SelectionMode
        */
        public selectionMode: "None" | "Single" | "Multiple" | Bind;
    }
    export declare class StructuredItemsView extends XF.ItemsView {
        public static header: AttachedNode;
        public static headerTemplate: AttachedNode;
        public static footer: AttachedNode;
        public static footerTemplate: AttachedNode;
        public static itemsLayout: AttachedNode;
        public static itemSizingStrategy: AttachedNode;
        /**
        * System.Object
        */
        public header: RootObject /*System.Object*/ | Bind;
        /**
        * Xamarin.Forms.DataTemplate
        */
        public headerTemplate: XF.DataTemplate | Bind;
        /**
        * System.Object
        */
        public footer: RootObject /*System.Object*/ | Bind;
        /**
        * Xamarin.Forms.DataTemplate
        */
        public footerTemplate: XF.DataTemplate | Bind;
        /**
        * Xamarin.Forms.IItemsLayout
        */
        public itemsLayout: /*IItemsLayout*/ any | Bind;
        /**
        * Xamarin.Forms.ItemSizingStrategy
        */
        public itemSizingStrategy: "MeasureAllItems" | "MeasureFirstItem" | Bind;
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
        /**
        * Xamarin.Forms.TextTransform
        */
        public textTransform: "None" | "Default" | "Lowercase" | "Uppercase" | Bind;
        /**
        * Xamarin.Forms.FormattedString
        */
        public formattedText: XF.FormattedString | Bind;
        /**
        * Xamarin.Forms.TextAlignment
        */
        public horizontalTextAlignment: "Start" | "Center" | "End" | Bind;
        /**
        * Xamarin.Forms.LineBreakMode
        */
        public lineBreakMode: "NoWrap" | "WordWrap" | "CharacterWrap" | "HeadTruncation" | "TailTruncation" | "MiddleTruncation" | Bind;
        /**
        * System.String
        */
        public text: string | null | Bind;
        /**
        * Xamarin.Forms.Color
        */
        public textColor: XF.Color | ColorItem | string | null | Bind;
        /**
        * System.Double
        */
        public characterSpacing: number | null | Bind;
        /**
        * Xamarin.Forms.TextAlignment
        */
        public verticalTextAlignment: "Start" | "Center" | "End" | Bind;
        /**
        * Xamarin.Forms.FontAttributes
        */
        public fontAttributes: "None" | "Bold" | "Italic" | Bind;
        /**
        * Xamarin.Forms.TextDecorations
        */
        public textDecorations: "None" | "Underline" | "Strikethrough" | Bind;
        /**
        * System.String
        */
        public fontFamily: string | null | Bind;
        /**
        * System.Double
        */
        public fontSize: number | null | Bind;
        /**
        * System.Double
        */
        public lineHeight: number | null | Bind;
        /**
        * System.Int32
        */
        public maxLines: number | null | Bind;
        /**
        * Xamarin.Forms.Thickness
        */
        public padding: /*Thickness*/ any | Bind;
        /**
        * Xamarin.Forms.TextType
        */
        public textType: "Text" | "Html" | Bind;
    }
    export declare class Layout$Generic extends XF.Layout {
        /**
        * 
        */
        public children: any;
        public static children: AttachedNode;
    }
    export declare class Layout extends XF.View {
        public static outChildIntoBoundingRegion: AttachedNode;
        public static isClippedToBounds: AttachedNode;
        public static cascadeInputTransparent: AttachedNode;
        public static padding: AttachedNode;
        /**
        * System.Boolean
        */
        public isClippedToBounds: boolean | null | Bind;
        /**
        * Xamarin.Forms.Thickness
        */
        public padding: /*Thickness*/ any | Bind;
        /**
        * System.Boolean
        */
        public cascadeInputTransparent: boolean | null | Bind;
    }
    export declare class LayoutOptions extends RootObject /*System.ValueType*/ {
        public static start: XF.LayoutOptions;
        public static center: XF.LayoutOptions;
        public static end: XF.LayoutOptions;
        public static fill: XF.LayoutOptions;
        public static startAndExpand: XF.LayoutOptions;
        public static centerAndExpand: XF.LayoutOptions;
        public static endAndExpand: XF.LayoutOptions;
        public static fillAndExpand: XF.LayoutOptions;
        /**
        * Xamarin.Forms.LayoutAlignment
        */
        public alignment: "Start" | "Center" | "End" | "Fill" | Bind;
        /**
        * System.Boolean
        */
        public expands: boolean | null | Bind;
    }
    export declare class LinearGradientBrush extends XF.GradientBrush {
        public static startPoint: AttachedNode;
        public static endPoint: AttachedNode;
        /**
        * System.Boolean
        */
        public isEmpty: boolean | null | Bind;
        /**
        * Xamarin.Forms.Point
        */
        public startPoint: "Zero" | XF.Point | Bind | Bind;
        /**
        * Xamarin.Forms.Point
        */
        public endPoint: "Zero" | XF.Point | Bind | Bind;
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
        /**
        * System.Object
        */
        public footer: RootObject /*System.Object*/ | Bind;
        /**
        * Xamarin.Forms.DataTemplate
        */
        public footerTemplate: XF.DataTemplate | Bind;
        /**
        * Xamarin.Forms.BindingBase
        */
        public groupDisplayBinding: RootObject | Bind;
        /**
        * Xamarin.Forms.DataTemplate
        */
        public groupHeaderTemplate: XF.DataTemplate | Bind;
        /**
        * Xamarin.Forms.BindingBase
        */
        public groupShortNameBinding: RootObject | Bind;
        /**
        * System.Boolean
        */
        public hasUnevenRows: boolean | null | Bind;
        /**
        * System.Object
        */
        public header: RootObject /*System.Object*/ | Bind;
        /**
        * Xamarin.Forms.DataTemplate
        */
        public headerTemplate: XF.DataTemplate | Bind;
        /**
        * System.Boolean
        */
        public isGroupingEnabled: boolean | null | Bind;
        /**
        * System.Boolean
        */
        public isPullToRefreshEnabled: boolean | null | Bind;
        /**
        * System.Boolean
        */
        public isRefreshing: boolean | null | Bind;
        /**
        * System.Windows.Input.ICommand
        */
        public refreshCommand: RootObject /*System.Windows.Input.ICommand*/ | Bind;
        /**
        * System.Int32
        */
        public rowHeight: number | null | Bind;
        /**
        * System.Object
        */
        public selectedItem: RootObject /*System.Object*/ | Bind;
        /**
        * Xamarin.Forms.ListViewSelectionMode
        */
        public selectionMode: "None" | "Single" | Bind;
        /**
        * Xamarin.Forms.Color
        */
        public separatorColor: XF.Color | ColorItem | string | null | Bind;
        /**
        * Xamarin.Forms.Color
        */
        public refreshControlColor: XF.Color | ColorItem | string | null | Bind;
        /**
        * Xamarin.Forms.SeparatorVisibility
        */
        public separatorVisibility: "Default" | "None" | Bind;
        /**
        * Xamarin.Forms.ScrollBarVisibility
        */
        public horizontalScrollBarVisibility: "Default" | "Always" | "Never" | Bind;
        /**
        * Xamarin.Forms.ScrollBarVisibility
        */
        public verticalScrollBarVisibility: "Default" | "Always" | "Never" | Bind;
        /**
        * Xamarin.Forms.ListViewCachingStrategy
        */
        public cachingStrategy: "RetainElement" | "RecycleElement" | "RecycleElementAndDataTemplate" | Bind;
    }
    export declare class Menu extends XF.BaseMenuItem {
        /**
        * Xamarin.Forms.Menu
        */
        public item: any;
        public static item: AttachedNode;
        /**
        * System.String
        */
        public text: string | null | Bind;
        /**
        * System.Collections.ObjectModel.ObservableCollection`1[[Xamarin.Forms.MenuItem, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null]]
        */
        public items: any;
        public static items: AttachedNode;
        /**
        * System.Int32
        */
        public count: number | null | Bind;
        /**
        * System.Boolean
        */
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
        /**
        * System.Windows.Input.ICommand
        */
        public command: RootObject /*System.Windows.Input.ICommand*/ | Bind;
        /**
        * System.Object
        */
        public commandParameter: RootObject /*System.Object*/ | Bind;
        /**
        * Xamarin.Forms.ImageSource
        */
        public iconImageSource: /*ImageSource*/ any | Bind;
        /**
        * System.Boolean
        */
        public isDestructive: boolean | null | Bind;
        /**
        * System.String
        */
        public text: string | null | Bind;
        /**
        * System.Boolean
        */
        public isEnabled: boolean | null | Bind;
        /**
        * System.Collections.Generic.IList`1[[System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]]
        */
        public styleClass: any;
        public static styleClass: AttachedNode;
        /**
        * System.Collections.Generic.IList`1[[System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]]
        */
        public class: any;
        public static class: AttachedNode;
        /**
        * System.String
        */
        public isEnabledPropertyName: string | null | Bind;
    }
    export declare class MultiPage$Generic extends XF.Page {
        public static index: AttachedNode;
        public static itemsSource: AttachedNode;
        public static itemTemplate: AttachedNode;
        public static selectedItem: AttachedNode;
        /**
        * System.Collections.IEnumerable
        */
        public itemsSource: RootObject /*System.Collections.IEnumerable*/ | Bind;
        /**
        * Xamarin.Forms.DataTemplate
        */
        public itemTemplate: XF.DataTemplate | Bind;
        /**
        * System.Object
        */
        public selectedItem: RootObject /*System.Object*/ | Bind;
        /**
        * 
        */
        public currentPage: RootObject | Bind;
        public static currentPage: AttachedNode;
        /**
        * 
        */
        public children: any;
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
        /**
        * Xamarin.Forms.Color
        */
        public barBackgroundColor: XF.Color | ColorItem | string | null | Bind;
        /**
        * Xamarin.Forms.Brush
        */
        public barBackground: "AliceBlue" | "AntiqueWhite" | "Aqua" | "Aquamarine" | "Azure" | "Beige" | "Bisque" | "Black" | "BlanchedAlmond" | "Blue" | "BlueViolet" | "Brown" | "BurlyWood" | "CadetBlue" | "Chartreuse" | "Chocolate" | "Coral" | "CornflowerBlue" | "Cornsilk" | "Crimson" | "Cyan" | "DarkBlue" | "DarkCyan" | "DarkGoldenrod" | "DarkGray" | "DarkGreen" | "DarkKhaki" | "DarkMagenta" | "DarkOliveGreen" | "DarkOrange" | "DarkOrchid" | "DarkRed" | "DarkSalmon" | "DarkSeaGreen" | "DarkSlateBlue" | "DarkSlateGray" | "DarkTurquoise" | "DarkViolet" | "DeepPink" | "DeepSkyBlue" | "DimGray" | "DodgerBlue" | "Firebrick" | "FloralWhite" | "ForestGreen" | "Fuchsia" | "Gainsboro" | "GhostWhite" | "Gold" | "Goldenrod" | "Gray" | "Green" | "GreenYellow" | "Honeydew" | "HotPink" | "IndianRed" | "Indigo" | "Ivory" | "Khaki" | "Lavender" | "LavenderBlush" | "LawnGreen" | "LemonChiffon" | "LightBlue" | "LightCoral" | "LightCyan" | "LightGoldenrodYellow" | "LightGray" | "LightGreen" | "LightPink" | "LightSalmon" | "LightSeaGreen" | "LightSkyBlue" | "LightSlateGray" | "LightSteelBlue" | "LightYellow" | "Lime" | "LimeGreen" | "Linen" | "Magenta" | "Maroon" | "MediumAquamarine" | "MediumBlue" | "MediumOrchid" | "MediumPurple" | "MediumSeaGreen" | "MediumSlateBlue" | "MediumSpringGreen" | "MediumTurquoise" | "MediumVioletRed" | "MidnightBlue" | "MintCream" | "MistyRose" | "Moccasin" | "NavajoWhite" | "Navy" | "OldLace" | "Olive" | "OliveDrab" | "Orange" | "OrangeRed" | "Orchid" | "PaleGoldenrod" | "PaleGreen" | "PaleTurquoise" | "PaleVioletRed" | "PapayaWhip" | "PeachPuff" | "Peru" | "Pink" | "Plum" | "PowderBlue" | "Purple" | "Red" | "RosyBrown" | "RoyalBlue" | "SaddleBrown" | "Salmon" | "SandyBrown" | "SeaGreen" | "SeaShell" | "Sienna" | "Silver" | "SkyBlue" | "SlateBlue" | "SlateGray" | "Snow" | "SpringGreen" | "SteelBlue" | "Tan" | "Teal" | "Thistle" | "Tomato" | "Transparent" | "Turquoise" | "Violet" | "Wheat" | "White" | "WhiteSmoke" | "Yellow" | "YellowGreen" | XF.Brush | Bind | Bind;
        /**
        * Xamarin.Forms.Color
        */
        public barTextColor: XF.Color | ColorItem | string | null | Bind;
        /**
        * Xamarin.Forms.Page
        */
        public currentPage: XF.Page | Bind;
        /**
        * Xamarin.Forms.Page
        */
        public rootPage: XF.Page | Bind;
    }
    export declare class NullEffect extends XF.Effect {
    }
    export declare class OpenGLView extends XF.View {
        public static hasRenderLoop: AttachedNode;
        /**
        * System.Boolean
        */
        public hasRenderLoop: boolean | null | Bind;
        /**
        * System.Action`1[[Xamarin.Forms.Rectangle, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null]]
        */
        public onDisplay: RootObject /*System.Action`1[[Xamarin.Forms.Rectangle, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null]]*/ | Bind;
    }
    export declare class OrientationStateTrigger extends XF.StateTriggerBase {
        public static orientation: AttachedNode;
        /**
        * Xamarin.Forms.Internals.DeviceOrientation
        */
        public orientation: "Portrait" | "Landscape" | "PortraitUp" | "PortraitDown" | "LandscapeLeft" | "LandscapeRight" | "Other" | Bind;
    }
    export declare class Page extends XF.VisualElement {
        public static backgroundImageSource: AttachedNode;
        public static backgroundImage: AttachedNode;
        public static isBusy: AttachedNode;
        public static padding: AttachedNode;
        public static title: AttachedNode;
        public static iconImageSource: AttachedNode;
        public static icon: AttachedNode;
        public static busySetSignalName: string;
        public static alertSignalName: string;
        public static promptSignalName: string;
        public static actionSheetSignalName: string;
        /**
        * Xamarin.Forms.ImageSource
        */
        public backgroundImageSource: /*ImageSource*/ any | Bind;
        /**
        * Xamarin.Forms.ImageSource
        */
        public iconImageSource: /*ImageSource*/ any | Bind;
        /**
        * System.Boolean
        */
        public isBusy: boolean | null | Bind;
        /**
        * Xamarin.Forms.Thickness
        */
        public padding: /*Thickness*/ any | Bind;
        /**
        * System.String
        */
        public title: string | null | Bind;
        /**
        * System.Collections.Generic.IList`1[[Xamarin.Forms.ToolbarItem, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null]]
        */
        public toolbarItems: any;
        public static toolbarItems: AttachedNode;
    }
    export declare class PanGestureRecognizer extends XF.GestureRecognizer {
        public static touchPoints: AttachedNode;
        /**
        * System.Int32
        */
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
        /**
        * Xamarin.Forms.FontAttributes
        */
        public fontAttributes: "None" | "Bold" | "Italic" | Bind;
        /**
        * System.String
        */
        public fontFamily: string | null | Bind;
        /**
        * System.Double
        */
        public fontSize: number | null | Bind;
        /**
        * Xamarin.Forms.TextTransform
        */
        public textTransform: "None" | "Default" | "Lowercase" | "Uppercase" | Bind;
        /**
        * System.Collections.Generic.IList`1[[System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]]
        */
        public items: any;
        public static items: AttachedNode;
        /**
        * System.Collections.IList
        */
        public itemsSource: any;
        /**
        * System.Int32
        */
        public selectedIndex: number | null | Bind;
        /**
        * System.Object
        */
        public selectedItem: RootObject /*System.Object*/ | Bind;
        /**
        * Xamarin.Forms.Color
        */
        public textColor: XF.Color | ColorItem | string | null | Bind;
        /**
        * System.Double
        */
        public characterSpacing: number | null | Bind;
        /**
        * System.String
        */
        public title: string | null | Bind;
        /**
        * Xamarin.Forms.Color
        */
        public titleColor: XF.Color | ColorItem | string | null | Bind;
        /**
        * Xamarin.Forms.TextAlignment
        */
        public horizontalTextAlignment: "Start" | "Center" | "End" | Bind;
        /**
        * Xamarin.Forms.TextAlignment
        */
        public verticalTextAlignment: "Start" | "Center" | "End" | Bind;
        /**
        * Xamarin.Forms.BindingBase
        */
        public itemDisplayBinding: RootObject | Bind;
    }
    export declare class PinchGestureRecognizer extends XF.GestureRecognizer {
    }
    export declare class PlatformEffect$Generic extends XF.Effect {
        /**
        * 
        */
        public container: RootObject | Bind;
        /**
        * 
        */
        public control: RootObject | Bind;
    }
    export declare class Point extends RootObject /*System.ValueType*/ {
        public static zero: XF.Point;
        /**
        * System.Double
        */
        public x: number | null | Bind;
        /**
        * System.Double
        */
        public y: number | null | Bind;
        /**
        * System.Boolean
        */
        public isEmpty: boolean | null | Bind;
    }
    export declare class ProgressBar extends XF.View {
        public static progressColor: AttachedNode;
        public static progress: AttachedNode;
        /**
        * Xamarin.Forms.Color
        */
        public progressColor: XF.Color | ColorItem | string | null | Bind;
        /**
        * System.Double
        */
        public progress: number | null | Bind;
    }
    export declare class RadialGradientBrush extends XF.GradientBrush {
        public static center: AttachedNode;
        public static radius: AttachedNode;
        /**
        * System.Boolean
        */
        public isEmpty: boolean | null | Bind;
        /**
        * Xamarin.Forms.Point
        */
        public center: "Zero" | XF.Point | Bind | Bind;
        /**
        * System.Double
        */
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
        public static checkedVisualState: string;
        public static uncheckedVisualState: string;
        public static templateRootName: string;
        public static checkedIndicator: string;
        public static uncheckedButton: string;
        /**
        * System.Object
        */
        public content: RootObject /*System.Object*/ | Bind;
        /**
        * System.Object
        */
        public value: RootObject /*System.Object*/ | Bind;
        /**
        * System.Boolean
        */
        public isChecked: boolean | null | Bind;
        /**
        * System.String
        */
        public groupName: string | null | Bind;
        /**
        * Xamarin.Forms.Color
        */
        public textColor: XF.Color | ColorItem | string | null | Bind;
        /**
        * System.Double
        */
        public characterSpacing: number | null | Bind;
        /**
        * Xamarin.Forms.TextTransform
        */
        public textTransform: "None" | "Default" | "Lowercase" | "Uppercase" | Bind;
        /**
        * Xamarin.Forms.FontAttributes
        */
        public fontAttributes: "None" | "Bold" | "Italic" | Bind;
        /**
        * System.String
        */
        public fontFamily: string | null | Bind;
        /**
        * System.Double
        */
        public fontSize: number | null | Bind;
        /**
        * System.Double
        */
        public borderWidth: number | null | Bind;
        /**
        * Xamarin.Forms.Color
        */
        public borderColor: XF.Color | ColorItem | string | null | Bind;
        /**
        * System.Int32
        */
        public cornerRadius: number | null | Bind;
    }
    export declare class RadioButtonGroup extends RootObject {
        public static groupName: AttachedNode;
        public static selectedValue: AttachedNode;
    }
    export declare class Rect extends RootObject /*System.ValueType*/ {
        public static zero: XF.Rect;
        /**
        * System.Double
        */
        public x: number | null | Bind;
        /**
        * System.Double
        */
        public y: number | null | Bind;
        /**
        * System.Double
        */
        public width: number | null | Bind;
        /**
        * System.Double
        */
        public height: number | null | Bind;
        /**
        * System.Double
        */
        public top: number | null | Bind;
        /**
        * System.Double
        */
        public bottom: number | null | Bind;
        /**
        * System.Double
        */
        public right: number | null | Bind;
        /**
        * System.Double
        */
        public left: number | null | Bind;
        /**
        * System.Boolean
        */
        public isEmpty: boolean | null | Bind;
        /**
        * Xamarin.Forms.Size
        */
        public size: "Zero" | XF.Size | Bind | Bind;
        public static size: AttachedNode;
        /**
        * Xamarin.Forms.Point
        */
        public location: "Zero" | XF.Point | Bind | Bind;
        public static location: AttachedNode;
        /**
        * Xamarin.Forms.Point
        */
        public center: "Zero" | XF.Point | Bind | Bind;
        public static center: AttachedNode;
    }
    export declare class RefreshView extends XF.ContentView {
        public static isRefreshing: AttachedNode;
        public static command: AttachedNode;
        public static commandParameter: AttachedNode;
        public static refreshColor: AttachedNode;
        /**
        * System.Boolean
        */
        public isRefreshing: boolean | null | Bind;
        /**
        * System.Windows.Input.ICommand
        */
        public command: RootObject /*System.Windows.Input.ICommand*/ | Bind;
        /**
        * System.Object
        */
        public commandParameter: RootObject /*System.Object*/ | Bind;
        /**
        * Xamarin.Forms.Color
        */
        public refreshColor: XF.Color | ColorItem | string | null | Bind;
    }
    export declare class RelativeLayout extends XF.Layout$Generic {
        public static boundsConstraint: AttachedNode;
        public static heightConstraint: AttachedNode;
        public static widthConstraint: AttachedNode;
        public static xConstraint: AttachedNode;
        public static yConstraint: AttachedNode;
        /**
        * Xamarin.Forms.RelativeLayout+IRelativeList`1[[Xamarin.Forms.View, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null]]
        */
        public children: RootObject | Bind;
    }
    export declare class Routing extends RootObject {
        public static route: AttachedNode;
    }
    export declare class RoutingEffect extends XF.Effect {
    }
    export declare class RowDefinition extends XF.BindableObject {
        public static height: AttachedNode;
        /**
        * Xamarin.Forms.GridLength
        */
        public height: "Auto" | number | string | Bind;
    }
    export declare class ScrollView extends XF.Layout {
        public static orientation: AttachedNode;
        public static scrollX: AttachedNode;
        public static scrollY: AttachedNode;
        public static contentSize: AttachedNode;
        public static horizontalScrollBarVisibility: AttachedNode;
        public static verticalScrollBarVisibility: AttachedNode;
        /**
        * Xamarin.Forms.View
        */
        public content: XF.View | Bind;
        public static content: AttachedNode;
        /**
        * Xamarin.Forms.Size
        */
        public contentSize: "Zero" | XF.Size | Bind | Bind;
        /**
        * Xamarin.Forms.ScrollOrientation
        */
        public orientation: "Vertical" | "Horizontal" | "Both" | "Neither" | Bind;
        /**
        * System.Double
        */
        public scrollX: number | null | Bind;
        /**
        * System.Double
        */
        public scrollY: number | null | Bind;
        /**
        * Xamarin.Forms.ScrollBarVisibility
        */
        public horizontalScrollBarVisibility: "Default" | "Always" | "Never" | Bind;
        /**
        * Xamarin.Forms.ScrollBarVisibility
        */
        public verticalScrollBarVisibility: "Default" | "Always" | "Never" | Bind;
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
        /**
        * Xamarin.Forms.Color
        */
        public cancelButtonColor: XF.Color | ColorItem | string | null | Bind;
        /**
        * Xamarin.Forms.TextAlignment
        */
        public horizontalTextAlignment: "Start" | "Center" | "End" | Bind;
        /**
        * Xamarin.Forms.TextAlignment
        */
        public verticalTextAlignment: "Start" | "Center" | "End" | Bind;
        /**
        * System.Windows.Input.ICommand
        */
        public searchCommand: RootObject /*System.Windows.Input.ICommand*/ | Bind;
        /**
        * System.Object
        */
        public searchCommandParameter: RootObject /*System.Object*/ | Bind;
        /**
        * Xamarin.Forms.FontAttributes
        */
        public fontAttributes: "None" | "Bold" | "Italic" | Bind;
        /**
        * System.String
        */
        public fontFamily: string | null | Bind;
        /**
        * System.Double
        */
        public fontSize: number | null | Bind;
    }
    export declare class BackButtonBehavior extends XF.BindableObject {
        public static commandParameter: AttachedNode;
        public static command: AttachedNode;
        public static iconOverride: AttachedNode;
        public static isEnabled: AttachedNode;
        public static textOverride: AttachedNode;
        /**
        * System.Windows.Input.ICommand
        */
        public command: RootObject /*System.Windows.Input.ICommand*/ | Bind;
        /**
        * System.Object
        */
        public commandParameter: RootObject /*System.Object*/ | Bind;
        /**
        * Xamarin.Forms.ImageSource
        */
        public iconOverride: /*ImageSource*/ any | Bind;
        /**
        * System.Boolean
        */
        public isEnabled: boolean | null | Bind;
        /**
        * System.String
        */
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
        /**
        * Xamarin.Forms.ImageSource
        */
        public flyoutIcon: /*ImageSource*/ any | Bind;
        /**
        * Xamarin.Forms.ImageSource
        */
        public icon: /*ImageSource*/ any | Bind;
        /**
        * System.Boolean
        */
        public isChecked: boolean | null | Bind;
        /**
        * System.Boolean
        */
        public isEnabled: boolean | null | Bind;
        /**
        * System.String
        */
        public route: string | null | Bind;
        /**
        * System.String
        */
        public title: string | null | Bind;
        /**
        * System.Int32
        */
        public tabIndex: number | null | Bind;
        /**
        * System.Boolean
        */
        public isTabStop: boolean | null | Bind;
        /**
        * System.Boolean
        */
        public isVisible: boolean | null | Bind;
        /**
        * System.Boolean
        */
        public flyoutItemIsVisible: boolean | null | Bind;
    }
    export declare class NavigableElement extends XF.Element {
        public static navigation: AttachedNode;
        public static style: AttachedNode;
        /**
        * Xamarin.Forms.INavigation
        */
        public navigation: RootObject | Bind;
        /**
        * Xamarin.Forms.Style
        */
        public style: XF.Style | Bind;
        /**
        * System.Collections.Generic.IList`1[[System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]]
        */
        public styleClass: any;
        public static styleClass: AttachedNode;
        /**
        * System.Collections.Generic.IList`1[[System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]]
        */
        public class: any;
        public static class: AttachedNode;
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
        /**
        * System.Boolean
        */
        public isFocused: boolean | null | Bind;
        /**
        * Xamarin.Forms.Keyboard
        */
        public keyboard: /*Keyboard*/ any | Bind;
        /**
        * Xamarin.Forms.TextAlignment
        */
        public horizontalTextAlignment: "Start" | "Center" | "End" | Bind;
        /**
        * Xamarin.Forms.TextAlignment
        */
        public verticalTextAlignment: "Start" | "Center" | "End" | Bind;
        /**
        * Xamarin.Forms.Color
        */
        public textColor: XF.Color | ColorItem | string | null | Bind;
        /**
        * Xamarin.Forms.TextTransform
        */
        public textTransform: "None" | "Default" | "Lowercase" | "Uppercase" | Bind;
        /**
        * Xamarin.Forms.Color
        */
        public cancelButtonColor: XF.Color | ColorItem | string | null | Bind;
        /**
        * Xamarin.Forms.FontAttributes
        */
        public fontAttributes: "None" | "Bold" | "Italic" | Bind;
        /**
        * System.String
        */
        public fontFamily: string | null | Bind;
        /**
        * System.Double
        */
        public characterSpacing: number | null | Bind;
        /**
        * System.Double
        */
        public fontSize: number | null | Bind;
        /**
        * Xamarin.Forms.Color
        */
        public placeholderColor: XF.Color | ColorItem | string | null | Bind;
        /**
        * System.String
        */
        public placeholder: string | null | Bind;
        /**
        * Xamarin.Forms.Color
        */
        public backgroundColor: XF.Color | ColorItem | string | null | Bind;
        /**
        * Xamarin.Forms.ImageSource
        */
        public clearIcon: /*ImageSource*/ any | Bind;
        /**
        * System.String
        */
        public clearIconHelpText: string | null | Bind;
        /**
        * System.String
        */
        public clearIconName: string | null | Bind;
        /**
        * System.Windows.Input.ICommand
        */
        public clearPlaceholderCommand: RootObject /*System.Windows.Input.ICommand*/ | Bind;
        /**
        * System.Object
        */
        public clearPlaceholderCommandParameter: RootObject /*System.Object*/ | Bind;
        /**
        * System.Boolean
        */
        public clearPlaceholderEnabled: boolean | null | Bind;
        /**
        * System.String
        */
        public clearPlaceholderHelpText: string | null | Bind;
        /**
        * Xamarin.Forms.ImageSource
        */
        public clearPlaceholderIcon: /*ImageSource*/ any | Bind;
        /**
        * System.String
        */
        public clearPlaceholderName: string | null | Bind;
        /**
        * System.Windows.Input.ICommand
        */
        public command: RootObject /*System.Windows.Input.ICommand*/ | Bind;
        /**
        * System.Object
        */
        public commandParameter: RootObject /*System.Object*/ | Bind;
        /**
        * System.String
        */
        public displayMemberName: string | null | Bind;
        /**
        * System.Boolean
        */
        public isSearchEnabled: boolean | null | Bind;
        /**
        * System.Collections.IEnumerable
        */
        public itemsSource: RootObject /*System.Collections.IEnumerable*/ | Bind;
        /**
        * Xamarin.Forms.DataTemplate
        */
        public itemTemplate: XF.DataTemplate | Bind;
        /**
        * System.String
        */
        public query: string | null | Bind;
        /**
        * Xamarin.Forms.ImageSource
        */
        public queryIcon: /*ImageSource*/ any | Bind;
        /**
        * System.String
        */
        public queryIconHelpText: string | null | Bind;
        /**
        * System.String
        */
        public queryIconName: string | null | Bind;
        /**
        * Xamarin.Forms.SearchBoxVisibility
        */
        public searchBoxVisibility: "Hidden" | "Collapsible" | "Expanded" | Bind;
        /**
        * System.Object
        */
        public selectedItem: RootObject /*System.Object*/ | Bind;
        /**
        * System.Boolean
        */
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
        /**
        * Xamarin.Forms.Page
        */
        public currentPage: XF.Page | Bind;
        public static currentPage: AttachedNode;
        /**
        * Xamarin.Forms.ScrollMode
        */
        public flyoutVerticalScrollMode: "Disabled" | "Enabled" | "Auto" | Bind;
        /**
        * Xamarin.Forms.ImageSource
        */
        public flyoutIcon: /*ImageSource*/ any | Bind;
        /**
        * Xamarin.Forms.ShellItem
        */
        public currentItem: XF.ShellItem | Bind;
        /**
        * Xamarin.Forms.ShellNavigationState
        */
        public currentState: RootObject | Bind;
        /**
        * Xamarin.Forms.ImageSource
        */
        public flyoutBackgroundImage: /*ImageSource*/ any | Bind;
        /**
        * Xamarin.Forms.Aspect
        */
        public flyoutBackgroundImageAspect: "AspectFit" | "AspectFill" | "Fill" | Bind;
        /**
        * Xamarin.Forms.Color
        */
        public flyoutBackgroundColor: XF.Color | ColorItem | string | null | Bind;
        /**
        * Xamarin.Forms.Brush
        */
        public flyoutBackground: "AliceBlue" | "AntiqueWhite" | "Aqua" | "Aquamarine" | "Azure" | "Beige" | "Bisque" | "Black" | "BlanchedAlmond" | "Blue" | "BlueViolet" | "Brown" | "BurlyWood" | "CadetBlue" | "Chartreuse" | "Chocolate" | "Coral" | "CornflowerBlue" | "Cornsilk" | "Crimson" | "Cyan" | "DarkBlue" | "DarkCyan" | "DarkGoldenrod" | "DarkGray" | "DarkGreen" | "DarkKhaki" | "DarkMagenta" | "DarkOliveGreen" | "DarkOrange" | "DarkOrchid" | "DarkRed" | "DarkSalmon" | "DarkSeaGreen" | "DarkSlateBlue" | "DarkSlateGray" | "DarkTurquoise" | "DarkViolet" | "DeepPink" | "DeepSkyBlue" | "DimGray" | "DodgerBlue" | "Firebrick" | "FloralWhite" | "ForestGreen" | "Fuchsia" | "Gainsboro" | "GhostWhite" | "Gold" | "Goldenrod" | "Gray" | "Green" | "GreenYellow" | "Honeydew" | "HotPink" | "IndianRed" | "Indigo" | "Ivory" | "Khaki" | "Lavender" | "LavenderBlush" | "LawnGreen" | "LemonChiffon" | "LightBlue" | "LightCoral" | "LightCyan" | "LightGoldenrodYellow" | "LightGray" | "LightGreen" | "LightPink" | "LightSalmon" | "LightSeaGreen" | "LightSkyBlue" | "LightSlateGray" | "LightSteelBlue" | "LightYellow" | "Lime" | "LimeGreen" | "Linen" | "Magenta" | "Maroon" | "MediumAquamarine" | "MediumBlue" | "MediumOrchid" | "MediumPurple" | "MediumSeaGreen" | "MediumSlateBlue" | "MediumSpringGreen" | "MediumTurquoise" | "MediumVioletRed" | "MidnightBlue" | "MintCream" | "MistyRose" | "Moccasin" | "NavajoWhite" | "Navy" | "OldLace" | "Olive" | "OliveDrab" | "Orange" | "OrangeRed" | "Orchid" | "PaleGoldenrod" | "PaleGreen" | "PaleTurquoise" | "PaleVioletRed" | "PapayaWhip" | "PeachPuff" | "Peru" | "Pink" | "Plum" | "PowderBlue" | "Purple" | "Red" | "RosyBrown" | "RoyalBlue" | "SaddleBrown" | "Salmon" | "SandyBrown" | "SeaGreen" | "SeaShell" | "Sienna" | "Silver" | "SkyBlue" | "SlateBlue" | "SlateGray" | "Snow" | "SpringGreen" | "SteelBlue" | "Tan" | "Teal" | "Thistle" | "Tomato" | "Transparent" | "Turquoise" | "Violet" | "Wheat" | "White" | "WhiteSmoke" | "Yellow" | "YellowGreen" | XF.Brush | Bind | Bind;
        /**
        * Xamarin.Forms.Brush
        */
        public flyoutBackdrop: "AliceBlue" | "AntiqueWhite" | "Aqua" | "Aquamarine" | "Azure" | "Beige" | "Bisque" | "Black" | "BlanchedAlmond" | "Blue" | "BlueViolet" | "Brown" | "BurlyWood" | "CadetBlue" | "Chartreuse" | "Chocolate" | "Coral" | "CornflowerBlue" | "Cornsilk" | "Crimson" | "Cyan" | "DarkBlue" | "DarkCyan" | "DarkGoldenrod" | "DarkGray" | "DarkGreen" | "DarkKhaki" | "DarkMagenta" | "DarkOliveGreen" | "DarkOrange" | "DarkOrchid" | "DarkRed" | "DarkSalmon" | "DarkSeaGreen" | "DarkSlateBlue" | "DarkSlateGray" | "DarkTurquoise" | "DarkViolet" | "DeepPink" | "DeepSkyBlue" | "DimGray" | "DodgerBlue" | "Firebrick" | "FloralWhite" | "ForestGreen" | "Fuchsia" | "Gainsboro" | "GhostWhite" | "Gold" | "Goldenrod" | "Gray" | "Green" | "GreenYellow" | "Honeydew" | "HotPink" | "IndianRed" | "Indigo" | "Ivory" | "Khaki" | "Lavender" | "LavenderBlush" | "LawnGreen" | "LemonChiffon" | "LightBlue" | "LightCoral" | "LightCyan" | "LightGoldenrodYellow" | "LightGray" | "LightGreen" | "LightPink" | "LightSalmon" | "LightSeaGreen" | "LightSkyBlue" | "LightSlateGray" | "LightSteelBlue" | "LightYellow" | "Lime" | "LimeGreen" | "Linen" | "Magenta" | "Maroon" | "MediumAquamarine" | "MediumBlue" | "MediumOrchid" | "MediumPurple" | "MediumSeaGreen" | "MediumSlateBlue" | "MediumSpringGreen" | "MediumTurquoise" | "MediumVioletRed" | "MidnightBlue" | "MintCream" | "MistyRose" | "Moccasin" | "NavajoWhite" | "Navy" | "OldLace" | "Olive" | "OliveDrab" | "Orange" | "OrangeRed" | "Orchid" | "PaleGoldenrod" | "PaleGreen" | "PaleTurquoise" | "PaleVioletRed" | "PapayaWhip" | "PeachPuff" | "Peru" | "Pink" | "Plum" | "PowderBlue" | "Purple" | "Red" | "RosyBrown" | "RoyalBlue" | "SaddleBrown" | "Salmon" | "SandyBrown" | "SeaGreen" | "SeaShell" | "Sienna" | "Silver" | "SkyBlue" | "SlateBlue" | "SlateGray" | "Snow" | "SpringGreen" | "SteelBlue" | "Tan" | "Teal" | "Thistle" | "Tomato" | "Transparent" | "Turquoise" | "Violet" | "Wheat" | "White" | "WhiteSmoke" | "Yellow" | "YellowGreen" | XF.Brush | Bind | Bind;
        /**
        * System.Double
        */
        public flyoutWidth: number | null | Bind;
        /**
        * System.Double
        */
        public flyoutHeight: number | null | Bind;
        /**
        * Xamarin.Forms.FlyoutBehavior
        */
        public flyoutBehavior: "Disabled" | "Flyout" | "Locked" | Bind;
        /**
        * System.Object
        */
        public flyoutHeader: RootObject /*System.Object*/ | Bind;
        /**
        * System.Object
        */
        public flyoutFooter: RootObject /*System.Object*/ | Bind;
        /**
        * Xamarin.Forms.FlyoutHeaderBehavior
        */
        public flyoutHeaderBehavior: "Default" | "Fixed" | "Scroll" | "CollapseOnScroll" | Bind;
        /**
        * Xamarin.Forms.DataTemplate
        */
        public flyoutHeaderTemplate: XF.DataTemplate | Bind;
        /**
        * Xamarin.Forms.DataTemplate
        */
        public flyoutFooterTemplate: XF.DataTemplate | Bind;
        /**
        * System.Boolean
        */
        public flyoutIsPresented: boolean | null | Bind;
        /**
        * System.Collections.Generic.IList`1[[Xamarin.Forms.ShellItem, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null]]
        */
        public items: any;
        /**
        * Xamarin.Forms.DataTemplate
        */
        public itemTemplate: XF.DataTemplate | Bind;
        /**
        * Xamarin.Forms.DataTemplate
        */
        public menuItemTemplate: XF.DataTemplate | Bind;
        /**
        * System.Collections.IEnumerable
        */
        public flyoutItems: RootObject /*System.Collections.IEnumerable*/ | Bind;
        /**
        * System.Object
        */
        public flyoutContent: RootObject /*System.Object*/ | Bind;
        /**
        * Xamarin.Forms.DataTemplate
        */
        public flyoutContentTemplate: XF.DataTemplate | Bind;
    }
    export declare class ShellContent extends XF.BaseShellItem {
        public static menuItems: AttachedNode;
        public static content: AttachedNode;
        public static contentTemplate: AttachedNode;
        /**
        * Xamarin.Forms.MenuItemCollection
        */
        public menuItems: any;
        /**
        * System.Object
        */
        public content: RootObject /*System.Object*/ | Bind;
        /**
        * Xamarin.Forms.DataTemplate
        */
        public contentTemplate: XF.DataTemplate | Bind;
    }
    export declare class ShellGroupItem extends XF.BaseShellItem {
        public static flyoutDisplayOptions: AttachedNode;
        /**
        * Xamarin.Forms.FlyoutDisplayOptions
        */
        public flyoutDisplayOptions: "AsSingleItem" | "AsMultipleItems" | Bind;
    }
    export declare class FlyoutItem extends XF.ShellItem {
        public static isVisible: AttachedNode;
        public static labelStyle: string;
        public static imageStyle: string;
        public static layoutStyle: string;
    }
    export declare class TabBar extends XF.ShellItem {
    }
    export declare class ShellItem extends XF.ShellGroupItem {
        public static currentItem: AttachedNode;
        public static items: AttachedNode;
        /**
        * Xamarin.Forms.ShellSection
        */
        public currentItem: XF.ShellSection | Bind;
        /**
        * System.Collections.Generic.IList`1[[Xamarin.Forms.ShellSection, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null]]
        */
        public items: any;
    }
    export declare class Tab extends XF.ShellSection {
    }
    export declare class ShellSection extends XF.ShellGroupItem {
        public static currentItem: AttachedNode;
        public static items: AttachedNode;
        /**
        * Xamarin.Forms.ShellContent
        */
        public currentItem: XF.ShellContent | Bind;
        /**
        * System.Collections.Generic.IList`1[[Xamarin.Forms.ShellContent, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null]]
        */
        public items: any;
        /**
        * System.Collections.Generic.IReadOnlyList`1[[Xamarin.Forms.Page, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null]]
        */
        public stack: RootObject /*System.Collections.Generic.IReadOnlyList`1[[Xamarin.Forms.Page, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null]]*/ | Bind;
    }
    export declare class Size extends RootObject /*System.ValueType*/ {
        public static zero: XF.Size;
        /**
        * System.Boolean
        */
        public isZero: boolean | null | Bind;
        /**
        * System.Double
        */
        public width: number | null | Bind;
        /**
        * System.Double
        */
        public height: number | null | Bind;
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
        /**
        * Xamarin.Forms.Color
        */
        public minimumTrackColor: XF.Color | ColorItem | string | null | Bind;
        /**
        * Xamarin.Forms.Color
        */
        public maximumTrackColor: XF.Color | ColorItem | string | null | Bind;
        /**
        * Xamarin.Forms.Color
        */
        public thumbColor: XF.Color | ColorItem | string | null | Bind;
        /**
        * Xamarin.Forms.ImageSource
        */
        public thumbImageSource: /*ImageSource*/ any | Bind;
        /**
        * System.Windows.Input.ICommand
        */
        public dragStartedCommand: RootObject /*System.Windows.Input.ICommand*/ | Bind;
        /**
        * System.Windows.Input.ICommand
        */
        public dragCompletedCommand: RootObject /*System.Windows.Input.ICommand*/ | Bind;
        /**
        * System.Double
        */
        public maximum: number | null | Bind;
        /**
        * System.Double
        */
        public minimum: number | null | Bind;
        /**
        * System.Double
        */
        public value: number | null | Bind;
    }
    export declare class SolidColorBrush extends XF.Brush {
        public static color: AttachedNode;
        /**
        * System.Boolean
        */
        public isEmpty: boolean | null | Bind;
        /**
        * Xamarin.Forms.Color
        */
        public color: XF.Color | ColorItem | string | null | Bind;
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
        /**
        * Xamarin.Forms.Style
        */
        public style: XF.Style | Bind;
        /**
        * Xamarin.Forms.Color
        */
        public backgroundColor: XF.Color | ColorItem | string | null | Bind;
        /**
        * Xamarin.Forms.Color
        */
        public textColor: XF.Color | ColorItem | string | null | Bind;
        /**
        * System.Double
        */
        public characterSpacing: number | null | Bind;
        /**
        * Xamarin.Forms.TextTransform
        */
        public textTransform: "None" | "Default" | "Lowercase" | "Uppercase" | Bind;
        /**
        * Xamarin.Forms.Color
        */
        public foregroundColor: XF.Color | ColorItem | string | null | Bind;
        /**
        * System.String
        */
        public text: string | null | Bind;
        /**
        * Xamarin.Forms.FontAttributes
        */
        public fontAttributes: "None" | "Bold" | "Italic" | Bind;
        /**
        * System.String
        */
        public fontFamily: string | null | Bind;
        /**
        * System.Double
        */
        public fontSize: number | null | Bind;
        /**
        * Xamarin.Forms.TextDecorations
        */
        public textDecorations: "None" | "Underline" | "Strikethrough" | Bind;
        /**
        * System.Double
        */
        public lineHeight: number | null | Bind;
    }
    export declare class StackLayout extends XF.Layout$Generic {
        public static orientation: AttachedNode;
        public static spacing: AttachedNode;
        /**
        * Xamarin.Forms.StackOrientation
        */
        public orientation: "Vertical" | "Horizontal" | Bind;
        /**
        * System.Double
        */
        public spacing: number | null | Bind;
    }
    export declare class StateTrigger extends XF.StateTriggerBase {
        public static isActive: AttachedNode;
        /**
        * System.Boolean
        */
        public isActive: boolean | null | Bind;
    }
    export declare class StateTriggerBase extends XF.BindableObject {
        /**
        * System.Boolean
        */
        public isActive: boolean | null | Bind;
        /**
        * System.Boolean
        */
        public isAttached: boolean | null | Bind;
    }
    export declare class Stepper extends XF.View {
        public static maximum: AttachedNode;
        public static minimum: AttachedNode;
        public static value: AttachedNode;
        public static increment: AttachedNode;
        public static stepperPosition: AttachedNode;
        /**
        * System.Double
        */
        public increment: number | null | Bind;
        /**
        * System.Double
        */
        public maximum: number | null | Bind;
        /**
        * System.Double
        */
        public minimum: number | null | Bind;
        /**
        * System.Double
        */
        public value: number | null | Bind;
    }
    export declare class StreamImageSource extends XF.ImageSource {
        public static stream: AttachedNode;
        /**
        * System.Boolean
        */
        public isEmpty: boolean | null | Bind;
        /**
        * System.Func`2[[System.Threading.CancellationToken, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e],[System.Threading.Tasks.Task`1[[System.IO.Stream, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]], System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]]
        */
        public stream: RootObject /*System.Func`2[[System.Threading.CancellationToken, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e],[System.Threading.Tasks.Task`1[[System.IO.Stream, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]], System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]]*/ | Bind;
    }
    export declare class Style extends RootObject {
        /**
        * System.Boolean
        */
        public applyToDerivedTypes: boolean | null | Bind;
        /**
        * Xamarin.Forms.Style
        */
        public basedOn: XF.Style | Bind;
        public static basedOn: AttachedNode;
        /**
        * System.String
        */
        public baseResourceKey: string | null | Bind;
        /**
        * System.Collections.Generic.IList`1[[Xamarin.Forms.Behavior, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null]]
        */
        public behaviors: any;
        public static behaviors: AttachedNode;
        /**
        * System.Boolean
        */
        public canCascade: boolean | null | Bind;
        /**
        * System.String
        */
        public class: string | null | Bind;
        /**
        * System.Collections.Generic.IList`1[[Xamarin.Forms.Setter, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null]]
        */
        public setters: any;
        public static setters: AttachedNode;
        /**
        * System.Collections.Generic.IList`1[[Xamarin.Forms.TriggerBase, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null]]
        */
        public triggers: any;
        public static triggers: AttachedNode;
        /**
        * System.Type
        */
        public targetType: RootObject /*System.Type*/ | Bind;
    }
    export declare class SwipeGestureRecognizer extends XF.GestureRecognizer {
        public static command: AttachedNode;
        public static commandParameter: AttachedNode;
        public static direction: AttachedNode;
        public static threshold: AttachedNode;
        /**
        * System.Windows.Input.ICommand
        */
        public command: RootObject /*System.Windows.Input.ICommand*/ | Bind;
        /**
        * System.Object
        */
        public commandParameter: RootObject /*System.Object*/ | Bind;
        /**
        * Xamarin.Forms.SwipeDirection
        */
        public direction: "Right" | "Left" | "Up" | "Down" | Bind;
        /**
        * System.UInt32
        */
        public threshold: number | null | Bind;
    }
    export declare class SwipeItem extends XF.MenuItem {
        public static backgroundColor: AttachedNode;
        public static isVisible: AttachedNode;
        /**
        * Xamarin.Forms.Color
        */
        public backgroundColor: XF.Color | ColorItem | string | null | Bind;
        /**
        * System.Boolean
        */
        public isVisible: boolean | null | Bind;
    }
    export declare class SwipeItems extends XF.Element {
        public static mode: AttachedNode;
        public static swipeBehaviorOnInvoked: AttachedNode;
        /**
        * Xamarin.Forms.SwipeMode
        */
        public mode: "Reveal" | "Execute" | Bind;
        /**
        * Xamarin.Forms.SwipeBehaviorOnInvoked
        */
        public swipeBehaviorOnInvoked: "Auto" | "Close" | "RemainOpen" | Bind;
        /**
        * Xamarin.Forms.ISwipeItem
        */
        public item: RootObject | Bind;
        /**
        * System.Int32
        */
        public count: number | null | Bind;
        /**
        * System.Boolean
        */
        public isReadOnly: boolean | null | Bind;
    }
    export declare class SwipeItemView extends XF.ContentView {
        public static command: AttachedNode;
        public static commandParameter: AttachedNode;
        /**
        * System.Windows.Input.ICommand
        */
        public command: RootObject /*System.Windows.Input.ICommand*/ | Bind;
        /**
        * System.Object
        */
        public commandParameter: RootObject /*System.Object*/ | Bind;
    }
    export declare class SwipeView extends XF.ContentView {
        public static threshold: AttachedNode;
        public static leftItems: AttachedNode;
        public static rightItems: AttachedNode;
        public static topItems: AttachedNode;
        public static bottomItems: AttachedNode;
        /**
        * System.Double
        */
        public threshold: number | null | Bind;
        /**
        * Xamarin.Forms.SwipeItems
        */
        public leftItems: any;
        /**
        * Xamarin.Forms.SwipeItems
        */
        public rightItems: any;
        /**
        * Xamarin.Forms.SwipeItems
        */
        public topItems: any;
        /**
        * Xamarin.Forms.SwipeItems
        */
        public bottomItems: any;
    }
    export declare class Switch extends XF.View {
        public static isToggled: AttachedNode;
        public static onColor: AttachedNode;
        public static thumbColor: AttachedNode;
        public static switchOnVisualState: string;
        public static switchOffVisualState: string;
        /**
        * Xamarin.Forms.Color
        */
        public onColor: XF.Color | ColorItem | string | null | Bind;
        /**
        * Xamarin.Forms.Color
        */
        public thumbColor: XF.Color | ColorItem | string | null | Bind;
        /**
        * System.Boolean
        */
        public isToggled: boolean | null | Bind;
    }
    export declare class TabbedPage extends XF.MultiPage$Generic {
        public static barBackgroundColor: AttachedNode;
        public static barBackground: AttachedNode;
        public static barTextColor: AttachedNode;
        public static unselectedTabColor: AttachedNode;
        public static selectedTabColor: AttachedNode;
        /**
        * Xamarin.Forms.Color
        */
        public barBackgroundColor: XF.Color | ColorItem | string | null | Bind;
        /**
        * Xamarin.Forms.Brush
        */
        public barBackground: "AliceBlue" | "AntiqueWhite" | "Aqua" | "Aquamarine" | "Azure" | "Beige" | "Bisque" | "Black" | "BlanchedAlmond" | "Blue" | "BlueViolet" | "Brown" | "BurlyWood" | "CadetBlue" | "Chartreuse" | "Chocolate" | "Coral" | "CornflowerBlue" | "Cornsilk" | "Crimson" | "Cyan" | "DarkBlue" | "DarkCyan" | "DarkGoldenrod" | "DarkGray" | "DarkGreen" | "DarkKhaki" | "DarkMagenta" | "DarkOliveGreen" | "DarkOrange" | "DarkOrchid" | "DarkRed" | "DarkSalmon" | "DarkSeaGreen" | "DarkSlateBlue" | "DarkSlateGray" | "DarkTurquoise" | "DarkViolet" | "DeepPink" | "DeepSkyBlue" | "DimGray" | "DodgerBlue" | "Firebrick" | "FloralWhite" | "ForestGreen" | "Fuchsia" | "Gainsboro" | "GhostWhite" | "Gold" | "Goldenrod" | "Gray" | "Green" | "GreenYellow" | "Honeydew" | "HotPink" | "IndianRed" | "Indigo" | "Ivory" | "Khaki" | "Lavender" | "LavenderBlush" | "LawnGreen" | "LemonChiffon" | "LightBlue" | "LightCoral" | "LightCyan" | "LightGoldenrodYellow" | "LightGray" | "LightGreen" | "LightPink" | "LightSalmon" | "LightSeaGreen" | "LightSkyBlue" | "LightSlateGray" | "LightSteelBlue" | "LightYellow" | "Lime" | "LimeGreen" | "Linen" | "Magenta" | "Maroon" | "MediumAquamarine" | "MediumBlue" | "MediumOrchid" | "MediumPurple" | "MediumSeaGreen" | "MediumSlateBlue" | "MediumSpringGreen" | "MediumTurquoise" | "MediumVioletRed" | "MidnightBlue" | "MintCream" | "MistyRose" | "Moccasin" | "NavajoWhite" | "Navy" | "OldLace" | "Olive" | "OliveDrab" | "Orange" | "OrangeRed" | "Orchid" | "PaleGoldenrod" | "PaleGreen" | "PaleTurquoise" | "PaleVioletRed" | "PapayaWhip" | "PeachPuff" | "Peru" | "Pink" | "Plum" | "PowderBlue" | "Purple" | "Red" | "RosyBrown" | "RoyalBlue" | "SaddleBrown" | "Salmon" | "SandyBrown" | "SeaGreen" | "SeaShell" | "Sienna" | "Silver" | "SkyBlue" | "SlateBlue" | "SlateGray" | "Snow" | "SpringGreen" | "SteelBlue" | "Tan" | "Teal" | "Thistle" | "Tomato" | "Transparent" | "Turquoise" | "Violet" | "Wheat" | "White" | "WhiteSmoke" | "Yellow" | "YellowGreen" | XF.Brush | Bind | Bind;
        /**
        * Xamarin.Forms.Color
        */
        public barTextColor: XF.Color | ColorItem | string | null | Bind;
        /**
        * Xamarin.Forms.Color
        */
        public unselectedTabColor: XF.Color | ColorItem | string | null | Bind;
        /**
        * Xamarin.Forms.Color
        */
        public selectedTabColor: XF.Color | ColorItem | string | null | Bind;
    }
    export declare class TableRoot extends XF.TableSectionBase$Generic {
    }
    export declare class TableSectionBase$Generic extends XF.TableSectionBase {
        /**
        * System.Int32
        */
        public count: number | null | Bind;
        /**
        * 
        */
        public item: RootObject | Bind;
        public static item: AttachedNode;
    }
    export declare class TableSection extends XF.TableSectionBase$Generic {
    }
    export declare class TableSectionBase extends XF.BindableObject {
        public static title: AttachedNode;
        public static textColor: AttachedNode;
        /**
        * System.String
        */
        public title: string | null | Bind;
        /**
        * Xamarin.Forms.Color
        */
        public textColor: XF.Color | ColorItem | string | null | Bind;
    }
    export declare class TableView extends XF.View {
        public static rowHeight: AttachedNode;
        public static hasUnevenRows: AttachedNode;
        /**
        * System.Boolean
        */
        public hasUnevenRows: boolean | null | Bind;
        /**
        * Xamarin.Forms.TableIntent
        */
        public intent: "Menu" | "Settings" | "Form" | "Data" | Bind;
        /**
        * Xamarin.Forms.TableRoot
        */
        public root: any;
        public static root: AttachedNode;
        /**
        * System.Int32
        */
        public rowHeight: number | null | Bind;
    }
    export declare class TapGestureRecognizer extends XF.GestureRecognizer {
        public static command: AttachedNode;
        public static commandParameter: AttachedNode;
        public static numberOfTapsRequired: AttachedNode;
        public static tappedCallback: AttachedNode;
        public static tappedCallbackParameter: AttachedNode;
        /**
        * System.Windows.Input.ICommand
        */
        public command: RootObject /*System.Windows.Input.ICommand*/ | Bind;
        /**
        * System.Object
        */
        public commandParameter: RootObject /*System.Object*/ | Bind;
        /**
        * System.Int32
        */
        public numberOfTapsRequired: number | null | Bind;
    }
    export declare class TemplatedPage extends XF.Page {
        public static controlTemplate: AttachedNode;
        /**
        * Xamarin.Forms.ControlTemplate
        */
        public controlTemplate: XF.ControlTemplate | Bind;
    }
    export declare class TemplatedView extends XF.Layout {
        public static controlTemplate: AttachedNode;
        /**
        * Xamarin.Forms.ControlTemplate
        */
        public controlTemplate: XF.ControlTemplate | Bind;
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
        /**
        * System.String
        */
        public format: string | null | Bind;
        /**
        * Xamarin.Forms.Color
        */
        public textColor: XF.Color | ColorItem | string | null | Bind;
        /**
        * System.Double
        */
        public characterSpacing: number | null | Bind;
        /**
        * System.TimeSpan
        */
        public time: RootObject /*System.TimeSpan*/ | Bind;
        /**
        * Xamarin.Forms.FontAttributes
        */
        public fontAttributes: "None" | "Bold" | "Italic" | Bind;
        /**
        * System.String
        */
        public fontFamily: string | null | Bind;
        /**
        * System.Double
        */
        public fontSize: number | null | Bind;
        /**
        * Xamarin.Forms.TextTransform
        */
        public textTransform: "None" | "Default" | "Lowercase" | "Uppercase" | Bind;
    }
    export declare class ToolbarItem extends XF.MenuItem {
        /**
        * Xamarin.Forms.ToolbarItemOrder
        */
        public order: "Default" | "Primary" | "Secondary" | Bind;
        /**
        * System.Int32
        */
        public priority: number | null | Bind;
    }
    export declare class UriImageSource extends XF.ImageSource {
        public static uri: AttachedNode;
        /**
        * System.Boolean
        */
        public isEmpty: boolean | null | Bind;
        /**
        * System.TimeSpan
        */
        public cacheValidity: RootObject /*System.TimeSpan*/ | Bind;
        /**
        * System.Boolean
        */
        public cachingEnabled: boolean | null | Bind;
        /**
        * System.Uri
        */
        public uri: RootObject /*System.Uri*/ | Bind;
    }
    export declare class UrlWebViewSource extends XF.WebViewSource {
        public static url: AttachedNode;
        /**
        * System.String
        */
        public url: string | null | Bind;
    }
    export declare class View extends XF.VisualElement {
        public static verticalOptions: AttachedNode;
        public static horizontalOptions: AttachedNode;
        public static margin: AttachedNode;
        /**
        * System.Collections.Generic.IList`1[[Xamarin.Forms.IGestureRecognizer, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null]]
        */
        public gestureRecognizers: any;
        public static gestureRecognizers: AttachedNode;
        /**
        * Xamarin.Forms.LayoutOptions
        */
        public horizontalOptions: "Start" | "Center" | "End" | "Fill" | "StartAndExpand" | "CenterAndExpand" | "EndAndExpand" | "FillAndExpand" | XF.LayoutOptions | Bind | Bind;
        /**
        * Xamarin.Forms.Thickness
        */
        public margin: /*Thickness*/ any | Bind;
        /**
        * Xamarin.Forms.LayoutOptions
        */
        public verticalOptions: "Start" | "Center" | "End" | "Fill" | "StartAndExpand" | "CenterAndExpand" | "EndAndExpand" | "FillAndExpand" | XF.LayoutOptions | Bind | Bind;
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
        /**
        * Xamarin.Forms.IVisual
        */
        public visual: /*IVisual*/ any | Bind;
        /**
        * Xamarin.Forms.FlowDirection
        */
        public flowDirection: "MatchParent" | "LeftToRight" | "RightToLeft" | Bind;
        /**
        * System.Double
        */
        public anchorX: number | null | Bind;
        /**
        * System.Double
        */
        public anchorY: number | null | Bind;
        /**
        * Xamarin.Forms.Color
        */
        public backgroundColor: XF.Color | ColorItem | string | null | Bind;
        /**
        * Xamarin.Forms.Brush
        */
        public background: "AliceBlue" | "AntiqueWhite" | "Aqua" | "Aquamarine" | "Azure" | "Beige" | "Bisque" | "Black" | "BlanchedAlmond" | "Blue" | "BlueViolet" | "Brown" | "BurlyWood" | "CadetBlue" | "Chartreuse" | "Chocolate" | "Coral" | "CornflowerBlue" | "Cornsilk" | "Crimson" | "Cyan" | "DarkBlue" | "DarkCyan" | "DarkGoldenrod" | "DarkGray" | "DarkGreen" | "DarkKhaki" | "DarkMagenta" | "DarkOliveGreen" | "DarkOrange" | "DarkOrchid" | "DarkRed" | "DarkSalmon" | "DarkSeaGreen" | "DarkSlateBlue" | "DarkSlateGray" | "DarkTurquoise" | "DarkViolet" | "DeepPink" | "DeepSkyBlue" | "DimGray" | "DodgerBlue" | "Firebrick" | "FloralWhite" | "ForestGreen" | "Fuchsia" | "Gainsboro" | "GhostWhite" | "Gold" | "Goldenrod" | "Gray" | "Green" | "GreenYellow" | "Honeydew" | "HotPink" | "IndianRed" | "Indigo" | "Ivory" | "Khaki" | "Lavender" | "LavenderBlush" | "LawnGreen" | "LemonChiffon" | "LightBlue" | "LightCoral" | "LightCyan" | "LightGoldenrodYellow" | "LightGray" | "LightGreen" | "LightPink" | "LightSalmon" | "LightSeaGreen" | "LightSkyBlue" | "LightSlateGray" | "LightSteelBlue" | "LightYellow" | "Lime" | "LimeGreen" | "Linen" | "Magenta" | "Maroon" | "MediumAquamarine" | "MediumBlue" | "MediumOrchid" | "MediumPurple" | "MediumSeaGreen" | "MediumSlateBlue" | "MediumSpringGreen" | "MediumTurquoise" | "MediumVioletRed" | "MidnightBlue" | "MintCream" | "MistyRose" | "Moccasin" | "NavajoWhite" | "Navy" | "OldLace" | "Olive" | "OliveDrab" | "Orange" | "OrangeRed" | "Orchid" | "PaleGoldenrod" | "PaleGreen" | "PaleTurquoise" | "PaleVioletRed" | "PapayaWhip" | "PeachPuff" | "Peru" | "Pink" | "Plum" | "PowderBlue" | "Purple" | "Red" | "RosyBrown" | "RoyalBlue" | "SaddleBrown" | "Salmon" | "SandyBrown" | "SeaGreen" | "SeaShell" | "Sienna" | "Silver" | "SkyBlue" | "SlateBlue" | "SlateGray" | "Snow" | "SpringGreen" | "SteelBlue" | "Tan" | "Teal" | "Thistle" | "Tomato" | "Transparent" | "Turquoise" | "Violet" | "Wheat" | "White" | "WhiteSmoke" | "Yellow" | "YellowGreen" | XF.Brush | Bind | Bind;
        /**
        * System.Collections.Generic.IList`1[[Xamarin.Forms.Behavior, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null]]
        */
        public behaviors: any;
        /**
        * Xamarin.Forms.Rectangle
        */
        public bounds: "Zero" | XF.Rectangle | Bind | Bind;
        /**
        * System.Double
        */
        public height: number | null | Bind;
        /**
        * System.Double
        */
        public heightRequest: number | null | Bind;
        /**
        * System.Boolean
        */
        public inputTransparent: boolean | null | Bind;
        /**
        * System.Boolean
        */
        public isEnabled: boolean | null | Bind;
        /**
        * System.Boolean
        */
        public isFocused: boolean | null | Bind;
        /**
        * System.Boolean
        */
        public isVisible: boolean | null | Bind;
        /**
        * System.Double
        */
        public minimumHeightRequest: number | null | Bind;
        /**
        * System.Double
        */
        public minimumWidthRequest: number | null | Bind;
        /**
        * System.Double
        */
        public opacity: number | null | Bind;
        /**
        * System.Double
        */
        public rotation: number | null | Bind;
        /**
        * System.Double
        */
        public rotationX: number | null | Bind;
        /**
        * System.Double
        */
        public rotationY: number | null | Bind;
        /**
        * System.Double
        */
        public scale: number | null | Bind;
        /**
        * System.Double
        */
        public scaleX: number | null | Bind;
        /**
        * System.Double
        */
        public scaleY: number | null | Bind;
        /**
        * System.Int32
        */
        public tabIndex: number | null | Bind;
        /**
        * System.Boolean
        */
        public isTabStop: boolean | null | Bind;
        /**
        * System.Double
        */
        public translationX: number | null | Bind;
        /**
        * System.Double
        */
        public translationY: number | null | Bind;
        /**
        * System.Collections.Generic.IList`1[[Xamarin.Forms.TriggerBase, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null]]
        */
        public triggers: any;
        /**
        * System.Double
        */
        public width: number | null | Bind;
        /**
        * System.Double
        */
        public widthRequest: number | null | Bind;
        /**
        * System.Double
        */
        public x: number | null | Bind;
        /**
        * System.Double
        */
        public y: number | null | Bind;
        /**
        * Xamarin.Forms.Shapes.Geometry
        */
        public clip: XF.Geometry | Bind;
        /**
        * Xamarin.Forms.ResourceDictionary
        */
        public resources: any;
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
        /**
        * System.Boolean
        */
        public canGoBack: boolean | null | Bind;
        /**
        * System.Boolean
        */
        public canGoForward: boolean | null | Bind;
        /**
        * System.Net.CookieContainer
        */
        public cookies: RootObject /*System.Net.CookieContainer*/ | Bind;
        /**
        * Xamarin.Forms.WebViewSource
        */
        public source: XF.WebViewSource | Bind;
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
        /**
        * Xamarin.Forms.Point
        */
        public point: "Zero" | XF.Point | Bind | Bind;
        /**
        * Xamarin.Forms.Size
        */
        public size: "Zero" | XF.Size | Bind | Bind;
        /**
        * System.Double
        */
        public rotationAngle: number | null | Bind;
        /**
        * Xamarin.Forms.SweepDirection
        */
        public sweepDirection: "CounterClockwise" | "Clockwise" | Bind;
        /**
        * System.Boolean
        */
        public isLargeArc: boolean | null | Bind;
    }
    export declare class BezierSegment extends XF.PathSegment {
        public static point1: AttachedNode;
        public static point2: AttachedNode;
        public static point3: AttachedNode;
        /**
        * Xamarin.Forms.Point
        */
        public point1: "Zero" | XF.Point | Bind | Bind;
        /**
        * Xamarin.Forms.Point
        */
        public point2: "Zero" | XF.Point | Bind | Bind;
        /**
        * Xamarin.Forms.Point
        */
        public point3: "Zero" | XF.Point | Bind | Bind;
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
        /**
        * System.Double
        */
        public centerX: number | null | Bind;
        /**
        * System.Double
        */
        public centerY: number | null | Bind;
        /**
        * System.Double
        */
        public scaleX: number | null | Bind;
        /**
        * System.Double
        */
        public scaleY: number | null | Bind;
        /**
        * System.Double
        */
        public skewX: number | null | Bind;
        /**
        * System.Double
        */
        public skewY: number | null | Bind;
        /**
        * System.Double
        */
        public rotation: number | null | Bind;
        /**
        * System.Double
        */
        public translateX: number | null | Bind;
        /**
        * System.Double
        */
        public translateY: number | null | Bind;
    }
    export declare class Ellipse extends XF.Shape {
    }
    export declare class EllipseGeometry extends XF.Geometry {
        public static center: AttachedNode;
        public static radiusX: AttachedNode;
        public static radiusY: AttachedNode;
        /**
        * Xamarin.Forms.Point
        */
        public center: "Zero" | XF.Point | Bind | Bind;
        /**
        * System.Double
        */
        public radiusX: number | null | Bind;
        /**
        * System.Double
        */
        public radiusY: number | null | Bind;
    }
    export declare class Geometry extends XF.BindableObject {
    }
    export declare class GeometryGroup extends XF.Geometry {
        public static children: AttachedNode;
        public static fillRule: AttachedNode;
        /**
        * Xamarin.Forms.Shapes.GeometryCollection
        */
        public children: any;
        /**
        * Xamarin.Forms.Shapes.FillRule
        */
        public fillRule: "EvenOdd" | "Nonzero" | Bind;
    }
    export declare class GeometryHelper extends RootObject {
        public static ttenGeometry: AttachedNode;
    }
    export declare class Line extends XF.Shape {
        public static x1: AttachedNode;
        public static y1: AttachedNode;
        public static x2: AttachedNode;
        public static y2: AttachedNode;
        /**
        * System.Double
        */
        public x1: number | null | Bind;
        /**
        * System.Double
        */
        public y1: number | null | Bind;
        /**
        * System.Double
        */
        public x2: number | null | Bind;
        /**
        * System.Double
        */
        public y2: number | null | Bind;
    }
    export declare class LineGeometry extends XF.Geometry {
        public static startPoint: AttachedNode;
        public static endPoint: AttachedNode;
        /**
        * Xamarin.Forms.Point
        */
        public startPoint: "Zero" | XF.Point | Bind | Bind;
        /**
        * Xamarin.Forms.Point
        */
        public endPoint: "Zero" | XF.Point | Bind | Bind;
    }
    export declare class LineSegment extends XF.PathSegment {
        public static point: AttachedNode;
        /**
        * Xamarin.Forms.Point
        */
        public point: "Zero" | XF.Point | Bind | Bind;
    }
    export declare class MatrixTransform extends XF.Transform {
        public static matrix: AttachedNode;
        /**
        * Xamarin.Forms.Shapes.Matrix
        */
        public matrix: /*Matrix*/ any | Bind;
    }
    export declare class Path extends XF.Shape {
        public static data: AttachedNode;
        public static renderTransform: AttachedNode;
        /**
        * Xamarin.Forms.Shapes.Geometry
        */
        public data: XF.Geometry | Bind;
        /**
        * Xamarin.Forms.Shapes.Transform
        */
        public renderTransform: /*Transform*/ any | Bind;
    }
    export declare class PathFigure extends XF.BindableObject {
        public static segments: AttachedNode;
        public static startPoint: AttachedNode;
        public static isClosed: AttachedNode;
        public static isFilled: AttachedNode;
        /**
        * Xamarin.Forms.Shapes.PathSegmentCollection
        */
        public segments: any;
        /**
        * Xamarin.Forms.Point
        */
        public startPoint: "Zero" | XF.Point | Bind | Bind;
        /**
        * System.Boolean
        */
        public isClosed: boolean | null | Bind;
        /**
        * System.Boolean
        */
        public isFilled: boolean | null | Bind;
    }
    export declare class PathGeometry extends XF.Geometry {
        public static figures: AttachedNode;
        public static fillRule: AttachedNode;
        /**
        * Xamarin.Forms.Shapes.PathFigureCollection
        */
        public figures: any;
        /**
        * Xamarin.Forms.Shapes.FillRule
        */
        public fillRule: "EvenOdd" | "Nonzero" | Bind;
    }
    export declare class PathSegment extends XF.BindableObject {
    }
    export declare class PolyBezierSegment extends XF.PathSegment {
        public static points: AttachedNode;
        /**
        * Xamarin.Forms.Shapes.PointCollection
        */
        public points: any;
    }
    export declare class Polygon extends XF.Shape {
        public static points: AttachedNode;
        public static fillRule: AttachedNode;
        /**
        * Xamarin.Forms.Shapes.PointCollection
        */
        public points: any;
        /**
        * Xamarin.Forms.Shapes.FillRule
        */
        public fillRule: "EvenOdd" | "Nonzero" | Bind;
    }
    export declare class Polyline extends XF.Shape {
        public static points: AttachedNode;
        public static fillRule: AttachedNode;
        /**
        * Xamarin.Forms.Shapes.PointCollection
        */
        public points: any;
        /**
        * Xamarin.Forms.Shapes.FillRule
        */
        public fillRule: "EvenOdd" | "Nonzero" | Bind;
    }
    export declare class PolyLineSegment extends XF.PathSegment {
        public static points: AttachedNode;
        /**
        * Xamarin.Forms.Shapes.PointCollection
        */
        public points: any;
    }
    export declare class PolyQuadraticBezierSegment extends XF.PathSegment {
        public static points: AttachedNode;
        /**
        * Xamarin.Forms.Shapes.PointCollection
        */
        public points: any;
    }
    export declare class QuadraticBezierSegment extends XF.PathSegment {
        public static point1: AttachedNode;
        public static point2: AttachedNode;
        /**
        * Xamarin.Forms.Point
        */
        public point1: "Zero" | XF.Point | Bind | Bind;
        /**
        * Xamarin.Forms.Point
        */
        public point2: "Zero" | XF.Point | Bind | Bind;
    }
    export declare class Rectangle extends XF.Shape {
        public static radiusX: AttachedNode;
        public static radiusY: AttachedNode;
        /**
        * System.Double
        */
        public radiusX: number | null | Bind;
        /**
        * System.Double
        */
        public radiusY: number | null | Bind;
    }
    export declare class RectangleGeometry extends XF.Geometry {
        public static rect: AttachedNode;
        /**
        * Xamarin.Forms.Rect
        */
        public rect: "Zero" | XF.Rect | Bind | Bind;
    }
    export declare class RotateTransform extends XF.Transform {
        public static angle: AttachedNode;
        public static centerX: AttachedNode;
        public static centerY: AttachedNode;
        /**
        * System.Double
        */
        public angle: number | null | Bind;
        /**
        * System.Double
        */
        public centerX: number | null | Bind;
        /**
        * System.Double
        */
        public centerY: number | null | Bind;
    }
    export declare class RoundRectangleGeometry extends XF.GeometryGroup {
        public static rect: AttachedNode;
        public static cornerRadius: AttachedNode;
        /**
        * Xamarin.Forms.Rect
        */
        public rect: "Zero" | XF.Rect | Bind | Bind;
        /**
        * Xamarin.Forms.CornerRadius
        */
        public cornerRadius: /*CornerRadius*/ any | Bind;
    }
    export declare class ScaleTransform extends XF.Transform {
        public static scaleX: AttachedNode;
        public static scaleY: AttachedNode;
        public static centerX: AttachedNode;
        public static centerY: AttachedNode;
        /**
        * System.Double
        */
        public scaleX: number | null | Bind;
        /**
        * System.Double
        */
        public scaleY: number | null | Bind;
        /**
        * System.Double
        */
        public centerX: number | null | Bind;
        /**
        * System.Double
        */
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
        /**
        * Xamarin.Forms.Brush
        */
        public fill: "AliceBlue" | "AntiqueWhite" | "Aqua" | "Aquamarine" | "Azure" | "Beige" | "Bisque" | "Black" | "BlanchedAlmond" | "Blue" | "BlueViolet" | "Brown" | "BurlyWood" | "CadetBlue" | "Chartreuse" | "Chocolate" | "Coral" | "CornflowerBlue" | "Cornsilk" | "Crimson" | "Cyan" | "DarkBlue" | "DarkCyan" | "DarkGoldenrod" | "DarkGray" | "DarkGreen" | "DarkKhaki" | "DarkMagenta" | "DarkOliveGreen" | "DarkOrange" | "DarkOrchid" | "DarkRed" | "DarkSalmon" | "DarkSeaGreen" | "DarkSlateBlue" | "DarkSlateGray" | "DarkTurquoise" | "DarkViolet" | "DeepPink" | "DeepSkyBlue" | "DimGray" | "DodgerBlue" | "Firebrick" | "FloralWhite" | "ForestGreen" | "Fuchsia" | "Gainsboro" | "GhostWhite" | "Gold" | "Goldenrod" | "Gray" | "Green" | "GreenYellow" | "Honeydew" | "HotPink" | "IndianRed" | "Indigo" | "Ivory" | "Khaki" | "Lavender" | "LavenderBlush" | "LawnGreen" | "LemonChiffon" | "LightBlue" | "LightCoral" | "LightCyan" | "LightGoldenrodYellow" | "LightGray" | "LightGreen" | "LightPink" | "LightSalmon" | "LightSeaGreen" | "LightSkyBlue" | "LightSlateGray" | "LightSteelBlue" | "LightYellow" | "Lime" | "LimeGreen" | "Linen" | "Magenta" | "Maroon" | "MediumAquamarine" | "MediumBlue" | "MediumOrchid" | "MediumPurple" | "MediumSeaGreen" | "MediumSlateBlue" | "MediumSpringGreen" | "MediumTurquoise" | "MediumVioletRed" | "MidnightBlue" | "MintCream" | "MistyRose" | "Moccasin" | "NavajoWhite" | "Navy" | "OldLace" | "Olive" | "OliveDrab" | "Orange" | "OrangeRed" | "Orchid" | "PaleGoldenrod" | "PaleGreen" | "PaleTurquoise" | "PaleVioletRed" | "PapayaWhip" | "PeachPuff" | "Peru" | "Pink" | "Plum" | "PowderBlue" | "Purple" | "Red" | "RosyBrown" | "RoyalBlue" | "SaddleBrown" | "Salmon" | "SandyBrown" | "SeaGreen" | "SeaShell" | "Sienna" | "Silver" | "SkyBlue" | "SlateBlue" | "SlateGray" | "Snow" | "SpringGreen" | "SteelBlue" | "Tan" | "Teal" | "Thistle" | "Tomato" | "Transparent" | "Turquoise" | "Violet" | "Wheat" | "White" | "WhiteSmoke" | "Yellow" | "YellowGreen" | XF.Brush | Bind | Bind;
        /**
        * Xamarin.Forms.Brush
        */
        public stroke: "AliceBlue" | "AntiqueWhite" | "Aqua" | "Aquamarine" | "Azure" | "Beige" | "Bisque" | "Black" | "BlanchedAlmond" | "Blue" | "BlueViolet" | "Brown" | "BurlyWood" | "CadetBlue" | "Chartreuse" | "Chocolate" | "Coral" | "CornflowerBlue" | "Cornsilk" | "Crimson" | "Cyan" | "DarkBlue" | "DarkCyan" | "DarkGoldenrod" | "DarkGray" | "DarkGreen" | "DarkKhaki" | "DarkMagenta" | "DarkOliveGreen" | "DarkOrange" | "DarkOrchid" | "DarkRed" | "DarkSalmon" | "DarkSeaGreen" | "DarkSlateBlue" | "DarkSlateGray" | "DarkTurquoise" | "DarkViolet" | "DeepPink" | "DeepSkyBlue" | "DimGray" | "DodgerBlue" | "Firebrick" | "FloralWhite" | "ForestGreen" | "Fuchsia" | "Gainsboro" | "GhostWhite" | "Gold" | "Goldenrod" | "Gray" | "Green" | "GreenYellow" | "Honeydew" | "HotPink" | "IndianRed" | "Indigo" | "Ivory" | "Khaki" | "Lavender" | "LavenderBlush" | "LawnGreen" | "LemonChiffon" | "LightBlue" | "LightCoral" | "LightCyan" | "LightGoldenrodYellow" | "LightGray" | "LightGreen" | "LightPink" | "LightSalmon" | "LightSeaGreen" | "LightSkyBlue" | "LightSlateGray" | "LightSteelBlue" | "LightYellow" | "Lime" | "LimeGreen" | "Linen" | "Magenta" | "Maroon" | "MediumAquamarine" | "MediumBlue" | "MediumOrchid" | "MediumPurple" | "MediumSeaGreen" | "MediumSlateBlue" | "MediumSpringGreen" | "MediumTurquoise" | "MediumVioletRed" | "MidnightBlue" | "MintCream" | "MistyRose" | "Moccasin" | "NavajoWhite" | "Navy" | "OldLace" | "Olive" | "OliveDrab" | "Orange" | "OrangeRed" | "Orchid" | "PaleGoldenrod" | "PaleGreen" | "PaleTurquoise" | "PaleVioletRed" | "PapayaWhip" | "PeachPuff" | "Peru" | "Pink" | "Plum" | "PowderBlue" | "Purple" | "Red" | "RosyBrown" | "RoyalBlue" | "SaddleBrown" | "Salmon" | "SandyBrown" | "SeaGreen" | "SeaShell" | "Sienna" | "Silver" | "SkyBlue" | "SlateBlue" | "SlateGray" | "Snow" | "SpringGreen" | "SteelBlue" | "Tan" | "Teal" | "Thistle" | "Tomato" | "Transparent" | "Turquoise" | "Violet" | "Wheat" | "White" | "WhiteSmoke" | "Yellow" | "YellowGreen" | XF.Brush | Bind | Bind;
        /**
        * System.Double
        */
        public strokeThickness: number | null | Bind;
        /**
        * Xamarin.Forms.DoubleCollection
        */
        public strokeDashArray: any;
        /**
        * System.Double
        */
        public strokeDashOffset: number | null | Bind;
        /**
        * Xamarin.Forms.Shapes.PenLineCap
        */
        public strokeLineCap: "Flat" | "Square" | "Round" | Bind;
        /**
        * Xamarin.Forms.Shapes.PenLineJoin
        */
        public strokeLineJoin: "Miter" | "Bevel" | "Round" | Bind;
        /**
        * System.Double
        */
        public strokeMiterLimit: number | null | Bind;
        /**
        * Xamarin.Forms.Stretch
        */
        public aspect: "None" | "Fill" | "Uniform" | "UniformToFill" | Bind;
    }
    export declare class SkewTransform extends XF.Transform {
        public static angleX: AttachedNode;
        public static angleY: AttachedNode;
        public static centerX: AttachedNode;
        public static centerY: AttachedNode;
        /**
        * System.Double
        */
        public angleX: number | null | Bind;
        /**
        * System.Double
        */
        public angleY: number | null | Bind;
        /**
        * System.Double
        */
        public centerX: number | null | Bind;
        /**
        * System.Double
        */
        public centerY: number | null | Bind;
    }
    export declare class Transform extends XF.BindableObject {
        public static value: AttachedNode;
        /**
        * Xamarin.Forms.Shapes.Matrix
        */
        public value: /*Matrix*/ any | Bind;
    }
    export declare class TransformGroup extends XF.Transform {
        public static children: AttachedNode;
        /**
        * Xamarin.Forms.Shapes.TransformCollection
        */
        public children: any;
    }
    export declare class TranslateTransform extends XF.Transform {
        public static x: AttachedNode;
        public static y: AttachedNode;
        /**
        * System.Double
        */
        public x: number | null | Bind;
        /**
        * System.Double
        */
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
                /**
                * Xamarin.Forms.BindingBase
                */
                public groupDisplayBinding: RootObject | Bind;
                /**
                * Xamarin.Forms.DataTemplate
                */
                public groupHeaderTemplate: XF.DataTemplate | Bind;
                public static groupHeaderTemplate: AttachedNode;
                /**
                * Xamarin.Forms.BindableProperty
                */
                public groupHeaderTemplateProperty: /*BindableProperty*/ any | Bind;
                /**
                * Xamarin.Forms.BindingBase
                */
                public groupShortNameBinding: RootObject | Bind;
                /**
                * 
                */
                public headerContent: RootObject | Bind;
                public static headerContent: AttachedNode;
                /**
                * System.Boolean
                */
                public isGroupingEnabled: boolean | null | Bind;
                /**
                * Xamarin.Forms.BindableProperty
                */
                public isGroupingEnabledProperty: /*BindableProperty*/ any | Bind;
                /**
                * System.Collections.IEnumerable
                */
                public itemsSource: RootObject /*System.Collections.IEnumerable*/ | Bind;
                /**
                * System.String
                */
                public name: string | null | Bind;
                /**
                * Xamarin.Forms.Internals.TemplatedItemsList`2
                */
                public parent: any;
                public static parent: AttachedNode;
                /**
                * Xamarin.Forms.BindableProperty
                */
                public progressiveLoadingProperty: /*BindableProperty*/ any | Bind;
                /**
                * System.String
                */
                public shortName: string | null | Bind;
                /**
                * System.Collections.Generic.IReadOnlyList`1[[System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]]
                */
                public shortNames: RootObject /*System.Collections.Generic.IReadOnlyList`1[[System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]]*/ | Bind;
                /**
                * System.Int32
                */
                public count: number | null | Bind;
                /**
                * 
                */
                public item: RootObject | Bind;
                public static item: AttachedNode;
            }
        }
    }
}
ns = "XF";
Object.defineProperties(XF as any, {
    AbsoluteLayout: create("AbsoluteLayout","Xamarin.Forms"),
    ActivityIndicator: create("ActivityIndicator","Xamarin.Forms"),
    AdaptiveTrigger: create("AdaptiveTrigger","Xamarin.Forms"),
    Application: create("Application","Xamarin.Forms"),
    AppLinkEntry: create("AppLinkEntry","Xamarin.Forms"),
    AutomationProperties: create("AutomationProperties","Xamarin.Forms"),
    BaseMenuItem: create("BaseMenuItem","Xamarin.Forms"),
    BindableLayout: create("BindableLayout","Xamarin.Forms"),
    BindableObject: create("BindableObject","Xamarin.Forms"),
    BoxView: create("BoxView","Xamarin.Forms"),
    Brush: create("Brush","Xamarin.Forms"),
    Button: create("Button","Xamarin.Forms"),
    CarouselPage: create("CarouselPage","Xamarin.Forms"),
    Cell: create("Cell","Xamarin.Forms"),
    EntryCell: create("EntryCell","Xamarin.Forms"),
    ImageCell: create("ImageCell","Xamarin.Forms"),
    SwitchCell: create("SwitchCell","Xamarin.Forms"),
    TextCell: create("TextCell","Xamarin.Forms"),
    ViewCell: create("ViewCell","Xamarin.Forms"),
    CheckBox: create("CheckBox","Xamarin.Forms"),
    ClickGestureRecognizer: create("ClickGestureRecognizer","Xamarin.Forms"),
    Color: create("Color","Xamarin.Forms"),
    ColumnDefinition: create("ColumnDefinition","Xamarin.Forms"),
    CompareStateTrigger: create("CompareStateTrigger","Xamarin.Forms"),
    CompressedLayout: create("CompressedLayout","Xamarin.Forms"),
    Constraint: create("Constraint","Xamarin.Forms"),
    ContentPage: create("ContentPage","Xamarin.Forms"),
    ContentPresenter: create("ContentPresenter","Xamarin.Forms"),
    ContentView: create("ContentView","Xamarin.Forms"),
    ControlTemplate: create("ControlTemplate","Xamarin.Forms"),
    DataTemplate: create("DataTemplate","Xamarin.Forms"),
    DataTemplateSelector: create("DataTemplateSelector","Xamarin.Forms"),
    DatePicker: create("DatePicker","Xamarin.Forms"),
    DeviceStateTrigger: create("DeviceStateTrigger","Xamarin.Forms"),
    DragGestureRecognizer: create("DragGestureRecognizer","Xamarin.Forms"),
    DropGestureRecognizer: create("DropGestureRecognizer","Xamarin.Forms"),
    Easing: create("Easing","Xamarin.Forms"),
    Editor: create("Editor","Xamarin.Forms"),
    Effect: create("Effect","Xamarin.Forms"),
    Element: create("Element","Xamarin.Forms"),
    ElementTemplate: create("ElementTemplate","Xamarin.Forms"),
    Entry: create("Entry","Xamarin.Forms"),
    FileImageSource: create("FileImageSource","Xamarin.Forms"),
    FlexLayout: create("FlexLayout","Xamarin.Forms"),
    FlyoutPage: create("FlyoutPage","Xamarin.Forms"),
    MasterDetailPage: create("MasterDetailPage","Xamarin.Forms"),
    FontImageSource: create("FontImageSource","Xamarin.Forms"),
    FormattedString: create("FormattedString","Xamarin.Forms"),
    Frame: create("Frame","Xamarin.Forms"),
    GestureElement: create("GestureElement","Xamarin.Forms"),
    GestureRecognizer: create("GestureRecognizer","Xamarin.Forms"),
    GradientBrush: create("GradientBrush","Xamarin.Forms"),
    GradientStop: create("GradientStop","Xamarin.Forms"),
    Grid: create("Grid","Xamarin.Forms"),
    HtmlWebViewSource: create("HtmlWebViewSource","Xamarin.Forms"),
    Image: create("Image","Xamarin.Forms"),
    ImageButton: create("ImageButton","Xamarin.Forms"),
    ImageSource: create("ImageSource","Xamarin.Forms"),
    IndicatorView: create("IndicatorView","Xamarin.Forms"),
    InputView: create("InputView","Xamarin.Forms"),
    Behavior: create("Behavior","Xamarin.Forms"),
    Behavior$Generic: create("Behavior`1","Xamarin.Forms"),
    DataTrigger: create("DataTrigger","Xamarin.Forms"),
    EventTrigger: create("EventTrigger","Xamarin.Forms"),
    MultiTrigger: create("MultiTrigger","Xamarin.Forms"),
    Trigger: create("Trigger","Xamarin.Forms"),
    TriggerBase: create("TriggerBase","Xamarin.Forms"),
    ItemsView$Generic: create("ItemsView`1","Xamarin.Forms"),
    CarouselView: create("CarouselView","Xamarin.Forms"),
    CollectionView: create("CollectionView","Xamarin.Forms"),
    GridItemsLayout: create("GridItemsLayout","Xamarin.Forms"),
    GroupableItemsView: create("GroupableItemsView","Xamarin.Forms"),
    ItemsLayout: create("ItemsLayout","Xamarin.Forms"),
    ItemsView: create("ItemsView","Xamarin.Forms"),
    LinearItemsLayout: create("LinearItemsLayout","Xamarin.Forms"),
    SelectableItemsView: create("SelectableItemsView","Xamarin.Forms"),
    StructuredItemsView: create("StructuredItemsView","Xamarin.Forms"),
    IValueConverter: create("IValueConverter","Xamarin.Forms"),
    Label: create("Label","Xamarin.Forms"),
    Layout$Generic: create("Layout`1","Xamarin.Forms"),
    Layout: create("Layout","Xamarin.Forms"),
    LayoutOptions: create("LayoutOptions","Xamarin.Forms"),
    LinearGradientBrush: create("LinearGradientBrush","Xamarin.Forms"),
    ListView: create("ListView","Xamarin.Forms"),
    Menu: create("Menu","Xamarin.Forms"),
    MenuItem: create("MenuItem","Xamarin.Forms"),
    MultiPage$Generic: create("MultiPage`1","Xamarin.Forms"),
    NameScopeExtensions: create("NameScopeExtensions","Xamarin.Forms"),
    NavigationPage: create("NavigationPage","Xamarin.Forms"),
    NullEffect: create("NullEffect","Xamarin.Forms"),
    OpenGLView: create("OpenGLView","Xamarin.Forms"),
    OrientationStateTrigger: create("OrientationStateTrigger","Xamarin.Forms"),
    Page: create("Page","Xamarin.Forms"),
    PanGestureRecognizer: create("PanGestureRecognizer","Xamarin.Forms"),
    Picker: create("Picker","Xamarin.Forms"),
    PinchGestureRecognizer: create("PinchGestureRecognizer","Xamarin.Forms"),
    PlatformEffect$Generic: create("PlatformEffect`2","Xamarin.Forms"),
    Point: create("Point","Xamarin.Forms"),
    ProgressBar: create("ProgressBar","Xamarin.Forms"),
    RadialGradientBrush: create("RadialGradientBrush","Xamarin.Forms"),
    RadioButton: create("RadioButton","Xamarin.Forms"),
    RadioButtonGroup: create("RadioButtonGroup","Xamarin.Forms"),
    Rect: create("Rect","Xamarin.Forms"),
    RefreshView: create("RefreshView","Xamarin.Forms"),
    RelativeLayout: create("RelativeLayout","Xamarin.Forms"),
    Routing: create("Routing","Xamarin.Forms"),
    RoutingEffect: create("RoutingEffect","Xamarin.Forms"),
    RowDefinition: create("RowDefinition","Xamarin.Forms"),
    ScrollView: create("ScrollView","Xamarin.Forms"),
    SearchBar: create("SearchBar","Xamarin.Forms"),
    BackButtonBehavior: create("BackButtonBehavior","Xamarin.Forms"),
    BaseShellItem: create("BaseShellItem","Xamarin.Forms"),
    NavigableElement: create("NavigableElement","Xamarin.Forms"),
    SearchHandler: create("SearchHandler","Xamarin.Forms"),
    Shell: create("Shell","Xamarin.Forms"),
    ShellContent: create("ShellContent","Xamarin.Forms"),
    ShellGroupItem: create("ShellGroupItem","Xamarin.Forms"),
    FlyoutItem: create("FlyoutItem","Xamarin.Forms"),
    TabBar: create("TabBar","Xamarin.Forms"),
    ShellItem: create("ShellItem","Xamarin.Forms"),
    Tab: create("Tab","Xamarin.Forms"),
    ShellSection: create("ShellSection","Xamarin.Forms"),
    Size: create("Size","Xamarin.Forms"),
    Slider: create("Slider","Xamarin.Forms"),
    SolidColorBrush: create("SolidColorBrush","Xamarin.Forms"),
    Span: create("Span","Xamarin.Forms"),
    StackLayout: create("StackLayout","Xamarin.Forms"),
    StateTrigger: create("StateTrigger","Xamarin.Forms"),
    StateTriggerBase: create("StateTriggerBase","Xamarin.Forms"),
    Stepper: create("Stepper","Xamarin.Forms"),
    StreamImageSource: create("StreamImageSource","Xamarin.Forms"),
    Style: create("Style","Xamarin.Forms"),
    SwipeGestureRecognizer: create("SwipeGestureRecognizer","Xamarin.Forms"),
    SwipeItem: create("SwipeItem","Xamarin.Forms"),
    SwipeItems: create("SwipeItems","Xamarin.Forms"),
    SwipeItemView: create("SwipeItemView","Xamarin.Forms"),
    SwipeView: create("SwipeView","Xamarin.Forms"),
    Switch: create("Switch","Xamarin.Forms"),
    TabbedPage: create("TabbedPage","Xamarin.Forms"),
    TableRoot: create("TableRoot","Xamarin.Forms"),
    TableSectionBase$Generic: create("TableSectionBase`1","Xamarin.Forms"),
    TableSection: create("TableSection","Xamarin.Forms"),
    TableSectionBase: create("TableSectionBase","Xamarin.Forms"),
    TableView: create("TableView","Xamarin.Forms"),
    TapGestureRecognizer: create("TapGestureRecognizer","Xamarin.Forms"),
    TemplatedPage: create("TemplatedPage","Xamarin.Forms"),
    TemplatedView: create("TemplatedView","Xamarin.Forms"),
    TimePicker: create("TimePicker","Xamarin.Forms"),
    ToolbarItem: create("ToolbarItem","Xamarin.Forms"),
    UriImageSource: create("UriImageSource","Xamarin.Forms"),
    UrlWebViewSource: create("UrlWebViewSource","Xamarin.Forms"),
    View: create("View","Xamarin.Forms"),
    VisualElement: create("VisualElement","Xamarin.Forms"),
    VisualStateManager: create("VisualStateManager","Xamarin.Forms"),
    WebView: create("WebView","Xamarin.Forms"),
    WebViewSource: create("WebViewSource","Xamarin.Forms"),
    StyleSheet: create("StyleSheet","Xamarin.Forms.StyleSheets"),
    ArcSegment: create("ArcSegment","Xamarin.Forms.Shapes"),
    BezierSegment: create("BezierSegment","Xamarin.Forms.Shapes"),
    CompositeTransform: create("CompositeTransform","Xamarin.Forms.Shapes"),
    Ellipse: create("Ellipse","Xamarin.Forms.Shapes"),
    EllipseGeometry: create("EllipseGeometry","Xamarin.Forms.Shapes"),
    Geometry: create("Geometry","Xamarin.Forms.Shapes"),
    GeometryGroup: create("GeometryGroup","Xamarin.Forms.Shapes"),
    GeometryHelper: create("GeometryHelper","Xamarin.Forms.Shapes"),
    Line: create("Line","Xamarin.Forms.Shapes"),
    LineGeometry: create("LineGeometry","Xamarin.Forms.Shapes"),
    LineSegment: create("LineSegment","Xamarin.Forms.Shapes"),
    MatrixTransform: create("MatrixTransform","Xamarin.Forms.Shapes"),
    Path: create("Path","Xamarin.Forms.Shapes"),
    PathFigure: create("PathFigure","Xamarin.Forms.Shapes"),
    PathGeometry: create("PathGeometry","Xamarin.Forms.Shapes"),
    PathSegment: create("PathSegment","Xamarin.Forms.Shapes"),
    PolyBezierSegment: create("PolyBezierSegment","Xamarin.Forms.Shapes"),
    Polygon: create("Polygon","Xamarin.Forms.Shapes"),
    Polyline: create("Polyline","Xamarin.Forms.Shapes"),
    PolyLineSegment: create("PolyLineSegment","Xamarin.Forms.Shapes"),
    PolyQuadraticBezierSegment: create("PolyQuadraticBezierSegment","Xamarin.Forms.Shapes"),
    QuadraticBezierSegment: create("QuadraticBezierSegment","Xamarin.Forms.Shapes"),
    Rectangle: create("Rectangle","Xamarin.Forms.Shapes"),
    RectangleGeometry: create("RectangleGeometry","Xamarin.Forms.Shapes"),
    RotateTransform: create("RotateTransform","Xamarin.Forms.Shapes"),
    RoundRectangleGeometry: create("RoundRectangleGeometry","Xamarin.Forms.Shapes"),
    ScaleTransform: create("ScaleTransform","Xamarin.Forms.Shapes"),
    Shape: create("Shape","Xamarin.Forms.Shapes"),
    SkewTransform: create("SkewTransform","Xamarin.Forms.Shapes"),
    Transform: create("Transform","Xamarin.Forms.Shapes"),
    TransformGroup: create("TransformGroup","Xamarin.Forms.Shapes"),
    TranslateTransform: create("TranslateTransform","Xamarin.Forms.Shapes"),
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

