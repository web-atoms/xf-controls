//tslint:disable
import XNode, { RootObject, NodeFactory, AttachedNode } from "@web-atoms/core/dist/core/XNode";
import Bind from "@web-atoms/core/dist/core/Bind";
import { ColorItem } from "@web-atoms/core/dist/core/Colors";
declare var bridge: any;

namespace XF {
    export declare class AbsoluteLayout extends RootObject {
        public static autoSize: number | null | Bind;
        public static layoutBounds: AttachedNode;
        public static layoutFlags: AttachedNode;
        public static layoutFlagsProperty: NodeFactory;
        public static layoutBoundsProperty: NodeFactory;
        public children: RootObject;
    }
    export declare class ActivityIndicator extends View {
        public static isRunningProperty: NodeFactory;
        public static colorProperty: NodeFactory;
        public color: RootObject;
        public isRunning: boolean | null | Bind;
    }
    export declare class AdaptiveTrigger extends StateTriggerBase {
        public static minWindowHeightProperty: NodeFactory;
        public static minWindowWidthProperty: NodeFactory;
        public minWindowHeight: number | null | Bind;
        public minWindowWidth: number | null | Bind;
    }
    export declare class Application extends Element {
        public static logWarningsToApplicationOutput: boolean | null | Bind;
        public static current: Application;
        public dispatcher: RootObject;
        public appLinks: RootObject;
        public mainPage: Page;
        public properties: any;
        public navigationProxy: RootObject;
        public panGestureId: number | null | Bind;
        public static resources: AttachedNode;
        public userAppTheme: "Unspecified" | "Light" | "Dark" | string | number | null | undefined | Bind;
        public requestedTheme: "Unspecified" | "Light" | "Dark" | string | number | null | undefined | Bind;
    }
    export declare class AppLinkEntry extends Element {
        public static titleProperty: NodeFactory;
        public static descriptionProperty: NodeFactory;
        public static thumbnailProperty: NodeFactory;
        public static appLinkUriProperty: NodeFactory;
        public static isLinkActiveProperty: NodeFactory;
        public appLinkUri: any;
        public description: string | null | Bind;
        public isLinkActive: boolean | null | Bind;
        public keyValues: any;
        public thumbnail: ImageSource;
        public title: string | null | Bind;
    }
    export declare class AutomationProperties extends RootObject {
        public static helpText: AttachedNode;
        public static isInAccessibleTree: AttachedNode;
        public static labeledBy: AttachedNode;
        public static name: AttachedNode;
        public static helpTextProperty: NodeFactory;
        public static isInAccessibleTreeProperty: NodeFactory;
        public static labeledByProperty: NodeFactory;
        public static nameProperty: NodeFactory;
    }
    export declare class BaseMenuItem extends Element {
    }
    export declare class BindableLayout extends RootObject {
        public static itemsSource: AttachedNode;
        public static itemTemplate: AttachedNode;
        public static itemTemplateSelector: AttachedNode;
        public static emptyView: AttachedNode;
        public static emptyViewTemplate: AttachedNode;
        public static itemsSourceProperty: NodeFactory;
        public static itemTemplateProperty: NodeFactory;
        public static itemTemplateSelectorProperty: NodeFactory;
        public static emptyViewProperty: NodeFactory;
        public static emptyViewTemplateProperty: NodeFactory;
    }
    export declare class BindableObject extends RootObject {
        public static inheritedBindingContext: AttachedNode;
        public static bindingContextProperty: NodeFactory;
        public dispatcher: RootObject;
        public bindingContext: any;
    }
    export declare class BoxView extends View {
        public static colorProperty: NodeFactory;
        public static cornerRadiusProperty: NodeFactory;
        public color: RootObject;
        public cornerRadius: RootObject;
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
        public static commandProperty: NodeFactory;
        public static commandParameterProperty: NodeFactory;
        public static contentLayoutProperty: NodeFactory;
        public static textProperty: NodeFactory;
        public static textColorProperty: NodeFactory;
        public static characterSpacingProperty: NodeFactory;
        public static fontProperty: NodeFactory;
        public static fontFamilyProperty: NodeFactory;
        public static fontSizeProperty: NodeFactory;
        public static textTransformProperty: NodeFactory;
        public static fontAttributesProperty: NodeFactory;
        public static borderWidthProperty: NodeFactory;
        public static borderColorProperty: NodeFactory;
        public static borderRadiusProperty: NodeFactory;
        public static cornerRadiusProperty: NodeFactory;
        public static imageSourceProperty: NodeFactory;
        public static imageProperty: NodeFactory;
        public static paddingProperty: NodeFactory;
        public static isPressedProperty: NodeFactory;
        public padding: RootObject;
        public borderColor: RootObject;
        public borderRadius: number | null | Bind;
        public cornerRadius: number | null | Bind;
        public borderWidth: number | null | Bind;
        public contentLayout: RootObject;
        public command: any;
        public commandParameter: any;
        public font: RootObject;
        public imageSource: ImageSource;
        public image: FileImageSource;
        public text: string | null | Bind;
        public textColor: RootObject;
        public characterSpacing: number | null | Bind;
        public isPressed: boolean | null | Bind;
        public fontAttributes: "None" | "Bold" | "Italic" | string | number | null | undefined | Bind;
        public fontFamily: string | null | Bind;
        public fontSize: number | null | Bind;
        public textTransform: "None" | "Default" | "Lowercase" | "Uppercase" | string | number | null | undefined | Bind;
    }
    export declare class CarouselPage extends RootObject {
    }
    export declare class Cell extends Element {
        public static isEnabledProperty: NodeFactory;
        public static defaultCellHeight: number | null | Bind;
        public static contextActions: AttachedNode;
        public hasContextActions: boolean | null | Bind;
        public isContextActionsLegacyModeEnabled: boolean | null | Bind;
        public height: number | null | Bind;
        public isEnabled: boolean | null | Bind;
        public renderHeight: number | null | Bind;
    }
    export declare class EntryCell extends Cell {
        public static textProperty: NodeFactory;
        public static labelProperty: NodeFactory;
        public static placeholderProperty: NodeFactory;
        public static labelColorProperty: NodeFactory;
        public static keyboardProperty: NodeFactory;
        public static horizontalTextAlignmentProperty: NodeFactory;
        public static verticalTextAlignmentProperty: NodeFactory;
        public static xAlignProperty: NodeFactory;
        public horizontalTextAlignment: "Start" | "Center" | "End" | string | number | null | undefined | Bind;
        public verticalTextAlignment: "Start" | "Center" | "End" | string | number | null | undefined | Bind;
        public keyboard: RootObject;
        public label: string | null | Bind;
        public labelColor: RootObject;
        public placeholder: string | null | Bind;
        public text: string | null | Bind;
        public xAlign: "Start" | "Center" | "End" | string | number | null | undefined | Bind;
    }
    export declare class ImageCell extends TextCell {
        public static imageSourceProperty: NodeFactory;
        public imageSource: ImageSource;
    }
    export declare class SwitchCell extends Cell {
        public static onProperty: NodeFactory;
        public static textProperty: NodeFactory;
        public static onColorProperty: NodeFactory;
        public onColor: RootObject;
        public on: boolean | null | Bind;
        public text: string | null | Bind;
    }
    export declare class TextCell extends Cell {
        public static commandProperty: NodeFactory;
        public static commandParameterProperty: NodeFactory;
        public static textProperty: NodeFactory;
        public static detailProperty: NodeFactory;
        public static textColorProperty: NodeFactory;
        public static detailColorProperty: NodeFactory;
        public command: any;
        public commandParameter: any;
        public detail: string | null | Bind;
        public detailColor: RootObject;
        public text: string | null | Bind;
        public textColor: RootObject;
    }
    export declare class ViewCell extends Cell {
        public view: View;
    }
    export declare class CheckBox extends View {
        public static isCheckedProperty: NodeFactory;
        public static colorProperty: NodeFactory;
        public static isCheckedVisualState: string | null | Bind;
        public color: RootObject;
        public isChecked: boolean | null | Bind;
    }
    export declare class ClickGestureRecognizer extends GestureRecognizer {
        public static commandProperty: NodeFactory;
        public static commandParameterProperty: NodeFactory;
        public static numberOfClicksRequiredProperty: NodeFactory;
        public static buttonsProperty: NodeFactory;
        public command: any;
        public commandParameter: any;
        public numberOfClicksRequired: number | null | Bind;
        public buttons: "Primary" | "Secondary" | string | number | null | undefined | Bind;
    }
    export declare class ColumnDefinition extends BindableObject {
        public static widthProperty: NodeFactory;
        public width: RootObject;
    }
    export declare class CompareStateTrigger extends StateTriggerBase {
        public static propertyProperty: NodeFactory;
        public static valueProperty: NodeFactory;
        public property: any;
        public value: any;
    }
    export declare class CompressedLayout extends RootObject {
        public static isHeadless: AttachedNode;
        public static isHeadlessProperty: NodeFactory;
        public static headlessOffsetProperty: NodeFactory;
    }
    export declare class Constraint extends RootObject {
        public static ativeToView: AttachedNode;
    }
    export declare class ContentPage extends TemplatedPage {
        public static contentProperty: NodeFactory;
        public content: View;
    }
    export declare class ContentPresenter extends Layout {
        public static contentProperty: NodeFactory;
        public content: View;
    }
    export declare class ContentView extends TemplatedView {
        public static contentProperty: NodeFactory;
        public content: View;
    }
    export declare class ControlTemplate extends ElementTemplate {
    }
    export declare class DataTemplate extends ElementTemplate {
        public bindings: any;
        public values: any;
    }
    export declare class DataTemplateSelector extends DataTemplate {
    }
    export declare class DatePicker extends View {
        public static formatProperty: NodeFactory;
        public static dateProperty: NodeFactory;
        public static minimumDateProperty: NodeFactory;
        public static maximumDateProperty: NodeFactory;
        public static textColorProperty: NodeFactory;
        public static characterSpacingProperty: NodeFactory;
        public static fontFamilyProperty: NodeFactory;
        public static fontSizeProperty: NodeFactory;
        public static fontAttributesProperty: NodeFactory;
        public static textTransformProperty: NodeFactory;
        public date: Date | null | Bind;
        public format: string | null | Bind;
        public textTransform: "None" | "Default" | "Lowercase" | "Uppercase" | string | number | null | undefined | Bind;
        public maximumDate: Date | null | Bind;
        public minimumDate: Date | null | Bind;
        public textColor: RootObject;
        public characterSpacing: number | null | Bind;
        public fontAttributes: "None" | "Bold" | "Italic" | string | number | null | undefined | Bind;
        public fontFamily: string | null | Bind;
        public fontSize: number | null | Bind;
    }
    export declare class DeviceStateTrigger extends StateTriggerBase {
        public static deviceProperty: NodeFactory;
        public device: string | null | Bind;
    }
    export declare class DragGestureRecognizer extends GestureRecognizer {
        public static canDragProperty: NodeFactory;
        public static dropCompletedCommandProperty: NodeFactory;
        public static dropCompletedCommandParameterProperty: NodeFactory;
        public static dragStartingCommandProperty: NodeFactory;
        public static dragStartingCommandParameterProperty: NodeFactory;
        public canDrag: boolean | null | Bind;
        public dropCompletedCommand: any;
        public dropCompletedCommandParameter: any;
        public dragStartingCommand: any;
        public dragStartingCommandParameter: any;
    }
    export declare class DropGestureRecognizer extends GestureRecognizer {
        public static allowDropProperty: NodeFactory;
        public static dragOverCommandProperty: NodeFactory;
        public static dragOverCommandParameterProperty: NodeFactory;
        public static dragLeaveCommandProperty: NodeFactory;
        public static dragLeaveCommandParameterProperty: NodeFactory;
        public static dropCommandProperty: NodeFactory;
        public static dropCommandParameterProperty: NodeFactory;
        public allowDrop: boolean | null | Bind;
        public dragOverCommand: any;
        public dragOverCommandParameter: any;
        public dragLeaveCommand: any;
        public dragLeaveCommandParameter: any;
        public dropCommand: any;
        public dropCommandParameter: any;
    }
    export declare class Editor extends InputView {
        public static textProperty: NodeFactory;
        public static fontFamilyProperty: NodeFactory;
        public static fontSizeProperty: NodeFactory;
        public static fontAttributesProperty: NodeFactory;
        public static textColorProperty: NodeFactory;
        public static characterSpacingProperty: NodeFactory;
        public static placeholderProperty: NodeFactory;
        public static placeholderColorProperty: NodeFactory;
        public static isTextPredictionEnabledProperty: NodeFactory;
        public static autoSizeProperty: NodeFactory;
        public autoSize: "Disabled" | "TextChanges" | string | number | null | undefined | Bind;
        public fontAttributes: "None" | "Bold" | "Italic" | string | number | null | undefined | Bind;
        public isTextPredictionEnabled: boolean | null | Bind;
        public fontFamily: string | null | Bind;
        public fontSize: number | null | Bind;
    }
    export declare class Element extends BindableObject {
        public static menu: AttachedNode;
        public static menuProperty: NodeFactory;
        public static automationIdProperty: NodeFactory;
        public static classIdProperty: NodeFactory;
        public automationId: string | null | Bind;
        public classId: string | null | Bind;
        public static effects: AttachedNode;
        public id: any;
        public parentView: VisualElement;
        public styleId: string | null | Bind;
        public static logicalChildren: AttachedNode;
        public realParent: Element;
        public parent: Element;
        public effectControlProvider: RootObject;
        public platform: RootObject;
    }
    export declare class ElementTemplate extends RootObject {
    }
    export declare class Entry extends InputView {
        public static returnTypeProperty: NodeFactory;
        public static returnCommandProperty: NodeFactory;
        public static returnCommandParameterProperty: NodeFactory;
        public static placeholderProperty: NodeFactory;
        public static placeholderColorProperty: NodeFactory;
        public static isPasswordProperty: NodeFactory;
        public static textProperty: NodeFactory;
        public static textColorProperty: NodeFactory;
        public static characterSpacingProperty: NodeFactory;
        public static horizontalTextAlignmentProperty: NodeFactory;
        public static verticalTextAlignmentProperty: NodeFactory;
        public static fontFamilyProperty: NodeFactory;
        public static fontSizeProperty: NodeFactory;
        public static fontAttributesProperty: NodeFactory;
        public static isTextPredictionEnabledProperty: NodeFactory;
        public static cursorPositionProperty: NodeFactory;
        public static selectionLengthProperty: NodeFactory;
        public static clearButtonVisibilityProperty: NodeFactory;
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
        public returnCommand: any;
        public returnCommandParameter: any;
        public clearButtonVisibility: "Never" | "WhileEditing" | string | number | null | undefined | Bind;
    }
    export declare class FileImageSource extends ImageSource {
        public static fileProperty: NodeFactory;
        public isEmpty: boolean | null | Bind;
        public file: string | null | Bind;
    }
    export declare class FlexLayout extends RootObject {
        public static order: AttachedNode;
        public static grow: AttachedNode;
        public static shrink: AttachedNode;
        public static alignSelf: AttachedNode;
        public static basis: AttachedNode;
        public static directionProperty: NodeFactory;
        public static justifyContentProperty: NodeFactory;
        public static alignContentProperty: NodeFactory;
        public static alignItemsProperty: NodeFactory;
        public static positionProperty: NodeFactory;
        public static wrapProperty: NodeFactory;
        public static orderProperty: NodeFactory;
        public static growProperty: NodeFactory;
        public static shrinkProperty: NodeFactory;
        public static alignSelfProperty: NodeFactory;
        public static basisProperty: NodeFactory;
        public direction: "Row" | "RowReverse" | "Column" | "ColumnReverse" | string | number | null | undefined | Bind;
        public justifyContent: "Center" | "Start" | "End" | "SpaceBetween" | "SpaceAround" | "SpaceEvenly" | string | number | null | undefined | Bind;
        public alignContent: "Stretch" | "Center" | "Start" | "End" | "SpaceBetween" | "SpaceAround" | "SpaceEvenly" | string | number | null | undefined | Bind;
        public alignItems: "Stretch" | "Center" | "Start" | "End" | string | number | null | undefined | Bind;
        public position: "Relative" | "Absolute" | string | number | null | undefined | Bind;
        public wrap: "NoWrap" | "Wrap" | "Reverse" | string | number | null | undefined | Bind;
    }
    export declare class FlyoutPage extends Page {
        public static isGestureEnabledProperty: NodeFactory;
        public static isPresentedProperty: NodeFactory;
        public static flyoutLayoutBehaviorProperty: NodeFactory;
        public detail: Page;
        public isGestureEnabled: boolean | null | Bind;
        public isPresented: boolean | null | Bind;
        public flyout: Page;
        public flyoutLayoutBehavior: "Default" | "SplitOnLandscape" | "Split" | "Popover" | "SplitOnPortrait" | string | number | null | undefined | Bind;
        public canChangeIsPresented: boolean | null | Bind;
        public detailBounds: RootObject;
        public flyoutBounds: RootObject;
        public shouldShowSplitMode: boolean | null | Bind;
    }
    export declare class MasterDetailPage extends FlyoutPage {
        public static masterBehaviorProperty: NodeFactory;
        public master: Page;
        public masterBounds: RootObject;
        public masterBehavior: "Default" | "SplitOnLandscape" | "Split" | "Popover" | "SplitOnPortrait" | string | number | null | undefined | Bind;
    }
    export declare class FontImageSource extends ImageSource {
        public static colorProperty: NodeFactory;
        public static fontFamilyProperty: NodeFactory;
        public static glyphProperty: NodeFactory;
        public static sizeProperty: NodeFactory;
        public isEmpty: boolean | null | Bind;
        public color: RootObject;
        public fontFamily: string | null | Bind;
        public glyph: string | null | Bind;
        public size: number | null | Bind;
    }
    export declare class FormattedString extends Element {
        public static spans: AttachedNode;
    }
    export declare class Frame extends ContentView {
        public static outlineColorProperty: NodeFactory;
        public static borderColorProperty: NodeFactory;
        public static hasShadowProperty: NodeFactory;
        public static cornerRadiusProperty: NodeFactory;
        public hasShadow: boolean | null | Bind;
        public outlineColor: RootObject;
        public borderColor: RootObject;
        public cornerRadius: number | null | Bind;
    }
    export declare class GestureElement extends Element {
        public static gestureRecognizers: AttachedNode;
    }
    export declare class GestureRecognizer extends Element {
    }
    export declare class GradientBrush extends Brush {
        public static gradientStopsProperty: NodeFactory;
        public static gradientStops: AttachedNode;
    }
    export declare class GradientStop extends Element {
        public static colorProperty: NodeFactory;
        public static offsetProperty: NodeFactory;
        public color: RootObject;
        public offset: number | null | Bind;
    }
    export declare class Grid extends RootObject {
        public static column: AttachedNode;
        public static columnSpan: AttachedNode;
        public static row: AttachedNode;
        public static rowSpan: AttachedNode;
        public static rowProperty: NodeFactory;
        public static rowSpanProperty: NodeFactory;
        public static columnProperty: NodeFactory;
        public static columnSpanProperty: NodeFactory;
        public static rowSpacingProperty: NodeFactory;
        public static columnSpacingProperty: NodeFactory;
        public static columnDefinitionsProperty: NodeFactory;
        public static rowDefinitionsProperty: NodeFactory;
        public children: RootObject;
        public static columnDefinitions: AttachedNode;
        public columnSpacing: number | null | Bind;
        public static rowDefinitions: AttachedNode;
        public rowSpacing: number | null | Bind;
    }
    export declare class HtmlWebViewSource extends WebViewSource {
        public static htmlProperty: NodeFactory;
        public static baseUrlProperty: NodeFactory;
        public baseUrl: string | null | Bind;
        public html: string | null | Bind;
    }
    export declare class Image extends View {
        public static sourceProperty: NodeFactory;
        public static aspectProperty: NodeFactory;
        public static isOpaqueProperty: NodeFactory;
        public static isLoadingProperty: NodeFactory;
        public static isAnimationPlayingProperty: NodeFactory;
        public aspect: "AspectFit" | "AspectFill" | "Fill" | string | number | null | undefined | Bind;
        public isLoading: boolean | null | Bind;
        public isOpaque: boolean | null | Bind;
        public isAnimationPlaying: boolean | null | Bind;
        public source: ImageSource;
    }
    export declare class ImageButton extends View {
        public static commandProperty: NodeFactory;
        public static commandParameterProperty: NodeFactory;
        public static cornerRadiusProperty: NodeFactory;
        public static borderWidthProperty: NodeFactory;
        public static borderColorProperty: NodeFactory;
        public static sourceProperty: NodeFactory;
        public static aspectProperty: NodeFactory;
        public static isOpaqueProperty: NodeFactory;
        public static isLoadingProperty: NodeFactory;
        public static isPressedProperty: NodeFactory;
        public static paddingProperty: NodeFactory;
        public borderColor: RootObject;
        public cornerRadius: number | null | Bind;
        public borderWidth: number | null | Bind;
        public aspect: "AspectFit" | "AspectFill" | "Fill" | string | number | null | undefined | Bind;
        public isLoading: boolean | null | Bind;
        public isPressed: boolean | null | Bind;
        public isOpaque: boolean | null | Bind;
        public command: any;
        public commandParameter: any;
        public source: ImageSource;
        public padding: RootObject;
    }
    export declare class ImageSource extends Element {
        public isEmpty: boolean | null | Bind;
    }
    export declare class IndicatorView extends TemplatedView {
        public static indicatorsShapeProperty: NodeFactory;
        public static positionProperty: NodeFactory;
        public static countProperty: NodeFactory;
        public static maximumVisibleProperty: NodeFactory;
        public static indicatorTemplateProperty: NodeFactory;
        public static hideSingleProperty: NodeFactory;
        public static indicatorColorProperty: NodeFactory;
        public static selectedIndicatorColorProperty: NodeFactory;
        public static indicatorSizeProperty: NodeFactory;
        public static itemsSourceProperty: NodeFactory;
        public indicatorsShape: "Circle" | "Square" | string | number | null | undefined | Bind;
        public indicatorLayout: RootObject;
        public position: number | null | Bind;
        public count: number | null | Bind;
        public maximumVisible: number | null | Bind;
        public indicatorTemplate: DataTemplate;
        public hideSingle: boolean | null | Bind;
        public indicatorColor: RootObject;
        public selectedIndicatorColor: RootObject;
        public indicatorSize: number | null | Bind;
        public itemsSource: any;
    }
    export declare class InputView extends View {
        public static textProperty: NodeFactory;
        public static keyboardProperty: NodeFactory;
        public static isSpellCheckEnabledProperty: NodeFactory;
        public static maxLengthProperty: NodeFactory;
        public static isReadOnlyProperty: NodeFactory;
        public static placeholderProperty: NodeFactory;
        public static placeholderColorProperty: NodeFactory;
        public static textColorProperty: NodeFactory;
        public static characterSpacingProperty: NodeFactory;
        public static textTransformProperty: NodeFactory;
        public maxLength: number | null | Bind;
        public text: string | null | Bind;
        public keyboard: RootObject;
        public isSpellCheckEnabled: boolean | null | Bind;
        public isReadOnly: boolean | null | Bind;
        public placeholder: string | null | Bind;
        public placeholderColor: RootObject;
        public textColor: RootObject;
        public characterSpacing: number | null | Bind;
        public textTransform: "None" | "Default" | "Lowercase" | "Uppercase" | string | number | null | undefined | Bind;
    }
    export declare class Behavior extends BindableObject {
    }
    export declare class Behavior$Generic extends Behavior {
    }
    export declare class DataTrigger extends TriggerBase {
        public binding: RootObject;
        public static setters: AttachedNode;
        public value: any;
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
        public property: RootObject;
        public static setters: AttachedNode;
        public value: any;
    }
    export declare class TriggerBase extends BindableObject {
        public static enterActions: AttachedNode;
        public static exitActions: AttachedNode;
        public isSealed: boolean | null | Bind;
        public targetType: any;
    }
    export declare class ItemsView$Generic extends View {
        public static itemsSourceProperty: NodeFactory;
        public static itemTemplateProperty: NodeFactory;
        public itemsSource: any;
        public itemTemplate: DataTemplate;
        public static templatedItems: AttachedNode;
    }
    export declare class CarouselView extends ItemsView {
        public static loopProperty: NodeFactory;
        public static peekAreaInsetsProperty: NodeFactory;
        public static visibleViewsProperty: NodeFactory;
        public static isDraggingProperty: NodeFactory;
        public static isBounceEnabledProperty: NodeFactory;
        public static isSwipeEnabledProperty: NodeFactory;
        public static isScrollAnimatedProperty: NodeFactory;
        public static currentItemProperty: NodeFactory;
        public static currentItemChangedCommandProperty: NodeFactory;
        public static currentItemChangedCommandParameterProperty: NodeFactory;
        public static positionProperty: NodeFactory;
        public static positionChangedCommandProperty: NodeFactory;
        public static positionChangedCommandParameterProperty: NodeFactory;
        public static itemsLayoutProperty: NodeFactory;
        public static currentItemVisualState: string | null | Bind;
        public static nextItemVisualState: string | null | Bind;
        public static previousItemVisualState: string | null | Bind;
        public static defaultItemVisualState: string | null | Bind;
        public loop: boolean | null | Bind;
        public peekAreaInsets: RootObject;
        public static visibleViews: AttachedNode;
        public isDragging: boolean | null | Bind;
        public isBounceEnabled: boolean | null | Bind;
        public isSwipeEnabled: boolean | null | Bind;
        public isScrollAnimated: boolean | null | Bind;
        public currentItem: any;
        public currentItemChangedCommand: any;
        public currentItemChangedCommandParameter: any;
        public position: number | null | Bind;
        public positionChangedCommand: any;
        public positionChangedCommandParameter: any;
        public itemsLayout: LinearItemsLayout;
        public indicatorView: IndicatorView;
        public isScrolling: boolean | null | Bind;
        public animatePositionChanges: boolean | null | Bind;
        public animateCurrentItemChanges: boolean | null | Bind;
    }
    export declare class CollectionView extends GroupableItemsView {
    }
    export declare class GridItemsLayout extends ItemsLayout {
        public static spanProperty: NodeFactory;
        public static verticalItemSpacingProperty: NodeFactory;
        public static horizontalItemSpacingProperty: NodeFactory;
        public span: number | null | Bind;
        public verticalItemSpacing: number | null | Bind;
        public horizontalItemSpacing: number | null | Bind;
    }
    export declare class GroupableItemsView extends SelectableItemsView {
        public static isGroupedProperty: NodeFactory;
        public static groupHeaderTemplateProperty: NodeFactory;
        public static groupFooterTemplateProperty: NodeFactory;
        public isGrouped: boolean | null | Bind;
        public groupHeaderTemplate: DataTemplate;
        public groupFooterTemplate: DataTemplate;
    }
    export declare class ItemsLayout extends BindableObject {
        public static snapPointsAlignmentProperty: NodeFactory;
        public static snapPointsTypeProperty: NodeFactory;
        public orientation: "Vertical" | "Horizontal" | string | number | null | undefined | Bind;
        public snapPointsAlignment: "Start" | "Center" | "End" | string | number | null | undefined | Bind;
        public snapPointsType: "None" | "Mandatory" | "MandatorySingle" | string | number | null | undefined | Bind;
    }
    export declare class ItemsView extends View {
        public static emptyViewProperty: NodeFactory;
        public static emptyViewTemplateProperty: NodeFactory;
        public static itemsSourceProperty: NodeFactory;
        public static remainingItemsThresholdReachedCommandProperty: NodeFactory;
        public static remainingItemsThresholdReachedCommandParameterProperty: NodeFactory;
        public static horizontalScrollBarVisibilityProperty: NodeFactory;
        public static verticalScrollBarVisibilityProperty: NodeFactory;
        public static remainingItemsThresholdProperty: NodeFactory;
        public static itemTemplateProperty: NodeFactory;
        public static itemsUpdatingScrollModeProperty: NodeFactory;
        public emptyView: any;
        public emptyViewTemplate: DataTemplate;
        public itemsSource: any;
        public remainingItemsThresholdReachedCommand: any;
        public remainingItemsThresholdReachedCommandParameter: any;
        public horizontalScrollBarVisibility: "Default" | "Always" | "Never" | string | number | null | undefined | Bind;
        public verticalScrollBarVisibility: "Default" | "Always" | "Never" | string | number | null | undefined | Bind;
        public remainingItemsThreshold: number | null | Bind;
        public itemTemplate: DataTemplate;
        public itemsUpdatingScrollMode: "KeepItemsInView" | "KeepScrollOffset" | "KeepLastItemInView" | string | number | null | undefined | Bind;
    }
    export declare class LinearItemsLayout extends ItemsLayout {
        public static vertical: RootObject;
        public static horizontal: RootObject;
        public static carouselVertical: RootObject;
        public static itemSpacingProperty: NodeFactory;
        public itemSpacing: number | null | Bind;
    }
    export declare class SelectableItemsView extends StructuredItemsView {
        public static selectionModeProperty: NodeFactory;
        public static selectedItemProperty: NodeFactory;
        public static selectedItemsProperty: NodeFactory;
        public static selectionChangedCommandProperty: NodeFactory;
        public static selectionChangedCommandParameterProperty: NodeFactory;
        public selectedItem: any;
        public static selectedItems: AttachedNode;
        public selectionChangedCommand: any;
        public selectionChangedCommandParameter: any;
        public selectionMode: "None" | "Single" | "Multiple" | string | number | null | undefined | Bind;
    }
    export declare class StructuredItemsView extends ItemsView {
        public static headerProperty: NodeFactory;
        public static headerTemplateProperty: NodeFactory;
        public static footerProperty: NodeFactory;
        public static footerTemplateProperty: NodeFactory;
        public static itemsLayoutProperty: NodeFactory;
        public static itemSizingStrategyProperty: NodeFactory;
        public header: any;
        public headerTemplate: DataTemplate;
        public footer: any;
        public footerTemplate: DataTemplate;
        public itemsLayout: RootObject;
        public itemSizingStrategy: "MeasureAllItems" | "MeasureFirstItem" | string | number | null | undefined | Bind;
    }
    export declare class Label extends View {
        public static horizontalTextAlignmentProperty: NodeFactory;
        public static xAlignProperty: NodeFactory;
        public static verticalTextAlignmentProperty: NodeFactory;
        public static yAlignProperty: NodeFactory;
        public static textColorProperty: NodeFactory;
        public static characterSpacingProperty: NodeFactory;
        public static fontProperty: NodeFactory;
        public static textProperty: NodeFactory;
        public static fontFamilyProperty: NodeFactory;
        public static fontSizeProperty: NodeFactory;
        public static fontAttributesProperty: NodeFactory;
        public static textTransformProperty: NodeFactory;
        public static textDecorationsProperty: NodeFactory;
        public static formattedTextProperty: NodeFactory;
        public static lineBreakModeProperty: NodeFactory;
        public static lineHeightProperty: NodeFactory;
        public static maxLinesProperty: NodeFactory;
        public static paddingProperty: NodeFactory;
        public static textTypeProperty: NodeFactory;
        public textTransform: "None" | "Default" | "Lowercase" | "Uppercase" | string | number | null | undefined | Bind;
        public font: RootObject;
        public formattedText: FormattedString;
        public horizontalTextAlignment: "Start" | "Center" | "End" | string | number | null | undefined | Bind;
        public lineBreakMode: "NoWrap" | "WordWrap" | "CharacterWrap" | "HeadTruncation" | "TailTruncation" | "MiddleTruncation" | string | number | null | undefined | Bind;
        public text: string | null | Bind;
        public textColor: RootObject;
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
    export declare class Layout$Generic extends Layout {
        public static children: AttachedNode;
    }
    export declare class Layout extends View {
        public static outChildIntoBoundingRegion: AttachedNode;
        public static isClippedToBoundsProperty: NodeFactory;
        public static cascadeInputTransparentProperty: NodeFactory;
        public static paddingProperty: NodeFactory;
        public isClippedToBounds: boolean | null | Bind;
        public padding: RootObject;
        public cascadeInputTransparent: boolean | null | Bind;
        public children: any;
    }
    export declare class LinearGradientBrush extends GradientBrush {
        public static startPointProperty: NodeFactory;
        public static endPointProperty: NodeFactory;
        public isEmpty: boolean | null | Bind;
        public startPoint: RootObject;
        public endPoint: RootObject;
    }
    export declare class ListView extends RootObject {
        public static isPullToRefreshEnabledProperty: NodeFactory;
        public static isRefreshingProperty: NodeFactory;
        public static refreshCommandProperty: NodeFactory;
        public static headerProperty: NodeFactory;
        public static headerTemplateProperty: NodeFactory;
        public static footerProperty: NodeFactory;
        public static footerTemplateProperty: NodeFactory;
        public static selectedItemProperty: NodeFactory;
        public static selectionModeProperty: NodeFactory;
        public static hasUnevenRowsProperty: NodeFactory;
        public static rowHeightProperty: NodeFactory;
        public static groupHeaderTemplateProperty: NodeFactory;
        public static isGroupingEnabledProperty: NodeFactory;
        public static separatorVisibilityProperty: NodeFactory;
        public static separatorColorProperty: NodeFactory;
        public static refreshControlColorProperty: NodeFactory;
        public static horizontalScrollBarVisibilityProperty: NodeFactory;
        public static verticalScrollBarVisibilityProperty: NodeFactory;
        public footer: any;
        public footerTemplate: DataTemplate;
        public groupDisplayBinding: RootObject;
        public groupHeaderTemplate: DataTemplate;
        public groupShortNameBinding: RootObject;
        public hasUnevenRows: boolean | null | Bind;
        public header: any;
        public headerTemplate: DataTemplate;
        public isGroupingEnabled: boolean | null | Bind;
        public isPullToRefreshEnabled: boolean | null | Bind;
        public isRefreshing: boolean | null | Bind;
        public refreshCommand: any;
        public rowHeight: number | null | Bind;
        public selectedItem: any;
        public selectionMode: "None" | "Single" | string | number | null | undefined | Bind;
        public separatorColor: RootObject;
        public refreshControlColor: RootObject;
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
        public static acceleratorProperty: NodeFactory;
        public static commandProperty: NodeFactory;
        public static commandParameterProperty: NodeFactory;
        public static isDestructiveProperty: NodeFactory;
        public static iconImageSourceProperty: NodeFactory;
        public static iconProperty: NodeFactory;
        public static isEnabledProperty: NodeFactory;
        public static textProperty: NodeFactory;
        public command: any;
        public commandParameter: any;
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
        public static itemsSourceProperty: NodeFactory;
        public static itemTemplateProperty: NodeFactory;
        public static selectedItemProperty: NodeFactory;
        public itemsSource: any;
        public itemTemplate: DataTemplate;
        public selectedItem: any;
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
        public static backButtonTitleProperty: NodeFactory;
        public static hasNavigationBarProperty: NodeFactory;
        public static hasBackButtonProperty: NodeFactory;
        public static tintProperty: NodeFactory;
        public static barBackgroundColorProperty: NodeFactory;
        public static barBackgroundProperty: NodeFactory;
        public static barTextColorProperty: NodeFactory;
        public static titleIconImageSourceProperty: NodeFactory;
        public static titleIconProperty: NodeFactory;
        public static iconColorProperty: NodeFactory;
        public static titleViewProperty: NodeFactory;
        public static currentPageProperty: NodeFactory;
        public static rootPageProperty: NodeFactory;
        public barBackgroundColor: RootObject;
        public barBackground: Brush;
        public barTextColor: RootObject;
        public tint: RootObject;
        public pages: any;
        public stackDepth: number | null | Bind;
        public currentPage: Page;
        public rootPage: Page;
    }
    export declare class OpenGLView extends View {
        public static hasRenderLoopProperty: NodeFactory;
        public hasRenderLoop: boolean | null | Bind;
        public onDisplay: any;
    }
    export declare class OrientationStateTrigger extends StateTriggerBase {
        public static orientationProperty: NodeFactory;
        public orientation: "Portrait" | "Landscape" | "PortraitUp" | "PortraitDown" | "LandscapeLeft" | "LandscapeRight" | "Other" | string | number | null | undefined | Bind;
    }
    export declare class Page extends VisualElement {
        public static backgroundImageSourceProperty: NodeFactory;
        public static backgroundImageProperty: NodeFactory;
        public static isBusyProperty: NodeFactory;
        public static paddingProperty: NodeFactory;
        public static titleProperty: NodeFactory;
        public static iconImageSourceProperty: NodeFactory;
        public static iconProperty: NodeFactory;
        public static busySetSignalName: string | null | Bind;
        public static alertSignalName: string | null | Bind;
        public static promptSignalName: string | null | Bind;
        public static actionSheetSignalName: string | null | Bind;
        public backgroundImage: string | null | Bind;
        public backgroundImageSource: ImageSource;
        public icon: FileImageSource;
        public iconImageSource: ImageSource;
        public isBusy: boolean | null | Bind;
        public padding: RootObject;
        public title: string | null | Bind;
        public static toolbarItems: AttachedNode;
        public containerArea: RootObject;
        public ignoresContainerArea: boolean | null | Bind;
        public static internalChildren: AttachedNode;
    }
    export declare class PanGestureRecognizer extends GestureRecognizer {
        public static touchPointsProperty: NodeFactory;
        public touchPoints: number | null | Bind;
    }
    export declare class Picker extends View {
        public static textColorProperty: NodeFactory;
        public static characterSpacingProperty: NodeFactory;
        public static titleProperty: NodeFactory;
        public static titleColorProperty: NodeFactory;
        public static selectedIndexProperty: NodeFactory;
        public static itemsSourceProperty: NodeFactory;
        public static selectedItemProperty: NodeFactory;
        public static fontFamilyProperty: NodeFactory;
        public static fontSizeProperty: NodeFactory;
        public static fontAttributesProperty: NodeFactory;
        public static horizontalTextAlignmentProperty: NodeFactory;
        public static verticalTextAlignmentProperty: NodeFactory;
        public static textTransformProperty: NodeFactory;
        public fontAttributes: "None" | "Bold" | "Italic" | string | number | null | undefined | Bind;
        public fontFamily: string | null | Bind;
        public fontSize: number | null | Bind;
        public textTransform: "None" | "Default" | "Lowercase" | "Uppercase" | string | number | null | undefined | Bind;
        public static items: AttachedNode;
        public static itemsSource: AttachedNode;
        public selectedIndex: number | null | Bind;
        public selectedItem: any;
        public textColor: RootObject;
        public characterSpacing: number | null | Bind;
        public title: string | null | Bind;
        public titleColor: RootObject;
        public horizontalTextAlignment: "Start" | "Center" | "End" | string | number | null | undefined | Bind;
        public verticalTextAlignment: "Start" | "Center" | "End" | string | number | null | undefined | Bind;
        public itemDisplayBinding: RootObject;
    }
    export declare class PinchGestureRecognizer extends GestureRecognizer {
        public isPinching: boolean | null | Bind;
    }
    export declare class ProgressBar extends View {
        public static progressColorProperty: NodeFactory;
        public static progressProperty: NodeFactory;
        public progressColor: RootObject;
        public progress: number | null | Bind;
    }
    export declare class RadialGradientBrush extends GradientBrush {
        public static centerProperty: NodeFactory;
        public static radiusProperty: NodeFactory;
        public isEmpty: boolean | null | Bind;
        public center: RootObject;
        public radius: number | null | Bind;
    }
    export declare class RadioButton extends TemplatedView {
        public static defaultTemplate: ControlTemplate;
        public static contentProperty: NodeFactory;
        public static valueProperty: NodeFactory;
        public static isCheckedProperty: NodeFactory;
        public static groupNameProperty: NodeFactory;
        public static textColorProperty: NodeFactory;
        public static characterSpacingProperty: NodeFactory;
        public static textTransformProperty: NodeFactory;
        public static fontAttributesProperty: NodeFactory;
        public static fontFamilyProperty: NodeFactory;
        public static fontSizeProperty: NodeFactory;
        public static borderColorProperty: NodeFactory;
        public static cornerRadiusProperty: NodeFactory;
        public static borderWidthProperty: NodeFactory;
        public static checkedVisualState: string | null | Bind;
        public static uncheckedVisualState: string | null | Bind;
        public static templateRootName: string | null | Bind;
        public static checkedIndicator: string | null | Bind;
        public static uncheckedButton: string | null | Bind;
        public content: any;
        public value: any;
        public isChecked: boolean | null | Bind;
        public groupName: string | null | Bind;
        public textColor: RootObject;
        public characterSpacing: number | null | Bind;
        public textTransform: "None" | "Default" | "Lowercase" | "Uppercase" | string | number | null | undefined | Bind;
        public fontAttributes: "None" | "Bold" | "Italic" | string | number | null | undefined | Bind;
        public fontFamily: string | null | Bind;
        public fontSize: number | null | Bind;
        public borderWidth: number | null | Bind;
        public borderColor: RootObject;
        public cornerRadius: number | null | Bind;
    }
    export declare class RadioButtonGroup extends RootObject {
        public static groupName: AttachedNode;
        public static selectedValue: AttachedNode;
        public static groupNameProperty: NodeFactory;
        public static selectedValueProperty: NodeFactory;
    }
    export declare class RefreshView extends ContentView {
        public static isRefreshingProperty: NodeFactory;
        public static commandProperty: NodeFactory;
        public static commandParameterProperty: NodeFactory;
        public static refreshColorProperty: NodeFactory;
        public isRefreshing: boolean | null | Bind;
        public command: any;
        public commandParameter: any;
        public refreshColor: RootObject;
    }
    export declare class RelativeLayout extends RootObject {
        public static boundsConstraint: AttachedNode;
        public static heightConstraint: AttachedNode;
        public static widthConstraint: AttachedNode;
        public static xConstraint: AttachedNode;
        public static yConstraint: AttachedNode;
        public static xConstraintProperty: NodeFactory;
        public static yConstraintProperty: NodeFactory;
        public static widthConstraintProperty: NodeFactory;
        public static heightConstraintProperty: NodeFactory;
        public static boundsConstraintProperty: NodeFactory;
        public children: RootObject;
    }
    export declare class Routing extends RootObject {
        public static route: AttachedNode;
        public static routeProperty: NodeFactory;
    }
    export declare class RowDefinition extends BindableObject {
        public static heightProperty: NodeFactory;
        public height: RootObject;
    }
    export declare class ScrollView extends Layout {
        public static orientationProperty: NodeFactory;
        public static scrollXProperty: NodeFactory;
        public static scrollYProperty: NodeFactory;
        public static contentSizeProperty: NodeFactory;
        public static horizontalScrollBarVisibilityProperty: NodeFactory;
        public static verticalScrollBarVisibilityProperty: NodeFactory;
        public layoutAreaOverride: RootObject;
        public content: View;
        public contentSize: RootObject;
        public orientation: "Vertical" | "Horizontal" | "Both" | "Neither" | string | number | null | undefined | Bind;
        public scrollX: number | null | Bind;
        public scrollY: number | null | Bind;
        public horizontalScrollBarVisibility: "Default" | "Always" | "Never" | string | number | null | undefined | Bind;
        public verticalScrollBarVisibility: "Default" | "Always" | "Never" | string | number | null | undefined | Bind;
    }
    export declare class SearchBar extends InputView {
        public static searchCommandProperty: NodeFactory;
        public static searchCommandParameterProperty: NodeFactory;
        public static textProperty: NodeFactory;
        public static cancelButtonColorProperty: NodeFactory;
        public static placeholderProperty: NodeFactory;
        public static placeholderColorProperty: NodeFactory;
        public static fontFamilyProperty: NodeFactory;
        public static fontSizeProperty: NodeFactory;
        public static fontAttributesProperty: NodeFactory;
        public static horizontalTextAlignmentProperty: NodeFactory;
        public static verticalTextAlignmentProperty: NodeFactory;
        public static textColorProperty: NodeFactory;
        public static characterSpacingProperty: NodeFactory;
        public cancelButtonColor: RootObject;
        public horizontalTextAlignment: "Start" | "Center" | "End" | string | number | null | undefined | Bind;
        public verticalTextAlignment: "Start" | "Center" | "End" | string | number | null | undefined | Bind;
        public searchCommand: any;
        public searchCommandParameter: any;
        public fontAttributes: "None" | "Bold" | "Italic" | string | number | null | undefined | Bind;
        public fontFamily: string | null | Bind;
        public fontSize: number | null | Bind;
    }
    export declare class BackButtonBehavior extends BindableObject {
        public static commandParameterProperty: NodeFactory;
        public static commandProperty: NodeFactory;
        public static iconOverrideProperty: NodeFactory;
        public static isEnabledProperty: NodeFactory;
        public static textOverrideProperty: NodeFactory;
        public command: any;
        public commandParameter: any;
        public iconOverride: ImageSource;
        public isEnabled: boolean | null | Bind;
        public textOverride: string | null | Bind;
    }
    export declare class BaseShellItem extends NavigableElement {
        public static flyoutIconProperty: NodeFactory;
        public static iconProperty: NodeFactory;
        public static isCheckedProperty: NodeFactory;
        public static isEnabledProperty: NodeFactory;
        public static titleProperty: NodeFactory;
        public static tabIndexProperty: NodeFactory;
        public static isTabStopProperty: NodeFactory;
        public static isVisibleProperty: NodeFactory;
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
        public static navigationProperty: NodeFactory;
        public static styleProperty: NodeFactory;
        public navigation: RootObject;
        public style: RootObject;
        public static styleClass: AttachedNode;
        public static class: AttachedNode;
        public navigationProxy: RootObject;
    }
    export declare class SearchHandler extends BindableObject {
        public static isFocusedPropertyKey: RootObject;
        public static isFocusedProperty: NodeFactory;
        public static keyboardProperty: NodeFactory;
        public static horizontalTextAlignmentProperty: NodeFactory;
        public static verticalTextAlignmentProperty: NodeFactory;
        public static textColorProperty: NodeFactory;
        public static characterSpacingProperty: NodeFactory;
        public static cancelButtonColorProperty: NodeFactory;
        public static fontFamilyProperty: NodeFactory;
        public static fontSizeProperty: NodeFactory;
        public static fontAttributesProperty: NodeFactory;
        public static placeholderProperty: NodeFactory;
        public static placeholderColorProperty: NodeFactory;
        public static textTransformProperty: NodeFactory;
        public static backgroundColorProperty: NodeFactory;
        public static clearIconHelpTextProperty: NodeFactory;
        public static clearIconNameProperty: NodeFactory;
        public static clearIconProperty: NodeFactory;
        public static clearPlaceholderCommandParameterProperty: NodeFactory;
        public static clearPlaceholderCommandProperty: NodeFactory;
        public static clearPlaceholderEnabledProperty: NodeFactory;
        public static clearPlaceholderHelpTextProperty: NodeFactory;
        public static clearPlaceholderIconProperty: NodeFactory;
        public static clearPlaceholderNameProperty: NodeFactory;
        public static commandParameterProperty: NodeFactory;
        public static commandProperty: NodeFactory;
        public static displayMemberNameProperty: NodeFactory;
        public static isSearchEnabledProperty: NodeFactory;
        public static itemsSourceProperty: NodeFactory;
        public static itemTemplateProperty: NodeFactory;
        public static queryIconHelpTextProperty: NodeFactory;
        public static queryIconNameProperty: NodeFactory;
        public static queryIconProperty: NodeFactory;
        public static queryProperty: NodeFactory;
        public static searchBoxVisibilityProperty: NodeFactory;
        public static selectedItemProperty: NodeFactory;
        public static showsResultsProperty: NodeFactory;
        public isFocused: boolean | null | Bind;
        public keyboard: RootObject;
        public horizontalTextAlignment: "Start" | "Center" | "End" | string | number | null | undefined | Bind;
        public verticalTextAlignment: "Start" | "Center" | "End" | string | number | null | undefined | Bind;
        public textColor: RootObject;
        public textTransform: "None" | "Default" | "Lowercase" | "Uppercase" | string | number | null | undefined | Bind;
        public cancelButtonColor: RootObject;
        public fontAttributes: "None" | "Bold" | "Italic" | string | number | null | undefined | Bind;
        public fontFamily: string | null | Bind;
        public characterSpacing: number | null | Bind;
        public fontSize: number | null | Bind;
        public placeholderColor: RootObject;
        public placeholder: string | null | Bind;
        public backgroundColor: RootObject;
        public clearIcon: ImageSource;
        public clearIconHelpText: string | null | Bind;
        public clearIconName: string | null | Bind;
        public clearPlaceholderCommand: any;
        public clearPlaceholderCommandParameter: any;
        public clearPlaceholderEnabled: boolean | null | Bind;
        public clearPlaceholderHelpText: string | null | Bind;
        public clearPlaceholderIcon: ImageSource;
        public clearPlaceholderName: string | null | Bind;
        public command: any;
        public commandParameter: any;
        public displayMemberName: string | null | Bind;
        public isSearchEnabled: boolean | null | Bind;
        public itemsSource: any;
        public itemTemplate: DataTemplate;
        public query: string | null | Bind;
        public queryIcon: ImageSource;
        public queryIconHelpText: string | null | Bind;
        public queryIconName: string | null | Bind;
        public searchBoxVisibility: "Hidden" | "Collapsible" | "Expanded" | string | number | null | undefined | Bind;
        public selectedItem: any;
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
        public static backButtonBehaviorProperty: NodeFactory;
        public static presentationModeProperty: NodeFactory;
        public static flyoutBehaviorProperty: NodeFactory;
        public static navBarIsVisibleProperty: NodeFactory;
        public static navBarHasShadowProperty: NodeFactory;
        public static searchHandlerProperty: NodeFactory;
        public static flyoutItemIsVisibleProperty: NodeFactory;
        public static tabBarIsVisibleProperty: NodeFactory;
        public static titleViewProperty: NodeFactory;
        public static menuItemTemplateProperty: NodeFactory;
        public static itemTemplateProperty: NodeFactory;
        public static backgroundColorProperty: NodeFactory;
        public static disabledColorProperty: NodeFactory;
        public static foregroundColorProperty: NodeFactory;
        public static tabBarBackgroundColorProperty: NodeFactory;
        public static tabBarDisabledColorProperty: NodeFactory;
        public static tabBarForegroundColorProperty: NodeFactory;
        public static tabBarTitleColorProperty: NodeFactory;
        public static tabBarUnselectedColorProperty: NodeFactory;
        public static titleColorProperty: NodeFactory;
        public static unselectedColorProperty: NodeFactory;
        public static flyoutBackdropProperty: NodeFactory;
        public static flyoutWidthProperty: NodeFactory;
        public static flyoutHeightProperty: NodeFactory;
        public static currentItemProperty: NodeFactory;
        public static currentStateProperty: NodeFactory;
        public static flyoutBackgroundImageProperty: NodeFactory;
        public static flyoutBackgroundImageAspectProperty: NodeFactory;
        public static flyoutBackgroundColorProperty: NodeFactory;
        public static flyoutBackgroundProperty: NodeFactory;
        public static flyoutHeaderBehaviorProperty: NodeFactory;
        public static flyoutHeaderProperty: NodeFactory;
        public static flyoutFooterProperty: NodeFactory;
        public static flyoutHeaderTemplateProperty: NodeFactory;
        public static flyoutFooterTemplateProperty: NodeFactory;
        public static flyoutIsPresentedProperty: NodeFactory;
        public static itemsProperty: NodeFactory;
        public static flyoutIconProperty: NodeFactory;
        public static flyoutVerticalScrollModeProperty: NodeFactory;
        public static flyoutContentProperty: NodeFactory;
        public static flyoutContentTemplateProperty: NodeFactory;
        public currentPage: Page;
        public flyoutVerticalScrollMode: "Disabled" | "Enabled" | "Auto" | string | number | null | undefined | Bind;
        public flyoutIcon: ImageSource;
        public currentItem: ShellItem;
        public currentState: RootObject;
        public flyoutBackgroundImage: ImageSource;
        public flyoutBackgroundImageAspect: "AspectFit" | "AspectFill" | "Fill" | string | number | null | undefined | Bind;
        public flyoutBackgroundColor: RootObject;
        public flyoutBackground: Brush;
        public flyoutBackdrop: Brush;
        public flyoutWidth: number | null | Bind;
        public flyoutHeight: number | null | Bind;
        public flyoutBehavior: "Disabled" | "Flyout" | "Locked" | string | number | null | undefined | Bind;
        public flyoutHeader: any;
        public flyoutFooter: any;
        public flyoutHeaderBehavior: "Default" | "Fixed" | "Scroll" | "CollapseOnScroll" | string | number | null | undefined | Bind;
        public flyoutHeaderTemplate: DataTemplate;
        public flyoutFooterTemplate: DataTemplate;
        public flyoutIsPresented: boolean | null | Bind;
        public static items: AttachedNode;
        public itemTemplate: DataTemplate;
        public menuItemTemplate: DataTemplate;
        public flyoutItems: any;
        public flyoutContent: any;
        public flyoutContentTemplate: DataTemplate;
    }
    export declare class ShellContent extends BaseShellItem {
        public static menuItemsProperty: NodeFactory;
        public static contentProperty: NodeFactory;
        public static contentTemplateProperty: NodeFactory;
        public static menuItems: AttachedNode;
        public content: any;
        public contentTemplate: DataTemplate;
    }
    export declare class ShellGroupItem extends BaseShellItem {
        public static flyoutDisplayOptionsProperty: NodeFactory;
        public flyoutDisplayOptions: "AsSingleItem" | "AsMultipleItems" | string | number | null | undefined | Bind;
    }
    export declare class FlyoutItem extends ShellItem {
        public static isVisible: AttachedNode;
        public static isVisibleProperty: NodeFactory;
        public static labelStyle: string | null | Bind;
        public static imageStyle: string | null | Bind;
        public static layoutStyle: string | null | Bind;
    }
    export declare class TabBar extends ShellItem {
    }
    export declare class ShellItem extends ShellGroupItem {
        public static currentItemProperty: NodeFactory;
        public static itemsProperty: NodeFactory;
        public currentItem: ShellSection;
        public static items: AttachedNode;
    }
    export declare class Tab extends ShellSection {
    }
    export declare class ShellSection extends ShellGroupItem {
        public static currentItemProperty: NodeFactory;
        public static itemsProperty: NodeFactory;
        public currentItem: ShellContent;
        public static items: AttachedNode;
        public stack: any;
    }
    export declare class Slider extends View {
        public static minimumProperty: NodeFactory;
        public static maximumProperty: NodeFactory;
        public static valueProperty: NodeFactory;
        public static minimumTrackColorProperty: NodeFactory;
        public static maximumTrackColorProperty: NodeFactory;
        public static thumbColorProperty: NodeFactory;
        public static thumbImageSourceProperty: NodeFactory;
        public static thumbImageProperty: NodeFactory;
        public static dragStartedCommandProperty: NodeFactory;
        public static dragCompletedCommandProperty: NodeFactory;
        public minimumTrackColor: RootObject;
        public maximumTrackColor: RootObject;
        public thumbColor: RootObject;
        public thumbImageSource: ImageSource;
        public thumbImage: FileImageSource;
        public dragStartedCommand: any;
        public dragCompletedCommand: any;
        public maximum: number | null | Bind;
        public minimum: number | null | Bind;
        public value: number | null | Bind;
    }
    export declare class SolidColorBrush extends Brush {
        public static colorProperty: NodeFactory;
        public isEmpty: boolean | null | Bind;
        public color: RootObject;
    }
    export declare class Span extends GestureElement {
        public static styleProperty: NodeFactory;
        public static textDecorationsProperty: NodeFactory;
        public static textTransformProperty: NodeFactory;
        public static backgroundColorProperty: NodeFactory;
        public static textColorProperty: NodeFactory;
        public static characterSpacingProperty: NodeFactory;
        public static foregroundColorProperty: NodeFactory;
        public static textProperty: NodeFactory;
        public static fontProperty: NodeFactory;
        public static fontFamilyProperty: NodeFactory;
        public static fontSizeProperty: NodeFactory;
        public static fontAttributesProperty: NodeFactory;
        public static lineHeightProperty: NodeFactory;
        public style: RootObject;
        public backgroundColor: RootObject;
        public textColor: RootObject;
        public characterSpacing: number | null | Bind;
        public textTransform: "None" | "Default" | "Lowercase" | "Uppercase" | string | number | null | undefined | Bind;
        public foregroundColor: RootObject;
        public text: string | null | Bind;
        public font: RootObject;
        public fontAttributes: "None" | "Bold" | "Italic" | string | number | null | undefined | Bind;
        public fontFamily: string | null | Bind;
        public fontSize: number | null | Bind;
        public textDecorations: "None" | "Underline" | "Strikethrough" | string | number | null | undefined | Bind;
        public lineHeight: number | null | Bind;
    }
    export declare class StackLayout extends RootObject {
        public static orientationProperty: NodeFactory;
        public static spacingProperty: NodeFactory;
        public orientation: "Vertical" | "Horizontal" | string | number | null | undefined | Bind;
        public spacing: number | null | Bind;
    }
    export declare class StateTrigger extends StateTriggerBase {
        public static isActiveProperty: NodeFactory;
        public isActive: boolean | null | Bind;
    }
    export declare class StateTriggerBase extends BindableObject {
        public isActive: boolean | null | Bind;
        public isAttached: boolean | null | Bind;
    }
    export declare class Stepper extends View {
        public static maximumProperty: NodeFactory;
        public static minimumProperty: NodeFactory;
        public static valueProperty: NodeFactory;
        public static incrementProperty: NodeFactory;
        public static stepperPositionProperty: NodeFactory;
        public increment: number | null | Bind;
        public maximum: number | null | Bind;
        public minimum: number | null | Bind;
        public value: number | null | Bind;
        public stepperPosition: number | null | Bind;
    }
    export declare class StreamImageSource extends ImageSource {
        public static streamProperty: NodeFactory;
        public isEmpty: boolean | null | Bind;
        public stream: any;
    }
    export declare class SwipeGestureRecognizer extends GestureRecognizer {
        public static commandProperty: NodeFactory;
        public static commandParameterProperty: NodeFactory;
        public static directionProperty: NodeFactory;
        public static thresholdProperty: NodeFactory;
        public command: any;
        public commandParameter: any;
        public direction: "Right" | "Left" | "Up" | "Down" | string | number | null | undefined | Bind;
        public threshold: number | null | Bind;
    }
    export declare class SwipeItem extends MenuItem {
        public static backgroundColorProperty: NodeFactory;
        public static isVisibleProperty: NodeFactory;
        public backgroundColor: RootObject;
        public isVisible: boolean | null | Bind;
    }
    export declare class SwipeItems extends Element {
        public static modeProperty: NodeFactory;
        public static swipeBehaviorOnInvokedProperty: NodeFactory;
        public mode: "Reveal" | "Execute" | string | number | null | undefined | Bind;
        public swipeBehaviorOnInvoked: "Auto" | "Close" | "RemainOpen" | string | number | null | undefined | Bind;
        public item: RootObject;
        public count: number | null | Bind;
        public isReadOnly: boolean | null | Bind;
    }
    export declare class SwipeItemView extends ContentView {
        public static commandProperty: NodeFactory;
        public static commandParameterProperty: NodeFactory;
        public command: any;
        public commandParameter: any;
    }
    export declare class SwipeView extends ContentView {
        public static thresholdProperty: NodeFactory;
        public static leftItemsProperty: NodeFactory;
        public static rightItemsProperty: NodeFactory;
        public static topItemsProperty: NodeFactory;
        public static bottomItemsProperty: NodeFactory;
        public threshold: number | null | Bind;
        public static leftItems: AttachedNode;
        public static rightItems: AttachedNode;
        public static topItems: AttachedNode;
        public static bottomItems: AttachedNode;
    }
    export declare class Switch extends View {
        public static isToggledProperty: NodeFactory;
        public static onColorProperty: NodeFactory;
        public static thumbColorProperty: NodeFactory;
        public static switchOnVisualState: string | null | Bind;
        public static switchOffVisualState: string | null | Bind;
        public onColor: RootObject;
        public thumbColor: RootObject;
        public isToggled: boolean | null | Bind;
    }
    export declare class TabbedPage extends RootObject {
        public static barBackgroundColorProperty: NodeFactory;
        public static barBackgroundProperty: NodeFactory;
        public static barTextColorProperty: NodeFactory;
        public static unselectedTabColorProperty: NodeFactory;
        public static selectedTabColorProperty: NodeFactory;
        public barBackgroundColor: RootObject;
        public barBackground: Brush;
        public barTextColor: RootObject;
        public unselectedTabColor: RootObject;
        public selectedTabColor: RootObject;
    }
    export declare class TableRoot extends RootObject {
    }
    export declare class TableSectionBase$Generic extends TableSectionBase {
        public count: number | null | Bind;
        public item: BindableObject;
    }
    export declare class TableSection extends RootObject {
    }
    export declare class TableSectionBase extends BindableObject {
        public static titleProperty: NodeFactory;
        public static textColorProperty: NodeFactory;
        public title: string | null | Bind;
        public textColor: RootObject;
    }
    export declare class TableView extends View {
        public static rowHeightProperty: NodeFactory;
        public static hasUnevenRowsProperty: NodeFactory;
        public hasUnevenRows: boolean | null | Bind;
        public intent: "Menu" | "Settings" | "Form" | "Data" | string | number | null | undefined | Bind;
        public static root: AttachedNode;
        public rowHeight: number | null | Bind;
        public model: RootObject;
    }
    export declare class TapGestureRecognizer extends GestureRecognizer {
        public static commandProperty: NodeFactory;
        public static commandParameterProperty: NodeFactory;
        public static numberOfTapsRequiredProperty: NodeFactory;
        public static tappedCallbackProperty: NodeFactory;
        public static tappedCallbackParameterProperty: NodeFactory;
        public command: any;
        public commandParameter: any;
        public numberOfTapsRequired: number | null | Bind;
        public tappedCallback: any;
        public tappedCallbackParameter: any;
    }
    export declare class TemplatedPage extends Page {
        public static controlTemplateProperty: NodeFactory;
        public controlTemplate: ControlTemplate;
    }
    export declare class TemplatedView extends Layout {
        public static controlTemplateProperty: NodeFactory;
        public controlTemplate: ControlTemplate;
    }
    export declare class TimePicker extends View {
        public static formatProperty: NodeFactory;
        public static textColorProperty: NodeFactory;
        public static characterSpacingProperty: NodeFactory;
        public static timeProperty: NodeFactory;
        public static fontFamilyProperty: NodeFactory;
        public static fontSizeProperty: NodeFactory;
        public static fontAttributesProperty: NodeFactory;
        public static textTransformProperty: NodeFactory;
        public format: string | null | Bind;
        public textColor: RootObject;
        public characterSpacing: number | null | Bind;
        public time: any;
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
        public static uriProperty: NodeFactory;
        public isEmpty: boolean | null | Bind;
        public cacheValidity: any;
        public cachingEnabled: boolean | null | Bind;
        public uri: any;
    }
    export declare class UrlWebViewSource extends WebViewSource {
        public static urlProperty: NodeFactory;
        public url: string | null | Bind;
    }
    export declare class View extends VisualElement {
        public static verticalOptionsProperty: NodeFactory;
        public static horizontalOptionsProperty: NodeFactory;
        public static marginProperty: NodeFactory;
        public static gestureRecognizers: AttachedNode;
        public horizontalOptions: RootObject;
        public margin: RootObject;
        public verticalOptions: RootObject;
    }
    export declare class VisualElement extends NavigableElement {
        public static navigationProperty: NodeFactory;
        public static styleProperty: NodeFactory;
        public static inputTransparentProperty: NodeFactory;
        public static isEnabledProperty: NodeFactory;
        public static xProperty: NodeFactory;
        public static yProperty: NodeFactory;
        public static anchorXProperty: NodeFactory;
        public static anchorYProperty: NodeFactory;
        public static translationXProperty: NodeFactory;
        public static translationYProperty: NodeFactory;
        public static widthProperty: NodeFactory;
        public static heightProperty: NodeFactory;
        public static rotationProperty: NodeFactory;
        public static rotationXProperty: NodeFactory;
        public static rotationYProperty: NodeFactory;
        public static scaleProperty: NodeFactory;
        public static scaleXProperty: NodeFactory;
        public static scaleYProperty: NodeFactory;
        public static clipProperty: NodeFactory;
        public static visualProperty: NodeFactory;
        public static isVisibleProperty: NodeFactory;
        public static opacityProperty: NodeFactory;
        public static backgroundColorProperty: NodeFactory;
        public static backgroundProperty: NodeFactory;
        public static behaviorsProperty: NodeFactory;
        public static triggersProperty: NodeFactory;
        public static widthRequestProperty: NodeFactory;
        public static heightRequestProperty: NodeFactory;
        public static minimumWidthRequestProperty: NodeFactory;
        public static minimumHeightRequestProperty: NodeFactory;
        public static isFocusedPropertyKey: RootObject;
        public static isFocusedProperty: NodeFactory;
        public static flowDirectionProperty: NodeFactory;
        public static tabIndexProperty: NodeFactory;
        public static isTabStopProperty: NodeFactory;
        public visual: RootObject;
        public flowDirection: "MatchParent" | "LeftToRight" | "RightToLeft" | string | number | null | undefined | Bind;
        public anchorX: number | null | Bind;
        public anchorY: number | null | Bind;
        public backgroundColor: RootObject;
        public background: Brush;
        public static behaviors: AttachedNode;
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
        public static triggers: AttachedNode;
        public width: number | null | Bind;
        public widthRequest: number | null | Bind;
        public x: number | null | Bind;
        public y: number | null | Bind;
        public clip: BindableObject;
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
        public static visualStateGroupsProperty: NodeFactory;
    }
    export declare class WebView extends View {
        public static sourceProperty: NodeFactory;
        public static canGoBackProperty: NodeFactory;
        public static canGoForwardProperty: NodeFactory;
        public static cookiesProperty: NodeFactory;
        public canGoBack: boolean | null | Bind;
        public canGoForward: boolean | null | Bind;
        public cookies: any;
        public source: WebViewSource;
    }
    export declare class WebViewSource extends BindableObject {
    }
}
(XF as any) = {
    get AbsoluteLayout() {
        const t = bridge.getClass("Xamarin.Forms.AbsoluteLayout, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "AbsoluteLayout", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get ActivityIndicator() {
        const t = bridge.getClass("Xamarin.Forms.ActivityIndicator, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "ActivityIndicator", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get AdaptiveTrigger() {
        const t = bridge.getClass("Xamarin.Forms.AdaptiveTrigger, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "AdaptiveTrigger", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get Application() {
        const t = bridge.getClass("Xamarin.Forms.Application, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "Application", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get AppLinkEntry() {
        const t = bridge.getClass("Xamarin.Forms.AppLinkEntry, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "AppLinkEntry", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get AutomationProperties() {
        const t = bridge.getClass("Xamarin.Forms.AutomationProperties, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "AutomationProperties", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get BaseMenuItem() {
        const t = bridge.getClass("Xamarin.Forms.BaseMenuItem, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "BaseMenuItem", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get BindableLayout() {
        const t = bridge.getClass("Xamarin.Forms.BindableLayout, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "BindableLayout", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get BindableObject() {
        const t = bridge.getClass("Xamarin.Forms.BindableObject, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "BindableObject", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get BoxView() {
        const t = bridge.getClass("Xamarin.Forms.BoxView, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "BoxView", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get Brush() {
        const t = bridge.getClass("Xamarin.Forms.Brush, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "Brush", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get Button() {
        const t = bridge.getClass("Xamarin.Forms.Button, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "Button", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get CarouselPage() {
        const t = bridge.getClass("Xamarin.Forms.CarouselPage, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "CarouselPage", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get Cell() {
        const t = bridge.getClass("Xamarin.Forms.Cell, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "Cell", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get EntryCell() {
        const t = bridge.getClass("Xamarin.Forms.EntryCell, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "EntryCell", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get ImageCell() {
        const t = bridge.getClass("Xamarin.Forms.ImageCell, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "ImageCell", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get SwitchCell() {
        const t = bridge.getClass("Xamarin.Forms.SwitchCell, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "SwitchCell", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get TextCell() {
        const t = bridge.getClass("Xamarin.Forms.TextCell, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "TextCell", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get ViewCell() {
        const t = bridge.getClass("Xamarin.Forms.ViewCell, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "ViewCell", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get CheckBox() {
        const t = bridge.getClass("Xamarin.Forms.CheckBox, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "CheckBox", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get ClickGestureRecognizer() {
        const t = bridge.getClass("Xamarin.Forms.ClickGestureRecognizer, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "ClickGestureRecognizer", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get ColumnDefinition() {
        const t = bridge.getClass("Xamarin.Forms.ColumnDefinition, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "ColumnDefinition", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get CompareStateTrigger() {
        const t = bridge.getClass("Xamarin.Forms.CompareStateTrigger, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "CompareStateTrigger", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get CompressedLayout() {
        const t = bridge.getClass("Xamarin.Forms.CompressedLayout, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "CompressedLayout", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get Constraint() {
        const t = bridge.getClass("Xamarin.Forms.Constraint, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "Constraint", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get ContentPage() {
        const t = bridge.getClass("Xamarin.Forms.ContentPage, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "ContentPage", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get ContentPresenter() {
        const t = bridge.getClass("Xamarin.Forms.ContentPresenter, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "ContentPresenter", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get ContentView() {
        const t = bridge.getClass("Xamarin.Forms.ContentView, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "ContentView", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get ControlTemplate() {
        const t = bridge.getClass("Xamarin.Forms.ControlTemplate, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "ControlTemplate", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get DataTemplate() {
        const t = bridge.getClass("Xamarin.Forms.DataTemplate, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "DataTemplate", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get DataTemplateSelector() {
        const t = bridge.getClass("Xamarin.Forms.DataTemplateSelector, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "DataTemplateSelector", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get DatePicker() {
        const t = bridge.getClass("Xamarin.Forms.DatePicker, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "DatePicker", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get DeviceStateTrigger() {
        const t = bridge.getClass("Xamarin.Forms.DeviceStateTrigger, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "DeviceStateTrigger", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get DragGestureRecognizer() {
        const t = bridge.getClass("Xamarin.Forms.DragGestureRecognizer, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "DragGestureRecognizer", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get DropGestureRecognizer() {
        const t = bridge.getClass("Xamarin.Forms.DropGestureRecognizer, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "DropGestureRecognizer", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get Editor() {
        const t = bridge.getClass("Xamarin.Forms.Editor, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "Editor", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get Element() {
        const t = bridge.getClass("Xamarin.Forms.Element, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "Element", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get ElementTemplate() {
        const t = bridge.getClass("Xamarin.Forms.ElementTemplate, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "ElementTemplate", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get Entry() {
        const t = bridge.getClass("Xamarin.Forms.Entry, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "Entry", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get FileImageSource() {
        const t = bridge.getClass("Xamarin.Forms.FileImageSource, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "FileImageSource", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get FlexLayout() {
        const t = bridge.getClass("Xamarin.Forms.FlexLayout, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "FlexLayout", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get FlyoutPage() {
        const t = bridge.getClass("Xamarin.Forms.FlyoutPage, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "FlyoutPage", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get MasterDetailPage() {
        const t = bridge.getClass("Xamarin.Forms.MasterDetailPage, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "MasterDetailPage", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get FontImageSource() {
        const t = bridge.getClass("Xamarin.Forms.FontImageSource, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "FontImageSource", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get FormattedString() {
        const t = bridge.getClass("Xamarin.Forms.FormattedString, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "FormattedString", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get Frame() {
        const t = bridge.getClass("Xamarin.Forms.Frame, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "Frame", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get GestureElement() {
        const t = bridge.getClass("Xamarin.Forms.GestureElement, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "GestureElement", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get GestureRecognizer() {
        const t = bridge.getClass("Xamarin.Forms.GestureRecognizer, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "GestureRecognizer", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get GradientBrush() {
        const t = bridge.getClass("Xamarin.Forms.GradientBrush, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "GradientBrush", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get GradientStop() {
        const t = bridge.getClass("Xamarin.Forms.GradientStop, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "GradientStop", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get Grid() {
        const t = bridge.getClass("Xamarin.Forms.Grid, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "Grid", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get HtmlWebViewSource() {
        const t = bridge.getClass("Xamarin.Forms.HtmlWebViewSource, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "HtmlWebViewSource", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get Image() {
        const t = bridge.getClass("Xamarin.Forms.Image, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "Image", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get ImageButton() {
        const t = bridge.getClass("Xamarin.Forms.ImageButton, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "ImageButton", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get ImageSource() {
        const t = bridge.getClass("Xamarin.Forms.ImageSource, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "ImageSource", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get IndicatorView() {
        const t = bridge.getClass("Xamarin.Forms.IndicatorView, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "IndicatorView", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get InputView() {
        const t = bridge.getClass("Xamarin.Forms.InputView, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "InputView", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get Behavior() {
        const t = bridge.getClass("Xamarin.Forms.Behavior, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "Behavior", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get Behavior$Generic() {
        const t = bridge.getClass("Xamarin.Forms.Behavior`1, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "Behavior$Generic", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get DataTrigger() {
        const t = bridge.getClass("Xamarin.Forms.DataTrigger, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "DataTrigger", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get EventTrigger() {
        const t = bridge.getClass("Xamarin.Forms.EventTrigger, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "EventTrigger", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get MultiTrigger() {
        const t = bridge.getClass("Xamarin.Forms.MultiTrigger, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "MultiTrigger", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get Trigger() {
        const t = bridge.getClass("Xamarin.Forms.Trigger, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "Trigger", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get TriggerBase() {
        const t = bridge.getClass("Xamarin.Forms.TriggerBase, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "TriggerBase", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get ItemsView$Generic() {
        const t = bridge.getClass("Xamarin.Forms.ItemsView`1, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "ItemsView$Generic", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get CarouselView() {
        const t = bridge.getClass("Xamarin.Forms.CarouselView, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "CarouselView", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get CollectionView() {
        const t = bridge.getClass("Xamarin.Forms.CollectionView, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "CollectionView", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get GridItemsLayout() {
        const t = bridge.getClass("Xamarin.Forms.GridItemsLayout, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "GridItemsLayout", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get GroupableItemsView() {
        const t = bridge.getClass("Xamarin.Forms.GroupableItemsView, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "GroupableItemsView", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get ItemsLayout() {
        const t = bridge.getClass("Xamarin.Forms.ItemsLayout, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "ItemsLayout", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get ItemsView() {
        const t = bridge.getClass("Xamarin.Forms.ItemsView, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "ItemsView", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get LinearItemsLayout() {
        const t = bridge.getClass("Xamarin.Forms.LinearItemsLayout, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "LinearItemsLayout", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get SelectableItemsView() {
        const t = bridge.getClass("Xamarin.Forms.SelectableItemsView, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "SelectableItemsView", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get StructuredItemsView() {
        const t = bridge.getClass("Xamarin.Forms.StructuredItemsView, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "StructuredItemsView", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get Label() {
        const t = bridge.getClass("Xamarin.Forms.Label, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "Label", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get Layout$Generic() {
        const t = bridge.getClass("Xamarin.Forms.Layout`1, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "Layout$Generic", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get Layout() {
        const t = bridge.getClass("Xamarin.Forms.Layout, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "Layout", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get LinearGradientBrush() {
        const t = bridge.getClass("Xamarin.Forms.LinearGradientBrush, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "LinearGradientBrush", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get ListView() {
        const t = bridge.getClass("Xamarin.Forms.ListView, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "ListView", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get Menu() {
        const t = bridge.getClass("Xamarin.Forms.Menu, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "Menu", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get MenuItem() {
        const t = bridge.getClass("Xamarin.Forms.MenuItem, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "MenuItem", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get MultiPage$Generic() {
        const t = bridge.getClass("Xamarin.Forms.MultiPage`1, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "MultiPage$Generic", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get NameScopeExtensions() {
        const t = bridge.getClass("Xamarin.Forms.NameScopeExtensions, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "NameScopeExtensions", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get NavigationPage() {
        const t = bridge.getClass("Xamarin.Forms.NavigationPage, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "NavigationPage", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get OpenGLView() {
        const t = bridge.getClass("Xamarin.Forms.OpenGLView, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "OpenGLView", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get OrientationStateTrigger() {
        const t = bridge.getClass("Xamarin.Forms.OrientationStateTrigger, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "OrientationStateTrigger", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get Page() {
        const t = bridge.getClass("Xamarin.Forms.Page, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "Page", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get PanGestureRecognizer() {
        const t = bridge.getClass("Xamarin.Forms.PanGestureRecognizer, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "PanGestureRecognizer", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get Picker() {
        const t = bridge.getClass("Xamarin.Forms.Picker, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "Picker", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get PinchGestureRecognizer() {
        const t = bridge.getClass("Xamarin.Forms.PinchGestureRecognizer, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "PinchGestureRecognizer", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get ProgressBar() {
        const t = bridge.getClass("Xamarin.Forms.ProgressBar, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "ProgressBar", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get RadialGradientBrush() {
        const t = bridge.getClass("Xamarin.Forms.RadialGradientBrush, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "RadialGradientBrush", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get RadioButton() {
        const t = bridge.getClass("Xamarin.Forms.RadioButton, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "RadioButton", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get RadioButtonGroup() {
        const t = bridge.getClass("Xamarin.Forms.RadioButtonGroup, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "RadioButtonGroup", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get RefreshView() {
        const t = bridge.getClass("Xamarin.Forms.RefreshView, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "RefreshView", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get RelativeLayout() {
        const t = bridge.getClass("Xamarin.Forms.RelativeLayout, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "RelativeLayout", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get Routing() {
        const t = bridge.getClass("Xamarin.Forms.Routing, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "Routing", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get RowDefinition() {
        const t = bridge.getClass("Xamarin.Forms.RowDefinition, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "RowDefinition", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get ScrollView() {
        const t = bridge.getClass("Xamarin.Forms.ScrollView, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "ScrollView", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get SearchBar() {
        const t = bridge.getClass("Xamarin.Forms.SearchBar, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "SearchBar", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get BackButtonBehavior() {
        const t = bridge.getClass("Xamarin.Forms.BackButtonBehavior, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "BackButtonBehavior", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get BaseShellItem() {
        const t = bridge.getClass("Xamarin.Forms.BaseShellItem, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "BaseShellItem", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get NavigableElement() {
        const t = bridge.getClass("Xamarin.Forms.NavigableElement, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "NavigableElement", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get SearchHandler() {
        const t = bridge.getClass("Xamarin.Forms.SearchHandler, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "SearchHandler", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get Shell() {
        const t = bridge.getClass("Xamarin.Forms.Shell, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "Shell", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get ShellContent() {
        const t = bridge.getClass("Xamarin.Forms.ShellContent, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "ShellContent", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get ShellGroupItem() {
        const t = bridge.getClass("Xamarin.Forms.ShellGroupItem, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "ShellGroupItem", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get FlyoutItem() {
        const t = bridge.getClass("Xamarin.Forms.FlyoutItem, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "FlyoutItem", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get TabBar() {
        const t = bridge.getClass("Xamarin.Forms.TabBar, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "TabBar", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get ShellItem() {
        const t = bridge.getClass("Xamarin.Forms.ShellItem, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "ShellItem", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get Tab() {
        const t = bridge.getClass("Xamarin.Forms.Tab, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "Tab", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get ShellSection() {
        const t = bridge.getClass("Xamarin.Forms.ShellSection, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "ShellSection", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get Slider() {
        const t = bridge.getClass("Xamarin.Forms.Slider, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "Slider", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get SolidColorBrush() {
        const t = bridge.getClass("Xamarin.Forms.SolidColorBrush, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "SolidColorBrush", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get Span() {
        const t = bridge.getClass("Xamarin.Forms.Span, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "Span", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get StackLayout() {
        const t = bridge.getClass("Xamarin.Forms.StackLayout, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "StackLayout", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get StateTrigger() {
        const t = bridge.getClass("Xamarin.Forms.StateTrigger, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "StateTrigger", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get StateTriggerBase() {
        const t = bridge.getClass("Xamarin.Forms.StateTriggerBase, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "StateTriggerBase", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get Stepper() {
        const t = bridge.getClass("Xamarin.Forms.Stepper, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "Stepper", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get StreamImageSource() {
        const t = bridge.getClass("Xamarin.Forms.StreamImageSource, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "StreamImageSource", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get SwipeGestureRecognizer() {
        const t = bridge.getClass("Xamarin.Forms.SwipeGestureRecognizer, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "SwipeGestureRecognizer", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get SwipeItem() {
        const t = bridge.getClass("Xamarin.Forms.SwipeItem, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "SwipeItem", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get SwipeItems() {
        const t = bridge.getClass("Xamarin.Forms.SwipeItems, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "SwipeItems", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get SwipeItemView() {
        const t = bridge.getClass("Xamarin.Forms.SwipeItemView, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "SwipeItemView", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get SwipeView() {
        const t = bridge.getClass("Xamarin.Forms.SwipeView, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "SwipeView", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get Switch() {
        const t = bridge.getClass("Xamarin.Forms.Switch, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "Switch", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get TabbedPage() {
        const t = bridge.getClass("Xamarin.Forms.TabbedPage, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "TabbedPage", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get TableRoot() {
        const t = bridge.getClass("Xamarin.Forms.TableRoot, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "TableRoot", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get TableSectionBase$Generic() {
        const t = bridge.getClass("Xamarin.Forms.TableSectionBase`1, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "TableSectionBase$Generic", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get TableSection() {
        const t = bridge.getClass("Xamarin.Forms.TableSection, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "TableSection", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get TableSectionBase() {
        const t = bridge.getClass("Xamarin.Forms.TableSectionBase, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "TableSectionBase", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get TableView() {
        const t = bridge.getClass("Xamarin.Forms.TableView, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "TableView", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get TapGestureRecognizer() {
        const t = bridge.getClass("Xamarin.Forms.TapGestureRecognizer, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "TapGestureRecognizer", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get TemplatedPage() {
        const t = bridge.getClass("Xamarin.Forms.TemplatedPage, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "TemplatedPage", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get TemplatedView() {
        const t = bridge.getClass("Xamarin.Forms.TemplatedView, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "TemplatedView", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get TimePicker() {
        const t = bridge.getClass("Xamarin.Forms.TimePicker, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "TimePicker", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get ToolbarItem() {
        const t = bridge.getClass("Xamarin.Forms.ToolbarItem, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "ToolbarItem", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get UriImageSource() {
        const t = bridge.getClass("Xamarin.Forms.UriImageSource, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "UriImageSource", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get UrlWebViewSource() {
        const t = bridge.getClass("Xamarin.Forms.UrlWebViewSource, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "UrlWebViewSource", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get View() {
        const t = bridge.getClass("Xamarin.Forms.View, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "View", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get VisualElement() {
        const t = bridge.getClass("Xamarin.Forms.VisualElement, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "VisualElement", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get VisualStateManager() {
        const t = bridge.getClass("Xamarin.Forms.VisualStateManager, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "VisualStateManager", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get WebView() {
        const t = bridge.getClass("Xamarin.Forms.WebView, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "WebView", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
    get WebViewSource() {
        const t = bridge.getClass("Xamarin.Forms.WebViewSource, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null");
        Object.defineProperty(this, "WebViewSource", { value: t, enumerable: true, writable: true, configurable: true })
        return t;
    },
}
export default XF;

