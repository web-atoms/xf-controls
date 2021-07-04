//tslint:disable
import XNode, { RootObject, NodeFactory, AttachedNode } from "@web-atoms/core/dist/core/XNode";
import Bind from "@web-atoms/core/dist/core/Bind";
import { ColorItem } from "@web-atoms/core/dist/core/Colors";

declare var bridge: any;
namespace XF {
    export declare class AbsoluteLayout extends Layout {
        public static autoSize: number | null | Bind;
        public static layoutBounds: AttachedNode;
        public static layoutFlags: AttachedNode;
        public children: RootObject /*Xamarin.Forms.AbsoluteLayout+IAbsoluteList`1[[Xamarin.Forms.View, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null]]*/;
    }
    export declare class ActivityIndicator extends View {
        public static isRunning: AttachedNode;
        public static color: AttachedNode;
        public color: Color;
        public isRunning: boolean | null | Bind;
    }
    export declare class AdaptiveTrigger extends StateTriggerBase {
        public static minWindowHeight: AttachedNode;
        public static minWindowWidth: AttachedNode;
        public minWindowHeight: number | null | Bind;
        public minWindowWidth: number | null | Bind;
    }
    export declare class Application extends Element {
        public static logWarningsToApplicationOutput: boolean | null | Bind;
        public static current: Application;
        public dispatcher: RootObject /*Xamarin.Forms.IDispatcher*/;
        public appLinks: RootObject /*Xamarin.Forms.IAppLinks*/;
        public mainPage: Page;
        public properties: RootObject /*System.Collections.Generic.IDictionary`2[[System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e],[System.Object, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]]*/;
        public navigationProxy: RootObject /*Xamarin.Forms.Internals.NavigationProxy*/;
        public panGestureId: number | null | Bind;
        public static resources: AttachedNode;
        public userAppTheme: "Unspecified" | "Light" | "Dark" | string | number | null | undefined | Bind;
        public requestedTheme: "Unspecified" | "Light" | "Dark" | string | number | null | undefined | Bind;
    }
    export declare class AppLinkEntry extends Element {
        public static title: AttachedNode;
        public static description: AttachedNode;
        public static thumbnail: AttachedNode;
        public static appLinkUri: AttachedNode;
        public static isLinkActive: AttachedNode;
        public appLinkUri: RootObject /*System.Uri*/;
        public description: string | null | Bind;
        public isLinkActive: boolean | null | Bind;
        public keyValues: RootObject /*System.Collections.Generic.IDictionary`2[[System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e],[System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]]*/;
        public thumbnail: ImageSource;
        public title: string | null | Bind;
    }
    export declare class AutomationProperties extends RootObject {
        public static helpText: AttachedNode;
        public static isInAccessibleTree: AttachedNode;
        public static labeledBy: AttachedNode;
        public static name: AttachedNode;
    }
    export declare class BaseMenuItem extends Element {
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
        public dispatcher: RootObject /*Xamarin.Forms.IDispatcher*/;
        public bindingContext: RootObject /*System.Object*/;
    }
    export declare class BoxView extends View {
        public static color: AttachedNode;
        public static cornerRadius: AttachedNode;
        public color: Color;
        public cornerRadius: RootObject /*System.ValueType*/;
    }
    export declare class Brush extends Element {
        public static default: Brush;
        public static aliceBlue: SolidColorBrush;
        public static antiqueWhite: SolidColorBrush;
        public static aqua: SolidColorBrush;
        public static aquamarine: SolidColorBrush;
        public static azure: SolidColorBrush;
        public static beige: SolidColorBrush;
        public static bisque: SolidColorBrush;
        public static black: SolidColorBrush;
        public static blanchedAlmond: SolidColorBrush;
        public static blue: SolidColorBrush;
        public static blueViolet: SolidColorBrush;
        public static brown: SolidColorBrush;
        public static burlyWood: SolidColorBrush;
        public static cadetBlue: SolidColorBrush;
        public static chartreuse: SolidColorBrush;
        public static chocolate: SolidColorBrush;
        public static coral: SolidColorBrush;
        public static cornflowerBlue: SolidColorBrush;
        public static cornsilk: SolidColorBrush;
        public static crimson: SolidColorBrush;
        public static cyan: SolidColorBrush;
        public static darkBlue: SolidColorBrush;
        public static darkCyan: SolidColorBrush;
        public static darkGoldenrod: SolidColorBrush;
        public static darkGray: SolidColorBrush;
        public static darkGreen: SolidColorBrush;
        public static darkKhaki: SolidColorBrush;
        public static darkMagenta: SolidColorBrush;
        public static darkOliveGreen: SolidColorBrush;
        public static darkOrange: SolidColorBrush;
        public static darkOrchid: SolidColorBrush;
        public static darkRed: SolidColorBrush;
        public static darkSalmon: SolidColorBrush;
        public static darkSeaGreen: SolidColorBrush;
        public static darkSlateBlue: SolidColorBrush;
        public static darkSlateGray: SolidColorBrush;
        public static darkTurquoise: SolidColorBrush;
        public static darkViolet: SolidColorBrush;
        public static deepPink: SolidColorBrush;
        public static deepSkyBlue: SolidColorBrush;
        public static dimGray: SolidColorBrush;
        public static dodgerBlue: SolidColorBrush;
        public static firebrick: SolidColorBrush;
        public static floralWhite: SolidColorBrush;
        public static forestGreen: SolidColorBrush;
        public static fuchsia: SolidColorBrush;
        public static gainsboro: SolidColorBrush;
        public static ghostWhite: SolidColorBrush;
        public static gold: SolidColorBrush;
        public static goldenrod: SolidColorBrush;
        public static gray: SolidColorBrush;
        public static green: SolidColorBrush;
        public static greenYellow: SolidColorBrush;
        public static honeydew: SolidColorBrush;
        public static hotPink: SolidColorBrush;
        public static indianRed: SolidColorBrush;
        public static indigo: SolidColorBrush;
        public static ivory: SolidColorBrush;
        public static khaki: SolidColorBrush;
        public static lavender: SolidColorBrush;
        public static lavenderBlush: SolidColorBrush;
        public static lawnGreen: SolidColorBrush;
        public static lemonChiffon: SolidColorBrush;
        public static lightBlue: SolidColorBrush;
        public static lightCoral: SolidColorBrush;
        public static lightCyan: SolidColorBrush;
        public static lightGoldenrodYellow: SolidColorBrush;
        public static lightGray: SolidColorBrush;
        public static lightGreen: SolidColorBrush;
        public static lightPink: SolidColorBrush;
        public static lightSalmon: SolidColorBrush;
        public static lightSeaGreen: SolidColorBrush;
        public static lightSkyBlue: SolidColorBrush;
        public static lightSlateGray: SolidColorBrush;
        public static lightSteelBlue: SolidColorBrush;
        public static lightYellow: SolidColorBrush;
        public static lime: SolidColorBrush;
        public static limeGreen: SolidColorBrush;
        public static linen: SolidColorBrush;
        public static magenta: SolidColorBrush;
        public static maroon: SolidColorBrush;
        public static mediumAquamarine: SolidColorBrush;
        public static mediumBlue: SolidColorBrush;
        public static mediumOrchid: SolidColorBrush;
        public static mediumPurple: SolidColorBrush;
        public static mediumSeaGreen: SolidColorBrush;
        public static mediumSlateBlue: SolidColorBrush;
        public static mediumSpringGreen: SolidColorBrush;
        public static mediumTurquoise: SolidColorBrush;
        public static mediumVioletRed: SolidColorBrush;
        public static midnightBlue: SolidColorBrush;
        public static mintCream: SolidColorBrush;
        public static mistyRose: SolidColorBrush;
        public static moccasin: SolidColorBrush;
        public static navajoWhite: SolidColorBrush;
        public static navy: SolidColorBrush;
        public static oldLace: SolidColorBrush;
        public static olive: SolidColorBrush;
        public static oliveDrab: SolidColorBrush;
        public static orange: SolidColorBrush;
        public static orangeRed: SolidColorBrush;
        public static orchid: SolidColorBrush;
        public static paleGoldenrod: SolidColorBrush;
        public static paleGreen: SolidColorBrush;
        public static paleTurquoise: SolidColorBrush;
        public static paleVioletRed: SolidColorBrush;
        public static papayaWhip: SolidColorBrush;
        public static peachPuff: SolidColorBrush;
        public static peru: SolidColorBrush;
        public static pink: SolidColorBrush;
        public static plum: SolidColorBrush;
        public static powderBlue: SolidColorBrush;
        public static purple: SolidColorBrush;
        public static red: SolidColorBrush;
        public static rosyBrown: SolidColorBrush;
        public static royalBlue: SolidColorBrush;
        public static saddleBrown: SolidColorBrush;
        public static salmon: SolidColorBrush;
        public static sandyBrown: SolidColorBrush;
        public static seaGreen: SolidColorBrush;
        public static seaShell: SolidColorBrush;
        public static sienna: SolidColorBrush;
        public static silver: SolidColorBrush;
        public static skyBlue: SolidColorBrush;
        public static slateBlue: SolidColorBrush;
        public static slateGray: SolidColorBrush;
        public static snow: SolidColorBrush;
        public static springGreen: SolidColorBrush;
        public static steelBlue: SolidColorBrush;
        public static tan: SolidColorBrush;
        public static teal: SolidColorBrush;
        public static thistle: SolidColorBrush;
        public static tomato: SolidColorBrush;
        public static transparent: SolidColorBrush;
        public static turquoise: SolidColorBrush;
        public static violet: SolidColorBrush;
        public static wheat: SolidColorBrush;
        public static white: SolidColorBrush;
        public static whiteSmoke: SolidColorBrush;
        public static yellow: SolidColorBrush;
        public static yellowGreen: SolidColorBrush;
        public isEmpty: boolean | null | Bind;
    }
    export declare class Button extends View {
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
        public padding: RootObject /*System.ValueType*/;
        public borderColor: Color;
        public borderRadius: number | null | Bind;
        public cornerRadius: number | null | Bind;
        public borderWidth: number | null | Bind;
        public contentLayout: RootObject /*Xamarin.Forms.Button+ButtonContentLayout*/;
        public command: RootObject /*System.Windows.Input.ICommand*/;
        public commandParameter: RootObject /*System.Object*/;
        public font: RootObject /*System.ValueType*/;
        public imageSource: ImageSource;
        public image: FileImageSource;
        public text: string | null | Bind;
        public textColor: Color;
        public characterSpacing: number | null | Bind;
        public isPressed: boolean | null | Bind;
        public fontAttributes: "None" | "Bold" | "Italic" | string | number | null | undefined | Bind;
        public fontFamily: string | null | Bind;
        public fontSize: number | null | Bind;
        public textTransform: "None" | "Default" | "Lowercase" | "Uppercase" | string | number | null | undefined | Bind;
    }
    export declare class CarouselPage extends Page {
    }
    export declare class Cell extends Element {
        public static isEnabled: AttachedNode;
        public static defaultCellHeight: number | null | Bind;
        public static contextActions: AttachedNode;
        public hasContextActions: boolean | null | Bind;
        public isContextActionsLegacyModeEnabled: boolean | null | Bind;
        public height: number | null | Bind;
        public isEnabled: boolean | null | Bind;
        public renderHeight: number | null | Bind;
    }
    export declare class EntryCell extends Cell {
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
        public keyboard: RootObject /*Xamarin.Forms.Keyboard*/;
        public label: string | null | Bind;
        public labelColor: Color;
        public placeholder: string | null | Bind;
        public text: string | null | Bind;
        public xAlign: "Start" | "Center" | "End" | string | number | null | undefined | Bind;
    }
    export declare class ImageCell extends TextCell {
        public static imageSource: AttachedNode;
        public imageSource: ImageSource;
    }
    export declare class SwitchCell extends Cell {
        public static on: AttachedNode;
        public static text: AttachedNode;
        public static onColor: AttachedNode;
        public onColor: Color;
        public on: boolean | null | Bind;
        public text: string | null | Bind;
    }
    export declare class TextCell extends Cell {
        public static command: AttachedNode;
        public static commandParameter: AttachedNode;
        public static text: AttachedNode;
        public static detail: AttachedNode;
        public static textColor: AttachedNode;
        public static detailColor: AttachedNode;
        public command: RootObject /*System.Windows.Input.ICommand*/;
        public commandParameter: RootObject /*System.Object*/;
        public detail: string | null | Bind;
        public detailColor: Color;
        public text: string | null | Bind;
        public textColor: Color;
    }
    export declare class ViewCell extends Cell {
        public view: View;
    }
    export declare class CheckBox extends View {
        public static isChecked: AttachedNode;
        public static color: AttachedNode;
        public static isCheckedVisualState: string | null | Bind;
        public color: Color;
        public isChecked: boolean | null | Bind;
    }
    export declare class ClickGestureRecognizer extends GestureRecognizer {
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
        public static default: Color;
        public static accent: Color;
        public static aliceBlue: Color;
        public static antiqueWhite: Color;
        public static aqua: Color;
        public static aquamarine: Color;
        public static azure: Color;
        public static beige: Color;
        public static bisque: Color;
        public static black: Color;
        public static blanchedAlmond: Color;
        public static blue: Color;
        public static blueViolet: Color;
        public static brown: Color;
        public static burlyWood: Color;
        public static cadetBlue: Color;
        public static chartreuse: Color;
        public static chocolate: Color;
        public static coral: Color;
        public static cornflowerBlue: Color;
        public static cornsilk: Color;
        public static crimson: Color;
        public static cyan: Color;
        public static darkBlue: Color;
        public static darkCyan: Color;
        public static darkGoldenrod: Color;
        public static darkGray: Color;
        public static darkGreen: Color;
        public static darkKhaki: Color;
        public static darkMagenta: Color;
        public static darkOliveGreen: Color;
        public static darkOrange: Color;
        public static darkOrchid: Color;
        public static darkRed: Color;
        public static darkSalmon: Color;
        public static darkSeaGreen: Color;
        public static darkSlateBlue: Color;
        public static darkSlateGray: Color;
        public static darkTurquoise: Color;
        public static darkViolet: Color;
        public static deepPink: Color;
        public static deepSkyBlue: Color;
        public static dimGray: Color;
        public static dodgerBlue: Color;
        public static firebrick: Color;
        public static floralWhite: Color;
        public static forestGreen: Color;
        public static fuchsia: Color;
        public static fuschia: Color;
        public static gainsboro: Color;
        public static ghostWhite: Color;
        public static gold: Color;
        public static goldenrod: Color;
        public static gray: Color;
        public static green: Color;
        public static greenYellow: Color;
        public static honeydew: Color;
        public static hotPink: Color;
        public static indianRed: Color;
        public static indigo: Color;
        public static ivory: Color;
        public static khaki: Color;
        public static lavender: Color;
        public static lavenderBlush: Color;
        public static lawnGreen: Color;
        public static lemonChiffon: Color;
        public static lightBlue: Color;
        public static lightCoral: Color;
        public static lightCyan: Color;
        public static lightGoldenrodYellow: Color;
        public static lightGray: Color;
        public static lightGreen: Color;
        public static lightPink: Color;
        public static lightSalmon: Color;
        public static lightSeaGreen: Color;
        public static lightSkyBlue: Color;
        public static lightSlateGray: Color;
        public static lightSteelBlue: Color;
        public static lightYellow: Color;
        public static lime: Color;
        public static limeGreen: Color;
        public static linen: Color;
        public static magenta: Color;
        public static maroon: Color;
        public static mediumAquamarine: Color;
        public static mediumBlue: Color;
        public static mediumOrchid: Color;
        public static mediumPurple: Color;
        public static mediumSeaGreen: Color;
        public static mediumSlateBlue: Color;
        public static mediumSpringGreen: Color;
        public static mediumTurquoise: Color;
        public static mediumVioletRed: Color;
        public static midnightBlue: Color;
        public static mintCream: Color;
        public static mistyRose: Color;
        public static moccasin: Color;
        public static navajoWhite: Color;
        public static navy: Color;
        public static oldLace: Color;
        public static olive: Color;
        public static oliveDrab: Color;
        public static orange: Color;
        public static orangeRed: Color;
        public static orchid: Color;
        public static paleGoldenrod: Color;
        public static paleGreen: Color;
        public static paleTurquoise: Color;
        public static paleVioletRed: Color;
        public static papayaWhip: Color;
        public static peachPuff: Color;
        public static peru: Color;
        public static pink: Color;
        public static plum: Color;
        public static powderBlue: Color;
        public static purple: Color;
        public static red: Color;
        public static rosyBrown: Color;
        public static royalBlue: Color;
        public static saddleBrown: Color;
        public static salmon: Color;
        public static sandyBrown: Color;
        public static seaGreen: Color;
        public static seaShell: Color;
        public static sienna: Color;
        public static silver: Color;
        public static skyBlue: Color;
        public static slateBlue: Color;
        public static slateGray: Color;
        public static snow: Color;
        public static springGreen: Color;
        public static steelBlue: Color;
        public static tan: Color;
        public static teal: Color;
        public static thistle: Color;
        public static tomato: Color;
        public static transparent: Color;
        public static turquoise: Color;
        public static violet: Color;
        public static wheat: Color;
        public static white: Color;
        public static whiteSmoke: Color;
        public static yellow: Color;
        public static yellowGreen: Color;
        public isDefault: boolean | null | Bind;
        public a: number | null | Bind;
        public r: number | null | Bind;
        public g: number | null | Bind;
        public b: number | null | Bind;
        public hue: number | null | Bind;
        public saturation: number | null | Bind;
        public luminosity: number | null | Bind;
    }
    export declare class ColumnDefinition extends BindableObject {
        public static width: AttachedNode;
        public width: RootObject /*System.ValueType*/;
    }
    export declare class CompareStateTrigger extends StateTriggerBase {
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
    export declare class ContentPage extends TemplatedPage {
        public static content: AttachedNode;
        public content: View;
    }
    export declare class ContentPresenter extends Layout {
        public static content: AttachedNode;
        public content: View;
    }
    export declare class ContentView extends TemplatedView {
        public static content: AttachedNode;
        public content: View;
    }
    export declare class ControlTemplate extends ElementTemplate {
    }
    export declare class DataTemplate extends ElementTemplate {
        public bindings: RootObject /*System.Collections.Generic.IDictionary`2[[Xamarin.Forms.BindableProperty, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null],[Xamarin.Forms.BindingBase, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null]]*/;
        public values: RootObject /*System.Collections.Generic.IDictionary`2[[Xamarin.Forms.BindableProperty, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null],[System.Object, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]]*/;
    }
    export declare class DataTemplateSelector extends DataTemplate {
    }
    export declare class DatePicker extends View {
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
        public textColor: Color;
        public characterSpacing: number | null | Bind;
        public fontAttributes: "None" | "Bold" | "Italic" | string | number | null | undefined | Bind;
        public fontFamily: string | null | Bind;
        public fontSize: number | null | Bind;
    }
    export declare class DeviceStateTrigger extends StateTriggerBase {
        public static device: AttachedNode;
        public device: string | null | Bind;
    }
    export declare class DragGestureRecognizer extends GestureRecognizer {
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
    export declare class DropGestureRecognizer extends GestureRecognizer {
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
        public static linear: Easing;
        public static sinOut: Easing;
        public static sinIn: Easing;
        public static sinInOut: Easing;
        public static cubicIn: Easing;
        public static cubicOut: Easing;
        public static cubicInOut: Easing;
        public static bounceOut: Easing;
        public static bounceIn: Easing;
        public static springIn: Easing;
        public static springOut: Easing;
    }
    export declare class Editor extends InputView {
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
        public element: Element;
        public isAttached: boolean | null | Bind;
        public resolveId: string | null | Bind;
    }
    export declare class Element extends BindableObject {
        public static menu: AttachedNode;
        public static automationId: AttachedNode;
        public static classId: AttachedNode;
        public automationId: string | null | Bind;
        public classId: string | null | Bind;
        public static effects: AttachedNode;
        public id: RootObject /*System.Guid*/;
        public parentView: VisualElement;
        public styleId: string | null | Bind;
        public static logicalChildren: AttachedNode;
        public realParent: Element;
        public parent: Element;
        public effectControlProvider: RootObject /*Xamarin.Forms.IEffectControlProvider*/;
        public platform: RootObject /*Xamarin.Forms.Internals.IPlatform*/;
    }
    export declare class ElementTemplate extends RootObject {
    }
    export declare class Entry extends InputView {
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
    export declare class FileImageSource extends ImageSource {
        public static file: AttachedNode;
        public isEmpty: boolean | null | Bind;
        public file: string | null | Bind;
    }
    export declare class FlexLayout extends Layout {
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
    export declare class FlyoutPage extends Page {
        public static isGestureEnabled: AttachedNode;
        public static isPresented: AttachedNode;
        public static flyoutLayoutBehavior: AttachedNode;
        public detail: Page;
        public isGestureEnabled: boolean | null | Bind;
        public isPresented: boolean | null | Bind;
        public flyout: Page;
        public flyoutLayoutBehavior: "Default" | "SplitOnLandscape" | "Split" | "Popover" | "SplitOnPortrait" | string | number | null | undefined | Bind;
        public canChangeIsPresented: boolean | null | Bind;
        public detailBounds: RootObject /*System.ValueType*/;
        public flyoutBounds: RootObject /*System.ValueType*/;
        public shouldShowSplitMode: boolean | null | Bind;
    }
    export declare class MasterDetailPage extends FlyoutPage {
        public static masterBehavior: AttachedNode;
        public master: Page;
        public masterBounds: RootObject /*System.ValueType*/;
        public masterBehavior: "Default" | "SplitOnLandscape" | "Split" | "Popover" | "SplitOnPortrait" | string | number | null | undefined | Bind;
    }
    export declare class FontImageSource extends ImageSource {
        public static color: AttachedNode;
        public static fontFamily: AttachedNode;
        public static glyph: AttachedNode;
        public static size: AttachedNode;
        public isEmpty: boolean | null | Bind;
        public color: Color;
        public fontFamily: string | null | Bind;
        public glyph: string | null | Bind;
        public size: number | null | Bind;
    }
    export declare class FormattedString extends Element {
        public static spans: AttachedNode;
    }
    export declare class Frame extends ContentView {
        public static outlineColor: AttachedNode;
        public static borderColor: AttachedNode;
        public static hasShadow: AttachedNode;
        public static cornerRadius: AttachedNode;
        public hasShadow: boolean | null | Bind;
        public outlineColor: Color;
        public borderColor: Color;
        public cornerRadius: number | null | Bind;
    }
    export declare class GestureElement extends Element {
        public static gestureRecognizers: AttachedNode;
    }
    export declare class GestureRecognizer extends Element {
    }
    export declare class GradientBrush extends Brush {
        public static gradientStops: AttachedNode;
    }
    export declare class GradientStop extends Element {
        public static color: AttachedNode;
        public static offset: AttachedNode;
        public color: Color;
        public offset: number | null | Bind;
    }
    export declare class Grid extends Layout {
        public static column: AttachedNode;
        public static columnSpan: AttachedNode;
        public static row: AttachedNode;
        public static rowSpan: AttachedNode;
        public static rowSpacing: AttachedNode;
        public static columnSpacing: AttachedNode;
        public static columnDefinitions: AttachedNode;
        public static rowDefinitions: AttachedNode;
        public children: RootObject /*Xamarin.Forms.Grid+IGridList`1[[Xamarin.Forms.View, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null]]*/;
        public columnSpacing: number | null | Bind;
        public rowSpacing: number | null | Bind;
    }
    export declare class HtmlWebViewSource extends WebViewSource {
        public static html: AttachedNode;
        public static baseUrl: AttachedNode;
        public baseUrl: string | null | Bind;
        public html: string | null | Bind;
    }
    export declare class Image extends View {
        public static source: AttachedNode;
        public static aspect: AttachedNode;
        public static isOpaque: AttachedNode;
        public static isLoading: AttachedNode;
        public static isAnimationPlaying: AttachedNode;
        public aspect: "AspectFit" | "AspectFill" | "Fill" | string | number | null | undefined | Bind;
        public isLoading: boolean | null | Bind;
        public isOpaque: boolean | null | Bind;
        public isAnimationPlaying: boolean | null | Bind;
        public source: ImageSource;
    }
    export declare class ImageButton extends View {
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
        public borderColor: Color;
        public cornerRadius: number | null | Bind;
        public borderWidth: number | null | Bind;
        public aspect: "AspectFit" | "AspectFill" | "Fill" | string | number | null | undefined | Bind;
        public isLoading: boolean | null | Bind;
        public isPressed: boolean | null | Bind;
        public isOpaque: boolean | null | Bind;
        public command: RootObject /*System.Windows.Input.ICommand*/;
        public commandParameter: RootObject /*System.Object*/;
        public source: ImageSource;
        public padding: RootObject /*System.ValueType*/;
    }
    export declare class ImageSource extends Element {
        public isEmpty: boolean | null | Bind;
    }
    export declare class IndicatorView extends TemplatedView {
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
        public indicatorLayout: Layout;
        public position: number | null | Bind;
        public count: number | null | Bind;
        public maximumVisible: number | null | Bind;
        public indicatorTemplate: DataTemplate;
        public hideSingle: boolean | null | Bind;
        public indicatorColor: Color;
        public selectedIndicatorColor: Color;
        public indicatorSize: number | null | Bind;
        public itemsSource: RootObject /*System.Collections.IEnumerable*/;
    }
    export declare class InputView extends View {
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
        public keyboard: RootObject /*Xamarin.Forms.Keyboard*/;
        public isSpellCheckEnabled: boolean | null | Bind;
        public isReadOnly: boolean | null | Bind;
        public placeholder: string | null | Bind;
        public placeholderColor: Color;
        public textColor: Color;
        public characterSpacing: number | null | Bind;
        public textTransform: "None" | "Default" | "Lowercase" | "Uppercase" | string | number | null | undefined | Bind;
    }
    export declare class Behavior extends BindableObject {
    }
    export declare class Behavior$Generic extends Behavior {
    }
    export declare class DataTrigger extends TriggerBase {
        public binding: RootObject /*Xamarin.Forms.BindingBase*/;
        public static setters: AttachedNode;
        public value: RootObject /*System.Object*/;
    }
    export declare class EventTrigger extends TriggerBase {
        public static actions: AttachedNode;
        public event: string | null | Bind;
    }
    export declare class MultiTrigger extends TriggerBase {
        public static conditions: AttachedNode;
        public static setters: AttachedNode;
    }
    export declare class Trigger extends TriggerBase {
        public property: RootObject /*Xamarin.Forms.BindableProperty*/;
        public static setters: AttachedNode;
        public value: RootObject /*System.Object*/;
    }
    export declare class TriggerBase extends BindableObject {
        public static enterActions: AttachedNode;
        public static exitActions: AttachedNode;
        public isSealed: boolean | null | Bind;
        public targetType: RootObject /*System.Type*/;
    }
    export declare class ItemsView$Generic extends View {
        public static itemsSource: AttachedNode;
        public static itemTemplate: AttachedNode;
        public itemsSource: RootObject /*System.Collections.IEnumerable*/;
        public itemTemplate: DataTemplate;
        public static templatedItems: AttachedNode;
    }
    export declare class CarouselView extends ItemsView {
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
        public peekAreaInsets: RootObject /*System.ValueType*/;
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
        public itemsLayout: LinearItemsLayout;
        public indicatorView: IndicatorView;
        public isScrolling: boolean | null | Bind;
        public animatePositionChanges: boolean | null | Bind;
        public animateCurrentItemChanges: boolean | null | Bind;
    }
    export declare class CollectionView extends GroupableItemsView {
    }
    export declare class GridItemsLayout extends ItemsLayout {
        public static span: AttachedNode;
        public static verticalItemSpacing: AttachedNode;
        public static horizontalItemSpacing: AttachedNode;
        public span: number | null | Bind;
        public verticalItemSpacing: number | null | Bind;
        public horizontalItemSpacing: number | null | Bind;
    }
    export declare class GroupableItemsView extends SelectableItemsView {
        public static isGrouped: AttachedNode;
        public static groupHeaderTemplate: AttachedNode;
        public static groupFooterTemplate: AttachedNode;
        public isGrouped: boolean | null | Bind;
        public groupHeaderTemplate: DataTemplate;
        public groupFooterTemplate: DataTemplate;
    }
    export declare class ItemsLayout extends BindableObject {
        public static snapPointsAlignment: AttachedNode;
        public static snapPointsType: AttachedNode;
        public orientation: "Vertical" | "Horizontal" | string | number | null | undefined | Bind;
        public snapPointsAlignment: "Start" | "Center" | "End" | string | number | null | undefined | Bind;
        public snapPointsType: "None" | "Mandatory" | "MandatorySingle" | string | number | null | undefined | Bind;
    }
    export declare class ItemsView extends View {
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
        public emptyViewTemplate: DataTemplate;
        public itemsSource: RootObject /*System.Collections.IEnumerable*/;
        public remainingItemsThresholdReachedCommand: RootObject /*System.Windows.Input.ICommand*/;
        public remainingItemsThresholdReachedCommandParameter: RootObject /*System.Object*/;
        public horizontalScrollBarVisibility: "Default" | "Always" | "Never" | string | number | null | undefined | Bind;
        public verticalScrollBarVisibility: "Default" | "Always" | "Never" | string | number | null | undefined | Bind;
        public remainingItemsThreshold: number | null | Bind;
        public itemTemplate: DataTemplate;
        public itemsUpdatingScrollMode: "KeepItemsInView" | "KeepScrollOffset" | "KeepLastItemInView" | string | number | null | undefined | Bind;
    }
    export declare class LinearItemsLayout extends ItemsLayout {
        public static vertical: RootObject /*Xamarin.Forms.IItemsLayout*/;
        public static horizontal: RootObject /*Xamarin.Forms.IItemsLayout*/;
        public static carouselVertical: RootObject /*Xamarin.Forms.IItemsLayout*/;
        public static itemSpacing: AttachedNode;
        public itemSpacing: number | null | Bind;
    }
    export declare class SelectableItemsView extends StructuredItemsView {
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
    export declare class StructuredItemsView extends ItemsView {
        public static header: AttachedNode;
        public static headerTemplate: AttachedNode;
        public static footer: AttachedNode;
        public static footerTemplate: AttachedNode;
        public static itemsLayout: AttachedNode;
        public static itemSizingStrategy: AttachedNode;
        public header: RootObject /*System.Object*/;
        public headerTemplate: DataTemplate;
        public footer: RootObject /*System.Object*/;
        public footerTemplate: DataTemplate;
        public itemsLayout: RootObject /*Xamarin.Forms.IItemsLayout*/;
        public itemSizingStrategy: "MeasureAllItems" | "MeasureFirstItem" | string | number | null | undefined | Bind;
    }
    export declare class IValueConverter extends RootObject {
    }
    export declare class Label extends View {
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
        public font: RootObject /*System.ValueType*/;
        public formattedText: FormattedString;
        public horizontalTextAlignment: "Start" | "Center" | "End" | string | number | null | undefined | Bind;
        public lineBreakMode: "NoWrap" | "WordWrap" | "CharacterWrap" | "HeadTruncation" | "TailTruncation" | "MiddleTruncation" | string | number | null | undefined | Bind;
        public text: string | null | Bind;
        public textColor: Color;
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
        public padding: RootObject /*System.ValueType*/;
        public textType: "Text" | "Html" | string | number | null | undefined | Bind;
    }
    export declare class Layout$Generic extends Layout {
        public static children: AttachedNode;
    }
    export declare class Layout extends View {
        public static outChildIntoBoundingRegion: AttachedNode;
        public static isClippedToBounds: AttachedNode;
        public static cascadeInputTransparent: AttachedNode;
        public static padding: AttachedNode;
        public isClippedToBounds: boolean | null | Bind;
        public padding: RootObject /*System.ValueType*/;
        public cascadeInputTransparent: boolean | null | Bind;
        public children: RootObject /*System.Collections.Generic.IReadOnlyList`1[[Xamarin.Forms.Element, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null]]*/;
    }
    export declare class LinearGradientBrush extends GradientBrush {
        public static startPoint: AttachedNode;
        public static endPoint: AttachedNode;
        public isEmpty: boolean | null | Bind;
        public startPoint: RootObject /*System.ValueType*/;
        public endPoint: RootObject /*System.ValueType*/;
    }
    export declare class ListView extends View {
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
        public footerTemplate: DataTemplate;
        public groupDisplayBinding: RootObject /*Xamarin.Forms.BindingBase*/;
        public groupHeaderTemplate: DataTemplate;
        public groupShortNameBinding: RootObject /*Xamarin.Forms.BindingBase*/;
        public hasUnevenRows: boolean | null | Bind;
        public header: RootObject /*System.Object*/;
        public headerTemplate: DataTemplate;
        public isGroupingEnabled: boolean | null | Bind;
        public isPullToRefreshEnabled: boolean | null | Bind;
        public isRefreshing: boolean | null | Bind;
        public refreshCommand: RootObject /*System.Windows.Input.ICommand*/;
        public rowHeight: number | null | Bind;
        public selectedItem: RootObject /*System.Object*/;
        public selectionMode: "None" | "Single" | string | number | null | undefined | Bind;
        public separatorColor: Color;
        public refreshControlColor: Color;
        public separatorVisibility: "Default" | "None" | string | number | null | undefined | Bind;
        public horizontalScrollBarVisibility: "Default" | "Always" | "Never" | string | number | null | undefined | Bind;
        public verticalScrollBarVisibility: "Default" | "Always" | "Never" | string | number | null | undefined | Bind;
        public cachingStrategy: "RetainElement" | "RecycleElement" | "RecycleElementAndDataTemplate" | string | number | null | undefined | Bind;
        public refreshAllowed: boolean | null | Bind;
        public footerElement: Element;
        public headerElement: Element;
    }
    export declare class Menu extends BaseMenuItem {
        public static item: AttachedNode;
        public text: string | null | Bind;
        public static items: AttachedNode;
        public count: number | null | Bind;
        public isReadOnly: boolean | null | Bind;
    }
    export declare class MenuItem extends BaseMenuItem {
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
        public icon: FileImageSource;
        public iconImageSource: ImageSource;
        public isDestructive: boolean | null | Bind;
        public text: string | null | Bind;
        public isEnabled: boolean | null | Bind;
        public static styleClass: AttachedNode;
        public static class: AttachedNode;
        public isEnabledPropertyName: string | null | Bind;
    }
    export declare class MultiPage$Generic extends Page {
        public static index: AttachedNode;
        public static itemsSource: AttachedNode;
        public static itemTemplate: AttachedNode;
        public static selectedItem: AttachedNode;
        public itemsSource: RootObject /*System.Collections.IEnumerable*/;
        public itemTemplate: DataTemplate;
        public selectedItem: RootObject /*System.Object*/;
        public currentPage: Page;
        public static children: AttachedNode;
    }
    export declare class NameScopeExtensions extends RootObject {
        public static dByName: AttachedNode;
    }
    export declare class NavigationPage extends Page {
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
        public barBackgroundColor: Color;
        public barBackground: Brush;
        public barTextColor: Color;
        public tint: Color;
        public pages: RootObject /*System.Collections.Generic.IEnumerable`1[[Xamarin.Forms.Page, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null]]*/;
        public stackDepth: number | null | Bind;
        public currentPage: Page;
        public rootPage: Page;
    }
    export declare class NullEffect extends Effect {
    }
    export declare class OpenGLView extends View {
        public static hasRenderLoop: AttachedNode;
        public hasRenderLoop: boolean | null | Bind;
        public onDisplay: RootObject /*System.Action`1[[Xamarin.Forms.Rectangle, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null]]*/;
    }
    export declare class OrientationStateTrigger extends StateTriggerBase {
        public static orientation: AttachedNode;
        public orientation: "Portrait" | "Landscape" | "PortraitUp" | "PortraitDown" | "LandscapeLeft" | "LandscapeRight" | "Other" | string | number | null | undefined | Bind;
    }
    export declare class Page extends VisualElement {
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
        public backgroundImageSource: ImageSource;
        public icon: FileImageSource;
        public iconImageSource: ImageSource;
        public isBusy: boolean | null | Bind;
        public padding: RootObject /*System.ValueType*/;
        public title: string | null | Bind;
        public static toolbarItems: AttachedNode;
        public containerArea: RootObject /*System.ValueType*/;
        public ignoresContainerArea: boolean | null | Bind;
        public static internalChildren: AttachedNode;
    }
    export declare class PanGestureRecognizer extends GestureRecognizer {
        public static touchPoints: AttachedNode;
        public touchPoints: number | null | Bind;
    }
    export declare class Picker extends View {
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
        public textColor: Color;
        public characterSpacing: number | null | Bind;
        public title: string | null | Bind;
        public titleColor: Color;
        public horizontalTextAlignment: "Start" | "Center" | "End" | string | number | null | undefined | Bind;
        public verticalTextAlignment: "Start" | "Center" | "End" | string | number | null | undefined | Bind;
        public itemDisplayBinding: RootObject /*Xamarin.Forms.BindingBase*/;
    }
    export declare class PinchGestureRecognizer extends GestureRecognizer {
        public isPinching: boolean | null | Bind;
    }
    export declare class PlatformEffect$Generic extends Effect {
        public container: RootObject /**/;
        public control: RootObject /**/;
    }
    export declare class ProgressBar extends View {
        public static progressColor: AttachedNode;
        public static progress: AttachedNode;
        public progressColor: Color;
        public progress: number | null | Bind;
    }
    export declare class RadialGradientBrush extends GradientBrush {
        public static center: AttachedNode;
        public static radius: AttachedNode;
        public isEmpty: boolean | null | Bind;
        public center: RootObject /*System.ValueType*/;
        public radius: number | null | Bind;
    }
    export declare class RadioButton extends TemplatedView {
        public static defaultTemplate: ControlTemplate;
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
        public textColor: Color;
        public characterSpacing: number | null | Bind;
        public textTransform: "None" | "Default" | "Lowercase" | "Uppercase" | string | number | null | undefined | Bind;
        public fontAttributes: "None" | "Bold" | "Italic" | string | number | null | undefined | Bind;
        public fontFamily: string | null | Bind;
        public fontSize: number | null | Bind;
        public borderWidth: number | null | Bind;
        public borderColor: Color;
        public cornerRadius: number | null | Bind;
    }
    export declare class RadioButtonGroup extends RootObject {
        public static groupName: AttachedNode;
        public static selectedValue: AttachedNode;
    }
    export declare class RefreshView extends ContentView {
        public static isRefreshing: AttachedNode;
        public static command: AttachedNode;
        public static commandParameter: AttachedNode;
        public static refreshColor: AttachedNode;
        public isRefreshing: boolean | null | Bind;
        public command: RootObject /*System.Windows.Input.ICommand*/;
        public commandParameter: RootObject /*System.Object*/;
        public refreshColor: Color;
    }
    export declare class RelativeLayout extends Layout {
        public static boundsConstraint: AttachedNode;
        public static heightConstraint: AttachedNode;
        public static widthConstraint: AttachedNode;
        public static xConstraint: AttachedNode;
        public static yConstraint: AttachedNode;
        public children: RootObject /*Xamarin.Forms.RelativeLayout+IRelativeList`1[[Xamarin.Forms.View, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null]]*/;
    }
    export declare class Routing extends RootObject {
        public static route: AttachedNode;
    }
    export declare class RoutingEffect extends Effect {
    }
    export declare class RowDefinition extends BindableObject {
        public static height: AttachedNode;
        public height: RootObject /*System.ValueType*/;
    }
    export declare class ScrollView extends Layout {
        public static orientation: AttachedNode;
        public static scrollX: AttachedNode;
        public static scrollY: AttachedNode;
        public static contentSize: AttachedNode;
        public static horizontalScrollBarVisibility: AttachedNode;
        public static verticalScrollBarVisibility: AttachedNode;
        public layoutAreaOverride: RootObject /*System.ValueType*/;
        public content: View;
        public contentSize: RootObject /*System.ValueType*/;
        public orientation: "Vertical" | "Horizontal" | "Both" | "Neither" | string | number | null | undefined | Bind;
        public scrollX: number | null | Bind;
        public scrollY: number | null | Bind;
        public horizontalScrollBarVisibility: "Default" | "Always" | "Never" | string | number | null | undefined | Bind;
        public verticalScrollBarVisibility: "Default" | "Always" | "Never" | string | number | null | undefined | Bind;
    }
    export declare class SearchBar extends InputView {
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
        public cancelButtonColor: Color;
        public horizontalTextAlignment: "Start" | "Center" | "End" | string | number | null | undefined | Bind;
        public verticalTextAlignment: "Start" | "Center" | "End" | string | number | null | undefined | Bind;
        public searchCommand: RootObject /*System.Windows.Input.ICommand*/;
        public searchCommandParameter: RootObject /*System.Object*/;
        public fontAttributes: "None" | "Bold" | "Italic" | string | number | null | undefined | Bind;
        public fontFamily: string | null | Bind;
        public fontSize: number | null | Bind;
    }
    export declare class BackButtonBehavior extends BindableObject {
        public static commandParameter: AttachedNode;
        public static command: AttachedNode;
        public static iconOverride: AttachedNode;
        public static isEnabled: AttachedNode;
        public static textOverride: AttachedNode;
        public command: RootObject /*System.Windows.Input.ICommand*/;
        public commandParameter: RootObject /*System.Object*/;
        public iconOverride: ImageSource;
        public isEnabled: boolean | null | Bind;
        public textOverride: string | null | Bind;
    }
    export declare class BaseShellItem extends NavigableElement {
        public static flyoutIcon: AttachedNode;
        public static icon: AttachedNode;
        public static isChecked: AttachedNode;
        public static isEnabled: AttachedNode;
        public static title: AttachedNode;
        public static tabIndex: AttachedNode;
        public static isTabStop: AttachedNode;
        public static isVisible: AttachedNode;
        public flyoutIcon: ImageSource;
        public icon: ImageSource;
        public isChecked: boolean | null | Bind;
        public isEnabled: boolean | null | Bind;
        public route: string | null | Bind;
        public title: string | null | Bind;
        public tabIndex: number | null | Bind;
        public isTabStop: boolean | null | Bind;
        public isVisible: boolean | null | Bind;
        public flyoutItemIsVisible: boolean | null | Bind;
    }
    export declare class NavigableElement extends Element {
        public static navigation: AttachedNode;
        public static style: AttachedNode;
        public navigation: RootObject /*Xamarin.Forms.INavigation*/;
        public style: Style;
        public static styleClass: AttachedNode;
        public static class: AttachedNode;
        public navigationProxy: RootObject /*Xamarin.Forms.Internals.NavigationProxy*/;
    }
    export declare class SearchHandler extends BindableObject {
        public static isFocusedPropertyKey: RootObject /*Xamarin.Forms.BindablePropertyKey*/;
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
        public keyboard: RootObject /*Xamarin.Forms.Keyboard*/;
        public horizontalTextAlignment: "Start" | "Center" | "End" | string | number | null | undefined | Bind;
        public verticalTextAlignment: "Start" | "Center" | "End" | string | number | null | undefined | Bind;
        public textColor: Color;
        public textTransform: "None" | "Default" | "Lowercase" | "Uppercase" | string | number | null | undefined | Bind;
        public cancelButtonColor: Color;
        public fontAttributes: "None" | "Bold" | "Italic" | string | number | null | undefined | Bind;
        public fontFamily: string | null | Bind;
        public characterSpacing: number | null | Bind;
        public fontSize: number | null | Bind;
        public placeholderColor: Color;
        public placeholder: string | null | Bind;
        public backgroundColor: Color;
        public clearIcon: ImageSource;
        public clearIconHelpText: string | null | Bind;
        public clearIconName: string | null | Bind;
        public clearPlaceholderCommand: RootObject /*System.Windows.Input.ICommand*/;
        public clearPlaceholderCommandParameter: RootObject /*System.Object*/;
        public clearPlaceholderEnabled: boolean | null | Bind;
        public clearPlaceholderHelpText: string | null | Bind;
        public clearPlaceholderIcon: ImageSource;
        public clearPlaceholderName: string | null | Bind;
        public command: RootObject /*System.Windows.Input.ICommand*/;
        public commandParameter: RootObject /*System.Object*/;
        public displayMemberName: string | null | Bind;
        public isSearchEnabled: boolean | null | Bind;
        public itemsSource: RootObject /*System.Collections.IEnumerable*/;
        public itemTemplate: DataTemplate;
        public query: string | null | Bind;
        public queryIcon: ImageSource;
        public queryIconHelpText: string | null | Bind;
        public queryIconName: string | null | Bind;
        public searchBoxVisibility: "Hidden" | "Collapsible" | "Expanded" | string | number | null | undefined | Bind;
        public selectedItem: RootObject /*System.Object*/;
        public showsResults: boolean | null | Bind;
    }
    export declare class Shell extends Page {
        public static current: Shell;
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
        public currentPage: Page;
        public flyoutVerticalScrollMode: "Disabled" | "Enabled" | "Auto" | string | number | null | undefined | Bind;
        public flyoutIcon: ImageSource;
        public currentItem: ShellItem;
        public currentState: RootObject /*Xamarin.Forms.ShellNavigationState*/;
        public flyoutBackgroundImage: ImageSource;
        public flyoutBackgroundImageAspect: "AspectFit" | "AspectFill" | "Fill" | string | number | null | undefined | Bind;
        public flyoutBackgroundColor: Color;
        public flyoutBackground: Brush;
        public flyoutBackdrop: Brush;
        public flyoutWidth: number | null | Bind;
        public flyoutHeight: number | null | Bind;
        public flyoutBehavior: "Disabled" | "Flyout" | "Locked" | string | number | null | undefined | Bind;
        public flyoutHeader: RootObject /*System.Object*/;
        public flyoutFooter: RootObject /*System.Object*/;
        public flyoutHeaderBehavior: "Default" | "Fixed" | "Scroll" | "CollapseOnScroll" | string | number | null | undefined | Bind;
        public flyoutHeaderTemplate: DataTemplate;
        public flyoutFooterTemplate: DataTemplate;
        public flyoutIsPresented: boolean | null | Bind;
        public itemTemplate: DataTemplate;
        public menuItemTemplate: DataTemplate;
        public flyoutItems: RootObject /*System.Collections.IEnumerable*/;
        public flyoutContent: RootObject /*System.Object*/;
        public flyoutContentTemplate: DataTemplate;
    }
    export declare class ShellContent extends BaseShellItem {
        public static menuItems: AttachedNode;
        public static content: AttachedNode;
        public static contentTemplate: AttachedNode;
        public content: RootObject /*System.Object*/;
        public contentTemplate: DataTemplate;
    }
    export declare class ShellGroupItem extends BaseShellItem {
        public static flyoutDisplayOptions: AttachedNode;
        public flyoutDisplayOptions: "AsSingleItem" | "AsMultipleItems" | string | number | null | undefined | Bind;
    }
    export declare class FlyoutItem extends ShellItem {
        public static isVisible: AttachedNode;
        public static labelStyle: string | null | Bind;
        public static imageStyle: string | null | Bind;
        public static layoutStyle: string | null | Bind;
    }
    export declare class TabBar extends ShellItem {
    }
    export declare class ShellItem extends ShellGroupItem {
        public static currentItem: AttachedNode;
        public static items: AttachedNode;
        public currentItem: ShellSection;
    }
    export declare class Tab extends ShellSection {
    }
    export declare class ShellSection extends ShellGroupItem {
        public static currentItem: AttachedNode;
        public static items: AttachedNode;
        public currentItem: ShellContent;
        public stack: RootObject /*System.Collections.Generic.IReadOnlyList`1[[Xamarin.Forms.Page, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null]]*/;
    }
    export declare class Slider extends View {
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
        public minimumTrackColor: Color;
        public maximumTrackColor: Color;
        public thumbColor: Color;
        public thumbImageSource: ImageSource;
        public thumbImage: FileImageSource;
        public dragStartedCommand: RootObject /*System.Windows.Input.ICommand*/;
        public dragCompletedCommand: RootObject /*System.Windows.Input.ICommand*/;
        public maximum: number | null | Bind;
        public minimum: number | null | Bind;
        public value: number | null | Bind;
    }
    export declare class SolidColorBrush extends Brush {
        public static color: AttachedNode;
        public isEmpty: boolean | null | Bind;
        public color: Color;
    }
    export declare class Span extends GestureElement {
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
        public style: Style;
        public backgroundColor: Color;
        public textColor: Color;
        public characterSpacing: number | null | Bind;
        public textTransform: "None" | "Default" | "Lowercase" | "Uppercase" | string | number | null | undefined | Bind;
        public foregroundColor: Color;
        public text: string | null | Bind;
        public font: RootObject /*System.ValueType*/;
        public fontAttributes: "None" | "Bold" | "Italic" | string | number | null | undefined | Bind;
        public fontFamily: string | null | Bind;
        public fontSize: number | null | Bind;
        public textDecorations: "None" | "Underline" | "Strikethrough" | string | number | null | undefined | Bind;
        public lineHeight: number | null | Bind;
    }
    export declare class StackLayout extends Layout {
        public static orientation: AttachedNode;
        public static spacing: AttachedNode;
        public orientation: "Vertical" | "Horizontal" | string | number | null | undefined | Bind;
        public spacing: number | null | Bind;
    }
    export declare class StateTrigger extends StateTriggerBase {
        public static isActive: AttachedNode;
        public isActive: boolean | null | Bind;
    }
    export declare class StateTriggerBase extends BindableObject {
        public isActive: boolean | null | Bind;
        public isAttached: boolean | null | Bind;
    }
    export declare class Stepper extends View {
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
    export declare class StreamImageSource extends ImageSource {
        public static stream: AttachedNode;
        public isEmpty: boolean | null | Bind;
        public stream: RootObject /*System.Func`2[[System.Threading.CancellationToken, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e],[System.Threading.Tasks.Task`1[[System.IO.Stream, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]], System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]]*/;
    }
    export declare class Style extends RootObject {
        public applyToDerivedTypes: boolean | null | Bind;
        public basedOn: Style;
        public baseResourceKey: string | null | Bind;
        public static behaviors: AttachedNode;
        public canCascade: boolean | null | Bind;
        public class: string | null | Bind;
        public static setters: AttachedNode;
        public static triggers: AttachedNode;
        public targetType: RootObject /*System.Type*/;
    }
    export declare class SwipeGestureRecognizer extends GestureRecognizer {
        public static command: AttachedNode;
        public static commandParameter: AttachedNode;
        public static direction: AttachedNode;
        public static threshold: AttachedNode;
        public command: RootObject /*System.Windows.Input.ICommand*/;
        public commandParameter: RootObject /*System.Object*/;
        public direction: "Right" | "Left" | "Up" | "Down" | string | number | null | undefined | Bind;
        public threshold: number | null | Bind;
    }
    export declare class SwipeItem extends MenuItem {
        public static backgroundColor: AttachedNode;
        public static isVisible: AttachedNode;
        public backgroundColor: Color;
        public isVisible: boolean | null | Bind;
    }
    export declare class SwipeItems extends Element {
        public static mode: AttachedNode;
        public static swipeBehaviorOnInvoked: AttachedNode;
        public mode: "Reveal" | "Execute" | string | number | null | undefined | Bind;
        public swipeBehaviorOnInvoked: "Auto" | "Close" | "RemainOpen" | string | number | null | undefined | Bind;
        public item: RootObject /*Xamarin.Forms.ISwipeItem*/;
        public count: number | null | Bind;
        public isReadOnly: boolean | null | Bind;
    }
    export declare class SwipeItemView extends ContentView {
        public static command: AttachedNode;
        public static commandParameter: AttachedNode;
        public command: RootObject /*System.Windows.Input.ICommand*/;
        public commandParameter: RootObject /*System.Object*/;
    }
    export declare class SwipeView extends ContentView {
        public static threshold: AttachedNode;
        public static leftItems: AttachedNode;
        public static rightItems: AttachedNode;
        public static topItems: AttachedNode;
        public static bottomItems: AttachedNode;
        public threshold: number | null | Bind;
    }
    export declare class Switch extends View {
        public static isToggled: AttachedNode;
        public static onColor: AttachedNode;
        public static thumbColor: AttachedNode;
        public static switchOnVisualState: string | null | Bind;
        public static switchOffVisualState: string | null | Bind;
        public onColor: Color;
        public thumbColor: Color;
        public isToggled: boolean | null | Bind;
    }
    export declare class TabbedPage extends Page {
        public static barBackgroundColor: AttachedNode;
        public static barBackground: AttachedNode;
        public static barTextColor: AttachedNode;
        public static unselectedTabColor: AttachedNode;
        public static selectedTabColor: AttachedNode;
        public barBackgroundColor: Color;
        public barBackground: Brush;
        public barTextColor: Color;
        public unselectedTabColor: Color;
        public selectedTabColor: Color;
    }
    export declare class TableRoot extends TableSectionBase {
    }
    export declare class TableSectionBase$Generic extends TableSectionBase {
        public count: number | null | Bind;
        public item: BindableObject;
    }
    export declare class TableSection extends TableSectionBase {
    }
    export declare class TableSectionBase extends BindableObject {
        public static title: AttachedNode;
        public static textColor: AttachedNode;
        public title: string | null | Bind;
        public textColor: Color;
    }
    export declare class TableView extends View {
        public static rowHeight: AttachedNode;
        public static hasUnevenRows: AttachedNode;
        public hasUnevenRows: boolean | null | Bind;
        public intent: "Menu" | "Settings" | "Form" | "Data" | string | number | null | undefined | Bind;
        public static root: AttachedNode;
        public rowHeight: number | null | Bind;
        public model: RootObject /*Xamarin.Forms.Internals.TableModel*/;
    }
    export declare class TapGestureRecognizer extends GestureRecognizer {
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
    export declare class TemplatedPage extends Page {
        public static controlTemplate: AttachedNode;
        public controlTemplate: ControlTemplate;
    }
    export declare class TemplatedView extends Layout {
        public static controlTemplate: AttachedNode;
        public controlTemplate: ControlTemplate;
    }
    export declare class TimePicker extends View {
        public static format: AttachedNode;
        public static textColor: AttachedNode;
        public static characterSpacing: AttachedNode;
        public static time: AttachedNode;
        public static fontFamily: AttachedNode;
        public static fontSize: AttachedNode;
        public static fontAttributes: AttachedNode;
        public static textTransform: AttachedNode;
        public format: string | null | Bind;
        public textColor: Color;
        public characterSpacing: number | null | Bind;
        public time: RootObject /*System.TimeSpan*/;
        public fontAttributes: "None" | "Bold" | "Italic" | string | number | null | undefined | Bind;
        public fontFamily: string | null | Bind;
        public fontSize: number | null | Bind;
        public textTransform: "None" | "Default" | "Lowercase" | "Uppercase" | string | number | null | undefined | Bind;
    }
    export declare class ToolbarItem extends MenuItem {
        public name: string | null | Bind;
        public order: "Default" | "Primary" | "Secondary" | string | number | null | undefined | Bind;
        public priority: number | null | Bind;
    }
    export declare class UriImageSource extends ImageSource {
        public static uri: AttachedNode;
        public isEmpty: boolean | null | Bind;
        public cacheValidity: RootObject /*System.TimeSpan*/;
        public cachingEnabled: boolean | null | Bind;
        public uri: RootObject /*System.Uri*/;
    }
    export declare class UrlWebViewSource extends WebViewSource {
        public static url: AttachedNode;
        public url: string | null | Bind;
    }
    export declare class View extends VisualElement {
        public static verticalOptions: AttachedNode;
        public static horizontalOptions: AttachedNode;
        public static margin: AttachedNode;
        public static gestureRecognizers: AttachedNode;
        public horizontalOptions: RootObject /*System.ValueType*/;
        public margin: RootObject /*System.ValueType*/;
        public verticalOptions: RootObject /*System.ValueType*/;
    }
    export declare class VisualElement extends NavigableElement {
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
        public static isFocusedPropertyKey: RootObject /*Xamarin.Forms.BindablePropertyKey*/;
        public static isFocused: AttachedNode;
        public static flowDirection: AttachedNode;
        public static tabIndex: AttachedNode;
        public static isTabStop: AttachedNode;
        public visual: RootObject /*Xamarin.Forms.IVisual*/;
        public flowDirection: "MatchParent" | "LeftToRight" | "RightToLeft" | string | number | null | undefined | Bind;
        public anchorX: number | null | Bind;
        public anchorY: number | null | Bind;
        public backgroundColor: Color;
        public background: Brush;
        public bounds: RootObject /*System.ValueType*/;
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
        public clip: Geometry;
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
    export declare class WebView extends View {
        public static source: AttachedNode;
        public static canGoBack: AttachedNode;
        public static canGoForward: AttachedNode;
        public static cookies: AttachedNode;
        public canGoBack: boolean | null | Bind;
        public canGoForward: boolean | null | Bind;
        public cookies: RootObject /*System.Net.CookieContainer*/;
        public source: WebViewSource;
    }
    export declare class WebViewSource extends BindableObject {
    }
    export declare class ArcSegment extends PathSegment {
        public static point: AttachedNode;
        public static size: AttachedNode;
        public static rotationAngle: AttachedNode;
        public static sweepDirection: AttachedNode;
        public static isLargeArc: AttachedNode;
        public point: RootObject /*System.ValueType*/;
        public size: RootObject /*System.ValueType*/;
        public rotationAngle: number | null | Bind;
        public sweepDirection: "CounterClockwise" | "Clockwise" | string | number | null | undefined | Bind;
        public isLargeArc: boolean | null | Bind;
    }
    export declare class BezierSegment extends PathSegment {
        public static point1: AttachedNode;
        public static point2: AttachedNode;
        public static point3: AttachedNode;
        public point1: RootObject /*System.ValueType*/;
        public point2: RootObject /*System.ValueType*/;
        public point3: RootObject /*System.ValueType*/;
    }
    export declare class CompositeTransform extends Transform {
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
    export declare class Ellipse extends Shape {
    }
    export declare class EllipseGeometry extends Geometry {
        public static center: AttachedNode;
        public static radiusX: AttachedNode;
        public static radiusY: AttachedNode;
        public center: RootObject /*System.ValueType*/;
        public radiusX: number | null | Bind;
        public radiusY: number | null | Bind;
    }
    export declare class Geometry extends BindableObject {
    }
    export declare class GeometryGroup extends Geometry {
        public static children: AttachedNode;
        public static fillRule: AttachedNode;
        public fillRule: "EvenOdd" | "Nonzero" | string | number | null | undefined | Bind;
    }
    export declare class GeometryHelper extends RootObject {
        public static ttenGeometry: AttachedNode;
    }
    export declare class Line extends Shape {
        public static x1: AttachedNode;
        public static y1: AttachedNode;
        public static x2: AttachedNode;
        public static y2: AttachedNode;
        public x1: number | null | Bind;
        public y1: number | null | Bind;
        public x2: number | null | Bind;
        public y2: number | null | Bind;
    }
    export declare class LineGeometry extends Geometry {
        public static startPoint: AttachedNode;
        public static endPoint: AttachedNode;
        public startPoint: RootObject /*System.ValueType*/;
        public endPoint: RootObject /*System.ValueType*/;
    }
    export declare class LineSegment extends PathSegment {
        public static point: AttachedNode;
        public point: RootObject /*System.ValueType*/;
    }
    export declare class MatrixTransform extends Transform {
        public static matrix: AttachedNode;
        public matrix: RootObject /*System.ValueType*/;
    }
    export declare class Path extends Shape {
        public static data: AttachedNode;
        public static renderTransform: AttachedNode;
        public data: Geometry;
        public renderTransform: Transform;
    }
    export declare class PathFigure extends BindableObject {
        public static segments: AttachedNode;
        public static startPoint: AttachedNode;
        public static isClosed: AttachedNode;
        public static isFilled: AttachedNode;
        public startPoint: RootObject /*System.ValueType*/;
        public isClosed: boolean | null | Bind;
        public isFilled: boolean | null | Bind;
    }
    export declare class PathGeometry extends Geometry {
        public static figures: AttachedNode;
        public static fillRule: AttachedNode;
        public fillRule: "EvenOdd" | "Nonzero" | string | number | null | undefined | Bind;
    }
    export declare class PathSegment extends BindableObject {
    }
    export declare class PolyBezierSegment extends PathSegment {
        public static points: AttachedNode;
    }
    export declare class Polygon extends Shape {
        public static points: AttachedNode;
        public static fillRule: AttachedNode;
        public fillRule: "EvenOdd" | "Nonzero" | string | number | null | undefined | Bind;
    }
    export declare class Polyline extends Shape {
        public static points: AttachedNode;
        public static fillRule: AttachedNode;
        public fillRule: "EvenOdd" | "Nonzero" | string | number | null | undefined | Bind;
    }
    export declare class PolyLineSegment extends PathSegment {
        public static points: AttachedNode;
    }
    export declare class PolyQuadraticBezierSegment extends PathSegment {
        public static points: AttachedNode;
    }
    export declare class QuadraticBezierSegment extends PathSegment {
        public static point1: AttachedNode;
        public static point2: AttachedNode;
        public point1: RootObject /*System.ValueType*/;
        public point2: RootObject /*System.ValueType*/;
    }
    export declare class Rectangle extends Shape {
        public static radiusX: AttachedNode;
        public static radiusY: AttachedNode;
        public radiusX: number | null | Bind;
        public radiusY: number | null | Bind;
    }
    export declare class RectangleGeometry extends Geometry {
        public static rect: AttachedNode;
        public rect: RootObject /*System.ValueType*/;
    }
    export declare class RotateTransform extends Transform {
        public static angle: AttachedNode;
        public static centerX: AttachedNode;
        public static centerY: AttachedNode;
        public angle: number | null | Bind;
        public centerX: number | null | Bind;
        public centerY: number | null | Bind;
    }
    export declare class RoundRectangleGeometry extends GeometryGroup {
        public static rect: AttachedNode;
        public static cornerRadius: AttachedNode;
        public rect: RootObject /*System.ValueType*/;
        public cornerRadius: RootObject /*System.ValueType*/;
    }
    export declare class ScaleTransform extends Transform {
        public static scaleX: AttachedNode;
        public static scaleY: AttachedNode;
        public static centerX: AttachedNode;
        public static centerY: AttachedNode;
        public scaleX: number | null | Bind;
        public scaleY: number | null | Bind;
        public centerX: number | null | Bind;
        public centerY: number | null | Bind;
    }
    export declare class Shape extends View {
        public static fill: AttachedNode;
        public static stroke: AttachedNode;
        public static strokeThickness: AttachedNode;
        public static strokeDashArray: AttachedNode;
        public static strokeDashOffset: AttachedNode;
        public static strokeLineCap: AttachedNode;
        public static strokeLineJoin: AttachedNode;
        public static strokeMiterLimit: AttachedNode;
        public static aspect: AttachedNode;
        public fill: Brush;
        public stroke: Brush;
        public strokeThickness: number | null | Bind;
        public strokeDashOffset: number | null | Bind;
        public strokeLineCap: "Flat" | "Square" | "Round" | string | number | null | undefined | Bind;
        public strokeLineJoin: "Miter" | "Bevel" | "Round" | string | number | null | undefined | Bind;
        public strokeMiterLimit: number | null | Bind;
        public aspect: "None" | "Fill" | "Uniform" | "UniformToFill" | string | number | null | undefined | Bind;
    }
    export declare class SkewTransform extends Transform {
        public static angleX: AttachedNode;
        public static angleY: AttachedNode;
        public static centerX: AttachedNode;
        public static centerY: AttachedNode;
        public angleX: number | null | Bind;
        public angleY: number | null | Bind;
        public centerX: number | null | Bind;
        public centerY: number | null | Bind;
    }
    export declare class Transform extends BindableObject {
        public static value: AttachedNode;
        public value: RootObject /*System.ValueType*/;
    }
    export declare class TransformGroup extends Transform {
        public static children: AttachedNode;
    }
    export declare class TranslateTransform extends Transform {
        public static x: AttachedNode;
        public static y: AttachedNode;
        public x: number | null | Bind;
        public y: number | null | Bind;
    }
}

export default XF;
export namespace Xamarin {
    export namespace Forms {
        export namespace StyleSheets {
            export declare class StyleSheet extends RootObject {
            }
        }
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
                    public static activeBezelInteractionElementPropertyKey: RootObject /*Xamarin.Forms.BindablePropertyKey*/;
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
                export declare class ShadowEffect extends RootObject /*Xamarin.Forms.RoutingEffect*/ {
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
            export declare class TemplatedItemsList$Generic extends RootObject /*Xamarin.Forms.BindableObject*/ {
                public static name: AttachedNode;
                public static shortName: AttachedNode;
                public groupDisplayBinding: RootObject /*Xamarin.Forms.BindingBase*/;
                public groupHeaderTemplate: RootObject /*Xamarin.Forms.DataTemplate*/;
                public groupHeaderTemplateProperty: RootObject /*Xamarin.Forms.BindableProperty*/;
                public groupShortNameBinding: RootObject /*Xamarin.Forms.BindingBase*/;
                public headerContent: RootObject /*Xamarin.Forms.BindableObject*/;
                public isGroupingEnabled: boolean | null | Bind;
                public isGroupingEnabledProperty: RootObject /*Xamarin.Forms.BindableProperty*/;
                public itemsSource: RootObject /*System.Collections.IEnumerable*/;
                public name: string | null | Bind;
                public static parent: AttachedNode;
                public progressiveLoadingProperty: RootObject /*Xamarin.Forms.BindableProperty*/;
                public shortName: string | null | Bind;
                public shortNames: RootObject /*System.Collections.Generic.IReadOnlyList`1[[System.String, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]]*/;
                public count: number | null | Bind;
                public item: RootObject /*Xamarin.Forms.BindableObject*/;
            }
        }
    }
}
Object.defineProperties(XF as any, {
    AbsoluteLayout: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.AbsoluteLayout, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "AbsoluteLayout", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    ActivityIndicator: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.ActivityIndicator, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "ActivityIndicator", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    AdaptiveTrigger: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.AdaptiveTrigger, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "AdaptiveTrigger", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    Application: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.Application, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "Application", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    AppLinkEntry: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.AppLinkEntry, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "AppLinkEntry", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    AutomationProperties: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.AutomationProperties, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "AutomationProperties", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    BaseMenuItem: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.BaseMenuItem, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "BaseMenuItem", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    BindableLayout: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.BindableLayout, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "BindableLayout", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    BindableObject: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.BindableObject, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "BindableObject", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    BoxView: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.BoxView, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "BoxView", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    Brush: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.Brush, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "Brush", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    Button: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.Button, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "Button", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    CarouselPage: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.CarouselPage, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "CarouselPage", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    Cell: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.Cell, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "Cell", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    EntryCell: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.EntryCell, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "EntryCell", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    ImageCell: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.ImageCell, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "ImageCell", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    SwitchCell: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.SwitchCell, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "SwitchCell", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    TextCell: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.TextCell, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "TextCell", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    ViewCell: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.ViewCell, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "ViewCell", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    CheckBox: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.CheckBox, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "CheckBox", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    ClickGestureRecognizer: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.ClickGestureRecognizer, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "ClickGestureRecognizer", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    Color: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.Color, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "Color", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    ColumnDefinition: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.ColumnDefinition, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "ColumnDefinition", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    CompareStateTrigger: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.CompareStateTrigger, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "CompareStateTrigger", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    CompressedLayout: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.CompressedLayout, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "CompressedLayout", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    Constraint: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.Constraint, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "Constraint", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    ContentPage: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.ContentPage, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "ContentPage", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    ContentPresenter: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.ContentPresenter, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "ContentPresenter", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    ContentView: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.ContentView, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "ContentView", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    ControlTemplate: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.ControlTemplate, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "ControlTemplate", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    DataTemplate: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.DataTemplate, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "DataTemplate", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    DataTemplateSelector: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.DataTemplateSelector, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "DataTemplateSelector", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    DatePicker: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.DatePicker, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "DatePicker", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    DeviceStateTrigger: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.DeviceStateTrigger, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "DeviceStateTrigger", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    DragGestureRecognizer: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.DragGestureRecognizer, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "DragGestureRecognizer", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    DropGestureRecognizer: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.DropGestureRecognizer, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "DropGestureRecognizer", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    Easing: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.Easing, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "Easing", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    Editor: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.Editor, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "Editor", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    Effect: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.Effect, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "Effect", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    Element: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.Element, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "Element", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    ElementTemplate: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.ElementTemplate, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "ElementTemplate", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    Entry: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.Entry, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "Entry", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    FileImageSource: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.FileImageSource, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "FileImageSource", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    FlexLayout: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.FlexLayout, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "FlexLayout", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    FlyoutPage: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.FlyoutPage, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "FlyoutPage", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    MasterDetailPage: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.MasterDetailPage, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "MasterDetailPage", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    FontImageSource: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.FontImageSource, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "FontImageSource", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    FormattedString: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.FormattedString, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "FormattedString", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    Frame: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.Frame, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "Frame", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    GestureElement: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.GestureElement, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "GestureElement", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    GestureRecognizer: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.GestureRecognizer, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "GestureRecognizer", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    GradientBrush: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.GradientBrush, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "GradientBrush", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    GradientStop: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.GradientStop, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "GradientStop", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    Grid: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.Grid, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "Grid", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    HtmlWebViewSource: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.HtmlWebViewSource, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "HtmlWebViewSource", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    Image: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.Image, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "Image", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    ImageButton: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.ImageButton, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "ImageButton", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    ImageSource: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.ImageSource, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "ImageSource", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    IndicatorView: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.IndicatorView, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "IndicatorView", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    InputView: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.InputView, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "InputView", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    Behavior: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.Behavior, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "Behavior", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    Behavior$Generic: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.Behavior`1, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "Behavior$Generic", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    DataTrigger: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.DataTrigger, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "DataTrigger", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    EventTrigger: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.EventTrigger, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "EventTrigger", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    MultiTrigger: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.MultiTrigger, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "MultiTrigger", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    Trigger: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.Trigger, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "Trigger", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    TriggerBase: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.TriggerBase, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "TriggerBase", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    ItemsView$Generic: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.ItemsView`1, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "ItemsView$Generic", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    CarouselView: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.CarouselView, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "CarouselView", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    CollectionView: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.CollectionView, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "CollectionView", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    GridItemsLayout: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.GridItemsLayout, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "GridItemsLayout", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    GroupableItemsView: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.GroupableItemsView, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "GroupableItemsView", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    ItemsLayout: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.ItemsLayout, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "ItemsLayout", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    ItemsView: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.ItemsView, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "ItemsView", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    LinearItemsLayout: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.LinearItemsLayout, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "LinearItemsLayout", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    SelectableItemsView: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.SelectableItemsView, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "SelectableItemsView", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    StructuredItemsView: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.StructuredItemsView, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "StructuredItemsView", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    IValueConverter: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.IValueConverter, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "IValueConverter", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    Label: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.Label, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "Label", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    Layout$Generic: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.Layout`1, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "Layout$Generic", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    Layout: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.Layout, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "Layout", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    LinearGradientBrush: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.LinearGradientBrush, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "LinearGradientBrush", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    ListView: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.ListView, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "ListView", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    Menu: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.Menu, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "Menu", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    MenuItem: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.MenuItem, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "MenuItem", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    MultiPage$Generic: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.MultiPage`1, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "MultiPage$Generic", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    NameScopeExtensions: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.NameScopeExtensions, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "NameScopeExtensions", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    NavigationPage: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.NavigationPage, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "NavigationPage", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    NullEffect: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.NullEffect, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "NullEffect", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    OpenGLView: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.OpenGLView, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "OpenGLView", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    OrientationStateTrigger: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.OrientationStateTrigger, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "OrientationStateTrigger", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    Page: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.Page, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "Page", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    PanGestureRecognizer: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.PanGestureRecognizer, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "PanGestureRecognizer", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    Picker: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.Picker, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "Picker", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    PinchGestureRecognizer: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.PinchGestureRecognizer, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "PinchGestureRecognizer", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    PlatformEffect$Generic: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.PlatformEffect`2, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "PlatformEffect$Generic", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    ProgressBar: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.ProgressBar, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "ProgressBar", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    RadialGradientBrush: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.RadialGradientBrush, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "RadialGradientBrush", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    RadioButton: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.RadioButton, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "RadioButton", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    RadioButtonGroup: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.RadioButtonGroup, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "RadioButtonGroup", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    RefreshView: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.RefreshView, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "RefreshView", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    RelativeLayout: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.RelativeLayout, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "RelativeLayout", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    Routing: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.Routing, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "Routing", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    RoutingEffect: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.RoutingEffect, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "RoutingEffect", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    RowDefinition: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.RowDefinition, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "RowDefinition", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    ScrollView: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.ScrollView, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "ScrollView", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    SearchBar: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.SearchBar, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "SearchBar", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    BackButtonBehavior: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.BackButtonBehavior, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "BackButtonBehavior", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    BaseShellItem: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.BaseShellItem, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "BaseShellItem", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    NavigableElement: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.NavigableElement, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "NavigableElement", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    SearchHandler: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.SearchHandler, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "SearchHandler", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    Shell: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.Shell, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "Shell", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    ShellContent: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.ShellContent, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "ShellContent", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    ShellGroupItem: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.ShellGroupItem, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "ShellGroupItem", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    FlyoutItem: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.FlyoutItem, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "FlyoutItem", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    TabBar: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.TabBar, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "TabBar", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    ShellItem: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.ShellItem, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "ShellItem", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    Tab: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.Tab, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "Tab", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    ShellSection: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.ShellSection, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "ShellSection", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    Slider: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.Slider, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "Slider", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    SolidColorBrush: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.SolidColorBrush, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "SolidColorBrush", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    Span: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.Span, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "Span", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    StackLayout: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.StackLayout, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "StackLayout", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    StateTrigger: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.StateTrigger, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "StateTrigger", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    StateTriggerBase: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.StateTriggerBase, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "StateTriggerBase", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    Stepper: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.Stepper, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "Stepper", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    StreamImageSource: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.StreamImageSource, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "StreamImageSource", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    Style: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.Style, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "Style", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    SwipeGestureRecognizer: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.SwipeGestureRecognizer, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "SwipeGestureRecognizer", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    SwipeItem: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.SwipeItem, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "SwipeItem", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    SwipeItems: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.SwipeItems, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "SwipeItems", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    SwipeItemView: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.SwipeItemView, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "SwipeItemView", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    SwipeView: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.SwipeView, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "SwipeView", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    Switch: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.Switch, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "Switch", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    TabbedPage: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.TabbedPage, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "TabbedPage", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    TableRoot: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.TableRoot, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "TableRoot", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    TableSectionBase$Generic: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.TableSectionBase`1, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "TableSectionBase$Generic", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    TableSection: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.TableSection, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "TableSection", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    TableSectionBase: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.TableSectionBase, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "TableSectionBase", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    TableView: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.TableView, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "TableView", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    TapGestureRecognizer: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.TapGestureRecognizer, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "TapGestureRecognizer", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    TemplatedPage: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.TemplatedPage, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "TemplatedPage", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    TemplatedView: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.TemplatedView, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "TemplatedView", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    TimePicker: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.TimePicker, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "TimePicker", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    ToolbarItem: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.ToolbarItem, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "ToolbarItem", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    UriImageSource: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.UriImageSource, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "UriImageSource", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    UrlWebViewSource: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.UrlWebViewSource, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "UrlWebViewSource", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    View: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.View, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "View", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    VisualElement: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.VisualElement, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "VisualElement", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    VisualStateManager: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.VisualStateManager, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "VisualStateManager", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    WebView: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.WebView, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "WebView", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    WebViewSource: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.WebViewSource, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "WebViewSource", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    ArcSegment: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.Shapes.ArcSegment, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "ArcSegment", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    BezierSegment: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.Shapes.BezierSegment, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "BezierSegment", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    CompositeTransform: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.Shapes.CompositeTransform, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "CompositeTransform", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    Ellipse: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.Shapes.Ellipse, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "Ellipse", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    EllipseGeometry: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.Shapes.EllipseGeometry, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "EllipseGeometry", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    Geometry: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.Shapes.Geometry, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "Geometry", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    GeometryGroup: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.Shapes.GeometryGroup, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "GeometryGroup", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    GeometryHelper: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.Shapes.GeometryHelper, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "GeometryHelper", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    Line: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.Shapes.Line, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "Line", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    LineGeometry: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.Shapes.LineGeometry, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "LineGeometry", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    LineSegment: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.Shapes.LineSegment, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "LineSegment", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    MatrixTransform: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.Shapes.MatrixTransform, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "MatrixTransform", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    Path: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.Shapes.Path, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "Path", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    PathFigure: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.Shapes.PathFigure, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "PathFigure", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    PathGeometry: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.Shapes.PathGeometry, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "PathGeometry", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    PathSegment: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.Shapes.PathSegment, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "PathSegment", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    PolyBezierSegment: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.Shapes.PolyBezierSegment, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "PolyBezierSegment", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    Polygon: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.Shapes.Polygon, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "Polygon", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    Polyline: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.Shapes.Polyline, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "Polyline", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    PolyLineSegment: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.Shapes.PolyLineSegment, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "PolyLineSegment", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    PolyQuadraticBezierSegment: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.Shapes.PolyQuadraticBezierSegment, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "PolyQuadraticBezierSegment", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    QuadraticBezierSegment: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.Shapes.QuadraticBezierSegment, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "QuadraticBezierSegment", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    Rectangle: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.Shapes.Rectangle, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "Rectangle", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    RectangleGeometry: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.Shapes.RectangleGeometry, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "RectangleGeometry", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    RotateTransform: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.Shapes.RotateTransform, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "RotateTransform", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    RoundRectangleGeometry: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.Shapes.RoundRectangleGeometry, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "RoundRectangleGeometry", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    ScaleTransform: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.Shapes.ScaleTransform, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "ScaleTransform", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    Shape: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.Shapes.Shape, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "Shape", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    SkewTransform: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.Shapes.SkewTransform, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "SkewTransform", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    Transform: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.Shapes.Transform, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "Transform", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    TransformGroup: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.Shapes.TransformGroup, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "TransformGroup", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    TranslateTransform: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.Shapes.TranslateTransform, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "TranslateTransform", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
});
Object.defineProperties(Xamarin.Forms.StyleSheets as any, {
    StyleSheet: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.StyleSheets.StyleSheet, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "StyleSheet", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
});
Object.defineProperties(Xamarin.Forms.PlatformConfiguration.WindowsSpecific as any, {
    Application: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.PlatformConfiguration.WindowsSpecific.Application, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "Application", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    FlyoutPage: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.PlatformConfiguration.WindowsSpecific.FlyoutPage, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "FlyoutPage", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    MasterDetailPage: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.PlatformConfiguration.WindowsSpecific.MasterDetailPage, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "MasterDetailPage", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    InputView: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.PlatformConfiguration.WindowsSpecific.InputView, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "InputView", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    Label: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.PlatformConfiguration.WindowsSpecific.Label, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "Label", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    ListView: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.PlatformConfiguration.WindowsSpecific.ListView, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "ListView", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    Page: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.PlatformConfiguration.WindowsSpecific.Page, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "Page", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    RefreshView: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.PlatformConfiguration.WindowsSpecific.RefreshView, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "RefreshView", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    SearchBar: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.PlatformConfiguration.WindowsSpecific.SearchBar, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "SearchBar", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    TabbedPage: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.PlatformConfiguration.WindowsSpecific.TabbedPage, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "TabbedPage", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    VisualElement: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.PlatformConfiguration.WindowsSpecific.VisualElement, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "VisualElement", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    WebView: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.PlatformConfiguration.WindowsSpecific.WebView, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "WebView", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
});
Object.defineProperties(Xamarin.Forms.PlatformConfiguration.TizenSpecific as any, {
    Application: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.PlatformConfiguration.TizenSpecific.Application, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "Application", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    Entry: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.PlatformConfiguration.TizenSpecific.Entry, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "Entry", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    Image: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.PlatformConfiguration.TizenSpecific.Image, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "Image", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    ItemsView: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.PlatformConfiguration.TizenSpecific.ItemsView, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "ItemsView", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    Label: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.PlatformConfiguration.TizenSpecific.Label, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "Label", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    NavigationPage: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.PlatformConfiguration.TizenSpecific.NavigationPage, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "NavigationPage", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    Page: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.PlatformConfiguration.TizenSpecific.Page, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "Page", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    ProgressBar: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.PlatformConfiguration.TizenSpecific.ProgressBar, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "ProgressBar", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    ScrollView: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.PlatformConfiguration.TizenSpecific.ScrollView, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "ScrollView", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    Switch: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.PlatformConfiguration.TizenSpecific.Switch, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "Switch", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    VisualElement: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.PlatformConfiguration.TizenSpecific.VisualElement, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "VisualElement", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
});
Object.defineProperties(Xamarin.Forms.PlatformConfiguration.macOSSpecific as any, {
    NavigationPage: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.PlatformConfiguration.macOSSpecific.NavigationPage, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "NavigationPage", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    Page: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.PlatformConfiguration.macOSSpecific.Page, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "Page", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    TabbedPage: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.PlatformConfiguration.macOSSpecific.TabbedPage, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "TabbedPage", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
});
Object.defineProperties(Xamarin.Forms.PlatformConfiguration.iOSSpecific as any, {
    Application: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.PlatformConfiguration.iOSSpecific.Application, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "Application", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    Cell: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.PlatformConfiguration.iOSSpecific.Cell, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "Cell", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    DatePicker: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.PlatformConfiguration.iOSSpecific.DatePicker, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "DatePicker", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    Entry: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.PlatformConfiguration.iOSSpecific.Entry, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "Entry", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    FlyoutPage: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.PlatformConfiguration.iOSSpecific.FlyoutPage, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "FlyoutPage", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    MasterDetailPage: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.PlatformConfiguration.iOSSpecific.MasterDetailPage, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "MasterDetailPage", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    ListView: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.PlatformConfiguration.iOSSpecific.ListView, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "ListView", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    NavigationPage: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.PlatformConfiguration.iOSSpecific.NavigationPage, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "NavigationPage", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    Page: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.PlatformConfiguration.iOSSpecific.Page, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "Page", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    Picker: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.PlatformConfiguration.iOSSpecific.Picker, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "Picker", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    ScrollView: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.PlatformConfiguration.iOSSpecific.ScrollView, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "ScrollView", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    SearchBar: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.PlatformConfiguration.iOSSpecific.SearchBar, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "SearchBar", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    Slider: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.PlatformConfiguration.iOSSpecific.Slider, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "Slider", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    SwipeView: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.PlatformConfiguration.iOSSpecific.SwipeView, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "SwipeView", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    TabbedPage: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.PlatformConfiguration.iOSSpecific.TabbedPage, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "TabbedPage", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    TimePicker: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.PlatformConfiguration.iOSSpecific.TimePicker, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "TimePicker", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    VisualElement: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.PlatformConfiguration.iOSSpecific.VisualElement, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "VisualElement", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    ShadowEffect: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.PlatformConfiguration.iOSSpecific.VisualElement+ShadowEffect, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "ShadowEffect", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
});
Object.defineProperties(Xamarin.Forms.PlatformConfiguration.GTKSpecific as any, {
    BoxView: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.PlatformConfiguration.GTKSpecific.BoxView, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "BoxView", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    NavigationPage: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.PlatformConfiguration.GTKSpecific.NavigationPage, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "NavigationPage", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    TabbedPage: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.PlatformConfiguration.GTKSpecific.TabbedPage, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "TabbedPage", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
});
Object.defineProperties(Xamarin.Forms.PlatformConfiguration.AndroidSpecific as any, {
    Application: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.PlatformConfiguration.AndroidSpecific.Application, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "Application", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    Button: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.PlatformConfiguration.AndroidSpecific.Button, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "Button", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    Entry: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.PlatformConfiguration.AndroidSpecific.Entry, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "Entry", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    ImageButton: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.PlatformConfiguration.AndroidSpecific.ImageButton, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "ImageButton", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    ListView: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.PlatformConfiguration.AndroidSpecific.ListView, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "ListView", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    SwipeView: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.PlatformConfiguration.AndroidSpecific.SwipeView, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "SwipeView", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    TabbedPage: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.PlatformConfiguration.AndroidSpecific.TabbedPage, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "TabbedPage", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    ViewCell: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.PlatformConfiguration.AndroidSpecific.ViewCell, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "ViewCell", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    VisualElement: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.PlatformConfiguration.AndroidSpecific.VisualElement, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "VisualElement", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    WebView: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.PlatformConfiguration.AndroidSpecific.WebView, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "WebView", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
});
Object.defineProperties(Xamarin.Forms.PlatformConfiguration.AndroidSpecific.AppCompat as any, {
    Application: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.PlatformConfiguration.AndroidSpecific.AppCompat.Application, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "Application", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    NavigationPage: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.PlatformConfiguration.AndroidSpecific.AppCompat.NavigationPage, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "NavigationPage", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
});
Object.defineProperties(Xamarin.Forms.Internals as any, {
    CellExtensions: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.Internals.CellExtensions, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "CellExtensions", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    NameScope: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.Internals.NameScope, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "NameScope", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    TextTransformUtilites: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.Internals.TextTransformUtilites, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "TextTransformUtilites", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    TemplatedItemsList$Generic: { 
        configurable: true,
        enumerable: true,
        writable: true,
        get() {
            const t = bridge.getClass("Xamarin.Forms.Internals.TemplatedItemsList`2, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "TemplatedItemsList$Generic", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
});

