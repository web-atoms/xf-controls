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
    
    export interface IAbsoluteLayoutConstructor {
        (a?: Partial<IAbsoluteLayout>, ... nodes: XNode[]): XNode;
        
    /** Attached Property AbsoluteLayout.LayoutFlags of Type BindableProperty */
    LayoutFlags?(v: any): { "Xamarin.Forms.AbsoluteLayout:LayoutFlags;Xamarin.Forms.Core": any  };
    
    /** Attached Property AbsoluteLayout.LayoutBounds of Type BindableProperty */
    LayoutBounds?(v: any): { "Xamarin.Forms.AbsoluteLayout:LayoutBounds;Xamarin.Forms.Core": any  }
    }
    
    /** AbsoluteLayout */
    export const AbsoluteLayout: IAbsoluteLayoutConstructor = XNode.prepare<IAbsoluteLayout>("Xamarin.Forms.AbsoluteLayout;Xamarin.Forms.Core");
    
    AbsoluteLayout.LayoutFlags = (v) => ({ "Xamarin.Forms.AbsoluteLayout:LayoutFlags;Xamarin.Forms.Core": v  }) ;
    
    AbsoluteLayout.LayoutBounds = (v) => ({ "Xamarin.Forms.AbsoluteLayout:LayoutBounds;Xamarin.Forms.Core": v  }) ;
    
    
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
    
    export interface IActivityIndicatorConstructor {
        (a?: Partial<IActivityIndicator>, ... nodes: XNode[]): XNode;
        
    }
    
    /** ActivityIndicator */
    export const ActivityIndicator: IActivityIndicatorConstructor = XNode.prepare<IActivityIndicator>("Xamarin.Forms.ActivityIndicator;Xamarin.Forms.Core");
    
    
    
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
    
    export interface IApplicationConstructor {
        (a?: Partial<IApplication>, ... nodes: XNode[]): XNode;
        
    }
    
    /** Application */
    export const Application: IApplicationConstructor = XNode.prepare<IApplication>("Xamarin.Forms.Application;Xamarin.Forms.Core");
    
    
    
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
    
    export interface IAppLinkEntryConstructor {
        (a?: Partial<IAppLinkEntry>, ... nodes: XNode[]): XNode;
        
    }
    
    /** AppLinkEntry */
    export const AppLinkEntry: IAppLinkEntryConstructor = XNode.prepare<IAppLinkEntry>("Xamarin.Forms.AppLinkEntry;Xamarin.Forms.Core");
    
    
    
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
    
    export interface IBaseMenuItemConstructor {
        (a?: Partial<IBaseMenuItem>, ... nodes: XNode[]): XNode;
        
    }
    
    /** BaseMenuItem */
    export const BaseMenuItem: IBaseMenuItemConstructor = XNode.prepare<IBaseMenuItem>("Xamarin.Forms.BaseMenuItem;Xamarin.Forms.Core");
    
    
    
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
    
    export interface IBoxViewConstructor {
        (a?: Partial<IBoxView>, ... nodes: XNode[]): XNode;
        
    }
    
    /** BoxView */
    export const BoxView: IBoxViewConstructor = XNode.prepare<IBoxView>("Xamarin.Forms.BoxView;Xamarin.Forms.Core");
    
    
    
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
    
    export interface IButtonConstructor {
        (a?: Partial<IButton>, ... nodes: XNode[]): XNode;
        
    }
    
    /** Button */
    export const Button: IButtonConstructor = XNode.prepare<IButton>("Xamarin.Forms.Button;Xamarin.Forms.Core");
    
    
    
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
    
    export interface ICarouselPageConstructor {
        (a?: Partial<ICarouselPage>, ... nodes: XNode[]): XNode;
        
    }
    
    /** CarouselPage */
    export const CarouselPage: ICarouselPageConstructor = XNode.prepare<ICarouselPage>("Xamarin.Forms.CarouselPage;Xamarin.Forms.Core");
    
    
    
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
    
    export interface ICellConstructor {
        (a?: Partial<ICell>, ... nodes: XNode[]): XNode;
        
    }
    
    /** Cell */
    export const Cell: ICellConstructor = XNode.prepare<ICell>("Xamarin.Forms.Cell;Xamarin.Forms.Core");
    
    
    
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
    
    export interface IEntryCellConstructor {
        (a?: Partial<IEntryCell>, ... nodes: XNode[]): XNode;
        
    }
    
    /** EntryCell */
    export const EntryCell: IEntryCellConstructor = XNode.prepare<IEntryCell>("Xamarin.Forms.EntryCell;Xamarin.Forms.Core");
    
    
    
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
    
    export interface IImageCellConstructor {
        (a?: Partial<IImageCell>, ... nodes: XNode[]): XNode;
        
    }
    
    /** ImageCell */
    export const ImageCell: IImageCellConstructor = XNode.prepare<IImageCell>("Xamarin.Forms.ImageCell;Xamarin.Forms.Core");
    
    
    
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
    
    export interface ISwitchCellConstructor {
        (a?: Partial<ISwitchCell>, ... nodes: XNode[]): XNode;
        
    }
    
    /** SwitchCell */
    export const SwitchCell: ISwitchCellConstructor = XNode.prepare<ISwitchCell>("Xamarin.Forms.SwitchCell;Xamarin.Forms.Core");
    
    
    
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
    
    export interface ITextCellConstructor {
        (a?: Partial<ITextCell>, ... nodes: XNode[]): XNode;
        
    }
    
    /** TextCell */
    export const TextCell: ITextCellConstructor = XNode.prepare<ITextCell>("Xamarin.Forms.TextCell;Xamarin.Forms.Core");
    
    
    
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
    
    export interface IViewCellConstructor {
        (a?: Partial<IViewCell>, ... nodes: XNode[]): XNode;
        
    }
    
    /** ViewCell */
    export const ViewCell: IViewCellConstructor = XNode.prepare<IViewCell>("Xamarin.Forms.ViewCell;Xamarin.Forms.Core");
    
    
    
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
    
    export interface ICheckBoxConstructor {
        (a?: Partial<ICheckBox>, ... nodes: XNode[]): XNode;
        
    }
    
    /** CheckBox */
    export const CheckBox: ICheckBoxConstructor = XNode.prepare<ICheckBox>("Xamarin.Forms.CheckBox;Xamarin.Forms.Core");
    
    
    
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
    
    export interface IClickGestureRecognizerConstructor {
        (a?: Partial<IClickGestureRecognizer>, ... nodes: XNode[]): XNode;
        
    }
    
    /** ClickGestureRecognizer */
    export const ClickGestureRecognizer: IClickGestureRecognizerConstructor = XNode.prepare<IClickGestureRecognizer>("Xamarin.Forms.ClickGestureRecognizer;Xamarin.Forms.Core");
    
    
    
    export interface IColumnDefinition {
        
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property Width of Type GridLength */
    width?: any;
        [key: string]: any;
    }
    
    export interface IColumnDefinitionConstructor {
        (a?: Partial<IColumnDefinition>, ... nodes: XNode[]): XNode;
        
    }
    
    /** ColumnDefinition */
    export const ColumnDefinition: IColumnDefinitionConstructor = XNode.prepare<IColumnDefinition>("Xamarin.Forms.ColumnDefinition;Xamarin.Forms.Core");
    
    
    
    export interface IColumnDefinitionCollection {
        
    /** Property Item of Type ColumnDefinition */
    item?: any;
        [key: string]: any;
    }
    
    export interface IColumnDefinitionCollectionConstructor {
        (a?: Partial<IColumnDefinitionCollection>, ... nodes: XNode[]): XNode;
        
    }
    
    /** ColumnDefinitionCollection */
    export const ColumnDefinitionCollection: IColumnDefinitionCollectionConstructor = XNode.prepare<IColumnDefinitionCollection>("Xamarin.Forms.ColumnDefinitionCollection;Xamarin.Forms.Core");
    
    
    
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
    
    export interface IContentPageConstructor {
        (a?: Partial<IContentPage>, ... nodes: XNode[]): XNode;
        
    }
    
    /** ContentPage */
    export const ContentPage: IContentPageConstructor = XNode.prepare<IContentPage>("Xamarin.Forms.ContentPage;Xamarin.Forms.Core");
    
    
    
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
    
    export interface IContentPresenterConstructor {
        (a?: Partial<IContentPresenter>, ... nodes: XNode[]): XNode;
        
    }
    
    /** ContentPresenter */
    export const ContentPresenter: IContentPresenterConstructor = XNode.prepare<IContentPresenter>("Xamarin.Forms.ContentPresenter;Xamarin.Forms.Core");
    
    
    
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
    
    export interface IContentViewConstructor {
        (a?: Partial<IContentView>, ... nodes: XNode[]): XNode;
        
    }
    
    /** ContentView */
    export const ContentView: IContentViewConstructor = XNode.prepare<IContentView>("Xamarin.Forms.ContentView;Xamarin.Forms.Core");
    
    
    
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
    
    export interface IDatePickerConstructor {
        (a?: Partial<IDatePicker>, ... nodes: XNode[]): XNode;
        
    }
    
    /** DatePicker */
    export const DatePicker: IDatePickerConstructor = XNode.prepare<IDatePicker>("Xamarin.Forms.DatePicker;Xamarin.Forms.Core");
    
    
    
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
    
    export interface IEditorConstructor {
        (a?: Partial<IEditor>, ... nodes: XNode[]): XNode;
        
    }
    
    /** Editor */
    export const Editor: IEditorConstructor = XNode.prepare<IEditor>("Xamarin.Forms.Editor;Xamarin.Forms.Core");
    
    
    
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
    
    export interface IElementConstructor {
        (a?: Partial<IElement>, ... nodes: XNode[]): XNode;
        
    /** Attached Property Element.Menu of Type BindableProperty */
    Menu?(v: any): { "Xamarin.Forms.Element:Menu;Xamarin.Forms.Core": any  }
    }
    
    /** Element */
    export const Element: IElementConstructor = XNode.prepare<IElement>("Xamarin.Forms.Element;Xamarin.Forms.Core");
    
    Element.Menu = (v) => ({ "Xamarin.Forms.Element:Menu;Xamarin.Forms.Core": v  }) ;
    
    
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
    
    export interface IEntryConstructor {
        (a?: Partial<IEntry>, ... nodes: XNode[]): XNode;
        
    }
    
    /** Entry */
    export const Entry: IEntryConstructor = XNode.prepare<IEntry>("Xamarin.Forms.Entry;Xamarin.Forms.Core");
    
    
    
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
    
    export interface IFileImageSourceConstructor {
        (a?: Partial<IFileImageSource>, ... nodes: XNode[]): XNode;
        
    }
    
    /** FileImageSource */
    export const FileImageSource: IFileImageSourceConstructor = XNode.prepare<IFileImageSource>("Xamarin.Forms.FileImageSource;Xamarin.Forms.Core");
    
    
    
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
    
    export interface IFlexLayoutConstructor {
        (a?: Partial<IFlexLayout>, ... nodes: XNode[]): XNode;
        
    /** Attached Property FlexLayout.Order of Type BindableProperty */
    Order?(v: any): { "Xamarin.Forms.FlexLayout:Order;Xamarin.Forms.Core": any  };
    
    /** Attached Property FlexLayout.Grow of Type BindableProperty */
    Grow?(v: any): { "Xamarin.Forms.FlexLayout:Grow;Xamarin.Forms.Core": any  };
    
    /** Attached Property FlexLayout.Shrink of Type BindableProperty */
    Shrink?(v: any): { "Xamarin.Forms.FlexLayout:Shrink;Xamarin.Forms.Core": any  };
    
    /** Attached Property FlexLayout.AlignSelf of Type BindableProperty */
    AlignSelf?(v: any): { "Xamarin.Forms.FlexLayout:AlignSelf;Xamarin.Forms.Core": any  };
    
    /** Attached Property FlexLayout.Basis of Type BindableProperty */
    Basis?(v: any): { "Xamarin.Forms.FlexLayout:Basis;Xamarin.Forms.Core": any  }
    }
    
    /** FlexLayout */
    export const FlexLayout: IFlexLayoutConstructor = XNode.prepare<IFlexLayout>("Xamarin.Forms.FlexLayout;Xamarin.Forms.Core");
    
    FlexLayout.Order = (v) => ({ "Xamarin.Forms.FlexLayout:Order;Xamarin.Forms.Core": v  }) ;
    
    FlexLayout.Grow = (v) => ({ "Xamarin.Forms.FlexLayout:Grow;Xamarin.Forms.Core": v  }) ;
    
    FlexLayout.Shrink = (v) => ({ "Xamarin.Forms.FlexLayout:Shrink;Xamarin.Forms.Core": v  }) ;
    
    FlexLayout.AlignSelf = (v) => ({ "Xamarin.Forms.FlexLayout:AlignSelf;Xamarin.Forms.Core": v  }) ;
    
    FlexLayout.Basis = (v) => ({ "Xamarin.Forms.FlexLayout:Basis;Xamarin.Forms.Core": v  }) ;
    
    
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
    
    export interface IFontImageSourceConstructor {
        (a?: Partial<IFontImageSource>, ... nodes: XNode[]): XNode;
        
    }
    
    /** FontImageSource */
    export const FontImageSource: IFontImageSourceConstructor = XNode.prepare<IFontImageSource>("Xamarin.Forms.FontImageSource;Xamarin.Forms.Core");
    
    
    
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
    
    export interface IFormattedStringConstructor {
        (a?: Partial<IFormattedString>, ... nodes: XNode[]): XNode;
        
    }
    
    /** FormattedString */
    export const FormattedString: IFormattedStringConstructor = XNode.prepare<IFormattedString>("Xamarin.Forms.FormattedString;Xamarin.Forms.Core");
    
    
    
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
    
    export interface IFrameConstructor {
        (a?: Partial<IFrame>, ... nodes: XNode[]): XNode;
        
    }
    
    /** Frame */
    export const Frame: IFrameConstructor = XNode.prepare<IFrame>("Xamarin.Forms.Frame;Xamarin.Forms.Core");
    
    
    
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
    
    export interface IGestureElementConstructor {
        (a?: Partial<IGestureElement>, ... nodes: XNode[]): XNode;
        
    }
    
    /** GestureElement */
    export const GestureElement: IGestureElementConstructor = XNode.prepare<IGestureElement>("Xamarin.Forms.GestureElement;Xamarin.Forms.Core");
    
    
    
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
    
    export interface IGestureRecognizerConstructor {
        (a?: Partial<IGestureRecognizer>, ... nodes: XNode[]): XNode;
        
    }
    
    /** GestureRecognizer */
    export const GestureRecognizer: IGestureRecognizerConstructor = XNode.prepare<IGestureRecognizer>("Xamarin.Forms.GestureRecognizer;Xamarin.Forms.Core");
    
    
    
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
    
    export interface IGridConstructor {
        (a?: Partial<IGrid>, ... nodes: XNode[]): XNode;
        
    /** Attached Property Grid.Row of Type BindableProperty */
    Row?(v: any): { "Xamarin.Forms.Grid:Row;Xamarin.Forms.Core": any  };
    
    /** Attached Property Grid.RowSpan of Type BindableProperty */
    RowSpan?(v: any): { "Xamarin.Forms.Grid:RowSpan;Xamarin.Forms.Core": any  };
    
    /** Attached Property Grid.Column of Type BindableProperty */
    Column?(v: any): { "Xamarin.Forms.Grid:Column;Xamarin.Forms.Core": any  };
    
    /** Attached Property Grid.ColumnSpan of Type BindableProperty */
    ColumnSpan?(v: any): { "Xamarin.Forms.Grid:ColumnSpan;Xamarin.Forms.Core": any  }
    }
    
    /** Grid */
    export const Grid: IGridConstructor = XNode.prepare<IGrid>("Xamarin.Forms.Grid;Xamarin.Forms.Core");
    
    Grid.Row = (v) => ({ "Xamarin.Forms.Grid:Row;Xamarin.Forms.Core": v  }) ;
    
    Grid.RowSpan = (v) => ({ "Xamarin.Forms.Grid:RowSpan;Xamarin.Forms.Core": v  }) ;
    
    Grid.Column = (v) => ({ "Xamarin.Forms.Grid:Column;Xamarin.Forms.Core": v  }) ;
    
    Grid.ColumnSpan = (v) => ({ "Xamarin.Forms.Grid:ColumnSpan;Xamarin.Forms.Core": v  }) ;
    
    
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
    
    export interface IHtmlWebViewSourceConstructor {
        (a?: Partial<IHtmlWebViewSource>, ... nodes: XNode[]): XNode;
        
    }
    
    /** HtmlWebViewSource */
    export const HtmlWebViewSource: IHtmlWebViewSourceConstructor = XNode.prepare<IHtmlWebViewSource>("Xamarin.Forms.HtmlWebViewSource;Xamarin.Forms.Core");
    
    
    
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
    
    export interface IImageConstructor {
        (a?: Partial<IImage>, ... nodes: XNode[]): XNode;
        
    }
    
    /** Image */
    export const Image: IImageConstructor = XNode.prepare<IImage>("Xamarin.Forms.Image;Xamarin.Forms.Core");
    
    
    
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
    
    export interface IImageButtonConstructor {
        (a?: Partial<IImageButton>, ... nodes: XNode[]): XNode;
        
    }
    
    /** ImageButton */
    export const ImageButton: IImageButtonConstructor = XNode.prepare<IImageButton>("Xamarin.Forms.ImageButton;Xamarin.Forms.Core");
    
    
    
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
    
    export interface IImageSourceConstructor {
        (a?: Partial<IImageSource>, ... nodes: XNode[]): XNode;
        
    }
    
    /** ImageSource */
    export const ImageSource: IImageSourceConstructor = XNode.prepare<IImageSource>("Xamarin.Forms.ImageSource;Xamarin.Forms.Core");
    
    
    
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
    
    export interface IIndicatorViewConstructor {
        (a?: Partial<IIndicatorView>, ... nodes: XNode[]): XNode;
        
    /** Attached Property IndicatorView.ItemsSourceBy of Type BindableProperty */
    ItemsSourceBy?(v: any): { "Xamarin.Forms.IndicatorView:ItemsSourceBy;Xamarin.Forms.Core": any  }
    }
    
    /** IndicatorView */
    export const IndicatorView: IIndicatorViewConstructor = XNode.prepare<IIndicatorView>("Xamarin.Forms.IndicatorView;Xamarin.Forms.Core");
    
    IndicatorView.ItemsSourceBy = (v) => ({ "Xamarin.Forms.IndicatorView:ItemsSourceBy;Xamarin.Forms.Core": v  }) ;
    
    
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
    
    export interface IInputViewConstructor {
        (a?: Partial<IInputView>, ... nodes: XNode[]): XNode;
        
    }
    
    /** InputView */
    export const InputView: IInputViewConstructor = XNode.prepare<IInputView>("Xamarin.Forms.InputView;Xamarin.Forms.Core");
    
    
    
    export interface IBehavior {
        
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
        [key: string]: any;
    }
    
    export interface IBehaviorConstructor {
        (a?: Partial<IBehavior>, ... nodes: XNode[]): XNode;
        
    }
    
    /** Behavior */
    export const Behavior: IBehaviorConstructor = XNode.prepare<IBehavior>("Xamarin.Forms.Behavior;Xamarin.Forms.Core");
    
    
    
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
    
    export interface IDataTriggerConstructor {
        (a?: Partial<IDataTrigger>, ... nodes: XNode[]): XNode;
        
    }
    
    /** DataTrigger */
    export const DataTrigger: IDataTriggerConstructor = XNode.prepare<IDataTrigger>("Xamarin.Forms.DataTrigger;Xamarin.Forms.Core");
    
    
    
    export interface IEventTrigger {
        
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property Event of Type String */
    event?: any;
        [key: string]: any;
    }
    
    export interface IEventTriggerConstructor {
        (a?: Partial<IEventTrigger>, ... nodes: XNode[]): XNode;
        
    }
    
    /** EventTrigger */
    export const EventTrigger: IEventTriggerConstructor = XNode.prepare<IEventTrigger>("Xamarin.Forms.EventTrigger;Xamarin.Forms.Core");
    
    
    
    export interface IMultiTrigger {
        
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
        [key: string]: any;
    }
    
    export interface IMultiTriggerConstructor {
        (a?: Partial<IMultiTrigger>, ... nodes: XNode[]): XNode;
        
    }
    
    /** MultiTrigger */
    export const MultiTrigger: IMultiTriggerConstructor = XNode.prepare<IMultiTrigger>("Xamarin.Forms.MultiTrigger;Xamarin.Forms.Core");
    
    
    
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
    
    export interface ITriggerConstructor {
        (a?: Partial<ITrigger>, ... nodes: XNode[]): XNode;
        
    }
    
    /** Trigger */
    export const Trigger: ITriggerConstructor = XNode.prepare<ITrigger>("Xamarin.Forms.Trigger;Xamarin.Forms.Core");
    
    
    
    export interface ITriggerBase {
        
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property IsSealed of Type Boolean */
    isSealed?: any;
        [key: string]: any;
    }
    
    export interface ITriggerBaseConstructor {
        (a?: Partial<ITriggerBase>, ... nodes: XNode[]): XNode;
        
    }
    
    /** TriggerBase */
    export const TriggerBase: ITriggerBaseConstructor = XNode.prepare<ITriggerBase>("Xamarin.Forms.TriggerBase;Xamarin.Forms.Core");
    
    
    
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
    
    export interface ICarouselViewConstructor {
        (a?: Partial<ICarouselView>, ... nodes: XNode[]): XNode;
        
    }
    
    /** CarouselView */
    export const CarouselView: ICarouselViewConstructor = XNode.prepare<ICarouselView>("Xamarin.Forms.CarouselView;Xamarin.Forms.Core");
    
    
    
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
    
    export interface ICollectionViewConstructor {
        (a?: Partial<ICollectionView>, ... nodes: XNode[]): XNode;
        
    }
    
    /** CollectionView */
    export const CollectionView: ICollectionViewConstructor = XNode.prepare<ICollectionView>("Xamarin.Forms.CollectionView;Xamarin.Forms.Core");
    
    
    
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
    
    export interface IGridItemsLayoutConstructor {
        (a?: Partial<IGridItemsLayout>, ... nodes: XNode[]): XNode;
        
    }
    
    /** GridItemsLayout */
    export const GridItemsLayout: IGridItemsLayoutConstructor = XNode.prepare<IGridItemsLayout>("Xamarin.Forms.GridItemsLayout;Xamarin.Forms.Core");
    
    
    
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
    
    export interface IGroupableItemsViewConstructor {
        (a?: Partial<IGroupableItemsView>, ... nodes: XNode[]): XNode;
        
    }
    
    /** GroupableItemsView */
    export const GroupableItemsView: IGroupableItemsViewConstructor = XNode.prepare<IGroupableItemsView>("Xamarin.Forms.GroupableItemsView;Xamarin.Forms.Core");
    
    
    
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
    
    export interface IItemsLayoutConstructor {
        (a?: Partial<IItemsLayout>, ... nodes: XNode[]): XNode;
        
    }
    
    /** ItemsLayout */
    export const ItemsLayout: IItemsLayoutConstructor = XNode.prepare<IItemsLayout>("Xamarin.Forms.ItemsLayout;Xamarin.Forms.Core");
    
    
    
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
    
    export interface IItemsViewConstructor {
        (a?: Partial<IItemsView>, ... nodes: XNode[]): XNode;
        
    }
    
    /** ItemsView */
    export const ItemsView: IItemsViewConstructor = XNode.prepare<IItemsView>("Xamarin.Forms.ItemsView;Xamarin.Forms.Core");
    
    
    
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
    
    export interface ILinearItemsLayoutConstructor {
        (a?: Partial<ILinearItemsLayout>, ... nodes: XNode[]): XNode;
        
    }
    
    /** LinearItemsLayout */
    export const LinearItemsLayout: ILinearItemsLayoutConstructor = XNode.prepare<ILinearItemsLayout>("Xamarin.Forms.LinearItemsLayout;Xamarin.Forms.Core");
    
    
    
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
    
    export interface ISelectableItemsViewConstructor {
        (a?: Partial<ISelectableItemsView>, ... nodes: XNode[]): XNode;
        
    }
    
    /** SelectableItemsView */
    export const SelectableItemsView: ISelectableItemsViewConstructor = XNode.prepare<ISelectableItemsView>("Xamarin.Forms.SelectableItemsView;Xamarin.Forms.Core");
    
    
    
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
    
    export interface IStructuredItemsViewConstructor {
        (a?: Partial<IStructuredItemsView>, ... nodes: XNode[]): XNode;
        
    }
    
    /** StructuredItemsView */
    export const StructuredItemsView: IStructuredItemsViewConstructor = XNode.prepare<IStructuredItemsView>("Xamarin.Forms.StructuredItemsView;Xamarin.Forms.Core");
    
    
    
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
    
    export interface ILabelConstructor {
        (a?: Partial<ILabel>, ... nodes: XNode[]): XNode;
        
    }
    
    /** Label */
    export const Label: ILabelConstructor = XNode.prepare<ILabel>("Xamarin.Forms.Label;Xamarin.Forms.Core");
    
    
    
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
    
    export interface ILayoutConstructor {
        (a?: Partial<ILayout>, ... nodes: XNode[]): XNode;
        
    }
    
    /** Layout */
    export const Layout: ILayoutConstructor = XNode.prepare<ILayout>("Xamarin.Forms.Layout;Xamarin.Forms.Core");
    
    
    
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
    
    export interface IListViewConstructor {
        (a?: Partial<IListView>, ... nodes: XNode[]): XNode;
        
    }
    
    /** ListView */
    export const ListView: IListViewConstructor = XNode.prepare<IListView>("Xamarin.Forms.ListView;Xamarin.Forms.Core");
    
    
    
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
    
    export interface IMasterDetailPageConstructor {
        (a?: Partial<IMasterDetailPage>, ... nodes: XNode[]): XNode;
        
    }
    
    /** MasterDetailPage */
    export const MasterDetailPage: IMasterDetailPageConstructor = XNode.prepare<IMasterDetailPage>("Xamarin.Forms.MasterDetailPage;Xamarin.Forms.Core");
    
    
    
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
    
    export interface IMenuConstructor {
        (a?: Partial<IMenu>, ... nodes: XNode[]): XNode;
        
    }
    
    /** Menu */
    export const Menu: IMenuConstructor = XNode.prepare<IMenu>("Xamarin.Forms.Menu;Xamarin.Forms.Core");
    
    
    
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
    
    export interface IMenuItemConstructor {
        (a?: Partial<IMenuItem>, ... nodes: XNode[]): XNode;
        
    /** Attached Property MenuItem.Accelerator of Type BindableProperty */
    Accelerator?(v: any): { "Xamarin.Forms.MenuItem:Accelerator;Xamarin.Forms.Core": any  }
    }
    
    /** MenuItem */
    export const MenuItem: IMenuItemConstructor = XNode.prepare<IMenuItem>("Xamarin.Forms.MenuItem;Xamarin.Forms.Core");
    
    MenuItem.Accelerator = (v) => ({ "Xamarin.Forms.MenuItem:Accelerator;Xamarin.Forms.Core": v  }) ;
    
    
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
    
    export interface INavigationPageConstructor {
        (a?: Partial<INavigationPage>, ... nodes: XNode[]): XNode;
        
    /** Attached Property NavigationPage.BackButtonTitle of Type BindableProperty */
    BackButtonTitle?(v: any): { "Xamarin.Forms.NavigationPage:BackButtonTitle;Xamarin.Forms.Core": any  };
    
    /** Attached Property NavigationPage.HasNavigationBar of Type BindableProperty */
    HasNavigationBar?(v: any): { "Xamarin.Forms.NavigationPage:HasNavigationBar;Xamarin.Forms.Core": any  };
    
    /** Attached Property NavigationPage.HasBackButton of Type BindableProperty */
    HasBackButton?(v: any): { "Xamarin.Forms.NavigationPage:HasBackButton;Xamarin.Forms.Core": any  };
    
    /** Attached Property NavigationPage.TitleIconImageSource of Type BindableProperty */
    TitleIconImageSource?(v: any): { "Xamarin.Forms.NavigationPage:TitleIconImageSource;Xamarin.Forms.Core": any  };
    
    /** Attached Property NavigationPage.TitleIcon of Type BindableProperty */
    TitleIcon?(v: any): { "Xamarin.Forms.NavigationPage:TitleIcon;Xamarin.Forms.Core": any  };
    
    /** Attached Property NavigationPage.TitleView of Type BindableProperty */
    TitleView?(v: any): { "Xamarin.Forms.NavigationPage:TitleView;Xamarin.Forms.Core": any  }
    }
    
    /** NavigationPage */
    export const NavigationPage: INavigationPageConstructor = XNode.prepare<INavigationPage>("Xamarin.Forms.NavigationPage;Xamarin.Forms.Core");
    
    NavigationPage.BackButtonTitle = (v) => ({ "Xamarin.Forms.NavigationPage:BackButtonTitle;Xamarin.Forms.Core": v  }) ;
    
    NavigationPage.HasNavigationBar = (v) => ({ "Xamarin.Forms.NavigationPage:HasNavigationBar;Xamarin.Forms.Core": v  }) ;
    
    NavigationPage.HasBackButton = (v) => ({ "Xamarin.Forms.NavigationPage:HasBackButton;Xamarin.Forms.Core": v  }) ;
    
    NavigationPage.TitleIconImageSource = (v) => ({ "Xamarin.Forms.NavigationPage:TitleIconImageSource;Xamarin.Forms.Core": v  }) ;
    
    NavigationPage.TitleIcon = (v) => ({ "Xamarin.Forms.NavigationPage:TitleIcon;Xamarin.Forms.Core": v  }) ;
    
    NavigationPage.TitleView = (v) => ({ "Xamarin.Forms.NavigationPage:TitleView;Xamarin.Forms.Core": v  }) ;
    
    
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
    
    export interface IOpenGLViewConstructor {
        (a?: Partial<IOpenGLView>, ... nodes: XNode[]): XNode;
        
    }
    
    /** OpenGLView */
    export const OpenGLView: IOpenGLViewConstructor = XNode.prepare<IOpenGLView>("Xamarin.Forms.OpenGLView;Xamarin.Forms.Core");
    
    
    
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
    
    export interface IPageConstructor {
        (a?: Partial<IPage>, ... nodes: XNode[]): XNode;
        
    }
    
    /** Page */
    export const Page: IPageConstructor = XNode.prepare<IPage>("Xamarin.Forms.Page;Xamarin.Forms.Core");
    
    
    
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
    
    export interface IPanGestureRecognizerConstructor {
        (a?: Partial<IPanGestureRecognizer>, ... nodes: XNode[]): XNode;
        
    }
    
    /** PanGestureRecognizer */
    export const PanGestureRecognizer: IPanGestureRecognizerConstructor = XNode.prepare<IPanGestureRecognizer>("Xamarin.Forms.PanGestureRecognizer;Xamarin.Forms.Core");
    
    
    
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
    
    export interface IPickerConstructor {
        (a?: Partial<IPicker>, ... nodes: XNode[]): XNode;
        
    }
    
    /** Picker */
    export const Picker: IPickerConstructor = XNode.prepare<IPicker>("Xamarin.Forms.Picker;Xamarin.Forms.Core");
    
    
    
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
    
    export interface IPinchGestureRecognizerConstructor {
        (a?: Partial<IPinchGestureRecognizer>, ... nodes: XNode[]): XNode;
        
    }
    
    /** PinchGestureRecognizer */
    export const PinchGestureRecognizer: IPinchGestureRecognizerConstructor = XNode.prepare<IPinchGestureRecognizer>("Xamarin.Forms.PinchGestureRecognizer;Xamarin.Forms.Core");
    
    
    
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
    
    export interface IProgressBarConstructor {
        (a?: Partial<IProgressBar>, ... nodes: XNode[]): XNode;
        
    }
    
    /** ProgressBar */
    export const ProgressBar: IProgressBarConstructor = XNode.prepare<IProgressBar>("Xamarin.Forms.ProgressBar;Xamarin.Forms.Core");
    
    
    
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
    
    export interface IRefreshViewConstructor {
        (a?: Partial<IRefreshView>, ... nodes: XNode[]): XNode;
        
    }
    
    /** RefreshView */
    export const RefreshView: IRefreshViewConstructor = XNode.prepare<IRefreshView>("Xamarin.Forms.RefreshView;Xamarin.Forms.Core");
    
    
    
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
    
    export interface IRelativeLayoutConstructor {
        (a?: Partial<IRelativeLayout>, ... nodes: XNode[]): XNode;
        
    /** Attached Property RelativeLayout.XConstraint of Type BindableProperty */
    XConstraint?(v: any): { "Xamarin.Forms.RelativeLayout:XConstraint;Xamarin.Forms.Core": any  };
    
    /** Attached Property RelativeLayout.YConstraint of Type BindableProperty */
    YConstraint?(v: any): { "Xamarin.Forms.RelativeLayout:YConstraint;Xamarin.Forms.Core": any  };
    
    /** Attached Property RelativeLayout.WidthConstraint of Type BindableProperty */
    WidthConstraint?(v: any): { "Xamarin.Forms.RelativeLayout:WidthConstraint;Xamarin.Forms.Core": any  };
    
    /** Attached Property RelativeLayout.HeightConstraint of Type BindableProperty */
    HeightConstraint?(v: any): { "Xamarin.Forms.RelativeLayout:HeightConstraint;Xamarin.Forms.Core": any  };
    
    /** Attached Property RelativeLayout.BoundsConstraint of Type BindableProperty */
    BoundsConstraint?(v: any): { "Xamarin.Forms.RelativeLayout:BoundsConstraint;Xamarin.Forms.Core": any  }
    }
    
    /** RelativeLayout */
    export const RelativeLayout: IRelativeLayoutConstructor = XNode.prepare<IRelativeLayout>("Xamarin.Forms.RelativeLayout;Xamarin.Forms.Core");
    
    RelativeLayout.XConstraint = (v) => ({ "Xamarin.Forms.RelativeLayout:XConstraint;Xamarin.Forms.Core": v  }) ;
    
    RelativeLayout.YConstraint = (v) => ({ "Xamarin.Forms.RelativeLayout:YConstraint;Xamarin.Forms.Core": v  }) ;
    
    RelativeLayout.WidthConstraint = (v) => ({ "Xamarin.Forms.RelativeLayout:WidthConstraint;Xamarin.Forms.Core": v  }) ;
    
    RelativeLayout.HeightConstraint = (v) => ({ "Xamarin.Forms.RelativeLayout:HeightConstraint;Xamarin.Forms.Core": v  }) ;
    
    RelativeLayout.BoundsConstraint = (v) => ({ "Xamarin.Forms.RelativeLayout:BoundsConstraint;Xamarin.Forms.Core": v  }) ;
    
    
    export interface IRowDefinition {
        
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property Height of Type GridLength */
    height?: any;
        [key: string]: any;
    }
    
    export interface IRowDefinitionConstructor {
        (a?: Partial<IRowDefinition>, ... nodes: XNode[]): XNode;
        
    }
    
    /** RowDefinition */
    export const RowDefinition: IRowDefinitionConstructor = XNode.prepare<IRowDefinition>("Xamarin.Forms.RowDefinition;Xamarin.Forms.Core");
    
    
    
    export interface IRowDefinitionCollection {
        
    /** Property Item of Type RowDefinition */
    item?: any;
        [key: string]: any;
    }
    
    export interface IRowDefinitionCollectionConstructor {
        (a?: Partial<IRowDefinitionCollection>, ... nodes: XNode[]): XNode;
        
    }
    
    /** RowDefinitionCollection */
    export const RowDefinitionCollection: IRowDefinitionCollectionConstructor = XNode.prepare<IRowDefinitionCollection>("Xamarin.Forms.RowDefinitionCollection;Xamarin.Forms.Core");
    
    
    
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
    
    export interface IScrollViewConstructor {
        (a?: Partial<IScrollView>, ... nodes: XNode[]): XNode;
        
    }
    
    /** ScrollView */
    export const ScrollView: IScrollViewConstructor = XNode.prepare<IScrollView>("Xamarin.Forms.ScrollView;Xamarin.Forms.Core");
    
    
    
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
    
    export interface ISearchBarConstructor {
        (a?: Partial<ISearchBar>, ... nodes: XNode[]): XNode;
        
    }
    
    /** SearchBar */
    export const SearchBar: ISearchBarConstructor = XNode.prepare<ISearchBar>("Xamarin.Forms.SearchBar;Xamarin.Forms.Core");
    
    
    
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
    
    export interface IBackButtonBehaviorConstructor {
        (a?: Partial<IBackButtonBehavior>, ... nodes: XNode[]): XNode;
        
    }
    
    /** BackButtonBehavior */
    export const BackButtonBehavior: IBackButtonBehaviorConstructor = XNode.prepare<IBackButtonBehavior>("Xamarin.Forms.BackButtonBehavior;Xamarin.Forms.Core");
    
    
    
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
    
    export interface IBaseShellItemConstructor {
        (a?: Partial<IBaseShellItem>, ... nodes: XNode[]): XNode;
        
    }
    
    /** BaseShellItem */
    export const BaseShellItem: IBaseShellItemConstructor = XNode.prepare<IBaseShellItem>("Xamarin.Forms.BaseShellItem;Xamarin.Forms.Core");
    
    
    
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
    
    export interface INavigableElementConstructor {
        (a?: Partial<INavigableElement>, ... nodes: XNode[]): XNode;
        
    }
    
    /** NavigableElement */
    export const NavigableElement: INavigableElementConstructor = XNode.prepare<INavigableElement>("Xamarin.Forms.NavigableElement;Xamarin.Forms.Core");
    
    
    
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
    
    export interface ISearchHandlerConstructor {
        (a?: Partial<ISearchHandler>, ... nodes: XNode[]): XNode;
        
    }
    
    /** SearchHandler */
    export const SearchHandler: ISearchHandlerConstructor = XNode.prepare<ISearchHandler>("Xamarin.Forms.SearchHandler;Xamarin.Forms.Core");
    
    
    
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
    
    export interface IShellConstructor {
        (a?: Partial<IShell>, ... nodes: XNode[]): XNode;
        
    /** Attached Property Shell.BackButtonBehavior of Type BindableProperty */
    BackButtonBehavior?(v: any): { "Xamarin.Forms.Shell:BackButtonBehavior;Xamarin.Forms.Core": any  };
    
    /** Attached Property Shell.FlyoutBehavior of Type BindableProperty */
    FlyoutBehavior?(v: any): { "Xamarin.Forms.Shell:FlyoutBehavior;Xamarin.Forms.Core": any  };
    
    /** Attached Property Shell.NavBarIsVisible of Type BindableProperty */
    NavBarIsVisible?(v: any): { "Xamarin.Forms.Shell:NavBarIsVisible;Xamarin.Forms.Core": any  };
    
    /** Attached Property Shell.NavBarHasShadow of Type BindableProperty */
    NavBarHasShadow?(v: any): { "Xamarin.Forms.Shell:NavBarHasShadow;Xamarin.Forms.Core": any  };
    
    /** Attached Property Shell.SearchHandler of Type BindableProperty */
    SearchHandler?(v: any): { "Xamarin.Forms.Shell:SearchHandler;Xamarin.Forms.Core": any  };
    
    /** Attached Property Shell.TabBarIsVisible of Type BindableProperty */
    TabBarIsVisible?(v: any): { "Xamarin.Forms.Shell:TabBarIsVisible;Xamarin.Forms.Core": any  };
    
    /** Attached Property Shell.TitleView of Type BindableProperty */
    TitleView?(v: any): { "Xamarin.Forms.Shell:TitleView;Xamarin.Forms.Core": any  };
    
    /** Attached Property Shell.MenuItemTemplate of Type BindableProperty */
    MenuItemTemplate?(v: any): { "Xamarin.Forms.Shell:MenuItemTemplate;Xamarin.Forms.Core": any  };
    
    /** Attached Property Shell.ItemTemplate of Type BindableProperty */
    ItemTemplate?(v: any): { "Xamarin.Forms.Shell:ItemTemplate;Xamarin.Forms.Core": any  };
    
    /** Attached Property Shell.BackgroundColor of Type BindableProperty */
    BackgroundColor?(v: any): { "Xamarin.Forms.Shell:BackgroundColor;Xamarin.Forms.Core": any  };
    
    /** Attached Property Shell.DisabledColor of Type BindableProperty */
    DisabledColor?(v: any): { "Xamarin.Forms.Shell:DisabledColor;Xamarin.Forms.Core": any  };
    
    /** Attached Property Shell.ForegroundColor of Type BindableProperty */
    ForegroundColor?(v: any): { "Xamarin.Forms.Shell:ForegroundColor;Xamarin.Forms.Core": any  };
    
    /** Attached Property Shell.TabBarBackgroundColor of Type BindableProperty */
    TabBarBackgroundColor?(v: any): { "Xamarin.Forms.Shell:TabBarBackgroundColor;Xamarin.Forms.Core": any  };
    
    /** Attached Property Shell.TabBarDisabledColor of Type BindableProperty */
    TabBarDisabledColor?(v: any): { "Xamarin.Forms.Shell:TabBarDisabledColor;Xamarin.Forms.Core": any  };
    
    /** Attached Property Shell.TabBarForegroundColor of Type BindableProperty */
    TabBarForegroundColor?(v: any): { "Xamarin.Forms.Shell:TabBarForegroundColor;Xamarin.Forms.Core": any  };
    
    /** Attached Property Shell.TabBarTitleColor of Type BindableProperty */
    TabBarTitleColor?(v: any): { "Xamarin.Forms.Shell:TabBarTitleColor;Xamarin.Forms.Core": any  };
    
    /** Attached Property Shell.TabBarUnselectedColor of Type BindableProperty */
    TabBarUnselectedColor?(v: any): { "Xamarin.Forms.Shell:TabBarUnselectedColor;Xamarin.Forms.Core": any  };
    
    /** Attached Property Shell.TitleColor of Type BindableProperty */
    TitleColor?(v: any): { "Xamarin.Forms.Shell:TitleColor;Xamarin.Forms.Core": any  };
    
    /** Attached Property Shell.UnselectedColor of Type BindableProperty */
    UnselectedColor?(v: any): { "Xamarin.Forms.Shell:UnselectedColor;Xamarin.Forms.Core": any  }
    }
    
    /** Shell */
    export const Shell: IShellConstructor = XNode.prepare<IShell>("Xamarin.Forms.Shell;Xamarin.Forms.Core");
    
    Shell.BackButtonBehavior = (v) => ({ "Xamarin.Forms.Shell:BackButtonBehavior;Xamarin.Forms.Core": v  }) ;
    
    Shell.FlyoutBehavior = (v) => ({ "Xamarin.Forms.Shell:FlyoutBehavior;Xamarin.Forms.Core": v  }) ;
    
    Shell.NavBarIsVisible = (v) => ({ "Xamarin.Forms.Shell:NavBarIsVisible;Xamarin.Forms.Core": v  }) ;
    
    Shell.NavBarHasShadow = (v) => ({ "Xamarin.Forms.Shell:NavBarHasShadow;Xamarin.Forms.Core": v  }) ;
    
    Shell.SearchHandler = (v) => ({ "Xamarin.Forms.Shell:SearchHandler;Xamarin.Forms.Core": v  }) ;
    
    Shell.TabBarIsVisible = (v) => ({ "Xamarin.Forms.Shell:TabBarIsVisible;Xamarin.Forms.Core": v  }) ;
    
    Shell.TitleView = (v) => ({ "Xamarin.Forms.Shell:TitleView;Xamarin.Forms.Core": v  }) ;
    
    Shell.MenuItemTemplate = (v) => ({ "Xamarin.Forms.Shell:MenuItemTemplate;Xamarin.Forms.Core": v  }) ;
    
    Shell.ItemTemplate = (v) => ({ "Xamarin.Forms.Shell:ItemTemplate;Xamarin.Forms.Core": v  }) ;
    
    Shell.BackgroundColor = (v) => ({ "Xamarin.Forms.Shell:BackgroundColor;Xamarin.Forms.Core": v  }) ;
    
    Shell.DisabledColor = (v) => ({ "Xamarin.Forms.Shell:DisabledColor;Xamarin.Forms.Core": v  }) ;
    
    Shell.ForegroundColor = (v) => ({ "Xamarin.Forms.Shell:ForegroundColor;Xamarin.Forms.Core": v  }) ;
    
    Shell.TabBarBackgroundColor = (v) => ({ "Xamarin.Forms.Shell:TabBarBackgroundColor;Xamarin.Forms.Core": v  }) ;
    
    Shell.TabBarDisabledColor = (v) => ({ "Xamarin.Forms.Shell:TabBarDisabledColor;Xamarin.Forms.Core": v  }) ;
    
    Shell.TabBarForegroundColor = (v) => ({ "Xamarin.Forms.Shell:TabBarForegroundColor;Xamarin.Forms.Core": v  }) ;
    
    Shell.TabBarTitleColor = (v) => ({ "Xamarin.Forms.Shell:TabBarTitleColor;Xamarin.Forms.Core": v  }) ;
    
    Shell.TabBarUnselectedColor = (v) => ({ "Xamarin.Forms.Shell:TabBarUnselectedColor;Xamarin.Forms.Core": v  }) ;
    
    Shell.TitleColor = (v) => ({ "Xamarin.Forms.Shell:TitleColor;Xamarin.Forms.Core": v  }) ;
    
    Shell.UnselectedColor = (v) => ({ "Xamarin.Forms.Shell:UnselectedColor;Xamarin.Forms.Core": v  }) ;
    
    
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
    
    export interface IShellContentConstructor {
        (a?: Partial<IShellContent>, ... nodes: XNode[]): XNode;
        
    }
    
    /** ShellContent */
    export const ShellContent: IShellContentConstructor = XNode.prepare<IShellContent>("Xamarin.Forms.ShellContent;Xamarin.Forms.Core");
    
    
    
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
    
    export interface IShellGroupItemConstructor {
        (a?: Partial<IShellGroupItem>, ... nodes: XNode[]): XNode;
        
    }
    
    /** ShellGroupItem */
    export const ShellGroupItem: IShellGroupItemConstructor = XNode.prepare<IShellGroupItem>("Xamarin.Forms.ShellGroupItem;Xamarin.Forms.Core");
    
    
    
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
    
    export interface IFlyoutItemConstructor {
        (a?: Partial<IFlyoutItem>, ... nodes: XNode[]): XNode;
        
    }
    
    /** FlyoutItem */
    export const FlyoutItem: IFlyoutItemConstructor = XNode.prepare<IFlyoutItem>("Xamarin.Forms.FlyoutItem;Xamarin.Forms.Core");
    
    
    
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
    
    export interface ITabBarConstructor {
        (a?: Partial<ITabBar>, ... nodes: XNode[]): XNode;
        
    }
    
    /** TabBar */
    export const TabBar: ITabBarConstructor = XNode.prepare<ITabBar>("Xamarin.Forms.TabBar;Xamarin.Forms.Core");
    
    
    
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
    
    export interface IShellItemConstructor {
        (a?: Partial<IShellItem>, ... nodes: XNode[]): XNode;
        
    }
    
    /** ShellItem */
    export const ShellItem: IShellItemConstructor = XNode.prepare<IShellItem>("Xamarin.Forms.ShellItem;Xamarin.Forms.Core");
    
    
    
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
    
    export interface ITabConstructor {
        (a?: Partial<ITab>, ... nodes: XNode[]): XNode;
        
    }
    
    /** Tab */
    export const Tab: ITabConstructor = XNode.prepare<ITab>("Xamarin.Forms.Tab;Xamarin.Forms.Core");
    
    
    
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
    
    export interface IShellSectionConstructor {
        (a?: Partial<IShellSection>, ... nodes: XNode[]): XNode;
        
    }
    
    /** ShellSection */
    export const ShellSection: IShellSectionConstructor = XNode.prepare<IShellSection>("Xamarin.Forms.ShellSection;Xamarin.Forms.Core");
    
    
    
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
    
    export interface ISliderConstructor {
        (a?: Partial<ISlider>, ... nodes: XNode[]): XNode;
        
    }
    
    /** Slider */
    export const Slider: ISliderConstructor = XNode.prepare<ISlider>("Xamarin.Forms.Slider;Xamarin.Forms.Core");
    
    
    
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
    
    export interface ISpanConstructor {
        (a?: Partial<ISpan>, ... nodes: XNode[]): XNode;
        
    }
    
    /** Span */
    export const Span: ISpanConstructor = XNode.prepare<ISpan>("Xamarin.Forms.Span;Xamarin.Forms.Core");
    
    
    
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
    
    export interface IStackLayoutConstructor {
        (a?: Partial<IStackLayout>, ... nodes: XNode[]): XNode;
        
    }
    
    /** StackLayout */
    export const StackLayout: IStackLayoutConstructor = XNode.prepare<IStackLayout>("Xamarin.Forms.StackLayout;Xamarin.Forms.Core");
    
    
    
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
    
    export interface IStepperConstructor {
        (a?: Partial<IStepper>, ... nodes: XNode[]): XNode;
        
    }
    
    /** Stepper */
    export const Stepper: IStepperConstructor = XNode.prepare<IStepper>("Xamarin.Forms.Stepper;Xamarin.Forms.Core");
    
    
    
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
    
    export interface IStreamImageSourceConstructor {
        (a?: Partial<IStreamImageSource>, ... nodes: XNode[]): XNode;
        
    }
    
    /** StreamImageSource */
    export const StreamImageSource: IStreamImageSourceConstructor = XNode.prepare<IStreamImageSource>("Xamarin.Forms.StreamImageSource;Xamarin.Forms.Core");
    
    
    
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
    
    export interface ISwipeGestureRecognizerConstructor {
        (a?: Partial<ISwipeGestureRecognizer>, ... nodes: XNode[]): XNode;
        
    }
    
    /** SwipeGestureRecognizer */
    export const SwipeGestureRecognizer: ISwipeGestureRecognizerConstructor = XNode.prepare<ISwipeGestureRecognizer>("Xamarin.Forms.SwipeGestureRecognizer;Xamarin.Forms.Core");
    
    
    
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
    
    export interface ISwipeItemConstructor {
        (a?: Partial<ISwipeItem>, ... nodes: XNode[]): XNode;
        
    }
    
    /** SwipeItem */
    export const SwipeItem: ISwipeItemConstructor = XNode.prepare<ISwipeItem>("Xamarin.Forms.SwipeItem;Xamarin.Forms.Core");
    
    
    
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
    
    export interface ISwipeItemsConstructor {
        (a?: Partial<ISwipeItems>, ... nodes: XNode[]): XNode;
        
    }
    
    /** SwipeItems */
    export const SwipeItems: ISwipeItemsConstructor = XNode.prepare<ISwipeItems>("Xamarin.Forms.SwipeItems;Xamarin.Forms.Core");
    
    
    
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
    
    export interface ISwipeItemViewConstructor {
        (a?: Partial<ISwipeItemView>, ... nodes: XNode[]): XNode;
        
    }
    
    /** SwipeItemView */
    export const SwipeItemView: ISwipeItemViewConstructor = XNode.prepare<ISwipeItemView>("Xamarin.Forms.SwipeItemView;Xamarin.Forms.Core");
    
    
    
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
    
    export interface ISwipeViewConstructor {
        (a?: Partial<ISwipeView>, ... nodes: XNode[]): XNode;
        
    }
    
    /** SwipeView */
    export const SwipeView: ISwipeViewConstructor = XNode.prepare<ISwipeView>("Xamarin.Forms.SwipeView;Xamarin.Forms.Core");
    
    
    
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
    
    export interface ISwitchConstructor {
        (a?: Partial<ISwitch>, ... nodes: XNode[]): XNode;
        
    }
    
    /** Switch */
    export const Switch: ISwitchConstructor = XNode.prepare<ISwitch>("Xamarin.Forms.Switch;Xamarin.Forms.Core");
    
    
    
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
    
    export interface ITabbedPageConstructor {
        (a?: Partial<ITabbedPage>, ... nodes: XNode[]): XNode;
        
    }
    
    /** TabbedPage */
    export const TabbedPage: ITabbedPageConstructor = XNode.prepare<ITabbedPage>("Xamarin.Forms.TabbedPage;Xamarin.Forms.Core");
    
    
    
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
    
    export interface ITableRootConstructor {
        (a?: Partial<ITableRoot>, ... nodes: XNode[]): XNode;
        
    }
    
    /** TableRoot */
    export const TableRoot: ITableRootConstructor = XNode.prepare<ITableRoot>("Xamarin.Forms.TableRoot;Xamarin.Forms.Core");
    
    
    
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
    
    export interface ITableSectionConstructor {
        (a?: Partial<ITableSection>, ... nodes: XNode[]): XNode;
        
    }
    
    /** TableSection */
    export const TableSection: ITableSectionConstructor = XNode.prepare<ITableSection>("Xamarin.Forms.TableSection;Xamarin.Forms.Core");
    
    
    
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
    
    export interface ITableSectionBaseConstructor {
        (a?: Partial<ITableSectionBase>, ... nodes: XNode[]): XNode;
        
    }
    
    /** TableSectionBase */
    export const TableSectionBase: ITableSectionBaseConstructor = XNode.prepare<ITableSectionBase>("Xamarin.Forms.TableSectionBase;Xamarin.Forms.Core");
    
    
    
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
    
    export interface ITableViewConstructor {
        (a?: Partial<ITableView>, ... nodes: XNode[]): XNode;
        
    }
    
    /** TableView */
    export const TableView: ITableViewConstructor = XNode.prepare<ITableView>("Xamarin.Forms.TableView;Xamarin.Forms.Core");
    
    
    
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
    
    export interface ITapGestureRecognizerConstructor {
        (a?: Partial<ITapGestureRecognizer>, ... nodes: XNode[]): XNode;
        
    }
    
    /** TapGestureRecognizer */
    export const TapGestureRecognizer: ITapGestureRecognizerConstructor = XNode.prepare<ITapGestureRecognizer>("Xamarin.Forms.TapGestureRecognizer;Xamarin.Forms.Core");
    
    
    
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
    
    export interface ITemplatedPageConstructor {
        (a?: Partial<ITemplatedPage>, ... nodes: XNode[]): XNode;
        
    }
    
    /** TemplatedPage */
    export const TemplatedPage: ITemplatedPageConstructor = XNode.prepare<ITemplatedPage>("Xamarin.Forms.TemplatedPage;Xamarin.Forms.Core");
    
    
    
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
    
    export interface ITemplatedViewConstructor {
        (a?: Partial<ITemplatedView>, ... nodes: XNode[]): XNode;
        
    }
    
    /** TemplatedView */
    export const TemplatedView: ITemplatedViewConstructor = XNode.prepare<ITemplatedView>("Xamarin.Forms.TemplatedView;Xamarin.Forms.Core");
    
    
    
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
    
    export interface ITimePickerConstructor {
        (a?: Partial<ITimePicker>, ... nodes: XNode[]): XNode;
        
    }
    
    /** TimePicker */
    export const TimePicker: ITimePickerConstructor = XNode.prepare<ITimePicker>("Xamarin.Forms.TimePicker;Xamarin.Forms.Core");
    
    
    
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
    
    export interface IToolbarItemConstructor {
        (a?: Partial<IToolbarItem>, ... nodes: XNode[]): XNode;
        
    }
    
    /** ToolbarItem */
    export const ToolbarItem: IToolbarItemConstructor = XNode.prepare<IToolbarItem>("Xamarin.Forms.ToolbarItem;Xamarin.Forms.Core");
    
    
    
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
    
    export interface IUriImageSourceConstructor {
        (a?: Partial<IUriImageSource>, ... nodes: XNode[]): XNode;
        
    }
    
    /** UriImageSource */
    export const UriImageSource: IUriImageSourceConstructor = XNode.prepare<IUriImageSource>("Xamarin.Forms.UriImageSource;Xamarin.Forms.Core");
    
    
    
    export interface IUrlWebViewSource {
        
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
    
    /** Property Url of Type String */
    url?: any;
        [key: string]: any;
    }
    
    export interface IUrlWebViewSourceConstructor {
        (a?: Partial<IUrlWebViewSource>, ... nodes: XNode[]): XNode;
        
    }
    
    /** UrlWebViewSource */
    export const UrlWebViewSource: IUrlWebViewSourceConstructor = XNode.prepare<IUrlWebViewSource>("Xamarin.Forms.UrlWebViewSource;Xamarin.Forms.Core");
    
    
    
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
    
    export interface IViewConstructor {
        (a?: Partial<IView>, ... nodes: XNode[]): XNode;
        
    }
    
    /** View */
    export const View: IViewConstructor = XNode.prepare<IView>("Xamarin.Forms.View;Xamarin.Forms.Core");
    
    
    
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
    
    export interface IVisualElementConstructor {
        (a?: Partial<IVisualElement>, ... nodes: XNode[]): XNode;
        
    }
    
    /** VisualElement */
    export const VisualElement: IVisualElementConstructor = XNode.prepare<IVisualElement>("Xamarin.Forms.VisualElement;Xamarin.Forms.Core");
    
    
    
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
    
    export interface IWebViewConstructor {
        (a?: Partial<IWebView>, ... nodes: XNode[]): XNode;
        
    }
    
    /** WebView */
    export const WebView: IWebViewConstructor = XNode.prepare<IWebView>("Xamarin.Forms.WebView;Xamarin.Forms.Core");
    
    
    
    export interface IWebViewSource {
        
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
        [key: string]: any;
    }
    
    export interface IWebViewSourceConstructor {
        (a?: Partial<IWebViewSource>, ... nodes: XNode[]): XNode;
        
    }
    
    /** WebViewSource */
    export const WebViewSource: IWebViewSourceConstructor = XNode.prepare<IWebViewSource>("Xamarin.Forms.WebViewSource;Xamarin.Forms.Core");
    
    