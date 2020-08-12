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

/** Property VisualElement.Clip of Type Xamarin.Forms.Shapes.Geometry */
public static clip: NodeFactory;;

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

/** Property Clip of Type Geometry */
public clip?: any;

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

/** Property UserAppTheme of Type OSAppTheme */
public userAppTheme?: "Unspecified" | "Light" | "Dark" | Bind;
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


declare class PathSegment extends BindableObject {
    
    
    
    
}


declare class ArcSegment extends PathSegment {
    
    
    
    
/** Property IsLargeArc of Type Boolean */
public isLargeArc?: boolean | Bind;

/** Property Point of Type Point */
public point?: "Zero" | Bind;

/** Property RotationAngle of Type Double */
public rotationAngle?: number | Bind;

/** Property Size of Type Size */
public size?: "Zero" | Bind;

/** Property SweepDirection of Type SweepDirection */
public sweepDirection?: "CounterClockwise" | "Clockwise" | Bind;
}


declare class BezierSegment extends PathSegment {
    
    
    
    
/** Property Point1 of Type Point */
public point1?: "Zero" | Bind;

/** Property Point2 of Type Point */
public point2?: "Zero" | Bind;

/** Property Point3 of Type Point */
public point3?: "Zero" | Bind;
}


declare class Transform extends BindableObject {
    
    
    
    
/** Property Value of Type Matrix */
public value?: /*Matrix*/ any;
}


declare class CompositeTransform extends Transform {
    
    
    
    
/** Property CenterX of Type Double */
public centerX?: number | Bind;

/** Property CenterY of Type Double */
public centerY?: number | Bind;

/** Property Rotation of Type Double */
public rotation?: number | Bind;

/** Property ScaleX of Type Double */
public scaleX?: number | Bind;

/** Property ScaleY of Type Double */
public scaleY?: number | Bind;

/** Property SkewX of Type Double */
public skewX?: number | Bind;

/** Property SkewY of Type Double */
public skewY?: number | Bind;

/** Property TranslateX of Type Double */
public translateX?: number | Bind;

/** Property TranslateY of Type Double */
public translateY?: number | Bind;
}


declare class Shape extends View {
    
    
/** Property Shape.StrokeDashArray of Type System.Double */
public static strokeDashArray: NodeFactory;
    
    
/** Property Aspect of Type Stretch */
public aspect?: "None" | "Fill" | "Uniform" | "UniformToFill" | Bind;

/** Property Fill of Type Color */
public fill?: ColorItem | string | null | Bind;

/** Property Stroke of Type Color */
public stroke?: ColorItem | string | null | Bind;

/** Property StrokeDashArray of Type DoubleCollection */
public strokeDashArray?: /*DoubleCollection*/ any;

/** Property StrokeDashOffset of Type Double */
public strokeDashOffset?: number | Bind;

/** Property StrokeLineCap of Type PenLineCap */
public strokeLineCap?: "Flat" | "Square" | "Round" | Bind;

/** Property StrokeLineJoin of Type PenLineJoin */
public strokeLineJoin?: "Miter" | "Bevel" | "Round" | Bind;

/** Property StrokeThickness of Type Double */
public strokeThickness?: number | Bind;
}


declare class Ellipse extends Shape {
    
    
    
    
}


declare class Geometry extends BindableObject {
    
    
    
    
}


declare class EllipseGeometry extends Geometry {
    
    
    
    
/** Property Center of Type Point */
public center?: "Zero" | Bind;

/** Property RadiusX of Type Double */
public radiusX?: number | Bind;

/** Property RadiusY of Type Double */
public radiusY?: number | Bind;
}


declare class GeometryGroup extends Geometry {
    
    
/** Property GeometryGroup.Children of Type Xamarin.Forms.Shapes.Geometry */
public static children: NodeFactory;
    
    
/** Property Children of Type GeometryCollection */
public children?: any;

/** Property FillRule of Type FillRule */
public fillRule?: "EvenOdd" | "Nonzero" | Bind;
}


declare class Line extends Shape {
    
    
    
    
/** Property X1 of Type Double */
public x1?: number | Bind;

/** Property X2 of Type Double */
public x2?: number | Bind;

/** Property Y1 of Type Double */
public y1?: number | Bind;

/** Property Y2 of Type Double */
public y2?: number | Bind;
}


declare class LineGeometry extends Geometry {
    
    
    
    
/** Property EndPoint of Type Point */
public endPoint?: "Zero" | Bind;

/** Property StartPoint of Type Point */
public startPoint?: "Zero" | Bind;
}


declare class LineSegment extends PathSegment {
    
    
    
    
/** Property Point of Type Point */
public point?: "Zero" | Bind;
}


declare class MatrixTransform extends Transform {
    
    
    
    
/** Property Matrix of Type Matrix */
public matrix?: /*Matrix*/ any;
}


declare class Path extends Shape {
    
    
/** Property Path.Data of Type Xamarin.Forms.Shapes.Geometry */
public static data: NodeFactory;
    
    
/** Property Data of Type Geometry */
public data?: any;

/** Property RenderTransform of Type Transform */
public renderTransform?: /*Transform*/ any;
}


declare class PathFigure extends BindableObject {
    
    
/** Property PathFigure.Segments of Type Xamarin.Forms.Shapes.PathSegment */
public static segments: NodeFactory;
    
    
/** Property IsClosed of Type Boolean */
public isClosed?: boolean | Bind;

/** Property IsFilled of Type Boolean */
public isFilled?: boolean | Bind;

/** Property Segments of Type PathSegmentCollection */
public segments?: any;

/** Property StartPoint of Type Point */
public startPoint?: "Zero" | Bind;
}


declare class PathGeometry extends Geometry {
    
    
/** Property PathGeometry.Figures of Type Xamarin.Forms.Shapes.PathFigure */
public static figures: NodeFactory;
    
    
/** Property Figures of Type PathFigureCollection */
public figures?: any;

/** Property FillRule of Type FillRule */
public fillRule?: "EvenOdd" | "Nonzero" | Bind;
}


declare class PolyBezierSegment extends PathSegment {
    
    
/** Property PolyBezierSegment.Points of Type Xamarin.Forms.Point */
public static points: NodeFactory;
    
    
/** Property Points of Type PointCollection */
public points?: /*PointCollection*/ any;
}


declare class Polygon extends Shape {
    
    
/** Property Polygon.Points of Type Xamarin.Forms.Point */
public static points: NodeFactory;
    
    
/** Property FillRule of Type FillRule */
public fillRule?: "EvenOdd" | "Nonzero" | Bind;

/** Property Points of Type PointCollection */
public points?: /*PointCollection*/ any;
}


declare class Polyline extends Shape {
    
    
/** Property Polyline.Points of Type Xamarin.Forms.Point */
public static points: NodeFactory;
    
    
/** Property FillRule of Type FillRule */
public fillRule?: "EvenOdd" | "Nonzero" | Bind;

/** Property Points of Type PointCollection */
public points?: /*PointCollection*/ any;
}


declare class PolyLineSegment extends PathSegment {
    
    
/** Property PolyLineSegment.Points of Type Xamarin.Forms.Point */
public static points: NodeFactory;
    
    
/** Property Points of Type PointCollection */
public points?: /*PointCollection*/ any;
}


declare class PolyQuadraticBezierSegment extends PathSegment {
    
    
/** Property PolyQuadraticBezierSegment.Points of Type Xamarin.Forms.Point */
public static points: NodeFactory;
    
    
/** Property Points of Type PointCollection */
public points?: /*PointCollection*/ any;
}


declare class QuadraticBezierSegment extends PathSegment {
    
    
    
    
/** Property Point1 of Type Point */
public point1?: "Zero" | Bind;

/** Property Point2 of Type Point */
public point2?: "Zero" | Bind;
}


declare class Rectangle extends Shape {
    
    
    
    
/** Property RadiusX of Type Double */
public radiusX?: number | Bind;

/** Property RadiusY of Type Double */
public radiusY?: number | Bind;
}


declare class RectangleGeometry extends Geometry {
    
    
    
    
/** Property Rect of Type Rectangle */
public rect?: "Zero" | Bind;
}


declare class RotateTransform extends Transform {
    
    
    
    
/** Property Angle of Type Double */
public angle?: number | Bind;

/** Property CenterX of Type Double */
public centerX?: number | Bind;

/** Property CenterY of Type Double */
public centerY?: number | Bind;
}


declare class ScaleTransform extends Transform {
    
    
    
    
/** Property CenterX of Type Double */
public centerX?: number | Bind;

/** Property CenterY of Type Double */
public centerY?: number | Bind;

/** Property ScaleX of Type Double */
public scaleX?: number | Bind;

/** Property ScaleY of Type Double */
public scaleY?: number | Bind;
}


declare class SkewTransform extends Transform {
    
    
    
    
/** Property AngleX of Type Double */
public angleX?: number | Bind;

/** Property AngleY of Type Double */
public angleY?: number | Bind;

/** Property CenterX of Type Double */
public centerX?: number | Bind;

/** Property CenterY of Type Double */
public centerY?: number | Bind;
}


declare class TransformGroup extends Transform {
    
    
/** Property TransformGroup.Children of Type Xamarin.Forms.Shapes.Transform */
public static children: NodeFactory;
    
    
/** Property Children of Type TransformCollection */
public children?: any;
}


declare class TranslateTransform extends Transform {
    
    
    
    
/** Property X of Type Double */
public x?: number | Bind;

/** Property Y of Type Double */
public y?: number | Bind;
}
const XF = { get BindableObject(): typeof BindableObject { return  this._BindableObject || (this._BindableObject = bridge.getClass('Xamarin.Forms.BindableObject, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get Element(): typeof Element { return  this._Element || (this._Element = bridge.getClass('Xamarin.Forms.Element, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get NavigableElement(): typeof NavigableElement { return  this._NavigableElement || (this._NavigableElement = bridge.getClass('Xamarin.Forms.NavigableElement, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get VisualElement(): typeof VisualElement { return  this._VisualElement || (this._VisualElement = bridge.getClass('Xamarin.Forms.VisualElement, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get View(): typeof View { return  this._View || (this._View = bridge.getClass('Xamarin.Forms.View, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get Layout(): typeof Layout { return  this._Layout || (this._Layout = bridge.getClass('Xamarin.Forms.Layout, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get AbsoluteLayout(): typeof AbsoluteLayout { return  this._AbsoluteLayout || (this._AbsoluteLayout = bridge.getClass('Xamarin.Forms.AbsoluteLayout, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get ActivityIndicator(): typeof ActivityIndicator { return  this._ActivityIndicator || (this._ActivityIndicator = bridge.getClass('Xamarin.Forms.ActivityIndicator, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get StateTriggerBase(): typeof StateTriggerBase { return  this._StateTriggerBase || (this._StateTriggerBase = bridge.getClass('Xamarin.Forms.StateTriggerBase, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get AdaptiveTrigger(): typeof AdaptiveTrigger { return  this._AdaptiveTrigger || (this._AdaptiveTrigger = bridge.getClass('Xamarin.Forms.AdaptiveTrigger, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get Application(): typeof Application { return  this._Application || (this._Application = bridge.getClass('Xamarin.Forms.Application, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get AppLinkEntry(): typeof AppLinkEntry { return  this._AppLinkEntry || (this._AppLinkEntry = bridge.getClass('Xamarin.Forms.AppLinkEntry, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get BaseMenuItem(): typeof BaseMenuItem { return  this._BaseMenuItem || (this._BaseMenuItem = bridge.getClass('Xamarin.Forms.BaseMenuItem, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get BindableLayout(): typeof BindableLayout { return  this._BindableLayout || (this._BindableLayout = bridge.getClass('Xamarin.Forms.BindableLayout, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get BoxView(): typeof BoxView { return  this._BoxView || (this._BoxView = bridge.getClass('Xamarin.Forms.BoxView, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get Button(): typeof Button { return  this._Button || (this._Button = bridge.getClass('Xamarin.Forms.Button, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get Page(): typeof Page { return  this._Page || (this._Page = bridge.getClass('Xamarin.Forms.Page, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get CarouselPage(): typeof CarouselPage { return  this._CarouselPage || (this._CarouselPage = bridge.getClass('Xamarin.Forms.CarouselPage, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get Cell(): typeof Cell { return  this._Cell || (this._Cell = bridge.getClass('Xamarin.Forms.Cell, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get EntryCell(): typeof EntryCell { return  this._EntryCell || (this._EntryCell = bridge.getClass('Xamarin.Forms.EntryCell, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get TextCell(): typeof TextCell { return  this._TextCell || (this._TextCell = bridge.getClass('Xamarin.Forms.TextCell, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get ImageCell(): typeof ImageCell { return  this._ImageCell || (this._ImageCell = bridge.getClass('Xamarin.Forms.ImageCell, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get SwitchCell(): typeof SwitchCell { return  this._SwitchCell || (this._SwitchCell = bridge.getClass('Xamarin.Forms.SwitchCell, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get ViewCell(): typeof ViewCell { return  this._ViewCell || (this._ViewCell = bridge.getClass('Xamarin.Forms.ViewCell, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get CheckBox(): typeof CheckBox { return  this._CheckBox || (this._CheckBox = bridge.getClass('Xamarin.Forms.CheckBox, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get GestureRecognizer(): typeof GestureRecognizer { return  this._GestureRecognizer || (this._GestureRecognizer = bridge.getClass('Xamarin.Forms.GestureRecognizer, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get ClickGestureRecognizer(): typeof ClickGestureRecognizer { return  this._ClickGestureRecognizer || (this._ClickGestureRecognizer = bridge.getClass('Xamarin.Forms.ClickGestureRecognizer, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get ColumnDefinition(): typeof ColumnDefinition { return  this._ColumnDefinition || (this._ColumnDefinition = bridge.getClass('Xamarin.Forms.ColumnDefinition, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get CompareStateTrigger(): typeof CompareStateTrigger { return  this._CompareStateTrigger || (this._CompareStateTrigger = bridge.getClass('Xamarin.Forms.CompareStateTrigger, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get TemplatedPage(): typeof TemplatedPage { return  this._TemplatedPage || (this._TemplatedPage = bridge.getClass('Xamarin.Forms.TemplatedPage, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get ContentPage(): typeof ContentPage { return  this._ContentPage || (this._ContentPage = bridge.getClass('Xamarin.Forms.ContentPage, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get ContentPresenter(): typeof ContentPresenter { return  this._ContentPresenter || (this._ContentPresenter = bridge.getClass('Xamarin.Forms.ContentPresenter, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get TemplatedView(): typeof TemplatedView { return  this._TemplatedView || (this._TemplatedView = bridge.getClass('Xamarin.Forms.TemplatedView, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get ContentView(): typeof ContentView { return  this._ContentView || (this._ContentView = bridge.getClass('Xamarin.Forms.ContentView, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get ControlTemplate(): typeof ControlTemplate { return  this._ControlTemplate || (this._ControlTemplate = bridge.getClass('Xamarin.Forms.ControlTemplate, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get DataTemplate(): typeof DataTemplate { return  this._DataTemplate || (this._DataTemplate = bridge.getClass('Xamarin.Forms.DataTemplate, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get DataTemplateSelector(): typeof DataTemplateSelector { return  this._DataTemplateSelector || (this._DataTemplateSelector = bridge.getClass('Xamarin.Forms.DataTemplateSelector, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get DatePicker(): typeof DatePicker { return  this._DatePicker || (this._DatePicker = bridge.getClass('Xamarin.Forms.DatePicker, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get DeviceStateTrigger(): typeof DeviceStateTrigger { return  this._DeviceStateTrigger || (this._DeviceStateTrigger = bridge.getClass('Xamarin.Forms.DeviceStateTrigger, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get InputView(): typeof InputView { return  this._InputView || (this._InputView = bridge.getClass('Xamarin.Forms.InputView, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get Editor(): typeof Editor { return  this._Editor || (this._Editor = bridge.getClass('Xamarin.Forms.Editor, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get Entry(): typeof Entry { return  this._Entry || (this._Entry = bridge.getClass('Xamarin.Forms.Entry, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get Expander(): typeof Expander { return  this._Expander || (this._Expander = bridge.getClass('Xamarin.Forms.Expander, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get ImageSource(): typeof ImageSource { return  this._ImageSource || (this._ImageSource = bridge.getClass('Xamarin.Forms.ImageSource, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get FileImageSource(): typeof FileImageSource { return  this._FileImageSource || (this._FileImageSource = bridge.getClass('Xamarin.Forms.FileImageSource, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get MediaSource(): typeof MediaSource { return  this._MediaSource || (this._MediaSource = bridge.getClass('Xamarin.Forms.MediaSource, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get FileMediaSource(): typeof FileMediaSource { return  this._FileMediaSource || (this._FileMediaSource = bridge.getClass('Xamarin.Forms.FileMediaSource, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get FlexLayout(): typeof FlexLayout { return  this._FlexLayout || (this._FlexLayout = bridge.getClass('Xamarin.Forms.FlexLayout, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get FontImageSource(): typeof FontImageSource { return  this._FontImageSource || (this._FontImageSource = bridge.getClass('Xamarin.Forms.FontImageSource, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get FormattedString(): typeof FormattedString { return  this._FormattedString || (this._FormattedString = bridge.getClass('Xamarin.Forms.FormattedString, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get Frame(): typeof Frame { return  this._Frame || (this._Frame = bridge.getClass('Xamarin.Forms.Frame, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get GestureElement(): typeof GestureElement { return  this._GestureElement || (this._GestureElement = bridge.getClass('Xamarin.Forms.GestureElement, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get Grid(): typeof Grid { return  this._Grid || (this._Grid = bridge.getClass('Xamarin.Forms.Grid, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get WebViewSource(): typeof WebViewSource { return  this._WebViewSource || (this._WebViewSource = bridge.getClass('Xamarin.Forms.WebViewSource, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get HtmlWebViewSource(): typeof HtmlWebViewSource { return  this._HtmlWebViewSource || (this._HtmlWebViewSource = bridge.getClass('Xamarin.Forms.HtmlWebViewSource, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get Image(): typeof Image { return  this._Image || (this._Image = bridge.getClass('Xamarin.Forms.Image, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get ImageButton(): typeof ImageButton { return  this._ImageButton || (this._ImageButton = bridge.getClass('Xamarin.Forms.ImageButton, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get IndicatorView(): typeof IndicatorView { return  this._IndicatorView || (this._IndicatorView = bridge.getClass('Xamarin.Forms.IndicatorView, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get Behavior(): typeof Behavior { return  this._Behavior || (this._Behavior = bridge.getClass('Xamarin.Forms.Behavior, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get TriggerBase(): typeof TriggerBase { return  this._TriggerBase || (this._TriggerBase = bridge.getClass('Xamarin.Forms.TriggerBase, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get DataTrigger(): typeof DataTrigger { return  this._DataTrigger || (this._DataTrigger = bridge.getClass('Xamarin.Forms.DataTrigger, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get EventTrigger(): typeof EventTrigger { return  this._EventTrigger || (this._EventTrigger = bridge.getClass('Xamarin.Forms.EventTrigger, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get MultiTrigger(): typeof MultiTrigger { return  this._MultiTrigger || (this._MultiTrigger = bridge.getClass('Xamarin.Forms.MultiTrigger, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get Trigger(): typeof Trigger { return  this._Trigger || (this._Trigger = bridge.getClass('Xamarin.Forms.Trigger, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get ItemsView(): typeof ItemsView { return  this._ItemsView || (this._ItemsView = bridge.getClass('Xamarin.Forms.ItemsView, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get CarouselView(): typeof CarouselView { return  this._CarouselView || (this._CarouselView = bridge.getClass('Xamarin.Forms.CarouselView, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get StructuredItemsView(): typeof StructuredItemsView { return  this._StructuredItemsView || (this._StructuredItemsView = bridge.getClass('Xamarin.Forms.StructuredItemsView, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get SelectableItemsView(): typeof SelectableItemsView { return  this._SelectableItemsView || (this._SelectableItemsView = bridge.getClass('Xamarin.Forms.SelectableItemsView, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get GroupableItemsView(): typeof GroupableItemsView { return  this._GroupableItemsView || (this._GroupableItemsView = bridge.getClass('Xamarin.Forms.GroupableItemsView, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get CollectionView(): typeof CollectionView { return  this._CollectionView || (this._CollectionView = bridge.getClass('Xamarin.Forms.CollectionView, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get ItemsLayout(): typeof ItemsLayout { return  this._ItemsLayout || (this._ItemsLayout = bridge.getClass('Xamarin.Forms.ItemsLayout, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get GridItemsLayout(): typeof GridItemsLayout { return  this._GridItemsLayout || (this._GridItemsLayout = bridge.getClass('Xamarin.Forms.GridItemsLayout, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get LinearItemsLayout(): typeof LinearItemsLayout { return  this._LinearItemsLayout || (this._LinearItemsLayout = bridge.getClass('Xamarin.Forms.LinearItemsLayout, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get Label(): typeof Label { return  this._Label || (this._Label = bridge.getClass('Xamarin.Forms.Label, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get ListView(): typeof ListView { return  this._ListView || (this._ListView = bridge.getClass('Xamarin.Forms.ListView, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get MasterDetailPage(): typeof MasterDetailPage { return  this._MasterDetailPage || (this._MasterDetailPage = bridge.getClass('Xamarin.Forms.MasterDetailPage, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get MediaElement(): typeof MediaElement { return  this._MediaElement || (this._MediaElement = bridge.getClass('Xamarin.Forms.MediaElement, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get Menu(): typeof Menu { return  this._Menu || (this._Menu = bridge.getClass('Xamarin.Forms.Menu, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get MenuItem(): typeof MenuItem { return  this._MenuItem || (this._MenuItem = bridge.getClass('Xamarin.Forms.MenuItem, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get NavigationPage(): typeof NavigationPage { return  this._NavigationPage || (this._NavigationPage = bridge.getClass('Xamarin.Forms.NavigationPage, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get OpenGLView(): typeof OpenGLView { return  this._OpenGLView || (this._OpenGLView = bridge.getClass('Xamarin.Forms.OpenGLView, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get OrientationStateTrigger(): typeof OrientationStateTrigger { return  this._OrientationStateTrigger || (this._OrientationStateTrigger = bridge.getClass('Xamarin.Forms.OrientationStateTrigger, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get PanGestureRecognizer(): typeof PanGestureRecognizer { return  this._PanGestureRecognizer || (this._PanGestureRecognizer = bridge.getClass('Xamarin.Forms.PanGestureRecognizer, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get Picker(): typeof Picker { return  this._Picker || (this._Picker = bridge.getClass('Xamarin.Forms.Picker, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get PinchGestureRecognizer(): typeof PinchGestureRecognizer { return  this._PinchGestureRecognizer || (this._PinchGestureRecognizer = bridge.getClass('Xamarin.Forms.PinchGestureRecognizer, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get ProgressBar(): typeof ProgressBar { return  this._ProgressBar || (this._ProgressBar = bridge.getClass('Xamarin.Forms.ProgressBar, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get RadioButton(): typeof RadioButton { return  this._RadioButton || (this._RadioButton = bridge.getClass('Xamarin.Forms.RadioButton, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get RefreshView(): typeof RefreshView { return  this._RefreshView || (this._RefreshView = bridge.getClass('Xamarin.Forms.RefreshView, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get RelativeLayout(): typeof RelativeLayout { return  this._RelativeLayout || (this._RelativeLayout = bridge.getClass('Xamarin.Forms.RelativeLayout, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get RowDefinition(): typeof RowDefinition { return  this._RowDefinition || (this._RowDefinition = bridge.getClass('Xamarin.Forms.RowDefinition, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get ScrollView(): typeof ScrollView { return  this._ScrollView || (this._ScrollView = bridge.getClass('Xamarin.Forms.ScrollView, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get SearchBar(): typeof SearchBar { return  this._SearchBar || (this._SearchBar = bridge.getClass('Xamarin.Forms.SearchBar, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get BackButtonBehavior(): typeof BackButtonBehavior { return  this._BackButtonBehavior || (this._BackButtonBehavior = bridge.getClass('Xamarin.Forms.BackButtonBehavior, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get BaseShellItem(): typeof BaseShellItem { return  this._BaseShellItem || (this._BaseShellItem = bridge.getClass('Xamarin.Forms.BaseShellItem, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get SearchHandler(): typeof SearchHandler { return  this._SearchHandler || (this._SearchHandler = bridge.getClass('Xamarin.Forms.SearchHandler, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get Shell(): typeof Shell { return  this._Shell || (this._Shell = bridge.getClass('Xamarin.Forms.Shell, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get ShellContent(): typeof ShellContent { return  this._ShellContent || (this._ShellContent = bridge.getClass('Xamarin.Forms.ShellContent, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get ShellGroupItem(): typeof ShellGroupItem { return  this._ShellGroupItem || (this._ShellGroupItem = bridge.getClass('Xamarin.Forms.ShellGroupItem, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get ShellItem(): typeof ShellItem { return  this._ShellItem || (this._ShellItem = bridge.getClass('Xamarin.Forms.ShellItem, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get FlyoutItem(): typeof FlyoutItem { return  this._FlyoutItem || (this._FlyoutItem = bridge.getClass('Xamarin.Forms.FlyoutItem, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get TabBar(): typeof TabBar { return  this._TabBar || (this._TabBar = bridge.getClass('Xamarin.Forms.TabBar, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get ShellSection(): typeof ShellSection { return  this._ShellSection || (this._ShellSection = bridge.getClass('Xamarin.Forms.ShellSection, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get Tab(): typeof Tab { return  this._Tab || (this._Tab = bridge.getClass('Xamarin.Forms.Tab, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get Slider(): typeof Slider { return  this._Slider || (this._Slider = bridge.getClass('Xamarin.Forms.Slider, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get Span(): typeof Span { return  this._Span || (this._Span = bridge.getClass('Xamarin.Forms.Span, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get StackLayout(): typeof StackLayout { return  this._StackLayout || (this._StackLayout = bridge.getClass('Xamarin.Forms.StackLayout, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get StateTrigger(): typeof StateTrigger { return  this._StateTrigger || (this._StateTrigger = bridge.getClass('Xamarin.Forms.StateTrigger, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get Stepper(): typeof Stepper { return  this._Stepper || (this._Stepper = bridge.getClass('Xamarin.Forms.Stepper, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get StreamImageSource(): typeof StreamImageSource { return  this._StreamImageSource || (this._StreamImageSource = bridge.getClass('Xamarin.Forms.StreamImageSource, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get SwipeGestureRecognizer(): typeof SwipeGestureRecognizer { return  this._SwipeGestureRecognizer || (this._SwipeGestureRecognizer = bridge.getClass('Xamarin.Forms.SwipeGestureRecognizer, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get SwipeItem(): typeof SwipeItem { return  this._SwipeItem || (this._SwipeItem = bridge.getClass('Xamarin.Forms.SwipeItem, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get SwipeItems(): typeof SwipeItems { return  this._SwipeItems || (this._SwipeItems = bridge.getClass('Xamarin.Forms.SwipeItems, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get SwipeItemView(): typeof SwipeItemView { return  this._SwipeItemView || (this._SwipeItemView = bridge.getClass('Xamarin.Forms.SwipeItemView, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get SwipeView(): typeof SwipeView { return  this._SwipeView || (this._SwipeView = bridge.getClass('Xamarin.Forms.SwipeView, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get Switch(): typeof Switch { return  this._Switch || (this._Switch = bridge.getClass('Xamarin.Forms.Switch, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get TabbedPage(): typeof TabbedPage { return  this._TabbedPage || (this._TabbedPage = bridge.getClass('Xamarin.Forms.TabbedPage, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get TableSectionBase(): typeof TableSectionBase { return  this._TableSectionBase || (this._TableSectionBase = bridge.getClass('Xamarin.Forms.TableSectionBase, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get TableRoot(): typeof TableRoot { return  this._TableRoot || (this._TableRoot = bridge.getClass('Xamarin.Forms.TableRoot, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get TableSection(): typeof TableSection { return  this._TableSection || (this._TableSection = bridge.getClass('Xamarin.Forms.TableSection, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get TableView(): typeof TableView { return  this._TableView || (this._TableView = bridge.getClass('Xamarin.Forms.TableView, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get TapGestureRecognizer(): typeof TapGestureRecognizer { return  this._TapGestureRecognizer || (this._TapGestureRecognizer = bridge.getClass('Xamarin.Forms.TapGestureRecognizer, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get TimePicker(): typeof TimePicker { return  this._TimePicker || (this._TimePicker = bridge.getClass('Xamarin.Forms.TimePicker, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get ToolbarItem(): typeof ToolbarItem { return  this._ToolbarItem || (this._ToolbarItem = bridge.getClass('Xamarin.Forms.ToolbarItem, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get UriImageSource(): typeof UriImageSource { return  this._UriImageSource || (this._UriImageSource = bridge.getClass('Xamarin.Forms.UriImageSource, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get UriMediaSource(): typeof UriMediaSource { return  this._UriMediaSource || (this._UriMediaSource = bridge.getClass('Xamarin.Forms.UriMediaSource, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get UrlWebViewSource(): typeof UrlWebViewSource { return  this._UrlWebViewSource || (this._UrlWebViewSource = bridge.getClass('Xamarin.Forms.UrlWebViewSource, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get WebView(): typeof WebView { return  this._WebView || (this._WebView = bridge.getClass('Xamarin.Forms.WebView, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get StyleSheet(): typeof StyleSheet { return  this._StyleSheet || (this._StyleSheet = bridge.getClass('Xamarin.Forms.StyleSheets.StyleSheet, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get PathSegment(): typeof PathSegment { return  this._PathSegment || (this._PathSegment = bridge.getClass('Xamarin.Forms.Shapes.PathSegment, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get ArcSegment(): typeof ArcSegment { return  this._ArcSegment || (this._ArcSegment = bridge.getClass('Xamarin.Forms.Shapes.ArcSegment, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get BezierSegment(): typeof BezierSegment { return  this._BezierSegment || (this._BezierSegment = bridge.getClass('Xamarin.Forms.Shapes.BezierSegment, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get Transform(): typeof Transform { return  this._Transform || (this._Transform = bridge.getClass('Xamarin.Forms.Shapes.Transform, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get CompositeTransform(): typeof CompositeTransform { return  this._CompositeTransform || (this._CompositeTransform = bridge.getClass('Xamarin.Forms.Shapes.CompositeTransform, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get Shape(): typeof Shape { return  this._Shape || (this._Shape = bridge.getClass('Xamarin.Forms.Shapes.Shape, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get Ellipse(): typeof Ellipse { return  this._Ellipse || (this._Ellipse = bridge.getClass('Xamarin.Forms.Shapes.Ellipse, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get Geometry(): typeof Geometry { return  this._Geometry || (this._Geometry = bridge.getClass('Xamarin.Forms.Shapes.Geometry, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get EllipseGeometry(): typeof EllipseGeometry { return  this._EllipseGeometry || (this._EllipseGeometry = bridge.getClass('Xamarin.Forms.Shapes.EllipseGeometry, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get GeometryGroup(): typeof GeometryGroup { return  this._GeometryGroup || (this._GeometryGroup = bridge.getClass('Xamarin.Forms.Shapes.GeometryGroup, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get Line(): typeof Line { return  this._Line || (this._Line = bridge.getClass('Xamarin.Forms.Shapes.Line, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get LineGeometry(): typeof LineGeometry { return  this._LineGeometry || (this._LineGeometry = bridge.getClass('Xamarin.Forms.Shapes.LineGeometry, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get LineSegment(): typeof LineSegment { return  this._LineSegment || (this._LineSegment = bridge.getClass('Xamarin.Forms.Shapes.LineSegment, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get MatrixTransform(): typeof MatrixTransform { return  this._MatrixTransform || (this._MatrixTransform = bridge.getClass('Xamarin.Forms.Shapes.MatrixTransform, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get Path(): typeof Path { return  this._Path || (this._Path = bridge.getClass('Xamarin.Forms.Shapes.Path, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get PathFigure(): typeof PathFigure { return  this._PathFigure || (this._PathFigure = bridge.getClass('Xamarin.Forms.Shapes.PathFigure, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get PathGeometry(): typeof PathGeometry { return  this._PathGeometry || (this._PathGeometry = bridge.getClass('Xamarin.Forms.Shapes.PathGeometry, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get PolyBezierSegment(): typeof PolyBezierSegment { return  this._PolyBezierSegment || (this._PolyBezierSegment = bridge.getClass('Xamarin.Forms.Shapes.PolyBezierSegment, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get Polygon(): typeof Polygon { return  this._Polygon || (this._Polygon = bridge.getClass('Xamarin.Forms.Shapes.Polygon, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get Polyline(): typeof Polyline { return  this._Polyline || (this._Polyline = bridge.getClass('Xamarin.Forms.Shapes.Polyline, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get PolyLineSegment(): typeof PolyLineSegment { return  this._PolyLineSegment || (this._PolyLineSegment = bridge.getClass('Xamarin.Forms.Shapes.PolyLineSegment, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get PolyQuadraticBezierSegment(): typeof PolyQuadraticBezierSegment { return  this._PolyQuadraticBezierSegment || (this._PolyQuadraticBezierSegment = bridge.getClass('Xamarin.Forms.Shapes.PolyQuadraticBezierSegment, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get QuadraticBezierSegment(): typeof QuadraticBezierSegment { return  this._QuadraticBezierSegment || (this._QuadraticBezierSegment = bridge.getClass('Xamarin.Forms.Shapes.QuadraticBezierSegment, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get Rectangle(): typeof Rectangle { return  this._Rectangle || (this._Rectangle = bridge.getClass('Xamarin.Forms.Shapes.Rectangle, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get RectangleGeometry(): typeof RectangleGeometry { return  this._RectangleGeometry || (this._RectangleGeometry = bridge.getClass('Xamarin.Forms.Shapes.RectangleGeometry, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get RotateTransform(): typeof RotateTransform { return  this._RotateTransform || (this._RotateTransform = bridge.getClass('Xamarin.Forms.Shapes.RotateTransform, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get ScaleTransform(): typeof ScaleTransform { return  this._ScaleTransform || (this._ScaleTransform = bridge.getClass('Xamarin.Forms.Shapes.ScaleTransform, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get SkewTransform(): typeof SkewTransform { return  this._SkewTransform || (this._SkewTransform = bridge.getClass('Xamarin.Forms.Shapes.SkewTransform, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get TransformGroup(): typeof TransformGroup { return  this._TransformGroup || (this._TransformGroup = bridge.getClass('Xamarin.Forms.Shapes.TransformGroup, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get TranslateTransform(): typeof TranslateTransform { return  this._TranslateTransform || (this._TranslateTransform = bridge.getClass('Xamarin.Forms.Shapes.TranslateTransform, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null')); }
};
export default XF;
