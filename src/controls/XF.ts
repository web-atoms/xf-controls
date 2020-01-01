//tslint:disable
import XNode from "@web-atoms/core/dist/core/XNode";

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
        
    /** Property AbsoluteLayout.Behaviors of Type Xamarin.Forms.Behavior */
    Behaviors?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property AbsoluteLayout.Children of Type Xamarin.Forms.View */
    Children?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property AbsoluteLayout.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property AbsoluteLayout.GestureRecognizers of Type Xamarin.Forms.IGestureRecognizer */
    GestureRecognizers?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property AbsoluteLayout.Resources of Type System.Collections.Generic.KeyValuePair`2[System.String,System.Object] */
    Resources?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property AbsoluteLayout.StyleClass of Type System.String */
    StyleClass?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property AbsoluteLayout.Triggers of Type Xamarin.Forms.TriggerBase */
    Triggers?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** AbsoluteLayout */
    export const AbsoluteLayout: IAbsoluteLayoutConstructor = XNode.prepare<IAbsoluteLayout>("Xamarin.Forms.AbsoluteLayout;Xamarin.Forms.Core");
    
    AbsoluteLayout.LayoutFlags = (v) => ({ "Xamarin.Forms.AbsoluteLayout:LayoutFlags;Xamarin.Forms.Core": v  }) ;
    
    AbsoluteLayout.LayoutBounds = (v) => ({ "Xamarin.Forms.AbsoluteLayout:LayoutBounds;Xamarin.Forms.Core": v  }) ;
    
    AbsoluteLayout.Behaviors = XNode.prepare("Xamarin.Forms.AbsoluteLayout:Behaviors;Xamarin.Forms.Core", true, false);
    
    AbsoluteLayout.Children = XNode.prepare("Xamarin.Forms.AbsoluteLayout:Children;Xamarin.Forms.Core", true, false);
    
    AbsoluteLayout.Effects = XNode.prepare("Xamarin.Forms.AbsoluteLayout:Effects;Xamarin.Forms.Core", true, false);
    
    AbsoluteLayout.GestureRecognizers = XNode.prepare("Xamarin.Forms.AbsoluteLayout:GestureRecognizers;Xamarin.Forms.Core", true, false);
    
    AbsoluteLayout.Resources = XNode.prepare("Xamarin.Forms.AbsoluteLayout:Resources;Xamarin.Forms.Core", true, false);
    
    AbsoluteLayout.StyleClass = XNode.prepare("Xamarin.Forms.AbsoluteLayout:StyleClass;Xamarin.Forms.Core", true, false);
    
    AbsoluteLayout.Triggers = XNode.prepare("Xamarin.Forms.AbsoluteLayout:Triggers;Xamarin.Forms.Core", true, false);
    
    
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
        
        
    /** Property ActivityIndicator.Behaviors of Type Xamarin.Forms.Behavior */
    Behaviors?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property ActivityIndicator.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property ActivityIndicator.GestureRecognizers of Type Xamarin.Forms.IGestureRecognizer */
    GestureRecognizers?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property ActivityIndicator.Resources of Type System.Collections.Generic.KeyValuePair`2[System.String,System.Object] */
    Resources?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property ActivityIndicator.StyleClass of Type System.String */
    StyleClass?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property ActivityIndicator.Triggers of Type Xamarin.Forms.TriggerBase */
    Triggers?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** ActivityIndicator */
    export const ActivityIndicator: IActivityIndicatorConstructor = XNode.prepare<IActivityIndicator>("Xamarin.Forms.ActivityIndicator;Xamarin.Forms.Core");
    
    
    ActivityIndicator.Behaviors = XNode.prepare("Xamarin.Forms.ActivityIndicator:Behaviors;Xamarin.Forms.Core", true, false);
    
    ActivityIndicator.Effects = XNode.prepare("Xamarin.Forms.ActivityIndicator:Effects;Xamarin.Forms.Core", true, false);
    
    ActivityIndicator.GestureRecognizers = XNode.prepare("Xamarin.Forms.ActivityIndicator:GestureRecognizers;Xamarin.Forms.Core", true, false);
    
    ActivityIndicator.Resources = XNode.prepare("Xamarin.Forms.ActivityIndicator:Resources;Xamarin.Forms.Core", true, false);
    
    ActivityIndicator.StyleClass = XNode.prepare("Xamarin.Forms.ActivityIndicator:StyleClass;Xamarin.Forms.Core", true, false);
    
    ActivityIndicator.Triggers = XNode.prepare("Xamarin.Forms.ActivityIndicator:Triggers;Xamarin.Forms.Core", true, false);
    
    
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
        
        
    /** Property Application.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Application.MainPage of Type Xamarin.Forms.Page */
    MainPage?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Application.Properties of Type System.Collections.Generic.KeyValuePair`2[System.String,System.Object] */
    Properties?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Application.Resources of Type System.Collections.Generic.KeyValuePair`2[System.String,System.Object] */
    Resources?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** Application */
    export const Application: IApplicationConstructor = XNode.prepare<IApplication>("Xamarin.Forms.Application;Xamarin.Forms.Core");
    
    
    Application.Effects = XNode.prepare("Xamarin.Forms.Application:Effects;Xamarin.Forms.Core", true, false);
    
    Application.MainPage = XNode.prepare("Xamarin.Forms.Application:MainPage;Xamarin.Forms.Core", true, true);
    
    Application.Properties = XNode.prepare("Xamarin.Forms.Application:Properties;Xamarin.Forms.Core", true, false);
    
    Application.Resources = XNode.prepare("Xamarin.Forms.Application:Resources;Xamarin.Forms.Core", true, false);
    
    
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
        
        
    /** Property AppLinkEntry.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property AppLinkEntry.KeyValues of Type System.Collections.Generic.KeyValuePair`2[System.String,System.String] */
    KeyValues?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property AppLinkEntry.Thumbnail of Type Xamarin.Forms.ImageSource */
    Thumbnail?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** AppLinkEntry */
    export const AppLinkEntry: IAppLinkEntryConstructor = XNode.prepare<IAppLinkEntry>("Xamarin.Forms.AppLinkEntry;Xamarin.Forms.Core");
    
    
    AppLinkEntry.Effects = XNode.prepare("Xamarin.Forms.AppLinkEntry:Effects;Xamarin.Forms.Core", true, false);
    
    AppLinkEntry.KeyValues = XNode.prepare("Xamarin.Forms.AppLinkEntry:KeyValues;Xamarin.Forms.Core", true, false);
    
    AppLinkEntry.Thumbnail = XNode.prepare("Xamarin.Forms.AppLinkEntry:Thumbnail;Xamarin.Forms.Core", true, true);
    
    
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
        
        
    /** Property BaseMenuItem.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** BaseMenuItem */
    export const BaseMenuItem: IBaseMenuItemConstructor = XNode.prepare<IBaseMenuItem>("Xamarin.Forms.BaseMenuItem;Xamarin.Forms.Core");
    
    
    BaseMenuItem.Effects = XNode.prepare("Xamarin.Forms.BaseMenuItem:Effects;Xamarin.Forms.Core", true, false);
    
    
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
        
        
    /** Property BoxView.Behaviors of Type Xamarin.Forms.Behavior */
    Behaviors?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property BoxView.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property BoxView.GestureRecognizers of Type Xamarin.Forms.IGestureRecognizer */
    GestureRecognizers?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property BoxView.Resources of Type System.Collections.Generic.KeyValuePair`2[System.String,System.Object] */
    Resources?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property BoxView.StyleClass of Type System.String */
    StyleClass?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property BoxView.Triggers of Type Xamarin.Forms.TriggerBase */
    Triggers?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** BoxView */
    export const BoxView: IBoxViewConstructor = XNode.prepare<IBoxView>("Xamarin.Forms.BoxView;Xamarin.Forms.Core");
    
    
    BoxView.Behaviors = XNode.prepare("Xamarin.Forms.BoxView:Behaviors;Xamarin.Forms.Core", true, false);
    
    BoxView.Effects = XNode.prepare("Xamarin.Forms.BoxView:Effects;Xamarin.Forms.Core", true, false);
    
    BoxView.GestureRecognizers = XNode.prepare("Xamarin.Forms.BoxView:GestureRecognizers;Xamarin.Forms.Core", true, false);
    
    BoxView.Resources = XNode.prepare("Xamarin.Forms.BoxView:Resources;Xamarin.Forms.Core", true, false);
    
    BoxView.StyleClass = XNode.prepare("Xamarin.Forms.BoxView:StyleClass;Xamarin.Forms.Core", true, false);
    
    BoxView.Triggers = XNode.prepare("Xamarin.Forms.BoxView:Triggers;Xamarin.Forms.Core", true, false);
    
    
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
        
        
    /** Property Button.Behaviors of Type Xamarin.Forms.Behavior */
    Behaviors?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Button.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Button.GestureRecognizers of Type Xamarin.Forms.IGestureRecognizer */
    GestureRecognizers?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Button.ImageSource of Type Xamarin.Forms.ImageSource */
    ImageSource?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Button.Resources of Type System.Collections.Generic.KeyValuePair`2[System.String,System.Object] */
    Resources?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Button.StyleClass of Type System.String */
    StyleClass?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Button.Triggers of Type Xamarin.Forms.TriggerBase */
    Triggers?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** Button */
    export const Button: IButtonConstructor = XNode.prepare<IButton>("Xamarin.Forms.Button;Xamarin.Forms.Core");
    
    
    Button.Behaviors = XNode.prepare("Xamarin.Forms.Button:Behaviors;Xamarin.Forms.Core", true, false);
    
    Button.Effects = XNode.prepare("Xamarin.Forms.Button:Effects;Xamarin.Forms.Core", true, false);
    
    Button.GestureRecognizers = XNode.prepare("Xamarin.Forms.Button:GestureRecognizers;Xamarin.Forms.Core", true, false);
    
    Button.ImageSource = XNode.prepare("Xamarin.Forms.Button:ImageSource;Xamarin.Forms.Core", true, true);
    
    Button.Resources = XNode.prepare("Xamarin.Forms.Button:Resources;Xamarin.Forms.Core", true, false);
    
    Button.StyleClass = XNode.prepare("Xamarin.Forms.Button:StyleClass;Xamarin.Forms.Core", true, false);
    
    Button.Triggers = XNode.prepare("Xamarin.Forms.Button:Triggers;Xamarin.Forms.Core", true, false);
    
    
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
        
        
    /** Property CarouselPage.BackgroundImageSource of Type Xamarin.Forms.ImageSource */
    BackgroundImageSource?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property CarouselPage.Behaviors of Type Xamarin.Forms.Behavior */
    Behaviors?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property CarouselPage.Children of Type Xamarin.Forms.ContentPage */
    Children?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property CarouselPage.CurrentPage of Type Xamarin.Forms.ContentPage */
    CurrentPage?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property CarouselPage.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property CarouselPage.IconImageSource of Type Xamarin.Forms.ImageSource */
    IconImageSource?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property CarouselPage.ItemTemplate of Type Xamarin.Forms.DataTemplate */
    ItemTemplate?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property CarouselPage.Resources of Type System.Collections.Generic.KeyValuePair`2[System.String,System.Object] */
    Resources?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property CarouselPage.StyleClass of Type System.String */
    StyleClass?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property CarouselPage.ToolbarItems of Type Xamarin.Forms.ToolbarItem */
    ToolbarItems?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property CarouselPage.Triggers of Type Xamarin.Forms.TriggerBase */
    Triggers?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** CarouselPage */
    export const CarouselPage: ICarouselPageConstructor = XNode.prepare<ICarouselPage>("Xamarin.Forms.CarouselPage;Xamarin.Forms.Core");
    
    
    CarouselPage.BackgroundImageSource = XNode.prepare("Xamarin.Forms.CarouselPage:BackgroundImageSource;Xamarin.Forms.Core", true, true);
    
    CarouselPage.Behaviors = XNode.prepare("Xamarin.Forms.CarouselPage:Behaviors;Xamarin.Forms.Core", true, false);
    
    CarouselPage.Children = XNode.prepare("Xamarin.Forms.CarouselPage:Children;Xamarin.Forms.Core", true, false);
    
    CarouselPage.CurrentPage = XNode.prepare("Xamarin.Forms.CarouselPage:CurrentPage;Xamarin.Forms.Core", true, true);
    
    CarouselPage.Effects = XNode.prepare("Xamarin.Forms.CarouselPage:Effects;Xamarin.Forms.Core", true, false);
    
    CarouselPage.IconImageSource = XNode.prepare("Xamarin.Forms.CarouselPage:IconImageSource;Xamarin.Forms.Core", true, true);
    
    CarouselPage.ItemTemplate = XNode.prepare("Xamarin.Forms.CarouselPage:ItemTemplate;Xamarin.Forms.Core", true, false);
    
    CarouselPage.Resources = XNode.prepare("Xamarin.Forms.CarouselPage:Resources;Xamarin.Forms.Core", true, false);
    
    CarouselPage.StyleClass = XNode.prepare("Xamarin.Forms.CarouselPage:StyleClass;Xamarin.Forms.Core", true, false);
    
    CarouselPage.ToolbarItems = XNode.prepare("Xamarin.Forms.CarouselPage:ToolbarItems;Xamarin.Forms.Core", true, false);
    
    CarouselPage.Triggers = XNode.prepare("Xamarin.Forms.CarouselPage:Triggers;Xamarin.Forms.Core", true, false);
    
    
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
        
        
    /** Property Cell.ContextActions of Type Xamarin.Forms.MenuItem */
    ContextActions?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Cell.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** Cell */
    export const Cell: ICellConstructor = XNode.prepare<ICell>("Xamarin.Forms.Cell;Xamarin.Forms.Core");
    
    
    Cell.ContextActions = XNode.prepare("Xamarin.Forms.Cell:ContextActions;Xamarin.Forms.Core", true, false);
    
    Cell.Effects = XNode.prepare("Xamarin.Forms.Cell:Effects;Xamarin.Forms.Core", true, false);
    
    
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
        
        
    /** Property EntryCell.ContextActions of Type Xamarin.Forms.MenuItem */
    ContextActions?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property EntryCell.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** EntryCell */
    export const EntryCell: IEntryCellConstructor = XNode.prepare<IEntryCell>("Xamarin.Forms.EntryCell;Xamarin.Forms.Core");
    
    
    EntryCell.ContextActions = XNode.prepare("Xamarin.Forms.EntryCell:ContextActions;Xamarin.Forms.Core", true, false);
    
    EntryCell.Effects = XNode.prepare("Xamarin.Forms.EntryCell:Effects;Xamarin.Forms.Core", true, false);
    
    
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
        
        
    /** Property ImageCell.ContextActions of Type Xamarin.Forms.MenuItem */
    ContextActions?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property ImageCell.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property ImageCell.ImageSource of Type Xamarin.Forms.ImageSource */
    ImageSource?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** ImageCell */
    export const ImageCell: IImageCellConstructor = XNode.prepare<IImageCell>("Xamarin.Forms.ImageCell;Xamarin.Forms.Core");
    
    
    ImageCell.ContextActions = XNode.prepare("Xamarin.Forms.ImageCell:ContextActions;Xamarin.Forms.Core", true, false);
    
    ImageCell.Effects = XNode.prepare("Xamarin.Forms.ImageCell:Effects;Xamarin.Forms.Core", true, false);
    
    ImageCell.ImageSource = XNode.prepare("Xamarin.Forms.ImageCell:ImageSource;Xamarin.Forms.Core", true, true);
    
    
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
        
        
    /** Property SwitchCell.ContextActions of Type Xamarin.Forms.MenuItem */
    ContextActions?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property SwitchCell.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** SwitchCell */
    export const SwitchCell: ISwitchCellConstructor = XNode.prepare<ISwitchCell>("Xamarin.Forms.SwitchCell;Xamarin.Forms.Core");
    
    
    SwitchCell.ContextActions = XNode.prepare("Xamarin.Forms.SwitchCell:ContextActions;Xamarin.Forms.Core", true, false);
    
    SwitchCell.Effects = XNode.prepare("Xamarin.Forms.SwitchCell:Effects;Xamarin.Forms.Core", true, false);
    
    
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
        
        
    /** Property TextCell.ContextActions of Type Xamarin.Forms.MenuItem */
    ContextActions?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property TextCell.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** TextCell */
    export const TextCell: ITextCellConstructor = XNode.prepare<ITextCell>("Xamarin.Forms.TextCell;Xamarin.Forms.Core");
    
    
    TextCell.ContextActions = XNode.prepare("Xamarin.Forms.TextCell:ContextActions;Xamarin.Forms.Core", true, false);
    
    TextCell.Effects = XNode.prepare("Xamarin.Forms.TextCell:Effects;Xamarin.Forms.Core", true, false);
    
    
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
        
        
    /** Property ViewCell.ContextActions of Type Xamarin.Forms.MenuItem */
    ContextActions?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property ViewCell.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property ViewCell.View of Type Xamarin.Forms.View */
    View?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** ViewCell */
    export const ViewCell: IViewCellConstructor = XNode.prepare<IViewCell>("Xamarin.Forms.ViewCell;Xamarin.Forms.Core");
    
    
    ViewCell.ContextActions = XNode.prepare("Xamarin.Forms.ViewCell:ContextActions;Xamarin.Forms.Core", true, false);
    
    ViewCell.Effects = XNode.prepare("Xamarin.Forms.ViewCell:Effects;Xamarin.Forms.Core", true, false);
    
    ViewCell.View = XNode.prepare("Xamarin.Forms.ViewCell:View;Xamarin.Forms.Core", true, true);
    
    
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
        
        
    /** Property CheckBox.Behaviors of Type Xamarin.Forms.Behavior */
    Behaviors?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property CheckBox.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property CheckBox.GestureRecognizers of Type Xamarin.Forms.IGestureRecognizer */
    GestureRecognizers?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property CheckBox.Resources of Type System.Collections.Generic.KeyValuePair`2[System.String,System.Object] */
    Resources?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property CheckBox.StyleClass of Type System.String */
    StyleClass?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property CheckBox.Triggers of Type Xamarin.Forms.TriggerBase */
    Triggers?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** CheckBox */
    export const CheckBox: ICheckBoxConstructor = XNode.prepare<ICheckBox>("Xamarin.Forms.CheckBox;Xamarin.Forms.Core");
    
    
    CheckBox.Behaviors = XNode.prepare("Xamarin.Forms.CheckBox:Behaviors;Xamarin.Forms.Core", true, false);
    
    CheckBox.Effects = XNode.prepare("Xamarin.Forms.CheckBox:Effects;Xamarin.Forms.Core", true, false);
    
    CheckBox.GestureRecognizers = XNode.prepare("Xamarin.Forms.CheckBox:GestureRecognizers;Xamarin.Forms.Core", true, false);
    
    CheckBox.Resources = XNode.prepare("Xamarin.Forms.CheckBox:Resources;Xamarin.Forms.Core", true, false);
    
    CheckBox.StyleClass = XNode.prepare("Xamarin.Forms.CheckBox:StyleClass;Xamarin.Forms.Core", true, false);
    
    CheckBox.Triggers = XNode.prepare("Xamarin.Forms.CheckBox:Triggers;Xamarin.Forms.Core", true, false);
    
    
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
        
        
    /** Property ClickGestureRecognizer.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** ClickGestureRecognizer */
    export const ClickGestureRecognizer: IClickGestureRecognizerConstructor = XNode.prepare<IClickGestureRecognizer>("Xamarin.Forms.ClickGestureRecognizer;Xamarin.Forms.Core");
    
    
    ClickGestureRecognizer.Effects = XNode.prepare("Xamarin.Forms.ClickGestureRecognizer:Effects;Xamarin.Forms.Core", true, false);
    
    
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
        
        
    /** Property ContentPage.BackgroundImageSource of Type Xamarin.Forms.ImageSource */
    BackgroundImageSource?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property ContentPage.Behaviors of Type Xamarin.Forms.Behavior */
    Behaviors?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property ContentPage.Content of Type Xamarin.Forms.View */
    Content?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property ContentPage.ControlTemplate of Type Xamarin.Forms.ControlTemplate */
    ControlTemplate?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property ContentPage.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property ContentPage.IconImageSource of Type Xamarin.Forms.ImageSource */
    IconImageSource?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property ContentPage.Resources of Type System.Collections.Generic.KeyValuePair`2[System.String,System.Object] */
    Resources?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property ContentPage.StyleClass of Type System.String */
    StyleClass?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property ContentPage.ToolbarItems of Type Xamarin.Forms.ToolbarItem */
    ToolbarItems?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property ContentPage.Triggers of Type Xamarin.Forms.TriggerBase */
    Triggers?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** ContentPage */
    export const ContentPage: IContentPageConstructor = XNode.prepare<IContentPage>("Xamarin.Forms.ContentPage;Xamarin.Forms.Core");
    
    
    ContentPage.BackgroundImageSource = XNode.prepare("Xamarin.Forms.ContentPage:BackgroundImageSource;Xamarin.Forms.Core", true, true);
    
    ContentPage.Behaviors = XNode.prepare("Xamarin.Forms.ContentPage:Behaviors;Xamarin.Forms.Core", true, false);
    
    ContentPage.Content = XNode.prepare("Xamarin.Forms.ContentPage:Content;Xamarin.Forms.Core", true, true);
    
    ContentPage.ControlTemplate = XNode.prepare("Xamarin.Forms.ContentPage:ControlTemplate;Xamarin.Forms.Core", true, false);
    
    ContentPage.Effects = XNode.prepare("Xamarin.Forms.ContentPage:Effects;Xamarin.Forms.Core", true, false);
    
    ContentPage.IconImageSource = XNode.prepare("Xamarin.Forms.ContentPage:IconImageSource;Xamarin.Forms.Core", true, true);
    
    ContentPage.Resources = XNode.prepare("Xamarin.Forms.ContentPage:Resources;Xamarin.Forms.Core", true, false);
    
    ContentPage.StyleClass = XNode.prepare("Xamarin.Forms.ContentPage:StyleClass;Xamarin.Forms.Core", true, false);
    
    ContentPage.ToolbarItems = XNode.prepare("Xamarin.Forms.ContentPage:ToolbarItems;Xamarin.Forms.Core", true, false);
    
    ContentPage.Triggers = XNode.prepare("Xamarin.Forms.ContentPage:Triggers;Xamarin.Forms.Core", true, false);
    
    
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
        
        
    /** Property ContentPresenter.Behaviors of Type Xamarin.Forms.Behavior */
    Behaviors?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property ContentPresenter.Content of Type Xamarin.Forms.View */
    Content?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property ContentPresenter.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property ContentPresenter.GestureRecognizers of Type Xamarin.Forms.IGestureRecognizer */
    GestureRecognizers?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property ContentPresenter.Resources of Type System.Collections.Generic.KeyValuePair`2[System.String,System.Object] */
    Resources?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property ContentPresenter.StyleClass of Type System.String */
    StyleClass?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property ContentPresenter.Triggers of Type Xamarin.Forms.TriggerBase */
    Triggers?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** ContentPresenter */
    export const ContentPresenter: IContentPresenterConstructor = XNode.prepare<IContentPresenter>("Xamarin.Forms.ContentPresenter;Xamarin.Forms.Core");
    
    
    ContentPresenter.Behaviors = XNode.prepare("Xamarin.Forms.ContentPresenter:Behaviors;Xamarin.Forms.Core", true, false);
    
    ContentPresenter.Content = XNode.prepare("Xamarin.Forms.ContentPresenter:Content;Xamarin.Forms.Core", true, true);
    
    ContentPresenter.Effects = XNode.prepare("Xamarin.Forms.ContentPresenter:Effects;Xamarin.Forms.Core", true, false);
    
    ContentPresenter.GestureRecognizers = XNode.prepare("Xamarin.Forms.ContentPresenter:GestureRecognizers;Xamarin.Forms.Core", true, false);
    
    ContentPresenter.Resources = XNode.prepare("Xamarin.Forms.ContentPresenter:Resources;Xamarin.Forms.Core", true, false);
    
    ContentPresenter.StyleClass = XNode.prepare("Xamarin.Forms.ContentPresenter:StyleClass;Xamarin.Forms.Core", true, false);
    
    ContentPresenter.Triggers = XNode.prepare("Xamarin.Forms.ContentPresenter:Triggers;Xamarin.Forms.Core", true, false);
    
    
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
        
        
    /** Property ContentView.Behaviors of Type Xamarin.Forms.Behavior */
    Behaviors?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property ContentView.Content of Type Xamarin.Forms.View */
    Content?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property ContentView.ControlTemplate of Type Xamarin.Forms.ControlTemplate */
    ControlTemplate?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property ContentView.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property ContentView.GestureRecognizers of Type Xamarin.Forms.IGestureRecognizer */
    GestureRecognizers?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property ContentView.Resources of Type System.Collections.Generic.KeyValuePair`2[System.String,System.Object] */
    Resources?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property ContentView.StyleClass of Type System.String */
    StyleClass?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property ContentView.Triggers of Type Xamarin.Forms.TriggerBase */
    Triggers?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** ContentView */
    export const ContentView: IContentViewConstructor = XNode.prepare<IContentView>("Xamarin.Forms.ContentView;Xamarin.Forms.Core");
    
    
    ContentView.Behaviors = XNode.prepare("Xamarin.Forms.ContentView:Behaviors;Xamarin.Forms.Core", true, false);
    
    ContentView.Content = XNode.prepare("Xamarin.Forms.ContentView:Content;Xamarin.Forms.Core", true, true);
    
    ContentView.ControlTemplate = XNode.prepare("Xamarin.Forms.ContentView:ControlTemplate;Xamarin.Forms.Core", true, false);
    
    ContentView.Effects = XNode.prepare("Xamarin.Forms.ContentView:Effects;Xamarin.Forms.Core", true, false);
    
    ContentView.GestureRecognizers = XNode.prepare("Xamarin.Forms.ContentView:GestureRecognizers;Xamarin.Forms.Core", true, false);
    
    ContentView.Resources = XNode.prepare("Xamarin.Forms.ContentView:Resources;Xamarin.Forms.Core", true, false);
    
    ContentView.StyleClass = XNode.prepare("Xamarin.Forms.ContentView:StyleClass;Xamarin.Forms.Core", true, false);
    
    ContentView.Triggers = XNode.prepare("Xamarin.Forms.ContentView:Triggers;Xamarin.Forms.Core", true, false);
    
    
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
        
        
    /** Property DatePicker.Behaviors of Type Xamarin.Forms.Behavior */
    Behaviors?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property DatePicker.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property DatePicker.GestureRecognizers of Type Xamarin.Forms.IGestureRecognizer */
    GestureRecognizers?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property DatePicker.Resources of Type System.Collections.Generic.KeyValuePair`2[System.String,System.Object] */
    Resources?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property DatePicker.StyleClass of Type System.String */
    StyleClass?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property DatePicker.Triggers of Type Xamarin.Forms.TriggerBase */
    Triggers?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** DatePicker */
    export const DatePicker: IDatePickerConstructor = XNode.prepare<IDatePicker>("Xamarin.Forms.DatePicker;Xamarin.Forms.Core");
    
    
    DatePicker.Behaviors = XNode.prepare("Xamarin.Forms.DatePicker:Behaviors;Xamarin.Forms.Core", true, false);
    
    DatePicker.Effects = XNode.prepare("Xamarin.Forms.DatePicker:Effects;Xamarin.Forms.Core", true, false);
    
    DatePicker.GestureRecognizers = XNode.prepare("Xamarin.Forms.DatePicker:GestureRecognizers;Xamarin.Forms.Core", true, false);
    
    DatePicker.Resources = XNode.prepare("Xamarin.Forms.DatePicker:Resources;Xamarin.Forms.Core", true, false);
    
    DatePicker.StyleClass = XNode.prepare("Xamarin.Forms.DatePicker:StyleClass;Xamarin.Forms.Core", true, false);
    
    DatePicker.Triggers = XNode.prepare("Xamarin.Forms.DatePicker:Triggers;Xamarin.Forms.Core", true, false);
    
    
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
        
        
    /** Property Editor.Behaviors of Type Xamarin.Forms.Behavior */
    Behaviors?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Editor.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Editor.GestureRecognizers of Type Xamarin.Forms.IGestureRecognizer */
    GestureRecognizers?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Editor.Resources of Type System.Collections.Generic.KeyValuePair`2[System.String,System.Object] */
    Resources?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Editor.StyleClass of Type System.String */
    StyleClass?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Editor.Triggers of Type Xamarin.Forms.TriggerBase */
    Triggers?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** Editor */
    export const Editor: IEditorConstructor = XNode.prepare<IEditor>("Xamarin.Forms.Editor;Xamarin.Forms.Core");
    
    
    Editor.Behaviors = XNode.prepare("Xamarin.Forms.Editor:Behaviors;Xamarin.Forms.Core", true, false);
    
    Editor.Effects = XNode.prepare("Xamarin.Forms.Editor:Effects;Xamarin.Forms.Core", true, false);
    
    Editor.GestureRecognizers = XNode.prepare("Xamarin.Forms.Editor:GestureRecognizers;Xamarin.Forms.Core", true, false);
    
    Editor.Resources = XNode.prepare("Xamarin.Forms.Editor:Resources;Xamarin.Forms.Core", true, false);
    
    Editor.StyleClass = XNode.prepare("Xamarin.Forms.Editor:StyleClass;Xamarin.Forms.Core", true, false);
    
    Editor.Triggers = XNode.prepare("Xamarin.Forms.Editor:Triggers;Xamarin.Forms.Core", true, false);
    
    
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
        
    /** Property Element.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** Element */
    export const Element: IElementConstructor = XNode.prepare<IElement>("Xamarin.Forms.Element;Xamarin.Forms.Core");
    
    Element.Menu = (v) => ({ "Xamarin.Forms.Element:Menu;Xamarin.Forms.Core": v  }) ;
    
    Element.Effects = XNode.prepare("Xamarin.Forms.Element:Effects;Xamarin.Forms.Core", true, false);
    
    
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
        
        
    /** Property Entry.Behaviors of Type Xamarin.Forms.Behavior */
    Behaviors?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Entry.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Entry.GestureRecognizers of Type Xamarin.Forms.IGestureRecognizer */
    GestureRecognizers?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Entry.Resources of Type System.Collections.Generic.KeyValuePair`2[System.String,System.Object] */
    Resources?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Entry.StyleClass of Type System.String */
    StyleClass?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Entry.Triggers of Type Xamarin.Forms.TriggerBase */
    Triggers?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** Entry */
    export const Entry: IEntryConstructor = XNode.prepare<IEntry>("Xamarin.Forms.Entry;Xamarin.Forms.Core");
    
    
    Entry.Behaviors = XNode.prepare("Xamarin.Forms.Entry:Behaviors;Xamarin.Forms.Core", true, false);
    
    Entry.Effects = XNode.prepare("Xamarin.Forms.Entry:Effects;Xamarin.Forms.Core", true, false);
    
    Entry.GestureRecognizers = XNode.prepare("Xamarin.Forms.Entry:GestureRecognizers;Xamarin.Forms.Core", true, false);
    
    Entry.Resources = XNode.prepare("Xamarin.Forms.Entry:Resources;Xamarin.Forms.Core", true, false);
    
    Entry.StyleClass = XNode.prepare("Xamarin.Forms.Entry:StyleClass;Xamarin.Forms.Core", true, false);
    
    Entry.Triggers = XNode.prepare("Xamarin.Forms.Entry:Triggers;Xamarin.Forms.Core", true, false);
    
    
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
        
        
    /** Property FileImageSource.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** FileImageSource */
    export const FileImageSource: IFileImageSourceConstructor = XNode.prepare<IFileImageSource>("Xamarin.Forms.FileImageSource;Xamarin.Forms.Core");
    
    
    FileImageSource.Effects = XNode.prepare("Xamarin.Forms.FileImageSource:Effects;Xamarin.Forms.Core", true, false);
    
    
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
        
    /** Property FlexLayout.Behaviors of Type Xamarin.Forms.Behavior */
    Behaviors?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property FlexLayout.Children of Type Xamarin.Forms.View */
    Children?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property FlexLayout.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property FlexLayout.GestureRecognizers of Type Xamarin.Forms.IGestureRecognizer */
    GestureRecognizers?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property FlexLayout.Resources of Type System.Collections.Generic.KeyValuePair`2[System.String,System.Object] */
    Resources?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property FlexLayout.StyleClass of Type System.String */
    StyleClass?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property FlexLayout.Triggers of Type Xamarin.Forms.TriggerBase */
    Triggers?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** FlexLayout */
    export const FlexLayout: IFlexLayoutConstructor = XNode.prepare<IFlexLayout>("Xamarin.Forms.FlexLayout;Xamarin.Forms.Core");
    
    FlexLayout.Order = (v) => ({ "Xamarin.Forms.FlexLayout:Order;Xamarin.Forms.Core": v  }) ;
    
    FlexLayout.Grow = (v) => ({ "Xamarin.Forms.FlexLayout:Grow;Xamarin.Forms.Core": v  }) ;
    
    FlexLayout.Shrink = (v) => ({ "Xamarin.Forms.FlexLayout:Shrink;Xamarin.Forms.Core": v  }) ;
    
    FlexLayout.AlignSelf = (v) => ({ "Xamarin.Forms.FlexLayout:AlignSelf;Xamarin.Forms.Core": v  }) ;
    
    FlexLayout.Basis = (v) => ({ "Xamarin.Forms.FlexLayout:Basis;Xamarin.Forms.Core": v  }) ;
    
    FlexLayout.Behaviors = XNode.prepare("Xamarin.Forms.FlexLayout:Behaviors;Xamarin.Forms.Core", true, false);
    
    FlexLayout.Children = XNode.prepare("Xamarin.Forms.FlexLayout:Children;Xamarin.Forms.Core", true, false);
    
    FlexLayout.Effects = XNode.prepare("Xamarin.Forms.FlexLayout:Effects;Xamarin.Forms.Core", true, false);
    
    FlexLayout.GestureRecognizers = XNode.prepare("Xamarin.Forms.FlexLayout:GestureRecognizers;Xamarin.Forms.Core", true, false);
    
    FlexLayout.Resources = XNode.prepare("Xamarin.Forms.FlexLayout:Resources;Xamarin.Forms.Core", true, false);
    
    FlexLayout.StyleClass = XNode.prepare("Xamarin.Forms.FlexLayout:StyleClass;Xamarin.Forms.Core", true, false);
    
    FlexLayout.Triggers = XNode.prepare("Xamarin.Forms.FlexLayout:Triggers;Xamarin.Forms.Core", true, false);
    
    
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
        
        
    /** Property FontImageSource.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** FontImageSource */
    export const FontImageSource: IFontImageSourceConstructor = XNode.prepare<IFontImageSource>("Xamarin.Forms.FontImageSource;Xamarin.Forms.Core");
    
    
    FontImageSource.Effects = XNode.prepare("Xamarin.Forms.FontImageSource:Effects;Xamarin.Forms.Core", true, false);
    
    
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
        
        
    /** Property FormattedString.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property FormattedString.Spans of Type Xamarin.Forms.Span */
    Spans?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** FormattedString */
    export const FormattedString: IFormattedStringConstructor = XNode.prepare<IFormattedString>("Xamarin.Forms.FormattedString;Xamarin.Forms.Core");
    
    
    FormattedString.Effects = XNode.prepare("Xamarin.Forms.FormattedString:Effects;Xamarin.Forms.Core", true, false);
    
    FormattedString.Spans = XNode.prepare("Xamarin.Forms.FormattedString:Spans;Xamarin.Forms.Core", true, false);
    
    
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
        
        
    /** Property Frame.Behaviors of Type Xamarin.Forms.Behavior */
    Behaviors?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Frame.Content of Type Xamarin.Forms.View */
    Content?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Frame.ControlTemplate of Type Xamarin.Forms.ControlTemplate */
    ControlTemplate?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Frame.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Frame.GestureRecognizers of Type Xamarin.Forms.IGestureRecognizer */
    GestureRecognizers?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Frame.Resources of Type System.Collections.Generic.KeyValuePair`2[System.String,System.Object] */
    Resources?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Frame.StyleClass of Type System.String */
    StyleClass?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Frame.Triggers of Type Xamarin.Forms.TriggerBase */
    Triggers?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** Frame */
    export const Frame: IFrameConstructor = XNode.prepare<IFrame>("Xamarin.Forms.Frame;Xamarin.Forms.Core");
    
    
    Frame.Behaviors = XNode.prepare("Xamarin.Forms.Frame:Behaviors;Xamarin.Forms.Core", true, false);
    
    Frame.Content = XNode.prepare("Xamarin.Forms.Frame:Content;Xamarin.Forms.Core", true, true);
    
    Frame.ControlTemplate = XNode.prepare("Xamarin.Forms.Frame:ControlTemplate;Xamarin.Forms.Core", true, false);
    
    Frame.Effects = XNode.prepare("Xamarin.Forms.Frame:Effects;Xamarin.Forms.Core", true, false);
    
    Frame.GestureRecognizers = XNode.prepare("Xamarin.Forms.Frame:GestureRecognizers;Xamarin.Forms.Core", true, false);
    
    Frame.Resources = XNode.prepare("Xamarin.Forms.Frame:Resources;Xamarin.Forms.Core", true, false);
    
    Frame.StyleClass = XNode.prepare("Xamarin.Forms.Frame:StyleClass;Xamarin.Forms.Core", true, false);
    
    Frame.Triggers = XNode.prepare("Xamarin.Forms.Frame:Triggers;Xamarin.Forms.Core", true, false);
    
    
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
        
        
    /** Property GestureElement.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property GestureElement.GestureRecognizers of Type Xamarin.Forms.IGestureRecognizer */
    GestureRecognizers?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** GestureElement */
    export const GestureElement: IGestureElementConstructor = XNode.prepare<IGestureElement>("Xamarin.Forms.GestureElement;Xamarin.Forms.Core");
    
    
    GestureElement.Effects = XNode.prepare("Xamarin.Forms.GestureElement:Effects;Xamarin.Forms.Core", true, false);
    
    GestureElement.GestureRecognizers = XNode.prepare("Xamarin.Forms.GestureElement:GestureRecognizers;Xamarin.Forms.Core", true, false);
    
    
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
        
        
    /** Property GestureRecognizer.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** GestureRecognizer */
    export const GestureRecognizer: IGestureRecognizerConstructor = XNode.prepare<IGestureRecognizer>("Xamarin.Forms.GestureRecognizer;Xamarin.Forms.Core");
    
    
    GestureRecognizer.Effects = XNode.prepare("Xamarin.Forms.GestureRecognizer:Effects;Xamarin.Forms.Core", true, false);
    
    
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
        
    /** Property Grid.Behaviors of Type Xamarin.Forms.Behavior */
    Behaviors?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Grid.Children of Type Xamarin.Forms.View */
    Children?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Grid.ColumnDefinitions of Type Xamarin.Forms.ColumnDefinition */
    ColumnDefinitions?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Grid.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Grid.GestureRecognizers of Type Xamarin.Forms.IGestureRecognizer */
    GestureRecognizers?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Grid.Resources of Type System.Collections.Generic.KeyValuePair`2[System.String,System.Object] */
    Resources?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Grid.RowDefinitions of Type Xamarin.Forms.RowDefinition */
    RowDefinitions?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Grid.StyleClass of Type System.String */
    StyleClass?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Grid.Triggers of Type Xamarin.Forms.TriggerBase */
    Triggers?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** Grid */
    export const Grid: IGridConstructor = XNode.prepare<IGrid>("Xamarin.Forms.Grid;Xamarin.Forms.Core");
    
    Grid.Row = (v) => ({ "Xamarin.Forms.Grid:Row;Xamarin.Forms.Core": v  }) ;
    
    Grid.RowSpan = (v) => ({ "Xamarin.Forms.Grid:RowSpan;Xamarin.Forms.Core": v  }) ;
    
    Grid.Column = (v) => ({ "Xamarin.Forms.Grid:Column;Xamarin.Forms.Core": v  }) ;
    
    Grid.ColumnSpan = (v) => ({ "Xamarin.Forms.Grid:ColumnSpan;Xamarin.Forms.Core": v  }) ;
    
    Grid.Behaviors = XNode.prepare("Xamarin.Forms.Grid:Behaviors;Xamarin.Forms.Core", true, false);
    
    Grid.Children = XNode.prepare("Xamarin.Forms.Grid:Children;Xamarin.Forms.Core", true, false);
    
    Grid.ColumnDefinitions = XNode.prepare("Xamarin.Forms.Grid:ColumnDefinitions;Xamarin.Forms.Core", true, false);
    
    Grid.Effects = XNode.prepare("Xamarin.Forms.Grid:Effects;Xamarin.Forms.Core", true, false);
    
    Grid.GestureRecognizers = XNode.prepare("Xamarin.Forms.Grid:GestureRecognizers;Xamarin.Forms.Core", true, false);
    
    Grid.Resources = XNode.prepare("Xamarin.Forms.Grid:Resources;Xamarin.Forms.Core", true, false);
    
    Grid.RowDefinitions = XNode.prepare("Xamarin.Forms.Grid:RowDefinitions;Xamarin.Forms.Core", true, false);
    
    Grid.StyleClass = XNode.prepare("Xamarin.Forms.Grid:StyleClass;Xamarin.Forms.Core", true, false);
    
    Grid.Triggers = XNode.prepare("Xamarin.Forms.Grid:Triggers;Xamarin.Forms.Core", true, false);
    
    
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
        
        
    /** Property Image.Behaviors of Type Xamarin.Forms.Behavior */
    Behaviors?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Image.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Image.GestureRecognizers of Type Xamarin.Forms.IGestureRecognizer */
    GestureRecognizers?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Image.Resources of Type System.Collections.Generic.KeyValuePair`2[System.String,System.Object] */
    Resources?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Image.Source of Type Xamarin.Forms.ImageSource */
    Source?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Image.StyleClass of Type System.String */
    StyleClass?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Image.Triggers of Type Xamarin.Forms.TriggerBase */
    Triggers?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** Image */
    export const Image: IImageConstructor = XNode.prepare<IImage>("Xamarin.Forms.Image;Xamarin.Forms.Core");
    
    
    Image.Behaviors = XNode.prepare("Xamarin.Forms.Image:Behaviors;Xamarin.Forms.Core", true, false);
    
    Image.Effects = XNode.prepare("Xamarin.Forms.Image:Effects;Xamarin.Forms.Core", true, false);
    
    Image.GestureRecognizers = XNode.prepare("Xamarin.Forms.Image:GestureRecognizers;Xamarin.Forms.Core", true, false);
    
    Image.Resources = XNode.prepare("Xamarin.Forms.Image:Resources;Xamarin.Forms.Core", true, false);
    
    Image.Source = XNode.prepare("Xamarin.Forms.Image:Source;Xamarin.Forms.Core", true, true);
    
    Image.StyleClass = XNode.prepare("Xamarin.Forms.Image:StyleClass;Xamarin.Forms.Core", true, false);
    
    Image.Triggers = XNode.prepare("Xamarin.Forms.Image:Triggers;Xamarin.Forms.Core", true, false);
    
    
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
        
        
    /** Property ImageButton.Behaviors of Type Xamarin.Forms.Behavior */
    Behaviors?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property ImageButton.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property ImageButton.GestureRecognizers of Type Xamarin.Forms.IGestureRecognizer */
    GestureRecognizers?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property ImageButton.Resources of Type System.Collections.Generic.KeyValuePair`2[System.String,System.Object] */
    Resources?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property ImageButton.Source of Type Xamarin.Forms.ImageSource */
    Source?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property ImageButton.StyleClass of Type System.String */
    StyleClass?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property ImageButton.Triggers of Type Xamarin.Forms.TriggerBase */
    Triggers?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** ImageButton */
    export const ImageButton: IImageButtonConstructor = XNode.prepare<IImageButton>("Xamarin.Forms.ImageButton;Xamarin.Forms.Core");
    
    
    ImageButton.Behaviors = XNode.prepare("Xamarin.Forms.ImageButton:Behaviors;Xamarin.Forms.Core", true, false);
    
    ImageButton.Effects = XNode.prepare("Xamarin.Forms.ImageButton:Effects;Xamarin.Forms.Core", true, false);
    
    ImageButton.GestureRecognizers = XNode.prepare("Xamarin.Forms.ImageButton:GestureRecognizers;Xamarin.Forms.Core", true, false);
    
    ImageButton.Resources = XNode.prepare("Xamarin.Forms.ImageButton:Resources;Xamarin.Forms.Core", true, false);
    
    ImageButton.Source = XNode.prepare("Xamarin.Forms.ImageButton:Source;Xamarin.Forms.Core", true, true);
    
    ImageButton.StyleClass = XNode.prepare("Xamarin.Forms.ImageButton:StyleClass;Xamarin.Forms.Core", true, false);
    
    ImageButton.Triggers = XNode.prepare("Xamarin.Forms.ImageButton:Triggers;Xamarin.Forms.Core", true, false);
    
    
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
        
        
    /** Property ImageSource.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** ImageSource */
    export const ImageSource: IImageSourceConstructor = XNode.prepare<IImageSource>("Xamarin.Forms.ImageSource;Xamarin.Forms.Core");
    
    
    ImageSource.Effects = XNode.prepare("Xamarin.Forms.ImageSource:Effects;Xamarin.Forms.Core", true, false);
    
    
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
        
    /** Property IndicatorView.Behaviors of Type Xamarin.Forms.Behavior */
    Behaviors?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property IndicatorView.ControlTemplate of Type Xamarin.Forms.ControlTemplate */
    ControlTemplate?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property IndicatorView.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property IndicatorView.GestureRecognizers of Type Xamarin.Forms.IGestureRecognizer */
    GestureRecognizers?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property IndicatorView.IndicatorLayout of Type Xamarin.Forms.Layout`1[Xamarin.Forms.View] */
    IndicatorLayout?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property IndicatorView.IndicatorTemplate of Type Xamarin.Forms.DataTemplate */
    IndicatorTemplate?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property IndicatorView.Resources of Type System.Collections.Generic.KeyValuePair`2[System.String,System.Object] */
    Resources?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property IndicatorView.StyleClass of Type System.String */
    StyleClass?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property IndicatorView.Triggers of Type Xamarin.Forms.TriggerBase */
    Triggers?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** IndicatorView */
    export const IndicatorView: IIndicatorViewConstructor = XNode.prepare<IIndicatorView>("Xamarin.Forms.IndicatorView;Xamarin.Forms.Core");
    
    IndicatorView.ItemsSourceBy = (v) => ({ "Xamarin.Forms.IndicatorView:ItemsSourceBy;Xamarin.Forms.Core": v  }) ;
    
    IndicatorView.Behaviors = XNode.prepare("Xamarin.Forms.IndicatorView:Behaviors;Xamarin.Forms.Core", true, false);
    
    IndicatorView.ControlTemplate = XNode.prepare("Xamarin.Forms.IndicatorView:ControlTemplate;Xamarin.Forms.Core", true, false);
    
    IndicatorView.Effects = XNode.prepare("Xamarin.Forms.IndicatorView:Effects;Xamarin.Forms.Core", true, false);
    
    IndicatorView.GestureRecognizers = XNode.prepare("Xamarin.Forms.IndicatorView:GestureRecognizers;Xamarin.Forms.Core", true, false);
    
    IndicatorView.IndicatorLayout = XNode.prepare("Xamarin.Forms.IndicatorView:IndicatorLayout;Xamarin.Forms.Core", true, true);
    
    IndicatorView.IndicatorTemplate = XNode.prepare("Xamarin.Forms.IndicatorView:IndicatorTemplate;Xamarin.Forms.Core", true, false);
    
    IndicatorView.Resources = XNode.prepare("Xamarin.Forms.IndicatorView:Resources;Xamarin.Forms.Core", true, false);
    
    IndicatorView.StyleClass = XNode.prepare("Xamarin.Forms.IndicatorView:StyleClass;Xamarin.Forms.Core", true, false);
    
    IndicatorView.Triggers = XNode.prepare("Xamarin.Forms.IndicatorView:Triggers;Xamarin.Forms.Core", true, false);
    
    
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
        
        
    /** Property InputView.Behaviors of Type Xamarin.Forms.Behavior */
    Behaviors?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property InputView.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property InputView.GestureRecognizers of Type Xamarin.Forms.IGestureRecognizer */
    GestureRecognizers?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property InputView.Resources of Type System.Collections.Generic.KeyValuePair`2[System.String,System.Object] */
    Resources?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property InputView.StyleClass of Type System.String */
    StyleClass?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property InputView.Triggers of Type Xamarin.Forms.TriggerBase */
    Triggers?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** InputView */
    export const InputView: IInputViewConstructor = XNode.prepare<IInputView>("Xamarin.Forms.InputView;Xamarin.Forms.Core");
    
    
    InputView.Behaviors = XNode.prepare("Xamarin.Forms.InputView:Behaviors;Xamarin.Forms.Core", true, false);
    
    InputView.Effects = XNode.prepare("Xamarin.Forms.InputView:Effects;Xamarin.Forms.Core", true, false);
    
    InputView.GestureRecognizers = XNode.prepare("Xamarin.Forms.InputView:GestureRecognizers;Xamarin.Forms.Core", true, false);
    
    InputView.Resources = XNode.prepare("Xamarin.Forms.InputView:Resources;Xamarin.Forms.Core", true, false);
    
    InputView.StyleClass = XNode.prepare("Xamarin.Forms.InputView:StyleClass;Xamarin.Forms.Core", true, false);
    
    InputView.Triggers = XNode.prepare("Xamarin.Forms.InputView:Triggers;Xamarin.Forms.Core", true, false);
    
    
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
        
        
    /** Property DataTrigger.EnterActions of Type Xamarin.Forms.TriggerAction */
    EnterActions?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property DataTrigger.ExitActions of Type Xamarin.Forms.TriggerAction */
    ExitActions?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property DataTrigger.Setters of Type Xamarin.Forms.Setter */
    Setters?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** DataTrigger */
    export const DataTrigger: IDataTriggerConstructor = XNode.prepare<IDataTrigger>("Xamarin.Forms.DataTrigger;Xamarin.Forms.Core");
    
    
    DataTrigger.EnterActions = XNode.prepare("Xamarin.Forms.DataTrigger:EnterActions;Xamarin.Forms.Core", true, false);
    
    DataTrigger.ExitActions = XNode.prepare("Xamarin.Forms.DataTrigger:ExitActions;Xamarin.Forms.Core", true, false);
    
    DataTrigger.Setters = XNode.prepare("Xamarin.Forms.DataTrigger:Setters;Xamarin.Forms.Core", true, false);
    
    
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
        
        
    /** Property EventTrigger.Actions of Type Xamarin.Forms.TriggerAction */
    Actions?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property EventTrigger.EnterActions of Type Xamarin.Forms.TriggerAction */
    EnterActions?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property EventTrigger.ExitActions of Type Xamarin.Forms.TriggerAction */
    ExitActions?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** EventTrigger */
    export const EventTrigger: IEventTriggerConstructor = XNode.prepare<IEventTrigger>("Xamarin.Forms.EventTrigger;Xamarin.Forms.Core");
    
    
    EventTrigger.Actions = XNode.prepare("Xamarin.Forms.EventTrigger:Actions;Xamarin.Forms.Core", true, false);
    
    EventTrigger.EnterActions = XNode.prepare("Xamarin.Forms.EventTrigger:EnterActions;Xamarin.Forms.Core", true, false);
    
    EventTrigger.ExitActions = XNode.prepare("Xamarin.Forms.EventTrigger:ExitActions;Xamarin.Forms.Core", true, false);
    
    
    export interface IMultiTrigger {
        
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
        [key: string]: any;
    }
    
    export interface IMultiTriggerConstructor {
        (a?: Partial<IMultiTrigger>, ... nodes: XNode[]): XNode;
        
        
    /** Property MultiTrigger.Conditions of Type Xamarin.Forms.Condition */
    Conditions?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property MultiTrigger.EnterActions of Type Xamarin.Forms.TriggerAction */
    EnterActions?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property MultiTrigger.ExitActions of Type Xamarin.Forms.TriggerAction */
    ExitActions?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property MultiTrigger.Setters of Type Xamarin.Forms.Setter */
    Setters?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** MultiTrigger */
    export const MultiTrigger: IMultiTriggerConstructor = XNode.prepare<IMultiTrigger>("Xamarin.Forms.MultiTrigger;Xamarin.Forms.Core");
    
    
    MultiTrigger.Conditions = XNode.prepare("Xamarin.Forms.MultiTrigger:Conditions;Xamarin.Forms.Core", true, false);
    
    MultiTrigger.EnterActions = XNode.prepare("Xamarin.Forms.MultiTrigger:EnterActions;Xamarin.Forms.Core", true, false);
    
    MultiTrigger.ExitActions = XNode.prepare("Xamarin.Forms.MultiTrigger:ExitActions;Xamarin.Forms.Core", true, false);
    
    MultiTrigger.Setters = XNode.prepare("Xamarin.Forms.MultiTrigger:Setters;Xamarin.Forms.Core", true, false);
    
    
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
        
        
    /** Property Trigger.EnterActions of Type Xamarin.Forms.TriggerAction */
    EnterActions?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Trigger.ExitActions of Type Xamarin.Forms.TriggerAction */
    ExitActions?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Trigger.Setters of Type Xamarin.Forms.Setter */
    Setters?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** Trigger */
    export const Trigger: ITriggerConstructor = XNode.prepare<ITrigger>("Xamarin.Forms.Trigger;Xamarin.Forms.Core");
    
    
    Trigger.EnterActions = XNode.prepare("Xamarin.Forms.Trigger:EnterActions;Xamarin.Forms.Core", true, false);
    
    Trigger.ExitActions = XNode.prepare("Xamarin.Forms.Trigger:ExitActions;Xamarin.Forms.Core", true, false);
    
    Trigger.Setters = XNode.prepare("Xamarin.Forms.Trigger:Setters;Xamarin.Forms.Core", true, false);
    
    
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
        
        
    /** Property TriggerBase.EnterActions of Type Xamarin.Forms.TriggerAction */
    EnterActions?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property TriggerBase.ExitActions of Type Xamarin.Forms.TriggerAction */
    ExitActions?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** TriggerBase */
    export const TriggerBase: ITriggerBaseConstructor = XNode.prepare<ITriggerBase>("Xamarin.Forms.TriggerBase;Xamarin.Forms.Core");
    
    
    TriggerBase.EnterActions = XNode.prepare("Xamarin.Forms.TriggerBase:EnterActions;Xamarin.Forms.Core", true, false);
    
    TriggerBase.ExitActions = XNode.prepare("Xamarin.Forms.TriggerBase:ExitActions;Xamarin.Forms.Core", true, false);
    
    
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
        
        
    /** Property CarouselView.Behaviors of Type Xamarin.Forms.Behavior */
    Behaviors?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property CarouselView.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property CarouselView.EmptyViewTemplate of Type Xamarin.Forms.DataTemplate */
    EmptyViewTemplate?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property CarouselView.GestureRecognizers of Type Xamarin.Forms.IGestureRecognizer */
    GestureRecognizers?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property CarouselView.ItemTemplate of Type Xamarin.Forms.DataTemplate */
    ItemTemplate?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property CarouselView.Resources of Type System.Collections.Generic.KeyValuePair`2[System.String,System.Object] */
    Resources?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property CarouselView.StyleClass of Type System.String */
    StyleClass?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property CarouselView.Triggers of Type Xamarin.Forms.TriggerBase */
    Triggers?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property CarouselView.VisibleViews of Type Xamarin.Forms.View */
    VisibleViews?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** CarouselView */
    export const CarouselView: ICarouselViewConstructor = XNode.prepare<ICarouselView>("Xamarin.Forms.CarouselView;Xamarin.Forms.Core");
    
    
    CarouselView.Behaviors = XNode.prepare("Xamarin.Forms.CarouselView:Behaviors;Xamarin.Forms.Core", true, false);
    
    CarouselView.Effects = XNode.prepare("Xamarin.Forms.CarouselView:Effects;Xamarin.Forms.Core", true, false);
    
    CarouselView.EmptyViewTemplate = XNode.prepare("Xamarin.Forms.CarouselView:EmptyViewTemplate;Xamarin.Forms.Core", true, false);
    
    CarouselView.GestureRecognizers = XNode.prepare("Xamarin.Forms.CarouselView:GestureRecognizers;Xamarin.Forms.Core", true, false);
    
    CarouselView.ItemTemplate = XNode.prepare("Xamarin.Forms.CarouselView:ItemTemplate;Xamarin.Forms.Core", true, false);
    
    CarouselView.Resources = XNode.prepare("Xamarin.Forms.CarouselView:Resources;Xamarin.Forms.Core", true, false);
    
    CarouselView.StyleClass = XNode.prepare("Xamarin.Forms.CarouselView:StyleClass;Xamarin.Forms.Core", true, false);
    
    CarouselView.Triggers = XNode.prepare("Xamarin.Forms.CarouselView:Triggers;Xamarin.Forms.Core", true, false);
    
    CarouselView.VisibleViews = XNode.prepare("Xamarin.Forms.CarouselView:VisibleViews;Xamarin.Forms.Core", true, false);
    
    
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
        
        
    /** Property CollectionView.Behaviors of Type Xamarin.Forms.Behavior */
    Behaviors?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property CollectionView.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property CollectionView.EmptyViewTemplate of Type Xamarin.Forms.DataTemplate */
    EmptyViewTemplate?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property CollectionView.FooterTemplate of Type Xamarin.Forms.DataTemplate */
    FooterTemplate?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property CollectionView.GestureRecognizers of Type Xamarin.Forms.IGestureRecognizer */
    GestureRecognizers?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property CollectionView.GroupFooterTemplate of Type Xamarin.Forms.DataTemplate */
    GroupFooterTemplate?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property CollectionView.GroupHeaderTemplate of Type Xamarin.Forms.DataTemplate */
    GroupHeaderTemplate?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property CollectionView.HeaderTemplate of Type Xamarin.Forms.DataTemplate */
    HeaderTemplate?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property CollectionView.ItemTemplate of Type Xamarin.Forms.DataTemplate */
    ItemTemplate?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property CollectionView.Resources of Type System.Collections.Generic.KeyValuePair`2[System.String,System.Object] */
    Resources?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property CollectionView.SelectedItems of Type System.Object */
    SelectedItems?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property CollectionView.StyleClass of Type System.String */
    StyleClass?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property CollectionView.Triggers of Type Xamarin.Forms.TriggerBase */
    Triggers?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** CollectionView */
    export const CollectionView: ICollectionViewConstructor = XNode.prepare<ICollectionView>("Xamarin.Forms.CollectionView;Xamarin.Forms.Core");
    
    
    CollectionView.Behaviors = XNode.prepare("Xamarin.Forms.CollectionView:Behaviors;Xamarin.Forms.Core", true, false);
    
    CollectionView.Effects = XNode.prepare("Xamarin.Forms.CollectionView:Effects;Xamarin.Forms.Core", true, false);
    
    CollectionView.EmptyViewTemplate = XNode.prepare("Xamarin.Forms.CollectionView:EmptyViewTemplate;Xamarin.Forms.Core", true, false);
    
    CollectionView.FooterTemplate = XNode.prepare("Xamarin.Forms.CollectionView:FooterTemplate;Xamarin.Forms.Core", true, false);
    
    CollectionView.GestureRecognizers = XNode.prepare("Xamarin.Forms.CollectionView:GestureRecognizers;Xamarin.Forms.Core", true, false);
    
    CollectionView.GroupFooterTemplate = XNode.prepare("Xamarin.Forms.CollectionView:GroupFooterTemplate;Xamarin.Forms.Core", true, false);
    
    CollectionView.GroupHeaderTemplate = XNode.prepare("Xamarin.Forms.CollectionView:GroupHeaderTemplate;Xamarin.Forms.Core", true, false);
    
    CollectionView.HeaderTemplate = XNode.prepare("Xamarin.Forms.CollectionView:HeaderTemplate;Xamarin.Forms.Core", true, false);
    
    CollectionView.ItemTemplate = XNode.prepare("Xamarin.Forms.CollectionView:ItemTemplate;Xamarin.Forms.Core", true, false);
    
    CollectionView.Resources = XNode.prepare("Xamarin.Forms.CollectionView:Resources;Xamarin.Forms.Core", true, false);
    
    CollectionView.SelectedItems = XNode.prepare("Xamarin.Forms.CollectionView:SelectedItems;Xamarin.Forms.Core", true, false);
    
    CollectionView.StyleClass = XNode.prepare("Xamarin.Forms.CollectionView:StyleClass;Xamarin.Forms.Core", true, false);
    
    CollectionView.Triggers = XNode.prepare("Xamarin.Forms.CollectionView:Triggers;Xamarin.Forms.Core", true, false);
    
    
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
        
        
    /** Property GroupableItemsView.Behaviors of Type Xamarin.Forms.Behavior */
    Behaviors?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property GroupableItemsView.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property GroupableItemsView.EmptyViewTemplate of Type Xamarin.Forms.DataTemplate */
    EmptyViewTemplate?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property GroupableItemsView.FooterTemplate of Type Xamarin.Forms.DataTemplate */
    FooterTemplate?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property GroupableItemsView.GestureRecognizers of Type Xamarin.Forms.IGestureRecognizer */
    GestureRecognizers?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property GroupableItemsView.GroupFooterTemplate of Type Xamarin.Forms.DataTemplate */
    GroupFooterTemplate?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property GroupableItemsView.GroupHeaderTemplate of Type Xamarin.Forms.DataTemplate */
    GroupHeaderTemplate?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property GroupableItemsView.HeaderTemplate of Type Xamarin.Forms.DataTemplate */
    HeaderTemplate?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property GroupableItemsView.ItemTemplate of Type Xamarin.Forms.DataTemplate */
    ItemTemplate?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property GroupableItemsView.Resources of Type System.Collections.Generic.KeyValuePair`2[System.String,System.Object] */
    Resources?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property GroupableItemsView.SelectedItems of Type System.Object */
    SelectedItems?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property GroupableItemsView.StyleClass of Type System.String */
    StyleClass?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property GroupableItemsView.Triggers of Type Xamarin.Forms.TriggerBase */
    Triggers?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** GroupableItemsView */
    export const GroupableItemsView: IGroupableItemsViewConstructor = XNode.prepare<IGroupableItemsView>("Xamarin.Forms.GroupableItemsView;Xamarin.Forms.Core");
    
    
    GroupableItemsView.Behaviors = XNode.prepare("Xamarin.Forms.GroupableItemsView:Behaviors;Xamarin.Forms.Core", true, false);
    
    GroupableItemsView.Effects = XNode.prepare("Xamarin.Forms.GroupableItemsView:Effects;Xamarin.Forms.Core", true, false);
    
    GroupableItemsView.EmptyViewTemplate = XNode.prepare("Xamarin.Forms.GroupableItemsView:EmptyViewTemplate;Xamarin.Forms.Core", true, false);
    
    GroupableItemsView.FooterTemplate = XNode.prepare("Xamarin.Forms.GroupableItemsView:FooterTemplate;Xamarin.Forms.Core", true, false);
    
    GroupableItemsView.GestureRecognizers = XNode.prepare("Xamarin.Forms.GroupableItemsView:GestureRecognizers;Xamarin.Forms.Core", true, false);
    
    GroupableItemsView.GroupFooterTemplate = XNode.prepare("Xamarin.Forms.GroupableItemsView:GroupFooterTemplate;Xamarin.Forms.Core", true, false);
    
    GroupableItemsView.GroupHeaderTemplate = XNode.prepare("Xamarin.Forms.GroupableItemsView:GroupHeaderTemplate;Xamarin.Forms.Core", true, false);
    
    GroupableItemsView.HeaderTemplate = XNode.prepare("Xamarin.Forms.GroupableItemsView:HeaderTemplate;Xamarin.Forms.Core", true, false);
    
    GroupableItemsView.ItemTemplate = XNode.prepare("Xamarin.Forms.GroupableItemsView:ItemTemplate;Xamarin.Forms.Core", true, false);
    
    GroupableItemsView.Resources = XNode.prepare("Xamarin.Forms.GroupableItemsView:Resources;Xamarin.Forms.Core", true, false);
    
    GroupableItemsView.SelectedItems = XNode.prepare("Xamarin.Forms.GroupableItemsView:SelectedItems;Xamarin.Forms.Core", true, false);
    
    GroupableItemsView.StyleClass = XNode.prepare("Xamarin.Forms.GroupableItemsView:StyleClass;Xamarin.Forms.Core", true, false);
    
    GroupableItemsView.Triggers = XNode.prepare("Xamarin.Forms.GroupableItemsView:Triggers;Xamarin.Forms.Core", true, false);
    
    
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
        
        
    /** Property ItemsView.Behaviors of Type Xamarin.Forms.Behavior */
    Behaviors?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property ItemsView.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property ItemsView.EmptyViewTemplate of Type Xamarin.Forms.DataTemplate */
    EmptyViewTemplate?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property ItemsView.GestureRecognizers of Type Xamarin.Forms.IGestureRecognizer */
    GestureRecognizers?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property ItemsView.ItemTemplate of Type Xamarin.Forms.DataTemplate */
    ItemTemplate?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property ItemsView.Resources of Type System.Collections.Generic.KeyValuePair`2[System.String,System.Object] */
    Resources?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property ItemsView.StyleClass of Type System.String */
    StyleClass?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property ItemsView.Triggers of Type Xamarin.Forms.TriggerBase */
    Triggers?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** ItemsView */
    export const ItemsView: IItemsViewConstructor = XNode.prepare<IItemsView>("Xamarin.Forms.ItemsView;Xamarin.Forms.Core");
    
    
    ItemsView.Behaviors = XNode.prepare("Xamarin.Forms.ItemsView:Behaviors;Xamarin.Forms.Core", true, false);
    
    ItemsView.Effects = XNode.prepare("Xamarin.Forms.ItemsView:Effects;Xamarin.Forms.Core", true, false);
    
    ItemsView.EmptyViewTemplate = XNode.prepare("Xamarin.Forms.ItemsView:EmptyViewTemplate;Xamarin.Forms.Core", true, false);
    
    ItemsView.GestureRecognizers = XNode.prepare("Xamarin.Forms.ItemsView:GestureRecognizers;Xamarin.Forms.Core", true, false);
    
    ItemsView.ItemTemplate = XNode.prepare("Xamarin.Forms.ItemsView:ItemTemplate;Xamarin.Forms.Core", true, false);
    
    ItemsView.Resources = XNode.prepare("Xamarin.Forms.ItemsView:Resources;Xamarin.Forms.Core", true, false);
    
    ItemsView.StyleClass = XNode.prepare("Xamarin.Forms.ItemsView:StyleClass;Xamarin.Forms.Core", true, false);
    
    ItemsView.Triggers = XNode.prepare("Xamarin.Forms.ItemsView:Triggers;Xamarin.Forms.Core", true, false);
    
    
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
        
        
    /** Property SelectableItemsView.Behaviors of Type Xamarin.Forms.Behavior */
    Behaviors?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property SelectableItemsView.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property SelectableItemsView.EmptyViewTemplate of Type Xamarin.Forms.DataTemplate */
    EmptyViewTemplate?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property SelectableItemsView.FooterTemplate of Type Xamarin.Forms.DataTemplate */
    FooterTemplate?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property SelectableItemsView.GestureRecognizers of Type Xamarin.Forms.IGestureRecognizer */
    GestureRecognizers?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property SelectableItemsView.HeaderTemplate of Type Xamarin.Forms.DataTemplate */
    HeaderTemplate?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property SelectableItemsView.ItemTemplate of Type Xamarin.Forms.DataTemplate */
    ItemTemplate?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property SelectableItemsView.Resources of Type System.Collections.Generic.KeyValuePair`2[System.String,System.Object] */
    Resources?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property SelectableItemsView.SelectedItems of Type System.Object */
    SelectedItems?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property SelectableItemsView.StyleClass of Type System.String */
    StyleClass?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property SelectableItemsView.Triggers of Type Xamarin.Forms.TriggerBase */
    Triggers?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** SelectableItemsView */
    export const SelectableItemsView: ISelectableItemsViewConstructor = XNode.prepare<ISelectableItemsView>("Xamarin.Forms.SelectableItemsView;Xamarin.Forms.Core");
    
    
    SelectableItemsView.Behaviors = XNode.prepare("Xamarin.Forms.SelectableItemsView:Behaviors;Xamarin.Forms.Core", true, false);
    
    SelectableItemsView.Effects = XNode.prepare("Xamarin.Forms.SelectableItemsView:Effects;Xamarin.Forms.Core", true, false);
    
    SelectableItemsView.EmptyViewTemplate = XNode.prepare("Xamarin.Forms.SelectableItemsView:EmptyViewTemplate;Xamarin.Forms.Core", true, false);
    
    SelectableItemsView.FooterTemplate = XNode.prepare("Xamarin.Forms.SelectableItemsView:FooterTemplate;Xamarin.Forms.Core", true, false);
    
    SelectableItemsView.GestureRecognizers = XNode.prepare("Xamarin.Forms.SelectableItemsView:GestureRecognizers;Xamarin.Forms.Core", true, false);
    
    SelectableItemsView.HeaderTemplate = XNode.prepare("Xamarin.Forms.SelectableItemsView:HeaderTemplate;Xamarin.Forms.Core", true, false);
    
    SelectableItemsView.ItemTemplate = XNode.prepare("Xamarin.Forms.SelectableItemsView:ItemTemplate;Xamarin.Forms.Core", true, false);
    
    SelectableItemsView.Resources = XNode.prepare("Xamarin.Forms.SelectableItemsView:Resources;Xamarin.Forms.Core", true, false);
    
    SelectableItemsView.SelectedItems = XNode.prepare("Xamarin.Forms.SelectableItemsView:SelectedItems;Xamarin.Forms.Core", true, false);
    
    SelectableItemsView.StyleClass = XNode.prepare("Xamarin.Forms.SelectableItemsView:StyleClass;Xamarin.Forms.Core", true, false);
    
    SelectableItemsView.Triggers = XNode.prepare("Xamarin.Forms.SelectableItemsView:Triggers;Xamarin.Forms.Core", true, false);
    
    
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
        
        
    /** Property StructuredItemsView.Behaviors of Type Xamarin.Forms.Behavior */
    Behaviors?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property StructuredItemsView.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property StructuredItemsView.EmptyViewTemplate of Type Xamarin.Forms.DataTemplate */
    EmptyViewTemplate?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property StructuredItemsView.FooterTemplate of Type Xamarin.Forms.DataTemplate */
    FooterTemplate?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property StructuredItemsView.GestureRecognizers of Type Xamarin.Forms.IGestureRecognizer */
    GestureRecognizers?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property StructuredItemsView.HeaderTemplate of Type Xamarin.Forms.DataTemplate */
    HeaderTemplate?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property StructuredItemsView.ItemTemplate of Type Xamarin.Forms.DataTemplate */
    ItemTemplate?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property StructuredItemsView.Resources of Type System.Collections.Generic.KeyValuePair`2[System.String,System.Object] */
    Resources?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property StructuredItemsView.StyleClass of Type System.String */
    StyleClass?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property StructuredItemsView.Triggers of Type Xamarin.Forms.TriggerBase */
    Triggers?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** StructuredItemsView */
    export const StructuredItemsView: IStructuredItemsViewConstructor = XNode.prepare<IStructuredItemsView>("Xamarin.Forms.StructuredItemsView;Xamarin.Forms.Core");
    
    
    StructuredItemsView.Behaviors = XNode.prepare("Xamarin.Forms.StructuredItemsView:Behaviors;Xamarin.Forms.Core", true, false);
    
    StructuredItemsView.Effects = XNode.prepare("Xamarin.Forms.StructuredItemsView:Effects;Xamarin.Forms.Core", true, false);
    
    StructuredItemsView.EmptyViewTemplate = XNode.prepare("Xamarin.Forms.StructuredItemsView:EmptyViewTemplate;Xamarin.Forms.Core", true, false);
    
    StructuredItemsView.FooterTemplate = XNode.prepare("Xamarin.Forms.StructuredItemsView:FooterTemplate;Xamarin.Forms.Core", true, false);
    
    StructuredItemsView.GestureRecognizers = XNode.prepare("Xamarin.Forms.StructuredItemsView:GestureRecognizers;Xamarin.Forms.Core", true, false);
    
    StructuredItemsView.HeaderTemplate = XNode.prepare("Xamarin.Forms.StructuredItemsView:HeaderTemplate;Xamarin.Forms.Core", true, false);
    
    StructuredItemsView.ItemTemplate = XNode.prepare("Xamarin.Forms.StructuredItemsView:ItemTemplate;Xamarin.Forms.Core", true, false);
    
    StructuredItemsView.Resources = XNode.prepare("Xamarin.Forms.StructuredItemsView:Resources;Xamarin.Forms.Core", true, false);
    
    StructuredItemsView.StyleClass = XNode.prepare("Xamarin.Forms.StructuredItemsView:StyleClass;Xamarin.Forms.Core", true, false);
    
    StructuredItemsView.Triggers = XNode.prepare("Xamarin.Forms.StructuredItemsView:Triggers;Xamarin.Forms.Core", true, false);
    
    
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
        
        
    /** Property Label.Behaviors of Type Xamarin.Forms.Behavior */
    Behaviors?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Label.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Label.FormattedText of Type Xamarin.Forms.FormattedString */
    FormattedText?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Label.GestureRecognizers of Type Xamarin.Forms.IGestureRecognizer */
    GestureRecognizers?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Label.Resources of Type System.Collections.Generic.KeyValuePair`2[System.String,System.Object] */
    Resources?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Label.StyleClass of Type System.String */
    StyleClass?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Label.Triggers of Type Xamarin.Forms.TriggerBase */
    Triggers?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** Label */
    export const Label: ILabelConstructor = XNode.prepare<ILabel>("Xamarin.Forms.Label;Xamarin.Forms.Core");
    
    
    Label.Behaviors = XNode.prepare("Xamarin.Forms.Label:Behaviors;Xamarin.Forms.Core", true, false);
    
    Label.Effects = XNode.prepare("Xamarin.Forms.Label:Effects;Xamarin.Forms.Core", true, false);
    
    Label.FormattedText = XNode.prepare("Xamarin.Forms.Label:FormattedText;Xamarin.Forms.Core", true, true);
    
    Label.GestureRecognizers = XNode.prepare("Xamarin.Forms.Label:GestureRecognizers;Xamarin.Forms.Core", true, false);
    
    Label.Resources = XNode.prepare("Xamarin.Forms.Label:Resources;Xamarin.Forms.Core", true, false);
    
    Label.StyleClass = XNode.prepare("Xamarin.Forms.Label:StyleClass;Xamarin.Forms.Core", true, false);
    
    Label.Triggers = XNode.prepare("Xamarin.Forms.Label:Triggers;Xamarin.Forms.Core", true, false);
    
    
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
        
        
    /** Property Layout.Behaviors of Type Xamarin.Forms.Behavior */
    Behaviors?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Layout.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Layout.GestureRecognizers of Type Xamarin.Forms.IGestureRecognizer */
    GestureRecognizers?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Layout.Resources of Type System.Collections.Generic.KeyValuePair`2[System.String,System.Object] */
    Resources?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Layout.StyleClass of Type System.String */
    StyleClass?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Layout.Triggers of Type Xamarin.Forms.TriggerBase */
    Triggers?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** Layout */
    export const Layout: ILayoutConstructor = XNode.prepare<ILayout>("Xamarin.Forms.Layout;Xamarin.Forms.Core");
    
    
    Layout.Behaviors = XNode.prepare("Xamarin.Forms.Layout:Behaviors;Xamarin.Forms.Core", true, false);
    
    Layout.Effects = XNode.prepare("Xamarin.Forms.Layout:Effects;Xamarin.Forms.Core", true, false);
    
    Layout.GestureRecognizers = XNode.prepare("Xamarin.Forms.Layout:GestureRecognizers;Xamarin.Forms.Core", true, false);
    
    Layout.Resources = XNode.prepare("Xamarin.Forms.Layout:Resources;Xamarin.Forms.Core", true, false);
    
    Layout.StyleClass = XNode.prepare("Xamarin.Forms.Layout:StyleClass;Xamarin.Forms.Core", true, false);
    
    Layout.Triggers = XNode.prepare("Xamarin.Forms.Layout:Triggers;Xamarin.Forms.Core", true, false);
    
    
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
        
        
    /** Property ListView.Behaviors of Type Xamarin.Forms.Behavior */
    Behaviors?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property ListView.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property ListView.FooterTemplate of Type Xamarin.Forms.DataTemplate */
    FooterTemplate?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property ListView.GestureRecognizers of Type Xamarin.Forms.IGestureRecognizer */
    GestureRecognizers?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property ListView.GroupHeaderTemplate of Type Xamarin.Forms.DataTemplate */
    GroupHeaderTemplate?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property ListView.HeaderTemplate of Type Xamarin.Forms.DataTemplate */
    HeaderTemplate?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property ListView.ItemTemplate of Type Xamarin.Forms.DataTemplate */
    ItemTemplate?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property ListView.Resources of Type System.Collections.Generic.KeyValuePair`2[System.String,System.Object] */
    Resources?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property ListView.StyleClass of Type System.String */
    StyleClass?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property ListView.Triggers of Type Xamarin.Forms.TriggerBase */
    Triggers?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** ListView */
    export const ListView: IListViewConstructor = XNode.prepare<IListView>("Xamarin.Forms.ListView;Xamarin.Forms.Core");
    
    
    ListView.Behaviors = XNode.prepare("Xamarin.Forms.ListView:Behaviors;Xamarin.Forms.Core", true, false);
    
    ListView.Effects = XNode.prepare("Xamarin.Forms.ListView:Effects;Xamarin.Forms.Core", true, false);
    
    ListView.FooterTemplate = XNode.prepare("Xamarin.Forms.ListView:FooterTemplate;Xamarin.Forms.Core", true, false);
    
    ListView.GestureRecognizers = XNode.prepare("Xamarin.Forms.ListView:GestureRecognizers;Xamarin.Forms.Core", true, false);
    
    ListView.GroupHeaderTemplate = XNode.prepare("Xamarin.Forms.ListView:GroupHeaderTemplate;Xamarin.Forms.Core", true, false);
    
    ListView.HeaderTemplate = XNode.prepare("Xamarin.Forms.ListView:HeaderTemplate;Xamarin.Forms.Core", true, false);
    
    ListView.ItemTemplate = XNode.prepare("Xamarin.Forms.ListView:ItemTemplate;Xamarin.Forms.Core", true, false);
    
    ListView.Resources = XNode.prepare("Xamarin.Forms.ListView:Resources;Xamarin.Forms.Core", true, false);
    
    ListView.StyleClass = XNode.prepare("Xamarin.Forms.ListView:StyleClass;Xamarin.Forms.Core", true, false);
    
    ListView.Triggers = XNode.prepare("Xamarin.Forms.ListView:Triggers;Xamarin.Forms.Core", true, false);
    
    
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
        
        
    /** Property MasterDetailPage.BackgroundImageSource of Type Xamarin.Forms.ImageSource */
    BackgroundImageSource?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property MasterDetailPage.Behaviors of Type Xamarin.Forms.Behavior */
    Behaviors?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property MasterDetailPage.Detail of Type Xamarin.Forms.Page */
    Detail?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property MasterDetailPage.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property MasterDetailPage.IconImageSource of Type Xamarin.Forms.ImageSource */
    IconImageSource?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property MasterDetailPage.Master of Type Xamarin.Forms.Page */
    Master?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property MasterDetailPage.Resources of Type System.Collections.Generic.KeyValuePair`2[System.String,System.Object] */
    Resources?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property MasterDetailPage.StyleClass of Type System.String */
    StyleClass?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property MasterDetailPage.ToolbarItems of Type Xamarin.Forms.ToolbarItem */
    ToolbarItems?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property MasterDetailPage.Triggers of Type Xamarin.Forms.TriggerBase */
    Triggers?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** MasterDetailPage */
    export const MasterDetailPage: IMasterDetailPageConstructor = XNode.prepare<IMasterDetailPage>("Xamarin.Forms.MasterDetailPage;Xamarin.Forms.Core");
    
    
    MasterDetailPage.BackgroundImageSource = XNode.prepare("Xamarin.Forms.MasterDetailPage:BackgroundImageSource;Xamarin.Forms.Core", true, true);
    
    MasterDetailPage.Behaviors = XNode.prepare("Xamarin.Forms.MasterDetailPage:Behaviors;Xamarin.Forms.Core", true, false);
    
    MasterDetailPage.Detail = XNode.prepare("Xamarin.Forms.MasterDetailPage:Detail;Xamarin.Forms.Core", true, true);
    
    MasterDetailPage.Effects = XNode.prepare("Xamarin.Forms.MasterDetailPage:Effects;Xamarin.Forms.Core", true, false);
    
    MasterDetailPage.IconImageSource = XNode.prepare("Xamarin.Forms.MasterDetailPage:IconImageSource;Xamarin.Forms.Core", true, true);
    
    MasterDetailPage.Master = XNode.prepare("Xamarin.Forms.MasterDetailPage:Master;Xamarin.Forms.Core", true, true);
    
    MasterDetailPage.Resources = XNode.prepare("Xamarin.Forms.MasterDetailPage:Resources;Xamarin.Forms.Core", true, false);
    
    MasterDetailPage.StyleClass = XNode.prepare("Xamarin.Forms.MasterDetailPage:StyleClass;Xamarin.Forms.Core", true, false);
    
    MasterDetailPage.ToolbarItems = XNode.prepare("Xamarin.Forms.MasterDetailPage:ToolbarItems;Xamarin.Forms.Core", true, false);
    
    MasterDetailPage.Triggers = XNode.prepare("Xamarin.Forms.MasterDetailPage:Triggers;Xamarin.Forms.Core", true, false);
    
    
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
        
        
    /** Property Menu.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Menu.Item of Type Xamarin.Forms.Menu */
    Item?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Menu.Items of Type Xamarin.Forms.MenuItem */
    Items?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** Menu */
    export const Menu: IMenuConstructor = XNode.prepare<IMenu>("Xamarin.Forms.Menu;Xamarin.Forms.Core");
    
    
    Menu.Effects = XNode.prepare("Xamarin.Forms.Menu:Effects;Xamarin.Forms.Core", true, false);
    
    Menu.Item = XNode.prepare("Xamarin.Forms.Menu:Item;Xamarin.Forms.Core", true, true);
    
    Menu.Items = XNode.prepare("Xamarin.Forms.Menu:Items;Xamarin.Forms.Core", true, false);
    
    
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
        
    /** Property MenuItem.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property MenuItem.IconImageSource of Type Xamarin.Forms.ImageSource */
    IconImageSource?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** MenuItem */
    export const MenuItem: IMenuItemConstructor = XNode.prepare<IMenuItem>("Xamarin.Forms.MenuItem;Xamarin.Forms.Core");
    
    MenuItem.Accelerator = (v) => ({ "Xamarin.Forms.MenuItem:Accelerator;Xamarin.Forms.Core": v  }) ;
    
    MenuItem.Effects = XNode.prepare("Xamarin.Forms.MenuItem:Effects;Xamarin.Forms.Core", true, false);
    
    MenuItem.IconImageSource = XNode.prepare("Xamarin.Forms.MenuItem:IconImageSource;Xamarin.Forms.Core", true, true);
    
    
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
        
    /** Property NavigationPage.BackgroundImageSource of Type Xamarin.Forms.ImageSource */
    BackgroundImageSource?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property NavigationPage.Behaviors of Type Xamarin.Forms.Behavior */
    Behaviors?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property NavigationPage.CurrentPage of Type Xamarin.Forms.Page */
    CurrentPage?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property NavigationPage.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property NavigationPage.IconImageSource of Type Xamarin.Forms.ImageSource */
    IconImageSource?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property NavigationPage.Resources of Type System.Collections.Generic.KeyValuePair`2[System.String,System.Object] */
    Resources?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property NavigationPage.RootPage of Type Xamarin.Forms.Page */
    RootPage?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property NavigationPage.StyleClass of Type System.String */
    StyleClass?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property NavigationPage.ToolbarItems of Type Xamarin.Forms.ToolbarItem */
    ToolbarItems?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property NavigationPage.Triggers of Type Xamarin.Forms.TriggerBase */
    Triggers?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** NavigationPage */
    export const NavigationPage: INavigationPageConstructor = XNode.prepare<INavigationPage>("Xamarin.Forms.NavigationPage;Xamarin.Forms.Core");
    
    NavigationPage.BackButtonTitle = (v) => ({ "Xamarin.Forms.NavigationPage:BackButtonTitle;Xamarin.Forms.Core": v  }) ;
    
    NavigationPage.HasNavigationBar = (v) => ({ "Xamarin.Forms.NavigationPage:HasNavigationBar;Xamarin.Forms.Core": v  }) ;
    
    NavigationPage.HasBackButton = (v) => ({ "Xamarin.Forms.NavigationPage:HasBackButton;Xamarin.Forms.Core": v  }) ;
    
    NavigationPage.TitleIconImageSource = (v) => ({ "Xamarin.Forms.NavigationPage:TitleIconImageSource;Xamarin.Forms.Core": v  }) ;
    
    NavigationPage.TitleIcon = (v) => ({ "Xamarin.Forms.NavigationPage:TitleIcon;Xamarin.Forms.Core": v  }) ;
    
    NavigationPage.TitleView = (v) => ({ "Xamarin.Forms.NavigationPage:TitleView;Xamarin.Forms.Core": v  }) ;
    
    NavigationPage.BackgroundImageSource = XNode.prepare("Xamarin.Forms.NavigationPage:BackgroundImageSource;Xamarin.Forms.Core", true, true);
    
    NavigationPage.Behaviors = XNode.prepare("Xamarin.Forms.NavigationPage:Behaviors;Xamarin.Forms.Core", true, false);
    
    NavigationPage.CurrentPage = XNode.prepare("Xamarin.Forms.NavigationPage:CurrentPage;Xamarin.Forms.Core", true, true);
    
    NavigationPage.Effects = XNode.prepare("Xamarin.Forms.NavigationPage:Effects;Xamarin.Forms.Core", true, false);
    
    NavigationPage.IconImageSource = XNode.prepare("Xamarin.Forms.NavigationPage:IconImageSource;Xamarin.Forms.Core", true, true);
    
    NavigationPage.Resources = XNode.prepare("Xamarin.Forms.NavigationPage:Resources;Xamarin.Forms.Core", true, false);
    
    NavigationPage.RootPage = XNode.prepare("Xamarin.Forms.NavigationPage:RootPage;Xamarin.Forms.Core", true, true);
    
    NavigationPage.StyleClass = XNode.prepare("Xamarin.Forms.NavigationPage:StyleClass;Xamarin.Forms.Core", true, false);
    
    NavigationPage.ToolbarItems = XNode.prepare("Xamarin.Forms.NavigationPage:ToolbarItems;Xamarin.Forms.Core", true, false);
    
    NavigationPage.Triggers = XNode.prepare("Xamarin.Forms.NavigationPage:Triggers;Xamarin.Forms.Core", true, false);
    
    
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
        
        
    /** Property OpenGLView.Behaviors of Type Xamarin.Forms.Behavior */
    Behaviors?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property OpenGLView.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property OpenGLView.GestureRecognizers of Type Xamarin.Forms.IGestureRecognizer */
    GestureRecognizers?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property OpenGLView.Resources of Type System.Collections.Generic.KeyValuePair`2[System.String,System.Object] */
    Resources?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property OpenGLView.StyleClass of Type System.String */
    StyleClass?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property OpenGLView.Triggers of Type Xamarin.Forms.TriggerBase */
    Triggers?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** OpenGLView */
    export const OpenGLView: IOpenGLViewConstructor = XNode.prepare<IOpenGLView>("Xamarin.Forms.OpenGLView;Xamarin.Forms.Core");
    
    
    OpenGLView.Behaviors = XNode.prepare("Xamarin.Forms.OpenGLView:Behaviors;Xamarin.Forms.Core", true, false);
    
    OpenGLView.Effects = XNode.prepare("Xamarin.Forms.OpenGLView:Effects;Xamarin.Forms.Core", true, false);
    
    OpenGLView.GestureRecognizers = XNode.prepare("Xamarin.Forms.OpenGLView:GestureRecognizers;Xamarin.Forms.Core", true, false);
    
    OpenGLView.Resources = XNode.prepare("Xamarin.Forms.OpenGLView:Resources;Xamarin.Forms.Core", true, false);
    
    OpenGLView.StyleClass = XNode.prepare("Xamarin.Forms.OpenGLView:StyleClass;Xamarin.Forms.Core", true, false);
    
    OpenGLView.Triggers = XNode.prepare("Xamarin.Forms.OpenGLView:Triggers;Xamarin.Forms.Core", true, false);
    
    
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
        
        
    /** Property Page.BackgroundImageSource of Type Xamarin.Forms.ImageSource */
    BackgroundImageSource?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Page.Behaviors of Type Xamarin.Forms.Behavior */
    Behaviors?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Page.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Page.IconImageSource of Type Xamarin.Forms.ImageSource */
    IconImageSource?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Page.Resources of Type System.Collections.Generic.KeyValuePair`2[System.String,System.Object] */
    Resources?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Page.StyleClass of Type System.String */
    StyleClass?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Page.ToolbarItems of Type Xamarin.Forms.ToolbarItem */
    ToolbarItems?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Page.Triggers of Type Xamarin.Forms.TriggerBase */
    Triggers?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** Page */
    export const Page: IPageConstructor = XNode.prepare<IPage>("Xamarin.Forms.Page;Xamarin.Forms.Core");
    
    
    Page.BackgroundImageSource = XNode.prepare("Xamarin.Forms.Page:BackgroundImageSource;Xamarin.Forms.Core", true, true);
    
    Page.Behaviors = XNode.prepare("Xamarin.Forms.Page:Behaviors;Xamarin.Forms.Core", true, false);
    
    Page.Effects = XNode.prepare("Xamarin.Forms.Page:Effects;Xamarin.Forms.Core", true, false);
    
    Page.IconImageSource = XNode.prepare("Xamarin.Forms.Page:IconImageSource;Xamarin.Forms.Core", true, true);
    
    Page.Resources = XNode.prepare("Xamarin.Forms.Page:Resources;Xamarin.Forms.Core", true, false);
    
    Page.StyleClass = XNode.prepare("Xamarin.Forms.Page:StyleClass;Xamarin.Forms.Core", true, false);
    
    Page.ToolbarItems = XNode.prepare("Xamarin.Forms.Page:ToolbarItems;Xamarin.Forms.Core", true, false);
    
    Page.Triggers = XNode.prepare("Xamarin.Forms.Page:Triggers;Xamarin.Forms.Core", true, false);
    
    
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
        
        
    /** Property PanGestureRecognizer.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** PanGestureRecognizer */
    export const PanGestureRecognizer: IPanGestureRecognizerConstructor = XNode.prepare<IPanGestureRecognizer>("Xamarin.Forms.PanGestureRecognizer;Xamarin.Forms.Core");
    
    
    PanGestureRecognizer.Effects = XNode.prepare("Xamarin.Forms.PanGestureRecognizer:Effects;Xamarin.Forms.Core", true, false);
    
    
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
        
        
    /** Property Picker.Behaviors of Type Xamarin.Forms.Behavior */
    Behaviors?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Picker.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Picker.GestureRecognizers of Type Xamarin.Forms.IGestureRecognizer */
    GestureRecognizers?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Picker.Items of Type System.String */
    Items?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Picker.Resources of Type System.Collections.Generic.KeyValuePair`2[System.String,System.Object] */
    Resources?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Picker.StyleClass of Type System.String */
    StyleClass?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Picker.Triggers of Type Xamarin.Forms.TriggerBase */
    Triggers?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** Picker */
    export const Picker: IPickerConstructor = XNode.prepare<IPicker>("Xamarin.Forms.Picker;Xamarin.Forms.Core");
    
    
    Picker.Behaviors = XNode.prepare("Xamarin.Forms.Picker:Behaviors;Xamarin.Forms.Core", true, false);
    
    Picker.Effects = XNode.prepare("Xamarin.Forms.Picker:Effects;Xamarin.Forms.Core", true, false);
    
    Picker.GestureRecognizers = XNode.prepare("Xamarin.Forms.Picker:GestureRecognizers;Xamarin.Forms.Core", true, false);
    
    Picker.Items = XNode.prepare("Xamarin.Forms.Picker:Items;Xamarin.Forms.Core", true, false);
    
    Picker.Resources = XNode.prepare("Xamarin.Forms.Picker:Resources;Xamarin.Forms.Core", true, false);
    
    Picker.StyleClass = XNode.prepare("Xamarin.Forms.Picker:StyleClass;Xamarin.Forms.Core", true, false);
    
    Picker.Triggers = XNode.prepare("Xamarin.Forms.Picker:Triggers;Xamarin.Forms.Core", true, false);
    
    
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
        
        
    /** Property PinchGestureRecognizer.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** PinchGestureRecognizer */
    export const PinchGestureRecognizer: IPinchGestureRecognizerConstructor = XNode.prepare<IPinchGestureRecognizer>("Xamarin.Forms.PinchGestureRecognizer;Xamarin.Forms.Core");
    
    
    PinchGestureRecognizer.Effects = XNode.prepare("Xamarin.Forms.PinchGestureRecognizer:Effects;Xamarin.Forms.Core", true, false);
    
    
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
        
        
    /** Property ProgressBar.Behaviors of Type Xamarin.Forms.Behavior */
    Behaviors?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property ProgressBar.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property ProgressBar.GestureRecognizers of Type Xamarin.Forms.IGestureRecognizer */
    GestureRecognizers?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property ProgressBar.Resources of Type System.Collections.Generic.KeyValuePair`2[System.String,System.Object] */
    Resources?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property ProgressBar.StyleClass of Type System.String */
    StyleClass?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property ProgressBar.Triggers of Type Xamarin.Forms.TriggerBase */
    Triggers?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** ProgressBar */
    export const ProgressBar: IProgressBarConstructor = XNode.prepare<IProgressBar>("Xamarin.Forms.ProgressBar;Xamarin.Forms.Core");
    
    
    ProgressBar.Behaviors = XNode.prepare("Xamarin.Forms.ProgressBar:Behaviors;Xamarin.Forms.Core", true, false);
    
    ProgressBar.Effects = XNode.prepare("Xamarin.Forms.ProgressBar:Effects;Xamarin.Forms.Core", true, false);
    
    ProgressBar.GestureRecognizers = XNode.prepare("Xamarin.Forms.ProgressBar:GestureRecognizers;Xamarin.Forms.Core", true, false);
    
    ProgressBar.Resources = XNode.prepare("Xamarin.Forms.ProgressBar:Resources;Xamarin.Forms.Core", true, false);
    
    ProgressBar.StyleClass = XNode.prepare("Xamarin.Forms.ProgressBar:StyleClass;Xamarin.Forms.Core", true, false);
    
    ProgressBar.Triggers = XNode.prepare("Xamarin.Forms.ProgressBar:Triggers;Xamarin.Forms.Core", true, false);
    
    
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
        
        
    /** Property RefreshView.Behaviors of Type Xamarin.Forms.Behavior */
    Behaviors?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property RefreshView.Content of Type Xamarin.Forms.View */
    Content?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property RefreshView.ControlTemplate of Type Xamarin.Forms.ControlTemplate */
    ControlTemplate?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property RefreshView.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property RefreshView.GestureRecognizers of Type Xamarin.Forms.IGestureRecognizer */
    GestureRecognizers?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property RefreshView.Resources of Type System.Collections.Generic.KeyValuePair`2[System.String,System.Object] */
    Resources?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property RefreshView.StyleClass of Type System.String */
    StyleClass?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property RefreshView.Triggers of Type Xamarin.Forms.TriggerBase */
    Triggers?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** RefreshView */
    export const RefreshView: IRefreshViewConstructor = XNode.prepare<IRefreshView>("Xamarin.Forms.RefreshView;Xamarin.Forms.Core");
    
    
    RefreshView.Behaviors = XNode.prepare("Xamarin.Forms.RefreshView:Behaviors;Xamarin.Forms.Core", true, false);
    
    RefreshView.Content = XNode.prepare("Xamarin.Forms.RefreshView:Content;Xamarin.Forms.Core", true, true);
    
    RefreshView.ControlTemplate = XNode.prepare("Xamarin.Forms.RefreshView:ControlTemplate;Xamarin.Forms.Core", true, false);
    
    RefreshView.Effects = XNode.prepare("Xamarin.Forms.RefreshView:Effects;Xamarin.Forms.Core", true, false);
    
    RefreshView.GestureRecognizers = XNode.prepare("Xamarin.Forms.RefreshView:GestureRecognizers;Xamarin.Forms.Core", true, false);
    
    RefreshView.Resources = XNode.prepare("Xamarin.Forms.RefreshView:Resources;Xamarin.Forms.Core", true, false);
    
    RefreshView.StyleClass = XNode.prepare("Xamarin.Forms.RefreshView:StyleClass;Xamarin.Forms.Core", true, false);
    
    RefreshView.Triggers = XNode.prepare("Xamarin.Forms.RefreshView:Triggers;Xamarin.Forms.Core", true, false);
    
    
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
        
    /** Property RelativeLayout.Behaviors of Type Xamarin.Forms.Behavior */
    Behaviors?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property RelativeLayout.Children of Type Xamarin.Forms.View */
    Children?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property RelativeLayout.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property RelativeLayout.GestureRecognizers of Type Xamarin.Forms.IGestureRecognizer */
    GestureRecognizers?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property RelativeLayout.Resources of Type System.Collections.Generic.KeyValuePair`2[System.String,System.Object] */
    Resources?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property RelativeLayout.StyleClass of Type System.String */
    StyleClass?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property RelativeLayout.Triggers of Type Xamarin.Forms.TriggerBase */
    Triggers?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** RelativeLayout */
    export const RelativeLayout: IRelativeLayoutConstructor = XNode.prepare<IRelativeLayout>("Xamarin.Forms.RelativeLayout;Xamarin.Forms.Core");
    
    RelativeLayout.XConstraint = (v) => ({ "Xamarin.Forms.RelativeLayout:XConstraint;Xamarin.Forms.Core": v  }) ;
    
    RelativeLayout.YConstraint = (v) => ({ "Xamarin.Forms.RelativeLayout:YConstraint;Xamarin.Forms.Core": v  }) ;
    
    RelativeLayout.WidthConstraint = (v) => ({ "Xamarin.Forms.RelativeLayout:WidthConstraint;Xamarin.Forms.Core": v  }) ;
    
    RelativeLayout.HeightConstraint = (v) => ({ "Xamarin.Forms.RelativeLayout:HeightConstraint;Xamarin.Forms.Core": v  }) ;
    
    RelativeLayout.BoundsConstraint = (v) => ({ "Xamarin.Forms.RelativeLayout:BoundsConstraint;Xamarin.Forms.Core": v  }) ;
    
    RelativeLayout.Behaviors = XNode.prepare("Xamarin.Forms.RelativeLayout:Behaviors;Xamarin.Forms.Core", true, false);
    
    RelativeLayout.Children = XNode.prepare("Xamarin.Forms.RelativeLayout:Children;Xamarin.Forms.Core", true, false);
    
    RelativeLayout.Effects = XNode.prepare("Xamarin.Forms.RelativeLayout:Effects;Xamarin.Forms.Core", true, false);
    
    RelativeLayout.GestureRecognizers = XNode.prepare("Xamarin.Forms.RelativeLayout:GestureRecognizers;Xamarin.Forms.Core", true, false);
    
    RelativeLayout.Resources = XNode.prepare("Xamarin.Forms.RelativeLayout:Resources;Xamarin.Forms.Core", true, false);
    
    RelativeLayout.StyleClass = XNode.prepare("Xamarin.Forms.RelativeLayout:StyleClass;Xamarin.Forms.Core", true, false);
    
    RelativeLayout.Triggers = XNode.prepare("Xamarin.Forms.RelativeLayout:Triggers;Xamarin.Forms.Core", true, false);
    
    
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
        
        
    /** Property ScrollView.Behaviors of Type Xamarin.Forms.Behavior */
    Behaviors?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property ScrollView.Content of Type Xamarin.Forms.View */
    Content?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property ScrollView.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property ScrollView.GestureRecognizers of Type Xamarin.Forms.IGestureRecognizer */
    GestureRecognizers?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property ScrollView.Resources of Type System.Collections.Generic.KeyValuePair`2[System.String,System.Object] */
    Resources?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property ScrollView.StyleClass of Type System.String */
    StyleClass?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property ScrollView.Triggers of Type Xamarin.Forms.TriggerBase */
    Triggers?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** ScrollView */
    export const ScrollView: IScrollViewConstructor = XNode.prepare<IScrollView>("Xamarin.Forms.ScrollView;Xamarin.Forms.Core");
    
    
    ScrollView.Behaviors = XNode.prepare("Xamarin.Forms.ScrollView:Behaviors;Xamarin.Forms.Core", true, false);
    
    ScrollView.Content = XNode.prepare("Xamarin.Forms.ScrollView:Content;Xamarin.Forms.Core", true, true);
    
    ScrollView.Effects = XNode.prepare("Xamarin.Forms.ScrollView:Effects;Xamarin.Forms.Core", true, false);
    
    ScrollView.GestureRecognizers = XNode.prepare("Xamarin.Forms.ScrollView:GestureRecognizers;Xamarin.Forms.Core", true, false);
    
    ScrollView.Resources = XNode.prepare("Xamarin.Forms.ScrollView:Resources;Xamarin.Forms.Core", true, false);
    
    ScrollView.StyleClass = XNode.prepare("Xamarin.Forms.ScrollView:StyleClass;Xamarin.Forms.Core", true, false);
    
    ScrollView.Triggers = XNode.prepare("Xamarin.Forms.ScrollView:Triggers;Xamarin.Forms.Core", true, false);
    
    
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
        
        
    /** Property SearchBar.Behaviors of Type Xamarin.Forms.Behavior */
    Behaviors?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property SearchBar.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property SearchBar.GestureRecognizers of Type Xamarin.Forms.IGestureRecognizer */
    GestureRecognizers?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property SearchBar.Resources of Type System.Collections.Generic.KeyValuePair`2[System.String,System.Object] */
    Resources?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property SearchBar.StyleClass of Type System.String */
    StyleClass?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property SearchBar.Triggers of Type Xamarin.Forms.TriggerBase */
    Triggers?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** SearchBar */
    export const SearchBar: ISearchBarConstructor = XNode.prepare<ISearchBar>("Xamarin.Forms.SearchBar;Xamarin.Forms.Core");
    
    
    SearchBar.Behaviors = XNode.prepare("Xamarin.Forms.SearchBar:Behaviors;Xamarin.Forms.Core", true, false);
    
    SearchBar.Effects = XNode.prepare("Xamarin.Forms.SearchBar:Effects;Xamarin.Forms.Core", true, false);
    
    SearchBar.GestureRecognizers = XNode.prepare("Xamarin.Forms.SearchBar:GestureRecognizers;Xamarin.Forms.Core", true, false);
    
    SearchBar.Resources = XNode.prepare("Xamarin.Forms.SearchBar:Resources;Xamarin.Forms.Core", true, false);
    
    SearchBar.StyleClass = XNode.prepare("Xamarin.Forms.SearchBar:StyleClass;Xamarin.Forms.Core", true, false);
    
    SearchBar.Triggers = XNode.prepare("Xamarin.Forms.SearchBar:Triggers;Xamarin.Forms.Core", true, false);
    
    
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
        
        
    /** Property BackButtonBehavior.IconOverride of Type Xamarin.Forms.ImageSource */
    IconOverride?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** BackButtonBehavior */
    export const BackButtonBehavior: IBackButtonBehaviorConstructor = XNode.prepare<IBackButtonBehavior>("Xamarin.Forms.BackButtonBehavior;Xamarin.Forms.Core");
    
    
    BackButtonBehavior.IconOverride = XNode.prepare("Xamarin.Forms.BackButtonBehavior:IconOverride;Xamarin.Forms.Core", true, true);
    
    
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
        
        
    /** Property BaseShellItem.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property BaseShellItem.FlyoutIcon of Type Xamarin.Forms.ImageSource */
    FlyoutIcon?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property BaseShellItem.Icon of Type Xamarin.Forms.ImageSource */
    Icon?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property BaseShellItem.StyleClass of Type System.String */
    StyleClass?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** BaseShellItem */
    export const BaseShellItem: IBaseShellItemConstructor = XNode.prepare<IBaseShellItem>("Xamarin.Forms.BaseShellItem;Xamarin.Forms.Core");
    
    
    BaseShellItem.Effects = XNode.prepare("Xamarin.Forms.BaseShellItem:Effects;Xamarin.Forms.Core", true, false);
    
    BaseShellItem.FlyoutIcon = XNode.prepare("Xamarin.Forms.BaseShellItem:FlyoutIcon;Xamarin.Forms.Core", true, true);
    
    BaseShellItem.Icon = XNode.prepare("Xamarin.Forms.BaseShellItem:Icon;Xamarin.Forms.Core", true, true);
    
    BaseShellItem.StyleClass = XNode.prepare("Xamarin.Forms.BaseShellItem:StyleClass;Xamarin.Forms.Core", true, false);
    
    
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
        
        
    /** Property NavigableElement.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property NavigableElement.StyleClass of Type System.String */
    StyleClass?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** NavigableElement */
    export const NavigableElement: INavigableElementConstructor = XNode.prepare<INavigableElement>("Xamarin.Forms.NavigableElement;Xamarin.Forms.Core");
    
    
    NavigableElement.Effects = XNode.prepare("Xamarin.Forms.NavigableElement:Effects;Xamarin.Forms.Core", true, false);
    
    NavigableElement.StyleClass = XNode.prepare("Xamarin.Forms.NavigableElement:StyleClass;Xamarin.Forms.Core", true, false);
    
    
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
        
        
    /** Property SearchHandler.ClearIcon of Type Xamarin.Forms.ImageSource */
    ClearIcon?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property SearchHandler.ClearPlaceholderIcon of Type Xamarin.Forms.ImageSource */
    ClearPlaceholderIcon?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property SearchHandler.ItemTemplate of Type Xamarin.Forms.DataTemplate */
    ItemTemplate?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property SearchHandler.QueryIcon of Type Xamarin.Forms.ImageSource */
    QueryIcon?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** SearchHandler */
    export const SearchHandler: ISearchHandlerConstructor = XNode.prepare<ISearchHandler>("Xamarin.Forms.SearchHandler;Xamarin.Forms.Core");
    
    
    SearchHandler.ClearIcon = XNode.prepare("Xamarin.Forms.SearchHandler:ClearIcon;Xamarin.Forms.Core", true, true);
    
    SearchHandler.ClearPlaceholderIcon = XNode.prepare("Xamarin.Forms.SearchHandler:ClearPlaceholderIcon;Xamarin.Forms.Core", true, true);
    
    SearchHandler.ItemTemplate = XNode.prepare("Xamarin.Forms.SearchHandler:ItemTemplate;Xamarin.Forms.Core", true, false);
    
    SearchHandler.QueryIcon = XNode.prepare("Xamarin.Forms.SearchHandler:QueryIcon;Xamarin.Forms.Core", true, true);
    
    
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
        
    /** Property Shell.BackgroundImageSource of Type Xamarin.Forms.ImageSource */
    BackgroundImageSource?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Shell.Behaviors of Type Xamarin.Forms.Behavior */
    Behaviors?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Shell.CurrentItem of Type Xamarin.Forms.ShellItem */
    CurrentItem?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Shell.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Shell.FlyoutBackgroundImage of Type Xamarin.Forms.ImageSource */
    FlyoutBackgroundImage?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Shell.FlyoutHeaderTemplate of Type Xamarin.Forms.DataTemplate */
    FlyoutHeaderTemplate?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Shell.FlyoutIcon of Type Xamarin.Forms.ImageSource */
    FlyoutIcon?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Shell.IconImageSource of Type Xamarin.Forms.ImageSource */
    IconImageSource?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Shell.Items of Type Xamarin.Forms.ShellItem */
    Items?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Shell.ItemTemplate of Type Xamarin.Forms.DataTemplate */
    ItemTemplate?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Shell.MenuItemTemplate of Type Xamarin.Forms.DataTemplate */
    MenuItemTemplate?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Shell.Resources of Type System.Collections.Generic.KeyValuePair`2[System.String,System.Object] */
    Resources?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Shell.StyleClass of Type System.String */
    StyleClass?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Shell.ToolbarItems of Type Xamarin.Forms.ToolbarItem */
    ToolbarItems?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Shell.Triggers of Type Xamarin.Forms.TriggerBase */
    Triggers?: ( a: any, ... nodes: XNode[]) => XNode
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
    
    Shell.BackgroundImageSource = XNode.prepare("Xamarin.Forms.Shell:BackgroundImageSource;Xamarin.Forms.Core", true, true);
    
    Shell.Behaviors = XNode.prepare("Xamarin.Forms.Shell:Behaviors;Xamarin.Forms.Core", true, false);
    
    Shell.CurrentItem = XNode.prepare("Xamarin.Forms.Shell:CurrentItem;Xamarin.Forms.Core", true, true);
    
    Shell.Effects = XNode.prepare("Xamarin.Forms.Shell:Effects;Xamarin.Forms.Core", true, false);
    
    Shell.FlyoutBackgroundImage = XNode.prepare("Xamarin.Forms.Shell:FlyoutBackgroundImage;Xamarin.Forms.Core", true, true);
    
    Shell.FlyoutHeaderTemplate = XNode.prepare("Xamarin.Forms.Shell:FlyoutHeaderTemplate;Xamarin.Forms.Core", true, false);
    
    Shell.FlyoutIcon = XNode.prepare("Xamarin.Forms.Shell:FlyoutIcon;Xamarin.Forms.Core", true, true);
    
    Shell.IconImageSource = XNode.prepare("Xamarin.Forms.Shell:IconImageSource;Xamarin.Forms.Core", true, true);
    
    Shell.Items = XNode.prepare("Xamarin.Forms.Shell:Items;Xamarin.Forms.Core", true, false);
    
    Shell.ItemTemplate = XNode.prepare("Xamarin.Forms.Shell:ItemTemplate;Xamarin.Forms.Core", true, false);
    
    Shell.MenuItemTemplate = XNode.prepare("Xamarin.Forms.Shell:MenuItemTemplate;Xamarin.Forms.Core", true, false);
    
    Shell.Resources = XNode.prepare("Xamarin.Forms.Shell:Resources;Xamarin.Forms.Core", true, false);
    
    Shell.StyleClass = XNode.prepare("Xamarin.Forms.Shell:StyleClass;Xamarin.Forms.Core", true, false);
    
    Shell.ToolbarItems = XNode.prepare("Xamarin.Forms.Shell:ToolbarItems;Xamarin.Forms.Core", true, false);
    
    Shell.Triggers = XNode.prepare("Xamarin.Forms.Shell:Triggers;Xamarin.Forms.Core", true, false);
    
    
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
        
        
    /** Property ShellContent.ContentTemplate of Type Xamarin.Forms.DataTemplate */
    ContentTemplate?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property ShellContent.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property ShellContent.FlyoutIcon of Type Xamarin.Forms.ImageSource */
    FlyoutIcon?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property ShellContent.Icon of Type Xamarin.Forms.ImageSource */
    Icon?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property ShellContent.MenuItems of Type Xamarin.Forms.MenuItem */
    MenuItems?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property ShellContent.StyleClass of Type System.String */
    StyleClass?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** ShellContent */
    export const ShellContent: IShellContentConstructor = XNode.prepare<IShellContent>("Xamarin.Forms.ShellContent;Xamarin.Forms.Core");
    
    
    ShellContent.ContentTemplate = XNode.prepare("Xamarin.Forms.ShellContent:ContentTemplate;Xamarin.Forms.Core", true, false);
    
    ShellContent.Effects = XNode.prepare("Xamarin.Forms.ShellContent:Effects;Xamarin.Forms.Core", true, false);
    
    ShellContent.FlyoutIcon = XNode.prepare("Xamarin.Forms.ShellContent:FlyoutIcon;Xamarin.Forms.Core", true, true);
    
    ShellContent.Icon = XNode.prepare("Xamarin.Forms.ShellContent:Icon;Xamarin.Forms.Core", true, true);
    
    ShellContent.MenuItems = XNode.prepare("Xamarin.Forms.ShellContent:MenuItems;Xamarin.Forms.Core", true, false);
    
    ShellContent.StyleClass = XNode.prepare("Xamarin.Forms.ShellContent:StyleClass;Xamarin.Forms.Core", true, false);
    
    
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
        
        
    /** Property ShellGroupItem.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property ShellGroupItem.FlyoutIcon of Type Xamarin.Forms.ImageSource */
    FlyoutIcon?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property ShellGroupItem.Icon of Type Xamarin.Forms.ImageSource */
    Icon?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property ShellGroupItem.StyleClass of Type System.String */
    StyleClass?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** ShellGroupItem */
    export const ShellGroupItem: IShellGroupItemConstructor = XNode.prepare<IShellGroupItem>("Xamarin.Forms.ShellGroupItem;Xamarin.Forms.Core");
    
    
    ShellGroupItem.Effects = XNode.prepare("Xamarin.Forms.ShellGroupItem:Effects;Xamarin.Forms.Core", true, false);
    
    ShellGroupItem.FlyoutIcon = XNode.prepare("Xamarin.Forms.ShellGroupItem:FlyoutIcon;Xamarin.Forms.Core", true, true);
    
    ShellGroupItem.Icon = XNode.prepare("Xamarin.Forms.ShellGroupItem:Icon;Xamarin.Forms.Core", true, true);
    
    ShellGroupItem.StyleClass = XNode.prepare("Xamarin.Forms.ShellGroupItem:StyleClass;Xamarin.Forms.Core", true, false);
    
    
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
        
        
    /** Property FlyoutItem.CurrentItem of Type Xamarin.Forms.ShellSection */
    CurrentItem?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property FlyoutItem.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property FlyoutItem.FlyoutIcon of Type Xamarin.Forms.ImageSource */
    FlyoutIcon?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property FlyoutItem.Icon of Type Xamarin.Forms.ImageSource */
    Icon?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property FlyoutItem.Items of Type Xamarin.Forms.ShellSection */
    Items?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property FlyoutItem.StyleClass of Type System.String */
    StyleClass?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** FlyoutItem */
    export const FlyoutItem: IFlyoutItemConstructor = XNode.prepare<IFlyoutItem>("Xamarin.Forms.FlyoutItem;Xamarin.Forms.Core");
    
    
    FlyoutItem.CurrentItem = XNode.prepare("Xamarin.Forms.FlyoutItem:CurrentItem;Xamarin.Forms.Core", true, true);
    
    FlyoutItem.Effects = XNode.prepare("Xamarin.Forms.FlyoutItem:Effects;Xamarin.Forms.Core", true, false);
    
    FlyoutItem.FlyoutIcon = XNode.prepare("Xamarin.Forms.FlyoutItem:FlyoutIcon;Xamarin.Forms.Core", true, true);
    
    FlyoutItem.Icon = XNode.prepare("Xamarin.Forms.FlyoutItem:Icon;Xamarin.Forms.Core", true, true);
    
    FlyoutItem.Items = XNode.prepare("Xamarin.Forms.FlyoutItem:Items;Xamarin.Forms.Core", true, false);
    
    FlyoutItem.StyleClass = XNode.prepare("Xamarin.Forms.FlyoutItem:StyleClass;Xamarin.Forms.Core", true, false);
    
    
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
        
        
    /** Property TabBar.CurrentItem of Type Xamarin.Forms.ShellSection */
    CurrentItem?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property TabBar.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property TabBar.FlyoutIcon of Type Xamarin.Forms.ImageSource */
    FlyoutIcon?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property TabBar.Icon of Type Xamarin.Forms.ImageSource */
    Icon?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property TabBar.Items of Type Xamarin.Forms.ShellSection */
    Items?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property TabBar.StyleClass of Type System.String */
    StyleClass?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** TabBar */
    export const TabBar: ITabBarConstructor = XNode.prepare<ITabBar>("Xamarin.Forms.TabBar;Xamarin.Forms.Core");
    
    
    TabBar.CurrentItem = XNode.prepare("Xamarin.Forms.TabBar:CurrentItem;Xamarin.Forms.Core", true, true);
    
    TabBar.Effects = XNode.prepare("Xamarin.Forms.TabBar:Effects;Xamarin.Forms.Core", true, false);
    
    TabBar.FlyoutIcon = XNode.prepare("Xamarin.Forms.TabBar:FlyoutIcon;Xamarin.Forms.Core", true, true);
    
    TabBar.Icon = XNode.prepare("Xamarin.Forms.TabBar:Icon;Xamarin.Forms.Core", true, true);
    
    TabBar.Items = XNode.prepare("Xamarin.Forms.TabBar:Items;Xamarin.Forms.Core", true, false);
    
    TabBar.StyleClass = XNode.prepare("Xamarin.Forms.TabBar:StyleClass;Xamarin.Forms.Core", true, false);
    
    
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
        
        
    /** Property ShellItem.CurrentItem of Type Xamarin.Forms.ShellSection */
    CurrentItem?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property ShellItem.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property ShellItem.FlyoutIcon of Type Xamarin.Forms.ImageSource */
    FlyoutIcon?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property ShellItem.Icon of Type Xamarin.Forms.ImageSource */
    Icon?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property ShellItem.Items of Type Xamarin.Forms.ShellSection */
    Items?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property ShellItem.StyleClass of Type System.String */
    StyleClass?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** ShellItem */
    export const ShellItem: IShellItemConstructor = XNode.prepare<IShellItem>("Xamarin.Forms.ShellItem;Xamarin.Forms.Core");
    
    
    ShellItem.CurrentItem = XNode.prepare("Xamarin.Forms.ShellItem:CurrentItem;Xamarin.Forms.Core", true, true);
    
    ShellItem.Effects = XNode.prepare("Xamarin.Forms.ShellItem:Effects;Xamarin.Forms.Core", true, false);
    
    ShellItem.FlyoutIcon = XNode.prepare("Xamarin.Forms.ShellItem:FlyoutIcon;Xamarin.Forms.Core", true, true);
    
    ShellItem.Icon = XNode.prepare("Xamarin.Forms.ShellItem:Icon;Xamarin.Forms.Core", true, true);
    
    ShellItem.Items = XNode.prepare("Xamarin.Forms.ShellItem:Items;Xamarin.Forms.Core", true, false);
    
    ShellItem.StyleClass = XNode.prepare("Xamarin.Forms.ShellItem:StyleClass;Xamarin.Forms.Core", true, false);
    
    
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
        
        
    /** Property Tab.CurrentItem of Type Xamarin.Forms.ShellContent */
    CurrentItem?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Tab.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Tab.FlyoutIcon of Type Xamarin.Forms.ImageSource */
    FlyoutIcon?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Tab.Icon of Type Xamarin.Forms.ImageSource */
    Icon?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Tab.Items of Type Xamarin.Forms.ShellContent */
    Items?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Tab.StyleClass of Type System.String */
    StyleClass?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** Tab */
    export const Tab: ITabConstructor = XNode.prepare<ITab>("Xamarin.Forms.Tab;Xamarin.Forms.Core");
    
    
    Tab.CurrentItem = XNode.prepare("Xamarin.Forms.Tab:CurrentItem;Xamarin.Forms.Core", true, true);
    
    Tab.Effects = XNode.prepare("Xamarin.Forms.Tab:Effects;Xamarin.Forms.Core", true, false);
    
    Tab.FlyoutIcon = XNode.prepare("Xamarin.Forms.Tab:FlyoutIcon;Xamarin.Forms.Core", true, true);
    
    Tab.Icon = XNode.prepare("Xamarin.Forms.Tab:Icon;Xamarin.Forms.Core", true, true);
    
    Tab.Items = XNode.prepare("Xamarin.Forms.Tab:Items;Xamarin.Forms.Core", true, false);
    
    Tab.StyleClass = XNode.prepare("Xamarin.Forms.Tab:StyleClass;Xamarin.Forms.Core", true, false);
    
    
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
        
        
    /** Property ShellSection.CurrentItem of Type Xamarin.Forms.ShellContent */
    CurrentItem?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property ShellSection.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property ShellSection.FlyoutIcon of Type Xamarin.Forms.ImageSource */
    FlyoutIcon?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property ShellSection.Icon of Type Xamarin.Forms.ImageSource */
    Icon?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property ShellSection.Items of Type Xamarin.Forms.ShellContent */
    Items?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property ShellSection.StyleClass of Type System.String */
    StyleClass?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** ShellSection */
    export const ShellSection: IShellSectionConstructor = XNode.prepare<IShellSection>("Xamarin.Forms.ShellSection;Xamarin.Forms.Core");
    
    
    ShellSection.CurrentItem = XNode.prepare("Xamarin.Forms.ShellSection:CurrentItem;Xamarin.Forms.Core", true, true);
    
    ShellSection.Effects = XNode.prepare("Xamarin.Forms.ShellSection:Effects;Xamarin.Forms.Core", true, false);
    
    ShellSection.FlyoutIcon = XNode.prepare("Xamarin.Forms.ShellSection:FlyoutIcon;Xamarin.Forms.Core", true, true);
    
    ShellSection.Icon = XNode.prepare("Xamarin.Forms.ShellSection:Icon;Xamarin.Forms.Core", true, true);
    
    ShellSection.Items = XNode.prepare("Xamarin.Forms.ShellSection:Items;Xamarin.Forms.Core", true, false);
    
    ShellSection.StyleClass = XNode.prepare("Xamarin.Forms.ShellSection:StyleClass;Xamarin.Forms.Core", true, false);
    
    
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
        
        
    /** Property Slider.Behaviors of Type Xamarin.Forms.Behavior */
    Behaviors?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Slider.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Slider.GestureRecognizers of Type Xamarin.Forms.IGestureRecognizer */
    GestureRecognizers?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Slider.Resources of Type System.Collections.Generic.KeyValuePair`2[System.String,System.Object] */
    Resources?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Slider.StyleClass of Type System.String */
    StyleClass?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Slider.ThumbImageSource of Type Xamarin.Forms.ImageSource */
    ThumbImageSource?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Slider.Triggers of Type Xamarin.Forms.TriggerBase */
    Triggers?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** Slider */
    export const Slider: ISliderConstructor = XNode.prepare<ISlider>("Xamarin.Forms.Slider;Xamarin.Forms.Core");
    
    
    Slider.Behaviors = XNode.prepare("Xamarin.Forms.Slider:Behaviors;Xamarin.Forms.Core", true, false);
    
    Slider.Effects = XNode.prepare("Xamarin.Forms.Slider:Effects;Xamarin.Forms.Core", true, false);
    
    Slider.GestureRecognizers = XNode.prepare("Xamarin.Forms.Slider:GestureRecognizers;Xamarin.Forms.Core", true, false);
    
    Slider.Resources = XNode.prepare("Xamarin.Forms.Slider:Resources;Xamarin.Forms.Core", true, false);
    
    Slider.StyleClass = XNode.prepare("Xamarin.Forms.Slider:StyleClass;Xamarin.Forms.Core", true, false);
    
    Slider.ThumbImageSource = XNode.prepare("Xamarin.Forms.Slider:ThumbImageSource;Xamarin.Forms.Core", true, true);
    
    Slider.Triggers = XNode.prepare("Xamarin.Forms.Slider:Triggers;Xamarin.Forms.Core", true, false);
    
    
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
        
        
    /** Property Span.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Span.GestureRecognizers of Type Xamarin.Forms.IGestureRecognizer */
    GestureRecognizers?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** Span */
    export const Span: ISpanConstructor = XNode.prepare<ISpan>("Xamarin.Forms.Span;Xamarin.Forms.Core");
    
    
    Span.Effects = XNode.prepare("Xamarin.Forms.Span:Effects;Xamarin.Forms.Core", true, false);
    
    Span.GestureRecognizers = XNode.prepare("Xamarin.Forms.Span:GestureRecognizers;Xamarin.Forms.Core", true, false);
    
    
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
        
        
    /** Property StackLayout.Behaviors of Type Xamarin.Forms.Behavior */
    Behaviors?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property StackLayout.Children of Type Xamarin.Forms.View */
    Children?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property StackLayout.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property StackLayout.GestureRecognizers of Type Xamarin.Forms.IGestureRecognizer */
    GestureRecognizers?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property StackLayout.Resources of Type System.Collections.Generic.KeyValuePair`2[System.String,System.Object] */
    Resources?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property StackLayout.StyleClass of Type System.String */
    StyleClass?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property StackLayout.Triggers of Type Xamarin.Forms.TriggerBase */
    Triggers?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** StackLayout */
    export const StackLayout: IStackLayoutConstructor = XNode.prepare<IStackLayout>("Xamarin.Forms.StackLayout;Xamarin.Forms.Core");
    
    
    StackLayout.Behaviors = XNode.prepare("Xamarin.Forms.StackLayout:Behaviors;Xamarin.Forms.Core", true, false);
    
    StackLayout.Children = XNode.prepare("Xamarin.Forms.StackLayout:Children;Xamarin.Forms.Core", true, false);
    
    StackLayout.Effects = XNode.prepare("Xamarin.Forms.StackLayout:Effects;Xamarin.Forms.Core", true, false);
    
    StackLayout.GestureRecognizers = XNode.prepare("Xamarin.Forms.StackLayout:GestureRecognizers;Xamarin.Forms.Core", true, false);
    
    StackLayout.Resources = XNode.prepare("Xamarin.Forms.StackLayout:Resources;Xamarin.Forms.Core", true, false);
    
    StackLayout.StyleClass = XNode.prepare("Xamarin.Forms.StackLayout:StyleClass;Xamarin.Forms.Core", true, false);
    
    StackLayout.Triggers = XNode.prepare("Xamarin.Forms.StackLayout:Triggers;Xamarin.Forms.Core", true, false);
    
    
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
        
        
    /** Property Stepper.Behaviors of Type Xamarin.Forms.Behavior */
    Behaviors?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Stepper.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Stepper.GestureRecognizers of Type Xamarin.Forms.IGestureRecognizer */
    GestureRecognizers?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Stepper.Resources of Type System.Collections.Generic.KeyValuePair`2[System.String,System.Object] */
    Resources?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Stepper.StyleClass of Type System.String */
    StyleClass?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Stepper.Triggers of Type Xamarin.Forms.TriggerBase */
    Triggers?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** Stepper */
    export const Stepper: IStepperConstructor = XNode.prepare<IStepper>("Xamarin.Forms.Stepper;Xamarin.Forms.Core");
    
    
    Stepper.Behaviors = XNode.prepare("Xamarin.Forms.Stepper:Behaviors;Xamarin.Forms.Core", true, false);
    
    Stepper.Effects = XNode.prepare("Xamarin.Forms.Stepper:Effects;Xamarin.Forms.Core", true, false);
    
    Stepper.GestureRecognizers = XNode.prepare("Xamarin.Forms.Stepper:GestureRecognizers;Xamarin.Forms.Core", true, false);
    
    Stepper.Resources = XNode.prepare("Xamarin.Forms.Stepper:Resources;Xamarin.Forms.Core", true, false);
    
    Stepper.StyleClass = XNode.prepare("Xamarin.Forms.Stepper:StyleClass;Xamarin.Forms.Core", true, false);
    
    Stepper.Triggers = XNode.prepare("Xamarin.Forms.Stepper:Triggers;Xamarin.Forms.Core", true, false);
    
    
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
        
        
    /** Property StreamImageSource.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** StreamImageSource */
    export const StreamImageSource: IStreamImageSourceConstructor = XNode.prepare<IStreamImageSource>("Xamarin.Forms.StreamImageSource;Xamarin.Forms.Core");
    
    
    StreamImageSource.Effects = XNode.prepare("Xamarin.Forms.StreamImageSource:Effects;Xamarin.Forms.Core", true, false);
    
    
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
        
        
    /** Property SwipeGestureRecognizer.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** SwipeGestureRecognizer */
    export const SwipeGestureRecognizer: ISwipeGestureRecognizerConstructor = XNode.prepare<ISwipeGestureRecognizer>("Xamarin.Forms.SwipeGestureRecognizer;Xamarin.Forms.Core");
    
    
    SwipeGestureRecognizer.Effects = XNode.prepare("Xamarin.Forms.SwipeGestureRecognizer:Effects;Xamarin.Forms.Core", true, false);
    
    
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
        
        
    /** Property SwipeItem.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property SwipeItem.IconImageSource of Type Xamarin.Forms.ImageSource */
    IconImageSource?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** SwipeItem */
    export const SwipeItem: ISwipeItemConstructor = XNode.prepare<ISwipeItem>("Xamarin.Forms.SwipeItem;Xamarin.Forms.Core");
    
    
    SwipeItem.Effects = XNode.prepare("Xamarin.Forms.SwipeItem:Effects;Xamarin.Forms.Core", true, false);
    
    SwipeItem.IconImageSource = XNode.prepare("Xamarin.Forms.SwipeItem:IconImageSource;Xamarin.Forms.Core", true, true);
    
    
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
        
        
    /** Property SwipeItems.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** SwipeItems */
    export const SwipeItems: ISwipeItemsConstructor = XNode.prepare<ISwipeItems>("Xamarin.Forms.SwipeItems;Xamarin.Forms.Core");
    
    
    SwipeItems.Effects = XNode.prepare("Xamarin.Forms.SwipeItems:Effects;Xamarin.Forms.Core", true, false);
    
    
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
        
        
    /** Property SwipeItemView.Behaviors of Type Xamarin.Forms.Behavior */
    Behaviors?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property SwipeItemView.Content of Type Xamarin.Forms.View */
    Content?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property SwipeItemView.ControlTemplate of Type Xamarin.Forms.ControlTemplate */
    ControlTemplate?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property SwipeItemView.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property SwipeItemView.GestureRecognizers of Type Xamarin.Forms.IGestureRecognizer */
    GestureRecognizers?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property SwipeItemView.Resources of Type System.Collections.Generic.KeyValuePair`2[System.String,System.Object] */
    Resources?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property SwipeItemView.StyleClass of Type System.String */
    StyleClass?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property SwipeItemView.Triggers of Type Xamarin.Forms.TriggerBase */
    Triggers?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** SwipeItemView */
    export const SwipeItemView: ISwipeItemViewConstructor = XNode.prepare<ISwipeItemView>("Xamarin.Forms.SwipeItemView;Xamarin.Forms.Core");
    
    
    SwipeItemView.Behaviors = XNode.prepare("Xamarin.Forms.SwipeItemView:Behaviors;Xamarin.Forms.Core", true, false);
    
    SwipeItemView.Content = XNode.prepare("Xamarin.Forms.SwipeItemView:Content;Xamarin.Forms.Core", true, true);
    
    SwipeItemView.ControlTemplate = XNode.prepare("Xamarin.Forms.SwipeItemView:ControlTemplate;Xamarin.Forms.Core", true, false);
    
    SwipeItemView.Effects = XNode.prepare("Xamarin.Forms.SwipeItemView:Effects;Xamarin.Forms.Core", true, false);
    
    SwipeItemView.GestureRecognizers = XNode.prepare("Xamarin.Forms.SwipeItemView:GestureRecognizers;Xamarin.Forms.Core", true, false);
    
    SwipeItemView.Resources = XNode.prepare("Xamarin.Forms.SwipeItemView:Resources;Xamarin.Forms.Core", true, false);
    
    SwipeItemView.StyleClass = XNode.prepare("Xamarin.Forms.SwipeItemView:StyleClass;Xamarin.Forms.Core", true, false);
    
    SwipeItemView.Triggers = XNode.prepare("Xamarin.Forms.SwipeItemView:Triggers;Xamarin.Forms.Core", true, false);
    
    
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
        
        
    /** Property SwipeView.Behaviors of Type Xamarin.Forms.Behavior */
    Behaviors?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property SwipeView.BottomItems of Type Xamarin.Forms.ISwipeItem */
    BottomItems?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property SwipeView.Content of Type Xamarin.Forms.View */
    Content?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property SwipeView.ControlTemplate of Type Xamarin.Forms.ControlTemplate */
    ControlTemplate?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property SwipeView.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property SwipeView.GestureRecognizers of Type Xamarin.Forms.IGestureRecognizer */
    GestureRecognizers?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property SwipeView.LeftItems of Type Xamarin.Forms.ISwipeItem */
    LeftItems?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property SwipeView.Resources of Type System.Collections.Generic.KeyValuePair`2[System.String,System.Object] */
    Resources?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property SwipeView.RightItems of Type Xamarin.Forms.ISwipeItem */
    RightItems?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property SwipeView.StyleClass of Type System.String */
    StyleClass?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property SwipeView.TopItems of Type Xamarin.Forms.ISwipeItem */
    TopItems?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property SwipeView.Triggers of Type Xamarin.Forms.TriggerBase */
    Triggers?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** SwipeView */
    export const SwipeView: ISwipeViewConstructor = XNode.prepare<ISwipeView>("Xamarin.Forms.SwipeView;Xamarin.Forms.Core");
    
    
    SwipeView.Behaviors = XNode.prepare("Xamarin.Forms.SwipeView:Behaviors;Xamarin.Forms.Core", true, false);
    
    SwipeView.BottomItems = XNode.prepare("Xamarin.Forms.SwipeView:BottomItems;Xamarin.Forms.Core", true, true);
    
    SwipeView.Content = XNode.prepare("Xamarin.Forms.SwipeView:Content;Xamarin.Forms.Core", true, true);
    
    SwipeView.ControlTemplate = XNode.prepare("Xamarin.Forms.SwipeView:ControlTemplate;Xamarin.Forms.Core", true, false);
    
    SwipeView.Effects = XNode.prepare("Xamarin.Forms.SwipeView:Effects;Xamarin.Forms.Core", true, false);
    
    SwipeView.GestureRecognizers = XNode.prepare("Xamarin.Forms.SwipeView:GestureRecognizers;Xamarin.Forms.Core", true, false);
    
    SwipeView.LeftItems = XNode.prepare("Xamarin.Forms.SwipeView:LeftItems;Xamarin.Forms.Core", true, true);
    
    SwipeView.Resources = XNode.prepare("Xamarin.Forms.SwipeView:Resources;Xamarin.Forms.Core", true, false);
    
    SwipeView.RightItems = XNode.prepare("Xamarin.Forms.SwipeView:RightItems;Xamarin.Forms.Core", true, true);
    
    SwipeView.StyleClass = XNode.prepare("Xamarin.Forms.SwipeView:StyleClass;Xamarin.Forms.Core", true, false);
    
    SwipeView.TopItems = XNode.prepare("Xamarin.Forms.SwipeView:TopItems;Xamarin.Forms.Core", true, true);
    
    SwipeView.Triggers = XNode.prepare("Xamarin.Forms.SwipeView:Triggers;Xamarin.Forms.Core", true, false);
    
    
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
        
        
    /** Property Switch.Behaviors of Type Xamarin.Forms.Behavior */
    Behaviors?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Switch.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Switch.GestureRecognizers of Type Xamarin.Forms.IGestureRecognizer */
    GestureRecognizers?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Switch.Resources of Type System.Collections.Generic.KeyValuePair`2[System.String,System.Object] */
    Resources?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Switch.StyleClass of Type System.String */
    StyleClass?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property Switch.Triggers of Type Xamarin.Forms.TriggerBase */
    Triggers?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** Switch */
    export const Switch: ISwitchConstructor = XNode.prepare<ISwitch>("Xamarin.Forms.Switch;Xamarin.Forms.Core");
    
    
    Switch.Behaviors = XNode.prepare("Xamarin.Forms.Switch:Behaviors;Xamarin.Forms.Core", true, false);
    
    Switch.Effects = XNode.prepare("Xamarin.Forms.Switch:Effects;Xamarin.Forms.Core", true, false);
    
    Switch.GestureRecognizers = XNode.prepare("Xamarin.Forms.Switch:GestureRecognizers;Xamarin.Forms.Core", true, false);
    
    Switch.Resources = XNode.prepare("Xamarin.Forms.Switch:Resources;Xamarin.Forms.Core", true, false);
    
    Switch.StyleClass = XNode.prepare("Xamarin.Forms.Switch:StyleClass;Xamarin.Forms.Core", true, false);
    
    Switch.Triggers = XNode.prepare("Xamarin.Forms.Switch:Triggers;Xamarin.Forms.Core", true, false);
    
    
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
        
        
    /** Property TabbedPage.BackgroundImageSource of Type Xamarin.Forms.ImageSource */
    BackgroundImageSource?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property TabbedPage.Behaviors of Type Xamarin.Forms.Behavior */
    Behaviors?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property TabbedPage.Children of Type Xamarin.Forms.Page */
    Children?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property TabbedPage.CurrentPage of Type Xamarin.Forms.Page */
    CurrentPage?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property TabbedPage.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property TabbedPage.IconImageSource of Type Xamarin.Forms.ImageSource */
    IconImageSource?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property TabbedPage.ItemTemplate of Type Xamarin.Forms.DataTemplate */
    ItemTemplate?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property TabbedPage.Resources of Type System.Collections.Generic.KeyValuePair`2[System.String,System.Object] */
    Resources?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property TabbedPage.StyleClass of Type System.String */
    StyleClass?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property TabbedPage.ToolbarItems of Type Xamarin.Forms.ToolbarItem */
    ToolbarItems?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property TabbedPage.Triggers of Type Xamarin.Forms.TriggerBase */
    Triggers?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** TabbedPage */
    export const TabbedPage: ITabbedPageConstructor = XNode.prepare<ITabbedPage>("Xamarin.Forms.TabbedPage;Xamarin.Forms.Core");
    
    
    TabbedPage.BackgroundImageSource = XNode.prepare("Xamarin.Forms.TabbedPage:BackgroundImageSource;Xamarin.Forms.Core", true, true);
    
    TabbedPage.Behaviors = XNode.prepare("Xamarin.Forms.TabbedPage:Behaviors;Xamarin.Forms.Core", true, false);
    
    TabbedPage.Children = XNode.prepare("Xamarin.Forms.TabbedPage:Children;Xamarin.Forms.Core", true, false);
    
    TabbedPage.CurrentPage = XNode.prepare("Xamarin.Forms.TabbedPage:CurrentPage;Xamarin.Forms.Core", true, true);
    
    TabbedPage.Effects = XNode.prepare("Xamarin.Forms.TabbedPage:Effects;Xamarin.Forms.Core", true, false);
    
    TabbedPage.IconImageSource = XNode.prepare("Xamarin.Forms.TabbedPage:IconImageSource;Xamarin.Forms.Core", true, true);
    
    TabbedPage.ItemTemplate = XNode.prepare("Xamarin.Forms.TabbedPage:ItemTemplate;Xamarin.Forms.Core", true, false);
    
    TabbedPage.Resources = XNode.prepare("Xamarin.Forms.TabbedPage:Resources;Xamarin.Forms.Core", true, false);
    
    TabbedPage.StyleClass = XNode.prepare("Xamarin.Forms.TabbedPage:StyleClass;Xamarin.Forms.Core", true, false);
    
    TabbedPage.ToolbarItems = XNode.prepare("Xamarin.Forms.TabbedPage:ToolbarItems;Xamarin.Forms.Core", true, false);
    
    TabbedPage.Triggers = XNode.prepare("Xamarin.Forms.TabbedPage:Triggers;Xamarin.Forms.Core", true, false);
    
    
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
        
        
    /** Property TableRoot.Item of Type Xamarin.Forms.Cell */
    Item?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** TableRoot */
    export const TableRoot: ITableRootConstructor = XNode.prepare<ITableRoot>("Xamarin.Forms.TableRoot;Xamarin.Forms.Core");
    
    
    TableRoot.Item = XNode.prepare("Xamarin.Forms.TableRoot:Item;Xamarin.Forms.Core", true, false);
    
    
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
        
        
    /** Property TableSection.Item of Type Xamarin.Forms.Cell */
    Item?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** TableSection */
    export const TableSection: ITableSectionConstructor = XNode.prepare<ITableSection>("Xamarin.Forms.TableSection;Xamarin.Forms.Core");
    
    
    TableSection.Item = XNode.prepare("Xamarin.Forms.TableSection:Item;Xamarin.Forms.Core", true, true);
    
    
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
        
        
    /** Property TableView.Behaviors of Type Xamarin.Forms.Behavior */
    Behaviors?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property TableView.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property TableView.GestureRecognizers of Type Xamarin.Forms.IGestureRecognizer */
    GestureRecognizers?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property TableView.Resources of Type System.Collections.Generic.KeyValuePair`2[System.String,System.Object] */
    Resources?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property TableView.Root of Type Xamarin.Forms.TableSection */
    Root?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property TableView.StyleClass of Type System.String */
    StyleClass?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property TableView.Triggers of Type Xamarin.Forms.TriggerBase */
    Triggers?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** TableView */
    export const TableView: ITableViewConstructor = XNode.prepare<ITableView>("Xamarin.Forms.TableView;Xamarin.Forms.Core");
    
    
    TableView.Behaviors = XNode.prepare("Xamarin.Forms.TableView:Behaviors;Xamarin.Forms.Core", true, false);
    
    TableView.Effects = XNode.prepare("Xamarin.Forms.TableView:Effects;Xamarin.Forms.Core", true, false);
    
    TableView.GestureRecognizers = XNode.prepare("Xamarin.Forms.TableView:GestureRecognizers;Xamarin.Forms.Core", true, false);
    
    TableView.Resources = XNode.prepare("Xamarin.Forms.TableView:Resources;Xamarin.Forms.Core", true, false);
    
    TableView.Root = XNode.prepare("Xamarin.Forms.TableView:Root;Xamarin.Forms.Core", true, false);
    
    TableView.StyleClass = XNode.prepare("Xamarin.Forms.TableView:StyleClass;Xamarin.Forms.Core", true, false);
    
    TableView.Triggers = XNode.prepare("Xamarin.Forms.TableView:Triggers;Xamarin.Forms.Core", true, false);
    
    
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
        
        
    /** Property TapGestureRecognizer.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** TapGestureRecognizer */
    export const TapGestureRecognizer: ITapGestureRecognizerConstructor = XNode.prepare<ITapGestureRecognizer>("Xamarin.Forms.TapGestureRecognizer;Xamarin.Forms.Core");
    
    
    TapGestureRecognizer.Effects = XNode.prepare("Xamarin.Forms.TapGestureRecognizer:Effects;Xamarin.Forms.Core", true, false);
    
    
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
        
        
    /** Property TemplatedPage.BackgroundImageSource of Type Xamarin.Forms.ImageSource */
    BackgroundImageSource?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property TemplatedPage.Behaviors of Type Xamarin.Forms.Behavior */
    Behaviors?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property TemplatedPage.ControlTemplate of Type Xamarin.Forms.ControlTemplate */
    ControlTemplate?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property TemplatedPage.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property TemplatedPage.IconImageSource of Type Xamarin.Forms.ImageSource */
    IconImageSource?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property TemplatedPage.Resources of Type System.Collections.Generic.KeyValuePair`2[System.String,System.Object] */
    Resources?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property TemplatedPage.StyleClass of Type System.String */
    StyleClass?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property TemplatedPage.ToolbarItems of Type Xamarin.Forms.ToolbarItem */
    ToolbarItems?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property TemplatedPage.Triggers of Type Xamarin.Forms.TriggerBase */
    Triggers?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** TemplatedPage */
    export const TemplatedPage: ITemplatedPageConstructor = XNode.prepare<ITemplatedPage>("Xamarin.Forms.TemplatedPage;Xamarin.Forms.Core");
    
    
    TemplatedPage.BackgroundImageSource = XNode.prepare("Xamarin.Forms.TemplatedPage:BackgroundImageSource;Xamarin.Forms.Core", true, true);
    
    TemplatedPage.Behaviors = XNode.prepare("Xamarin.Forms.TemplatedPage:Behaviors;Xamarin.Forms.Core", true, false);
    
    TemplatedPage.ControlTemplate = XNode.prepare("Xamarin.Forms.TemplatedPage:ControlTemplate;Xamarin.Forms.Core", true, false);
    
    TemplatedPage.Effects = XNode.prepare("Xamarin.Forms.TemplatedPage:Effects;Xamarin.Forms.Core", true, false);
    
    TemplatedPage.IconImageSource = XNode.prepare("Xamarin.Forms.TemplatedPage:IconImageSource;Xamarin.Forms.Core", true, true);
    
    TemplatedPage.Resources = XNode.prepare("Xamarin.Forms.TemplatedPage:Resources;Xamarin.Forms.Core", true, false);
    
    TemplatedPage.StyleClass = XNode.prepare("Xamarin.Forms.TemplatedPage:StyleClass;Xamarin.Forms.Core", true, false);
    
    TemplatedPage.ToolbarItems = XNode.prepare("Xamarin.Forms.TemplatedPage:ToolbarItems;Xamarin.Forms.Core", true, false);
    
    TemplatedPage.Triggers = XNode.prepare("Xamarin.Forms.TemplatedPage:Triggers;Xamarin.Forms.Core", true, false);
    
    
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
        
        
    /** Property TemplatedView.Behaviors of Type Xamarin.Forms.Behavior */
    Behaviors?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property TemplatedView.ControlTemplate of Type Xamarin.Forms.ControlTemplate */
    ControlTemplate?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property TemplatedView.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property TemplatedView.GestureRecognizers of Type Xamarin.Forms.IGestureRecognizer */
    GestureRecognizers?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property TemplatedView.Resources of Type System.Collections.Generic.KeyValuePair`2[System.String,System.Object] */
    Resources?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property TemplatedView.StyleClass of Type System.String */
    StyleClass?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property TemplatedView.Triggers of Type Xamarin.Forms.TriggerBase */
    Triggers?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** TemplatedView */
    export const TemplatedView: ITemplatedViewConstructor = XNode.prepare<ITemplatedView>("Xamarin.Forms.TemplatedView;Xamarin.Forms.Core");
    
    
    TemplatedView.Behaviors = XNode.prepare("Xamarin.Forms.TemplatedView:Behaviors;Xamarin.Forms.Core", true, false);
    
    TemplatedView.ControlTemplate = XNode.prepare("Xamarin.Forms.TemplatedView:ControlTemplate;Xamarin.Forms.Core", true, false);
    
    TemplatedView.Effects = XNode.prepare("Xamarin.Forms.TemplatedView:Effects;Xamarin.Forms.Core", true, false);
    
    TemplatedView.GestureRecognizers = XNode.prepare("Xamarin.Forms.TemplatedView:GestureRecognizers;Xamarin.Forms.Core", true, false);
    
    TemplatedView.Resources = XNode.prepare("Xamarin.Forms.TemplatedView:Resources;Xamarin.Forms.Core", true, false);
    
    TemplatedView.StyleClass = XNode.prepare("Xamarin.Forms.TemplatedView:StyleClass;Xamarin.Forms.Core", true, false);
    
    TemplatedView.Triggers = XNode.prepare("Xamarin.Forms.TemplatedView:Triggers;Xamarin.Forms.Core", true, false);
    
    
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
        
        
    /** Property TimePicker.Behaviors of Type Xamarin.Forms.Behavior */
    Behaviors?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property TimePicker.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property TimePicker.GestureRecognizers of Type Xamarin.Forms.IGestureRecognizer */
    GestureRecognizers?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property TimePicker.Resources of Type System.Collections.Generic.KeyValuePair`2[System.String,System.Object] */
    Resources?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property TimePicker.StyleClass of Type System.String */
    StyleClass?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property TimePicker.Triggers of Type Xamarin.Forms.TriggerBase */
    Triggers?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** TimePicker */
    export const TimePicker: ITimePickerConstructor = XNode.prepare<ITimePicker>("Xamarin.Forms.TimePicker;Xamarin.Forms.Core");
    
    
    TimePicker.Behaviors = XNode.prepare("Xamarin.Forms.TimePicker:Behaviors;Xamarin.Forms.Core", true, false);
    
    TimePicker.Effects = XNode.prepare("Xamarin.Forms.TimePicker:Effects;Xamarin.Forms.Core", true, false);
    
    TimePicker.GestureRecognizers = XNode.prepare("Xamarin.Forms.TimePicker:GestureRecognizers;Xamarin.Forms.Core", true, false);
    
    TimePicker.Resources = XNode.prepare("Xamarin.Forms.TimePicker:Resources;Xamarin.Forms.Core", true, false);
    
    TimePicker.StyleClass = XNode.prepare("Xamarin.Forms.TimePicker:StyleClass;Xamarin.Forms.Core", true, false);
    
    TimePicker.Triggers = XNode.prepare("Xamarin.Forms.TimePicker:Triggers;Xamarin.Forms.Core", true, false);
    
    
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
        
        
    /** Property ToolbarItem.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property ToolbarItem.IconImageSource of Type Xamarin.Forms.ImageSource */
    IconImageSource?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** ToolbarItem */
    export const ToolbarItem: IToolbarItemConstructor = XNode.prepare<IToolbarItem>("Xamarin.Forms.ToolbarItem;Xamarin.Forms.Core");
    
    
    ToolbarItem.Effects = XNode.prepare("Xamarin.Forms.ToolbarItem:Effects;Xamarin.Forms.Core", true, false);
    
    ToolbarItem.IconImageSource = XNode.prepare("Xamarin.Forms.ToolbarItem:IconImageSource;Xamarin.Forms.Core", true, true);
    
    
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
        
        
    /** Property UriImageSource.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** UriImageSource */
    export const UriImageSource: IUriImageSourceConstructor = XNode.prepare<IUriImageSource>("Xamarin.Forms.UriImageSource;Xamarin.Forms.Core");
    
    
    UriImageSource.Effects = XNode.prepare("Xamarin.Forms.UriImageSource:Effects;Xamarin.Forms.Core", true, false);
    
    
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
        
        
    /** Property View.Behaviors of Type Xamarin.Forms.Behavior */
    Behaviors?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property View.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property View.GestureRecognizers of Type Xamarin.Forms.IGestureRecognizer */
    GestureRecognizers?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property View.Resources of Type System.Collections.Generic.KeyValuePair`2[System.String,System.Object] */
    Resources?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property View.StyleClass of Type System.String */
    StyleClass?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property View.Triggers of Type Xamarin.Forms.TriggerBase */
    Triggers?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** View */
    export const View: IViewConstructor = XNode.prepare<IView>("Xamarin.Forms.View;Xamarin.Forms.Core");
    
    
    View.Behaviors = XNode.prepare("Xamarin.Forms.View:Behaviors;Xamarin.Forms.Core", true, false);
    
    View.Effects = XNode.prepare("Xamarin.Forms.View:Effects;Xamarin.Forms.Core", true, false);
    
    View.GestureRecognizers = XNode.prepare("Xamarin.Forms.View:GestureRecognizers;Xamarin.Forms.Core", true, false);
    
    View.Resources = XNode.prepare("Xamarin.Forms.View:Resources;Xamarin.Forms.Core", true, false);
    
    View.StyleClass = XNode.prepare("Xamarin.Forms.View:StyleClass;Xamarin.Forms.Core", true, false);
    
    View.Triggers = XNode.prepare("Xamarin.Forms.View:Triggers;Xamarin.Forms.Core", true, false);
    
    
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
        
        
    /** Property VisualElement.Behaviors of Type Xamarin.Forms.Behavior */
    Behaviors?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property VisualElement.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property VisualElement.Resources of Type System.Collections.Generic.KeyValuePair`2[System.String,System.Object] */
    Resources?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property VisualElement.StyleClass of Type System.String */
    StyleClass?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property VisualElement.Triggers of Type Xamarin.Forms.TriggerBase */
    Triggers?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** VisualElement */
    export const VisualElement: IVisualElementConstructor = XNode.prepare<IVisualElement>("Xamarin.Forms.VisualElement;Xamarin.Forms.Core");
    
    
    VisualElement.Behaviors = XNode.prepare("Xamarin.Forms.VisualElement:Behaviors;Xamarin.Forms.Core", true, false);
    
    VisualElement.Effects = XNode.prepare("Xamarin.Forms.VisualElement:Effects;Xamarin.Forms.Core", true, false);
    
    VisualElement.Resources = XNode.prepare("Xamarin.Forms.VisualElement:Resources;Xamarin.Forms.Core", true, false);
    
    VisualElement.StyleClass = XNode.prepare("Xamarin.Forms.VisualElement:StyleClass;Xamarin.Forms.Core", true, false);
    
    VisualElement.Triggers = XNode.prepare("Xamarin.Forms.VisualElement:Triggers;Xamarin.Forms.Core", true, false);
    
    
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
        
        
    /** Property WebView.Behaviors of Type Xamarin.Forms.Behavior */
    Behaviors?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property WebView.Effects of Type Xamarin.Forms.Effect */
    Effects?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property WebView.GestureRecognizers of Type Xamarin.Forms.IGestureRecognizer */
    GestureRecognizers?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property WebView.Resources of Type System.Collections.Generic.KeyValuePair`2[System.String,System.Object] */
    Resources?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property WebView.StyleClass of Type System.String */
    StyleClass?: ( a: any, ... nodes: XNode[]) => XNode;
    
    /** Property WebView.Triggers of Type Xamarin.Forms.TriggerBase */
    Triggers?: ( a: any, ... nodes: XNode[]) => XNode
    }
    
    /** WebView */
    export const WebView: IWebViewConstructor = XNode.prepare<IWebView>("Xamarin.Forms.WebView;Xamarin.Forms.Core");
    
    
    WebView.Behaviors = XNode.prepare("Xamarin.Forms.WebView:Behaviors;Xamarin.Forms.Core", true, false);
    
    WebView.Effects = XNode.prepare("Xamarin.Forms.WebView:Effects;Xamarin.Forms.Core", true, false);
    
    WebView.GestureRecognizers = XNode.prepare("Xamarin.Forms.WebView:GestureRecognizers;Xamarin.Forms.Core", true, false);
    
    WebView.Resources = XNode.prepare("Xamarin.Forms.WebView:Resources;Xamarin.Forms.Core", true, false);
    
    WebView.StyleClass = XNode.prepare("Xamarin.Forms.WebView:StyleClass;Xamarin.Forms.Core", true, false);
    
    WebView.Triggers = XNode.prepare("Xamarin.Forms.WebView:Triggers;Xamarin.Forms.Core", true, false);
    
    
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
    
    
    