//tslint:disable
import XNode, { RootObject } from "@web-atoms/core/dist/core/XNode";
import Bind from "@web-atoms/core/dist/core/Bind";import { ColorItem } from "@web-atoms/core/dist/core/Colors";

const XFNS0 = XNode.namespace("Xamarin.Forms","Xamarin.Forms.Core")
const XFNS1 = XNode.namespace("Xamarin.Forms.StyleSheets","Xamarin.Forms.Core")


@XFNS0("AbsoluteLayout")
class AbsoluteLayout extends Layout {
    
/** Attached Property AbsoluteLayout.LayoutFlags of Type BindableProperty*/
public static layoutFlags = XNode.attached();


/** Attached Property AbsoluteLayout.LayoutBounds of Type BindableProperty*/
public static layoutBounds = XNode.attached();

    
/** Property AbsoluteLayout.Children of Type Xamarin.Forms.View */
public static children = XNode.property()
    
    
}


@XFNS0("BindableObject")
class BindableObject extends RootObject {
    
    
    
    
/** Property BindingContext of Type Object */
public bindingContext?: any;

/** Property Dispatcher of Type IDispatcher */
public dispatcher?: any;
}


@XFNS0("Element")
class Element extends BindableObject {
    
    
/** Property Element.Effects of Type Xamarin.Forms.Effect */
public static effects = XNode.property();

/** Property Element.Menu of Type Xamarin.Forms.Menu */
public static menu = XNode.property()
    
    
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


@XFNS0("NavigableElement")
class NavigableElement extends Element {
    
    
/** Property NavigableElement.StyleClass of Type System.String */
public static styleClass = XNode.property()
    
    
/** Property class of Type IList`1 */
public class?: any;

/** Property Navigation of Type INavigation */
public navigation?: any;

/** Property Style of Type Style */
public style?: any;

/** Property StyleClass of Type IList`1 */
public styleClass?: any;
}


@XFNS0("VisualElement")
class VisualElement extends NavigableElement {
    
    
/** Property VisualElement.Behaviors of Type Xamarin.Forms.Behavior */
public static behaviors = XNode.property();

/** Property VisualElement.Resources of Type System.Collections.Generic.KeyValuePair`2[System.String,System.Object] */
public static resources = XNode.property();

/** Property VisualElement.Triggers of Type Xamarin.Forms.TriggerBase */
public static triggers = XNode.property()
    
    
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


@XFNS0("View")
class View extends VisualElement {
    
    
/** Property View.GestureRecognizers of Type Xamarin.Forms.IGestureRecognizer */
public static gestureRecognizers = XNode.property()
    
    
/** Property HorizontalOptions of Type LayoutOptions */
public horizontalOptions?: "Start" | "Center" | "End" | "Fill" | "StartAndExpand" | "CenterAndExpand" | "EndAndExpand" | "FillAndExpand" | Bind;

/** Property Margin of Type Thickness */
public margin?: /*Thickness*/ any;

/** Property VerticalOptions of Type LayoutOptions */
public verticalOptions?: "Start" | "Center" | "End" | "Fill" | "StartAndExpand" | "CenterAndExpand" | "EndAndExpand" | "FillAndExpand" | Bind;
}


@XFNS0("ActivityIndicator")
class ActivityIndicator extends View {
    
    
    
    
/** Property Color of Type Color */
public color?: ColorItem | string | null | Bind;

/** Property IsRunning of Type Boolean */
public isRunning?: boolean | Bind;
}


@XFNS0("Application")
class Application extends Element {
    
    
/** Property Application.MainPage of Type Xamarin.Forms.Page */
public static mainPage = XNode.property();

/** Property Application.Properties of Type System.Collections.Generic.KeyValuePair`2[System.String,System.Object] */
public static properties = XNode.property();

/** Property Application.Resources of Type System.Collections.Generic.KeyValuePair`2[System.String,System.Object] */
public static resources = XNode.property()
    
    
/** Property MainPage of Type Page */
public mainPage?: any;

/** Property NavigationProxy of Type NavigationProxy */
public navigationProxy?: any;

/** Property PanGestureId of Type Int32 */
public panGestureId?: number | Bind;

/** Property Resources of Type ResourceDictionary */
public resources?: any;
}


@XFNS0("AppLinkEntry")
class AppLinkEntry extends Element {
    
    
/** Property AppLinkEntry.KeyValues of Type System.Collections.Generic.KeyValuePair`2[System.String,System.String] */
public static keyValues = XNode.property();

/** Property AppLinkEntry.Thumbnail of Type Xamarin.Forms.ImageSource */
public static thumbnail = XNode.property()
    
    
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


@XFNS0("BaseMenuItem")
class BaseMenuItem extends Element {
    
    
    
    
}


@XFNS0("BindableLayout")
class BindableLayout extends RootObject {
    
/** Attached Property BindableLayout.ItemsSource of Type BindableProperty*/
public static itemsSource = XNode.attached();

    
/** Property BindableLayout.ItemTemplate of Type Xamarin.Forms.DataTemplate */
public static itemTemplate = XNode.template();

/** Property BindableLayout.ItemTemplateSelector of Type Xamarin.Forms.DataTemplateSelector */
public static itemTemplateSelector = XNode.template()
    
    
}


@XFNS0("BoxView")
class BoxView extends View {
    
    
    
    
/** Property Color of Type Color */
public color?: ColorItem | string | null | Bind;

/** Property CornerRadius of Type CornerRadius */
public cornerRadius?: /*CornerRadius*/ any;
}


@XFNS0("Button")
class Button extends View {
    
    
/** Property Button.ImageSource of Type Xamarin.Forms.ImageSource */
public static imageSource = XNode.property()
    
    
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


@XFNS0("CarouselPage")
class CarouselPage extends Page {
    
    
/** Property CarouselPage.Children of Type Xamarin.Forms.ContentPage */
public static children = XNode.property();

/** Property CarouselPage.CurrentPage of Type Xamarin.Forms.ContentPage */
public static currentPage = XNode.property();

/** Property CarouselPage.ItemTemplate of Type Xamarin.Forms.DataTemplate */
public static itemTemplate = XNode.template()
    
    
/** Property CurrentPage of Type ContentPage */
public currentPage?: any;

/** Property ItemsSource of Type IEnumerable */
public itemsSource?: any;

/** Property ItemTemplate of Type DataTemplate */
public itemTemplate?: any;

/** Property SelectedItem of Type Object */
public selectedItem?: any;
}


@XFNS0("Cell")
class Cell extends Element {
    
    
/** Property Cell.ContextActions of Type Xamarin.Forms.MenuItem */
public static contextActions = XNode.property()
    
    
/** Property Height of Type Double */
public height?: number | Bind;

/** Property IsContextActionsLegacyModeEnabled of Type Boolean */
public isContextActionsLegacyModeEnabled?: boolean | Bind;

/** Property IsEnabled of Type Boolean */
public isEnabled?: boolean | Bind;
}


@XFNS0("EntryCell")
class EntryCell extends Cell {
    
    
    
    
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


@XFNS0("TextCell")
class TextCell extends Cell {
    
    
    
    
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


@XFNS0("ImageCell")
class ImageCell extends TextCell {
    
    
/** Property ImageCell.ImageSource of Type Xamarin.Forms.ImageSource */
public static imageSource = XNode.property()
    
    
/** Property ImageSource of Type ImageSource */
public imageSource?: /*ImageSource*/ any;
}


@XFNS0("SwitchCell")
class SwitchCell extends Cell {
    
    
    
    
/** Property On of Type Boolean */
public on?: boolean | Bind;

/** Property OnColor of Type Color */
public onColor?: ColorItem | string | null | Bind;

/** Property Text of Type String */
public text?: string | null | Bind;
}


@XFNS0("ViewCell")
class ViewCell extends Cell {
    
    
/** Property ViewCell.View of Type Xamarin.Forms.View */
public static view = XNode.property()
    
    
/** Property View of Type View */
public view?: any;
}


@XFNS0("CheckBox")
class CheckBox extends View {
    
    
    
    
/** Property Color of Type Color */
public color?: ColorItem | string | null | Bind;

/** Property IsChecked of Type Boolean */
public isChecked?: boolean | Bind;
}


@XFNS0("GestureRecognizer")
class GestureRecognizer extends Element {
    
    
    
    
}


@XFNS0("ClickGestureRecognizer")
class ClickGestureRecognizer extends GestureRecognizer {
    
    
    
    
/** Property Buttons of Type ButtonsMask */
public buttons?: "Primary" | "Secondary" | Bind;

/** Property Command of Type ICommand */
public command?: any;

/** Property CommandParameter of Type Object */
public commandParameter?: any;

/** Property NumberOfClicksRequired of Type Int32 */
public numberOfClicksRequired?: number | Bind;
}


@XFNS0("ColumnDefinition")
class ColumnDefinition extends BindableObject {
    
    
    
    
/** Property Width of Type GridLength */
public width?: "Auto" | number | string | Bind;
}


@XFNS0("Page")
class Page extends VisualElement {
    
    
/** Property Page.BackgroundImageSource of Type Xamarin.Forms.ImageSource */
public static backgroundImageSource = XNode.property();

/** Property Page.IconImageSource of Type Xamarin.Forms.ImageSource */
public static iconImageSource = XNode.property();

/** Property Page.ToolbarItems of Type Xamarin.Forms.ToolbarItem */
public static toolbarItems = XNode.property()
    
    
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


@XFNS0("TemplatedPage")
class TemplatedPage extends Page {
    
    
/** Property TemplatedPage.ControlTemplate of Type Xamarin.Forms.ControlTemplate */
public static controlTemplate = XNode.template()
    
    
/** Property ControlTemplate of Type ControlTemplate */
public controlTemplate?: any;
}


@XFNS0("ContentPage")
class ContentPage extends TemplatedPage {
    
    
/** Property ContentPage.Content of Type Xamarin.Forms.View */
public static content = XNode.property()
    
    
/** Property Content of Type View */
public content?: any;
}


@XFNS0("Layout")
class Layout extends View {
    
    
    
    
/** Property CascadeInputTransparent of Type Boolean */
public cascadeInputTransparent?: boolean | Bind;

/** Property IsClippedToBounds of Type Boolean */
public isClippedToBounds?: boolean | Bind;

/** Property Padding of Type Thickness */
public padding?: /*Thickness*/ any;
}


@XFNS0("ContentPresenter")
class ContentPresenter extends Layout {
    
    
/** Property ContentPresenter.Content of Type Xamarin.Forms.View */
public static content = XNode.property()
    
    
/** Property Content of Type View */
public content?: any;
}


@XFNS0("TemplatedView")
class TemplatedView extends Layout {
    
    
/** Property TemplatedView.ControlTemplate of Type Xamarin.Forms.ControlTemplate */
public static controlTemplate = XNode.template()
    
    
/** Property ControlTemplate of Type ControlTemplate */
public controlTemplate?: any;
}


@XFNS0("ContentView")
class ContentView extends TemplatedView {
    
    
/** Property ContentView.Content of Type Xamarin.Forms.View */
public static content = XNode.property()
    
    
/** Property Content of Type View */
public content?: any;
}


@XFNS0("ControlTemplate", true)
class ControlTemplate extends RootObject {
    
    
    
    
}


@XFNS0("DataTemplate", true)
class DataTemplate extends RootObject {
    
    
/** Property DataTemplate.Bindings of Type System.Collections.Generic.KeyValuePair`2[Xamarin.Forms.BindableProperty,Xamarin.Forms.BindingBase] */
public static bindings = XNode.property();

/** Property DataTemplate.Values of Type System.Collections.Generic.KeyValuePair`2[Xamarin.Forms.BindableProperty,System.Object] */
public static values = XNode.property()
    
    
}


@XFNS0("DataTemplateSelector", true)
class DataTemplateSelector extends DataTemplate {
    
    
    
    
}


@XFNS0("DatePicker")
class DatePicker extends View {
    
    
    
    
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


@XFNS0("InputView")
class InputView extends View {
    
    
    
    
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


@XFNS0("Editor")
class Editor extends InputView {
    
    
    
    
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


@XFNS0("Entry")
class Entry extends InputView {
    
    
    
    
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


@XFNS0("ImageSource")
class ImageSource extends Element {
    
    
    
    
}


@XFNS0("FileImageSource")
class FileImageSource extends ImageSource {
    
    
    
    
/** Property File of Type String */
public file?: string | null | Bind;
}


@XFNS0("FlexLayout")
class FlexLayout extends Layout {
    
/** Attached Property FlexLayout.Order of Type BindableProperty*/
public static order = XNode.attached();


/** Attached Property FlexLayout.Grow of Type BindableProperty*/
public static grow = XNode.attached();


/** Attached Property FlexLayout.Shrink of Type BindableProperty*/
public static shrink = XNode.attached();


/** Attached Property FlexLayout.AlignSelf of Type BindableProperty*/
public static alignSelf = XNode.attached();


/** Attached Property FlexLayout.Basis of Type BindableProperty*/
public static basis = XNode.attached();

    
/** Property FlexLayout.Children of Type Xamarin.Forms.View */
public static children = XNode.property()
    
    
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


@XFNS0("FontImageSource")
class FontImageSource extends ImageSource {
    
    
    
    
/** Property Color of Type Color */
public color?: ColorItem | string | null | Bind;

/** Property FontFamily of Type String */
public fontFamily?: string | null | Bind;

/** Property Glyph of Type String */
public glyph?: string | null | Bind;

/** Property Size of Type Double */
public size?: number | Bind;
}


@XFNS0("FormattedString")
class FormattedString extends Element {
    
    
/** Property FormattedString.Spans of Type Xamarin.Forms.Span */
public static spans = XNode.property()
    
    
}


@XFNS0("Frame")
class Frame extends ContentView {
    
    
    
    
/** Property BorderColor of Type Color */
public borderColor?: ColorItem | string | null | Bind;

/** Property CornerRadius of Type Single */
public cornerRadius?: number | Bind;

/** Property HasShadow of Type Boolean */
public hasShadow?: boolean | Bind;

/** Property OutlineColor of Type Color */
public outlineColor?: ColorItem | string | null | Bind;
}


@XFNS0("GestureElement")
class GestureElement extends Element {
    
    
/** Property GestureElement.GestureRecognizers of Type Xamarin.Forms.IGestureRecognizer */
public static gestureRecognizers = XNode.property()
    
    
}


@XFNS0("Grid")
class Grid extends Layout {
    
/** Attached Property Grid.Row of Type BindableProperty*/
public static row = XNode.attached();


/** Attached Property Grid.RowSpan of Type BindableProperty*/
public static rowSpan = XNode.attached();


/** Attached Property Grid.Column of Type BindableProperty*/
public static column = XNode.attached();


/** Attached Property Grid.ColumnSpan of Type BindableProperty*/
public static columnSpan = XNode.attached();

    
/** Property Grid.Children of Type Xamarin.Forms.View */
public static children = XNode.property();

/** Property Grid.ColumnDefinitions of Type Xamarin.Forms.ColumnDefinition */
public static columnDefinitions = XNode.property();

/** Property Grid.RowDefinitions of Type Xamarin.Forms.RowDefinition */
public static rowDefinitions = XNode.property()
    
    
/** Property ColumnDefinitions of Type ColumnDefinitionCollection */
public columnDefinitions?: any;

/** Property ColumnSpacing of Type Double */
public columnSpacing?: number | Bind;

/** Property RowDefinitions of Type RowDefinitionCollection */
public rowDefinitions?: any;

/** Property RowSpacing of Type Double */
public rowSpacing?: number | Bind;
}


@XFNS0("WebViewSource")
class WebViewSource extends BindableObject {
    
    
    
    
}


@XFNS0("HtmlWebViewSource")
class HtmlWebViewSource extends WebViewSource {
    
    
    
    
/** Property BaseUrl of Type String */
public baseUrl?: string | null | Bind;

/** Property Html of Type String */
public html?: string | null | Bind;
}


@XFNS0("Image")
class Image extends View {
    
    
/** Property Image.Source of Type Xamarin.Forms.ImageSource */
public static source = XNode.property()
    
    
/** Property Aspect of Type Aspect */
public aspect?: "AspectFit" | "AspectFill" | "Fill" | Bind;

/** Property IsAnimationPlaying of Type Boolean */
public isAnimationPlaying?: boolean | Bind;

/** Property IsOpaque of Type Boolean */
public isOpaque?: boolean | Bind;

/** Property Source of Type ImageSource */
public source?: /*ImageSource*/ any;
}


@XFNS0("ImageButton")
class ImageButton extends View {
    
    
/** Property ImageButton.Source of Type Xamarin.Forms.ImageSource */
public static source = XNode.property()
    
    
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


@XFNS0("IndicatorView")
class IndicatorView extends TemplatedView {
    
    
/** Property IndicatorView.IndicatorLayout of Type Xamarin.Forms.Layout`1[Xamarin.Forms.View] */
public static indicatorLayout = XNode.property();

/** Property IndicatorView.IndicatorTemplate of Type Xamarin.Forms.DataTemplate */
public static indicatorTemplate = XNode.template();

/** Property IndicatorView.ItemsSourceBy of Type Xamarin.Forms.VisualElement */
public static itemsSourceBy = XNode.property()
    
    
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


@XFNS0("Behavior")
class Behavior extends BindableObject {
    
    
    
    
}


@XFNS0("TriggerBase")
class TriggerBase extends BindableObject {
    
    
/** Property TriggerBase.EnterActions of Type Xamarin.Forms.TriggerAction */
public static enterActions = XNode.property();

/** Property TriggerBase.ExitActions of Type Xamarin.Forms.TriggerAction */
public static exitActions = XNode.property()
    
    
/** Property IsSealed of Type Boolean */
public isSealed?: boolean | Bind;
}


@XFNS0("DataTrigger")
class DataTrigger extends TriggerBase {
    
    
/** Property DataTrigger.Setters of Type Xamarin.Forms.Setter */
public static setters = XNode.property()
    
    
/** Property Binding of Type BindingBase */
public binding?: any;

/** Property Value of Type Object */
public value?: any;
}


@XFNS0("EventTrigger")
class EventTrigger extends TriggerBase {
    
    
/** Property EventTrigger.Actions of Type Xamarin.Forms.TriggerAction */
public static actions = XNode.property()
    
    
/** Property Event of Type String */
public event?: string | null | Bind;
}


@XFNS0("MultiTrigger")
class MultiTrigger extends TriggerBase {
    
    
/** Property MultiTrigger.Conditions of Type Xamarin.Forms.Condition */
public static conditions = XNode.property();

/** Property MultiTrigger.Setters of Type Xamarin.Forms.Setter */
public static setters = XNode.property()
    
    
}


@XFNS0("Trigger")
class Trigger extends TriggerBase {
    
    
/** Property Trigger.Setters of Type Xamarin.Forms.Setter */
public static setters = XNode.property()
    
    
/** Property Property of Type BindableProperty */
public property?: /*BindableProperty*/ any;

/** Property Value of Type Object */
public value?: any;
}


@XFNS0("ItemsView")
class ItemsView extends View {
    
    
/** Property ItemsView.EmptyViewTemplate of Type Xamarin.Forms.DataTemplate */
public static emptyViewTemplate = XNode.template();

/** Property ItemsView.ItemTemplate of Type Xamarin.Forms.DataTemplate */
public static itemTemplate = XNode.template()
    
    
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


@XFNS0("CarouselView")
class CarouselView extends ItemsView {
    
    
/** Property CarouselView.ItemsLayout of Type Xamarin.Forms.LinearItemsLayout */
public static itemsLayout = XNode.property();

/** Property CarouselView.VisibleViews of Type Xamarin.Forms.View */
public static visibleViews = XNode.property()
    
    
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


@XFNS0("StructuredItemsView")
class StructuredItemsView extends ItemsView {
    
    
/** Property StructuredItemsView.FooterTemplate of Type Xamarin.Forms.DataTemplate */
public static footerTemplate = XNode.template();

/** Property StructuredItemsView.HeaderTemplate of Type Xamarin.Forms.DataTemplate */
public static headerTemplate = XNode.template();

/** Property StructuredItemsView.ItemsLayout of Type Xamarin.Forms.IItemsLayout */
public static itemsLayout = XNode.property()
    
    
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


@XFNS0("SelectableItemsView")
class SelectableItemsView extends StructuredItemsView {
    
    
/** Property SelectableItemsView.SelectedItems of Type System.Object */
public static selectedItems = XNode.property()
    
    
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


@XFNS0("GroupableItemsView")
class GroupableItemsView extends SelectableItemsView {
    
    
/** Property GroupableItemsView.GroupFooterTemplate of Type Xamarin.Forms.DataTemplate */
public static groupFooterTemplate = XNode.template();

/** Property GroupableItemsView.GroupHeaderTemplate of Type Xamarin.Forms.DataTemplate */
public static groupHeaderTemplate = XNode.template()
    
    
/** Property GroupFooterTemplate of Type DataTemplate */
public groupFooterTemplate?: any;

/** Property GroupHeaderTemplate of Type DataTemplate */
public groupHeaderTemplate?: any;

/** Property IsGrouped of Type Boolean */
public isGrouped?: boolean | Bind;
}


@XFNS0("CollectionView")
class CollectionView extends GroupableItemsView {
    
    
    
    
}


@XFNS0("ItemsLayout")
class ItemsLayout extends BindableObject {
    
    
    
    
/** Property SnapPointsAlignment of Type SnapPointsAlignment */
public snapPointsAlignment?: "Start" | "Center" | "End" | Bind;

/** Property SnapPointsType of Type SnapPointsType */
public snapPointsType?: "None" | "Mandatory" | "MandatorySingle" | Bind;
}


@XFNS0("GridItemsLayout")
class GridItemsLayout extends ItemsLayout {
    
    
    
    
/** Property HorizontalItemSpacing of Type Double */
public horizontalItemSpacing?: number | Bind;

/** Property Span of Type Int32 */
public span?: number | Bind;

/** Property VerticalItemSpacing of Type Double */
public verticalItemSpacing?: number | Bind;
}


@XFNS0("LinearItemsLayout")
class LinearItemsLayout extends ItemsLayout {
    
    
    
    
/** Property ItemSpacing of Type Double */
public itemSpacing?: number | Bind;
}


@XFNS0("Label")
class Label extends View {
    
    
/** Property Label.FormattedText of Type Xamarin.Forms.FormattedString */
public static formattedText = XNode.property()
    
    
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


@XFNS0("ListView")
class ListView extends View {
    
    
/** Property ListView.FooterTemplate of Type Xamarin.Forms.DataTemplate */
public static footerTemplate = XNode.template();

/** Property ListView.GroupHeaderTemplate of Type Xamarin.Forms.DataTemplate */
public static groupHeaderTemplate = XNode.template();

/** Property ListView.HeaderTemplate of Type Xamarin.Forms.DataTemplate */
public static headerTemplate = XNode.template();

/** Property ListView.ItemTemplate of Type Xamarin.Forms.DataTemplate */
public static itemTemplate = XNode.template()
    
    
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


@XFNS0("MasterDetailPage")
class MasterDetailPage extends Page {
    
    
/** Property MasterDetailPage.Detail of Type Xamarin.Forms.Page */
public static detail = XNode.property();

/** Property MasterDetailPage.Master of Type Xamarin.Forms.Page */
public static master = XNode.property()
    
    
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


@XFNS0("Menu")
class Menu extends BaseMenuItem {
    
    
/** Property Menu.Item of Type Xamarin.Forms.Menu */
public static item = XNode.property();

/** Property Menu.Items of Type Xamarin.Forms.MenuItem */
public static items = XNode.property()
    
    
/** Property Item of Type Menu */
public item?: any;

/** Property Text of Type String */
public text?: string | null | Bind;
}


@XFNS0("MenuItem")
class MenuItem extends BaseMenuItem {
    
/** Attached Property MenuItem.Accelerator of Type BindableProperty*/
public static accelerator = XNode.attached();

    
/** Property MenuItem.IconImageSource of Type Xamarin.Forms.ImageSource */
public static iconImageSource = XNode.property()
    
    
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

/** Property Text of Type String */
public text?: string | null | Bind;
}


@XFNS0("NavigationPage")
class NavigationPage extends Page {
    
/** Attached Property NavigationPage.BackButtonTitle of Type BindableProperty*/
public static backButtonTitle = XNode.attached();


/** Attached Property NavigationPage.HasNavigationBar of Type BindableProperty*/
public static hasNavigationBar = XNode.attached();


/** Attached Property NavigationPage.HasBackButton of Type BindableProperty*/
public static hasBackButton = XNode.attached();

    
/** Property NavigationPage.CurrentPage of Type Xamarin.Forms.Page */
public static currentPage = XNode.property();

/** Property NavigationPage.RootPage of Type Xamarin.Forms.Page */
public static rootPage = XNode.property();

/** Property NavigationPage.TitleIcon of Type Xamarin.Forms.FileImageSource */
public static titleIcon = XNode.property();

/** Property NavigationPage.TitleIconImageSource of Type Xamarin.Forms.ImageSource */
public static titleIconImageSource = XNode.property();

/** Property NavigationPage.TitleView of Type Xamarin.Forms.View */
public static titleView = XNode.property()
    
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


@XFNS0("OpenGLView")
class OpenGLView extends View {
    
    
    
    
/** Property HasRenderLoop of Type Boolean */
public hasRenderLoop?: boolean | Bind;

/** Property OnDisplay of Type Action`1 */
public onDisplay?: any;
}


@XFNS0("PanGestureRecognizer")
class PanGestureRecognizer extends GestureRecognizer {
    
    
    
    
/** Property TouchPoints of Type Int32 */
public touchPoints?: number | Bind;
}


@XFNS0("Picker")
class Picker extends View {
    
    
/** Property Picker.Items of Type System.String */
public static items = XNode.property()
    
    
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


@XFNS0("PinchGestureRecognizer")
class PinchGestureRecognizer extends GestureRecognizer {
    
    
    
    
/** Property IsPinching of Type Boolean */
public isPinching?: boolean | Bind;
}


@XFNS0("ProgressBar")
class ProgressBar extends View {
    
    
    
    
/** Property Progress of Type Double */
public progress?: number | Bind;

/** Property ProgressColor of Type Color */
public progressColor?: ColorItem | string | null | Bind;
}


@XFNS0("RefreshView")
class RefreshView extends ContentView {
    
    
    
    
/** Property Command of Type ICommand */
public command?: any;

/** Property CommandParameter of Type Object */
public commandParameter?: any;

/** Property IsRefreshing of Type Boolean */
public isRefreshing?: boolean | Bind;

/** Property RefreshColor of Type Color */
public refreshColor?: ColorItem | string | null | Bind;
}


@XFNS0("RelativeLayout")
class RelativeLayout extends Layout {
    
/** Attached Property RelativeLayout.XConstraint of Type BindableProperty*/
public static xConstraint = XNode.attached();


/** Attached Property RelativeLayout.YConstraint of Type BindableProperty*/
public static yConstraint = XNode.attached();


/** Attached Property RelativeLayout.WidthConstraint of Type BindableProperty*/
public static widthConstraint = XNode.attached();


/** Attached Property RelativeLayout.HeightConstraint of Type BindableProperty*/
public static heightConstraint = XNode.attached();


/** Attached Property RelativeLayout.BoundsConstraint of Type BindableProperty*/
public static boundsConstraint = XNode.attached();

    
/** Property RelativeLayout.Children of Type Xamarin.Forms.View */
public static children = XNode.property()
    
    
}


@XFNS0("RowDefinition")
class RowDefinition extends BindableObject {
    
    
    
    
/** Property Height of Type GridLength */
public height?: "Auto" | number | string | Bind;
}


@XFNS0("ScrollView")
class ScrollView extends Layout {
    
    
/** Property ScrollView.Content of Type Xamarin.Forms.View */
public static content = XNode.property()
    
    
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


@XFNS0("SearchBar")
class SearchBar extends InputView {
    
    
    
    
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


@XFNS0("BackButtonBehavior")
class BackButtonBehavior extends BindableObject {
    
    
/** Property BackButtonBehavior.IconOverride of Type Xamarin.Forms.ImageSource */
public static iconOverride = XNode.property()
    
    
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


@XFNS0("BaseShellItem")
class BaseShellItem extends NavigableElement {
    
    
/** Property BaseShellItem.FlyoutIcon of Type Xamarin.Forms.ImageSource */
public static flyoutIcon = XNode.property();

/** Property BaseShellItem.Icon of Type Xamarin.Forms.ImageSource */
public static icon = XNode.property()
    
    
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


@XFNS0("SearchHandler")
class SearchHandler extends BindableObject {
    
    
/** Property SearchHandler.ClearIcon of Type Xamarin.Forms.ImageSource */
public static clearIcon = XNode.property();

/** Property SearchHandler.ClearPlaceholderIcon of Type Xamarin.Forms.ImageSource */
public static clearPlaceholderIcon = XNode.property();

/** Property SearchHandler.ItemTemplate of Type Xamarin.Forms.DataTemplate */
public static itemTemplate = XNode.template();

/** Property SearchHandler.QueryIcon of Type Xamarin.Forms.ImageSource */
public static queryIcon = XNode.property()
    
    
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


@XFNS0("Shell")
class Shell extends Page {
    
/** Attached Property Shell.BackButtonBehavior of Type BindableProperty*/
public static backButtonBehavior = XNode.attached();


/** Attached Property Shell.FlyoutBehavior of Type BindableProperty*/
public static flyoutBehavior = XNode.attached();


/** Attached Property Shell.NavBarIsVisible of Type BindableProperty*/
public static navBarIsVisible = XNode.attached();


/** Attached Property Shell.NavBarHasShadow of Type BindableProperty*/
public static navBarHasShadow = XNode.attached();


/** Attached Property Shell.SearchHandler of Type BindableProperty*/
public static searchHandler = XNode.attached();


/** Attached Property Shell.TabBarIsVisible of Type BindableProperty*/
public static tabBarIsVisible = XNode.attached();


/** Attached Property Shell.BackgroundColor of Type BindableProperty*/
public static backgroundColor = XNode.attached();


/** Attached Property Shell.DisabledColor of Type BindableProperty*/
public static disabledColor = XNode.attached();


/** Attached Property Shell.ForegroundColor of Type BindableProperty*/
public static foregroundColor = XNode.attached();


/** Attached Property Shell.TabBarBackgroundColor of Type BindableProperty*/
public static tabBarBackgroundColor = XNode.attached();


/** Attached Property Shell.TabBarDisabledColor of Type BindableProperty*/
public static tabBarDisabledColor = XNode.attached();


/** Attached Property Shell.TabBarForegroundColor of Type BindableProperty*/
public static tabBarForegroundColor = XNode.attached();


/** Attached Property Shell.TabBarTitleColor of Type BindableProperty*/
public static tabBarTitleColor = XNode.attached();


/** Attached Property Shell.TabBarUnselectedColor of Type BindableProperty*/
public static tabBarUnselectedColor = XNode.attached();


/** Attached Property Shell.TitleColor of Type BindableProperty*/
public static titleColor = XNode.attached();


/** Attached Property Shell.UnselectedColor of Type BindableProperty*/
public static unselectedColor = XNode.attached();

    
/** Property Shell.CurrentItem of Type Xamarin.Forms.ShellItem */
public static currentItem = XNode.property();

/** Property Shell.FlyoutBackgroundImage of Type Xamarin.Forms.ImageSource */
public static flyoutBackgroundImage = XNode.property();

/** Property Shell.FlyoutHeaderTemplate of Type Xamarin.Forms.DataTemplate */
public static flyoutHeaderTemplate = XNode.template();

/** Property Shell.FlyoutIcon of Type Xamarin.Forms.ImageSource */
public static flyoutIcon = XNode.property();

/** Property Shell.Items of Type Xamarin.Forms.ShellItem */
public static items = XNode.property();

/** Property Shell.ItemTemplate of Type Xamarin.Forms.DataTemplate */
public static itemTemplate = XNode.template();

/** Property Shell.MenuItemTemplate of Type Xamarin.Forms.DataTemplate */
public static menuItemTemplate = XNode.template();

/** Property Shell.TitleView of Type Xamarin.Forms.View */
public static titleView = XNode.property()
    
    
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


@XFNS0("ShellContent")
class ShellContent extends BaseShellItem {
    
    
/** Property ShellContent.ContentTemplate of Type Xamarin.Forms.DataTemplate */
public static contentTemplate = XNode.template();

/** Property ShellContent.MenuItems of Type Xamarin.Forms.MenuItem */
public static menuItems = XNode.property()
    
    
/** Property Content of Type Object */
public content?: any;

/** Property ContentTemplate of Type DataTemplate */
public contentTemplate?: any;
}


@XFNS0("ShellGroupItem")
class ShellGroupItem extends BaseShellItem {
    
    
    
    
/** Property FlyoutDisplayOptions of Type FlyoutDisplayOptions */
public flyoutDisplayOptions?: "AsSingleItem" | "AsMultipleItems" | Bind;
}


@XFNS0("ShellItem")
class ShellItem extends ShellGroupItem {
    
    
/** Property ShellItem.CurrentItem of Type Xamarin.Forms.ShellSection */
public static currentItem = XNode.property();

/** Property ShellItem.Items of Type Xamarin.Forms.ShellSection */
public static items = XNode.property()
    
    
/** Property CurrentItem of Type ShellSection */
public currentItem?: any;
}


@XFNS0("FlyoutItem")
class FlyoutItem extends ShellItem {
    
    
    
    
}


@XFNS0("TabBar")
class TabBar extends ShellItem {
    
    
    
    
}


@XFNS0("ShellSection")
class ShellSection extends ShellGroupItem {
    
    
/** Property ShellSection.CurrentItem of Type Xamarin.Forms.ShellContent */
public static currentItem = XNode.property();

/** Property ShellSection.Items of Type Xamarin.Forms.ShellContent */
public static items = XNode.property()
    
    
/** Property CurrentItem of Type ShellContent */
public currentItem?: any;
}


@XFNS0("Tab")
class Tab extends ShellSection {
    
    
    
    
}


@XFNS0("Slider")
class Slider extends View {
    
    
/** Property Slider.ThumbImageSource of Type Xamarin.Forms.ImageSource */
public static thumbImageSource = XNode.property()
    
    
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


@XFNS0("Span")
class Span extends GestureElement {
    
    
    
    
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


@XFNS0("StackLayout")
class StackLayout extends Layout {
    
    
/** Property StackLayout.Children of Type Xamarin.Forms.View */
public static children = XNode.property()
    
    
/** Property Orientation of Type StackOrientation */
public orientation?: "Vertical" | "Horizontal" | Bind;

/** Property Spacing of Type Double */
public spacing?: number | Bind;
}


@XFNS0("Stepper")
class Stepper extends View {
    
    
    
    
/** Property Increment of Type Double */
public increment?: number | Bind;

/** Property Maximum of Type Double */
public maximum?: number | Bind;

/** Property Minimum of Type Double */
public minimum?: number | Bind;

/** Property Value of Type Double */
public value?: number | Bind;
}


@XFNS0("StreamImageSource")
class StreamImageSource extends ImageSource {
    
    
    
    
/** Property Stream of Type Func`2 */
public stream?: any;
}


@XFNS0("SwipeGestureRecognizer")
class SwipeGestureRecognizer extends GestureRecognizer {
    
    
    
    
/** Property Command of Type ICommand */
public command?: any;

/** Property CommandParameter of Type Object */
public commandParameter?: any;

/** Property Direction of Type SwipeDirection */
public direction?: "Right" | "Left" | "Up" | "Down" | Bind;

/** Property Threshold of Type UInt32 */
public threshold?: any;
}


@XFNS0("SwipeItem")
class SwipeItem extends MenuItem {
    
    
    
    
/** Property BackgroundColor of Type Color */
public backgroundColor?: ColorItem | string | null | Bind;
}


@XFNS0("SwipeItems")
class SwipeItems extends Element {
    
    
    
    
/** Property Item of Type ISwipeItem */
public item?: any;

/** Property Mode of Type SwipeMode */
public mode?: "Reveal" | "Execute" | Bind;

/** Property SwipeBehaviorOnInvoked of Type SwipeBehaviorOnInvoked */
public swipeBehaviorOnInvoked?: "Auto" | "Close" | "RemainOpen" | Bind;
}


@XFNS0("SwipeItemView")
class SwipeItemView extends ContentView {
    
    
    
    
/** Property Command of Type ICommand */
public command?: any;

/** Property CommandParameter of Type Object */
public commandParameter?: any;
}


@XFNS0("SwipeView")
class SwipeView extends ContentView {
    
    
/** Property SwipeView.BottomItems of Type Xamarin.Forms.ISwipeItem */
public static bottomItems = XNode.property();

/** Property SwipeView.LeftItems of Type Xamarin.Forms.ISwipeItem */
public static leftItems = XNode.property();

/** Property SwipeView.RightItems of Type Xamarin.Forms.ISwipeItem */
public static rightItems = XNode.property();

/** Property SwipeView.TopItems of Type Xamarin.Forms.ISwipeItem */
public static topItems = XNode.property()
    
    
/** Property BottomItems of Type SwipeItems */
public bottomItems?: any;

/** Property LeftItems of Type SwipeItems */
public leftItems?: any;

/** Property RightItems of Type SwipeItems */
public rightItems?: any;

/** Property TopItems of Type SwipeItems */
public topItems?: any;
}


@XFNS0("Switch")
class Switch extends View {
    
    
    
    
/** Property IsToggled of Type Boolean */
public isToggled?: boolean | Bind;

/** Property OnColor of Type Color */
public onColor?: ColorItem | string | null | Bind;

/** Property ThumbColor of Type Color */
public thumbColor?: ColorItem | string | null | Bind;
}


@XFNS0("TabbedPage")
class TabbedPage extends Page {
    
    
/** Property TabbedPage.Children of Type Xamarin.Forms.Page */
public static children = XNode.property();

/** Property TabbedPage.CurrentPage of Type Xamarin.Forms.Page */
public static currentPage = XNode.property();

/** Property TabbedPage.ItemTemplate of Type Xamarin.Forms.DataTemplate */
public static itemTemplate = XNode.template()
    
    
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


@XFNS0("TableRoot")
class TableRoot extends TableSectionBase {
    
    
/** Property TableRoot.Item of Type Xamarin.Forms.Cell */
public static item = XNode.property()
    
    
/** Property Item of Type TableSection */
public item?: any;
}


@XFNS0("TableSection")
class TableSection extends TableSectionBase {
    
    
/** Property TableSection.Item of Type Xamarin.Forms.Cell */
public static item = XNode.property()
    
    
/** Property Item of Type Cell */
public item?: any;
}


@XFNS0("TableSectionBase")
class TableSectionBase extends BindableObject {
    
    
    
    
/** Property TextColor of Type Color */
public textColor?: ColorItem | string | null | Bind;

/** Property Title of Type String */
public title?: string | null | Bind;
}


@XFNS0("TableView")
class TableView extends View {
    
    
/** Property TableView.Root of Type Xamarin.Forms.TableSection */
public static root = XNode.property()
    
    
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


@XFNS0("TapGestureRecognizer")
class TapGestureRecognizer extends GestureRecognizer {
    
    
    
    
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


@XFNS0("TimePicker")
class TimePicker extends View {
    
    
    
    
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


@XFNS0("ToolbarItem")
class ToolbarItem extends MenuItem {
    
    
    
    
/** Property Name of Type String */
public name?: string | null | Bind;

/** Property Order of Type ToolbarItemOrder */
public order?: "Default" | "Primary" | "Secondary" | Bind;

/** Property Priority of Type Int32 */
public priority?: number | Bind;
}


@XFNS0("UriImageSource")
class UriImageSource extends ImageSource {
    
    
    
    
/** Property CacheValidity of Type TimeSpan */
public cacheValidity?: any;

/** Property CachingEnabled of Type Boolean */
public cachingEnabled?: boolean | Bind;

/** Property Uri of Type Uri */
public uri?: any;
}


@XFNS0("UrlWebViewSource")
class UrlWebViewSource extends WebViewSource {
    
    
    
    
/** Property Url of Type String */
public url?: string | null | Bind;
}


@XFNS0("WebView")
class WebView extends View {
    
    
    
    
/** Property Source of Type WebViewSource */
public source?: any;
}


@XFNS1("StyleSheet")
class StyleSheet extends RootObject {
    
    
    
    
}
const XF = { AbsoluteLayout,
	BindableObject,
	Element,
	NavigableElement,
	VisualElement,
	View,
	ActivityIndicator,
	Application,
	AppLinkEntry,
	BaseMenuItem,
	BindableLayout,
	BoxView,
	Button,
	CarouselPage,
	Cell,
	EntryCell,
	TextCell,
	ImageCell,
	SwitchCell,
	ViewCell,
	CheckBox,
	GestureRecognizer,
	ClickGestureRecognizer,
	ColumnDefinition,
	Page,
	TemplatedPage,
	ContentPage,
	Layout,
	ContentPresenter,
	TemplatedView,
	ContentView,
	ControlTemplate,
	DataTemplate,
	DataTemplateSelector,
	DatePicker,
	InputView,
	Editor,
	Entry,
	ImageSource,
	FileImageSource,
	FlexLayout,
	FontImageSource,
	FormattedString,
	Frame,
	GestureElement,
	Grid,
	WebViewSource,
	HtmlWebViewSource,
	Image,
	ImageButton,
	IndicatorView,
	Behavior,
	TriggerBase,
	DataTrigger,
	EventTrigger,
	MultiTrigger,
	Trigger,
	ItemsView,
	CarouselView,
	StructuredItemsView,
	SelectableItemsView,
	GroupableItemsView,
	CollectionView,
	ItemsLayout,
	GridItemsLayout,
	LinearItemsLayout,
	Label,
	ListView,
	MasterDetailPage,
	Menu,
	MenuItem,
	NavigationPage,
	OpenGLView,
	PanGestureRecognizer,
	Picker,
	PinchGestureRecognizer,
	ProgressBar,
	RefreshView,
	RelativeLayout,
	RowDefinition,
	ScrollView,
	SearchBar,
	BackButtonBehavior,
	BaseShellItem,
	SearchHandler,
	Shell,
	ShellContent,
	ShellGroupItem,
	ShellItem,
	FlyoutItem,
	TabBar,
	ShellSection,
	Tab,
	Slider,
	Span,
	StackLayout,
	Stepper,
	StreamImageSource,
	SwipeGestureRecognizer,
	SwipeItem,
	SwipeItems,
	SwipeItemView,
	SwipeView,
	Switch,
	TabbedPage,
	TableRoot,
	TableSection,
	TableSectionBase,
	TableView,
	TapGestureRecognizer,
	TimePicker,
	ToolbarItem,
	UriImageSource,
	UrlWebViewSource,
	WebView,
	StyleSheet
};
export default XF;
