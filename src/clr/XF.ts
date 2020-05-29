//tslint:disable
import XNode, { RootObject, NodeFactory, AttachedNode } from "@web-atoms/core/dist/core/XNode";
import Bind from "@web-atoms/core/dist/core/Bind";import { ColorItem } from "@web-atoms/core/dist/core/Colors";declare var bridge: any;




declare class BindableObject extends RootObject {
    
    
    
    
/** Property BindingContext of Type Object */
public bindingContext?: any;

/** Property Dispatcher of Type IDispatcher */
public dispatcher?: any;
}


declare class Element extends BindableObject {
    
    
/** Property Element.Effects of Type Xamarin.Forms.Effect */
public static effects: NodeFactory;;

/** Property Element.Menu of Type Xamarin.Forms.Menu */
public static menu: NodeFactory;
    
    
/** Property AutomationId of Type String */
public automationId?: string | null | Bind;

/** Property ClassId of Type String */
public classId?: string | null | Bind;

/** Property EffectControlProvider of Type IEffectControlProvider */
public effectControlProvider?: any;

/** Property Parent of Type Element */
public parent?: any;

/** Property Platform of Type IPlatform */
public platform?: any;

/** Property RealParent of Type Element */
public realParent?: any;

/** Property StyleId of Type String */
public styleId?: string | null | Bind;
}


declare class NavigableElement extends Element {
    
    
/** Property NavigableElement.StyleClass of Type System.String */
public static styleClass: NodeFactory;
    
    
/** Property class of Type IList`1 */
public class?: any;

/** Property Navigation of Type INavigation */
public navigation?: any;

/** Property Style of Type Style */
public style?: any;

/** Property StyleClass of Type IList`1 */
public styleClass?: any;
}


declare class VisualElement extends NavigableElement {
    
    
/** Property VisualElement.Behaviors of Type Xamarin.Forms.Behavior */
public static behaviors: NodeFactory;;

/** Property VisualElement.Resources of Type System.Collections.Generic.KeyValuePair`2[System.String,System.Object] */
public static resources: NodeFactory;;

/** Property VisualElement.Triggers of Type Xamarin.Forms.TriggerBase */
public static triggers: NodeFactory;
    
    
/** Property AnchorX of Type Double */
public anchorX?: number | Bind;

/** Property AnchorY of Type Double */
public anchorY?: number | Bind;

/** Property BackgroundColor of Type Color */
public backgroundColor?: ColorItem | string | null | Bind;

/** Property Bounds of Type Rectangle */
public bounds?: "Zero" | Bind;

/** Property DisableLayout of Type Boolean */
public disableLayout?: boolean | Bind;

/** Property FlowDirection of Type FlowDirection */
public flowDirection?: "MatchParent" | "LeftToRight" | "RightToLeft" | Bind;

/** Property Height of Type Double */
public height?: number | Bind;

/** Property HeightRequest of Type Double */
public heightRequest?: number | Bind;

/** Property InputTransparent of Type Boolean */
public inputTransparent?: boolean | Bind;

/** Property IsEnabled of Type Boolean */
public isEnabled?: boolean | Bind;

/** Property IsInNativeLayout of Type Boolean */
public isInNativeLayout?: boolean | Bind;

/** Property IsNativeStateConsistent of Type Boolean */
public isNativeStateConsistent?: boolean | Bind;

/** Property IsPlatformEnabled of Type Boolean */
public isPlatformEnabled?: boolean | Bind;

/** Property IsTabStop of Type Boolean */
public isTabStop?: boolean | Bind;

/** Property IsVisible of Type Boolean */
public isVisible?: boolean | Bind;

/** Property MinimumHeightRequest of Type Double */
public minimumHeightRequest?: number | Bind;

/** Property MinimumWidthRequest of Type Double */
public minimumWidthRequest?: number | Bind;

/** Property Opacity of Type Double */
public opacity?: number | Bind;

/** Property Resources of Type ResourceDictionary */
public resources?: any;

/** Property Rotation of Type Double */
public rotation?: number | Bind;

/** Property RotationX of Type Double */
public rotationX?: number | Bind;

/** Property RotationY of Type Double */
public rotationY?: number | Bind;

/** Property Scale of Type Double */
public scale?: number | Bind;

/** Property ScaleX of Type Double */
public scaleX?: number | Bind;

/** Property ScaleY of Type Double */
public scaleY?: number | Bind;

/** Property TabIndex of Type Int32 */
public tabIndex?: number | Bind;

/** Property TranslationX of Type Double */
public translationX?: number | Bind;

/** Property TranslationY of Type Double */
public translationY?: number | Bind;

/** Property Visual of Type IVisual */
public visual?: /*IVisual*/ any;

/** Property Width of Type Double */
public width?: number | Bind;

/** Property WidthRequest of Type Double */
public widthRequest?: number | Bind;

/** Property X of Type Double */
public x?: number | Bind;

/** Property Y of Type Double */
public y?: number | Bind;
}


declare class View extends VisualElement {
    
    
/** Property View.GestureRecognizers of Type Xamarin.Forms.IGestureRecognizer */
public static gestureRecognizers: NodeFactory;
    
    
/** Property HorizontalOptions of Type LayoutOptions */
public horizontalOptions?: "Start" | "Center" | "End" | "Fill" | "StartAndExpand" | "CenterAndExpand" | "EndAndExpand" | "FillAndExpand" | Bind;

/** Property Margin of Type Thickness */
public margin?: /*Thickness*/ any;

/** Property VerticalOptions of Type LayoutOptions */
public verticalOptions?: "Start" | "Center" | "End" | "Fill" | "StartAndExpand" | "CenterAndExpand" | "EndAndExpand" | "FillAndExpand" | Bind;
}


declare class Layout extends View {
    
    
    
    
/** Property CascadeInputTransparent of Type Boolean */
public cascadeInputTransparent?: boolean | Bind;

/** Property IsClippedToBounds of Type Boolean */
public isClippedToBounds?: boolean | Bind;

/** Property Padding of Type Thickness */
public padding?: /*Thickness*/ any;
}


declare class AbsoluteLayout extends Layout {
    
/** Attached Property AbsoluteLayout.LayoutFlags of Type BindableProperty*/
public static layoutFlags: AttachedNode;


/** Attached Property AbsoluteLayout.LayoutBounds of Type BindableProperty*/
public static layoutBounds: AttachedNode;

    
/** Property AbsoluteLayout.Children of Type Xamarin.Forms.View */
public static children: NodeFactory;
    
    
}


declare class ActivityIndicator extends View {
    
    
    
    
/** Property Color of Type Color */
public color?: ColorItem | string | null | Bind;

/** Property IsRunning of Type Boolean */
public isRunning?: boolean | Bind;
}


declare class StateTriggerBase extends BindableObject {
    
    
    
    
/** Property IsActive of Type Boolean */
public isActive?: boolean | Bind;

/** Property IsAttached of Type Boolean */
public isAttached?: boolean | Bind;
}


declare class AdaptiveTrigger extends StateTriggerBase {
    
    
    
    
/** Property MinWindowHeight of Type Double */
public minWindowHeight?: number | Bind;

/** Property MinWindowWidth of Type Double */
public minWindowWidth?: number | Bind;
}


declare class Application extends Element {
    
    
/** Property Application.MainPage of Type Xamarin.Forms.Page */
public static mainPage: NodeFactory;;

/** Property Application.Properties of Type System.Collections.Generic.KeyValuePair`2[System.String,System.Object] */
public static properties: NodeFactory;;

/** Property Application.Resources of Type System.Collections.Generic.KeyValuePair`2[System.String,System.Object] */
public static resources: NodeFactory;
    
    
/** Property MainPage of Type Page */
public mainPage?: any;

/** Property NavigationProxy of Type NavigationProxy */
public navigationProxy?: any;

/** Property PanGestureId of Type Int32 */
public panGestureId?: number | Bind;

/** Property Resources of Type ResourceDictionary */
public resources?: any;
}


declare class AppLinkEntry extends Element {
    
    
/** Property AppLinkEntry.KeyValues of Type System.Collections.Generic.KeyValuePair`2[System.String,System.String] */
public static keyValues: NodeFactory;;

/** Property AppLinkEntry.Thumbnail of Type Xamarin.Forms.ImageSource */
public static thumbnail: NodeFactory;
    
    
/** Property AppLinkUri of Type Uri */
public appLinkUri?: any;

/** Property Description of Type String */
public description?: string | null | Bind;

/** Property IsLinkActive of Type Boolean */
public isLinkActive?: boolean | Bind;

/** Property Thumbnail of Type ImageSource */
public thumbnail?: /*ImageSource*/ any;

/** Property Title of Type String */
public title?: string | null | Bind;
}


declare class BaseMenuItem extends Element {
    
    
    
    
}


declare class BindableLayout extends RootObject {
    
/** Attached Property BindableLayout.ItemsSource of Type BindableProperty*/
public static itemsSource: AttachedNode;


/** Attached Property BindableLayout.EmptyView of Type BindableProperty*/
public static emptyView: AttachedNode;

    
/** Property BindableLayout.EmptyViewTemplate of Type Xamarin.Forms.DataTemplate */
public static emptyViewTemplate: NodeFactory;;

/** Property BindableLayout.ItemTemplate of Type Xamarin.Forms.DataTemplate */
public static itemTemplate: NodeFactory;;

/** Property BindableLayout.ItemTemplateSelector of Type Xamarin.Forms.DataTemplateSelector */
public static itemTemplateSelector: NodeFactory;
    
    
}


declare class BoxView extends View {
    
    
    
    
/** Property Color of Type Color */
public color?: ColorItem | string | null | Bind;

/** Property CornerRadius of Type CornerRadius */
public cornerRadius?: /*CornerRadius*/ any;
}


declare class Button extends View {
    
    
/** Property Button.ImageSource of Type Xamarin.Forms.ImageSource */
public static imageSource: NodeFactory;
    
    
/** Property BorderColor of Type Color */
public borderColor?: ColorItem | string | null | Bind;

/** Property BorderRadius of Type Int32 */
public borderRadius?: number | Bind;

/** Property BorderWidth of Type Double */
public borderWidth?: number | Bind;

/** Property CharacterSpacing of Type Double */
public characterSpacing?: number | Bind;

/** Property Command of Type ICommand */
public command?: any;

/** Property CommandParameter of Type Object */
public commandParameter?: any;

/** Property ContentLayout of Type ButtonContentLayout */
public contentLayout?: /*ButtonContentLayout*/ any;

/** Property CornerRadius of Type Int32 */
public cornerRadius?: number | Bind;

/** Property Font of Type Font */
public font?: /*Font*/ any;

/** Property FontAttributes of Type FontAttributes */
public fontAttributes?: "None" | "Bold" | "Italic" | Bind;

/** Property FontFamily of Type String */
public fontFamily?: string | null | Bind;

/** Property FontSize of Type Double */
public fontSize?: number | Bind;

/** Property Image of Type FileImageSource */
public image?: /*FileImageSource*/ any;

/** Property ImageSource of Type ImageSource */
public imageSource?: /*ImageSource*/ any;

/** Property Padding of Type Thickness */
public padding?: /*Thickness*/ any;

/** Property Text of Type String */
public text?: string | null | Bind;

/** Property TextColor of Type Color */
public textColor?: ColorItem | string | null | Bind;
}


declare class Page extends VisualElement {
    
    
/** Property Page.BackgroundImageSource of Type Xamarin.Forms.ImageSource */
public static backgroundImageSource: NodeFactory;;

/** Property Page.IconImageSource of Type Xamarin.Forms.ImageSource */
public static iconImageSource: NodeFactory;;

/** Property Page.ToolbarItems of Type Xamarin.Forms.ToolbarItem */
public static toolbarItems: NodeFactory;
    
    
/** Property BackgroundImage of Type String */
public backgroundImage?: string | null | Bind;

/** Property BackgroundImageSource of Type ImageSource */
public backgroundImageSource?: /*ImageSource*/ any;

/** Property ContainerArea of Type Rectangle */
public containerArea?: "Zero" | Bind;

/** Property Icon of Type FileImageSource */
public icon?: /*FileImageSource*/ any;

/** Property IconImageSource of Type ImageSource */
public iconImageSource?: /*ImageSource*/ any;

/** Property IgnoresContainerArea of Type Boolean */
public ignoresContainerArea?: boolean | Bind;

/** Property IsBusy of Type Boolean */
public isBusy?: boolean | Bind;

/** Property Padding of Type Thickness */
public padding?: /*Thickness*/ any;

/** Property Title of Type String */
public title?: string | null | Bind;

/** Property ToolbarItems of Type IList`1 */
public toolbarItems?: any;
}


declare class CarouselPage extends Page {
    
    
/** Property CarouselPage.Children of Type Xamarin.Forms.ContentPage */
public static children: NodeFactory;;

/** Property CarouselPage.CurrentPage of Type Xamarin.Forms.ContentPage */
public static currentPage: NodeFactory;;

/** Property CarouselPage.ItemTemplate of Type Xamarin.Forms.DataTemplate */
public static itemTemplate: NodeFactory;
    
    
/** Property CurrentPage of Type ContentPage */
public currentPage?: any;

/** Property ItemsSource of Type IEnumerable */
public itemsSource?: any;

/** Property ItemTemplate of Type DataTemplate */
public itemTemplate?: any;

/** Property SelectedItem of Type Object */
public selectedItem?: any;
}


declare class Cell extends Element {
    
    
/** Property Cell.ContextActions of Type Xamarin.Forms.MenuItem */
public static contextActions: NodeFactory;
    
    
/** Property Height of Type Double */
public height?: number | Bind;

/** Property IsContextActionsLegacyModeEnabled of Type Boolean */
public isContextActionsLegacyModeEnabled?: boolean | Bind;

/** Property IsEnabled of Type Boolean */
public isEnabled?: boolean | Bind;
}


declare class EntryCell extends Cell {
    
    
    
    
/** Property HorizontalTextAlignment of Type TextAlignment */
public horizontalTextAlignment?: "Start" | "Center" | "End" | Bind;

/** Property Keyboard of Type Keyboard */
public keyboard?: /*Keyboard*/ any;

/** Property Label of Type String */
public label?: string | null | Bind;

/** Property LabelColor of Type Color */
public labelColor?: ColorItem | string | null | Bind;

/** Property Placeholder of Type String */
public placeholder?: string | null | Bind;

/** Property Text of Type String */
public text?: string | null | Bind;

/** Property VerticalTextAlignment of Type TextAlignment */
public verticalTextAlignment?: "Start" | "Center" | "End" | Bind;

/** Property XAlign of Type TextAlignment */
public xAlign?: "Start" | "Center" | "End" | Bind;
}


declare class TextCell extends Cell {
    
    
    
    
/** Property Command of Type ICommand */
public command?: any;

/** Property CommandParameter of Type Object */
public commandParameter?: any;

/** Property Detail of Type String */
public detail?: string | null | Bind;

/** Property DetailColor of Type Color */
public detailColor?: ColorItem | string | null | Bind;

/** Property Text of Type String */
public text?: string | null | Bind;

/** Property TextColor of Type Color */
public textColor?: ColorItem | string | null | Bind;
}


declare class ImageCell extends TextCell {
    
    
/** Property ImageCell.ImageSource of Type Xamarin.Forms.ImageSource */
public static imageSource: NodeFactory;
    
    
/** Property ImageSource of Type ImageSource */
public imageSource?: /*ImageSource*/ any;
}


declare class SwitchCell extends Cell {
    
    
    
    
/** Property On of Type Boolean */
public on?: boolean | Bind;

/** Property OnColor of Type Color */
public onColor?: ColorItem | string | null | Bind;

/** Property Text of Type String */
public text?: string | null | Bind;
}


declare class ViewCell extends Cell {
    
    
/** Property ViewCell.View of Type Xamarin.Forms.View */
public static view: NodeFactory;
    
    
/** Property View of Type View */
public view?: any;
}


declare class CheckBox extends View {
    
    
    
    
/** Property Color of Type Color */
public color?: ColorItem | string | null | Bind;

/** Property IsChecked of Type Boolean */
public isChecked?: boolean | Bind;
}


declare class GestureRecognizer extends Element {
    
    
    
    
}


declare class ClickGestureRecognizer extends GestureRecognizer {
    
    
    
    
/** Property Buttons of Type ButtonsMask */
public buttons?: "Primary" | "Secondary" | Bind;

/** Property Command of Type ICommand */
public command?: any;

/** Property CommandParameter of Type Object */
public commandParameter?: any;

/** Property NumberOfClicksRequired of Type Int32 */
public numberOfClicksRequired?: number | Bind;
}


declare class ColumnDefinition extends BindableObject {
    
    
    
    
/** Property Width of Type GridLength */
public width?: "Auto" | number | string | Bind;
}


declare class CompareStateTrigger extends StateTriggerBase {
    
    
    
    
/** Property Property of Type Object */
public property?: any;

/** Property Value of Type Object */
public value?: any;
}


declare class TemplatedPage extends Page {
    
    
/** Property TemplatedPage.ControlTemplate of Type Xamarin.Forms.ControlTemplate */
public static controlTemplate: NodeFactory;
    
    
/** Property ControlTemplate of Type ControlTemplate */
public controlTemplate?: any;
}


declare class ContentPage extends TemplatedPage {
    
    
/** Property ContentPage.Content of Type Xamarin.Forms.View */
public static content: NodeFactory;
    
    
/** Property Content of Type View */
public content?: any;
}


declare class ContentPresenter extends Layout {
    
    
/** Property ContentPresenter.Content of Type Xamarin.Forms.View */
public static content: NodeFactory;
    
    
/** Property Content of Type View */
public content?: any;
}


declare class TemplatedView extends Layout {
    
    
/** Property TemplatedView.ControlTemplate of Type Xamarin.Forms.ControlTemplate */
public static controlTemplate: NodeFactory;
    
    
/** Property ControlTemplate of Type ControlTemplate */
public controlTemplate?: any;
}


declare class ContentView extends TemplatedView {
    
    
/** Property ContentView.Content of Type Xamarin.Forms.View */
public static content: NodeFactory;
    
    
/** Property Content of Type View */
public content?: any;
}


declare class ControlTemplate extends RootObject {
    
    
    
    
}


declare class DataTemplate extends RootObject {
    
    
/** Property DataTemplate.Bindings of Type System.Collections.Generic.KeyValuePair`2[Xamarin.Forms.BindableProperty,Xamarin.Forms.BindingBase] */
public static bindings: NodeFactory;;

/** Property DataTemplate.Values of Type System.Collections.Generic.KeyValuePair`2[Xamarin.Forms.BindableProperty,System.Object] */
public static values: NodeFactory;
    
    
}


declare class DataTemplateSelector extends DataTemplate {
    
    
    
    
}


declare class DatePicker extends View {
    
    
    
    
/** Property CharacterSpacing of Type Double */
public characterSpacing?: number | Bind;

/** Property Date of Type DateTime */
public date?: any;

/** Property FontAttributes of Type FontAttributes */
public fontAttributes?: "None" | "Bold" | "Italic" | Bind;

/** Property FontFamily of Type String */
public fontFamily?: string | null | Bind;

/** Property FontSize of Type Double */
public fontSize?: number | Bind;

/** Property Format of Type String */
public format?: string | null | Bind;

/** Property MaximumDate of Type DateTime */
public maximumDate?: any;

/** Property MinimumDate of Type DateTime */
public minimumDate?: any;

/** Property TextColor of Type Color */
public textColor?: ColorItem | string | null | Bind;
}


declare class DeviceStateTrigger extends StateTriggerBase {
    
    
    
    
/** Property Device of Type String */
public device?: string | null | Bind;
}


declare class InputView extends View {
    
    
    
    
/** Property CharacterSpacing of Type Double */
public characterSpacing?: number | Bind;

/** Property IsReadOnly of Type Boolean */
public isReadOnly?: boolean | Bind;

/** Property IsSpellCheckEnabled of Type Boolean */
public isSpellCheckEnabled?: boolean | Bind;

/** Property Keyboard of Type Keyboard */
public keyboard?: /*Keyboard*/ any;

/** Property MaxLength of Type Int32 */
public maxLength?: number | Bind;

/** Property Placeholder of Type String */
public placeholder?: string | null | Bind;

/** Property PlaceholderColor of Type Color */
public placeholderColor?: ColorItem | string | null | Bind;

/** Property Text of Type String */
public text?: string | null | Bind;

/** Property TextColor of Type Color */
public textColor?: ColorItem | string | null | Bind;
}


declare class Editor extends InputView {
    
    
    
    
/** Property AutoSize of Type EditorAutoSizeOption */
public autoSize?: "Disabled" | "TextChanges" | Bind;

/** Property FontAttributes of Type FontAttributes */
public fontAttributes?: "None" | "Bold" | "Italic" | Bind;

/** Property FontFamily of Type String */
public fontFamily?: string | null | Bind;

/** Property FontSize of Type Double */
public fontSize?: number | Bind;

/** Property IsTextPredictionEnabled of Type Boolean */
public isTextPredictionEnabled?: boolean | Bind;
}


declare class Entry extends InputView {
    
    
    
    
/** Property ClearButtonVisibility of Type ClearButtonVisibility */
public clearButtonVisibility?: "Never" | "WhileEditing" | Bind;

/** Property CursorPosition of Type Int32 */
public cursorPosition?: number | Bind;

/** Property FontAttributes of Type FontAttributes */
public fontAttributes?: "None" | "Bold" | "Italic" | Bind;

/** Property FontFamily of Type String */
public fontFamily?: string | null | Bind;

/** Property FontSize of Type Double */
public fontSize?: number | Bind;

/** Property HorizontalTextAlignment of Type TextAlignment */
public horizontalTextAlignment?: "Start" | "Center" | "End" | Bind;

/** Property IsPassword of Type Boolean */
public isPassword?: boolean | Bind;

/** Property IsTextPredictionEnabled of Type Boolean */
public isTextPredictionEnabled?: boolean | Bind;

/** Property ReturnCommand of Type ICommand */
public returnCommand?: any;

/** Property ReturnCommandParameter of Type Object */
public returnCommandParameter?: any;

/** Property ReturnType of Type ReturnType */
public returnType?: "Default" | "Done" | "Go" | "Next" | "Search" | "Send" | Bind;

/** Property SelectionLength of Type Int32 */
public selectionLength?: number | Bind;

/** Property VerticalTextAlignment of Type TextAlignment */
public verticalTextAlignment?: "Start" | "Center" | "End" | Bind;
}


declare class Expander extends TemplatedView {
    
    
/** Property Expander.Content of Type Xamarin.Forms.View */
public static content: NodeFactory;;

/** Property Expander.ContentTemplate of Type Xamarin.Forms.DataTemplate */
public static contentTemplate: NodeFactory;;

/** Property Expander.Header of Type Xamarin.Forms.View */
public static header: NodeFactory;
    
    
/** Property CollapseAnimationEasing of Type Easing */
public collapseAnimationEasing?: any;

/** Property CollapseAnimationLength of Type UInt32 */
public collapseAnimationLength?: any;

/** Property Command of Type ICommand */
public command?: any;

/** Property CommandParameter of Type Object */
public commandParameter?: any;

/** Property Content of Type View */
public content?: any;

/** Property ContentTemplate of Type DataTemplate */
public contentTemplate?: any;

/** Property ExpandAnimationEasing of Type Easing */
public expandAnimationEasing?: any;

/** Property ExpandAnimationLength of Type UInt32 */
public expandAnimationLength?: any;

/** Property ForceUpdateSizeCommand of Type ICommand */
public forceUpdateSizeCommand?: any;

/** Property Header of Type View */
public header?: any;

/** Property IsExpanded of Type Boolean */
public isExpanded?: boolean | Bind;

/** Property Spacing of Type Double */
public spacing?: number | Bind;

/** Property State of Type ExpanderState */
public state?: "Expanding" | "Expanded" | "Collapsing" | "Collapsed" | Bind;
}


declare class ImageSource extends Element {
    
    
    
    
}


declare class FileImageSource extends ImageSource {
    
    
    
    
/** Property File of Type String */
public file?: string | null | Bind;
}


declare class MediaSource extends Element {
    
    
    
    
}


declare class FileMediaSource extends MediaSource {
    
    
    
    
/** Property File of Type String */
public file?: string | null | Bind;
}


declare class FlexLayout extends Layout {
    
/** Attached Property FlexLayout.Order of Type BindableProperty*/
public static order: AttachedNode;


/** Attached Property FlexLayout.Grow of Type BindableProperty*/
public static grow: AttachedNode;


/** Attached Property FlexLayout.Shrink of Type BindableProperty*/
public static shrink: AttachedNode;


/** Attached Property FlexLayout.AlignSelf of Type BindableProperty*/
public static alignSelf: AttachedNode;


/** Attached Property FlexLayout.Basis of Type BindableProperty*/
public static basis: AttachedNode;

    
/** Property FlexLayout.Children of Type Xamarin.Forms.View */
public static children: NodeFactory;
    
    
/** Property AlignContent of Type FlexAlignContent */
public alignContent?: "Stretch" | "Center" | "Start" | "End" | "SpaceBetween" | "SpaceAround" | "SpaceEvenly" | Bind;

/** Property AlignItems of Type FlexAlignItems */
public alignItems?: "Stretch" | "Center" | "Start" | "End" | Bind;

/** Property Direction of Type FlexDirection */
public direction?: "Row" | "RowReverse" | "Column" | "ColumnReverse" | Bind;

/** Property JustifyContent of Type FlexJustify */
public justifyContent?: "Center" | "Start" | "End" | "SpaceBetween" | "SpaceAround" | "SpaceEvenly" | Bind;

/** Property Position of Type FlexPosition */
public position?: "Relative" | "Absolute" | Bind;

/** Property Wrap of Type FlexWrap */
public wrap?: "NoWrap" | "Wrap" | "Reverse" | Bind;
}


declare class FontImageSource extends ImageSource {
    
    
    
    
/** Property Color of Type Color */
public color?: ColorItem | string | null | Bind;

/** Property FontFamily of Type String */
public fontFamily?: string | null | Bind;

/** Property Glyph of Type String */
public glyph?: string | null | Bind;

/** Property Size of Type Double */
public size?: number | Bind;
}


declare class FormattedString extends Element {
    
    
/** Property FormattedString.Spans of Type Xamarin.Forms.Span */
public static spans: NodeFactory;
    
    
}


declare class Frame extends ContentView {
    
    
    
    
/** Property BorderColor of Type Color */
public borderColor?: ColorItem | string | null | Bind;

/** Property CornerRadius of Type Single */
public cornerRadius?: number | Bind;

/** Property HasShadow of Type Boolean */
public hasShadow?: boolean | Bind;

/** Property OutlineColor of Type Color */
public outlineColor?: ColorItem | string | null | Bind;
}


declare class GestureElement extends Element {
    
    
/** Property GestureElement.GestureRecognizers of Type Xamarin.Forms.IGestureRecognizer */
public static gestureRecognizers: NodeFactory;
    
    
}


declare class Grid extends Layout {
    
/** Attached Property Grid.Row of Type BindableProperty*/
public static row: AttachedNode;


/** Attached Property Grid.RowSpan of Type BindableProperty*/
public static rowSpan: AttachedNode;


/** Attached Property Grid.Column of Type BindableProperty*/
public static column: AttachedNode;


/** Attached Property Grid.ColumnSpan of Type BindableProperty*/
public static columnSpan: AttachedNode;

    
/** Property Grid.Children of Type Xamarin.Forms.View */
public static children: NodeFactory;;

/** Property Grid.ColumnDefinitions of Type Xamarin.Forms.ColumnDefinition */
public static columnDefinitions: NodeFactory;;

/** Property Grid.RowDefinitions of Type Xamarin.Forms.RowDefinition */
public static rowDefinitions: NodeFactory;
    
    
/** Property ColumnDefinitions of Type ColumnDefinitionCollection */
public columnDefinitions?: any;

/** Property ColumnSpacing of Type Double */
public columnSpacing?: number | Bind;

/** Property RowDefinitions of Type RowDefinitionCollection */
public rowDefinitions?: any;

/** Property RowSpacing of Type Double */
public rowSpacing?: number | Bind;
}


declare class WebViewSource extends BindableObject {
    
    
    
    
}


declare class HtmlWebViewSource extends WebViewSource {
    
    
    
    
/** Property BaseUrl of Type String */
public baseUrl?: string | null | Bind;

/** Property Html of Type String */
public html?: string | null | Bind;
}


declare class Image extends View {
    
    
/** Property Image.Source of Type Xamarin.Forms.ImageSource */
public static source: NodeFactory;
    
    
/** Property Aspect of Type Aspect */
public aspect?: "AspectFit" | "AspectFill" | "Fill" | Bind;

/** Property IsAnimationPlaying of Type Boolean */
public isAnimationPlaying?: boolean | Bind;

/** Property IsOpaque of Type Boolean */
public isOpaque?: boolean | Bind;

/** Property Source of Type ImageSource */
public source?: /*ImageSource*/ any;
}


declare class ImageButton extends View {
    
    
/** Property ImageButton.Source of Type Xamarin.Forms.ImageSource */
public static source: NodeFactory;
    
    
/** Property Aspect of Type Aspect */
public aspect?: "AspectFit" | "AspectFill" | "Fill" | Bind;

/** Property BorderColor of Type Color */
public borderColor?: ColorItem | string | null | Bind;

/** Property BorderWidth of Type Double */
public borderWidth?: number | Bind;

/** Property Command of Type ICommand */
public command?: any;

/** Property CommandParameter of Type Object */
public commandParameter?: any;

/** Property CornerRadius of Type Int32 */
public cornerRadius?: number | Bind;

/** Property IsOpaque of Type Boolean */
public isOpaque?: boolean | Bind;

/** Property Padding of Type Thickness */
public padding?: /*Thickness*/ any;

/** Property Source of Type ImageSource */
public source?: /*ImageSource*/ any;
}


declare class IndicatorView extends TemplatedView {
    
    
/** Property IndicatorView.IndicatorLayout of Type Xamarin.Forms.Layout`1[Xamarin.Forms.View] */
public static indicatorLayout: NodeFactory;;

/** Property IndicatorView.IndicatorTemplate of Type Xamarin.Forms.DataTemplate */
public static indicatorTemplate: NodeFactory;
    
    
/** Property Count of Type Int32 */
public count?: number | Bind;

/** Property HideSingle of Type Boolean */
public hideSingle?: boolean | Bind;

/** Property IndicatorColor of Type Color */
public indicatorColor?: ColorItem | string | null | Bind;

/** Property IndicatorLayout of Type Layout`1 */
public indicatorLayout?: any;

/** Property IndicatorSize of Type Double */
public indicatorSize?: number | Bind;

/** Property IndicatorsShape of Type IndicatorShape */
public indicatorsShape?: "Circle" | "Square" | Bind;

/** Property IndicatorTemplate of Type DataTemplate */
public indicatorTemplate?: any;

/** Property ItemsSource of Type IEnumerable */
public itemsSource?: any;

/** Property MaximumVisible of Type Int32 */
public maximumVisible?: number | Bind;

/** Property Position of Type Int32 */
public position?: number | Bind;

/** Property SelectedIndicatorColor of Type Color */
public selectedIndicatorColor?: ColorItem | string | null | Bind;
}


declare class Behavior extends BindableObject {
    
    
    
    
}


declare class TriggerBase extends BindableObject {
    
    
/** Property TriggerBase.EnterActions of Type Xamarin.Forms.TriggerAction */
public static enterActions: NodeFactory;;

/** Property TriggerBase.ExitActions of Type Xamarin.Forms.TriggerAction */
public static exitActions: NodeFactory;
    
    
/** Property IsSealed of Type Boolean */
public isSealed?: boolean | Bind;
}


declare class DataTrigger extends TriggerBase {
    
    
/** Property DataTrigger.Setters of Type Xamarin.Forms.Setter */
public static setters: NodeFactory;
    
    
/** Property Binding of Type BindingBase */
public binding?: any;

/** Property Value of Type Object */
public value?: any;
}


declare class EventTrigger extends TriggerBase {
    
    
/** Property EventTrigger.Actions of Type Xamarin.Forms.TriggerAction */
public static actions: NodeFactory;
    
    
/** Property Event of Type String */
public event?: string | null | Bind;
}


declare class MultiTrigger extends TriggerBase {
    
    
/** Property MultiTrigger.Conditions of Type Xamarin.Forms.Condition */
public static conditions: NodeFactory;;

/** Property MultiTrigger.Setters of Type Xamarin.Forms.Setter */
public static setters: NodeFactory;
    
    
}


declare class Trigger extends TriggerBase {
    
    
/** Property Trigger.Setters of Type Xamarin.Forms.Setter */
public static setters: NodeFactory;
    
    
/** Property Property of Type BindableProperty */
public property?: /*BindableProperty*/ any;

/** Property Value of Type Object */
public value?: any;
}


declare class ItemsView extends View {
    
    
/** Property ItemsView.EmptyViewTemplate of Type Xamarin.Forms.DataTemplate */
public static emptyViewTemplate: NodeFactory;;

/** Property ItemsView.ItemTemplate of Type Xamarin.Forms.DataTemplate */
public static itemTemplate: NodeFactory;
    
    
/** Property EmptyView of Type Object */
public emptyView?: any;

/** Property EmptyViewTemplate of Type DataTemplate */
public emptyViewTemplate?: any;

/** Property HorizontalScrollBarVisibility of Type ScrollBarVisibility */
public horizontalScrollBarVisibility?: "Default" | "Always" | "Never" | Bind;

/** Property ItemsSource of Type IEnumerable */
public itemsSource?: any;

/** Property ItemsUpdatingScrollMode of Type ItemsUpdatingScrollMode */
public itemsUpdatingScrollMode?: "KeepItemsInView" | "KeepScrollOffset" | "KeepLastItemInView" | Bind;

/** Property ItemTemplate of Type DataTemplate */
public itemTemplate?: any;

/** Property RemainingItemsThreshold of Type Int32 */
public remainingItemsThreshold?: number | Bind;

/** Property RemainingItemsThresholdReachedCommand of Type ICommand */
public remainingItemsThresholdReachedCommand?: any;

/** Property RemainingItemsThresholdReachedCommandParameter of Type Object */
public remainingItemsThresholdReachedCommandParameter?: any;

/** Property VerticalScrollBarVisibility of Type ScrollBarVisibility */
public verticalScrollBarVisibility?: "Default" | "Always" | "Never" | Bind;
}


declare class CarouselView extends ItemsView {
    
    
/** Property CarouselView.ItemsLayout of Type Xamarin.Forms.LinearItemsLayout */
public static itemsLayout: NodeFactory;;

/** Property CarouselView.VisibleViews of Type Xamarin.Forms.View */
public static visibleViews: NodeFactory;
    
    
/** Property CurrentItem of Type Object */
public currentItem?: any;

/** Property CurrentItemChangedCommand of Type ICommand */
public currentItemChangedCommand?: any;

/** Property CurrentItemChangedCommandParameter of Type Object */
public currentItemChangedCommandParameter?: any;

/** Property IsBounceEnabled of Type Boolean */
public isBounceEnabled?: boolean | Bind;

/** Property IsScrollAnimated of Type Boolean */
public isScrollAnimated?: boolean | Bind;

/** Property IsScrolling of Type Boolean */
public isScrolling?: boolean | Bind;

/** Property IsSwipeEnabled of Type Boolean */
public isSwipeEnabled?: boolean | Bind;

/** Property ItemsLayout of Type LinearItemsLayout */
public itemsLayout?: any;

/** Property PeekAreaInsets of Type Thickness */
public peekAreaInsets?: /*Thickness*/ any;

/** Property Position of Type Int32 */
public position?: number | Bind;

/** Property PositionChangedCommand of Type ICommand */
public positionChangedCommand?: any;

/** Property PositionChangedCommandParameter of Type Object */
public positionChangedCommandParameter?: any;
}


declare class StructuredItemsView extends ItemsView {
    
    
/** Property StructuredItemsView.FooterTemplate of Type Xamarin.Forms.DataTemplate */
public static footerTemplate: NodeFactory;;

/** Property StructuredItemsView.HeaderTemplate of Type Xamarin.Forms.DataTemplate */
public static headerTemplate: NodeFactory;;

/** Property StructuredItemsView.ItemsLayout of Type Xamarin.Forms.IItemsLayout */
public static itemsLayout: NodeFactory;
    
    
/** Property Footer of Type Object */
public footer?: any;

/** Property FooterTemplate of Type DataTemplate */
public footerTemplate?: any;

/** Property Header of Type Object */
public header?: any;

/** Property HeaderTemplate of Type DataTemplate */
public headerTemplate?: any;

/** Property ItemSizingStrategy of Type ItemSizingStrategy */
public itemSizingStrategy?: "MeasureAllItems" | "MeasureFirstItem" | Bind;

/** Property ItemsLayout of Type IItemsLayout */
public itemsLayout?: /*IItemsLayout*/ any;
}


declare class SelectableItemsView extends StructuredItemsView {
    
    
/** Property SelectableItemsView.SelectedItems of Type System.Object */
public static selectedItems: NodeFactory;
    
    
/** Property SelectedItem of Type Object */
public selectedItem?: any;

/** Property SelectedItems of Type IList`1 */
public selectedItems?: any;

/** Property SelectionChangedCommand of Type ICommand */
public selectionChangedCommand?: any;

/** Property SelectionChangedCommandParameter of Type Object */
public selectionChangedCommandParameter?: any;

/** Property SelectionMode of Type SelectionMode */
public selectionMode?: "None" | "Single" | "Multiple" | Bind;
}


declare class GroupableItemsView extends SelectableItemsView {
    
    
/** Property GroupableItemsView.GroupFooterTemplate of Type Xamarin.Forms.DataTemplate */
public static groupFooterTemplate: NodeFactory;;

/** Property GroupableItemsView.GroupHeaderTemplate of Type Xamarin.Forms.DataTemplate */
public static groupHeaderTemplate: NodeFactory;
    
    
/** Property GroupFooterTemplate of Type DataTemplate */
public groupFooterTemplate?: any;

/** Property GroupHeaderTemplate of Type DataTemplate */
public groupHeaderTemplate?: any;

/** Property IsGrouped of Type Boolean */
public isGrouped?: boolean | Bind;
}


declare class CollectionView extends GroupableItemsView {
    
    
    
    
}


declare class ItemsLayout extends BindableObject {
    
    
    
    
/** Property SnapPointsAlignment of Type SnapPointsAlignment */
public snapPointsAlignment?: "Start" | "Center" | "End" | Bind;

/** Property SnapPointsType of Type SnapPointsType */
public snapPointsType?: "None" | "Mandatory" | "MandatorySingle" | Bind;
}


declare class GridItemsLayout extends ItemsLayout {
    
    
    
    
/** Property HorizontalItemSpacing of Type Double */
public horizontalItemSpacing?: number | Bind;

/** Property Span of Type Int32 */
public span?: number | Bind;

/** Property VerticalItemSpacing of Type Double */
public verticalItemSpacing?: number | Bind;
}


declare class LinearItemsLayout extends ItemsLayout {
    
    
    
    
/** Property ItemSpacing of Type Double */
public itemSpacing?: number | Bind;
}


declare class Label extends View {
    
    
/** Property Label.FormattedText of Type Xamarin.Forms.FormattedString */
public static formattedText: NodeFactory;
    
    
/** Property CharacterSpacing of Type Double */
public characterSpacing?: number | Bind;

/** Property Font of Type Font */
public font?: /*Font*/ any;

/** Property FontAttributes of Type FontAttributes */
public fontAttributes?: "None" | "Bold" | "Italic" | Bind;

/** Property FontFamily of Type String */
public fontFamily?: string | null | Bind;

/** Property FontSize of Type Double */
public fontSize?: number | Bind;

/** Property FormattedText of Type FormattedString */
public formattedText?: any;

/** Property HorizontalTextAlignment of Type TextAlignment */
public horizontalTextAlignment?: "Start" | "Center" | "End" | Bind;

/** Property LineBreakMode of Type LineBreakMode */
public lineBreakMode?: "NoWrap" | "WordWrap" | "CharacterWrap" | "HeadTruncation" | "TailTruncation" | "MiddleTruncation" | Bind;

/** Property LineHeight of Type Double */
public lineHeight?: number | Bind;

/** Property MaxLines of Type Int32 */
public maxLines?: number | Bind;

/** Property Padding of Type Thickness */
public padding?: /*Thickness*/ any;

/** Property Text of Type String */
public text?: string | null | Bind;

/** Property TextColor of Type Color */
public textColor?: ColorItem | string | null | Bind;

/** Property TextDecorations of Type TextDecorations */
public textDecorations?: "None" | "Underline" | "Strikethrough" | Bind;

/** Property TextType of Type TextType */
public textType?: "Text" | "Html" | Bind;

/** Property VerticalTextAlignment of Type TextAlignment */
public verticalTextAlignment?: "Start" | "Center" | "End" | Bind;

/** Property XAlign of Type TextAlignment */
public xAlign?: "Start" | "Center" | "End" | Bind;

/** Property YAlign of Type TextAlignment */
public yAlign?: "Start" | "Center" | "End" | Bind;
}


declare class ListView extends View {
    
    
/** Property ListView.FooterTemplate of Type Xamarin.Forms.DataTemplate */
public static footerTemplate: NodeFactory;;

/** Property ListView.GroupHeaderTemplate of Type Xamarin.Forms.DataTemplate */
public static groupHeaderTemplate: NodeFactory;;

/** Property ListView.HeaderTemplate of Type Xamarin.Forms.DataTemplate */
public static headerTemplate: NodeFactory;;

/** Property ListView.ItemTemplate of Type Xamarin.Forms.DataTemplate */
public static itemTemplate: NodeFactory;
    
    
/** Property CachingStrategy of Type ListViewCachingStrategy */
public cachingStrategy?: "RetainElement" | "RecycleElement" | "RecycleElementAndDataTemplate" | Bind;

/** Property Footer of Type Object */
public footer?: any;

/** Property FooterTemplate of Type DataTemplate */
public footerTemplate?: any;

/** Property GroupDisplayBinding of Type BindingBase */
public groupDisplayBinding?: any;

/** Property GroupHeaderTemplate of Type DataTemplate */
public groupHeaderTemplate?: any;

/** Property GroupShortNameBinding of Type BindingBase */
public groupShortNameBinding?: any;

/** Property HasUnevenRows of Type Boolean */
public hasUnevenRows?: boolean | Bind;

/** Property Header of Type Object */
public header?: any;

/** Property HeaderTemplate of Type DataTemplate */
public headerTemplate?: any;

/** Property HorizontalScrollBarVisibility of Type ScrollBarVisibility */
public horizontalScrollBarVisibility?: "Default" | "Always" | "Never" | Bind;

/** Property IsGroupingEnabled of Type Boolean */
public isGroupingEnabled?: boolean | Bind;

/** Property IsPullToRefreshEnabled of Type Boolean */
public isPullToRefreshEnabled?: boolean | Bind;

/** Property IsRefreshing of Type Boolean */
public isRefreshing?: boolean | Bind;

/** Property ItemsSource of Type IEnumerable */
public itemsSource?: any;

/** Property ItemTemplate of Type DataTemplate */
public itemTemplate?: any;

/** Property RefreshAllowed of Type Boolean */
public refreshAllowed?: boolean | Bind;

/** Property RefreshCommand of Type ICommand */
public refreshCommand?: any;

/** Property RefreshControlColor of Type Color */
public refreshControlColor?: ColorItem | string | null | Bind;

/** Property RowHeight of Type Int32 */
public rowHeight?: number | Bind;

/** Property SelectedItem of Type Object */
public selectedItem?: any;

/** Property SelectionMode of Type ListViewSelectionMode */
public selectionMode?: "None" | "Single" | Bind;

/** Property SeparatorColor of Type Color */
public separatorColor?: ColorItem | string | null | Bind;

/** Property SeparatorVisibility of Type SeparatorVisibility */
public separatorVisibility?: "Default" | "None" | Bind;

/** Property VerticalScrollBarVisibility of Type ScrollBarVisibility */
public verticalScrollBarVisibility?: "Default" | "Always" | "Never" | Bind;
}


declare class MasterDetailPage extends Page {
    
    
/** Property MasterDetailPage.Detail of Type Xamarin.Forms.Page */
public static detail: NodeFactory;;

/** Property MasterDetailPage.Master of Type Xamarin.Forms.Page */
public static master: NodeFactory;
    
    
/** Property CanChangeIsPresented of Type Boolean */
public canChangeIsPresented?: boolean | Bind;

/** Property Detail of Type Page */
public detail?: any;

/** Property DetailBounds of Type Rectangle */
public detailBounds?: "Zero" | Bind;

/** Property IsGestureEnabled of Type Boolean */
public isGestureEnabled?: boolean | Bind;

/** Property IsPresented of Type Boolean */
public isPresented?: boolean | Bind;

/** Property Master of Type Page */
public master?: any;

/** Property MasterBehavior of Type MasterBehavior */
public masterBehavior?: "Default" | "SplitOnLandscape" | "Split" | "Popover" | "SplitOnPortrait" | Bind;

/** Property MasterBounds of Type Rectangle */
public masterBounds?: "Zero" | Bind;
}


declare class MediaElement extends View {
    
    
/** Property MediaElement.Source of Type Xamarin.Forms.MediaSource */
public static source: NodeFactory;
    
    
/** Property Aspect of Type Aspect */
public aspect?: "AspectFit" | "AspectFill" | "Fill" | Bind;

/** Property AutoPlay of Type Boolean */
public autoPlay?: boolean | Bind;

/** Property IsLooping of Type Boolean */
public isLooping?: boolean | Bind;

/** Property KeepScreenOn of Type Boolean */
public keepScreenOn?: boolean | Bind;

/** Property Position of Type TimeSpan */
public position?: any;

/** Property ShowsPlaybackControls of Type Boolean */
public showsPlaybackControls?: boolean | Bind;

/** Property Source of Type MediaSource */
public source?: /*MediaSource*/ any;

/** Property Volume of Type Double */
public volume?: number | Bind;
}


declare class Menu extends BaseMenuItem {
    
    
/** Property Menu.Item of Type Xamarin.Forms.Menu */
public static item: NodeFactory;;

/** Property Menu.Items of Type Xamarin.Forms.MenuItem */
public static items: NodeFactory;
    
    
/** Property Item of Type Menu */
public item?: any;

/** Property Text of Type String */
public text?: string | null | Bind;
}


declare class MenuItem extends BaseMenuItem {
    
/** Attached Property MenuItem.Accelerator of Type BindableProperty*/
public static accelerator: AttachedNode;

    
/** Property MenuItem.IconImageSource of Type Xamarin.Forms.ImageSource */
public static iconImageSource: NodeFactory;;

/** Property MenuItem.StyleClass of Type System.String */
public static styleClass: NodeFactory;
    
    
/** Property class of Type IList`1 */
public class?: any;

/** Property Command of Type ICommand */
public command?: any;

/** Property CommandParameter of Type Object */
public commandParameter?: any;

/** Property Icon of Type FileImageSource */
public icon?: /*FileImageSource*/ any;

/** Property IconImageSource of Type ImageSource */
public iconImageSource?: /*ImageSource*/ any;

/** Property IsDestructive of Type Boolean */
public isDestructive?: boolean | Bind;

/** Property IsEnabled of Type Boolean */
public isEnabled?: boolean | Bind;

/** Property StyleClass of Type IList`1 */
public styleClass?: any;

/** Property Text of Type String */
public text?: string | null | Bind;
}


declare class NavigationPage extends Page {
    
/** Attached Property NavigationPage.BackButtonTitle of Type BindableProperty*/
public static backButtonTitle: AttachedNode;


/** Attached Property NavigationPage.HasNavigationBar of Type BindableProperty*/
public static hasNavigationBar: AttachedNode;


/** Attached Property NavigationPage.HasBackButton of Type BindableProperty*/
public static hasBackButton: AttachedNode;


/** Attached Property NavigationPage.IconColor of Type BindableProperty*/
public static iconColor: AttachedNode;

    
/** Property NavigationPage.CurrentPage of Type Xamarin.Forms.Page */
public static currentPage: NodeFactory;;

/** Property NavigationPage.RootPage of Type Xamarin.Forms.Page */
public static rootPage: NodeFactory;;

/** Property NavigationPage.TitleIcon of Type Xamarin.Forms.FileImageSource */
public static titleIcon: NodeFactory;;

/** Property NavigationPage.TitleIconImageSource of Type Xamarin.Forms.ImageSource */
public static titleIconImageSource: NodeFactory;;

/** Property NavigationPage.TitleView of Type Xamarin.Forms.View */
public static titleView: NodeFactory;
    
/** Constructor Parameter (root) of type Page */
root: any;

    
/** Property BarBackgroundColor of Type Color */
public barBackgroundColor?: ColorItem | string | null | Bind;

/** Property BarTextColor of Type Color */
public barTextColor?: ColorItem | string | null | Bind;

/** Property CurrentPage of Type Page */
public currentPage?: any;

/** Property RootPage of Type Page */
public rootPage?: any;

/** Property Tint of Type Color */
public tint?: ColorItem | string | null | Bind;
}


declare class OpenGLView extends View {
    
    
    
    
/** Property HasRenderLoop of Type Boolean */
public hasRenderLoop?: boolean | Bind;

/** Property OnDisplay of Type Action`1 */
public onDisplay?: any;
}


declare class OrientationStateTrigger extends StateTriggerBase {
    
    
    
    
/** Property Orientation of Type DeviceOrientation */
public orientation?: "Portrait" | "Landscape" | "PortraitUp" | "PortraitDown" | "LandscapeLeft" | "LandscapeRight" | "Other" | Bind;
}


declare class PanGestureRecognizer extends GestureRecognizer {
    
    
    
    
/** Property TouchPoints of Type Int32 */
public touchPoints?: number | Bind;
}


declare class Picker extends View {
    
    
/** Property Picker.Items of Type System.String */
public static items: NodeFactory;
    
    
/** Property CharacterSpacing of Type Double */
public characterSpacing?: number | Bind;

/** Property FontAttributes of Type FontAttributes */
public fontAttributes?: "None" | "Bold" | "Italic" | Bind;

/** Property FontFamily of Type String */
public fontFamily?: string | null | Bind;

/** Property FontSize of Type Double */
public fontSize?: number | Bind;

/** Property ItemDisplayBinding of Type BindingBase */
public itemDisplayBinding?: any;

/** Property ItemsSource of Type IList */
public itemsSource?: any;

/** Property SelectedIndex of Type Int32 */
public selectedIndex?: number | Bind;

/** Property SelectedItem of Type Object */
public selectedItem?: any;

/** Property TextColor of Type Color */
public textColor?: ColorItem | string | null | Bind;

/** Property Title of Type String */
public title?: string | null | Bind;

/** Property TitleColor of Type Color */
public titleColor?: ColorItem | string | null | Bind;
}


declare class PinchGestureRecognizer extends GestureRecognizer {
    
    
    
    
/** Property IsPinching of Type Boolean */
public isPinching?: boolean | Bind;
}


declare class ProgressBar extends View {
    
    
    
    
/** Property Progress of Type Double */
public progress?: number | Bind;

/** Property ProgressColor of Type Color */
public progressColor?: ColorItem | string | null | Bind;
}


declare class RadioButton extends Button {
    
    
    
    
/** Property GroupName of Type String */
public groupName?: string | null | Bind;

/** Property IsChecked of Type Boolean */
public isChecked?: boolean | Bind;
}


declare class RefreshView extends ContentView {
    
    
    
    
/** Property Command of Type ICommand */
public command?: any;

/** Property CommandParameter of Type Object */
public commandParameter?: any;

/** Property IsRefreshing of Type Boolean */
public isRefreshing?: boolean | Bind;

/** Property RefreshColor of Type Color */
public refreshColor?: ColorItem | string | null | Bind;
}


declare class RelativeLayout extends Layout {
    
/** Attached Property RelativeLayout.XConstraint of Type BindableProperty*/
public static xConstraint: AttachedNode;


/** Attached Property RelativeLayout.YConstraint of Type BindableProperty*/
public static yConstraint: AttachedNode;


/** Attached Property RelativeLayout.WidthConstraint of Type BindableProperty*/
public static widthConstraint: AttachedNode;


/** Attached Property RelativeLayout.HeightConstraint of Type BindableProperty*/
public static heightConstraint: AttachedNode;


/** Attached Property RelativeLayout.BoundsConstraint of Type BindableProperty*/
public static boundsConstraint: AttachedNode;

    
/** Property RelativeLayout.Children of Type Xamarin.Forms.View */
public static children: NodeFactory;
    
    
}


declare class RowDefinition extends BindableObject {
    
    
    
    
/** Property Height of Type GridLength */
public height?: "Auto" | number | string | Bind;
}


declare class ScrollView extends Layout {
    
    
/** Property ScrollView.Content of Type Xamarin.Forms.View */
public static content: NodeFactory;
    
    
/** Property Content of Type View */
public content?: any;

/** Property ContentSize of Type Size */
public contentSize?: "Zero" | Bind;

/** Property HorizontalScrollBarVisibility of Type ScrollBarVisibility */
public horizontalScrollBarVisibility?: "Default" | "Always" | "Never" | Bind;

/** Property LayoutAreaOverride of Type Rectangle */
public layoutAreaOverride?: "Zero" | Bind;

/** Property Orientation of Type ScrollOrientation */
public orientation?: "Vertical" | "Horizontal" | "Both" | "Neither" | Bind;

/** Property ScrollX of Type Double */
public scrollX?: number | Bind;

/** Property ScrollY of Type Double */
public scrollY?: number | Bind;

/** Property VerticalScrollBarVisibility of Type ScrollBarVisibility */
public verticalScrollBarVisibility?: "Default" | "Always" | "Never" | Bind;
}


declare class SearchBar extends InputView {
    
    
    
    
/** Property CancelButtonColor of Type Color */
public cancelButtonColor?: ColorItem | string | null | Bind;

/** Property FontAttributes of Type FontAttributes */
public fontAttributes?: "None" | "Bold" | "Italic" | Bind;

/** Property FontFamily of Type String */
public fontFamily?: string | null | Bind;

/** Property FontSize of Type Double */
public fontSize?: number | Bind;

/** Property HorizontalTextAlignment of Type TextAlignment */
public horizontalTextAlignment?: "Start" | "Center" | "End" | Bind;

/** Property SearchCommand of Type ICommand */
public searchCommand?: any;

/** Property SearchCommandParameter of Type Object */
public searchCommandParameter?: any;

/** Property VerticalTextAlignment of Type TextAlignment */
public verticalTextAlignment?: "Start" | "Center" | "End" | Bind;
}


declare class BackButtonBehavior extends BindableObject {
    
    
/** Property BackButtonBehavior.IconOverride of Type Xamarin.Forms.ImageSource */
public static iconOverride: NodeFactory;
    
    
/** Property Command of Type ICommand */
public command?: any;

/** Property CommandParameter of Type Object */
public commandParameter?: any;

/** Property IconOverride of Type ImageSource */
public iconOverride?: /*ImageSource*/ any;

/** Property IsEnabled of Type Boolean */
public isEnabled?: boolean | Bind;

/** Property TextOverride of Type String */
public textOverride?: string | null | Bind;
}


declare class BaseShellItem extends NavigableElement {
    
    
/** Property BaseShellItem.FlyoutIcon of Type Xamarin.Forms.ImageSource */
public static flyoutIcon: NodeFactory;;

/** Property BaseShellItem.Icon of Type Xamarin.Forms.ImageSource */
public static icon: NodeFactory;
    
    
/** Property FlyoutIcon of Type ImageSource */
public flyoutIcon?: /*ImageSource*/ any;

/** Property Icon of Type ImageSource */
public icon?: /*ImageSource*/ any;

/** Property IsEnabled of Type Boolean */
public isEnabled?: boolean | Bind;

/** Property IsTabStop of Type Boolean */
public isTabStop?: boolean | Bind;

/** Property Route of Type String */
public route?: string | null | Bind;

/** Property TabIndex of Type Int32 */
public tabIndex?: number | Bind;

/** Property Title of Type String */
public title?: string | null | Bind;
}


declare class SearchHandler extends BindableObject {
    
    
/** Property SearchHandler.ClearIcon of Type Xamarin.Forms.ImageSource */
public static clearIcon: NodeFactory;;

/** Property SearchHandler.ClearPlaceholderIcon of Type Xamarin.Forms.ImageSource */
public static clearPlaceholderIcon: NodeFactory;;

/** Property SearchHandler.ItemTemplate of Type Xamarin.Forms.DataTemplate */
public static itemTemplate: NodeFactory;;

/** Property SearchHandler.QueryIcon of Type Xamarin.Forms.ImageSource */
public static queryIcon: NodeFactory;
    
    
/** Property BackgroundColor of Type Color */
public backgroundColor?: ColorItem | string | null | Bind;

/** Property CancelButtonColor of Type Color */
public cancelButtonColor?: ColorItem | string | null | Bind;

/** Property CharacterSpacing of Type Double */
public characterSpacing?: number | Bind;

/** Property ClearIcon of Type ImageSource */
public clearIcon?: /*ImageSource*/ any;

/** Property ClearIconHelpText of Type String */
public clearIconHelpText?: string | null | Bind;

/** Property ClearIconName of Type String */
public clearIconName?: string | null | Bind;

/** Property ClearPlaceholderCommand of Type ICommand */
public clearPlaceholderCommand?: any;

/** Property ClearPlaceholderCommandParameter of Type Object */
public clearPlaceholderCommandParameter?: any;

/** Property ClearPlaceholderEnabled of Type Boolean */
public clearPlaceholderEnabled?: boolean | Bind;

/** Property ClearPlaceholderHelpText of Type String */
public clearPlaceholderHelpText?: string | null | Bind;

/** Property ClearPlaceholderIcon of Type ImageSource */
public clearPlaceholderIcon?: /*ImageSource*/ any;

/** Property ClearPlaceholderName of Type String */
public clearPlaceholderName?: string | null | Bind;

/** Property Command of Type ICommand */
public command?: any;

/** Property CommandParameter of Type Object */
public commandParameter?: any;

/** Property DisplayMemberName of Type String */
public displayMemberName?: string | null | Bind;

/** Property FontAttributes of Type FontAttributes */
public fontAttributes?: "None" | "Bold" | "Italic" | Bind;

/** Property FontFamily of Type String */
public fontFamily?: string | null | Bind;

/** Property FontSize of Type Double */
public fontSize?: number | Bind;

/** Property HorizontalTextAlignment of Type TextAlignment */
public horizontalTextAlignment?: "Start" | "Center" | "End" | Bind;

/** Property IsSearchEnabled of Type Boolean */
public isSearchEnabled?: boolean | Bind;

/** Property ItemsSource of Type IEnumerable */
public itemsSource?: any;

/** Property ItemTemplate of Type DataTemplate */
public itemTemplate?: any;

/** Property Keyboard of Type Keyboard */
public keyboard?: /*Keyboard*/ any;

/** Property Placeholder of Type String */
public placeholder?: string | null | Bind;

/** Property PlaceholderColor of Type Color */
public placeholderColor?: ColorItem | string | null | Bind;

/** Property Query of Type String */
public query?: string | null | Bind;

/** Property QueryIcon of Type ImageSource */
public queryIcon?: /*ImageSource*/ any;

/** Property QueryIconHelpText of Type String */
public queryIconHelpText?: string | null | Bind;

/** Property QueryIconName of Type String */
public queryIconName?: string | null | Bind;

/** Property SearchBoxVisibility of Type SearchBoxVisibility */
public searchBoxVisibility?: "Hidden" | "Collapsible" | "Expanded" | Bind;

/** Property ShowsResults of Type Boolean */
public showsResults?: boolean | Bind;

/** Property TextColor of Type Color */
public textColor?: ColorItem | string | null | Bind;

/** Property VerticalTextAlignment of Type TextAlignment */
public verticalTextAlignment?: "Start" | "Center" | "End" | Bind;
}


declare class Shell extends Page {
    
/** Attached Property Shell.BackButtonBehavior of Type BindableProperty*/
public static backButtonBehavior: AttachedNode;


/** Attached Property Shell.PresentationMode of Type BindableProperty*/
public static presentationMode: AttachedNode;


/** Attached Property Shell.FlyoutBehavior of Type BindableProperty*/
public static flyoutBehavior: AttachedNode;


/** Attached Property Shell.NavBarIsVisible of Type BindableProperty*/
public static navBarIsVisible: AttachedNode;


/** Attached Property Shell.NavBarHasShadow of Type BindableProperty*/
public static navBarHasShadow: AttachedNode;


/** Attached Property Shell.SearchHandler of Type BindableProperty*/
public static searchHandler: AttachedNode;


/** Attached Property Shell.TabBarIsVisible of Type BindableProperty*/
public static tabBarIsVisible: AttachedNode;


/** Attached Property Shell.BackgroundColor of Type BindableProperty*/
public static backgroundColor: AttachedNode;


/** Attached Property Shell.DisabledColor of Type BindableProperty*/
public static disabledColor: AttachedNode;


/** Attached Property Shell.ForegroundColor of Type BindableProperty*/
public static foregroundColor: AttachedNode;


/** Attached Property Shell.TabBarBackgroundColor of Type BindableProperty*/
public static tabBarBackgroundColor: AttachedNode;


/** Attached Property Shell.TabBarDisabledColor of Type BindableProperty*/
public static tabBarDisabledColor: AttachedNode;


/** Attached Property Shell.TabBarForegroundColor of Type BindableProperty*/
public static tabBarForegroundColor: AttachedNode;


/** Attached Property Shell.TabBarTitleColor of Type BindableProperty*/
public static tabBarTitleColor: AttachedNode;


/** Attached Property Shell.TabBarUnselectedColor of Type BindableProperty*/
public static tabBarUnselectedColor: AttachedNode;


/** Attached Property Shell.TitleColor of Type BindableProperty*/
public static titleColor: AttachedNode;


/** Attached Property Shell.UnselectedColor of Type BindableProperty*/
public static unselectedColor: AttachedNode;

    
/** Property Shell.CurrentItem of Type Xamarin.Forms.ShellItem */
public static currentItem: NodeFactory;;

/** Property Shell.FlyoutBackgroundImage of Type Xamarin.Forms.ImageSource */
public static flyoutBackgroundImage: NodeFactory;;

/** Property Shell.FlyoutHeaderTemplate of Type Xamarin.Forms.DataTemplate */
public static flyoutHeaderTemplate: NodeFactory;;

/** Property Shell.FlyoutIcon of Type Xamarin.Forms.ImageSource */
public static flyoutIcon: NodeFactory;;

/** Property Shell.Items of Type Xamarin.Forms.ShellItem */
public static items: NodeFactory;;

/** Property Shell.ItemTemplate of Type Xamarin.Forms.DataTemplate */
public static itemTemplate: NodeFactory;;

/** Property Shell.MenuItemTemplate of Type Xamarin.Forms.DataTemplate */
public static menuItemTemplate: NodeFactory;;

/** Property Shell.TitleView of Type Xamarin.Forms.View */
public static titleView: NodeFactory;
    
    
/** Property CurrentItem of Type ShellItem */
public currentItem?: any;

/** Property FlyoutBackgroundColor of Type Color */
public flyoutBackgroundColor?: ColorItem | string | null | Bind;

/** Property FlyoutBackgroundImage of Type ImageSource */
public flyoutBackgroundImage?: /*ImageSource*/ any;

/** Property FlyoutBackgroundImageAspect of Type Aspect */
public flyoutBackgroundImageAspect?: "AspectFit" | "AspectFill" | "Fill" | Bind;

/** Property FlyoutBehavior of Type FlyoutBehavior */
public flyoutBehavior?: "Disabled" | "Flyout" | "Locked" | Bind;

/** Property FlyoutHeader of Type Object */
public flyoutHeader?: any;

/** Property FlyoutHeaderBehavior of Type FlyoutHeaderBehavior */
public flyoutHeaderBehavior?: "Default" | "Fixed" | "Scroll" | "CollapseOnScroll" | Bind;

/** Property FlyoutHeaderTemplate of Type DataTemplate */
public flyoutHeaderTemplate?: any;

/** Property FlyoutIcon of Type ImageSource */
public flyoutIcon?: /*ImageSource*/ any;

/** Property FlyoutIsPresented of Type Boolean */
public flyoutIsPresented?: boolean | Bind;

/** Property FlyoutVerticalScrollMode of Type ScrollMode */
public flyoutVerticalScrollMode?: "Disabled" | "Enabled" | "Auto" | Bind;

/** Property ItemTemplate of Type DataTemplate */
public itemTemplate?: any;

/** Property MenuItemTemplate of Type DataTemplate */
public menuItemTemplate?: any;
}


declare class ShellContent extends BaseShellItem {
    
    
/** Property ShellContent.ContentTemplate of Type Xamarin.Forms.DataTemplate */
public static contentTemplate: NodeFactory;;

/** Property ShellContent.MenuItems of Type Xamarin.Forms.MenuItem */
public static menuItems: NodeFactory;
    
    
/** Property Content of Type Object */
public content?: any;

/** Property ContentTemplate of Type DataTemplate */
public contentTemplate?: any;
}


declare class ShellGroupItem extends BaseShellItem {
    
    
    
    
/** Property FlyoutDisplayOptions of Type FlyoutDisplayOptions */
public flyoutDisplayOptions?: "AsSingleItem" | "AsMultipleItems" | Bind;
}


declare class ShellItem extends ShellGroupItem {
    
    
/** Property ShellItem.CurrentItem of Type Xamarin.Forms.ShellSection */
public static currentItem: NodeFactory;;

/** Property ShellItem.Items of Type Xamarin.Forms.ShellSection */
public static items: NodeFactory;
    
    
/** Property CurrentItem of Type ShellSection */
public currentItem?: any;
}


declare class FlyoutItem extends ShellItem {
    
    
    
    
}


declare class TabBar extends ShellItem {
    
    
    
    
}


declare class ShellSection extends ShellGroupItem {
    
    
/** Property ShellSection.CurrentItem of Type Xamarin.Forms.ShellContent */
public static currentItem: NodeFactory;;

/** Property ShellSection.Items of Type Xamarin.Forms.ShellContent */
public static items: NodeFactory;
    
    
/** Property CurrentItem of Type ShellContent */
public currentItem?: any;
}


declare class Tab extends ShellSection {
    
    
    
    
}


declare class Slider extends View {
    
    
/** Property Slider.ThumbImageSource of Type Xamarin.Forms.ImageSource */
public static thumbImageSource: NodeFactory;
    
    
/** Property DragCompletedCommand of Type ICommand */
public dragCompletedCommand?: any;

/** Property DragStartedCommand of Type ICommand */
public dragStartedCommand?: any;

/** Property Maximum of Type Double */
public maximum?: number | Bind;

/** Property MaximumTrackColor of Type Color */
public maximumTrackColor?: ColorItem | string | null | Bind;

/** Property Minimum of Type Double */
public minimum?: number | Bind;

/** Property MinimumTrackColor of Type Color */
public minimumTrackColor?: ColorItem | string | null | Bind;

/** Property ThumbColor of Type Color */
public thumbColor?: ColorItem | string | null | Bind;

/** Property ThumbImage of Type FileImageSource */
public thumbImage?: /*FileImageSource*/ any;

/** Property ThumbImageSource of Type ImageSource */
public thumbImageSource?: /*ImageSource*/ any;

/** Property Value of Type Double */
public value?: number | Bind;
}


declare class Span extends GestureElement {
    
    
    
    
/** Property BackgroundColor of Type Color */
public backgroundColor?: ColorItem | string | null | Bind;

/** Property CharacterSpacing of Type Double */
public characterSpacing?: number | Bind;

/** Property Font of Type Font */
public font?: /*Font*/ any;

/** Property FontAttributes of Type FontAttributes */
public fontAttributes?: "None" | "Bold" | "Italic" | Bind;

/** Property FontFamily of Type String */
public fontFamily?: string | null | Bind;

/** Property FontSize of Type Double */
public fontSize?: number | Bind;

/** Property ForegroundColor of Type Color */
public foregroundColor?: ColorItem | string | null | Bind;

/** Property LineHeight of Type Double */
public lineHeight?: number | Bind;

/** Property Style of Type Style */
public style?: any;

/** Property Text of Type String */
public text?: string | null | Bind;

/** Property TextColor of Type Color */
public textColor?: ColorItem | string | null | Bind;

/** Property TextDecorations of Type TextDecorations */
public textDecorations?: "None" | "Underline" | "Strikethrough" | Bind;
}


declare class StackLayout extends Layout {
    
    
/** Property StackLayout.Children of Type Xamarin.Forms.View */
public static children: NodeFactory;
    
    
/** Property Orientation of Type StackOrientation */
public orientation?: "Vertical" | "Horizontal" | Bind;

/** Property Spacing of Type Double */
public spacing?: number | Bind;
}


declare class StateTrigger extends StateTriggerBase {
    
    
    
    
/** Property IsActive of Type Boolean */
public isActive?: boolean | Bind;
}


declare class Stepper extends View {
    
    
    
    
/** Property Increment of Type Double */
public increment?: number | Bind;

/** Property Maximum of Type Double */
public maximum?: number | Bind;

/** Property Minimum of Type Double */
public minimum?: number | Bind;

/** Property StepperPosition of Type Int32 */
public stepperPosition?: number | Bind;

/** Property Value of Type Double */
public value?: number | Bind;
}


declare class StreamImageSource extends ImageSource {
    
    
    
    
/** Property Stream of Type Func`2 */
public stream?: any;
}


declare class SwipeGestureRecognizer extends GestureRecognizer {
    
    
    
    
/** Property Command of Type ICommand */
public command?: any;

/** Property CommandParameter of Type Object */
public commandParameter?: any;

/** Property Direction of Type SwipeDirection */
public direction?: "Right" | "Left" | "Up" | "Down" | Bind;

/** Property Threshold of Type UInt32 */
public threshold?: any;
}


declare class SwipeItem extends MenuItem {
    
    
    
    
/** Property BackgroundColor of Type Color */
public backgroundColor?: ColorItem | string | null | Bind;

/** Property IsVisible of Type Boolean */
public isVisible?: boolean | Bind;
}


declare class SwipeItems extends Element {
    
    
    
    
/** Property Item of Type ISwipeItem */
public item?: any;

/** Property Mode of Type SwipeMode */
public mode?: "Reveal" | "Execute" | Bind;

/** Property SwipeBehaviorOnInvoked of Type SwipeBehaviorOnInvoked */
public swipeBehaviorOnInvoked?: "Auto" | "Close" | "RemainOpen" | Bind;
}


declare class SwipeItemView extends ContentView {
    
    
    
    
/** Property Command of Type ICommand */
public command?: any;

/** Property CommandParameter of Type Object */
public commandParameter?: any;
}


declare class SwipeView extends ContentView {
    
    
/** Property SwipeView.BottomItems of Type Xamarin.Forms.ISwipeItem */
public static bottomItems: NodeFactory;;

/** Property SwipeView.LeftItems of Type Xamarin.Forms.ISwipeItem */
public static leftItems: NodeFactory;;

/** Property SwipeView.RightItems of Type Xamarin.Forms.ISwipeItem */
public static rightItems: NodeFactory;;

/** Property SwipeView.TopItems of Type Xamarin.Forms.ISwipeItem */
public static topItems: NodeFactory;
    
    
/** Property BottomItems of Type SwipeItems */
public bottomItems?: any;

/** Property LeftItems of Type SwipeItems */
public leftItems?: any;

/** Property RightItems of Type SwipeItems */
public rightItems?: any;

/** Property TopItems of Type SwipeItems */
public topItems?: any;
}


declare class Switch extends View {
    
    
    
    
/** Property IsToggled of Type Boolean */
public isToggled?: boolean | Bind;

/** Property OnColor of Type Color */
public onColor?: ColorItem | string | null | Bind;

/** Property ThumbColor of Type Color */
public thumbColor?: ColorItem | string | null | Bind;
}


declare class TabbedPage extends Page {
    
    
/** Property TabbedPage.Children of Type Xamarin.Forms.Page */
public static children: NodeFactory;;

/** Property TabbedPage.CurrentPage of Type Xamarin.Forms.Page */
public static currentPage: NodeFactory;;

/** Property TabbedPage.ItemTemplate of Type Xamarin.Forms.DataTemplate */
public static itemTemplate: NodeFactory;
    
    
/** Property BarBackgroundColor of Type Color */
public barBackgroundColor?: ColorItem | string | null | Bind;

/** Property BarTextColor of Type Color */
public barTextColor?: ColorItem | string | null | Bind;

/** Property CurrentPage of Type Page */
public currentPage?: any;

/** Property ItemsSource of Type IEnumerable */
public itemsSource?: any;

/** Property ItemTemplate of Type DataTemplate */
public itemTemplate?: any;

/** Property SelectedItem of Type Object */
public selectedItem?: any;

/** Property SelectedTabColor of Type Color */
public selectedTabColor?: ColorItem | string | null | Bind;

/** Property UnselectedTabColor of Type Color */
public unselectedTabColor?: ColorItem | string | null | Bind;
}


declare class TableSectionBase extends BindableObject {
    
    
    
    
/** Property TextColor of Type Color */
public textColor?: ColorItem | string | null | Bind;

/** Property Title of Type String */
public title?: string | null | Bind;
}


declare class TableRoot extends TableSectionBase {
    
    
/** Property TableRoot.Item of Type Xamarin.Forms.Cell */
public static item: NodeFactory;
    
    
/** Property Item of Type TableSection */
public item?: any;
}


declare class TableSection extends TableSectionBase {
    
    
/** Property TableSection.Item of Type Xamarin.Forms.Cell */
public static item: NodeFactory;
    
    
/** Property Item of Type Cell */
public item?: any;
}


declare class TableView extends View {
    
    
/** Property TableView.Root of Type Xamarin.Forms.TableSection */
public static root: NodeFactory;
    
    
/** Property HasUnevenRows of Type Boolean */
public hasUnevenRows?: boolean | Bind;

/** Property Intent of Type TableIntent */
public intent?: "Menu" | "Settings" | "Form" | "Data" | Bind;

/** Property Model of Type TableModel */
public model?: any;

/** Property Root of Type TableRoot */
public root?: any;

/** Property RowHeight of Type Int32 */
public rowHeight?: number | Bind;
}


declare class TapGestureRecognizer extends GestureRecognizer {
    
    
    
    
/** Property Command of Type ICommand */
public command?: any;

/** Property CommandParameter of Type Object */
public commandParameter?: any;

/** Property NumberOfTapsRequired of Type Int32 */
public numberOfTapsRequired?: number | Bind;

/** Property TappedCallback of Type Action`2 */
public tappedCallback?: any;

/** Property TappedCallbackParameter of Type Object */
public tappedCallbackParameter?: any;
}


declare class TimePicker extends View {
    
    
    
    
/** Property CharacterSpacing of Type Double */
public characterSpacing?: number | Bind;

/** Property FontAttributes of Type FontAttributes */
public fontAttributes?: "None" | "Bold" | "Italic" | Bind;

/** Property FontFamily of Type String */
public fontFamily?: string | null | Bind;

/** Property FontSize of Type Double */
public fontSize?: number | Bind;

/** Property Format of Type String */
public format?: string | null | Bind;

/** Property TextColor of Type Color */
public textColor?: ColorItem | string | null | Bind;

/** Property Time of Type TimeSpan */
public time?: any;
}


declare class ToolbarItem extends MenuItem {
    
    
    
    
/** Property Name of Type String */
public name?: string | null | Bind;

/** Property Order of Type ToolbarItemOrder */
public order?: "Default" | "Primary" | "Secondary" | Bind;

/** Property Priority of Type Int32 */
public priority?: number | Bind;
}


declare class UriImageSource extends ImageSource {
    
    
    
    
/** Property CacheValidity of Type TimeSpan */
public cacheValidity?: any;

/** Property CachingEnabled of Type Boolean */
public cachingEnabled?: boolean | Bind;

/** Property Uri of Type Uri */
public uri?: any;
}


declare class UriMediaSource extends MediaSource {
    
    
    
    
/** Property Uri of Type Uri */
public uri?: any;
}


declare class UrlWebViewSource extends WebViewSource {
    
    
    
    
/** Property Url of Type String */
public url?: string | null | Bind;
}


declare class WebView extends View {
    
    
    
    
/** Property Cookies of Type CookieContainer */
public cookies?: any;

/** Property Source of Type WebViewSource */
public source?: any;
}


declare class StyleSheet extends RootObject {
    
    
    
    
}
const XF = { BindableObject: bridge.getClass('Xamarin.Forms.BindableObject;Xamarin.Forms.Core') as typeof BindableObject,
	Element: bridge.getClass('Xamarin.Forms.Element;Xamarin.Forms.Core') as typeof Element,
	NavigableElement: bridge.getClass('Xamarin.Forms.NavigableElement;Xamarin.Forms.Core') as typeof NavigableElement,
	VisualElement: bridge.getClass('Xamarin.Forms.VisualElement;Xamarin.Forms.Core') as typeof VisualElement,
	View: bridge.getClass('Xamarin.Forms.View;Xamarin.Forms.Core') as typeof View,
	Layout: bridge.getClass('Xamarin.Forms.Layout;Xamarin.Forms.Core') as typeof Layout,
	AbsoluteLayout: bridge.getClass('Xamarin.Forms.AbsoluteLayout;Xamarin.Forms.Core') as typeof AbsoluteLayout,
	ActivityIndicator: bridge.getClass('Xamarin.Forms.ActivityIndicator;Xamarin.Forms.Core') as typeof ActivityIndicator,
	StateTriggerBase: bridge.getClass('Xamarin.Forms.StateTriggerBase;Xamarin.Forms.Core') as typeof StateTriggerBase,
	AdaptiveTrigger: bridge.getClass('Xamarin.Forms.AdaptiveTrigger;Xamarin.Forms.Core') as typeof AdaptiveTrigger,
	Application: bridge.getClass('Xamarin.Forms.Application;Xamarin.Forms.Core') as typeof Application,
	AppLinkEntry: bridge.getClass('Xamarin.Forms.AppLinkEntry;Xamarin.Forms.Core') as typeof AppLinkEntry,
	BaseMenuItem: bridge.getClass('Xamarin.Forms.BaseMenuItem;Xamarin.Forms.Core') as typeof BaseMenuItem,
	BindableLayout: bridge.getClass('Xamarin.Forms.BindableLayout;Xamarin.Forms.Core') as typeof BindableLayout,
	BoxView: bridge.getClass('Xamarin.Forms.BoxView;Xamarin.Forms.Core') as typeof BoxView,
	Button: bridge.getClass('Xamarin.Forms.Button;Xamarin.Forms.Core') as typeof Button,
	Page: bridge.getClass('Xamarin.Forms.Page;Xamarin.Forms.Core') as typeof Page,
	CarouselPage: bridge.getClass('Xamarin.Forms.CarouselPage;Xamarin.Forms.Core') as typeof CarouselPage,
	Cell: bridge.getClass('Xamarin.Forms.Cell;Xamarin.Forms.Core') as typeof Cell,
	EntryCell: bridge.getClass('Xamarin.Forms.EntryCell;Xamarin.Forms.Core') as typeof EntryCell,
	TextCell: bridge.getClass('Xamarin.Forms.TextCell;Xamarin.Forms.Core') as typeof TextCell,
	ImageCell: bridge.getClass('Xamarin.Forms.ImageCell;Xamarin.Forms.Core') as typeof ImageCell,
	SwitchCell: bridge.getClass('Xamarin.Forms.SwitchCell;Xamarin.Forms.Core') as typeof SwitchCell,
	ViewCell: bridge.getClass('Xamarin.Forms.ViewCell;Xamarin.Forms.Core') as typeof ViewCell,
	CheckBox: bridge.getClass('Xamarin.Forms.CheckBox;Xamarin.Forms.Core') as typeof CheckBox,
	GestureRecognizer: bridge.getClass('Xamarin.Forms.GestureRecognizer;Xamarin.Forms.Core') as typeof GestureRecognizer,
	ClickGestureRecognizer: bridge.getClass('Xamarin.Forms.ClickGestureRecognizer;Xamarin.Forms.Core') as typeof ClickGestureRecognizer,
	ColumnDefinition: bridge.getClass('Xamarin.Forms.ColumnDefinition;Xamarin.Forms.Core') as typeof ColumnDefinition,
	CompareStateTrigger: bridge.getClass('Xamarin.Forms.CompareStateTrigger;Xamarin.Forms.Core') as typeof CompareStateTrigger,
	TemplatedPage: bridge.getClass('Xamarin.Forms.TemplatedPage;Xamarin.Forms.Core') as typeof TemplatedPage,
	ContentPage: bridge.getClass('Xamarin.Forms.ContentPage;Xamarin.Forms.Core') as typeof ContentPage,
	ContentPresenter: bridge.getClass('Xamarin.Forms.ContentPresenter;Xamarin.Forms.Core') as typeof ContentPresenter,
	TemplatedView: bridge.getClass('Xamarin.Forms.TemplatedView;Xamarin.Forms.Core') as typeof TemplatedView,
	ContentView: bridge.getClass('Xamarin.Forms.ContentView;Xamarin.Forms.Core') as typeof ContentView,
	ControlTemplate: bridge.getClass('Xamarin.Forms.ControlTemplate;Xamarin.Forms.Core') as typeof ControlTemplate,
	DataTemplate: bridge.getClass('Xamarin.Forms.DataTemplate;Xamarin.Forms.Core') as typeof DataTemplate,
	DataTemplateSelector: bridge.getClass('Xamarin.Forms.DataTemplateSelector;Xamarin.Forms.Core') as typeof DataTemplateSelector,
	DatePicker: bridge.getClass('Xamarin.Forms.DatePicker;Xamarin.Forms.Core') as typeof DatePicker,
	DeviceStateTrigger: bridge.getClass('Xamarin.Forms.DeviceStateTrigger;Xamarin.Forms.Core') as typeof DeviceStateTrigger,
	InputView: bridge.getClass('Xamarin.Forms.InputView;Xamarin.Forms.Core') as typeof InputView,
	Editor: bridge.getClass('Xamarin.Forms.Editor;Xamarin.Forms.Core') as typeof Editor,
	Entry: bridge.getClass('Xamarin.Forms.Entry;Xamarin.Forms.Core') as typeof Entry,
	Expander: bridge.getClass('Xamarin.Forms.Expander;Xamarin.Forms.Core') as typeof Expander,
	ImageSource: bridge.getClass('Xamarin.Forms.ImageSource;Xamarin.Forms.Core') as typeof ImageSource,
	FileImageSource: bridge.getClass('Xamarin.Forms.FileImageSource;Xamarin.Forms.Core') as typeof FileImageSource,
	MediaSource: bridge.getClass('Xamarin.Forms.MediaSource;Xamarin.Forms.Core') as typeof MediaSource,
	FileMediaSource: bridge.getClass('Xamarin.Forms.FileMediaSource;Xamarin.Forms.Core') as typeof FileMediaSource,
	FlexLayout: bridge.getClass('Xamarin.Forms.FlexLayout;Xamarin.Forms.Core') as typeof FlexLayout,
	FontImageSource: bridge.getClass('Xamarin.Forms.FontImageSource;Xamarin.Forms.Core') as typeof FontImageSource,
	FormattedString: bridge.getClass('Xamarin.Forms.FormattedString;Xamarin.Forms.Core') as typeof FormattedString,
	Frame: bridge.getClass('Xamarin.Forms.Frame;Xamarin.Forms.Core') as typeof Frame,
	GestureElement: bridge.getClass('Xamarin.Forms.GestureElement;Xamarin.Forms.Core') as typeof GestureElement,
	Grid: bridge.getClass('Xamarin.Forms.Grid;Xamarin.Forms.Core') as typeof Grid,
	WebViewSource: bridge.getClass('Xamarin.Forms.WebViewSource;Xamarin.Forms.Core') as typeof WebViewSource,
	HtmlWebViewSource: bridge.getClass('Xamarin.Forms.HtmlWebViewSource;Xamarin.Forms.Core') as typeof HtmlWebViewSource,
	Image: bridge.getClass('Xamarin.Forms.Image;Xamarin.Forms.Core') as typeof Image,
	ImageButton: bridge.getClass('Xamarin.Forms.ImageButton;Xamarin.Forms.Core') as typeof ImageButton,
	IndicatorView: bridge.getClass('Xamarin.Forms.IndicatorView;Xamarin.Forms.Core') as typeof IndicatorView,
	Behavior: bridge.getClass('Xamarin.Forms.Behavior;Xamarin.Forms.Core') as typeof Behavior,
	TriggerBase: bridge.getClass('Xamarin.Forms.TriggerBase;Xamarin.Forms.Core') as typeof TriggerBase,
	DataTrigger: bridge.getClass('Xamarin.Forms.DataTrigger;Xamarin.Forms.Core') as typeof DataTrigger,
	EventTrigger: bridge.getClass('Xamarin.Forms.EventTrigger;Xamarin.Forms.Core') as typeof EventTrigger,
	MultiTrigger: bridge.getClass('Xamarin.Forms.MultiTrigger;Xamarin.Forms.Core') as typeof MultiTrigger,
	Trigger: bridge.getClass('Xamarin.Forms.Trigger;Xamarin.Forms.Core') as typeof Trigger,
	ItemsView: bridge.getClass('Xamarin.Forms.ItemsView;Xamarin.Forms.Core') as typeof ItemsView,
	CarouselView: bridge.getClass('Xamarin.Forms.CarouselView;Xamarin.Forms.Core') as typeof CarouselView,
	StructuredItemsView: bridge.getClass('Xamarin.Forms.StructuredItemsView;Xamarin.Forms.Core') as typeof StructuredItemsView,
	SelectableItemsView: bridge.getClass('Xamarin.Forms.SelectableItemsView;Xamarin.Forms.Core') as typeof SelectableItemsView,
	GroupableItemsView: bridge.getClass('Xamarin.Forms.GroupableItemsView;Xamarin.Forms.Core') as typeof GroupableItemsView,
	CollectionView: bridge.getClass('Xamarin.Forms.CollectionView;Xamarin.Forms.Core') as typeof CollectionView,
	ItemsLayout: bridge.getClass('Xamarin.Forms.ItemsLayout;Xamarin.Forms.Core') as typeof ItemsLayout,
	GridItemsLayout: bridge.getClass('Xamarin.Forms.GridItemsLayout;Xamarin.Forms.Core') as typeof GridItemsLayout,
	LinearItemsLayout: bridge.getClass('Xamarin.Forms.LinearItemsLayout;Xamarin.Forms.Core') as typeof LinearItemsLayout,
	Label: bridge.getClass('Xamarin.Forms.Label;Xamarin.Forms.Core') as typeof Label,
	ListView: bridge.getClass('Xamarin.Forms.ListView;Xamarin.Forms.Core') as typeof ListView,
	MasterDetailPage: bridge.getClass('Xamarin.Forms.MasterDetailPage;Xamarin.Forms.Core') as typeof MasterDetailPage,
	MediaElement: bridge.getClass('Xamarin.Forms.MediaElement;Xamarin.Forms.Core') as typeof MediaElement,
	Menu: bridge.getClass('Xamarin.Forms.Menu;Xamarin.Forms.Core') as typeof Menu,
	MenuItem: bridge.getClass('Xamarin.Forms.MenuItem;Xamarin.Forms.Core') as typeof MenuItem,
	NavigationPage: bridge.getClass('Xamarin.Forms.NavigationPage;Xamarin.Forms.Core') as typeof NavigationPage,
	OpenGLView: bridge.getClass('Xamarin.Forms.OpenGLView;Xamarin.Forms.Core') as typeof OpenGLView,
	OrientationStateTrigger: bridge.getClass('Xamarin.Forms.OrientationStateTrigger;Xamarin.Forms.Core') as typeof OrientationStateTrigger,
	PanGestureRecognizer: bridge.getClass('Xamarin.Forms.PanGestureRecognizer;Xamarin.Forms.Core') as typeof PanGestureRecognizer,
	Picker: bridge.getClass('Xamarin.Forms.Picker;Xamarin.Forms.Core') as typeof Picker,
	PinchGestureRecognizer: bridge.getClass('Xamarin.Forms.PinchGestureRecognizer;Xamarin.Forms.Core') as typeof PinchGestureRecognizer,
	ProgressBar: bridge.getClass('Xamarin.Forms.ProgressBar;Xamarin.Forms.Core') as typeof ProgressBar,
	RadioButton: bridge.getClass('Xamarin.Forms.RadioButton;Xamarin.Forms.Core') as typeof RadioButton,
	RefreshView: bridge.getClass('Xamarin.Forms.RefreshView;Xamarin.Forms.Core') as typeof RefreshView,
	RelativeLayout: bridge.getClass('Xamarin.Forms.RelativeLayout;Xamarin.Forms.Core') as typeof RelativeLayout,
	RowDefinition: bridge.getClass('Xamarin.Forms.RowDefinition;Xamarin.Forms.Core') as typeof RowDefinition,
	ScrollView: bridge.getClass('Xamarin.Forms.ScrollView;Xamarin.Forms.Core') as typeof ScrollView,
	SearchBar: bridge.getClass('Xamarin.Forms.SearchBar;Xamarin.Forms.Core') as typeof SearchBar,
	BackButtonBehavior: bridge.getClass('Xamarin.Forms.BackButtonBehavior;Xamarin.Forms.Core') as typeof BackButtonBehavior,
	BaseShellItem: bridge.getClass('Xamarin.Forms.BaseShellItem;Xamarin.Forms.Core') as typeof BaseShellItem,
	SearchHandler: bridge.getClass('Xamarin.Forms.SearchHandler;Xamarin.Forms.Core') as typeof SearchHandler,
	Shell: bridge.getClass('Xamarin.Forms.Shell;Xamarin.Forms.Core') as typeof Shell,
	ShellContent: bridge.getClass('Xamarin.Forms.ShellContent;Xamarin.Forms.Core') as typeof ShellContent,
	ShellGroupItem: bridge.getClass('Xamarin.Forms.ShellGroupItem;Xamarin.Forms.Core') as typeof ShellGroupItem,
	ShellItem: bridge.getClass('Xamarin.Forms.ShellItem;Xamarin.Forms.Core') as typeof ShellItem,
	FlyoutItem: bridge.getClass('Xamarin.Forms.FlyoutItem;Xamarin.Forms.Core') as typeof FlyoutItem,
	TabBar: bridge.getClass('Xamarin.Forms.TabBar;Xamarin.Forms.Core') as typeof TabBar,
	ShellSection: bridge.getClass('Xamarin.Forms.ShellSection;Xamarin.Forms.Core') as typeof ShellSection,
	Tab: bridge.getClass('Xamarin.Forms.Tab;Xamarin.Forms.Core') as typeof Tab,
	Slider: bridge.getClass('Xamarin.Forms.Slider;Xamarin.Forms.Core') as typeof Slider,
	Span: bridge.getClass('Xamarin.Forms.Span;Xamarin.Forms.Core') as typeof Span,
	StackLayout: bridge.getClass('Xamarin.Forms.StackLayout;Xamarin.Forms.Core') as typeof StackLayout,
	StateTrigger: bridge.getClass('Xamarin.Forms.StateTrigger;Xamarin.Forms.Core') as typeof StateTrigger,
	Stepper: bridge.getClass('Xamarin.Forms.Stepper;Xamarin.Forms.Core') as typeof Stepper,
	StreamImageSource: bridge.getClass('Xamarin.Forms.StreamImageSource;Xamarin.Forms.Core') as typeof StreamImageSource,
	SwipeGestureRecognizer: bridge.getClass('Xamarin.Forms.SwipeGestureRecognizer;Xamarin.Forms.Core') as typeof SwipeGestureRecognizer,
	SwipeItem: bridge.getClass('Xamarin.Forms.SwipeItem;Xamarin.Forms.Core') as typeof SwipeItem,
	SwipeItems: bridge.getClass('Xamarin.Forms.SwipeItems;Xamarin.Forms.Core') as typeof SwipeItems,
	SwipeItemView: bridge.getClass('Xamarin.Forms.SwipeItemView;Xamarin.Forms.Core') as typeof SwipeItemView,
	SwipeView: bridge.getClass('Xamarin.Forms.SwipeView;Xamarin.Forms.Core') as typeof SwipeView,
	Switch: bridge.getClass('Xamarin.Forms.Switch;Xamarin.Forms.Core') as typeof Switch,
	TabbedPage: bridge.getClass('Xamarin.Forms.TabbedPage;Xamarin.Forms.Core') as typeof TabbedPage,
	TableSectionBase: bridge.getClass('Xamarin.Forms.TableSectionBase;Xamarin.Forms.Core') as typeof TableSectionBase,
	TableRoot: bridge.getClass('Xamarin.Forms.TableRoot;Xamarin.Forms.Core') as typeof TableRoot,
	TableSection: bridge.getClass('Xamarin.Forms.TableSection;Xamarin.Forms.Core') as typeof TableSection,
	TableView: bridge.getClass('Xamarin.Forms.TableView;Xamarin.Forms.Core') as typeof TableView,
	TapGestureRecognizer: bridge.getClass('Xamarin.Forms.TapGestureRecognizer;Xamarin.Forms.Core') as typeof TapGestureRecognizer,
	TimePicker: bridge.getClass('Xamarin.Forms.TimePicker;Xamarin.Forms.Core') as typeof TimePicker,
	ToolbarItem: bridge.getClass('Xamarin.Forms.ToolbarItem;Xamarin.Forms.Core') as typeof ToolbarItem,
	UriImageSource: bridge.getClass('Xamarin.Forms.UriImageSource;Xamarin.Forms.Core') as typeof UriImageSource,
	UriMediaSource: bridge.getClass('Xamarin.Forms.UriMediaSource;Xamarin.Forms.Core') as typeof UriMediaSource,
	UrlWebViewSource: bridge.getClass('Xamarin.Forms.UrlWebViewSource;Xamarin.Forms.Core') as typeof UrlWebViewSource,
	WebView: bridge.getClass('Xamarin.Forms.WebView;Xamarin.Forms.Core') as typeof WebView,
	StyleSheet: bridge.getClass('Xamarin.Forms.StyleSheets.StyleSheet;Xamarin.Forms.Core') as typeof StyleSheet
};
export default XF;
