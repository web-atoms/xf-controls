//tslint:disable
import XNode from "@web-atoms/core/dist/core/xnode/XNode";

export interface IAbsoluteLayout {
    
    /** Property AnchorX of Type Double */
    anchorX?: any;
    
    /** Property AnchorY of Type Double */
    anchorY?: any;
    
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BackgroundColor of Type Color */
    backgroundColor?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property CascadeInputTransparent of Type Boolean */
    cascadeInputTransparent?: any;
    
    /** Property class of Type IList`1 */
    class?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property DisableLayout of Type Boolean */
    disableLayout?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property FlowDirection of Type FlowDirection */
    flowDirection?: any;
    
    /** Property HeightRequest of Type Double */
    heightRequest?: any;
    
    /** Property HorizontalOptions of Type LayoutOptions */
    horizontalOptions?: any;
    
    /** Property InputTransparent of Type Boolean */
    inputTransparent?: any;
    
    /** Property IsClippedToBounds of Type Boolean */
    isClippedToBounds?: any;
    
    /** Property IsEnabled of Type Boolean */
    isEnabled?: any;
    
    /** Property IsInNativeLayout of Type Boolean */
    isInNativeLayout?: any;
    
    /** Property IsNativeStateConsistent of Type Boolean */
    isNativeStateConsistent?: any;
    
    /** Property IsPlatformEnabled of Type Boolean */
    isPlatformEnabled?: any;
    
    /** Property IsTabStop of Type Boolean */
    isTabStop?: any;
    
    /** Property IsVisible of Type Boolean */
    isVisible?: any;
    
    /** Property Margin of Type Thickness */
    margin?: any;
    
    /** Property MinimumHeightRequest of Type Double */
    minimumHeightRequest?: any;
    
    /** Property MinimumWidthRequest of Type Double */
    minimumWidthRequest?: any;
    
    /** Property Navigation of Type INavigation */
    navigation?: any;
    
    /** Property Opacity of Type Double */
    opacity?: any;
    
    /** Property Padding of Type Thickness */
    padding?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property Resources of Type ResourceDictionary */
    resources?: any;
    
    /** Property Rotation of Type Double */
    rotation?: any;
    
    /** Property RotationX of Type Double */
    rotationX?: any;
    
    /** Property RotationY of Type Double */
    rotationY?: any;
    
    /** Property Scale of Type Double */
    scale?: any;
    
    /** Property ScaleX of Type Double */
    scaleX?: any;
    
    /** Property ScaleY of Type Double */
    scaleY?: any;
    
    /** Property Style of Type Style */
    style?: any;
    
    /** Property StyleClass of Type IList`1 */
    styleClass?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
    
    /** Property TabIndex of Type Int32 */
    tabIndex?: any;
    
    /** Property TranslationX of Type Double */
    translationX?: any;
    
    /** Property TranslationY of Type Double */
    translationY?: any;
    
    /** Property VerticalOptions of Type LayoutOptions */
    verticalOptions?: any;
    
    /** Property Visual of Type IVisual */
    visual?: any;
    
    /** Property WidthRequest of Type Double */
    widthRequest?: any;
        [key: string]: any;
    }
    /** AbsoluteLayout */
    export const AbsoluteLayout = XNode.prepare<IAbsoluteLayout>("AbsoluteLayout|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    /** Attached Property AbsoluteLayout.LayoutFlags of Type BindableProperty */
    export function AbsoluteLayoutLayoutFlags(v) { return { "AbsoluteLayout.LayoutFlags|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;": v  } }
    
    /** Attached Property AbsoluteLayout.LayoutBounds of Type BindableProperty */
    export function AbsoluteLayoutLayoutBounds(v) { return { "AbsoluteLayout.LayoutBounds|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;": v  } }
    
    
    export interface IActivityIndicator {
        
    /** Property AnchorX of Type Double */
    anchorX?: any;
    
    /** Property AnchorY of Type Double */
    anchorY?: any;
    
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BackgroundColor of Type Color */
    backgroundColor?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property class of Type IList`1 */
    class?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property Color of Type Color */
    color?: any;
    
    /** Property DisableLayout of Type Boolean */
    disableLayout?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property FlowDirection of Type FlowDirection */
    flowDirection?: any;
    
    /** Property HeightRequest of Type Double */
    heightRequest?: any;
    
    /** Property HorizontalOptions of Type LayoutOptions */
    horizontalOptions?: any;
    
    /** Property InputTransparent of Type Boolean */
    inputTransparent?: any;
    
    /** Property IsEnabled of Type Boolean */
    isEnabled?: any;
    
    /** Property IsInNativeLayout of Type Boolean */
    isInNativeLayout?: any;
    
    /** Property IsNativeStateConsistent of Type Boolean */
    isNativeStateConsistent?: any;
    
    /** Property IsPlatformEnabled of Type Boolean */
    isPlatformEnabled?: any;
    
    /** Property IsRunning of Type Boolean */
    isRunning?: any;
    
    /** Property IsTabStop of Type Boolean */
    isTabStop?: any;
    
    /** Property IsVisible of Type Boolean */
    isVisible?: any;
    
    /** Property Margin of Type Thickness */
    margin?: any;
    
    /** Property MinimumHeightRequest of Type Double */
    minimumHeightRequest?: any;
    
    /** Property MinimumWidthRequest of Type Double */
    minimumWidthRequest?: any;
    
    /** Property Navigation of Type INavigation */
    navigation?: any;
    
    /** Property Opacity of Type Double */
    opacity?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property Resources of Type ResourceDictionary */
    resources?: any;
    
    /** Property Rotation of Type Double */
    rotation?: any;
    
    /** Property RotationX of Type Double */
    rotationX?: any;
    
    /** Property RotationY of Type Double */
    rotationY?: any;
    
    /** Property Scale of Type Double */
    scale?: any;
    
    /** Property ScaleX of Type Double */
    scaleX?: any;
    
    /** Property ScaleY of Type Double */
    scaleY?: any;
    
    /** Property Style of Type Style */
    style?: any;
    
    /** Property StyleClass of Type IList`1 */
    styleClass?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
    
    /** Property TabIndex of Type Int32 */
    tabIndex?: any;
    
    /** Property TranslationX of Type Double */
    translationX?: any;
    
    /** Property TranslationY of Type Double */
    translationY?: any;
    
    /** Property VerticalOptions of Type LayoutOptions */
    verticalOptions?: any;
    
    /** Property Visual of Type IVisual */
    visual?: any;
    
    /** Property WidthRequest of Type Double */
    widthRequest?: any;
        [key: string]: any;
    }
    /** ActivityIndicator */
    export const ActivityIndicator = XNode.prepare<IActivityIndicator>("ActivityIndicator|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface IApplication {
        
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property MainPage of Type Page */
    mainPage?: any;
    
    /** Property NavigationProxy of Type NavigationProxy */
    navigationProxy?: any;
    
    /** Property PanGestureId of Type Int32 */
    panGestureId?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property Resources of Type ResourceDictionary */
    resources?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
        [key: string]: any;
    }
    /** Application */
    export const Application = XNode.prepare<IApplication>("Application|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface IAppLinkEntry {
        
    /** Property AppLinkUri of Type Uri */
    appLinkUri?: any;
    
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property Description of Type String */
    description?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property IsLinkActive of Type Boolean */
    isLinkActive?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
    
    /** Property Thumbnail of Type ImageSource */
    thumbnail?: any;
    
    /** Property Title of Type String */
    title?: any;
        [key: string]: any;
    }
    /** AppLinkEntry */
    export const AppLinkEntry = XNode.prepare<IAppLinkEntry>("AppLinkEntry|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface IBaseMenuItem {
        
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
        [key: string]: any;
    }
    /** BaseMenuItem */
    export const BaseMenuItem = XNode.prepare<IBaseMenuItem>("BaseMenuItem|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface IBoxView {
        
    /** Property AnchorX of Type Double */
    anchorX?: any;
    
    /** Property AnchorY of Type Double */
    anchorY?: any;
    
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BackgroundColor of Type Color */
    backgroundColor?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property class of Type IList`1 */
    class?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property Color of Type Color */
    color?: any;
    
    /** Property CornerRadius of Type CornerRadius */
    cornerRadius?: any;
    
    /** Property DisableLayout of Type Boolean */
    disableLayout?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property FlowDirection of Type FlowDirection */
    flowDirection?: any;
    
    /** Property HeightRequest of Type Double */
    heightRequest?: any;
    
    /** Property HorizontalOptions of Type LayoutOptions */
    horizontalOptions?: any;
    
    /** Property InputTransparent of Type Boolean */
    inputTransparent?: any;
    
    /** Property IsEnabled of Type Boolean */
    isEnabled?: any;
    
    /** Property IsInNativeLayout of Type Boolean */
    isInNativeLayout?: any;
    
    /** Property IsNativeStateConsistent of Type Boolean */
    isNativeStateConsistent?: any;
    
    /** Property IsPlatformEnabled of Type Boolean */
    isPlatformEnabled?: any;
    
    /** Property IsTabStop of Type Boolean */
    isTabStop?: any;
    
    /** Property IsVisible of Type Boolean */
    isVisible?: any;
    
    /** Property Margin of Type Thickness */
    margin?: any;
    
    /** Property MinimumHeightRequest of Type Double */
    minimumHeightRequest?: any;
    
    /** Property MinimumWidthRequest of Type Double */
    minimumWidthRequest?: any;
    
    /** Property Navigation of Type INavigation */
    navigation?: any;
    
    /** Property Opacity of Type Double */
    opacity?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property Resources of Type ResourceDictionary */
    resources?: any;
    
    /** Property Rotation of Type Double */
    rotation?: any;
    
    /** Property RotationX of Type Double */
    rotationX?: any;
    
    /** Property RotationY of Type Double */
    rotationY?: any;
    
    /** Property Scale of Type Double */
    scale?: any;
    
    /** Property ScaleX of Type Double */
    scaleX?: any;
    
    /** Property ScaleY of Type Double */
    scaleY?: any;
    
    /** Property Style of Type Style */
    style?: any;
    
    /** Property StyleClass of Type IList`1 */
    styleClass?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
    
    /** Property TabIndex of Type Int32 */
    tabIndex?: any;
    
    /** Property TranslationX of Type Double */
    translationX?: any;
    
    /** Property TranslationY of Type Double */
    translationY?: any;
    
    /** Property VerticalOptions of Type LayoutOptions */
    verticalOptions?: any;
    
    /** Property Visual of Type IVisual */
    visual?: any;
    
    /** Property WidthRequest of Type Double */
    widthRequest?: any;
        [key: string]: any;
    }
    /** BoxView */
    export const BoxView = XNode.prepare<IBoxView>("BoxView|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface IButton {
        
    /** Property AnchorX of Type Double */
    anchorX?: any;
    
    /** Property AnchorY of Type Double */
    anchorY?: any;
    
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BackgroundColor of Type Color */
    backgroundColor?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property BorderColor of Type Color */
    borderColor?: any;
    
    /** Property BorderRadius of Type Int32 */
    borderRadius?: any;
    
    /** Property BorderWidth of Type Double */
    borderWidth?: any;
    
    /** Property CharacterSpacing of Type Double */
    characterSpacing?: any;
    
    /** Property class of Type IList`1 */
    class?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property Command of Type ICommand */
    command?: any;
    
    /** Property CommandParameter of Type Object */
    commandParameter?: any;
    
    /** Property ContentLayout of Type ButtonContentLayout */
    contentLayout?: any;
    
    /** Property CornerRadius of Type Int32 */
    cornerRadius?: any;
    
    /** Property DisableLayout of Type Boolean */
    disableLayout?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property FlowDirection of Type FlowDirection */
    flowDirection?: any;
    
    /** Property Font of Type Font */
    font?: any;
    
    /** Property FontAttributes of Type FontAttributes */
    fontAttributes?: any;
    
    /** Property FontFamily of Type String */
    fontFamily?: any;
    
    /** Property FontSize of Type Double */
    fontSize?: any;
    
    /** Property HeightRequest of Type Double */
    heightRequest?: any;
    
    /** Property HorizontalOptions of Type LayoutOptions */
    horizontalOptions?: any;
    
    /** Property Image of Type FileImageSource */
    image?: any;
    
    /** Property ImageSource of Type ImageSource */
    imageSource?: any;
    
    /** Property InputTransparent of Type Boolean */
    inputTransparent?: any;
    
    /** Property IsEnabled of Type Boolean */
    isEnabled?: any;
    
    /** Property IsInNativeLayout of Type Boolean */
    isInNativeLayout?: any;
    
    /** Property IsNativeStateConsistent of Type Boolean */
    isNativeStateConsistent?: any;
    
    /** Property IsPlatformEnabled of Type Boolean */
    isPlatformEnabled?: any;
    
    /** Property IsTabStop of Type Boolean */
    isTabStop?: any;
    
    /** Property IsVisible of Type Boolean */
    isVisible?: any;
    
    /** Property Margin of Type Thickness */
    margin?: any;
    
    /** Property MinimumHeightRequest of Type Double */
    minimumHeightRequest?: any;
    
    /** Property MinimumWidthRequest of Type Double */
    minimumWidthRequest?: any;
    
    /** Property Navigation of Type INavigation */
    navigation?: any;
    
    /** Property Opacity of Type Double */
    opacity?: any;
    
    /** Property Padding of Type Thickness */
    padding?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property Resources of Type ResourceDictionary */
    resources?: any;
    
    /** Property Rotation of Type Double */
    rotation?: any;
    
    /** Property RotationX of Type Double */
    rotationX?: any;
    
    /** Property RotationY of Type Double */
    rotationY?: any;
    
    /** Property Scale of Type Double */
    scale?: any;
    
    /** Property ScaleX of Type Double */
    scaleX?: any;
    
    /** Property ScaleY of Type Double */
    scaleY?: any;
    
    /** Property Style of Type Style */
    style?: any;
    
    /** Property StyleClass of Type IList`1 */
    styleClass?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
    
    /** Property TabIndex of Type Int32 */
    tabIndex?: any;
    
    /** Property Text of Type String */
    text?: any;
    
    /** Property TextColor of Type Color */
    textColor?: any;
    
    /** Property TranslationX of Type Double */
    translationX?: any;
    
    /** Property TranslationY of Type Double */
    translationY?: any;
    
    /** Property VerticalOptions of Type LayoutOptions */
    verticalOptions?: any;
    
    /** Property Visual of Type IVisual */
    visual?: any;
    
    /** Property WidthRequest of Type Double */
    widthRequest?: any;
        [key: string]: any;
    }
    /** Button */
    export const Button = XNode.prepare<IButton>("Button|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface ICarouselPage {
        
    /** Property AnchorX of Type Double */
    anchorX?: any;
    
    /** Property AnchorY of Type Double */
    anchorY?: any;
    
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BackgroundColor of Type Color */
    backgroundColor?: any;
    
    /** Property BackgroundImage of Type String */
    backgroundImage?: any;
    
    /** Property BackgroundImageSource of Type ImageSource */
    backgroundImageSource?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property class of Type IList`1 */
    class?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property ContainerArea of Type Rectangle */
    containerArea?: any;
    
    /** Property CurrentPage of Type ContentPage */
    currentPage?: any;
    
    /** Property DisableLayout of Type Boolean */
    disableLayout?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property FlowDirection of Type FlowDirection */
    flowDirection?: any;
    
    /** Property HeightRequest of Type Double */
    heightRequest?: any;
    
    /** Property Icon of Type FileImageSource */
    icon?: any;
    
    /** Property IconImageSource of Type ImageSource */
    iconImageSource?: any;
    
    /** Property IgnoresContainerArea of Type Boolean */
    ignoresContainerArea?: any;
    
    /** Property InputTransparent of Type Boolean */
    inputTransparent?: any;
    
    /** Property IsBusy of Type Boolean */
    isBusy?: any;
    
    /** Property IsEnabled of Type Boolean */
    isEnabled?: any;
    
    /** Property IsInNativeLayout of Type Boolean */
    isInNativeLayout?: any;
    
    /** Property IsNativeStateConsistent of Type Boolean */
    isNativeStateConsistent?: any;
    
    /** Property IsPlatformEnabled of Type Boolean */
    isPlatformEnabled?: any;
    
    /** Property IsTabStop of Type Boolean */
    isTabStop?: any;
    
    /** Property IsVisible of Type Boolean */
    isVisible?: any;
    
    /** Property ItemsSource of Type IEnumerable */
    itemsSource?: any;
    
    /** Property ItemTemplate of Type DataTemplate */
    itemTemplate?: any;
    
    /** Property MinimumHeightRequest of Type Double */
    minimumHeightRequest?: any;
    
    /** Property MinimumWidthRequest of Type Double */
    minimumWidthRequest?: any;
    
    /** Property Navigation of Type INavigation */
    navigation?: any;
    
    /** Property Opacity of Type Double */
    opacity?: any;
    
    /** Property Padding of Type Thickness */
    padding?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property Resources of Type ResourceDictionary */
    resources?: any;
    
    /** Property Rotation of Type Double */
    rotation?: any;
    
    /** Property RotationX of Type Double */
    rotationX?: any;
    
    /** Property RotationY of Type Double */
    rotationY?: any;
    
    /** Property Scale of Type Double */
    scale?: any;
    
    /** Property ScaleX of Type Double */
    scaleX?: any;
    
    /** Property ScaleY of Type Double */
    scaleY?: any;
    
    /** Property SelectedItem of Type Object */
    selectedItem?: any;
    
    /** Property Style of Type Style */
    style?: any;
    
    /** Property StyleClass of Type IList`1 */
    styleClass?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
    
    /** Property TabIndex of Type Int32 */
    tabIndex?: any;
    
    /** Property Title of Type String */
    title?: any;
    
    /** Property ToolbarItems of Type IList`1 */
    toolbarItems?: any;
    
    /** Property TranslationX of Type Double */
    translationX?: any;
    
    /** Property TranslationY of Type Double */
    translationY?: any;
    
    /** Property Visual of Type IVisual */
    visual?: any;
    
    /** Property WidthRequest of Type Double */
    widthRequest?: any;
        [key: string]: any;
    }
    /** CarouselPage */
    export const CarouselPage = XNode.prepare<ICarouselPage>("CarouselPage|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface ICell {
        
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property Height of Type Double */
    height?: any;
    
    /** Property IsContextActionsLegacyModeEnabled of Type Boolean */
    isContextActionsLegacyModeEnabled?: any;
    
    /** Property IsEnabled of Type Boolean */
    isEnabled?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
        [key: string]: any;
    }
    /** Cell */
    export const Cell = XNode.prepare<ICell>("Cell|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface IEntryCell {
        
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property Height of Type Double */
    height?: any;
    
    /** Property HorizontalTextAlignment of Type TextAlignment */
    horizontalTextAlignment?: any;
    
    /** Property IsContextActionsLegacyModeEnabled of Type Boolean */
    isContextActionsLegacyModeEnabled?: any;
    
    /** Property IsEnabled of Type Boolean */
    isEnabled?: any;
    
    /** Property Keyboard of Type Keyboard */
    keyboard?: any;
    
    /** Property Label of Type String */
    label?: any;
    
    /** Property LabelColor of Type Color */
    labelColor?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Placeholder of Type String */
    placeholder?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
    
    /** Property Text of Type String */
    text?: any;
    
    /** Property VerticalTextAlignment of Type TextAlignment */
    verticalTextAlignment?: any;
    
    /** Property XAlign of Type TextAlignment */
    xAlign?: any;
        [key: string]: any;
    }
    /** EntryCell */
    export const EntryCell = XNode.prepare<IEntryCell>("EntryCell|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface IImageCell {
        
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property Command of Type ICommand */
    command?: any;
    
    /** Property CommandParameter of Type Object */
    commandParameter?: any;
    
    /** Property Detail of Type String */
    detail?: any;
    
    /** Property DetailColor of Type Color */
    detailColor?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property Height of Type Double */
    height?: any;
    
    /** Property ImageSource of Type ImageSource */
    imageSource?: any;
    
    /** Property IsContextActionsLegacyModeEnabled of Type Boolean */
    isContextActionsLegacyModeEnabled?: any;
    
    /** Property IsEnabled of Type Boolean */
    isEnabled?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
    
    /** Property Text of Type String */
    text?: any;
    
    /** Property TextColor of Type Color */
    textColor?: any;
        [key: string]: any;
    }
    /** ImageCell */
    export const ImageCell = XNode.prepare<IImageCell>("ImageCell|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface ISwitchCell {
        
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property Height of Type Double */
    height?: any;
    
    /** Property IsContextActionsLegacyModeEnabled of Type Boolean */
    isContextActionsLegacyModeEnabled?: any;
    
    /** Property IsEnabled of Type Boolean */
    isEnabled?: any;
    
    /** Property On of Type Boolean */
    on?: any;
    
    /** Property OnColor of Type Color */
    onColor?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
    
    /** Property Text of Type String */
    text?: any;
        [key: string]: any;
    }
    /** SwitchCell */
    export const SwitchCell = XNode.prepare<ISwitchCell>("SwitchCell|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface ITextCell {
        
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property Command of Type ICommand */
    command?: any;
    
    /** Property CommandParameter of Type Object */
    commandParameter?: any;
    
    /** Property Detail of Type String */
    detail?: any;
    
    /** Property DetailColor of Type Color */
    detailColor?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property Height of Type Double */
    height?: any;
    
    /** Property IsContextActionsLegacyModeEnabled of Type Boolean */
    isContextActionsLegacyModeEnabled?: any;
    
    /** Property IsEnabled of Type Boolean */
    isEnabled?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
    
    /** Property Text of Type String */
    text?: any;
    
    /** Property TextColor of Type Color */
    textColor?: any;
        [key: string]: any;
    }
    /** TextCell */
    export const TextCell = XNode.prepare<ITextCell>("TextCell|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface IViewCell {
        
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property Height of Type Double */
    height?: any;
    
    /** Property IsContextActionsLegacyModeEnabled of Type Boolean */
    isContextActionsLegacyModeEnabled?: any;
    
    /** Property IsEnabled of Type Boolean */
    isEnabled?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
    
    /** Property View of Type View */
    view?: any;
        [key: string]: any;
    }
    /** ViewCell */
    export const ViewCell = XNode.prepare<IViewCell>("ViewCell|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface ICheckBox {
        
    /** Property AnchorX of Type Double */
    anchorX?: any;
    
    /** Property AnchorY of Type Double */
    anchorY?: any;
    
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BackgroundColor of Type Color */
    backgroundColor?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property class of Type IList`1 */
    class?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property Color of Type Color */
    color?: any;
    
    /** Property DisableLayout of Type Boolean */
    disableLayout?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property FlowDirection of Type FlowDirection */
    flowDirection?: any;
    
    /** Property HeightRequest of Type Double */
    heightRequest?: any;
    
    /** Property HorizontalOptions of Type LayoutOptions */
    horizontalOptions?: any;
    
    /** Property InputTransparent of Type Boolean */
    inputTransparent?: any;
    
    /** Property IsChecked of Type Boolean */
    isChecked?: any;
    
    /** Property IsEnabled of Type Boolean */
    isEnabled?: any;
    
    /** Property IsInNativeLayout of Type Boolean */
    isInNativeLayout?: any;
    
    /** Property IsNativeStateConsistent of Type Boolean */
    isNativeStateConsistent?: any;
    
    /** Property IsPlatformEnabled of Type Boolean */
    isPlatformEnabled?: any;
    
    /** Property IsTabStop of Type Boolean */
    isTabStop?: any;
    
    /** Property IsVisible of Type Boolean */
    isVisible?: any;
    
    /** Property Margin of Type Thickness */
    margin?: any;
    
    /** Property MinimumHeightRequest of Type Double */
    minimumHeightRequest?: any;
    
    /** Property MinimumWidthRequest of Type Double */
    minimumWidthRequest?: any;
    
    /** Property Navigation of Type INavigation */
    navigation?: any;
    
    /** Property Opacity of Type Double */
    opacity?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property Resources of Type ResourceDictionary */
    resources?: any;
    
    /** Property Rotation of Type Double */
    rotation?: any;
    
    /** Property RotationX of Type Double */
    rotationX?: any;
    
    /** Property RotationY of Type Double */
    rotationY?: any;
    
    /** Property Scale of Type Double */
    scale?: any;
    
    /** Property ScaleX of Type Double */
    scaleX?: any;
    
    /** Property ScaleY of Type Double */
    scaleY?: any;
    
    /** Property Style of Type Style */
    style?: any;
    
    /** Property StyleClass of Type IList`1 */
    styleClass?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
    
    /** Property TabIndex of Type Int32 */
    tabIndex?: any;
    
    /** Property TranslationX of Type Double */
    translationX?: any;
    
    /** Property TranslationY of Type Double */
    translationY?: any;
    
    /** Property VerticalOptions of Type LayoutOptions */
    verticalOptions?: any;
    
    /** Property Visual of Type IVisual */
    visual?: any;
    
    /** Property WidthRequest of Type Double */
    widthRequest?: any;
        [key: string]: any;
    }
    /** CheckBox */
    export const CheckBox = XNode.prepare<ICheckBox>("CheckBox|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface IClickGestureRecognizer {
        
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property Buttons of Type ButtonsMask */
    buttons?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property Command of Type ICommand */
    command?: any;
    
    /** Property CommandParameter of Type Object */
    commandParameter?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property NumberOfClicksRequired of Type Int32 */
    numberOfClicksRequired?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
        [key: string]: any;
    }
    /** ClickGestureRecognizer */
    export const ClickGestureRecognizer = XNode.prepare<IClickGestureRecognizer>("ClickGestureRecognizer|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface IColumnDefinition {
        
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property Width of Type GridLength */
    width?: any;
        [key: string]: any;
    }
    /** ColumnDefinition */
    export const ColumnDefinition = XNode.prepare<IColumnDefinition>("ColumnDefinition|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface IContentPage {
        
    /** Property AnchorX of Type Double */
    anchorX?: any;
    
    /** Property AnchorY of Type Double */
    anchorY?: any;
    
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BackgroundColor of Type Color */
    backgroundColor?: any;
    
    /** Property BackgroundImage of Type String */
    backgroundImage?: any;
    
    /** Property BackgroundImageSource of Type ImageSource */
    backgroundImageSource?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property class of Type IList`1 */
    class?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property ContainerArea of Type Rectangle */
    containerArea?: any;
    
    /** Property Content of Type View */
    content?: any;
    
    /** Property ControlTemplate of Type ControlTemplate */
    controlTemplate?: any;
    
    /** Property DisableLayout of Type Boolean */
    disableLayout?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property FlowDirection of Type FlowDirection */
    flowDirection?: any;
    
    /** Property HeightRequest of Type Double */
    heightRequest?: any;
    
    /** Property Icon of Type FileImageSource */
    icon?: any;
    
    /** Property IconImageSource of Type ImageSource */
    iconImageSource?: any;
    
    /** Property IgnoresContainerArea of Type Boolean */
    ignoresContainerArea?: any;
    
    /** Property InputTransparent of Type Boolean */
    inputTransparent?: any;
    
    /** Property IsBusy of Type Boolean */
    isBusy?: any;
    
    /** Property IsEnabled of Type Boolean */
    isEnabled?: any;
    
    /** Property IsInNativeLayout of Type Boolean */
    isInNativeLayout?: any;
    
    /** Property IsNativeStateConsistent of Type Boolean */
    isNativeStateConsistent?: any;
    
    /** Property IsPlatformEnabled of Type Boolean */
    isPlatformEnabled?: any;
    
    /** Property IsTabStop of Type Boolean */
    isTabStop?: any;
    
    /** Property IsVisible of Type Boolean */
    isVisible?: any;
    
    /** Property MinimumHeightRequest of Type Double */
    minimumHeightRequest?: any;
    
    /** Property MinimumWidthRequest of Type Double */
    minimumWidthRequest?: any;
    
    /** Property Navigation of Type INavigation */
    navigation?: any;
    
    /** Property Opacity of Type Double */
    opacity?: any;
    
    /** Property Padding of Type Thickness */
    padding?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property Resources of Type ResourceDictionary */
    resources?: any;
    
    /** Property Rotation of Type Double */
    rotation?: any;
    
    /** Property RotationX of Type Double */
    rotationX?: any;
    
    /** Property RotationY of Type Double */
    rotationY?: any;
    
    /** Property Scale of Type Double */
    scale?: any;
    
    /** Property ScaleX of Type Double */
    scaleX?: any;
    
    /** Property ScaleY of Type Double */
    scaleY?: any;
    
    /** Property Style of Type Style */
    style?: any;
    
    /** Property StyleClass of Type IList`1 */
    styleClass?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
    
    /** Property TabIndex of Type Int32 */
    tabIndex?: any;
    
    /** Property Title of Type String */
    title?: any;
    
    /** Property ToolbarItems of Type IList`1 */
    toolbarItems?: any;
    
    /** Property TranslationX of Type Double */
    translationX?: any;
    
    /** Property TranslationY of Type Double */
    translationY?: any;
    
    /** Property Visual of Type IVisual */
    visual?: any;
    
    /** Property WidthRequest of Type Double */
    widthRequest?: any;
        [key: string]: any;
    }
    /** ContentPage */
    export const ContentPage = XNode.prepare<IContentPage>("ContentPage|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface IContentPresenter {
        
    /** Property AnchorX of Type Double */
    anchorX?: any;
    
    /** Property AnchorY of Type Double */
    anchorY?: any;
    
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BackgroundColor of Type Color */
    backgroundColor?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property CascadeInputTransparent of Type Boolean */
    cascadeInputTransparent?: any;
    
    /** Property class of Type IList`1 */
    class?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property Content of Type View */
    content?: any;
    
    /** Property DisableLayout of Type Boolean */
    disableLayout?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property FlowDirection of Type FlowDirection */
    flowDirection?: any;
    
    /** Property HeightRequest of Type Double */
    heightRequest?: any;
    
    /** Property HorizontalOptions of Type LayoutOptions */
    horizontalOptions?: any;
    
    /** Property InputTransparent of Type Boolean */
    inputTransparent?: any;
    
    /** Property IsClippedToBounds of Type Boolean */
    isClippedToBounds?: any;
    
    /** Property IsEnabled of Type Boolean */
    isEnabled?: any;
    
    /** Property IsInNativeLayout of Type Boolean */
    isInNativeLayout?: any;
    
    /** Property IsNativeStateConsistent of Type Boolean */
    isNativeStateConsistent?: any;
    
    /** Property IsPlatformEnabled of Type Boolean */
    isPlatformEnabled?: any;
    
    /** Property IsTabStop of Type Boolean */
    isTabStop?: any;
    
    /** Property IsVisible of Type Boolean */
    isVisible?: any;
    
    /** Property Margin of Type Thickness */
    margin?: any;
    
    /** Property MinimumHeightRequest of Type Double */
    minimumHeightRequest?: any;
    
    /** Property MinimumWidthRequest of Type Double */
    minimumWidthRequest?: any;
    
    /** Property Navigation of Type INavigation */
    navigation?: any;
    
    /** Property Opacity of Type Double */
    opacity?: any;
    
    /** Property Padding of Type Thickness */
    padding?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property Resources of Type ResourceDictionary */
    resources?: any;
    
    /** Property Rotation of Type Double */
    rotation?: any;
    
    /** Property RotationX of Type Double */
    rotationX?: any;
    
    /** Property RotationY of Type Double */
    rotationY?: any;
    
    /** Property Scale of Type Double */
    scale?: any;
    
    /** Property ScaleX of Type Double */
    scaleX?: any;
    
    /** Property ScaleY of Type Double */
    scaleY?: any;
    
    /** Property Style of Type Style */
    style?: any;
    
    /** Property StyleClass of Type IList`1 */
    styleClass?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
    
    /** Property TabIndex of Type Int32 */
    tabIndex?: any;
    
    /** Property TranslationX of Type Double */
    translationX?: any;
    
    /** Property TranslationY of Type Double */
    translationY?: any;
    
    /** Property VerticalOptions of Type LayoutOptions */
    verticalOptions?: any;
    
    /** Property Visual of Type IVisual */
    visual?: any;
    
    /** Property WidthRequest of Type Double */
    widthRequest?: any;
        [key: string]: any;
    }
    /** ContentPresenter */
    export const ContentPresenter = XNode.prepare<IContentPresenter>("ContentPresenter|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface IContentView {
        
    /** Property AnchorX of Type Double */
    anchorX?: any;
    
    /** Property AnchorY of Type Double */
    anchorY?: any;
    
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BackgroundColor of Type Color */
    backgroundColor?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property CascadeInputTransparent of Type Boolean */
    cascadeInputTransparent?: any;
    
    /** Property class of Type IList`1 */
    class?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property Content of Type View */
    content?: any;
    
    /** Property ControlTemplate of Type ControlTemplate */
    controlTemplate?: any;
    
    /** Property DisableLayout of Type Boolean */
    disableLayout?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property FlowDirection of Type FlowDirection */
    flowDirection?: any;
    
    /** Property HeightRequest of Type Double */
    heightRequest?: any;
    
    /** Property HorizontalOptions of Type LayoutOptions */
    horizontalOptions?: any;
    
    /** Property InputTransparent of Type Boolean */
    inputTransparent?: any;
    
    /** Property IsClippedToBounds of Type Boolean */
    isClippedToBounds?: any;
    
    /** Property IsEnabled of Type Boolean */
    isEnabled?: any;
    
    /** Property IsInNativeLayout of Type Boolean */
    isInNativeLayout?: any;
    
    /** Property IsNativeStateConsistent of Type Boolean */
    isNativeStateConsistent?: any;
    
    /** Property IsPlatformEnabled of Type Boolean */
    isPlatformEnabled?: any;
    
    /** Property IsTabStop of Type Boolean */
    isTabStop?: any;
    
    /** Property IsVisible of Type Boolean */
    isVisible?: any;
    
    /** Property Margin of Type Thickness */
    margin?: any;
    
    /** Property MinimumHeightRequest of Type Double */
    minimumHeightRequest?: any;
    
    /** Property MinimumWidthRequest of Type Double */
    minimumWidthRequest?: any;
    
    /** Property Navigation of Type INavigation */
    navigation?: any;
    
    /** Property Opacity of Type Double */
    opacity?: any;
    
    /** Property Padding of Type Thickness */
    padding?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property Resources of Type ResourceDictionary */
    resources?: any;
    
    /** Property Rotation of Type Double */
    rotation?: any;
    
    /** Property RotationX of Type Double */
    rotationX?: any;
    
    /** Property RotationY of Type Double */
    rotationY?: any;
    
    /** Property Scale of Type Double */
    scale?: any;
    
    /** Property ScaleX of Type Double */
    scaleX?: any;
    
    /** Property ScaleY of Type Double */
    scaleY?: any;
    
    /** Property Style of Type Style */
    style?: any;
    
    /** Property StyleClass of Type IList`1 */
    styleClass?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
    
    /** Property TabIndex of Type Int32 */
    tabIndex?: any;
    
    /** Property TranslationX of Type Double */
    translationX?: any;
    
    /** Property TranslationY of Type Double */
    translationY?: any;
    
    /** Property VerticalOptions of Type LayoutOptions */
    verticalOptions?: any;
    
    /** Property Visual of Type IVisual */
    visual?: any;
    
    /** Property WidthRequest of Type Double */
    widthRequest?: any;
        [key: string]: any;
    }
    /** ContentView */
    export const ContentView = XNode.prepare<IContentView>("ContentView|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface IDatePicker {
        
    /** Property AnchorX of Type Double */
    anchorX?: any;
    
    /** Property AnchorY of Type Double */
    anchorY?: any;
    
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BackgroundColor of Type Color */
    backgroundColor?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property CharacterSpacing of Type Double */
    characterSpacing?: any;
    
    /** Property class of Type IList`1 */
    class?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property Date of Type DateTime */
    date?: any;
    
    /** Property DisableLayout of Type Boolean */
    disableLayout?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property FlowDirection of Type FlowDirection */
    flowDirection?: any;
    
    /** Property FontAttributes of Type FontAttributes */
    fontAttributes?: any;
    
    /** Property FontFamily of Type String */
    fontFamily?: any;
    
    /** Property FontSize of Type Double */
    fontSize?: any;
    
    /** Property Format of Type String */
    format?: any;
    
    /** Property HeightRequest of Type Double */
    heightRequest?: any;
    
    /** Property HorizontalOptions of Type LayoutOptions */
    horizontalOptions?: any;
    
    /** Property InputTransparent of Type Boolean */
    inputTransparent?: any;
    
    /** Property IsEnabled of Type Boolean */
    isEnabled?: any;
    
    /** Property IsInNativeLayout of Type Boolean */
    isInNativeLayout?: any;
    
    /** Property IsNativeStateConsistent of Type Boolean */
    isNativeStateConsistent?: any;
    
    /** Property IsPlatformEnabled of Type Boolean */
    isPlatformEnabled?: any;
    
    /** Property IsTabStop of Type Boolean */
    isTabStop?: any;
    
    /** Property IsVisible of Type Boolean */
    isVisible?: any;
    
    /** Property Margin of Type Thickness */
    margin?: any;
    
    /** Property MaximumDate of Type DateTime */
    maximumDate?: any;
    
    /** Property MinimumDate of Type DateTime */
    minimumDate?: any;
    
    /** Property MinimumHeightRequest of Type Double */
    minimumHeightRequest?: any;
    
    /** Property MinimumWidthRequest of Type Double */
    minimumWidthRequest?: any;
    
    /** Property Navigation of Type INavigation */
    navigation?: any;
    
    /** Property Opacity of Type Double */
    opacity?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property Resources of Type ResourceDictionary */
    resources?: any;
    
    /** Property Rotation of Type Double */
    rotation?: any;
    
    /** Property RotationX of Type Double */
    rotationX?: any;
    
    /** Property RotationY of Type Double */
    rotationY?: any;
    
    /** Property Scale of Type Double */
    scale?: any;
    
    /** Property ScaleX of Type Double */
    scaleX?: any;
    
    /** Property ScaleY of Type Double */
    scaleY?: any;
    
    /** Property Style of Type Style */
    style?: any;
    
    /** Property StyleClass of Type IList`1 */
    styleClass?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
    
    /** Property TabIndex of Type Int32 */
    tabIndex?: any;
    
    /** Property TextColor of Type Color */
    textColor?: any;
    
    /** Property TranslationX of Type Double */
    translationX?: any;
    
    /** Property TranslationY of Type Double */
    translationY?: any;
    
    /** Property VerticalOptions of Type LayoutOptions */
    verticalOptions?: any;
    
    /** Property Visual of Type IVisual */
    visual?: any;
    
    /** Property WidthRequest of Type Double */
    widthRequest?: any;
        [key: string]: any;
    }
    /** DatePicker */
    export const DatePicker = XNode.prepare<IDatePicker>("DatePicker|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface IEditor {
        
    /** Property AnchorX of Type Double */
    anchorX?: any;
    
    /** Property AnchorY of Type Double */
    anchorY?: any;
    
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property AutoSize of Type EditorAutoSizeOption */
    autoSize?: any;
    
    /** Property BackgroundColor of Type Color */
    backgroundColor?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property CharacterSpacing of Type Double */
    characterSpacing?: any;
    
    /** Property class of Type IList`1 */
    class?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property DisableLayout of Type Boolean */
    disableLayout?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property FlowDirection of Type FlowDirection */
    flowDirection?: any;
    
    /** Property FontAttributes of Type FontAttributes */
    fontAttributes?: any;
    
    /** Property FontFamily of Type String */
    fontFamily?: any;
    
    /** Property FontSize of Type Double */
    fontSize?: any;
    
    /** Property HeightRequest of Type Double */
    heightRequest?: any;
    
    /** Property HorizontalOptions of Type LayoutOptions */
    horizontalOptions?: any;
    
    /** Property InputTransparent of Type Boolean */
    inputTransparent?: any;
    
    /** Property IsEnabled of Type Boolean */
    isEnabled?: any;
    
    /** Property IsInNativeLayout of Type Boolean */
    isInNativeLayout?: any;
    
    /** Property IsNativeStateConsistent of Type Boolean */
    isNativeStateConsistent?: any;
    
    /** Property IsPlatformEnabled of Type Boolean */
    isPlatformEnabled?: any;
    
    /** Property IsReadOnly of Type Boolean */
    isReadOnly?: any;
    
    /** Property IsSpellCheckEnabled of Type Boolean */
    isSpellCheckEnabled?: any;
    
    /** Property IsTabStop of Type Boolean */
    isTabStop?: any;
    
    /** Property IsTextPredictionEnabled of Type Boolean */
    isTextPredictionEnabled?: any;
    
    /** Property IsVisible of Type Boolean */
    isVisible?: any;
    
    /** Property Keyboard of Type Keyboard */
    keyboard?: any;
    
    /** Property Margin of Type Thickness */
    margin?: any;
    
    /** Property MaxLength of Type Int32 */
    maxLength?: any;
    
    /** Property MinimumHeightRequest of Type Double */
    minimumHeightRequest?: any;
    
    /** Property MinimumWidthRequest of Type Double */
    minimumWidthRequest?: any;
    
    /** Property Navigation of Type INavigation */
    navigation?: any;
    
    /** Property Opacity of Type Double */
    opacity?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Placeholder of Type String */
    placeholder?: any;
    
    /** Property PlaceholderColor of Type Color */
    placeholderColor?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property Resources of Type ResourceDictionary */
    resources?: any;
    
    /** Property Rotation of Type Double */
    rotation?: any;
    
    /** Property RotationX of Type Double */
    rotationX?: any;
    
    /** Property RotationY of Type Double */
    rotationY?: any;
    
    /** Property Scale of Type Double */
    scale?: any;
    
    /** Property ScaleX of Type Double */
    scaleX?: any;
    
    /** Property ScaleY of Type Double */
    scaleY?: any;
    
    /** Property Style of Type Style */
    style?: any;
    
    /** Property StyleClass of Type IList`1 */
    styleClass?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
    
    /** Property TabIndex of Type Int32 */
    tabIndex?: any;
    
    /** Property Text of Type String */
    text?: any;
    
    /** Property TextColor of Type Color */
    textColor?: any;
    
    /** Property TranslationX of Type Double */
    translationX?: any;
    
    /** Property TranslationY of Type Double */
    translationY?: any;
    
    /** Property VerticalOptions of Type LayoutOptions */
    verticalOptions?: any;
    
    /** Property Visual of Type IVisual */
    visual?: any;
    
    /** Property WidthRequest of Type Double */
    widthRequest?: any;
        [key: string]: any;
    }
    /** Editor */
    export const Editor = XNode.prepare<IEditor>("Editor|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface IElement {
        
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property RealParent of Type Element */
    realParent?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
        [key: string]: any;
    }
    /** Element */
    export const Element = XNode.prepare<IElement>("Element|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    /** Attached Property Element.Menu of Type BindableProperty */
    export function ElementMenu(v) { return { "Element.Menu|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;": v  } }
    
    
    export interface IEntry {
        
    /** Property AnchorX of Type Double */
    anchorX?: any;
    
    /** Property AnchorY of Type Double */
    anchorY?: any;
    
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BackgroundColor of Type Color */
    backgroundColor?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property CharacterSpacing of Type Double */
    characterSpacing?: any;
    
    /** Property class of Type IList`1 */
    class?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property ClearButtonVisibility of Type ClearButtonVisibility */
    clearButtonVisibility?: any;
    
    /** Property CursorPosition of Type Int32 */
    cursorPosition?: any;
    
    /** Property DisableLayout of Type Boolean */
    disableLayout?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property FlowDirection of Type FlowDirection */
    flowDirection?: any;
    
    /** Property FontAttributes of Type FontAttributes */
    fontAttributes?: any;
    
    /** Property FontFamily of Type String */
    fontFamily?: any;
    
    /** Property FontSize of Type Double */
    fontSize?: any;
    
    /** Property HeightRequest of Type Double */
    heightRequest?: any;
    
    /** Property HorizontalOptions of Type LayoutOptions */
    horizontalOptions?: any;
    
    /** Property HorizontalTextAlignment of Type TextAlignment */
    horizontalTextAlignment?: any;
    
    /** Property InputTransparent of Type Boolean */
    inputTransparent?: any;
    
    /** Property IsEnabled of Type Boolean */
    isEnabled?: any;
    
    /** Property IsInNativeLayout of Type Boolean */
    isInNativeLayout?: any;
    
    /** Property IsNativeStateConsistent of Type Boolean */
    isNativeStateConsistent?: any;
    
    /** Property IsPassword of Type Boolean */
    isPassword?: any;
    
    /** Property IsPlatformEnabled of Type Boolean */
    isPlatformEnabled?: any;
    
    /** Property IsReadOnly of Type Boolean */
    isReadOnly?: any;
    
    /** Property IsSpellCheckEnabled of Type Boolean */
    isSpellCheckEnabled?: any;
    
    /** Property IsTabStop of Type Boolean */
    isTabStop?: any;
    
    /** Property IsTextPredictionEnabled of Type Boolean */
    isTextPredictionEnabled?: any;
    
    /** Property IsVisible of Type Boolean */
    isVisible?: any;
    
    /** Property Keyboard of Type Keyboard */
    keyboard?: any;
    
    /** Property Margin of Type Thickness */
    margin?: any;
    
    /** Property MaxLength of Type Int32 */
    maxLength?: any;
    
    /** Property MinimumHeightRequest of Type Double */
    minimumHeightRequest?: any;
    
    /** Property MinimumWidthRequest of Type Double */
    minimumWidthRequest?: any;
    
    /** Property Navigation of Type INavigation */
    navigation?: any;
    
    /** Property Opacity of Type Double */
    opacity?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Placeholder of Type String */
    placeholder?: any;
    
    /** Property PlaceholderColor of Type Color */
    placeholderColor?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property Resources of Type ResourceDictionary */
    resources?: any;
    
    /** Property ReturnCommand of Type ICommand */
    returnCommand?: any;
    
    /** Property ReturnCommandParameter of Type Object */
    returnCommandParameter?: any;
    
    /** Property ReturnType of Type ReturnType */
    returnType?: any;
    
    /** Property Rotation of Type Double */
    rotation?: any;
    
    /** Property RotationX of Type Double */
    rotationX?: any;
    
    /** Property RotationY of Type Double */
    rotationY?: any;
    
    /** Property Scale of Type Double */
    scale?: any;
    
    /** Property ScaleX of Type Double */
    scaleX?: any;
    
    /** Property ScaleY of Type Double */
    scaleY?: any;
    
    /** Property SelectionLength of Type Int32 */
    selectionLength?: any;
    
    /** Property Style of Type Style */
    style?: any;
    
    /** Property StyleClass of Type IList`1 */
    styleClass?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
    
    /** Property TabIndex of Type Int32 */
    tabIndex?: any;
    
    /** Property Text of Type String */
    text?: any;
    
    /** Property TextColor of Type Color */
    textColor?: any;
    
    /** Property TranslationX of Type Double */
    translationX?: any;
    
    /** Property TranslationY of Type Double */
    translationY?: any;
    
    /** Property VerticalOptions of Type LayoutOptions */
    verticalOptions?: any;
    
    /** Property VerticalTextAlignment of Type TextAlignment */
    verticalTextAlignment?: any;
    
    /** Property Visual of Type IVisual */
    visual?: any;
    
    /** Property WidthRequest of Type Double */
    widthRequest?: any;
        [key: string]: any;
    }
    /** Entry */
    export const Entry = XNode.prepare<IEntry>("Entry|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface IFileImageSource {
        
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property File of Type String */
    file?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
        [key: string]: any;
    }
    /** FileImageSource */
    export const FileImageSource = XNode.prepare<IFileImageSource>("FileImageSource|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface IFlexLayout {
        
    /** Property AlignContent of Type FlexAlignContent */
    alignContent?: any;
    
    /** Property AlignItems of Type FlexAlignItems */
    alignItems?: any;
    
    /** Property AnchorX of Type Double */
    anchorX?: any;
    
    /** Property AnchorY of Type Double */
    anchorY?: any;
    
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BackgroundColor of Type Color */
    backgroundColor?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property CascadeInputTransparent of Type Boolean */
    cascadeInputTransparent?: any;
    
    /** Property class of Type IList`1 */
    class?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property Direction of Type FlexDirection */
    direction?: any;
    
    /** Property DisableLayout of Type Boolean */
    disableLayout?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property FlowDirection of Type FlowDirection */
    flowDirection?: any;
    
    /** Property HeightRequest of Type Double */
    heightRequest?: any;
    
    /** Property HorizontalOptions of Type LayoutOptions */
    horizontalOptions?: any;
    
    /** Property InputTransparent of Type Boolean */
    inputTransparent?: any;
    
    /** Property IsClippedToBounds of Type Boolean */
    isClippedToBounds?: any;
    
    /** Property IsEnabled of Type Boolean */
    isEnabled?: any;
    
    /** Property IsInNativeLayout of Type Boolean */
    isInNativeLayout?: any;
    
    /** Property IsNativeStateConsistent of Type Boolean */
    isNativeStateConsistent?: any;
    
    /** Property IsPlatformEnabled of Type Boolean */
    isPlatformEnabled?: any;
    
    /** Property IsTabStop of Type Boolean */
    isTabStop?: any;
    
    /** Property IsVisible of Type Boolean */
    isVisible?: any;
    
    /** Property JustifyContent of Type FlexJustify */
    justifyContent?: any;
    
    /** Property Margin of Type Thickness */
    margin?: any;
    
    /** Property MinimumHeightRequest of Type Double */
    minimumHeightRequest?: any;
    
    /** Property MinimumWidthRequest of Type Double */
    minimumWidthRequest?: any;
    
    /** Property Navigation of Type INavigation */
    navigation?: any;
    
    /** Property Opacity of Type Double */
    opacity?: any;
    
    /** Property Padding of Type Thickness */
    padding?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property Position of Type FlexPosition */
    position?: any;
    
    /** Property Resources of Type ResourceDictionary */
    resources?: any;
    
    /** Property Rotation of Type Double */
    rotation?: any;
    
    /** Property RotationX of Type Double */
    rotationX?: any;
    
    /** Property RotationY of Type Double */
    rotationY?: any;
    
    /** Property Scale of Type Double */
    scale?: any;
    
    /** Property ScaleX of Type Double */
    scaleX?: any;
    
    /** Property ScaleY of Type Double */
    scaleY?: any;
    
    /** Property Style of Type Style */
    style?: any;
    
    /** Property StyleClass of Type IList`1 */
    styleClass?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
    
    /** Property TabIndex of Type Int32 */
    tabIndex?: any;
    
    /** Property TranslationX of Type Double */
    translationX?: any;
    
    /** Property TranslationY of Type Double */
    translationY?: any;
    
    /** Property VerticalOptions of Type LayoutOptions */
    verticalOptions?: any;
    
    /** Property Visual of Type IVisual */
    visual?: any;
    
    /** Property WidthRequest of Type Double */
    widthRequest?: any;
    
    /** Property Wrap of Type FlexWrap */
    wrap?: any;
        [key: string]: any;
    }
    /** FlexLayout */
    export const FlexLayout = XNode.prepare<IFlexLayout>("FlexLayout|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    /** Attached Property FlexLayout.Order of Type BindableProperty */
    export function FlexLayoutOrder(v) { return { "FlexLayout.Order|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;": v  } }
    
    /** Attached Property FlexLayout.Grow of Type BindableProperty */
    export function FlexLayoutGrow(v) { return { "FlexLayout.Grow|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;": v  } }
    
    /** Attached Property FlexLayout.Shrink of Type BindableProperty */
    export function FlexLayoutShrink(v) { return { "FlexLayout.Shrink|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;": v  } }
    
    /** Attached Property FlexLayout.AlignSelf of Type BindableProperty */
    export function FlexLayoutAlignSelf(v) { return { "FlexLayout.AlignSelf|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;": v  } }
    
    /** Attached Property FlexLayout.Basis of Type BindableProperty */
    export function FlexLayoutBasis(v) { return { "FlexLayout.Basis|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;": v  } }
    
    
    export interface IFontImageSource {
        
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property Color of Type Color */
    color?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property FontFamily of Type String */
    fontFamily?: any;
    
    /** Property Glyph of Type String */
    glyph?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property Size of Type Double */
    size?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
        [key: string]: any;
    }
    /** FontImageSource */
    export const FontImageSource = XNode.prepare<IFontImageSource>("FontImageSource|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface IFormattedString {
        
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
        [key: string]: any;
    }
    /** FormattedString */
    export const FormattedString = XNode.prepare<IFormattedString>("FormattedString|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface IFrame {
        
    /** Property AnchorX of Type Double */
    anchorX?: any;
    
    /** Property AnchorY of Type Double */
    anchorY?: any;
    
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BackgroundColor of Type Color */
    backgroundColor?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property BorderColor of Type Color */
    borderColor?: any;
    
    /** Property CascadeInputTransparent of Type Boolean */
    cascadeInputTransparent?: any;
    
    /** Property class of Type IList`1 */
    class?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property Content of Type View */
    content?: any;
    
    /** Property ControlTemplate of Type ControlTemplate */
    controlTemplate?: any;
    
    /** Property CornerRadius of Type Single */
    cornerRadius?: any;
    
    /** Property DisableLayout of Type Boolean */
    disableLayout?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property FlowDirection of Type FlowDirection */
    flowDirection?: any;
    
    /** Property HasShadow of Type Boolean */
    hasShadow?: any;
    
    /** Property HeightRequest of Type Double */
    heightRequest?: any;
    
    /** Property HorizontalOptions of Type LayoutOptions */
    horizontalOptions?: any;
    
    /** Property InputTransparent of Type Boolean */
    inputTransparent?: any;
    
    /** Property IsClippedToBounds of Type Boolean */
    isClippedToBounds?: any;
    
    /** Property IsEnabled of Type Boolean */
    isEnabled?: any;
    
    /** Property IsInNativeLayout of Type Boolean */
    isInNativeLayout?: any;
    
    /** Property IsNativeStateConsistent of Type Boolean */
    isNativeStateConsistent?: any;
    
    /** Property IsPlatformEnabled of Type Boolean */
    isPlatformEnabled?: any;
    
    /** Property IsTabStop of Type Boolean */
    isTabStop?: any;
    
    /** Property IsVisible of Type Boolean */
    isVisible?: any;
    
    /** Property Margin of Type Thickness */
    margin?: any;
    
    /** Property MinimumHeightRequest of Type Double */
    minimumHeightRequest?: any;
    
    /** Property MinimumWidthRequest of Type Double */
    minimumWidthRequest?: any;
    
    /** Property Navigation of Type INavigation */
    navigation?: any;
    
    /** Property Opacity of Type Double */
    opacity?: any;
    
    /** Property OutlineColor of Type Color */
    outlineColor?: any;
    
    /** Property Padding of Type Thickness */
    padding?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property Resources of Type ResourceDictionary */
    resources?: any;
    
    /** Property Rotation of Type Double */
    rotation?: any;
    
    /** Property RotationX of Type Double */
    rotationX?: any;
    
    /** Property RotationY of Type Double */
    rotationY?: any;
    
    /** Property Scale of Type Double */
    scale?: any;
    
    /** Property ScaleX of Type Double */
    scaleX?: any;
    
    /** Property ScaleY of Type Double */
    scaleY?: any;
    
    /** Property Style of Type Style */
    style?: any;
    
    /** Property StyleClass of Type IList`1 */
    styleClass?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
    
    /** Property TabIndex of Type Int32 */
    tabIndex?: any;
    
    /** Property TranslationX of Type Double */
    translationX?: any;
    
    /** Property TranslationY of Type Double */
    translationY?: any;
    
    /** Property VerticalOptions of Type LayoutOptions */
    verticalOptions?: any;
    
    /** Property Visual of Type IVisual */
    visual?: any;
    
    /** Property WidthRequest of Type Double */
    widthRequest?: any;
        [key: string]: any;
    }
    /** Frame */
    export const Frame = XNode.prepare<IFrame>("Frame|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface IGestureElement {
        
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
        [key: string]: any;
    }
    /** GestureElement */
    export const GestureElement = XNode.prepare<IGestureElement>("GestureElement|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface IGestureRecognizer {
        
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
        [key: string]: any;
    }
    /** GestureRecognizer */
    export const GestureRecognizer = XNode.prepare<IGestureRecognizer>("GestureRecognizer|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface IGrid {
        
    /** Property AnchorX of Type Double */
    anchorX?: any;
    
    /** Property AnchorY of Type Double */
    anchorY?: any;
    
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BackgroundColor of Type Color */
    backgroundColor?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property CascadeInputTransparent of Type Boolean */
    cascadeInputTransparent?: any;
    
    /** Property class of Type IList`1 */
    class?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property ColumnDefinitions of Type ColumnDefinitionCollection */
    columnDefinitions?: any;
    
    /** Property ColumnSpacing of Type Double */
    columnSpacing?: any;
    
    /** Property DisableLayout of Type Boolean */
    disableLayout?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property FlowDirection of Type FlowDirection */
    flowDirection?: any;
    
    /** Property HeightRequest of Type Double */
    heightRequest?: any;
    
    /** Property HorizontalOptions of Type LayoutOptions */
    horizontalOptions?: any;
    
    /** Property InputTransparent of Type Boolean */
    inputTransparent?: any;
    
    /** Property IsClippedToBounds of Type Boolean */
    isClippedToBounds?: any;
    
    /** Property IsEnabled of Type Boolean */
    isEnabled?: any;
    
    /** Property IsInNativeLayout of Type Boolean */
    isInNativeLayout?: any;
    
    /** Property IsNativeStateConsistent of Type Boolean */
    isNativeStateConsistent?: any;
    
    /** Property IsPlatformEnabled of Type Boolean */
    isPlatformEnabled?: any;
    
    /** Property IsTabStop of Type Boolean */
    isTabStop?: any;
    
    /** Property IsVisible of Type Boolean */
    isVisible?: any;
    
    /** Property Margin of Type Thickness */
    margin?: any;
    
    /** Property MinimumHeightRequest of Type Double */
    minimumHeightRequest?: any;
    
    /** Property MinimumWidthRequest of Type Double */
    minimumWidthRequest?: any;
    
    /** Property Navigation of Type INavigation */
    navigation?: any;
    
    /** Property Opacity of Type Double */
    opacity?: any;
    
    /** Property Padding of Type Thickness */
    padding?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property Resources of Type ResourceDictionary */
    resources?: any;
    
    /** Property Rotation of Type Double */
    rotation?: any;
    
    /** Property RotationX of Type Double */
    rotationX?: any;
    
    /** Property RotationY of Type Double */
    rotationY?: any;
    
    /** Property RowDefinitions of Type RowDefinitionCollection */
    rowDefinitions?: any;
    
    /** Property RowSpacing of Type Double */
    rowSpacing?: any;
    
    /** Property Scale of Type Double */
    scale?: any;
    
    /** Property ScaleX of Type Double */
    scaleX?: any;
    
    /** Property ScaleY of Type Double */
    scaleY?: any;
    
    /** Property Style of Type Style */
    style?: any;
    
    /** Property StyleClass of Type IList`1 */
    styleClass?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
    
    /** Property TabIndex of Type Int32 */
    tabIndex?: any;
    
    /** Property TranslationX of Type Double */
    translationX?: any;
    
    /** Property TranslationY of Type Double */
    translationY?: any;
    
    /** Property VerticalOptions of Type LayoutOptions */
    verticalOptions?: any;
    
    /** Property Visual of Type IVisual */
    visual?: any;
    
    /** Property WidthRequest of Type Double */
    widthRequest?: any;
        [key: string]: any;
    }
    /** Grid */
    export const Grid = XNode.prepare<IGrid>("Grid|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    /** Attached Property Grid.Row of Type BindableProperty */
    export function GridRow(v) { return { "Grid.Row|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;": v  } }
    
    /** Attached Property Grid.RowSpan of Type BindableProperty */
    export function GridRowSpan(v) { return { "Grid.RowSpan|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;": v  } }
    
    /** Attached Property Grid.Column of Type BindableProperty */
    export function GridColumn(v) { return { "Grid.Column|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;": v  } }
    
    /** Attached Property Grid.ColumnSpan of Type BindableProperty */
    export function GridColumnSpan(v) { return { "Grid.ColumnSpan|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;": v  } }
    
    
    export interface IHtmlWebViewSource {
        
    /** Property BaseUrl of Type String */
    baseUrl?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property Html of Type String */
    html?: any;
        [key: string]: any;
    }
    /** HtmlWebViewSource */
    export const HtmlWebViewSource = XNode.prepare<IHtmlWebViewSource>("HtmlWebViewSource|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface IImage {
        
    /** Property AnchorX of Type Double */
    anchorX?: any;
    
    /** Property AnchorY of Type Double */
    anchorY?: any;
    
    /** Property Aspect of Type Aspect */
    aspect?: any;
    
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BackgroundColor of Type Color */
    backgroundColor?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property class of Type IList`1 */
    class?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property DisableLayout of Type Boolean */
    disableLayout?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property FlowDirection of Type FlowDirection */
    flowDirection?: any;
    
    /** Property HeightRequest of Type Double */
    heightRequest?: any;
    
    /** Property HorizontalOptions of Type LayoutOptions */
    horizontalOptions?: any;
    
    /** Property InputTransparent of Type Boolean */
    inputTransparent?: any;
    
    /** Property IsAnimationPlaying of Type Boolean */
    isAnimationPlaying?: any;
    
    /** Property IsEnabled of Type Boolean */
    isEnabled?: any;
    
    /** Property IsInNativeLayout of Type Boolean */
    isInNativeLayout?: any;
    
    /** Property IsNativeStateConsistent of Type Boolean */
    isNativeStateConsistent?: any;
    
    /** Property IsOpaque of Type Boolean */
    isOpaque?: any;
    
    /** Property IsPlatformEnabled of Type Boolean */
    isPlatformEnabled?: any;
    
    /** Property IsTabStop of Type Boolean */
    isTabStop?: any;
    
    /** Property IsVisible of Type Boolean */
    isVisible?: any;
    
    /** Property Margin of Type Thickness */
    margin?: any;
    
    /** Property MinimumHeightRequest of Type Double */
    minimumHeightRequest?: any;
    
    /** Property MinimumWidthRequest of Type Double */
    minimumWidthRequest?: any;
    
    /** Property Navigation of Type INavigation */
    navigation?: any;
    
    /** Property Opacity of Type Double */
    opacity?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property Resources of Type ResourceDictionary */
    resources?: any;
    
    /** Property Rotation of Type Double */
    rotation?: any;
    
    /** Property RotationX of Type Double */
    rotationX?: any;
    
    /** Property RotationY of Type Double */
    rotationY?: any;
    
    /** Property Scale of Type Double */
    scale?: any;
    
    /** Property ScaleX of Type Double */
    scaleX?: any;
    
    /** Property ScaleY of Type Double */
    scaleY?: any;
    
    /** Property Source of Type ImageSource */
    source?: any;
    
    /** Property Style of Type Style */
    style?: any;
    
    /** Property StyleClass of Type IList`1 */
    styleClass?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
    
    /** Property TabIndex of Type Int32 */
    tabIndex?: any;
    
    /** Property TranslationX of Type Double */
    translationX?: any;
    
    /** Property TranslationY of Type Double */
    translationY?: any;
    
    /** Property VerticalOptions of Type LayoutOptions */
    verticalOptions?: any;
    
    /** Property Visual of Type IVisual */
    visual?: any;
    
    /** Property WidthRequest of Type Double */
    widthRequest?: any;
        [key: string]: any;
    }
    /** Image */
    export const Image = XNode.prepare<IImage>("Image|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface IImageButton {
        
    /** Property AnchorX of Type Double */
    anchorX?: any;
    
    /** Property AnchorY of Type Double */
    anchorY?: any;
    
    /** Property Aspect of Type Aspect */
    aspect?: any;
    
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BackgroundColor of Type Color */
    backgroundColor?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property BorderColor of Type Color */
    borderColor?: any;
    
    /** Property BorderWidth of Type Double */
    borderWidth?: any;
    
    /** Property class of Type IList`1 */
    class?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property Command of Type ICommand */
    command?: any;
    
    /** Property CommandParameter of Type Object */
    commandParameter?: any;
    
    /** Property CornerRadius of Type Int32 */
    cornerRadius?: any;
    
    /** Property DisableLayout of Type Boolean */
    disableLayout?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property FlowDirection of Type FlowDirection */
    flowDirection?: any;
    
    /** Property HeightRequest of Type Double */
    heightRequest?: any;
    
    /** Property HorizontalOptions of Type LayoutOptions */
    horizontalOptions?: any;
    
    /** Property InputTransparent of Type Boolean */
    inputTransparent?: any;
    
    /** Property IsEnabled of Type Boolean */
    isEnabled?: any;
    
    /** Property IsInNativeLayout of Type Boolean */
    isInNativeLayout?: any;
    
    /** Property IsNativeStateConsistent of Type Boolean */
    isNativeStateConsistent?: any;
    
    /** Property IsOpaque of Type Boolean */
    isOpaque?: any;
    
    /** Property IsPlatformEnabled of Type Boolean */
    isPlatformEnabled?: any;
    
    /** Property IsTabStop of Type Boolean */
    isTabStop?: any;
    
    /** Property IsVisible of Type Boolean */
    isVisible?: any;
    
    /** Property Margin of Type Thickness */
    margin?: any;
    
    /** Property MinimumHeightRequest of Type Double */
    minimumHeightRequest?: any;
    
    /** Property MinimumWidthRequest of Type Double */
    minimumWidthRequest?: any;
    
    /** Property Navigation of Type INavigation */
    navigation?: any;
    
    /** Property Opacity of Type Double */
    opacity?: any;
    
    /** Property Padding of Type Thickness */
    padding?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property Resources of Type ResourceDictionary */
    resources?: any;
    
    /** Property Rotation of Type Double */
    rotation?: any;
    
    /** Property RotationX of Type Double */
    rotationX?: any;
    
    /** Property RotationY of Type Double */
    rotationY?: any;
    
    /** Property Scale of Type Double */
    scale?: any;
    
    /** Property ScaleX of Type Double */
    scaleX?: any;
    
    /** Property ScaleY of Type Double */
    scaleY?: any;
    
    /** Property Source of Type ImageSource */
    source?: any;
    
    /** Property Style of Type Style */
    style?: any;
    
    /** Property StyleClass of Type IList`1 */
    styleClass?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
    
    /** Property TabIndex of Type Int32 */
    tabIndex?: any;
    
    /** Property TranslationX of Type Double */
    translationX?: any;
    
    /** Property TranslationY of Type Double */
    translationY?: any;
    
    /** Property VerticalOptions of Type LayoutOptions */
    verticalOptions?: any;
    
    /** Property Visual of Type IVisual */
    visual?: any;
    
    /** Property WidthRequest of Type Double */
    widthRequest?: any;
        [key: string]: any;
    }
    /** ImageButton */
    export const ImageButton = XNode.prepare<IImageButton>("ImageButton|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface IImageSource {
        
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
        [key: string]: any;
    }
    /** ImageSource */
    export const ImageSource = XNode.prepare<IImageSource>("ImageSource|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface IIndicatorView {
        
    /** Property AnchorX of Type Double */
    anchorX?: any;
    
    /** Property AnchorY of Type Double */
    anchorY?: any;
    
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BackgroundColor of Type Color */
    backgroundColor?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property CascadeInputTransparent of Type Boolean */
    cascadeInputTransparent?: any;
    
    /** Property class of Type IList`1 */
    class?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property ControlTemplate of Type ControlTemplate */
    controlTemplate?: any;
    
    /** Property Count of Type Int32 */
    count?: any;
    
    /** Property DisableLayout of Type Boolean */
    disableLayout?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property FlowDirection of Type FlowDirection */
    flowDirection?: any;
    
    /** Property HeightRequest of Type Double */
    heightRequest?: any;
    
    /** Property HideSingle of Type Boolean */
    hideSingle?: any;
    
    /** Property HorizontalOptions of Type LayoutOptions */
    horizontalOptions?: any;
    
    /** Property IndicatorColor of Type Color */
    indicatorColor?: any;
    
    /** Property IndicatorLayout of Type Layout`1 */
    indicatorLayout?: any;
    
    /** Property IndicatorSize of Type Double */
    indicatorSize?: any;
    
    /** Property IndicatorsShape of Type IndicatorShape */
    indicatorsShape?: any;
    
    /** Property IndicatorTemplate of Type DataTemplate */
    indicatorTemplate?: any;
    
    /** Property InputTransparent of Type Boolean */
    inputTransparent?: any;
    
    /** Property IsClippedToBounds of Type Boolean */
    isClippedToBounds?: any;
    
    /** Property IsEnabled of Type Boolean */
    isEnabled?: any;
    
    /** Property IsInNativeLayout of Type Boolean */
    isInNativeLayout?: any;
    
    /** Property IsNativeStateConsistent of Type Boolean */
    isNativeStateConsistent?: any;
    
    /** Property IsPlatformEnabled of Type Boolean */
    isPlatformEnabled?: any;
    
    /** Property IsTabStop of Type Boolean */
    isTabStop?: any;
    
    /** Property IsVisible of Type Boolean */
    isVisible?: any;
    
    /** Property ItemsSource of Type IEnumerable */
    itemsSource?: any;
    
    /** Property Margin of Type Thickness */
    margin?: any;
    
    /** Property MaximumVisible of Type Int32 */
    maximumVisible?: any;
    
    /** Property MinimumHeightRequest of Type Double */
    minimumHeightRequest?: any;
    
    /** Property MinimumWidthRequest of Type Double */
    minimumWidthRequest?: any;
    
    /** Property Navigation of Type INavigation */
    navigation?: any;
    
    /** Property Opacity of Type Double */
    opacity?: any;
    
    /** Property Padding of Type Thickness */
    padding?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property Position of Type Int32 */
    position?: any;
    
    /** Property Resources of Type ResourceDictionary */
    resources?: any;
    
    /** Property Rotation of Type Double */
    rotation?: any;
    
    /** Property RotationX of Type Double */
    rotationX?: any;
    
    /** Property RotationY of Type Double */
    rotationY?: any;
    
    /** Property Scale of Type Double */
    scale?: any;
    
    /** Property ScaleX of Type Double */
    scaleX?: any;
    
    /** Property ScaleY of Type Double */
    scaleY?: any;
    
    /** Property SelectedIndicatorColor of Type Color */
    selectedIndicatorColor?: any;
    
    /** Property Style of Type Style */
    style?: any;
    
    /** Property StyleClass of Type IList`1 */
    styleClass?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
    
    /** Property TabIndex of Type Int32 */
    tabIndex?: any;
    
    /** Property TranslationX of Type Double */
    translationX?: any;
    
    /** Property TranslationY of Type Double */
    translationY?: any;
    
    /** Property VerticalOptions of Type LayoutOptions */
    verticalOptions?: any;
    
    /** Property Visual of Type IVisual */
    visual?: any;
    
    /** Property WidthRequest of Type Double */
    widthRequest?: any;
        [key: string]: any;
    }
    /** IndicatorView */
    export const IndicatorView = XNode.prepare<IIndicatorView>("IndicatorView|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    /** Attached Property IndicatorView.ItemsSourceBy of Type BindableProperty */
    export function IndicatorViewItemsSourceBy(v) { return { "IndicatorView.ItemsSourceBy|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;": v  } }
    
    
    export interface IInputView {
        
    /** Property AnchorX of Type Double */
    anchorX?: any;
    
    /** Property AnchorY of Type Double */
    anchorY?: any;
    
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BackgroundColor of Type Color */
    backgroundColor?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property CharacterSpacing of Type Double */
    characterSpacing?: any;
    
    /** Property class of Type IList`1 */
    class?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property DisableLayout of Type Boolean */
    disableLayout?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property FlowDirection of Type FlowDirection */
    flowDirection?: any;
    
    /** Property HeightRequest of Type Double */
    heightRequest?: any;
    
    /** Property HorizontalOptions of Type LayoutOptions */
    horizontalOptions?: any;
    
    /** Property InputTransparent of Type Boolean */
    inputTransparent?: any;
    
    /** Property IsEnabled of Type Boolean */
    isEnabled?: any;
    
    /** Property IsInNativeLayout of Type Boolean */
    isInNativeLayout?: any;
    
    /** Property IsNativeStateConsistent of Type Boolean */
    isNativeStateConsistent?: any;
    
    /** Property IsPlatformEnabled of Type Boolean */
    isPlatformEnabled?: any;
    
    /** Property IsReadOnly of Type Boolean */
    isReadOnly?: any;
    
    /** Property IsSpellCheckEnabled of Type Boolean */
    isSpellCheckEnabled?: any;
    
    /** Property IsTabStop of Type Boolean */
    isTabStop?: any;
    
    /** Property IsVisible of Type Boolean */
    isVisible?: any;
    
    /** Property Keyboard of Type Keyboard */
    keyboard?: any;
    
    /** Property Margin of Type Thickness */
    margin?: any;
    
    /** Property MaxLength of Type Int32 */
    maxLength?: any;
    
    /** Property MinimumHeightRequest of Type Double */
    minimumHeightRequest?: any;
    
    /** Property MinimumWidthRequest of Type Double */
    minimumWidthRequest?: any;
    
    /** Property Navigation of Type INavigation */
    navigation?: any;
    
    /** Property Opacity of Type Double */
    opacity?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Placeholder of Type String */
    placeholder?: any;
    
    /** Property PlaceholderColor of Type Color */
    placeholderColor?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property Resources of Type ResourceDictionary */
    resources?: any;
    
    /** Property Rotation of Type Double */
    rotation?: any;
    
    /** Property RotationX of Type Double */
    rotationX?: any;
    
    /** Property RotationY of Type Double */
    rotationY?: any;
    
    /** Property Scale of Type Double */
    scale?: any;
    
    /** Property ScaleX of Type Double */
    scaleX?: any;
    
    /** Property ScaleY of Type Double */
    scaleY?: any;
    
    /** Property Style of Type Style */
    style?: any;
    
    /** Property StyleClass of Type IList`1 */
    styleClass?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
    
    /** Property TabIndex of Type Int32 */
    tabIndex?: any;
    
    /** Property Text of Type String */
    text?: any;
    
    /** Property TextColor of Type Color */
    textColor?: any;
    
    /** Property TranslationX of Type Double */
    translationX?: any;
    
    /** Property TranslationY of Type Double */
    translationY?: any;
    
    /** Property VerticalOptions of Type LayoutOptions */
    verticalOptions?: any;
    
    /** Property Visual of Type IVisual */
    visual?: any;
    
    /** Property WidthRequest of Type Double */
    widthRequest?: any;
        [key: string]: any;
    }
    /** InputView */
    export const InputView = XNode.prepare<IInputView>("InputView|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface IBehavior {
        
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
        [key: string]: any;
    }
    /** Behavior */
    export const Behavior = XNode.prepare<IBehavior>("Behavior|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface IDataTrigger {
        
    /** Property Binding of Type BindingBase */
    binding?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property Value of Type Object */
    value?: any;
        [key: string]: any;
    }
    /** DataTrigger */
    export const DataTrigger = XNode.prepare<IDataTrigger>("DataTrigger|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface IEventTrigger {
        
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property Event of Type String */
    event?: any;
        [key: string]: any;
    }
    /** EventTrigger */
    export const EventTrigger = XNode.prepare<IEventTrigger>("EventTrigger|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface IMultiTrigger {
        
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
        [key: string]: any;
    }
    /** MultiTrigger */
    export const MultiTrigger = XNode.prepare<IMultiTrigger>("MultiTrigger|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface ITrigger {
        
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property Property of Type BindableProperty */
    property?: any;
    
    /** Property Value of Type Object */
    value?: any;
        [key: string]: any;
    }
    /** Trigger */
    export const Trigger = XNode.prepare<ITrigger>("Trigger|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface ITriggerBase {
        
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property IsSealed of Type Boolean */
    isSealed?: any;
        [key: string]: any;
    }
    /** TriggerBase */
    export const TriggerBase = XNode.prepare<ITriggerBase>("TriggerBase|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface ICarouselView {
        
    /** Property AnchorX of Type Double */
    anchorX?: any;
    
    /** Property AnchorY of Type Double */
    anchorY?: any;
    
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BackgroundColor of Type Color */
    backgroundColor?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property class of Type IList`1 */
    class?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property CurrentItem of Type Object */
    currentItem?: any;
    
    /** Property CurrentItemChangedCommand of Type ICommand */
    currentItemChangedCommand?: any;
    
    /** Property CurrentItemChangedCommandParameter of Type Object */
    currentItemChangedCommandParameter?: any;
    
    /** Property DisableLayout of Type Boolean */
    disableLayout?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property EmptyView of Type Object */
    emptyView?: any;
    
    /** Property EmptyViewTemplate of Type DataTemplate */
    emptyViewTemplate?: any;
    
    /** Property FlowDirection of Type FlowDirection */
    flowDirection?: any;
    
    /** Property HeightRequest of Type Double */
    heightRequest?: any;
    
    /** Property HorizontalOptions of Type LayoutOptions */
    horizontalOptions?: any;
    
    /** Property HorizontalScrollBarVisibility of Type ScrollBarVisibility */
    horizontalScrollBarVisibility?: any;
    
    /** Property InputTransparent of Type Boolean */
    inputTransparent?: any;
    
    /** Property IsBounceEnabled of Type Boolean */
    isBounceEnabled?: any;
    
    /** Property IsEnabled of Type Boolean */
    isEnabled?: any;
    
    /** Property IsInNativeLayout of Type Boolean */
    isInNativeLayout?: any;
    
    /** Property IsNativeStateConsistent of Type Boolean */
    isNativeStateConsistent?: any;
    
    /** Property IsPlatformEnabled of Type Boolean */
    isPlatformEnabled?: any;
    
    /** Property IsScrollAnimated of Type Boolean */
    isScrollAnimated?: any;
    
    /** Property IsScrolling of Type Boolean */
    isScrolling?: any;
    
    /** Property IsSwipeEnabled of Type Boolean */
    isSwipeEnabled?: any;
    
    /** Property IsTabStop of Type Boolean */
    isTabStop?: any;
    
    /** Property IsVisible of Type Boolean */
    isVisible?: any;
    
    /** Property ItemsLayout of Type LinearItemsLayout */
    itemsLayout?: any;
    
    /** Property ItemsSource of Type IEnumerable */
    itemsSource?: any;
    
    /** Property ItemsUpdatingScrollMode of Type ItemsUpdatingScrollMode */
    itemsUpdatingScrollMode?: any;
    
    /** Property ItemTemplate of Type DataTemplate */
    itemTemplate?: any;
    
    /** Property Margin of Type Thickness */
    margin?: any;
    
    /** Property MinimumHeightRequest of Type Double */
    minimumHeightRequest?: any;
    
    /** Property MinimumWidthRequest of Type Double */
    minimumWidthRequest?: any;
    
    /** Property Navigation of Type INavigation */
    navigation?: any;
    
    /** Property Opacity of Type Double */
    opacity?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property PeekAreaInsets of Type Thickness */
    peekAreaInsets?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property Position of Type Int32 */
    position?: any;
    
    /** Property PositionChangedCommand of Type ICommand */
    positionChangedCommand?: any;
    
    /** Property PositionChangedCommandParameter of Type Object */
    positionChangedCommandParameter?: any;
    
    /** Property RemainingItemsThreshold of Type Int32 */
    remainingItemsThreshold?: any;
    
    /** Property RemainingItemsThresholdReachedCommand of Type ICommand */
    remainingItemsThresholdReachedCommand?: any;
    
    /** Property RemainingItemsThresholdReachedCommandParameter of Type Object */
    remainingItemsThresholdReachedCommandParameter?: any;
    
    /** Property Resources of Type ResourceDictionary */
    resources?: any;
    
    /** Property Rotation of Type Double */
    rotation?: any;
    
    /** Property RotationX of Type Double */
    rotationX?: any;
    
    /** Property RotationY of Type Double */
    rotationY?: any;
    
    /** Property Scale of Type Double */
    scale?: any;
    
    /** Property ScaleX of Type Double */
    scaleX?: any;
    
    /** Property ScaleY of Type Double */
    scaleY?: any;
    
    /** Property Style of Type Style */
    style?: any;
    
    /** Property StyleClass of Type IList`1 */
    styleClass?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
    
    /** Property TabIndex of Type Int32 */
    tabIndex?: any;
    
    /** Property TranslationX of Type Double */
    translationX?: any;
    
    /** Property TranslationY of Type Double */
    translationY?: any;
    
    /** Property VerticalOptions of Type LayoutOptions */
    verticalOptions?: any;
    
    /** Property VerticalScrollBarVisibility of Type ScrollBarVisibility */
    verticalScrollBarVisibility?: any;
    
    /** Property Visual of Type IVisual */
    visual?: any;
    
    /** Property WidthRequest of Type Double */
    widthRequest?: any;
        [key: string]: any;
    }
    /** CarouselView */
    export const CarouselView = XNode.prepare<ICarouselView>("CarouselView|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface ICollectionView {
        
    /** Property AnchorX of Type Double */
    anchorX?: any;
    
    /** Property AnchorY of Type Double */
    anchorY?: any;
    
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BackgroundColor of Type Color */
    backgroundColor?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property class of Type IList`1 */
    class?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property DisableLayout of Type Boolean */
    disableLayout?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property EmptyView of Type Object */
    emptyView?: any;
    
    /** Property EmptyViewTemplate of Type DataTemplate */
    emptyViewTemplate?: any;
    
    /** Property FlowDirection of Type FlowDirection */
    flowDirection?: any;
    
    /** Property Footer of Type Object */
    footer?: any;
    
    /** Property FooterTemplate of Type DataTemplate */
    footerTemplate?: any;
    
    /** Property GroupFooterTemplate of Type DataTemplate */
    groupFooterTemplate?: any;
    
    /** Property GroupHeaderTemplate of Type DataTemplate */
    groupHeaderTemplate?: any;
    
    /** Property Header of Type Object */
    header?: any;
    
    /** Property HeaderTemplate of Type DataTemplate */
    headerTemplate?: any;
    
    /** Property HeightRequest of Type Double */
    heightRequest?: any;
    
    /** Property HorizontalOptions of Type LayoutOptions */
    horizontalOptions?: any;
    
    /** Property HorizontalScrollBarVisibility of Type ScrollBarVisibility */
    horizontalScrollBarVisibility?: any;
    
    /** Property InputTransparent of Type Boolean */
    inputTransparent?: any;
    
    /** Property IsEnabled of Type Boolean */
    isEnabled?: any;
    
    /** Property IsGrouped of Type Boolean */
    isGrouped?: any;
    
    /** Property IsInNativeLayout of Type Boolean */
    isInNativeLayout?: any;
    
    /** Property IsNativeStateConsistent of Type Boolean */
    isNativeStateConsistent?: any;
    
    /** Property IsPlatformEnabled of Type Boolean */
    isPlatformEnabled?: any;
    
    /** Property IsTabStop of Type Boolean */
    isTabStop?: any;
    
    /** Property IsVisible of Type Boolean */
    isVisible?: any;
    
    /** Property ItemSizingStrategy of Type ItemSizingStrategy */
    itemSizingStrategy?: any;
    
    /** Property ItemsLayout of Type IItemsLayout */
    itemsLayout?: any;
    
    /** Property ItemsSource of Type IEnumerable */
    itemsSource?: any;
    
    /** Property ItemsUpdatingScrollMode of Type ItemsUpdatingScrollMode */
    itemsUpdatingScrollMode?: any;
    
    /** Property ItemTemplate of Type DataTemplate */
    itemTemplate?: any;
    
    /** Property Margin of Type Thickness */
    margin?: any;
    
    /** Property MinimumHeightRequest of Type Double */
    minimumHeightRequest?: any;
    
    /** Property MinimumWidthRequest of Type Double */
    minimumWidthRequest?: any;
    
    /** Property Navigation of Type INavigation */
    navigation?: any;
    
    /** Property Opacity of Type Double */
    opacity?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property RemainingItemsThreshold of Type Int32 */
    remainingItemsThreshold?: any;
    
    /** Property RemainingItemsThresholdReachedCommand of Type ICommand */
    remainingItemsThresholdReachedCommand?: any;
    
    /** Property RemainingItemsThresholdReachedCommandParameter of Type Object */
    remainingItemsThresholdReachedCommandParameter?: any;
    
    /** Property Resources of Type ResourceDictionary */
    resources?: any;
    
    /** Property Rotation of Type Double */
    rotation?: any;
    
    /** Property RotationX of Type Double */
    rotationX?: any;
    
    /** Property RotationY of Type Double */
    rotationY?: any;
    
    /** Property Scale of Type Double */
    scale?: any;
    
    /** Property ScaleX of Type Double */
    scaleX?: any;
    
    /** Property ScaleY of Type Double */
    scaleY?: any;
    
    /** Property SelectedItem of Type Object */
    selectedItem?: any;
    
    /** Property SelectedItems of Type IList`1 */
    selectedItems?: any;
    
    /** Property SelectionChangedCommand of Type ICommand */
    selectionChangedCommand?: any;
    
    /** Property SelectionChangedCommandParameter of Type Object */
    selectionChangedCommandParameter?: any;
    
    /** Property SelectionMode of Type SelectionMode */
    selectionMode?: any;
    
    /** Property Style of Type Style */
    style?: any;
    
    /** Property StyleClass of Type IList`1 */
    styleClass?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
    
    /** Property TabIndex of Type Int32 */
    tabIndex?: any;
    
    /** Property TranslationX of Type Double */
    translationX?: any;
    
    /** Property TranslationY of Type Double */
    translationY?: any;
    
    /** Property VerticalOptions of Type LayoutOptions */
    verticalOptions?: any;
    
    /** Property VerticalScrollBarVisibility of Type ScrollBarVisibility */
    verticalScrollBarVisibility?: any;
    
    /** Property Visual of Type IVisual */
    visual?: any;
    
    /** Property WidthRequest of Type Double */
    widthRequest?: any;
        [key: string]: any;
    }
    /** CollectionView */
    export const CollectionView = XNode.prepare<ICollectionView>("CollectionView|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface IGridItemsLayout {
        
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property HorizontalItemSpacing of Type Double */
    horizontalItemSpacing?: any;
    
    /** Property SnapPointsAlignment of Type SnapPointsAlignment */
    snapPointsAlignment?: any;
    
    /** Property SnapPointsType of Type SnapPointsType */
    snapPointsType?: any;
    
    /** Property Span of Type Int32 */
    span?: any;
    
    /** Property VerticalItemSpacing of Type Double */
    verticalItemSpacing?: any;
        [key: string]: any;
    }
    /** GridItemsLayout */
    export const GridItemsLayout = XNode.prepare<IGridItemsLayout>("GridItemsLayout|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface IGroupableItemsView {
        
    /** Property AnchorX of Type Double */
    anchorX?: any;
    
    /** Property AnchorY of Type Double */
    anchorY?: any;
    
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BackgroundColor of Type Color */
    backgroundColor?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property class of Type IList`1 */
    class?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property DisableLayout of Type Boolean */
    disableLayout?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property EmptyView of Type Object */
    emptyView?: any;
    
    /** Property EmptyViewTemplate of Type DataTemplate */
    emptyViewTemplate?: any;
    
    /** Property FlowDirection of Type FlowDirection */
    flowDirection?: any;
    
    /** Property Footer of Type Object */
    footer?: any;
    
    /** Property FooterTemplate of Type DataTemplate */
    footerTemplate?: any;
    
    /** Property GroupFooterTemplate of Type DataTemplate */
    groupFooterTemplate?: any;
    
    /** Property GroupHeaderTemplate of Type DataTemplate */
    groupHeaderTemplate?: any;
    
    /** Property Header of Type Object */
    header?: any;
    
    /** Property HeaderTemplate of Type DataTemplate */
    headerTemplate?: any;
    
    /** Property HeightRequest of Type Double */
    heightRequest?: any;
    
    /** Property HorizontalOptions of Type LayoutOptions */
    horizontalOptions?: any;
    
    /** Property HorizontalScrollBarVisibility of Type ScrollBarVisibility */
    horizontalScrollBarVisibility?: any;
    
    /** Property InputTransparent of Type Boolean */
    inputTransparent?: any;
    
    /** Property IsEnabled of Type Boolean */
    isEnabled?: any;
    
    /** Property IsGrouped of Type Boolean */
    isGrouped?: any;
    
    /** Property IsInNativeLayout of Type Boolean */
    isInNativeLayout?: any;
    
    /** Property IsNativeStateConsistent of Type Boolean */
    isNativeStateConsistent?: any;
    
    /** Property IsPlatformEnabled of Type Boolean */
    isPlatformEnabled?: any;
    
    /** Property IsTabStop of Type Boolean */
    isTabStop?: any;
    
    /** Property IsVisible of Type Boolean */
    isVisible?: any;
    
    /** Property ItemSizingStrategy of Type ItemSizingStrategy */
    itemSizingStrategy?: any;
    
    /** Property ItemsLayout of Type IItemsLayout */
    itemsLayout?: any;
    
    /** Property ItemsSource of Type IEnumerable */
    itemsSource?: any;
    
    /** Property ItemsUpdatingScrollMode of Type ItemsUpdatingScrollMode */
    itemsUpdatingScrollMode?: any;
    
    /** Property ItemTemplate of Type DataTemplate */
    itemTemplate?: any;
    
    /** Property Margin of Type Thickness */
    margin?: any;
    
    /** Property MinimumHeightRequest of Type Double */
    minimumHeightRequest?: any;
    
    /** Property MinimumWidthRequest of Type Double */
    minimumWidthRequest?: any;
    
    /** Property Navigation of Type INavigation */
    navigation?: any;
    
    /** Property Opacity of Type Double */
    opacity?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property RemainingItemsThreshold of Type Int32 */
    remainingItemsThreshold?: any;
    
    /** Property RemainingItemsThresholdReachedCommand of Type ICommand */
    remainingItemsThresholdReachedCommand?: any;
    
    /** Property RemainingItemsThresholdReachedCommandParameter of Type Object */
    remainingItemsThresholdReachedCommandParameter?: any;
    
    /** Property Resources of Type ResourceDictionary */
    resources?: any;
    
    /** Property Rotation of Type Double */
    rotation?: any;
    
    /** Property RotationX of Type Double */
    rotationX?: any;
    
    /** Property RotationY of Type Double */
    rotationY?: any;
    
    /** Property Scale of Type Double */
    scale?: any;
    
    /** Property ScaleX of Type Double */
    scaleX?: any;
    
    /** Property ScaleY of Type Double */
    scaleY?: any;
    
    /** Property SelectedItem of Type Object */
    selectedItem?: any;
    
    /** Property SelectedItems of Type IList`1 */
    selectedItems?: any;
    
    /** Property SelectionChangedCommand of Type ICommand */
    selectionChangedCommand?: any;
    
    /** Property SelectionChangedCommandParameter of Type Object */
    selectionChangedCommandParameter?: any;
    
    /** Property SelectionMode of Type SelectionMode */
    selectionMode?: any;
    
    /** Property Style of Type Style */
    style?: any;
    
    /** Property StyleClass of Type IList`1 */
    styleClass?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
    
    /** Property TabIndex of Type Int32 */
    tabIndex?: any;
    
    /** Property TranslationX of Type Double */
    translationX?: any;
    
    /** Property TranslationY of Type Double */
    translationY?: any;
    
    /** Property VerticalOptions of Type LayoutOptions */
    verticalOptions?: any;
    
    /** Property VerticalScrollBarVisibility of Type ScrollBarVisibility */
    verticalScrollBarVisibility?: any;
    
    /** Property Visual of Type IVisual */
    visual?: any;
    
    /** Property WidthRequest of Type Double */
    widthRequest?: any;
        [key: string]: any;
    }
    /** GroupableItemsView */
    export const GroupableItemsView = XNode.prepare<IGroupableItemsView>("GroupableItemsView|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface IItemsLayout {
        
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property SnapPointsAlignment of Type SnapPointsAlignment */
    snapPointsAlignment?: any;
    
    /** Property SnapPointsType of Type SnapPointsType */
    snapPointsType?: any;
        [key: string]: any;
    }
    /** ItemsLayout */
    export const ItemsLayout = XNode.prepare<IItemsLayout>("ItemsLayout|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface IItemsView {
        
    /** Property AnchorX of Type Double */
    anchorX?: any;
    
    /** Property AnchorY of Type Double */
    anchorY?: any;
    
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BackgroundColor of Type Color */
    backgroundColor?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property class of Type IList`1 */
    class?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property DisableLayout of Type Boolean */
    disableLayout?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property EmptyView of Type Object */
    emptyView?: any;
    
    /** Property EmptyViewTemplate of Type DataTemplate */
    emptyViewTemplate?: any;
    
    /** Property FlowDirection of Type FlowDirection */
    flowDirection?: any;
    
    /** Property HeightRequest of Type Double */
    heightRequest?: any;
    
    /** Property HorizontalOptions of Type LayoutOptions */
    horizontalOptions?: any;
    
    /** Property HorizontalScrollBarVisibility of Type ScrollBarVisibility */
    horizontalScrollBarVisibility?: any;
    
    /** Property InputTransparent of Type Boolean */
    inputTransparent?: any;
    
    /** Property IsEnabled of Type Boolean */
    isEnabled?: any;
    
    /** Property IsInNativeLayout of Type Boolean */
    isInNativeLayout?: any;
    
    /** Property IsNativeStateConsistent of Type Boolean */
    isNativeStateConsistent?: any;
    
    /** Property IsPlatformEnabled of Type Boolean */
    isPlatformEnabled?: any;
    
    /** Property IsTabStop of Type Boolean */
    isTabStop?: any;
    
    /** Property IsVisible of Type Boolean */
    isVisible?: any;
    
    /** Property ItemsSource of Type IEnumerable */
    itemsSource?: any;
    
    /** Property ItemsUpdatingScrollMode of Type ItemsUpdatingScrollMode */
    itemsUpdatingScrollMode?: any;
    
    /** Property ItemTemplate of Type DataTemplate */
    itemTemplate?: any;
    
    /** Property Margin of Type Thickness */
    margin?: any;
    
    /** Property MinimumHeightRequest of Type Double */
    minimumHeightRequest?: any;
    
    /** Property MinimumWidthRequest of Type Double */
    minimumWidthRequest?: any;
    
    /** Property Navigation of Type INavigation */
    navigation?: any;
    
    /** Property Opacity of Type Double */
    opacity?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property RemainingItemsThreshold of Type Int32 */
    remainingItemsThreshold?: any;
    
    /** Property RemainingItemsThresholdReachedCommand of Type ICommand */
    remainingItemsThresholdReachedCommand?: any;
    
    /** Property RemainingItemsThresholdReachedCommandParameter of Type Object */
    remainingItemsThresholdReachedCommandParameter?: any;
    
    /** Property Resources of Type ResourceDictionary */
    resources?: any;
    
    /** Property Rotation of Type Double */
    rotation?: any;
    
    /** Property RotationX of Type Double */
    rotationX?: any;
    
    /** Property RotationY of Type Double */
    rotationY?: any;
    
    /** Property Scale of Type Double */
    scale?: any;
    
    /** Property ScaleX of Type Double */
    scaleX?: any;
    
    /** Property ScaleY of Type Double */
    scaleY?: any;
    
    /** Property Style of Type Style */
    style?: any;
    
    /** Property StyleClass of Type IList`1 */
    styleClass?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
    
    /** Property TabIndex of Type Int32 */
    tabIndex?: any;
    
    /** Property TranslationX of Type Double */
    translationX?: any;
    
    /** Property TranslationY of Type Double */
    translationY?: any;
    
    /** Property VerticalOptions of Type LayoutOptions */
    verticalOptions?: any;
    
    /** Property VerticalScrollBarVisibility of Type ScrollBarVisibility */
    verticalScrollBarVisibility?: any;
    
    /** Property Visual of Type IVisual */
    visual?: any;
    
    /** Property WidthRequest of Type Double */
    widthRequest?: any;
        [key: string]: any;
    }
    /** ItemsView */
    export const ItemsView = XNode.prepare<IItemsView>("ItemsView|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface ILinearItemsLayout {
        
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property ItemSpacing of Type Double */
    itemSpacing?: any;
    
    /** Property SnapPointsAlignment of Type SnapPointsAlignment */
    snapPointsAlignment?: any;
    
    /** Property SnapPointsType of Type SnapPointsType */
    snapPointsType?: any;
        [key: string]: any;
    }
    /** LinearItemsLayout */
    export const LinearItemsLayout = XNode.prepare<ILinearItemsLayout>("LinearItemsLayout|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface ISelectableItemsView {
        
    /** Property AnchorX of Type Double */
    anchorX?: any;
    
    /** Property AnchorY of Type Double */
    anchorY?: any;
    
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BackgroundColor of Type Color */
    backgroundColor?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property class of Type IList`1 */
    class?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property DisableLayout of Type Boolean */
    disableLayout?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property EmptyView of Type Object */
    emptyView?: any;
    
    /** Property EmptyViewTemplate of Type DataTemplate */
    emptyViewTemplate?: any;
    
    /** Property FlowDirection of Type FlowDirection */
    flowDirection?: any;
    
    /** Property Footer of Type Object */
    footer?: any;
    
    /** Property FooterTemplate of Type DataTemplate */
    footerTemplate?: any;
    
    /** Property Header of Type Object */
    header?: any;
    
    /** Property HeaderTemplate of Type DataTemplate */
    headerTemplate?: any;
    
    /** Property HeightRequest of Type Double */
    heightRequest?: any;
    
    /** Property HorizontalOptions of Type LayoutOptions */
    horizontalOptions?: any;
    
    /** Property HorizontalScrollBarVisibility of Type ScrollBarVisibility */
    horizontalScrollBarVisibility?: any;
    
    /** Property InputTransparent of Type Boolean */
    inputTransparent?: any;
    
    /** Property IsEnabled of Type Boolean */
    isEnabled?: any;
    
    /** Property IsInNativeLayout of Type Boolean */
    isInNativeLayout?: any;
    
    /** Property IsNativeStateConsistent of Type Boolean */
    isNativeStateConsistent?: any;
    
    /** Property IsPlatformEnabled of Type Boolean */
    isPlatformEnabled?: any;
    
    /** Property IsTabStop of Type Boolean */
    isTabStop?: any;
    
    /** Property IsVisible of Type Boolean */
    isVisible?: any;
    
    /** Property ItemSizingStrategy of Type ItemSizingStrategy */
    itemSizingStrategy?: any;
    
    /** Property ItemsLayout of Type IItemsLayout */
    itemsLayout?: any;
    
    /** Property ItemsSource of Type IEnumerable */
    itemsSource?: any;
    
    /** Property ItemsUpdatingScrollMode of Type ItemsUpdatingScrollMode */
    itemsUpdatingScrollMode?: any;
    
    /** Property ItemTemplate of Type DataTemplate */
    itemTemplate?: any;
    
    /** Property Margin of Type Thickness */
    margin?: any;
    
    /** Property MinimumHeightRequest of Type Double */
    minimumHeightRequest?: any;
    
    /** Property MinimumWidthRequest of Type Double */
    minimumWidthRequest?: any;
    
    /** Property Navigation of Type INavigation */
    navigation?: any;
    
    /** Property Opacity of Type Double */
    opacity?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property RemainingItemsThreshold of Type Int32 */
    remainingItemsThreshold?: any;
    
    /** Property RemainingItemsThresholdReachedCommand of Type ICommand */
    remainingItemsThresholdReachedCommand?: any;
    
    /** Property RemainingItemsThresholdReachedCommandParameter of Type Object */
    remainingItemsThresholdReachedCommandParameter?: any;
    
    /** Property Resources of Type ResourceDictionary */
    resources?: any;
    
    /** Property Rotation of Type Double */
    rotation?: any;
    
    /** Property RotationX of Type Double */
    rotationX?: any;
    
    /** Property RotationY of Type Double */
    rotationY?: any;
    
    /** Property Scale of Type Double */
    scale?: any;
    
    /** Property ScaleX of Type Double */
    scaleX?: any;
    
    /** Property ScaleY of Type Double */
    scaleY?: any;
    
    /** Property SelectedItem of Type Object */
    selectedItem?: any;
    
    /** Property SelectedItems of Type IList`1 */
    selectedItems?: any;
    
    /** Property SelectionChangedCommand of Type ICommand */
    selectionChangedCommand?: any;
    
    /** Property SelectionChangedCommandParameter of Type Object */
    selectionChangedCommandParameter?: any;
    
    /** Property SelectionMode of Type SelectionMode */
    selectionMode?: any;
    
    /** Property Style of Type Style */
    style?: any;
    
    /** Property StyleClass of Type IList`1 */
    styleClass?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
    
    /** Property TabIndex of Type Int32 */
    tabIndex?: any;
    
    /** Property TranslationX of Type Double */
    translationX?: any;
    
    /** Property TranslationY of Type Double */
    translationY?: any;
    
    /** Property VerticalOptions of Type LayoutOptions */
    verticalOptions?: any;
    
    /** Property VerticalScrollBarVisibility of Type ScrollBarVisibility */
    verticalScrollBarVisibility?: any;
    
    /** Property Visual of Type IVisual */
    visual?: any;
    
    /** Property WidthRequest of Type Double */
    widthRequest?: any;
        [key: string]: any;
    }
    /** SelectableItemsView */
    export const SelectableItemsView = XNode.prepare<ISelectableItemsView>("SelectableItemsView|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface IStructuredItemsView {
        
    /** Property AnchorX of Type Double */
    anchorX?: any;
    
    /** Property AnchorY of Type Double */
    anchorY?: any;
    
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BackgroundColor of Type Color */
    backgroundColor?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property class of Type IList`1 */
    class?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property DisableLayout of Type Boolean */
    disableLayout?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property EmptyView of Type Object */
    emptyView?: any;
    
    /** Property EmptyViewTemplate of Type DataTemplate */
    emptyViewTemplate?: any;
    
    /** Property FlowDirection of Type FlowDirection */
    flowDirection?: any;
    
    /** Property Footer of Type Object */
    footer?: any;
    
    /** Property FooterTemplate of Type DataTemplate */
    footerTemplate?: any;
    
    /** Property Header of Type Object */
    header?: any;
    
    /** Property HeaderTemplate of Type DataTemplate */
    headerTemplate?: any;
    
    /** Property HeightRequest of Type Double */
    heightRequest?: any;
    
    /** Property HorizontalOptions of Type LayoutOptions */
    horizontalOptions?: any;
    
    /** Property HorizontalScrollBarVisibility of Type ScrollBarVisibility */
    horizontalScrollBarVisibility?: any;
    
    /** Property InputTransparent of Type Boolean */
    inputTransparent?: any;
    
    /** Property IsEnabled of Type Boolean */
    isEnabled?: any;
    
    /** Property IsInNativeLayout of Type Boolean */
    isInNativeLayout?: any;
    
    /** Property IsNativeStateConsistent of Type Boolean */
    isNativeStateConsistent?: any;
    
    /** Property IsPlatformEnabled of Type Boolean */
    isPlatformEnabled?: any;
    
    /** Property IsTabStop of Type Boolean */
    isTabStop?: any;
    
    /** Property IsVisible of Type Boolean */
    isVisible?: any;
    
    /** Property ItemSizingStrategy of Type ItemSizingStrategy */
    itemSizingStrategy?: any;
    
    /** Property ItemsLayout of Type IItemsLayout */
    itemsLayout?: any;
    
    /** Property ItemsSource of Type IEnumerable */
    itemsSource?: any;
    
    /** Property ItemsUpdatingScrollMode of Type ItemsUpdatingScrollMode */
    itemsUpdatingScrollMode?: any;
    
    /** Property ItemTemplate of Type DataTemplate */
    itemTemplate?: any;
    
    /** Property Margin of Type Thickness */
    margin?: any;
    
    /** Property MinimumHeightRequest of Type Double */
    minimumHeightRequest?: any;
    
    /** Property MinimumWidthRequest of Type Double */
    minimumWidthRequest?: any;
    
    /** Property Navigation of Type INavigation */
    navigation?: any;
    
    /** Property Opacity of Type Double */
    opacity?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property RemainingItemsThreshold of Type Int32 */
    remainingItemsThreshold?: any;
    
    /** Property RemainingItemsThresholdReachedCommand of Type ICommand */
    remainingItemsThresholdReachedCommand?: any;
    
    /** Property RemainingItemsThresholdReachedCommandParameter of Type Object */
    remainingItemsThresholdReachedCommandParameter?: any;
    
    /** Property Resources of Type ResourceDictionary */
    resources?: any;
    
    /** Property Rotation of Type Double */
    rotation?: any;
    
    /** Property RotationX of Type Double */
    rotationX?: any;
    
    /** Property RotationY of Type Double */
    rotationY?: any;
    
    /** Property Scale of Type Double */
    scale?: any;
    
    /** Property ScaleX of Type Double */
    scaleX?: any;
    
    /** Property ScaleY of Type Double */
    scaleY?: any;
    
    /** Property Style of Type Style */
    style?: any;
    
    /** Property StyleClass of Type IList`1 */
    styleClass?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
    
    /** Property TabIndex of Type Int32 */
    tabIndex?: any;
    
    /** Property TranslationX of Type Double */
    translationX?: any;
    
    /** Property TranslationY of Type Double */
    translationY?: any;
    
    /** Property VerticalOptions of Type LayoutOptions */
    verticalOptions?: any;
    
    /** Property VerticalScrollBarVisibility of Type ScrollBarVisibility */
    verticalScrollBarVisibility?: any;
    
    /** Property Visual of Type IVisual */
    visual?: any;
    
    /** Property WidthRequest of Type Double */
    widthRequest?: any;
        [key: string]: any;
    }
    /** StructuredItemsView */
    export const StructuredItemsView = XNode.prepare<IStructuredItemsView>("StructuredItemsView|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface ILabel {
        
    /** Property AnchorX of Type Double */
    anchorX?: any;
    
    /** Property AnchorY of Type Double */
    anchorY?: any;
    
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BackgroundColor of Type Color */
    backgroundColor?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property CharacterSpacing of Type Double */
    characterSpacing?: any;
    
    /** Property class of Type IList`1 */
    class?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property DisableLayout of Type Boolean */
    disableLayout?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property FlowDirection of Type FlowDirection */
    flowDirection?: any;
    
    /** Property Font of Type Font */
    font?: any;
    
    /** Property FontAttributes of Type FontAttributes */
    fontAttributes?: any;
    
    /** Property FontFamily of Type String */
    fontFamily?: any;
    
    /** Property FontSize of Type Double */
    fontSize?: any;
    
    /** Property FormattedText of Type FormattedString */
    formattedText?: any;
    
    /** Property HeightRequest of Type Double */
    heightRequest?: any;
    
    /** Property HorizontalOptions of Type LayoutOptions */
    horizontalOptions?: any;
    
    /** Property HorizontalTextAlignment of Type TextAlignment */
    horizontalTextAlignment?: any;
    
    /** Property InputTransparent of Type Boolean */
    inputTransparent?: any;
    
    /** Property IsEnabled of Type Boolean */
    isEnabled?: any;
    
    /** Property IsInNativeLayout of Type Boolean */
    isInNativeLayout?: any;
    
    /** Property IsNativeStateConsistent of Type Boolean */
    isNativeStateConsistent?: any;
    
    /** Property IsPlatformEnabled of Type Boolean */
    isPlatformEnabled?: any;
    
    /** Property IsTabStop of Type Boolean */
    isTabStop?: any;
    
    /** Property IsVisible of Type Boolean */
    isVisible?: any;
    
    /** Property LineBreakMode of Type LineBreakMode */
    lineBreakMode?: any;
    
    /** Property LineHeight of Type Double */
    lineHeight?: any;
    
    /** Property Margin of Type Thickness */
    margin?: any;
    
    /** Property MaxLines of Type Int32 */
    maxLines?: any;
    
    /** Property MinimumHeightRequest of Type Double */
    minimumHeightRequest?: any;
    
    /** Property MinimumWidthRequest of Type Double */
    minimumWidthRequest?: any;
    
    /** Property Navigation of Type INavigation */
    navigation?: any;
    
    /** Property Opacity of Type Double */
    opacity?: any;
    
    /** Property Padding of Type Thickness */
    padding?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property Resources of Type ResourceDictionary */
    resources?: any;
    
    /** Property Rotation of Type Double */
    rotation?: any;
    
    /** Property RotationX of Type Double */
    rotationX?: any;
    
    /** Property RotationY of Type Double */
    rotationY?: any;
    
    /** Property Scale of Type Double */
    scale?: any;
    
    /** Property ScaleX of Type Double */
    scaleX?: any;
    
    /** Property ScaleY of Type Double */
    scaleY?: any;
    
    /** Property Style of Type Style */
    style?: any;
    
    /** Property StyleClass of Type IList`1 */
    styleClass?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
    
    /** Property TabIndex of Type Int32 */
    tabIndex?: any;
    
    /** Property Text of Type String */
    text?: any;
    
    /** Property TextColor of Type Color */
    textColor?: any;
    
    /** Property TextDecorations of Type TextDecorations */
    textDecorations?: any;
    
    /** Property TextType of Type TextType */
    textType?: any;
    
    /** Property TranslationX of Type Double */
    translationX?: any;
    
    /** Property TranslationY of Type Double */
    translationY?: any;
    
    /** Property VerticalOptions of Type LayoutOptions */
    verticalOptions?: any;
    
    /** Property VerticalTextAlignment of Type TextAlignment */
    verticalTextAlignment?: any;
    
    /** Property Visual of Type IVisual */
    visual?: any;
    
    /** Property WidthRequest of Type Double */
    widthRequest?: any;
    
    /** Property XAlign of Type TextAlignment */
    xAlign?: any;
    
    /** Property YAlign of Type TextAlignment */
    yAlign?: any;
        [key: string]: any;
    }
    /** Label */
    export const Label = XNode.prepare<ILabel>("Label|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface ILayout {
        
    /** Property AnchorX of Type Double */
    anchorX?: any;
    
    /** Property AnchorY of Type Double */
    anchorY?: any;
    
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BackgroundColor of Type Color */
    backgroundColor?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property CascadeInputTransparent of Type Boolean */
    cascadeInputTransparent?: any;
    
    /** Property class of Type IList`1 */
    class?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property DisableLayout of Type Boolean */
    disableLayout?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property FlowDirection of Type FlowDirection */
    flowDirection?: any;
    
    /** Property HeightRequest of Type Double */
    heightRequest?: any;
    
    /** Property HorizontalOptions of Type LayoutOptions */
    horizontalOptions?: any;
    
    /** Property InputTransparent of Type Boolean */
    inputTransparent?: any;
    
    /** Property IsClippedToBounds of Type Boolean */
    isClippedToBounds?: any;
    
    /** Property IsEnabled of Type Boolean */
    isEnabled?: any;
    
    /** Property IsInNativeLayout of Type Boolean */
    isInNativeLayout?: any;
    
    /** Property IsNativeStateConsistent of Type Boolean */
    isNativeStateConsistent?: any;
    
    /** Property IsPlatformEnabled of Type Boolean */
    isPlatformEnabled?: any;
    
    /** Property IsTabStop of Type Boolean */
    isTabStop?: any;
    
    /** Property IsVisible of Type Boolean */
    isVisible?: any;
    
    /** Property Margin of Type Thickness */
    margin?: any;
    
    /** Property MinimumHeightRequest of Type Double */
    minimumHeightRequest?: any;
    
    /** Property MinimumWidthRequest of Type Double */
    minimumWidthRequest?: any;
    
    /** Property Navigation of Type INavigation */
    navigation?: any;
    
    /** Property Opacity of Type Double */
    opacity?: any;
    
    /** Property Padding of Type Thickness */
    padding?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property Resources of Type ResourceDictionary */
    resources?: any;
    
    /** Property Rotation of Type Double */
    rotation?: any;
    
    /** Property RotationX of Type Double */
    rotationX?: any;
    
    /** Property RotationY of Type Double */
    rotationY?: any;
    
    /** Property Scale of Type Double */
    scale?: any;
    
    /** Property ScaleX of Type Double */
    scaleX?: any;
    
    /** Property ScaleY of Type Double */
    scaleY?: any;
    
    /** Property Style of Type Style */
    style?: any;
    
    /** Property StyleClass of Type IList`1 */
    styleClass?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
    
    /** Property TabIndex of Type Int32 */
    tabIndex?: any;
    
    /** Property TranslationX of Type Double */
    translationX?: any;
    
    /** Property TranslationY of Type Double */
    translationY?: any;
    
    /** Property VerticalOptions of Type LayoutOptions */
    verticalOptions?: any;
    
    /** Property Visual of Type IVisual */
    visual?: any;
    
    /** Property WidthRequest of Type Double */
    widthRequest?: any;
        [key: string]: any;
    }
    /** Layout */
    export const Layout = XNode.prepare<ILayout>("Layout|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface IListView {
        
    /** Property AnchorX of Type Double */
    anchorX?: any;
    
    /** Property AnchorY of Type Double */
    anchorY?: any;
    
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BackgroundColor of Type Color */
    backgroundColor?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property CachingStrategy of Type ListViewCachingStrategy */
    cachingStrategy?: any;
    
    /** Property class of Type IList`1 */
    class?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property DisableLayout of Type Boolean */
    disableLayout?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property FlowDirection of Type FlowDirection */
    flowDirection?: any;
    
    /** Property Footer of Type Object */
    footer?: any;
    
    /** Property FooterTemplate of Type DataTemplate */
    footerTemplate?: any;
    
    /** Property GroupDisplayBinding of Type BindingBase */
    groupDisplayBinding?: any;
    
    /** Property GroupHeaderTemplate of Type DataTemplate */
    groupHeaderTemplate?: any;
    
    /** Property GroupShortNameBinding of Type BindingBase */
    groupShortNameBinding?: any;
    
    /** Property HasUnevenRows of Type Boolean */
    hasUnevenRows?: any;
    
    /** Property Header of Type Object */
    header?: any;
    
    /** Property HeaderTemplate of Type DataTemplate */
    headerTemplate?: any;
    
    /** Property HeightRequest of Type Double */
    heightRequest?: any;
    
    /** Property HorizontalOptions of Type LayoutOptions */
    horizontalOptions?: any;
    
    /** Property HorizontalScrollBarVisibility of Type ScrollBarVisibility */
    horizontalScrollBarVisibility?: any;
    
    /** Property InputTransparent of Type Boolean */
    inputTransparent?: any;
    
    /** Property IsEnabled of Type Boolean */
    isEnabled?: any;
    
    /** Property IsGroupingEnabled of Type Boolean */
    isGroupingEnabled?: any;
    
    /** Property IsInNativeLayout of Type Boolean */
    isInNativeLayout?: any;
    
    /** Property IsNativeStateConsistent of Type Boolean */
    isNativeStateConsistent?: any;
    
    /** Property IsPlatformEnabled of Type Boolean */
    isPlatformEnabled?: any;
    
    /** Property IsPullToRefreshEnabled of Type Boolean */
    isPullToRefreshEnabled?: any;
    
    /** Property IsRefreshing of Type Boolean */
    isRefreshing?: any;
    
    /** Property IsTabStop of Type Boolean */
    isTabStop?: any;
    
    /** Property IsVisible of Type Boolean */
    isVisible?: any;
    
    /** Property ItemsSource of Type IEnumerable */
    itemsSource?: any;
    
    /** Property ItemTemplate of Type DataTemplate */
    itemTemplate?: any;
    
    /** Property Margin of Type Thickness */
    margin?: any;
    
    /** Property MinimumHeightRequest of Type Double */
    minimumHeightRequest?: any;
    
    /** Property MinimumWidthRequest of Type Double */
    minimumWidthRequest?: any;
    
    /** Property Navigation of Type INavigation */
    navigation?: any;
    
    /** Property Opacity of Type Double */
    opacity?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property RefreshAllowed of Type Boolean */
    refreshAllowed?: any;
    
    /** Property RefreshCommand of Type ICommand */
    refreshCommand?: any;
    
    /** Property RefreshControlColor of Type Color */
    refreshControlColor?: any;
    
    /** Property Resources of Type ResourceDictionary */
    resources?: any;
    
    /** Property Rotation of Type Double */
    rotation?: any;
    
    /** Property RotationX of Type Double */
    rotationX?: any;
    
    /** Property RotationY of Type Double */
    rotationY?: any;
    
    /** Property RowHeight of Type Int32 */
    rowHeight?: any;
    
    /** Property Scale of Type Double */
    scale?: any;
    
    /** Property ScaleX of Type Double */
    scaleX?: any;
    
    /** Property ScaleY of Type Double */
    scaleY?: any;
    
    /** Property SelectedItem of Type Object */
    selectedItem?: any;
    
    /** Property SelectionMode of Type ListViewSelectionMode */
    selectionMode?: any;
    
    /** Property SeparatorColor of Type Color */
    separatorColor?: any;
    
    /** Property SeparatorVisibility of Type SeparatorVisibility */
    separatorVisibility?: any;
    
    /** Property Style of Type Style */
    style?: any;
    
    /** Property StyleClass of Type IList`1 */
    styleClass?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
    
    /** Property TabIndex of Type Int32 */
    tabIndex?: any;
    
    /** Property TranslationX of Type Double */
    translationX?: any;
    
    /** Property TranslationY of Type Double */
    translationY?: any;
    
    /** Property VerticalOptions of Type LayoutOptions */
    verticalOptions?: any;
    
    /** Property VerticalScrollBarVisibility of Type ScrollBarVisibility */
    verticalScrollBarVisibility?: any;
    
    /** Property Visual of Type IVisual */
    visual?: any;
    
    /** Property WidthRequest of Type Double */
    widthRequest?: any;
        [key: string]: any;
    }
    /** ListView */
    export const ListView = XNode.prepare<IListView>("ListView|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface IMasterDetailPage {
        
    /** Property AnchorX of Type Double */
    anchorX?: any;
    
    /** Property AnchorY of Type Double */
    anchorY?: any;
    
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BackgroundColor of Type Color */
    backgroundColor?: any;
    
    /** Property BackgroundImage of Type String */
    backgroundImage?: any;
    
    /** Property BackgroundImageSource of Type ImageSource */
    backgroundImageSource?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property CanChangeIsPresented of Type Boolean */
    canChangeIsPresented?: any;
    
    /** Property class of Type IList`1 */
    class?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property ContainerArea of Type Rectangle */
    containerArea?: any;
    
    /** Property Detail of Type Page */
    detail?: any;
    
    /** Property DetailBounds of Type Rectangle */
    detailBounds?: any;
    
    /** Property DisableLayout of Type Boolean */
    disableLayout?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property FlowDirection of Type FlowDirection */
    flowDirection?: any;
    
    /** Property HeightRequest of Type Double */
    heightRequest?: any;
    
    /** Property Icon of Type FileImageSource */
    icon?: any;
    
    /** Property IconImageSource of Type ImageSource */
    iconImageSource?: any;
    
    /** Property IgnoresContainerArea of Type Boolean */
    ignoresContainerArea?: any;
    
    /** Property InputTransparent of Type Boolean */
    inputTransparent?: any;
    
    /** Property IsBusy of Type Boolean */
    isBusy?: any;
    
    /** Property IsEnabled of Type Boolean */
    isEnabled?: any;
    
    /** Property IsGestureEnabled of Type Boolean */
    isGestureEnabled?: any;
    
    /** Property IsInNativeLayout of Type Boolean */
    isInNativeLayout?: any;
    
    /** Property IsNativeStateConsistent of Type Boolean */
    isNativeStateConsistent?: any;
    
    /** Property IsPlatformEnabled of Type Boolean */
    isPlatformEnabled?: any;
    
    /** Property IsPresented of Type Boolean */
    isPresented?: any;
    
    /** Property IsTabStop of Type Boolean */
    isTabStop?: any;
    
    /** Property IsVisible of Type Boolean */
    isVisible?: any;
    
    /** Property Master of Type Page */
    master?: any;
    
    /** Property MasterBehavior of Type MasterBehavior */
    masterBehavior?: any;
    
    /** Property MasterBounds of Type Rectangle */
    masterBounds?: any;
    
    /** Property MinimumHeightRequest of Type Double */
    minimumHeightRequest?: any;
    
    /** Property MinimumWidthRequest of Type Double */
    minimumWidthRequest?: any;
    
    /** Property Navigation of Type INavigation */
    navigation?: any;
    
    /** Property Opacity of Type Double */
    opacity?: any;
    
    /** Property Padding of Type Thickness */
    padding?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property Resources of Type ResourceDictionary */
    resources?: any;
    
    /** Property Rotation of Type Double */
    rotation?: any;
    
    /** Property RotationX of Type Double */
    rotationX?: any;
    
    /** Property RotationY of Type Double */
    rotationY?: any;
    
    /** Property Scale of Type Double */
    scale?: any;
    
    /** Property ScaleX of Type Double */
    scaleX?: any;
    
    /** Property ScaleY of Type Double */
    scaleY?: any;
    
    /** Property Style of Type Style */
    style?: any;
    
    /** Property StyleClass of Type IList`1 */
    styleClass?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
    
    /** Property TabIndex of Type Int32 */
    tabIndex?: any;
    
    /** Property Title of Type String */
    title?: any;
    
    /** Property ToolbarItems of Type IList`1 */
    toolbarItems?: any;
    
    /** Property TranslationX of Type Double */
    translationX?: any;
    
    /** Property TranslationY of Type Double */
    translationY?: any;
    
    /** Property Visual of Type IVisual */
    visual?: any;
    
    /** Property WidthRequest of Type Double */
    widthRequest?: any;
        [key: string]: any;
    }
    /** MasterDetailPage */
    export const MasterDetailPage = XNode.prepare<IMasterDetailPage>("MasterDetailPage|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface IMenu {
        
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property Item of Type Menu */
    item?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
    
    /** Property Text of Type String */
    text?: any;
        [key: string]: any;
    }
    /** Menu */
    export const Menu = XNode.prepare<IMenu>("Menu|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface IMenuItem {
        
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property Command of Type ICommand */
    command?: any;
    
    /** Property CommandParameter of Type Object */
    commandParameter?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property Icon of Type FileImageSource */
    icon?: any;
    
    /** Property IconImageSource of Type ImageSource */
    iconImageSource?: any;
    
    /** Property IsDestructive of Type Boolean */
    isDestructive?: any;
    
    /** Property IsEnabled of Type Boolean */
    isEnabled?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
    
    /** Property Text of Type String */
    text?: any;
        [key: string]: any;
    }
    /** MenuItem */
    export const MenuItem = XNode.prepare<IMenuItem>("MenuItem|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    /** Attached Property MenuItem.Accelerator of Type BindableProperty */
    export function MenuItemAccelerator(v) { return { "MenuItem.Accelerator|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;": v  } }
    
    
    export interface INavigationPage {
        
    /** Property AnchorX of Type Double */
    anchorX?: any;
    
    /** Property AnchorY of Type Double */
    anchorY?: any;
    
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BackgroundColor of Type Color */
    backgroundColor?: any;
    
    /** Property BackgroundImage of Type String */
    backgroundImage?: any;
    
    /** Property BackgroundImageSource of Type ImageSource */
    backgroundImageSource?: any;
    
    /** Property BarBackgroundColor of Type Color */
    barBackgroundColor?: any;
    
    /** Property BarTextColor of Type Color */
    barTextColor?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property class of Type IList`1 */
    class?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property ContainerArea of Type Rectangle */
    containerArea?: any;
    
    /** Property CurrentPage of Type Page */
    currentPage?: any;
    
    /** Property DisableLayout of Type Boolean */
    disableLayout?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property FlowDirection of Type FlowDirection */
    flowDirection?: any;
    
    /** Property HeightRequest of Type Double */
    heightRequest?: any;
    
    /** Property Icon of Type FileImageSource */
    icon?: any;
    
    /** Property IconImageSource of Type ImageSource */
    iconImageSource?: any;
    
    /** Property IgnoresContainerArea of Type Boolean */
    ignoresContainerArea?: any;
    
    /** Property InputTransparent of Type Boolean */
    inputTransparent?: any;
    
    /** Property IsBusy of Type Boolean */
    isBusy?: any;
    
    /** Property IsEnabled of Type Boolean */
    isEnabled?: any;
    
    /** Property IsInNativeLayout of Type Boolean */
    isInNativeLayout?: any;
    
    /** Property IsNativeStateConsistent of Type Boolean */
    isNativeStateConsistent?: any;
    
    /** Property IsPlatformEnabled of Type Boolean */
    isPlatformEnabled?: any;
    
    /** Property IsTabStop of Type Boolean */
    isTabStop?: any;
    
    /** Property IsVisible of Type Boolean */
    isVisible?: any;
    
    /** Property MinimumHeightRequest of Type Double */
    minimumHeightRequest?: any;
    
    /** Property MinimumWidthRequest of Type Double */
    minimumWidthRequest?: any;
    
    /** Property Navigation of Type INavigation */
    navigation?: any;
    
    /** Property Opacity of Type Double */
    opacity?: any;
    
    /** Property Padding of Type Thickness */
    padding?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property Resources of Type ResourceDictionary */
    resources?: any;
    
    /** Property RootPage of Type Page */
    rootPage?: any;
    
    /** Property Rotation of Type Double */
    rotation?: any;
    
    /** Property RotationX of Type Double */
    rotationX?: any;
    
    /** Property RotationY of Type Double */
    rotationY?: any;
    
    /** Property Scale of Type Double */
    scale?: any;
    
    /** Property ScaleX of Type Double */
    scaleX?: any;
    
    /** Property ScaleY of Type Double */
    scaleY?: any;
    
    /** Property Style of Type Style */
    style?: any;
    
    /** Property StyleClass of Type IList`1 */
    styleClass?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
    
    /** Property TabIndex of Type Int32 */
    tabIndex?: any;
    
    /** Property Tint of Type Color */
    tint?: any;
    
    /** Property Title of Type String */
    title?: any;
    
    /** Property ToolbarItems of Type IList`1 */
    toolbarItems?: any;
    
    /** Property TranslationX of Type Double */
    translationX?: any;
    
    /** Property TranslationY of Type Double */
    translationY?: any;
    
    /** Property Visual of Type IVisual */
    visual?: any;
    
    /** Property WidthRequest of Type Double */
    widthRequest?: any;
        [key: string]: any;
    }
    /** NavigationPage */
    export const NavigationPage = XNode.prepare<INavigationPage>("NavigationPage|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    /** Attached Property NavigationPage.BackButtonTitle of Type BindableProperty */
    export function NavigationPageBackButtonTitle(v) { return { "NavigationPage.BackButtonTitle|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;": v  } }
    
    /** Attached Property NavigationPage.HasNavigationBar of Type BindableProperty */
    export function NavigationPageHasNavigationBar(v) { return { "NavigationPage.HasNavigationBar|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;": v  } }
    
    /** Attached Property NavigationPage.HasBackButton of Type BindableProperty */
    export function NavigationPageHasBackButton(v) { return { "NavigationPage.HasBackButton|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;": v  } }
    
    /** Attached Property NavigationPage.TitleIconImageSource of Type BindableProperty */
    export function NavigationPageTitleIconImageSource(v) { return { "NavigationPage.TitleIconImageSource|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;": v  } }
    
    /** Attached Property NavigationPage.TitleIcon of Type BindableProperty */
    export function NavigationPageTitleIcon(v) { return { "NavigationPage.TitleIcon|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;": v  } }
    
    /** Attached Property NavigationPage.TitleView of Type BindableProperty */
    export function NavigationPageTitleView(v) { return { "NavigationPage.TitleView|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;": v  } }
    
    
    export interface IOpenGLView {
        
    /** Property AnchorX of Type Double */
    anchorX?: any;
    
    /** Property AnchorY of Type Double */
    anchorY?: any;
    
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BackgroundColor of Type Color */
    backgroundColor?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property class of Type IList`1 */
    class?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property DisableLayout of Type Boolean */
    disableLayout?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property FlowDirection of Type FlowDirection */
    flowDirection?: any;
    
    /** Property HasRenderLoop of Type Boolean */
    hasRenderLoop?: any;
    
    /** Property HeightRequest of Type Double */
    heightRequest?: any;
    
    /** Property HorizontalOptions of Type LayoutOptions */
    horizontalOptions?: any;
    
    /** Property InputTransparent of Type Boolean */
    inputTransparent?: any;
    
    /** Property IsEnabled of Type Boolean */
    isEnabled?: any;
    
    /** Property IsInNativeLayout of Type Boolean */
    isInNativeLayout?: any;
    
    /** Property IsNativeStateConsistent of Type Boolean */
    isNativeStateConsistent?: any;
    
    /** Property IsPlatformEnabled of Type Boolean */
    isPlatformEnabled?: any;
    
    /** Property IsTabStop of Type Boolean */
    isTabStop?: any;
    
    /** Property IsVisible of Type Boolean */
    isVisible?: any;
    
    /** Property Margin of Type Thickness */
    margin?: any;
    
    /** Property MinimumHeightRequest of Type Double */
    minimumHeightRequest?: any;
    
    /** Property MinimumWidthRequest of Type Double */
    minimumWidthRequest?: any;
    
    /** Property Navigation of Type INavigation */
    navigation?: any;
    
    /** Property OnDisplay of Type Action`1 */
    onDisplay?: any;
    
    /** Property Opacity of Type Double */
    opacity?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property Resources of Type ResourceDictionary */
    resources?: any;
    
    /** Property Rotation of Type Double */
    rotation?: any;
    
    /** Property RotationX of Type Double */
    rotationX?: any;
    
    /** Property RotationY of Type Double */
    rotationY?: any;
    
    /** Property Scale of Type Double */
    scale?: any;
    
    /** Property ScaleX of Type Double */
    scaleX?: any;
    
    /** Property ScaleY of Type Double */
    scaleY?: any;
    
    /** Property Style of Type Style */
    style?: any;
    
    /** Property StyleClass of Type IList`1 */
    styleClass?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
    
    /** Property TabIndex of Type Int32 */
    tabIndex?: any;
    
    /** Property TranslationX of Type Double */
    translationX?: any;
    
    /** Property TranslationY of Type Double */
    translationY?: any;
    
    /** Property VerticalOptions of Type LayoutOptions */
    verticalOptions?: any;
    
    /** Property Visual of Type IVisual */
    visual?: any;
    
    /** Property WidthRequest of Type Double */
    widthRequest?: any;
        [key: string]: any;
    }
    /** OpenGLView */
    export const OpenGLView = XNode.prepare<IOpenGLView>("OpenGLView|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface IPage {
        
    /** Property AnchorX of Type Double */
    anchorX?: any;
    
    /** Property AnchorY of Type Double */
    anchorY?: any;
    
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BackgroundColor of Type Color */
    backgroundColor?: any;
    
    /** Property BackgroundImage of Type String */
    backgroundImage?: any;
    
    /** Property BackgroundImageSource of Type ImageSource */
    backgroundImageSource?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property class of Type IList`1 */
    class?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property ContainerArea of Type Rectangle */
    containerArea?: any;
    
    /** Property DisableLayout of Type Boolean */
    disableLayout?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property FlowDirection of Type FlowDirection */
    flowDirection?: any;
    
    /** Property HeightRequest of Type Double */
    heightRequest?: any;
    
    /** Property Icon of Type FileImageSource */
    icon?: any;
    
    /** Property IconImageSource of Type ImageSource */
    iconImageSource?: any;
    
    /** Property IgnoresContainerArea of Type Boolean */
    ignoresContainerArea?: any;
    
    /** Property InputTransparent of Type Boolean */
    inputTransparent?: any;
    
    /** Property IsBusy of Type Boolean */
    isBusy?: any;
    
    /** Property IsEnabled of Type Boolean */
    isEnabled?: any;
    
    /** Property IsInNativeLayout of Type Boolean */
    isInNativeLayout?: any;
    
    /** Property IsNativeStateConsistent of Type Boolean */
    isNativeStateConsistent?: any;
    
    /** Property IsPlatformEnabled of Type Boolean */
    isPlatformEnabled?: any;
    
    /** Property IsTabStop of Type Boolean */
    isTabStop?: any;
    
    /** Property IsVisible of Type Boolean */
    isVisible?: any;
    
    /** Property MinimumHeightRequest of Type Double */
    minimumHeightRequest?: any;
    
    /** Property MinimumWidthRequest of Type Double */
    minimumWidthRequest?: any;
    
    /** Property Navigation of Type INavigation */
    navigation?: any;
    
    /** Property Opacity of Type Double */
    opacity?: any;
    
    /** Property Padding of Type Thickness */
    padding?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property Resources of Type ResourceDictionary */
    resources?: any;
    
    /** Property Rotation of Type Double */
    rotation?: any;
    
    /** Property RotationX of Type Double */
    rotationX?: any;
    
    /** Property RotationY of Type Double */
    rotationY?: any;
    
    /** Property Scale of Type Double */
    scale?: any;
    
    /** Property ScaleX of Type Double */
    scaleX?: any;
    
    /** Property ScaleY of Type Double */
    scaleY?: any;
    
    /** Property Style of Type Style */
    style?: any;
    
    /** Property StyleClass of Type IList`1 */
    styleClass?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
    
    /** Property TabIndex of Type Int32 */
    tabIndex?: any;
    
    /** Property Title of Type String */
    title?: any;
    
    /** Property ToolbarItems of Type IList`1 */
    toolbarItems?: any;
    
    /** Property TranslationX of Type Double */
    translationX?: any;
    
    /** Property TranslationY of Type Double */
    translationY?: any;
    
    /** Property Visual of Type IVisual */
    visual?: any;
    
    /** Property WidthRequest of Type Double */
    widthRequest?: any;
        [key: string]: any;
    }
    /** Page */
    export const Page = XNode.prepare<IPage>("Page|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface IPanGestureRecognizer {
        
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
    
    /** Property TouchPoints of Type Int32 */
    touchPoints?: any;
        [key: string]: any;
    }
    /** PanGestureRecognizer */
    export const PanGestureRecognizer = XNode.prepare<IPanGestureRecognizer>("PanGestureRecognizer|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface IPicker {
        
    /** Property AnchorX of Type Double */
    anchorX?: any;
    
    /** Property AnchorY of Type Double */
    anchorY?: any;
    
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BackgroundColor of Type Color */
    backgroundColor?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property CharacterSpacing of Type Double */
    characterSpacing?: any;
    
    /** Property class of Type IList`1 */
    class?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property DisableLayout of Type Boolean */
    disableLayout?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property FlowDirection of Type FlowDirection */
    flowDirection?: any;
    
    /** Property FontAttributes of Type FontAttributes */
    fontAttributes?: any;
    
    /** Property FontFamily of Type String */
    fontFamily?: any;
    
    /** Property FontSize of Type Double */
    fontSize?: any;
    
    /** Property HeightRequest of Type Double */
    heightRequest?: any;
    
    /** Property HorizontalOptions of Type LayoutOptions */
    horizontalOptions?: any;
    
    /** Property InputTransparent of Type Boolean */
    inputTransparent?: any;
    
    /** Property IsEnabled of Type Boolean */
    isEnabled?: any;
    
    /** Property IsInNativeLayout of Type Boolean */
    isInNativeLayout?: any;
    
    /** Property IsNativeStateConsistent of Type Boolean */
    isNativeStateConsistent?: any;
    
    /** Property IsPlatformEnabled of Type Boolean */
    isPlatformEnabled?: any;
    
    /** Property IsTabStop of Type Boolean */
    isTabStop?: any;
    
    /** Property IsVisible of Type Boolean */
    isVisible?: any;
    
    /** Property ItemDisplayBinding of Type BindingBase */
    itemDisplayBinding?: any;
    
    /** Property ItemsSource of Type IList */
    itemsSource?: any;
    
    /** Property Margin of Type Thickness */
    margin?: any;
    
    /** Property MinimumHeightRequest of Type Double */
    minimumHeightRequest?: any;
    
    /** Property MinimumWidthRequest of Type Double */
    minimumWidthRequest?: any;
    
    /** Property Navigation of Type INavigation */
    navigation?: any;
    
    /** Property Opacity of Type Double */
    opacity?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property Resources of Type ResourceDictionary */
    resources?: any;
    
    /** Property Rotation of Type Double */
    rotation?: any;
    
    /** Property RotationX of Type Double */
    rotationX?: any;
    
    /** Property RotationY of Type Double */
    rotationY?: any;
    
    /** Property Scale of Type Double */
    scale?: any;
    
    /** Property ScaleX of Type Double */
    scaleX?: any;
    
    /** Property ScaleY of Type Double */
    scaleY?: any;
    
    /** Property SelectedIndex of Type Int32 */
    selectedIndex?: any;
    
    /** Property SelectedItem of Type Object */
    selectedItem?: any;
    
    /** Property Style of Type Style */
    style?: any;
    
    /** Property StyleClass of Type IList`1 */
    styleClass?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
    
    /** Property TabIndex of Type Int32 */
    tabIndex?: any;
    
    /** Property TextColor of Type Color */
    textColor?: any;
    
    /** Property Title of Type String */
    title?: any;
    
    /** Property TitleColor of Type Color */
    titleColor?: any;
    
    /** Property TranslationX of Type Double */
    translationX?: any;
    
    /** Property TranslationY of Type Double */
    translationY?: any;
    
    /** Property VerticalOptions of Type LayoutOptions */
    verticalOptions?: any;
    
    /** Property Visual of Type IVisual */
    visual?: any;
    
    /** Property WidthRequest of Type Double */
    widthRequest?: any;
        [key: string]: any;
    }
    /** Picker */
    export const Picker = XNode.prepare<IPicker>("Picker|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface IPinchGestureRecognizer {
        
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property IsPinching of Type Boolean */
    isPinching?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
        [key: string]: any;
    }
    /** PinchGestureRecognizer */
    export const PinchGestureRecognizer = XNode.prepare<IPinchGestureRecognizer>("PinchGestureRecognizer|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface IProgressBar {
        
    /** Property AnchorX of Type Double */
    anchorX?: any;
    
    /** Property AnchorY of Type Double */
    anchorY?: any;
    
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BackgroundColor of Type Color */
    backgroundColor?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property class of Type IList`1 */
    class?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property DisableLayout of Type Boolean */
    disableLayout?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property FlowDirection of Type FlowDirection */
    flowDirection?: any;
    
    /** Property HeightRequest of Type Double */
    heightRequest?: any;
    
    /** Property HorizontalOptions of Type LayoutOptions */
    horizontalOptions?: any;
    
    /** Property InputTransparent of Type Boolean */
    inputTransparent?: any;
    
    /** Property IsEnabled of Type Boolean */
    isEnabled?: any;
    
    /** Property IsInNativeLayout of Type Boolean */
    isInNativeLayout?: any;
    
    /** Property IsNativeStateConsistent of Type Boolean */
    isNativeStateConsistent?: any;
    
    /** Property IsPlatformEnabled of Type Boolean */
    isPlatformEnabled?: any;
    
    /** Property IsTabStop of Type Boolean */
    isTabStop?: any;
    
    /** Property IsVisible of Type Boolean */
    isVisible?: any;
    
    /** Property Margin of Type Thickness */
    margin?: any;
    
    /** Property MinimumHeightRequest of Type Double */
    minimumHeightRequest?: any;
    
    /** Property MinimumWidthRequest of Type Double */
    minimumWidthRequest?: any;
    
    /** Property Navigation of Type INavigation */
    navigation?: any;
    
    /** Property Opacity of Type Double */
    opacity?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property Progress of Type Double */
    progress?: any;
    
    /** Property ProgressColor of Type Color */
    progressColor?: any;
    
    /** Property Resources of Type ResourceDictionary */
    resources?: any;
    
    /** Property Rotation of Type Double */
    rotation?: any;
    
    /** Property RotationX of Type Double */
    rotationX?: any;
    
    /** Property RotationY of Type Double */
    rotationY?: any;
    
    /** Property Scale of Type Double */
    scale?: any;
    
    /** Property ScaleX of Type Double */
    scaleX?: any;
    
    /** Property ScaleY of Type Double */
    scaleY?: any;
    
    /** Property Style of Type Style */
    style?: any;
    
    /** Property StyleClass of Type IList`1 */
    styleClass?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
    
    /** Property TabIndex of Type Int32 */
    tabIndex?: any;
    
    /** Property TranslationX of Type Double */
    translationX?: any;
    
    /** Property TranslationY of Type Double */
    translationY?: any;
    
    /** Property VerticalOptions of Type LayoutOptions */
    verticalOptions?: any;
    
    /** Property Visual of Type IVisual */
    visual?: any;
    
    /** Property WidthRequest of Type Double */
    widthRequest?: any;
        [key: string]: any;
    }
    /** ProgressBar */
    export const ProgressBar = XNode.prepare<IProgressBar>("ProgressBar|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface IRefreshView {
        
    /** Property AnchorX of Type Double */
    anchorX?: any;
    
    /** Property AnchorY of Type Double */
    anchorY?: any;
    
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BackgroundColor of Type Color */
    backgroundColor?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property CascadeInputTransparent of Type Boolean */
    cascadeInputTransparent?: any;
    
    /** Property class of Type IList`1 */
    class?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property Command of Type ICommand */
    command?: any;
    
    /** Property CommandParameter of Type Object */
    commandParameter?: any;
    
    /** Property Content of Type View */
    content?: any;
    
    /** Property ControlTemplate of Type ControlTemplate */
    controlTemplate?: any;
    
    /** Property DisableLayout of Type Boolean */
    disableLayout?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property FlowDirection of Type FlowDirection */
    flowDirection?: any;
    
    /** Property HeightRequest of Type Double */
    heightRequest?: any;
    
    /** Property HorizontalOptions of Type LayoutOptions */
    horizontalOptions?: any;
    
    /** Property InputTransparent of Type Boolean */
    inputTransparent?: any;
    
    /** Property IsClippedToBounds of Type Boolean */
    isClippedToBounds?: any;
    
    /** Property IsEnabled of Type Boolean */
    isEnabled?: any;
    
    /** Property IsInNativeLayout of Type Boolean */
    isInNativeLayout?: any;
    
    /** Property IsNativeStateConsistent of Type Boolean */
    isNativeStateConsistent?: any;
    
    /** Property IsPlatformEnabled of Type Boolean */
    isPlatformEnabled?: any;
    
    /** Property IsRefreshing of Type Boolean */
    isRefreshing?: any;
    
    /** Property IsTabStop of Type Boolean */
    isTabStop?: any;
    
    /** Property IsVisible of Type Boolean */
    isVisible?: any;
    
    /** Property Margin of Type Thickness */
    margin?: any;
    
    /** Property MinimumHeightRequest of Type Double */
    minimumHeightRequest?: any;
    
    /** Property MinimumWidthRequest of Type Double */
    minimumWidthRequest?: any;
    
    /** Property Navigation of Type INavigation */
    navigation?: any;
    
    /** Property Opacity of Type Double */
    opacity?: any;
    
    /** Property Padding of Type Thickness */
    padding?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property RefreshColor of Type Color */
    refreshColor?: any;
    
    /** Property Resources of Type ResourceDictionary */
    resources?: any;
    
    /** Property Rotation of Type Double */
    rotation?: any;
    
    /** Property RotationX of Type Double */
    rotationX?: any;
    
    /** Property RotationY of Type Double */
    rotationY?: any;
    
    /** Property Scale of Type Double */
    scale?: any;
    
    /** Property ScaleX of Type Double */
    scaleX?: any;
    
    /** Property ScaleY of Type Double */
    scaleY?: any;
    
    /** Property Style of Type Style */
    style?: any;
    
    /** Property StyleClass of Type IList`1 */
    styleClass?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
    
    /** Property TabIndex of Type Int32 */
    tabIndex?: any;
    
    /** Property TranslationX of Type Double */
    translationX?: any;
    
    /** Property TranslationY of Type Double */
    translationY?: any;
    
    /** Property VerticalOptions of Type LayoutOptions */
    verticalOptions?: any;
    
    /** Property Visual of Type IVisual */
    visual?: any;
    
    /** Property WidthRequest of Type Double */
    widthRequest?: any;
        [key: string]: any;
    }
    /** RefreshView */
    export const RefreshView = XNode.prepare<IRefreshView>("RefreshView|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface IRelativeLayout {
        
    /** Property AnchorX of Type Double */
    anchorX?: any;
    
    /** Property AnchorY of Type Double */
    anchorY?: any;
    
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BackgroundColor of Type Color */
    backgroundColor?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property CascadeInputTransparent of Type Boolean */
    cascadeInputTransparent?: any;
    
    /** Property class of Type IList`1 */
    class?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property DisableLayout of Type Boolean */
    disableLayout?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property FlowDirection of Type FlowDirection */
    flowDirection?: any;
    
    /** Property HeightRequest of Type Double */
    heightRequest?: any;
    
    /** Property HorizontalOptions of Type LayoutOptions */
    horizontalOptions?: any;
    
    /** Property InputTransparent of Type Boolean */
    inputTransparent?: any;
    
    /** Property IsClippedToBounds of Type Boolean */
    isClippedToBounds?: any;
    
    /** Property IsEnabled of Type Boolean */
    isEnabled?: any;
    
    /** Property IsInNativeLayout of Type Boolean */
    isInNativeLayout?: any;
    
    /** Property IsNativeStateConsistent of Type Boolean */
    isNativeStateConsistent?: any;
    
    /** Property IsPlatformEnabled of Type Boolean */
    isPlatformEnabled?: any;
    
    /** Property IsTabStop of Type Boolean */
    isTabStop?: any;
    
    /** Property IsVisible of Type Boolean */
    isVisible?: any;
    
    /** Property Margin of Type Thickness */
    margin?: any;
    
    /** Property MinimumHeightRequest of Type Double */
    minimumHeightRequest?: any;
    
    /** Property MinimumWidthRequest of Type Double */
    minimumWidthRequest?: any;
    
    /** Property Navigation of Type INavigation */
    navigation?: any;
    
    /** Property Opacity of Type Double */
    opacity?: any;
    
    /** Property Padding of Type Thickness */
    padding?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property Resources of Type ResourceDictionary */
    resources?: any;
    
    /** Property Rotation of Type Double */
    rotation?: any;
    
    /** Property RotationX of Type Double */
    rotationX?: any;
    
    /** Property RotationY of Type Double */
    rotationY?: any;
    
    /** Property Scale of Type Double */
    scale?: any;
    
    /** Property ScaleX of Type Double */
    scaleX?: any;
    
    /** Property ScaleY of Type Double */
    scaleY?: any;
    
    /** Property Style of Type Style */
    style?: any;
    
    /** Property StyleClass of Type IList`1 */
    styleClass?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
    
    /** Property TabIndex of Type Int32 */
    tabIndex?: any;
    
    /** Property TranslationX of Type Double */
    translationX?: any;
    
    /** Property TranslationY of Type Double */
    translationY?: any;
    
    /** Property VerticalOptions of Type LayoutOptions */
    verticalOptions?: any;
    
    /** Property Visual of Type IVisual */
    visual?: any;
    
    /** Property WidthRequest of Type Double */
    widthRequest?: any;
        [key: string]: any;
    }
    /** RelativeLayout */
    export const RelativeLayout = XNode.prepare<IRelativeLayout>("RelativeLayout|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    /** Attached Property RelativeLayout.XConstraint of Type BindableProperty */
    export function RelativeLayoutXConstraint(v) { return { "RelativeLayout.XConstraint|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;": v  } }
    
    /** Attached Property RelativeLayout.YConstraint of Type BindableProperty */
    export function RelativeLayoutYConstraint(v) { return { "RelativeLayout.YConstraint|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;": v  } }
    
    /** Attached Property RelativeLayout.WidthConstraint of Type BindableProperty */
    export function RelativeLayoutWidthConstraint(v) { return { "RelativeLayout.WidthConstraint|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;": v  } }
    
    /** Attached Property RelativeLayout.HeightConstraint of Type BindableProperty */
    export function RelativeLayoutHeightConstraint(v) { return { "RelativeLayout.HeightConstraint|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;": v  } }
    
    /** Attached Property RelativeLayout.BoundsConstraint of Type BindableProperty */
    export function RelativeLayoutBoundsConstraint(v) { return { "RelativeLayout.BoundsConstraint|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;": v  } }
    
    
    export interface IRowDefinition {
        
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property Height of Type GridLength */
    height?: any;
        [key: string]: any;
    }
    /** RowDefinition */
    export const RowDefinition = XNode.prepare<IRowDefinition>("RowDefinition|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface IScrollView {
        
    /** Property AnchorX of Type Double */
    anchorX?: any;
    
    /** Property AnchorY of Type Double */
    anchorY?: any;
    
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BackgroundColor of Type Color */
    backgroundColor?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property CascadeInputTransparent of Type Boolean */
    cascadeInputTransparent?: any;
    
    /** Property class of Type IList`1 */
    class?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property Content of Type View */
    content?: any;
    
    /** Property ContentSize of Type Size */
    contentSize?: any;
    
    /** Property DisableLayout of Type Boolean */
    disableLayout?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property FlowDirection of Type FlowDirection */
    flowDirection?: any;
    
    /** Property HeightRequest of Type Double */
    heightRequest?: any;
    
    /** Property HorizontalOptions of Type LayoutOptions */
    horizontalOptions?: any;
    
    /** Property HorizontalScrollBarVisibility of Type ScrollBarVisibility */
    horizontalScrollBarVisibility?: any;
    
    /** Property InputTransparent of Type Boolean */
    inputTransparent?: any;
    
    /** Property IsClippedToBounds of Type Boolean */
    isClippedToBounds?: any;
    
    /** Property IsEnabled of Type Boolean */
    isEnabled?: any;
    
    /** Property IsInNativeLayout of Type Boolean */
    isInNativeLayout?: any;
    
    /** Property IsNativeStateConsistent of Type Boolean */
    isNativeStateConsistent?: any;
    
    /** Property IsPlatformEnabled of Type Boolean */
    isPlatformEnabled?: any;
    
    /** Property IsTabStop of Type Boolean */
    isTabStop?: any;
    
    /** Property IsVisible of Type Boolean */
    isVisible?: any;
    
    /** Property LayoutAreaOverride of Type Rectangle */
    layoutAreaOverride?: any;
    
    /** Property Margin of Type Thickness */
    margin?: any;
    
    /** Property MinimumHeightRequest of Type Double */
    minimumHeightRequest?: any;
    
    /** Property MinimumWidthRequest of Type Double */
    minimumWidthRequest?: any;
    
    /** Property Navigation of Type INavigation */
    navigation?: any;
    
    /** Property Opacity of Type Double */
    opacity?: any;
    
    /** Property Orientation of Type ScrollOrientation */
    orientation?: any;
    
    /** Property Padding of Type Thickness */
    padding?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property Resources of Type ResourceDictionary */
    resources?: any;
    
    /** Property Rotation of Type Double */
    rotation?: any;
    
    /** Property RotationX of Type Double */
    rotationX?: any;
    
    /** Property RotationY of Type Double */
    rotationY?: any;
    
    /** Property Scale of Type Double */
    scale?: any;
    
    /** Property ScaleX of Type Double */
    scaleX?: any;
    
    /** Property ScaleY of Type Double */
    scaleY?: any;
    
    /** Property ScrollX of Type Double */
    scrollX?: any;
    
    /** Property ScrollY of Type Double */
    scrollY?: any;
    
    /** Property Style of Type Style */
    style?: any;
    
    /** Property StyleClass of Type IList`1 */
    styleClass?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
    
    /** Property TabIndex of Type Int32 */
    tabIndex?: any;
    
    /** Property TranslationX of Type Double */
    translationX?: any;
    
    /** Property TranslationY of Type Double */
    translationY?: any;
    
    /** Property VerticalOptions of Type LayoutOptions */
    verticalOptions?: any;
    
    /** Property VerticalScrollBarVisibility of Type ScrollBarVisibility */
    verticalScrollBarVisibility?: any;
    
    /** Property Visual of Type IVisual */
    visual?: any;
    
    /** Property WidthRequest of Type Double */
    widthRequest?: any;
        [key: string]: any;
    }
    /** ScrollView */
    export const ScrollView = XNode.prepare<IScrollView>("ScrollView|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface ISearchBar {
        
    /** Property AnchorX of Type Double */
    anchorX?: any;
    
    /** Property AnchorY of Type Double */
    anchorY?: any;
    
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BackgroundColor of Type Color */
    backgroundColor?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property CancelButtonColor of Type Color */
    cancelButtonColor?: any;
    
    /** Property CharacterSpacing of Type Double */
    characterSpacing?: any;
    
    /** Property class of Type IList`1 */
    class?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property DisableLayout of Type Boolean */
    disableLayout?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property FlowDirection of Type FlowDirection */
    flowDirection?: any;
    
    /** Property FontAttributes of Type FontAttributes */
    fontAttributes?: any;
    
    /** Property FontFamily of Type String */
    fontFamily?: any;
    
    /** Property FontSize of Type Double */
    fontSize?: any;
    
    /** Property HeightRequest of Type Double */
    heightRequest?: any;
    
    /** Property HorizontalOptions of Type LayoutOptions */
    horizontalOptions?: any;
    
    /** Property HorizontalTextAlignment of Type TextAlignment */
    horizontalTextAlignment?: any;
    
    /** Property InputTransparent of Type Boolean */
    inputTransparent?: any;
    
    /** Property IsEnabled of Type Boolean */
    isEnabled?: any;
    
    /** Property IsInNativeLayout of Type Boolean */
    isInNativeLayout?: any;
    
    /** Property IsNativeStateConsistent of Type Boolean */
    isNativeStateConsistent?: any;
    
    /** Property IsPlatformEnabled of Type Boolean */
    isPlatformEnabled?: any;
    
    /** Property IsReadOnly of Type Boolean */
    isReadOnly?: any;
    
    /** Property IsSpellCheckEnabled of Type Boolean */
    isSpellCheckEnabled?: any;
    
    /** Property IsTabStop of Type Boolean */
    isTabStop?: any;
    
    /** Property IsVisible of Type Boolean */
    isVisible?: any;
    
    /** Property Keyboard of Type Keyboard */
    keyboard?: any;
    
    /** Property Margin of Type Thickness */
    margin?: any;
    
    /** Property MaxLength of Type Int32 */
    maxLength?: any;
    
    /** Property MinimumHeightRequest of Type Double */
    minimumHeightRequest?: any;
    
    /** Property MinimumWidthRequest of Type Double */
    minimumWidthRequest?: any;
    
    /** Property Navigation of Type INavigation */
    navigation?: any;
    
    /** Property Opacity of Type Double */
    opacity?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Placeholder of Type String */
    placeholder?: any;
    
    /** Property PlaceholderColor of Type Color */
    placeholderColor?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property Resources of Type ResourceDictionary */
    resources?: any;
    
    /** Property Rotation of Type Double */
    rotation?: any;
    
    /** Property RotationX of Type Double */
    rotationX?: any;
    
    /** Property RotationY of Type Double */
    rotationY?: any;
    
    /** Property Scale of Type Double */
    scale?: any;
    
    /** Property ScaleX of Type Double */
    scaleX?: any;
    
    /** Property ScaleY of Type Double */
    scaleY?: any;
    
    /** Property SearchCommand of Type ICommand */
    searchCommand?: any;
    
    /** Property SearchCommandParameter of Type Object */
    searchCommandParameter?: any;
    
    /** Property Style of Type Style */
    style?: any;
    
    /** Property StyleClass of Type IList`1 */
    styleClass?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
    
    /** Property TabIndex of Type Int32 */
    tabIndex?: any;
    
    /** Property Text of Type String */
    text?: any;
    
    /** Property TextColor of Type Color */
    textColor?: any;
    
    /** Property TranslationX of Type Double */
    translationX?: any;
    
    /** Property TranslationY of Type Double */
    translationY?: any;
    
    /** Property VerticalOptions of Type LayoutOptions */
    verticalOptions?: any;
    
    /** Property VerticalTextAlignment of Type TextAlignment */
    verticalTextAlignment?: any;
    
    /** Property Visual of Type IVisual */
    visual?: any;
    
    /** Property WidthRequest of Type Double */
    widthRequest?: any;
        [key: string]: any;
    }
    /** SearchBar */
    export const SearchBar = XNode.prepare<ISearchBar>("SearchBar|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface IBackButtonBehavior {
        
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property Command of Type ICommand */
    command?: any;
    
    /** Property CommandParameter of Type Object */
    commandParameter?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property IconOverride of Type ImageSource */
    iconOverride?: any;
    
    /** Property IsEnabled of Type Boolean */
    isEnabled?: any;
    
    /** Property TextOverride of Type String */
    textOverride?: any;
        [key: string]: any;
    }
    /** BackButtonBehavior */
    export const BackButtonBehavior = XNode.prepare<IBackButtonBehavior>("BackButtonBehavior|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface IBaseShellItem {
        
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property class of Type IList`1 */
    class?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property FlyoutIcon of Type ImageSource */
    flyoutIcon?: any;
    
    /** Property Icon of Type ImageSource */
    icon?: any;
    
    /** Property IsEnabled of Type Boolean */
    isEnabled?: any;
    
    /** Property IsTabStop of Type Boolean */
    isTabStop?: any;
    
    /** Property Navigation of Type INavigation */
    navigation?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property Route of Type String */
    route?: any;
    
    /** Property Style of Type Style */
    style?: any;
    
    /** Property StyleClass of Type IList`1 */
    styleClass?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
    
    /** Property TabIndex of Type Int32 */
    tabIndex?: any;
    
    /** Property Title of Type String */
    title?: any;
        [key: string]: any;
    }
    /** BaseShellItem */
    export const BaseShellItem = XNode.prepare<IBaseShellItem>("BaseShellItem|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface INavigableElement {
        
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property class of Type IList`1 */
    class?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property Navigation of Type INavigation */
    navigation?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property Style of Type Style */
    style?: any;
    
    /** Property StyleClass of Type IList`1 */
    styleClass?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
        [key: string]: any;
    }
    /** NavigableElement */
    export const NavigableElement = XNode.prepare<INavigableElement>("NavigableElement|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface ISearchHandler {
        
    /** Property BackgroundColor of Type Color */
    backgroundColor?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property CancelButtonColor of Type Color */
    cancelButtonColor?: any;
    
    /** Property CharacterSpacing of Type Double */
    characterSpacing?: any;
    
    /** Property ClearIcon of Type ImageSource */
    clearIcon?: any;
    
    /** Property ClearIconHelpText of Type String */
    clearIconHelpText?: any;
    
    /** Property ClearIconName of Type String */
    clearIconName?: any;
    
    /** Property ClearPlaceholderCommand of Type ICommand */
    clearPlaceholderCommand?: any;
    
    /** Property ClearPlaceholderCommandParameter of Type Object */
    clearPlaceholderCommandParameter?: any;
    
    /** Property ClearPlaceholderEnabled of Type Boolean */
    clearPlaceholderEnabled?: any;
    
    /** Property ClearPlaceholderHelpText of Type String */
    clearPlaceholderHelpText?: any;
    
    /** Property ClearPlaceholderIcon of Type ImageSource */
    clearPlaceholderIcon?: any;
    
    /** Property ClearPlaceholderName of Type String */
    clearPlaceholderName?: any;
    
    /** Property Command of Type ICommand */
    command?: any;
    
    /** Property CommandParameter of Type Object */
    commandParameter?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property DisplayMemberName of Type String */
    displayMemberName?: any;
    
    /** Property FontAttributes of Type FontAttributes */
    fontAttributes?: any;
    
    /** Property FontFamily of Type String */
    fontFamily?: any;
    
    /** Property FontSize of Type Double */
    fontSize?: any;
    
    /** Property HorizontalTextAlignment of Type TextAlignment */
    horizontalTextAlignment?: any;
    
    /** Property IsSearchEnabled of Type Boolean */
    isSearchEnabled?: any;
    
    /** Property ItemsSource of Type IEnumerable */
    itemsSource?: any;
    
    /** Property ItemTemplate of Type DataTemplate */
    itemTemplate?: any;
    
    /** Property Keyboard of Type Keyboard */
    keyboard?: any;
    
    /** Property Placeholder of Type String */
    placeholder?: any;
    
    /** Property PlaceholderColor of Type Color */
    placeholderColor?: any;
    
    /** Property Query of Type String */
    query?: any;
    
    /** Property QueryIcon of Type ImageSource */
    queryIcon?: any;
    
    /** Property QueryIconHelpText of Type String */
    queryIconHelpText?: any;
    
    /** Property QueryIconName of Type String */
    queryIconName?: any;
    
    /** Property SearchBoxVisibility of Type SearchBoxVisibility */
    searchBoxVisibility?: any;
    
    /** Property ShowsResults of Type Boolean */
    showsResults?: any;
    
    /** Property TextColor of Type Color */
    textColor?: any;
    
    /** Property VerticalTextAlignment of Type TextAlignment */
    verticalTextAlignment?: any;
        [key: string]: any;
    }
    /** SearchHandler */
    export const SearchHandler = XNode.prepare<ISearchHandler>("SearchHandler|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface IShell {
        
    /** Property AnchorX of Type Double */
    anchorX?: any;
    
    /** Property AnchorY of Type Double */
    anchorY?: any;
    
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BackgroundColor of Type Color */
    backgroundColor?: any;
    
    /** Property BackgroundImage of Type String */
    backgroundImage?: any;
    
    /** Property BackgroundImageSource of Type ImageSource */
    backgroundImageSource?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property class of Type IList`1 */
    class?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property ContainerArea of Type Rectangle */
    containerArea?: any;
    
    /** Property CurrentItem of Type ShellItem */
    currentItem?: any;
    
    /** Property DisableLayout of Type Boolean */
    disableLayout?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property FlowDirection of Type FlowDirection */
    flowDirection?: any;
    
    /** Property FlyoutBackgroundColor of Type Color */
    flyoutBackgroundColor?: any;
    
    /** Property FlyoutBackgroundImage of Type ImageSource */
    flyoutBackgroundImage?: any;
    
    /** Property FlyoutBackgroundImageAspect of Type Aspect */
    flyoutBackgroundImageAspect?: any;
    
    /** Property FlyoutBehavior of Type FlyoutBehavior */
    flyoutBehavior?: any;
    
    /** Property FlyoutHeader of Type Object */
    flyoutHeader?: any;
    
    /** Property FlyoutHeaderBehavior of Type FlyoutHeaderBehavior */
    flyoutHeaderBehavior?: any;
    
    /** Property FlyoutHeaderTemplate of Type DataTemplate */
    flyoutHeaderTemplate?: any;
    
    /** Property FlyoutIcon of Type ImageSource */
    flyoutIcon?: any;
    
    /** Property FlyoutIsPresented of Type Boolean */
    flyoutIsPresented?: any;
    
    /** Property FlyoutVerticalScrollMode of Type ScrollMode */
    flyoutVerticalScrollMode?: any;
    
    /** Property HeightRequest of Type Double */
    heightRequest?: any;
    
    /** Property Icon of Type FileImageSource */
    icon?: any;
    
    /** Property IconImageSource of Type ImageSource */
    iconImageSource?: any;
    
    /** Property IgnoresContainerArea of Type Boolean */
    ignoresContainerArea?: any;
    
    /** Property InputTransparent of Type Boolean */
    inputTransparent?: any;
    
    /** Property IsBusy of Type Boolean */
    isBusy?: any;
    
    /** Property IsEnabled of Type Boolean */
    isEnabled?: any;
    
    /** Property IsInNativeLayout of Type Boolean */
    isInNativeLayout?: any;
    
    /** Property IsNativeStateConsistent of Type Boolean */
    isNativeStateConsistent?: any;
    
    /** Property IsPlatformEnabled of Type Boolean */
    isPlatformEnabled?: any;
    
    /** Property IsTabStop of Type Boolean */
    isTabStop?: any;
    
    /** Property IsVisible of Type Boolean */
    isVisible?: any;
    
    /** Property ItemTemplate of Type DataTemplate */
    itemTemplate?: any;
    
    /** Property MenuItemTemplate of Type DataTemplate */
    menuItemTemplate?: any;
    
    /** Property MinimumHeightRequest of Type Double */
    minimumHeightRequest?: any;
    
    /** Property MinimumWidthRequest of Type Double */
    minimumWidthRequest?: any;
    
    /** Property Navigation of Type INavigation */
    navigation?: any;
    
    /** Property Opacity of Type Double */
    opacity?: any;
    
    /** Property Padding of Type Thickness */
    padding?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property Resources of Type ResourceDictionary */
    resources?: any;
    
    /** Property Rotation of Type Double */
    rotation?: any;
    
    /** Property RotationX of Type Double */
    rotationX?: any;
    
    /** Property RotationY of Type Double */
    rotationY?: any;
    
    /** Property Scale of Type Double */
    scale?: any;
    
    /** Property ScaleX of Type Double */
    scaleX?: any;
    
    /** Property ScaleY of Type Double */
    scaleY?: any;
    
    /** Property Style of Type Style */
    style?: any;
    
    /** Property StyleClass of Type IList`1 */
    styleClass?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
    
    /** Property TabIndex of Type Int32 */
    tabIndex?: any;
    
    /** Property Title of Type String */
    title?: any;
    
    /** Property ToolbarItems of Type IList`1 */
    toolbarItems?: any;
    
    /** Property TranslationX of Type Double */
    translationX?: any;
    
    /** Property TranslationY of Type Double */
    translationY?: any;
    
    /** Property Visual of Type IVisual */
    visual?: any;
    
    /** Property WidthRequest of Type Double */
    widthRequest?: any;
        [key: string]: any;
    }
    /** Shell */
    export const Shell = XNode.prepare<IShell>("Shell|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    /** Attached Property Shell.BackButtonBehavior of Type BindableProperty */
    export function ShellBackButtonBehavior(v) { return { "Shell.BackButtonBehavior|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;": v  } }
    
    /** Attached Property Shell.FlyoutBehavior of Type BindableProperty */
    export function ShellFlyoutBehavior(v) { return { "Shell.FlyoutBehavior|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;": v  } }
    
    /** Attached Property Shell.NavBarIsVisible of Type BindableProperty */
    export function ShellNavBarIsVisible(v) { return { "Shell.NavBarIsVisible|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;": v  } }
    
    /** Attached Property Shell.NavBarHasShadow of Type BindableProperty */
    export function ShellNavBarHasShadow(v) { return { "Shell.NavBarHasShadow|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;": v  } }
    
    /** Attached Property Shell.SearchHandler of Type BindableProperty */
    export function ShellSearchHandler(v) { return { "Shell.SearchHandler|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;": v  } }
    
    /** Attached Property Shell.TabBarIsVisible of Type BindableProperty */
    export function ShellTabBarIsVisible(v) { return { "Shell.TabBarIsVisible|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;": v  } }
    
    /** Attached Property Shell.TitleView of Type BindableProperty */
    export function ShellTitleView(v) { return { "Shell.TitleView|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;": v  } }
    
    /** Attached Property Shell.MenuItemTemplate of Type BindableProperty */
    export function ShellMenuItemTemplate(v) { return { "Shell.MenuItemTemplate|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;": v  } }
    
    /** Attached Property Shell.ItemTemplate of Type BindableProperty */
    export function ShellItemTemplate(v) { return { "Shell.ItemTemplate|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;": v  } }
    
    /** Attached Property Shell.BackgroundColor of Type BindableProperty */
    export function ShellBackgroundColor(v) { return { "Shell.BackgroundColor|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;": v  } }
    
    /** Attached Property Shell.DisabledColor of Type BindableProperty */
    export function ShellDisabledColor(v) { return { "Shell.DisabledColor|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;": v  } }
    
    /** Attached Property Shell.ForegroundColor of Type BindableProperty */
    export function ShellForegroundColor(v) { return { "Shell.ForegroundColor|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;": v  } }
    
    /** Attached Property Shell.TabBarBackgroundColor of Type BindableProperty */
    export function ShellTabBarBackgroundColor(v) { return { "Shell.TabBarBackgroundColor|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;": v  } }
    
    /** Attached Property Shell.TabBarDisabledColor of Type BindableProperty */
    export function ShellTabBarDisabledColor(v) { return { "Shell.TabBarDisabledColor|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;": v  } }
    
    /** Attached Property Shell.TabBarForegroundColor of Type BindableProperty */
    export function ShellTabBarForegroundColor(v) { return { "Shell.TabBarForegroundColor|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;": v  } }
    
    /** Attached Property Shell.TabBarTitleColor of Type BindableProperty */
    export function ShellTabBarTitleColor(v) { return { "Shell.TabBarTitleColor|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;": v  } }
    
    /** Attached Property Shell.TabBarUnselectedColor of Type BindableProperty */
    export function ShellTabBarUnselectedColor(v) { return { "Shell.TabBarUnselectedColor|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;": v  } }
    
    /** Attached Property Shell.TitleColor of Type BindableProperty */
    export function ShellTitleColor(v) { return { "Shell.TitleColor|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;": v  } }
    
    /** Attached Property Shell.UnselectedColor of Type BindableProperty */
    export function ShellUnselectedColor(v) { return { "Shell.UnselectedColor|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;": v  } }
    
    
    export interface IShellContent {
        
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property class of Type IList`1 */
    class?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property Content of Type Object */
    content?: any;
    
    /** Property ContentTemplate of Type DataTemplate */
    contentTemplate?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property FlyoutIcon of Type ImageSource */
    flyoutIcon?: any;
    
    /** Property Icon of Type ImageSource */
    icon?: any;
    
    /** Property IsEnabled of Type Boolean */
    isEnabled?: any;
    
    /** Property IsTabStop of Type Boolean */
    isTabStop?: any;
    
    /** Property Navigation of Type INavigation */
    navigation?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property Route of Type String */
    route?: any;
    
    /** Property Style of Type Style */
    style?: any;
    
    /** Property StyleClass of Type IList`1 */
    styleClass?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
    
    /** Property TabIndex of Type Int32 */
    tabIndex?: any;
    
    /** Property Title of Type String */
    title?: any;
        [key: string]: any;
    }
    /** ShellContent */
    export const ShellContent = XNode.prepare<IShellContent>("ShellContent|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface IShellGroupItem {
        
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property class of Type IList`1 */
    class?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property FlyoutDisplayOptions of Type FlyoutDisplayOptions */
    flyoutDisplayOptions?: any;
    
    /** Property FlyoutIcon of Type ImageSource */
    flyoutIcon?: any;
    
    /** Property Icon of Type ImageSource */
    icon?: any;
    
    /** Property IsEnabled of Type Boolean */
    isEnabled?: any;
    
    /** Property IsTabStop of Type Boolean */
    isTabStop?: any;
    
    /** Property Navigation of Type INavigation */
    navigation?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property Route of Type String */
    route?: any;
    
    /** Property Style of Type Style */
    style?: any;
    
    /** Property StyleClass of Type IList`1 */
    styleClass?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
    
    /** Property TabIndex of Type Int32 */
    tabIndex?: any;
    
    /** Property Title of Type String */
    title?: any;
        [key: string]: any;
    }
    /** ShellGroupItem */
    export const ShellGroupItem = XNode.prepare<IShellGroupItem>("ShellGroupItem|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface IFlyoutItem {
        
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property class of Type IList`1 */
    class?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property CurrentItem of Type ShellSection */
    currentItem?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property FlyoutDisplayOptions of Type FlyoutDisplayOptions */
    flyoutDisplayOptions?: any;
    
    /** Property FlyoutIcon of Type ImageSource */
    flyoutIcon?: any;
    
    /** Property Icon of Type ImageSource */
    icon?: any;
    
    /** Property IsEnabled of Type Boolean */
    isEnabled?: any;
    
    /** Property IsTabStop of Type Boolean */
    isTabStop?: any;
    
    /** Property Navigation of Type INavigation */
    navigation?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property Route of Type String */
    route?: any;
    
    /** Property Style of Type Style */
    style?: any;
    
    /** Property StyleClass of Type IList`1 */
    styleClass?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
    
    /** Property TabIndex of Type Int32 */
    tabIndex?: any;
    
    /** Property Title of Type String */
    title?: any;
        [key: string]: any;
    }
    /** FlyoutItem */
    export const FlyoutItem = XNode.prepare<IFlyoutItem>("FlyoutItem|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface ITabBar {
        
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property class of Type IList`1 */
    class?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property CurrentItem of Type ShellSection */
    currentItem?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property FlyoutDisplayOptions of Type FlyoutDisplayOptions */
    flyoutDisplayOptions?: any;
    
    /** Property FlyoutIcon of Type ImageSource */
    flyoutIcon?: any;
    
    /** Property Icon of Type ImageSource */
    icon?: any;
    
    /** Property IsEnabled of Type Boolean */
    isEnabled?: any;
    
    /** Property IsTabStop of Type Boolean */
    isTabStop?: any;
    
    /** Property Navigation of Type INavigation */
    navigation?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property Route of Type String */
    route?: any;
    
    /** Property Style of Type Style */
    style?: any;
    
    /** Property StyleClass of Type IList`1 */
    styleClass?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
    
    /** Property TabIndex of Type Int32 */
    tabIndex?: any;
    
    /** Property Title of Type String */
    title?: any;
        [key: string]: any;
    }
    /** TabBar */
    export const TabBar = XNode.prepare<ITabBar>("TabBar|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface IShellItem {
        
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property class of Type IList`1 */
    class?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property CurrentItem of Type ShellSection */
    currentItem?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property FlyoutDisplayOptions of Type FlyoutDisplayOptions */
    flyoutDisplayOptions?: any;
    
    /** Property FlyoutIcon of Type ImageSource */
    flyoutIcon?: any;
    
    /** Property Icon of Type ImageSource */
    icon?: any;
    
    /** Property IsEnabled of Type Boolean */
    isEnabled?: any;
    
    /** Property IsTabStop of Type Boolean */
    isTabStop?: any;
    
    /** Property Navigation of Type INavigation */
    navigation?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property Route of Type String */
    route?: any;
    
    /** Property Style of Type Style */
    style?: any;
    
    /** Property StyleClass of Type IList`1 */
    styleClass?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
    
    /** Property TabIndex of Type Int32 */
    tabIndex?: any;
    
    /** Property Title of Type String */
    title?: any;
        [key: string]: any;
    }
    /** ShellItem */
    export const ShellItem = XNode.prepare<IShellItem>("ShellItem|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface ITab {
        
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property class of Type IList`1 */
    class?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property CurrentItem of Type ShellContent */
    currentItem?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property FlyoutDisplayOptions of Type FlyoutDisplayOptions */
    flyoutDisplayOptions?: any;
    
    /** Property FlyoutIcon of Type ImageSource */
    flyoutIcon?: any;
    
    /** Property Icon of Type ImageSource */
    icon?: any;
    
    /** Property IsEnabled of Type Boolean */
    isEnabled?: any;
    
    /** Property IsTabStop of Type Boolean */
    isTabStop?: any;
    
    /** Property Navigation of Type INavigation */
    navigation?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property Route of Type String */
    route?: any;
    
    /** Property Style of Type Style */
    style?: any;
    
    /** Property StyleClass of Type IList`1 */
    styleClass?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
    
    /** Property TabIndex of Type Int32 */
    tabIndex?: any;
    
    /** Property Title of Type String */
    title?: any;
        [key: string]: any;
    }
    /** Tab */
    export const Tab = XNode.prepare<ITab>("Tab|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface IShellSection {
        
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property class of Type IList`1 */
    class?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property CurrentItem of Type ShellContent */
    currentItem?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property FlyoutDisplayOptions of Type FlyoutDisplayOptions */
    flyoutDisplayOptions?: any;
    
    /** Property FlyoutIcon of Type ImageSource */
    flyoutIcon?: any;
    
    /** Property Icon of Type ImageSource */
    icon?: any;
    
    /** Property IsEnabled of Type Boolean */
    isEnabled?: any;
    
    /** Property IsTabStop of Type Boolean */
    isTabStop?: any;
    
    /** Property Navigation of Type INavigation */
    navigation?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property Route of Type String */
    route?: any;
    
    /** Property Style of Type Style */
    style?: any;
    
    /** Property StyleClass of Type IList`1 */
    styleClass?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
    
    /** Property TabIndex of Type Int32 */
    tabIndex?: any;
    
    /** Property Title of Type String */
    title?: any;
        [key: string]: any;
    }
    /** ShellSection */
    export const ShellSection = XNode.prepare<IShellSection>("ShellSection|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface ISlider {
        
    /** Property AnchorX of Type Double */
    anchorX?: any;
    
    /** Property AnchorY of Type Double */
    anchorY?: any;
    
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BackgroundColor of Type Color */
    backgroundColor?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property class of Type IList`1 */
    class?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property DisableLayout of Type Boolean */
    disableLayout?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property DragCompletedCommand of Type ICommand */
    dragCompletedCommand?: any;
    
    /** Property DragStartedCommand of Type ICommand */
    dragStartedCommand?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property FlowDirection of Type FlowDirection */
    flowDirection?: any;
    
    /** Property HeightRequest of Type Double */
    heightRequest?: any;
    
    /** Property HorizontalOptions of Type LayoutOptions */
    horizontalOptions?: any;
    
    /** Property InputTransparent of Type Boolean */
    inputTransparent?: any;
    
    /** Property IsEnabled of Type Boolean */
    isEnabled?: any;
    
    /** Property IsInNativeLayout of Type Boolean */
    isInNativeLayout?: any;
    
    /** Property IsNativeStateConsistent of Type Boolean */
    isNativeStateConsistent?: any;
    
    /** Property IsPlatformEnabled of Type Boolean */
    isPlatformEnabled?: any;
    
    /** Property IsTabStop of Type Boolean */
    isTabStop?: any;
    
    /** Property IsVisible of Type Boolean */
    isVisible?: any;
    
    /** Property Margin of Type Thickness */
    margin?: any;
    
    /** Property Maximum of Type Double */
    maximum?: any;
    
    /** Property MaximumTrackColor of Type Color */
    maximumTrackColor?: any;
    
    /** Property Minimum of Type Double */
    minimum?: any;
    
    /** Property MinimumHeightRequest of Type Double */
    minimumHeightRequest?: any;
    
    /** Property MinimumTrackColor of Type Color */
    minimumTrackColor?: any;
    
    /** Property MinimumWidthRequest of Type Double */
    minimumWidthRequest?: any;
    
    /** Property Navigation of Type INavigation */
    navigation?: any;
    
    /** Property Opacity of Type Double */
    opacity?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property Resources of Type ResourceDictionary */
    resources?: any;
    
    /** Property Rotation of Type Double */
    rotation?: any;
    
    /** Property RotationX of Type Double */
    rotationX?: any;
    
    /** Property RotationY of Type Double */
    rotationY?: any;
    
    /** Property Scale of Type Double */
    scale?: any;
    
    /** Property ScaleX of Type Double */
    scaleX?: any;
    
    /** Property ScaleY of Type Double */
    scaleY?: any;
    
    /** Property Style of Type Style */
    style?: any;
    
    /** Property StyleClass of Type IList`1 */
    styleClass?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
    
    /** Property TabIndex of Type Int32 */
    tabIndex?: any;
    
    /** Property ThumbColor of Type Color */
    thumbColor?: any;
    
    /** Property ThumbImage of Type FileImageSource */
    thumbImage?: any;
    
    /** Property ThumbImageSource of Type ImageSource */
    thumbImageSource?: any;
    
    /** Property TranslationX of Type Double */
    translationX?: any;
    
    /** Property TranslationY of Type Double */
    translationY?: any;
    
    /** Property Value of Type Double */
    value?: any;
    
    /** Property VerticalOptions of Type LayoutOptions */
    verticalOptions?: any;
    
    /** Property Visual of Type IVisual */
    visual?: any;
    
    /** Property WidthRequest of Type Double */
    widthRequest?: any;
        [key: string]: any;
    }
    /** Slider */
    export const Slider = XNode.prepare<ISlider>("Slider|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface ISpan {
        
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BackgroundColor of Type Color */
    backgroundColor?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property CharacterSpacing of Type Double */
    characterSpacing?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property Font of Type Font */
    font?: any;
    
    /** Property FontAttributes of Type FontAttributes */
    fontAttributes?: any;
    
    /** Property FontFamily of Type String */
    fontFamily?: any;
    
    /** Property FontSize of Type Double */
    fontSize?: any;
    
    /** Property ForegroundColor of Type Color */
    foregroundColor?: any;
    
    /** Property LineHeight of Type Double */
    lineHeight?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property Style of Type Style */
    style?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
    
    /** Property Text of Type String */
    text?: any;
    
    /** Property TextColor of Type Color */
    textColor?: any;
    
    /** Property TextDecorations of Type TextDecorations */
    textDecorations?: any;
        [key: string]: any;
    }
    /** Span */
    export const Span = XNode.prepare<ISpan>("Span|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface IStackLayout {
        
    /** Property AnchorX of Type Double */
    anchorX?: any;
    
    /** Property AnchorY of Type Double */
    anchorY?: any;
    
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BackgroundColor of Type Color */
    backgroundColor?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property CascadeInputTransparent of Type Boolean */
    cascadeInputTransparent?: any;
    
    /** Property class of Type IList`1 */
    class?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property DisableLayout of Type Boolean */
    disableLayout?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property FlowDirection of Type FlowDirection */
    flowDirection?: any;
    
    /** Property HeightRequest of Type Double */
    heightRequest?: any;
    
    /** Property HorizontalOptions of Type LayoutOptions */
    horizontalOptions?: any;
    
    /** Property InputTransparent of Type Boolean */
    inputTransparent?: any;
    
    /** Property IsClippedToBounds of Type Boolean */
    isClippedToBounds?: any;
    
    /** Property IsEnabled of Type Boolean */
    isEnabled?: any;
    
    /** Property IsInNativeLayout of Type Boolean */
    isInNativeLayout?: any;
    
    /** Property IsNativeStateConsistent of Type Boolean */
    isNativeStateConsistent?: any;
    
    /** Property IsPlatformEnabled of Type Boolean */
    isPlatformEnabled?: any;
    
    /** Property IsTabStop of Type Boolean */
    isTabStop?: any;
    
    /** Property IsVisible of Type Boolean */
    isVisible?: any;
    
    /** Property Margin of Type Thickness */
    margin?: any;
    
    /** Property MinimumHeightRequest of Type Double */
    minimumHeightRequest?: any;
    
    /** Property MinimumWidthRequest of Type Double */
    minimumWidthRequest?: any;
    
    /** Property Navigation of Type INavigation */
    navigation?: any;
    
    /** Property Opacity of Type Double */
    opacity?: any;
    
    /** Property Orientation of Type StackOrientation */
    orientation?: any;
    
    /** Property Padding of Type Thickness */
    padding?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property Resources of Type ResourceDictionary */
    resources?: any;
    
    /** Property Rotation of Type Double */
    rotation?: any;
    
    /** Property RotationX of Type Double */
    rotationX?: any;
    
    /** Property RotationY of Type Double */
    rotationY?: any;
    
    /** Property Scale of Type Double */
    scale?: any;
    
    /** Property ScaleX of Type Double */
    scaleX?: any;
    
    /** Property ScaleY of Type Double */
    scaleY?: any;
    
    /** Property Spacing of Type Double */
    spacing?: any;
    
    /** Property Style of Type Style */
    style?: any;
    
    /** Property StyleClass of Type IList`1 */
    styleClass?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
    
    /** Property TabIndex of Type Int32 */
    tabIndex?: any;
    
    /** Property TranslationX of Type Double */
    translationX?: any;
    
    /** Property TranslationY of Type Double */
    translationY?: any;
    
    /** Property VerticalOptions of Type LayoutOptions */
    verticalOptions?: any;
    
    /** Property Visual of Type IVisual */
    visual?: any;
    
    /** Property WidthRequest of Type Double */
    widthRequest?: any;
        [key: string]: any;
    }
    /** StackLayout */
    export const StackLayout = XNode.prepare<IStackLayout>("StackLayout|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface IStepper {
        
    /** Property AnchorX of Type Double */
    anchorX?: any;
    
    /** Property AnchorY of Type Double */
    anchorY?: any;
    
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BackgroundColor of Type Color */
    backgroundColor?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property class of Type IList`1 */
    class?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property DisableLayout of Type Boolean */
    disableLayout?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property FlowDirection of Type FlowDirection */
    flowDirection?: any;
    
    /** Property HeightRequest of Type Double */
    heightRequest?: any;
    
    /** Property HorizontalOptions of Type LayoutOptions */
    horizontalOptions?: any;
    
    /** Property Increment of Type Double */
    increment?: any;
    
    /** Property InputTransparent of Type Boolean */
    inputTransparent?: any;
    
    /** Property IsEnabled of Type Boolean */
    isEnabled?: any;
    
    /** Property IsInNativeLayout of Type Boolean */
    isInNativeLayout?: any;
    
    /** Property IsNativeStateConsistent of Type Boolean */
    isNativeStateConsistent?: any;
    
    /** Property IsPlatformEnabled of Type Boolean */
    isPlatformEnabled?: any;
    
    /** Property IsTabStop of Type Boolean */
    isTabStop?: any;
    
    /** Property IsVisible of Type Boolean */
    isVisible?: any;
    
    /** Property Margin of Type Thickness */
    margin?: any;
    
    /** Property Maximum of Type Double */
    maximum?: any;
    
    /** Property Minimum of Type Double */
    minimum?: any;
    
    /** Property MinimumHeightRequest of Type Double */
    minimumHeightRequest?: any;
    
    /** Property MinimumWidthRequest of Type Double */
    minimumWidthRequest?: any;
    
    /** Property Navigation of Type INavigation */
    navigation?: any;
    
    /** Property Opacity of Type Double */
    opacity?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property Resources of Type ResourceDictionary */
    resources?: any;
    
    /** Property Rotation of Type Double */
    rotation?: any;
    
    /** Property RotationX of Type Double */
    rotationX?: any;
    
    /** Property RotationY of Type Double */
    rotationY?: any;
    
    /** Property Scale of Type Double */
    scale?: any;
    
    /** Property ScaleX of Type Double */
    scaleX?: any;
    
    /** Property ScaleY of Type Double */
    scaleY?: any;
    
    /** Property Style of Type Style */
    style?: any;
    
    /** Property StyleClass of Type IList`1 */
    styleClass?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
    
    /** Property TabIndex of Type Int32 */
    tabIndex?: any;
    
    /** Property TranslationX of Type Double */
    translationX?: any;
    
    /** Property TranslationY of Type Double */
    translationY?: any;
    
    /** Property Value of Type Double */
    value?: any;
    
    /** Property VerticalOptions of Type LayoutOptions */
    verticalOptions?: any;
    
    /** Property Visual of Type IVisual */
    visual?: any;
    
    /** Property WidthRequest of Type Double */
    widthRequest?: any;
        [key: string]: any;
    }
    /** Stepper */
    export const Stepper = XNode.prepare<IStepper>("Stepper|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface IStreamImageSource {
        
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property Stream of Type Func`2 */
    stream?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
        [key: string]: any;
    }
    /** StreamImageSource */
    export const StreamImageSource = XNode.prepare<IStreamImageSource>("StreamImageSource|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface ISwipeGestureRecognizer {
        
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property Command of Type ICommand */
    command?: any;
    
    /** Property CommandParameter of Type Object */
    commandParameter?: any;
    
    /** Property Direction of Type SwipeDirection */
    direction?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
    
    /** Property Threshold of Type UInt32 */
    threshold?: any;
        [key: string]: any;
    }
    /** SwipeGestureRecognizer */
    export const SwipeGestureRecognizer = XNode.prepare<ISwipeGestureRecognizer>("SwipeGestureRecognizer|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface ISwipeItem {
        
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BackgroundColor of Type Color */
    backgroundColor?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property Command of Type ICommand */
    command?: any;
    
    /** Property CommandParameter of Type Object */
    commandParameter?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property Icon of Type FileImageSource */
    icon?: any;
    
    /** Property IconImageSource of Type ImageSource */
    iconImageSource?: any;
    
    /** Property IsDestructive of Type Boolean */
    isDestructive?: any;
    
    /** Property IsEnabled of Type Boolean */
    isEnabled?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
    
    /** Property Text of Type String */
    text?: any;
        [key: string]: any;
    }
    /** SwipeItem */
    export const SwipeItem = XNode.prepare<ISwipeItem>("SwipeItem|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface ISwipeItems {
        
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property Item of Type ISwipeItem */
    item?: any;
    
    /** Property Mode of Type SwipeMode */
    mode?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
    
    /** Property SwipeBehaviorOnInvoked of Type SwipeBehaviorOnInvoked */
    swipeBehaviorOnInvoked?: any;
        [key: string]: any;
    }
    /** SwipeItems */
    export const SwipeItems = XNode.prepare<ISwipeItems>("SwipeItems|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface ISwipeItemView {
        
    /** Property AnchorX of Type Double */
    anchorX?: any;
    
    /** Property AnchorY of Type Double */
    anchorY?: any;
    
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BackgroundColor of Type Color */
    backgroundColor?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property CascadeInputTransparent of Type Boolean */
    cascadeInputTransparent?: any;
    
    /** Property class of Type IList`1 */
    class?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property Command of Type ICommand */
    command?: any;
    
    /** Property CommandParameter of Type Object */
    commandParameter?: any;
    
    /** Property Content of Type View */
    content?: any;
    
    /** Property ControlTemplate of Type ControlTemplate */
    controlTemplate?: any;
    
    /** Property DisableLayout of Type Boolean */
    disableLayout?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property FlowDirection of Type FlowDirection */
    flowDirection?: any;
    
    /** Property HeightRequest of Type Double */
    heightRequest?: any;
    
    /** Property HorizontalOptions of Type LayoutOptions */
    horizontalOptions?: any;
    
    /** Property InputTransparent of Type Boolean */
    inputTransparent?: any;
    
    /** Property IsClippedToBounds of Type Boolean */
    isClippedToBounds?: any;
    
    /** Property IsEnabled of Type Boolean */
    isEnabled?: any;
    
    /** Property IsInNativeLayout of Type Boolean */
    isInNativeLayout?: any;
    
    /** Property IsNativeStateConsistent of Type Boolean */
    isNativeStateConsistent?: any;
    
    /** Property IsPlatformEnabled of Type Boolean */
    isPlatformEnabled?: any;
    
    /** Property IsTabStop of Type Boolean */
    isTabStop?: any;
    
    /** Property IsVisible of Type Boolean */
    isVisible?: any;
    
    /** Property Margin of Type Thickness */
    margin?: any;
    
    /** Property MinimumHeightRequest of Type Double */
    minimumHeightRequest?: any;
    
    /** Property MinimumWidthRequest of Type Double */
    minimumWidthRequest?: any;
    
    /** Property Navigation of Type INavigation */
    navigation?: any;
    
    /** Property Opacity of Type Double */
    opacity?: any;
    
    /** Property Padding of Type Thickness */
    padding?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property Resources of Type ResourceDictionary */
    resources?: any;
    
    /** Property Rotation of Type Double */
    rotation?: any;
    
    /** Property RotationX of Type Double */
    rotationX?: any;
    
    /** Property RotationY of Type Double */
    rotationY?: any;
    
    /** Property Scale of Type Double */
    scale?: any;
    
    /** Property ScaleX of Type Double */
    scaleX?: any;
    
    /** Property ScaleY of Type Double */
    scaleY?: any;
    
    /** Property Style of Type Style */
    style?: any;
    
    /** Property StyleClass of Type IList`1 */
    styleClass?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
    
    /** Property TabIndex of Type Int32 */
    tabIndex?: any;
    
    /** Property TranslationX of Type Double */
    translationX?: any;
    
    /** Property TranslationY of Type Double */
    translationY?: any;
    
    /** Property VerticalOptions of Type LayoutOptions */
    verticalOptions?: any;
    
    /** Property Visual of Type IVisual */
    visual?: any;
    
    /** Property WidthRequest of Type Double */
    widthRequest?: any;
        [key: string]: any;
    }
    /** SwipeItemView */
    export const SwipeItemView = XNode.prepare<ISwipeItemView>("SwipeItemView|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface ISwipeView {
        
    /** Property AnchorX of Type Double */
    anchorX?: any;
    
    /** Property AnchorY of Type Double */
    anchorY?: any;
    
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BackgroundColor of Type Color */
    backgroundColor?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property BottomItems of Type SwipeItems */
    bottomItems?: any;
    
    /** Property CascadeInputTransparent of Type Boolean */
    cascadeInputTransparent?: any;
    
    /** Property class of Type IList`1 */
    class?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property Content of Type View */
    content?: any;
    
    /** Property ControlTemplate of Type ControlTemplate */
    controlTemplate?: any;
    
    /** Property DisableLayout of Type Boolean */
    disableLayout?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property FlowDirection of Type FlowDirection */
    flowDirection?: any;
    
    /** Property HeightRequest of Type Double */
    heightRequest?: any;
    
    /** Property HorizontalOptions of Type LayoutOptions */
    horizontalOptions?: any;
    
    /** Property InputTransparent of Type Boolean */
    inputTransparent?: any;
    
    /** Property IsClippedToBounds of Type Boolean */
    isClippedToBounds?: any;
    
    /** Property IsEnabled of Type Boolean */
    isEnabled?: any;
    
    /** Property IsInNativeLayout of Type Boolean */
    isInNativeLayout?: any;
    
    /** Property IsNativeStateConsistent of Type Boolean */
    isNativeStateConsistent?: any;
    
    /** Property IsPlatformEnabled of Type Boolean */
    isPlatformEnabled?: any;
    
    /** Property IsTabStop of Type Boolean */
    isTabStop?: any;
    
    /** Property IsVisible of Type Boolean */
    isVisible?: any;
    
    /** Property LeftItems of Type SwipeItems */
    leftItems?: any;
    
    /** Property Margin of Type Thickness */
    margin?: any;
    
    /** Property MinimumHeightRequest of Type Double */
    minimumHeightRequest?: any;
    
    /** Property MinimumWidthRequest of Type Double */
    minimumWidthRequest?: any;
    
    /** Property Navigation of Type INavigation */
    navigation?: any;
    
    /** Property Opacity of Type Double */
    opacity?: any;
    
    /** Property Padding of Type Thickness */
    padding?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property Resources of Type ResourceDictionary */
    resources?: any;
    
    /** Property RightItems of Type SwipeItems */
    rightItems?: any;
    
    /** Property Rotation of Type Double */
    rotation?: any;
    
    /** Property RotationX of Type Double */
    rotationX?: any;
    
    /** Property RotationY of Type Double */
    rotationY?: any;
    
    /** Property Scale of Type Double */
    scale?: any;
    
    /** Property ScaleX of Type Double */
    scaleX?: any;
    
    /** Property ScaleY of Type Double */
    scaleY?: any;
    
    /** Property Style of Type Style */
    style?: any;
    
    /** Property StyleClass of Type IList`1 */
    styleClass?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
    
    /** Property TabIndex of Type Int32 */
    tabIndex?: any;
    
    /** Property TopItems of Type SwipeItems */
    topItems?: any;
    
    /** Property TranslationX of Type Double */
    translationX?: any;
    
    /** Property TranslationY of Type Double */
    translationY?: any;
    
    /** Property VerticalOptions of Type LayoutOptions */
    verticalOptions?: any;
    
    /** Property Visual of Type IVisual */
    visual?: any;
    
    /** Property WidthRequest of Type Double */
    widthRequest?: any;
        [key: string]: any;
    }
    /** SwipeView */
    export const SwipeView = XNode.prepare<ISwipeView>("SwipeView|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface ISwitch {
        
    /** Property AnchorX of Type Double */
    anchorX?: any;
    
    /** Property AnchorY of Type Double */
    anchorY?: any;
    
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BackgroundColor of Type Color */
    backgroundColor?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property class of Type IList`1 */
    class?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property DisableLayout of Type Boolean */
    disableLayout?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property FlowDirection of Type FlowDirection */
    flowDirection?: any;
    
    /** Property HeightRequest of Type Double */
    heightRequest?: any;
    
    /** Property HorizontalOptions of Type LayoutOptions */
    horizontalOptions?: any;
    
    /** Property InputTransparent of Type Boolean */
    inputTransparent?: any;
    
    /** Property IsEnabled of Type Boolean */
    isEnabled?: any;
    
    /** Property IsInNativeLayout of Type Boolean */
    isInNativeLayout?: any;
    
    /** Property IsNativeStateConsistent of Type Boolean */
    isNativeStateConsistent?: any;
    
    /** Property IsPlatformEnabled of Type Boolean */
    isPlatformEnabled?: any;
    
    /** Property IsTabStop of Type Boolean */
    isTabStop?: any;
    
    /** Property IsToggled of Type Boolean */
    isToggled?: any;
    
    /** Property IsVisible of Type Boolean */
    isVisible?: any;
    
    /** Property Margin of Type Thickness */
    margin?: any;
    
    /** Property MinimumHeightRequest of Type Double */
    minimumHeightRequest?: any;
    
    /** Property MinimumWidthRequest of Type Double */
    minimumWidthRequest?: any;
    
    /** Property Navigation of Type INavigation */
    navigation?: any;
    
    /** Property OnColor of Type Color */
    onColor?: any;
    
    /** Property Opacity of Type Double */
    opacity?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property Resources of Type ResourceDictionary */
    resources?: any;
    
    /** Property Rotation of Type Double */
    rotation?: any;
    
    /** Property RotationX of Type Double */
    rotationX?: any;
    
    /** Property RotationY of Type Double */
    rotationY?: any;
    
    /** Property Scale of Type Double */
    scale?: any;
    
    /** Property ScaleX of Type Double */
    scaleX?: any;
    
    /** Property ScaleY of Type Double */
    scaleY?: any;
    
    /** Property Style of Type Style */
    style?: any;
    
    /** Property StyleClass of Type IList`1 */
    styleClass?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
    
    /** Property TabIndex of Type Int32 */
    tabIndex?: any;
    
    /** Property ThumbColor of Type Color */
    thumbColor?: any;
    
    /** Property TranslationX of Type Double */
    translationX?: any;
    
    /** Property TranslationY of Type Double */
    translationY?: any;
    
    /** Property VerticalOptions of Type LayoutOptions */
    verticalOptions?: any;
    
    /** Property Visual of Type IVisual */
    visual?: any;
    
    /** Property WidthRequest of Type Double */
    widthRequest?: any;
        [key: string]: any;
    }
    /** Switch */
    export const Switch = XNode.prepare<ISwitch>("Switch|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface ITabbedPage {
        
    /** Property AnchorX of Type Double */
    anchorX?: any;
    
    /** Property AnchorY of Type Double */
    anchorY?: any;
    
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BackgroundColor of Type Color */
    backgroundColor?: any;
    
    /** Property BackgroundImage of Type String */
    backgroundImage?: any;
    
    /** Property BackgroundImageSource of Type ImageSource */
    backgroundImageSource?: any;
    
    /** Property BarBackgroundColor of Type Color */
    barBackgroundColor?: any;
    
    /** Property BarTextColor of Type Color */
    barTextColor?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property class of Type IList`1 */
    class?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property ContainerArea of Type Rectangle */
    containerArea?: any;
    
    /** Property CurrentPage of Type Page */
    currentPage?: any;
    
    /** Property DisableLayout of Type Boolean */
    disableLayout?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property FlowDirection of Type FlowDirection */
    flowDirection?: any;
    
    /** Property HeightRequest of Type Double */
    heightRequest?: any;
    
    /** Property Icon of Type FileImageSource */
    icon?: any;
    
    /** Property IconImageSource of Type ImageSource */
    iconImageSource?: any;
    
    /** Property IgnoresContainerArea of Type Boolean */
    ignoresContainerArea?: any;
    
    /** Property InputTransparent of Type Boolean */
    inputTransparent?: any;
    
    /** Property IsBusy of Type Boolean */
    isBusy?: any;
    
    /** Property IsEnabled of Type Boolean */
    isEnabled?: any;
    
    /** Property IsInNativeLayout of Type Boolean */
    isInNativeLayout?: any;
    
    /** Property IsNativeStateConsistent of Type Boolean */
    isNativeStateConsistent?: any;
    
    /** Property IsPlatformEnabled of Type Boolean */
    isPlatformEnabled?: any;
    
    /** Property IsTabStop of Type Boolean */
    isTabStop?: any;
    
    /** Property IsVisible of Type Boolean */
    isVisible?: any;
    
    /** Property ItemsSource of Type IEnumerable */
    itemsSource?: any;
    
    /** Property ItemTemplate of Type DataTemplate */
    itemTemplate?: any;
    
    /** Property MinimumHeightRequest of Type Double */
    minimumHeightRequest?: any;
    
    /** Property MinimumWidthRequest of Type Double */
    minimumWidthRequest?: any;
    
    /** Property Navigation of Type INavigation */
    navigation?: any;
    
    /** Property Opacity of Type Double */
    opacity?: any;
    
    /** Property Padding of Type Thickness */
    padding?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property Resources of Type ResourceDictionary */
    resources?: any;
    
    /** Property Rotation of Type Double */
    rotation?: any;
    
    /** Property RotationX of Type Double */
    rotationX?: any;
    
    /** Property RotationY of Type Double */
    rotationY?: any;
    
    /** Property Scale of Type Double */
    scale?: any;
    
    /** Property ScaleX of Type Double */
    scaleX?: any;
    
    /** Property ScaleY of Type Double */
    scaleY?: any;
    
    /** Property SelectedItem of Type Object */
    selectedItem?: any;
    
    /** Property SelectedTabColor of Type Color */
    selectedTabColor?: any;
    
    /** Property Style of Type Style */
    style?: any;
    
    /** Property StyleClass of Type IList`1 */
    styleClass?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
    
    /** Property TabIndex of Type Int32 */
    tabIndex?: any;
    
    /** Property Title of Type String */
    title?: any;
    
    /** Property ToolbarItems of Type IList`1 */
    toolbarItems?: any;
    
    /** Property TranslationX of Type Double */
    translationX?: any;
    
    /** Property TranslationY of Type Double */
    translationY?: any;
    
    /** Property UnselectedTabColor of Type Color */
    unselectedTabColor?: any;
    
    /** Property Visual of Type IVisual */
    visual?: any;
    
    /** Property WidthRequest of Type Double */
    widthRequest?: any;
        [key: string]: any;
    }
    /** TabbedPage */
    export const TabbedPage = XNode.prepare<ITabbedPage>("TabbedPage|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface ITableRoot {
        
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property Item of Type TableSection */
    item?: any;
    
    /** Property TextColor of Type Color */
    textColor?: any;
    
    /** Property Title of Type String */
    title?: any;
        [key: string]: any;
    }
    /** TableRoot */
    export const TableRoot = XNode.prepare<ITableRoot>("TableRoot|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface ITableSection {
        
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property Item of Type Cell */
    item?: any;
    
    /** Property TextColor of Type Color */
    textColor?: any;
    
    /** Property Title of Type String */
    title?: any;
        [key: string]: any;
    }
    /** TableSection */
    export const TableSection = XNode.prepare<ITableSection>("TableSection|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface ITableSectionBase {
        
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property TextColor of Type Color */
    textColor?: any;
    
    /** Property Title of Type String */
    title?: any;
        [key: string]: any;
    }
    /** TableSectionBase */
    export const TableSectionBase = XNode.prepare<ITableSectionBase>("TableSectionBase|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface ITableView {
        
    /** Property AnchorX of Type Double */
    anchorX?: any;
    
    /** Property AnchorY of Type Double */
    anchorY?: any;
    
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BackgroundColor of Type Color */
    backgroundColor?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property class of Type IList`1 */
    class?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property DisableLayout of Type Boolean */
    disableLayout?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property FlowDirection of Type FlowDirection */
    flowDirection?: any;
    
    /** Property HasUnevenRows of Type Boolean */
    hasUnevenRows?: any;
    
    /** Property HeightRequest of Type Double */
    heightRequest?: any;
    
    /** Property HorizontalOptions of Type LayoutOptions */
    horizontalOptions?: any;
    
    /** Property InputTransparent of Type Boolean */
    inputTransparent?: any;
    
    /** Property Intent of Type TableIntent */
    intent?: any;
    
    /** Property IsEnabled of Type Boolean */
    isEnabled?: any;
    
    /** Property IsInNativeLayout of Type Boolean */
    isInNativeLayout?: any;
    
    /** Property IsNativeStateConsistent of Type Boolean */
    isNativeStateConsistent?: any;
    
    /** Property IsPlatformEnabled of Type Boolean */
    isPlatformEnabled?: any;
    
    /** Property IsTabStop of Type Boolean */
    isTabStop?: any;
    
    /** Property IsVisible of Type Boolean */
    isVisible?: any;
    
    /** Property Margin of Type Thickness */
    margin?: any;
    
    /** Property MinimumHeightRequest of Type Double */
    minimumHeightRequest?: any;
    
    /** Property MinimumWidthRequest of Type Double */
    minimumWidthRequest?: any;
    
    /** Property Model of Type TableModel */
    model?: any;
    
    /** Property Navigation of Type INavigation */
    navigation?: any;
    
    /** Property Opacity of Type Double */
    opacity?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property Resources of Type ResourceDictionary */
    resources?: any;
    
    /** Property Root of Type TableRoot */
    root?: any;
    
    /** Property Rotation of Type Double */
    rotation?: any;
    
    /** Property RotationX of Type Double */
    rotationX?: any;
    
    /** Property RotationY of Type Double */
    rotationY?: any;
    
    /** Property RowHeight of Type Int32 */
    rowHeight?: any;
    
    /** Property Scale of Type Double */
    scale?: any;
    
    /** Property ScaleX of Type Double */
    scaleX?: any;
    
    /** Property ScaleY of Type Double */
    scaleY?: any;
    
    /** Property Style of Type Style */
    style?: any;
    
    /** Property StyleClass of Type IList`1 */
    styleClass?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
    
    /** Property TabIndex of Type Int32 */
    tabIndex?: any;
    
    /** Property TranslationX of Type Double */
    translationX?: any;
    
    /** Property TranslationY of Type Double */
    translationY?: any;
    
    /** Property VerticalOptions of Type LayoutOptions */
    verticalOptions?: any;
    
    /** Property Visual of Type IVisual */
    visual?: any;
    
    /** Property WidthRequest of Type Double */
    widthRequest?: any;
        [key: string]: any;
    }
    /** TableView */
    export const TableView = XNode.prepare<ITableView>("TableView|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface ITapGestureRecognizer {
        
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property Command of Type ICommand */
    command?: any;
    
    /** Property CommandParameter of Type Object */
    commandParameter?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property NumberOfTapsRequired of Type Int32 */
    numberOfTapsRequired?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
    
    /** Property TappedCallback of Type Action`2 */
    tappedCallback?: any;
    
    /** Property TappedCallbackParameter of Type Object */
    tappedCallbackParameter?: any;
        [key: string]: any;
    }
    /** TapGestureRecognizer */
    export const TapGestureRecognizer = XNode.prepare<ITapGestureRecognizer>("TapGestureRecognizer|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface ITemplatedPage {
        
    /** Property AnchorX of Type Double */
    anchorX?: any;
    
    /** Property AnchorY of Type Double */
    anchorY?: any;
    
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BackgroundColor of Type Color */
    backgroundColor?: any;
    
    /** Property BackgroundImage of Type String */
    backgroundImage?: any;
    
    /** Property BackgroundImageSource of Type ImageSource */
    backgroundImageSource?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property class of Type IList`1 */
    class?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property ContainerArea of Type Rectangle */
    containerArea?: any;
    
    /** Property ControlTemplate of Type ControlTemplate */
    controlTemplate?: any;
    
    /** Property DisableLayout of Type Boolean */
    disableLayout?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property FlowDirection of Type FlowDirection */
    flowDirection?: any;
    
    /** Property HeightRequest of Type Double */
    heightRequest?: any;
    
    /** Property Icon of Type FileImageSource */
    icon?: any;
    
    /** Property IconImageSource of Type ImageSource */
    iconImageSource?: any;
    
    /** Property IgnoresContainerArea of Type Boolean */
    ignoresContainerArea?: any;
    
    /** Property InputTransparent of Type Boolean */
    inputTransparent?: any;
    
    /** Property IsBusy of Type Boolean */
    isBusy?: any;
    
    /** Property IsEnabled of Type Boolean */
    isEnabled?: any;
    
    /** Property IsInNativeLayout of Type Boolean */
    isInNativeLayout?: any;
    
    /** Property IsNativeStateConsistent of Type Boolean */
    isNativeStateConsistent?: any;
    
    /** Property IsPlatformEnabled of Type Boolean */
    isPlatformEnabled?: any;
    
    /** Property IsTabStop of Type Boolean */
    isTabStop?: any;
    
    /** Property IsVisible of Type Boolean */
    isVisible?: any;
    
    /** Property MinimumHeightRequest of Type Double */
    minimumHeightRequest?: any;
    
    /** Property MinimumWidthRequest of Type Double */
    minimumWidthRequest?: any;
    
    /** Property Navigation of Type INavigation */
    navigation?: any;
    
    /** Property Opacity of Type Double */
    opacity?: any;
    
    /** Property Padding of Type Thickness */
    padding?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property Resources of Type ResourceDictionary */
    resources?: any;
    
    /** Property Rotation of Type Double */
    rotation?: any;
    
    /** Property RotationX of Type Double */
    rotationX?: any;
    
    /** Property RotationY of Type Double */
    rotationY?: any;
    
    /** Property Scale of Type Double */
    scale?: any;
    
    /** Property ScaleX of Type Double */
    scaleX?: any;
    
    /** Property ScaleY of Type Double */
    scaleY?: any;
    
    /** Property Style of Type Style */
    style?: any;
    
    /** Property StyleClass of Type IList`1 */
    styleClass?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
    
    /** Property TabIndex of Type Int32 */
    tabIndex?: any;
    
    /** Property Title of Type String */
    title?: any;
    
    /** Property ToolbarItems of Type IList`1 */
    toolbarItems?: any;
    
    /** Property TranslationX of Type Double */
    translationX?: any;
    
    /** Property TranslationY of Type Double */
    translationY?: any;
    
    /** Property Visual of Type IVisual */
    visual?: any;
    
    /** Property WidthRequest of Type Double */
    widthRequest?: any;
        [key: string]: any;
    }
    /** TemplatedPage */
    export const TemplatedPage = XNode.prepare<ITemplatedPage>("TemplatedPage|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface ITemplatedView {
        
    /** Property AnchorX of Type Double */
    anchorX?: any;
    
    /** Property AnchorY of Type Double */
    anchorY?: any;
    
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BackgroundColor of Type Color */
    backgroundColor?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property CascadeInputTransparent of Type Boolean */
    cascadeInputTransparent?: any;
    
    /** Property class of Type IList`1 */
    class?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property ControlTemplate of Type ControlTemplate */
    controlTemplate?: any;
    
    /** Property DisableLayout of Type Boolean */
    disableLayout?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property FlowDirection of Type FlowDirection */
    flowDirection?: any;
    
    /** Property HeightRequest of Type Double */
    heightRequest?: any;
    
    /** Property HorizontalOptions of Type LayoutOptions */
    horizontalOptions?: any;
    
    /** Property InputTransparent of Type Boolean */
    inputTransparent?: any;
    
    /** Property IsClippedToBounds of Type Boolean */
    isClippedToBounds?: any;
    
    /** Property IsEnabled of Type Boolean */
    isEnabled?: any;
    
    /** Property IsInNativeLayout of Type Boolean */
    isInNativeLayout?: any;
    
    /** Property IsNativeStateConsistent of Type Boolean */
    isNativeStateConsistent?: any;
    
    /** Property IsPlatformEnabled of Type Boolean */
    isPlatformEnabled?: any;
    
    /** Property IsTabStop of Type Boolean */
    isTabStop?: any;
    
    /** Property IsVisible of Type Boolean */
    isVisible?: any;
    
    /** Property Margin of Type Thickness */
    margin?: any;
    
    /** Property MinimumHeightRequest of Type Double */
    minimumHeightRequest?: any;
    
    /** Property MinimumWidthRequest of Type Double */
    minimumWidthRequest?: any;
    
    /** Property Navigation of Type INavigation */
    navigation?: any;
    
    /** Property Opacity of Type Double */
    opacity?: any;
    
    /** Property Padding of Type Thickness */
    padding?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property Resources of Type ResourceDictionary */
    resources?: any;
    
    /** Property Rotation of Type Double */
    rotation?: any;
    
    /** Property RotationX of Type Double */
    rotationX?: any;
    
    /** Property RotationY of Type Double */
    rotationY?: any;
    
    /** Property Scale of Type Double */
    scale?: any;
    
    /** Property ScaleX of Type Double */
    scaleX?: any;
    
    /** Property ScaleY of Type Double */
    scaleY?: any;
    
    /** Property Style of Type Style */
    style?: any;
    
    /** Property StyleClass of Type IList`1 */
    styleClass?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
    
    /** Property TabIndex of Type Int32 */
    tabIndex?: any;
    
    /** Property TranslationX of Type Double */
    translationX?: any;
    
    /** Property TranslationY of Type Double */
    translationY?: any;
    
    /** Property VerticalOptions of Type LayoutOptions */
    verticalOptions?: any;
    
    /** Property Visual of Type IVisual */
    visual?: any;
    
    /** Property WidthRequest of Type Double */
    widthRequest?: any;
        [key: string]: any;
    }
    /** TemplatedView */
    export const TemplatedView = XNode.prepare<ITemplatedView>("TemplatedView|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface ITimePicker {
        
    /** Property AnchorX of Type Double */
    anchorX?: any;
    
    /** Property AnchorY of Type Double */
    anchorY?: any;
    
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BackgroundColor of Type Color */
    backgroundColor?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property CharacterSpacing of Type Double */
    characterSpacing?: any;
    
    /** Property class of Type IList`1 */
    class?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property DisableLayout of Type Boolean */
    disableLayout?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property FlowDirection of Type FlowDirection */
    flowDirection?: any;
    
    /** Property FontAttributes of Type FontAttributes */
    fontAttributes?: any;
    
    /** Property FontFamily of Type String */
    fontFamily?: any;
    
    /** Property FontSize of Type Double */
    fontSize?: any;
    
    /** Property Format of Type String */
    format?: any;
    
    /** Property HeightRequest of Type Double */
    heightRequest?: any;
    
    /** Property HorizontalOptions of Type LayoutOptions */
    horizontalOptions?: any;
    
    /** Property InputTransparent of Type Boolean */
    inputTransparent?: any;
    
    /** Property IsEnabled of Type Boolean */
    isEnabled?: any;
    
    /** Property IsInNativeLayout of Type Boolean */
    isInNativeLayout?: any;
    
    /** Property IsNativeStateConsistent of Type Boolean */
    isNativeStateConsistent?: any;
    
    /** Property IsPlatformEnabled of Type Boolean */
    isPlatformEnabled?: any;
    
    /** Property IsTabStop of Type Boolean */
    isTabStop?: any;
    
    /** Property IsVisible of Type Boolean */
    isVisible?: any;
    
    /** Property Margin of Type Thickness */
    margin?: any;
    
    /** Property MinimumHeightRequest of Type Double */
    minimumHeightRequest?: any;
    
    /** Property MinimumWidthRequest of Type Double */
    minimumWidthRequest?: any;
    
    /** Property Navigation of Type INavigation */
    navigation?: any;
    
    /** Property Opacity of Type Double */
    opacity?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property Resources of Type ResourceDictionary */
    resources?: any;
    
    /** Property Rotation of Type Double */
    rotation?: any;
    
    /** Property RotationX of Type Double */
    rotationX?: any;
    
    /** Property RotationY of Type Double */
    rotationY?: any;
    
    /** Property Scale of Type Double */
    scale?: any;
    
    /** Property ScaleX of Type Double */
    scaleX?: any;
    
    /** Property ScaleY of Type Double */
    scaleY?: any;
    
    /** Property Style of Type Style */
    style?: any;
    
    /** Property StyleClass of Type IList`1 */
    styleClass?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
    
    /** Property TabIndex of Type Int32 */
    tabIndex?: any;
    
    /** Property TextColor of Type Color */
    textColor?: any;
    
    /** Property Time of Type TimeSpan */
    time?: any;
    
    /** Property TranslationX of Type Double */
    translationX?: any;
    
    /** Property TranslationY of Type Double */
    translationY?: any;
    
    /** Property VerticalOptions of Type LayoutOptions */
    verticalOptions?: any;
    
    /** Property Visual of Type IVisual */
    visual?: any;
    
    /** Property WidthRequest of Type Double */
    widthRequest?: any;
        [key: string]: any;
    }
    /** TimePicker */
    export const TimePicker = XNode.prepare<ITimePicker>("TimePicker|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface IToolbarItem {
        
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property Command of Type ICommand */
    command?: any;
    
    /** Property CommandParameter of Type Object */
    commandParameter?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property Icon of Type FileImageSource */
    icon?: any;
    
    /** Property IconImageSource of Type ImageSource */
    iconImageSource?: any;
    
    /** Property IsDestructive of Type Boolean */
    isDestructive?: any;
    
    /** Property IsEnabled of Type Boolean */
    isEnabled?: any;
    
    /** Property Name of Type String */
    name?: any;
    
    /** Property Order of Type ToolbarItemOrder */
    order?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property Priority of Type Int32 */
    priority?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
    
    /** Property Text of Type String */
    text?: any;
        [key: string]: any;
    }
    /** ToolbarItem */
    export const ToolbarItem = XNode.prepare<IToolbarItem>("ToolbarItem|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface IUriImageSource {
        
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property CacheValidity of Type TimeSpan */
    cacheValidity?: any;
    
    /** Property CachingEnabled of Type Boolean */
    cachingEnabled?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
    
    /** Property Uri of Type Uri */
    uri?: any;
        [key: string]: any;
    }
    /** UriImageSource */
    export const UriImageSource = XNode.prepare<IUriImageSource>("UriImageSource|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface IUrlWebViewSource {
        
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property Url of Type String */
    url?: any;
        [key: string]: any;
    }
    /** UrlWebViewSource */
    export const UrlWebViewSource = XNode.prepare<IUrlWebViewSource>("UrlWebViewSource|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface IView {
        
    /** Property AnchorX of Type Double */
    anchorX?: any;
    
    /** Property AnchorY of Type Double */
    anchorY?: any;
    
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BackgroundColor of Type Color */
    backgroundColor?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property class of Type IList`1 */
    class?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property DisableLayout of Type Boolean */
    disableLayout?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property FlowDirection of Type FlowDirection */
    flowDirection?: any;
    
    /** Property HeightRequest of Type Double */
    heightRequest?: any;
    
    /** Property HorizontalOptions of Type LayoutOptions */
    horizontalOptions?: any;
    
    /** Property InputTransparent of Type Boolean */
    inputTransparent?: any;
    
    /** Property IsEnabled of Type Boolean */
    isEnabled?: any;
    
    /** Property IsInNativeLayout of Type Boolean */
    isInNativeLayout?: any;
    
    /** Property IsNativeStateConsistent of Type Boolean */
    isNativeStateConsistent?: any;
    
    /** Property IsPlatformEnabled of Type Boolean */
    isPlatformEnabled?: any;
    
    /** Property IsTabStop of Type Boolean */
    isTabStop?: any;
    
    /** Property IsVisible of Type Boolean */
    isVisible?: any;
    
    /** Property Margin of Type Thickness */
    margin?: any;
    
    /** Property MinimumHeightRequest of Type Double */
    minimumHeightRequest?: any;
    
    /** Property MinimumWidthRequest of Type Double */
    minimumWidthRequest?: any;
    
    /** Property Navigation of Type INavigation */
    navigation?: any;
    
    /** Property Opacity of Type Double */
    opacity?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property Resources of Type ResourceDictionary */
    resources?: any;
    
    /** Property Rotation of Type Double */
    rotation?: any;
    
    /** Property RotationX of Type Double */
    rotationX?: any;
    
    /** Property RotationY of Type Double */
    rotationY?: any;
    
    /** Property Scale of Type Double */
    scale?: any;
    
    /** Property ScaleX of Type Double */
    scaleX?: any;
    
    /** Property ScaleY of Type Double */
    scaleY?: any;
    
    /** Property Style of Type Style */
    style?: any;
    
    /** Property StyleClass of Type IList`1 */
    styleClass?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
    
    /** Property TabIndex of Type Int32 */
    tabIndex?: any;
    
    /** Property TranslationX of Type Double */
    translationX?: any;
    
    /** Property TranslationY of Type Double */
    translationY?: any;
    
    /** Property VerticalOptions of Type LayoutOptions */
    verticalOptions?: any;
    
    /** Property Visual of Type IVisual */
    visual?: any;
    
    /** Property WidthRequest of Type Double */
    widthRequest?: any;
        [key: string]: any;
    }
    /** View */
    export const View = XNode.prepare<IView>("View|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface IVisualElement {
        
    /** Property AnchorX of Type Double */
    anchorX?: any;
    
    /** Property AnchorY of Type Double */
    anchorY?: any;
    
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BackgroundColor of Type Color */
    backgroundColor?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property Bounds of Type Rectangle */
    bounds?: any;
    
    /** Property class of Type IList`1 */
    class?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property DisableLayout of Type Boolean */
    disableLayout?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property FlowDirection of Type FlowDirection */
    flowDirection?: any;
    
    /** Property Height of Type Double */
    height?: any;
    
    /** Property HeightRequest of Type Double */
    heightRequest?: any;
    
    /** Property InputTransparent of Type Boolean */
    inputTransparent?: any;
    
    /** Property IsEnabled of Type Boolean */
    isEnabled?: any;
    
    /** Property IsInNativeLayout of Type Boolean */
    isInNativeLayout?: any;
    
    /** Property IsNativeStateConsistent of Type Boolean */
    isNativeStateConsistent?: any;
    
    /** Property IsPlatformEnabled of Type Boolean */
    isPlatformEnabled?: any;
    
    /** Property IsTabStop of Type Boolean */
    isTabStop?: any;
    
    /** Property IsVisible of Type Boolean */
    isVisible?: any;
    
    /** Property MinimumHeightRequest of Type Double */
    minimumHeightRequest?: any;
    
    /** Property MinimumWidthRequest of Type Double */
    minimumWidthRequest?: any;
    
    /** Property Navigation of Type INavigation */
    navigation?: any;
    
    /** Property Opacity of Type Double */
    opacity?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property Resources of Type ResourceDictionary */
    resources?: any;
    
    /** Property Rotation of Type Double */
    rotation?: any;
    
    /** Property RotationX of Type Double */
    rotationX?: any;
    
    /** Property RotationY of Type Double */
    rotationY?: any;
    
    /** Property Scale of Type Double */
    scale?: any;
    
    /** Property ScaleX of Type Double */
    scaleX?: any;
    
    /** Property ScaleY of Type Double */
    scaleY?: any;
    
    /** Property Style of Type Style */
    style?: any;
    
    /** Property StyleClass of Type IList`1 */
    styleClass?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
    
    /** Property TabIndex of Type Int32 */
    tabIndex?: any;
    
    /** Property TranslationX of Type Double */
    translationX?: any;
    
    /** Property TranslationY of Type Double */
    translationY?: any;
    
    /** Property Visual of Type IVisual */
    visual?: any;
    
    /** Property Width of Type Double */
    width?: any;
    
    /** Property WidthRequest of Type Double */
    widthRequest?: any;
    
    /** Property X of Type Double */
    x?: any;
    
    /** Property Y of Type Double */
    y?: any;
        [key: string]: any;
    }
    /** VisualElement */
    export const VisualElement = XNode.prepare<IVisualElement>("VisualElement|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface IWebView {
        
    /** Property AnchorX of Type Double */
    anchorX?: any;
    
    /** Property AnchorY of Type Double */
    anchorY?: any;
    
    /** Property AutomationId of Type String */
    automationId?: any;
    
    /** Property BackgroundColor of Type Color */
    backgroundColor?: any;
    
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property class of Type IList`1 */
    class?: any;
    
    /** Property ClassId of Type String */
    classId?: any;
    
    /** Property DisableLayout of Type Boolean */
    disableLayout?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property EffectControlProvider of Type IEffectControlProvider */
    effectControlProvider?: any;
    
    /** Property FlowDirection of Type FlowDirection */
    flowDirection?: any;
    
    /** Property HeightRequest of Type Double */
    heightRequest?: any;
    
    /** Property HorizontalOptions of Type LayoutOptions */
    horizontalOptions?: any;
    
    /** Property InputTransparent of Type Boolean */
    inputTransparent?: any;
    
    /** Property IsEnabled of Type Boolean */
    isEnabled?: any;
    
    /** Property IsInNativeLayout of Type Boolean */
    isInNativeLayout?: any;
    
    /** Property IsNativeStateConsistent of Type Boolean */
    isNativeStateConsistent?: any;
    
    /** Property IsPlatformEnabled of Type Boolean */
    isPlatformEnabled?: any;
    
    /** Property IsTabStop of Type Boolean */
    isTabStop?: any;
    
    /** Property IsVisible of Type Boolean */
    isVisible?: any;
    
    /** Property Margin of Type Thickness */
    margin?: any;
    
    /** Property MinimumHeightRequest of Type Double */
    minimumHeightRequest?: any;
    
    /** Property MinimumWidthRequest of Type Double */
    minimumWidthRequest?: any;
    
    /** Property Navigation of Type INavigation */
    navigation?: any;
    
    /** Property Opacity of Type Double */
    opacity?: any;
    
    /** Property Parent of Type Element */
    parent?: any;
    
    /** Property Platform of Type IPlatform */
    platform?: any;
    
    /** Property Resources of Type ResourceDictionary */
    resources?: any;
    
    /** Property Rotation of Type Double */
    rotation?: any;
    
    /** Property RotationX of Type Double */
    rotationX?: any;
    
    /** Property RotationY of Type Double */
    rotationY?: any;
    
    /** Property Scale of Type Double */
    scale?: any;
    
    /** Property ScaleX of Type Double */
    scaleX?: any;
    
    /** Property ScaleY of Type Double */
    scaleY?: any;
    
    /** Property Source of Type WebViewSource */
    source?: any;
    
    /** Property Style of Type Style */
    style?: any;
    
    /** Property StyleClass of Type IList`1 */
    styleClass?: any;
    
    /** Property StyleId of Type String */
    styleId?: any;
    
    /** Property TabIndex of Type Int32 */
    tabIndex?: any;
    
    /** Property TranslationX of Type Double */
    translationX?: any;
    
    /** Property TranslationY of Type Double */
    translationY?: any;
    
    /** Property VerticalOptions of Type LayoutOptions */
    verticalOptions?: any;
    
    /** Property Visual of Type IVisual */
    visual?: any;
    
    /** Property WidthRequest of Type Double */
    widthRequest?: any;
        [key: string]: any;
    }
    /** WebView */
    export const WebView = XNode.prepare<IWebView>("WebView|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    
    
    export interface IWebViewSource {
        
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
        [key: string]: any;
    }
    /** WebViewSource */
    export const WebViewSource = XNode.prepare<IWebViewSource>("WebViewSource|clr-namespace:Xamarin.Forms;assembly=Xamarin.Forms.Core;");
    
    