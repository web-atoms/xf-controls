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
        
    /** Collection Property AbsoluteLayout.Behaviors of Type System.Collections.Generic.IList`1[Xamarin.Forms.Behavior] */
    Behaviors?(v: any): { "Xamarin.Forms.AbsoluteLayout:Behaviors;Xamarin.Forms.Core": any  };
    
    /** Collection Property AbsoluteLayout.Children of Type Xamarin.Forms.AbsoluteLayout+IAbsoluteList`1[Xamarin.Forms.View] */
    Children?(v: any): { "Xamarin.Forms.AbsoluteLayout:Children;Xamarin.Forms.Core": any  };
    
    /** Collection Property AbsoluteLayout.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.AbsoluteLayout:Effects;Xamarin.Forms.Core": any  };
    
    /** Collection Property AbsoluteLayout.GestureRecognizers of Type System.Collections.Generic.IList`1[Xamarin.Forms.IGestureRecognizer] */
    GestureRecognizers?(v: any): { "Xamarin.Forms.AbsoluteLayout:GestureRecognizers;Xamarin.Forms.Core": any  };
    
    /** Collection Property AbsoluteLayout.Resources of Type Xamarin.Forms.ResourceDictionary */
    Resources?(v: any): { "Xamarin.Forms.AbsoluteLayout:Resources;Xamarin.Forms.Core": any  };
    
    /** Collection Property AbsoluteLayout.StyleClass of Type System.Collections.Generic.IList`1[System.String] */
    StyleClass?(v: any): { "Xamarin.Forms.AbsoluteLayout:StyleClass;Xamarin.Forms.Core": any  };
    
    /** Collection Property AbsoluteLayout.Triggers of Type System.Collections.Generic.IList`1[Xamarin.Forms.TriggerBase] */
    Triggers?(v: any): { "Xamarin.Forms.AbsoluteLayout:Triggers;Xamarin.Forms.Core": any  }
    }
    
    /** AbsoluteLayout */
    export const AbsoluteLayout: IAbsoluteLayoutConstructor = XNode.prepare<IAbsoluteLayout>("Xamarin.Forms.AbsoluteLayout;Xamarin.Forms.Core");
    
    AbsoluteLayout.LayoutFlags = (v) => ({ "Xamarin.Forms.AbsoluteLayout:LayoutFlags;Xamarin.Forms.Core": v  }) ;
    
    AbsoluteLayout.LayoutBounds = (v) => ({ "Xamarin.Forms.AbsoluteLayout:LayoutBounds;Xamarin.Forms.Core": v  }) ;
    
    AbsoluteLayout.Behaviors = (v) => ({ "Xamarin.Forms.AbsoluteLayout:Behaviors;Xamarin.Forms.Core": v  }) ;
    
    AbsoluteLayout.Children = (v) => ({ "Xamarin.Forms.AbsoluteLayout:Children;Xamarin.Forms.Core": v  }) ;
    
    AbsoluteLayout.Effects = (v) => ({ "Xamarin.Forms.AbsoluteLayout:Effects;Xamarin.Forms.Core": v  }) ;
    
    AbsoluteLayout.GestureRecognizers = (v) => ({ "Xamarin.Forms.AbsoluteLayout:GestureRecognizers;Xamarin.Forms.Core": v  }) ;
    
    AbsoluteLayout.Resources = (v) => ({ "Xamarin.Forms.AbsoluteLayout:Resources;Xamarin.Forms.Core": v  }) ;
    
    AbsoluteLayout.StyleClass = (v) => ({ "Xamarin.Forms.AbsoluteLayout:StyleClass;Xamarin.Forms.Core": v  }) ;
    
    AbsoluteLayout.Triggers = (v) => ({ "Xamarin.Forms.AbsoluteLayout:Triggers;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property ActivityIndicator.Behaviors of Type System.Collections.Generic.IList`1[Xamarin.Forms.Behavior] */
    Behaviors?(v: any): { "Xamarin.Forms.ActivityIndicator:Behaviors;Xamarin.Forms.Core": any  };
    
    /** Collection Property ActivityIndicator.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.ActivityIndicator:Effects;Xamarin.Forms.Core": any  };
    
    /** Collection Property ActivityIndicator.GestureRecognizers of Type System.Collections.Generic.IList`1[Xamarin.Forms.IGestureRecognizer] */
    GestureRecognizers?(v: any): { "Xamarin.Forms.ActivityIndicator:GestureRecognizers;Xamarin.Forms.Core": any  };
    
    /** Collection Property ActivityIndicator.Resources of Type Xamarin.Forms.ResourceDictionary */
    Resources?(v: any): { "Xamarin.Forms.ActivityIndicator:Resources;Xamarin.Forms.Core": any  };
    
    /** Collection Property ActivityIndicator.StyleClass of Type System.Collections.Generic.IList`1[System.String] */
    StyleClass?(v: any): { "Xamarin.Forms.ActivityIndicator:StyleClass;Xamarin.Forms.Core": any  };
    
    /** Collection Property ActivityIndicator.Triggers of Type System.Collections.Generic.IList`1[Xamarin.Forms.TriggerBase] */
    Triggers?(v: any): { "Xamarin.Forms.ActivityIndicator:Triggers;Xamarin.Forms.Core": any  }
    }
    
    /** ActivityIndicator */
    export const ActivityIndicator: IActivityIndicatorConstructor = XNode.prepare<IActivityIndicator>("Xamarin.Forms.ActivityIndicator;Xamarin.Forms.Core");
    
    
    ActivityIndicator.Behaviors = (v) => ({ "Xamarin.Forms.ActivityIndicator:Behaviors;Xamarin.Forms.Core": v  }) ;
    
    ActivityIndicator.Effects = (v) => ({ "Xamarin.Forms.ActivityIndicator:Effects;Xamarin.Forms.Core": v  }) ;
    
    ActivityIndicator.GestureRecognizers = (v) => ({ "Xamarin.Forms.ActivityIndicator:GestureRecognizers;Xamarin.Forms.Core": v  }) ;
    
    ActivityIndicator.Resources = (v) => ({ "Xamarin.Forms.ActivityIndicator:Resources;Xamarin.Forms.Core": v  }) ;
    
    ActivityIndicator.StyleClass = (v) => ({ "Xamarin.Forms.ActivityIndicator:StyleClass;Xamarin.Forms.Core": v  }) ;
    
    ActivityIndicator.Triggers = (v) => ({ "Xamarin.Forms.ActivityIndicator:Triggers;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property Application.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.Application:Effects;Xamarin.Forms.Core": any  };
    
    /** Collection Property Application.Properties of Type System.Collections.Generic.IDictionary`2[System.String,System.Object] */
    Properties?(v: any): { "Xamarin.Forms.Application:Properties;Xamarin.Forms.Core": any  };
    
    /** Collection Property Application.Resources of Type Xamarin.Forms.ResourceDictionary */
    Resources?(v: any): { "Xamarin.Forms.Application:Resources;Xamarin.Forms.Core": any  }
    }
    
    /** Application */
    export const Application: IApplicationConstructor = XNode.prepare<IApplication>("Xamarin.Forms.Application;Xamarin.Forms.Core");
    
    
    Application.Effects = (v) => ({ "Xamarin.Forms.Application:Effects;Xamarin.Forms.Core": v  }) ;
    
    Application.Properties = (v) => ({ "Xamarin.Forms.Application:Properties;Xamarin.Forms.Core": v  }) ;
    
    Application.Resources = (v) => ({ "Xamarin.Forms.Application:Resources;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property AppLinkEntry.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.AppLinkEntry:Effects;Xamarin.Forms.Core": any  };
    
    /** Collection Property AppLinkEntry.KeyValues of Type System.Collections.Generic.IDictionary`2[System.String,System.String] */
    KeyValues?(v: any): { "Xamarin.Forms.AppLinkEntry:KeyValues;Xamarin.Forms.Core": any  }
    }
    
    /** AppLinkEntry */
    export const AppLinkEntry: IAppLinkEntryConstructor = XNode.prepare<IAppLinkEntry>("Xamarin.Forms.AppLinkEntry;Xamarin.Forms.Core");
    
    
    AppLinkEntry.Effects = (v) => ({ "Xamarin.Forms.AppLinkEntry:Effects;Xamarin.Forms.Core": v  }) ;
    
    AppLinkEntry.KeyValues = (v) => ({ "Xamarin.Forms.AppLinkEntry:KeyValues;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property BaseMenuItem.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.BaseMenuItem:Effects;Xamarin.Forms.Core": any  }
    }
    
    /** BaseMenuItem */
    export const BaseMenuItem: IBaseMenuItemConstructor = XNode.prepare<IBaseMenuItem>("Xamarin.Forms.BaseMenuItem;Xamarin.Forms.Core");
    
    
    BaseMenuItem.Effects = (v) => ({ "Xamarin.Forms.BaseMenuItem:Effects;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property BoxView.Behaviors of Type System.Collections.Generic.IList`1[Xamarin.Forms.Behavior] */
    Behaviors?(v: any): { "Xamarin.Forms.BoxView:Behaviors;Xamarin.Forms.Core": any  };
    
    /** Collection Property BoxView.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.BoxView:Effects;Xamarin.Forms.Core": any  };
    
    /** Collection Property BoxView.GestureRecognizers of Type System.Collections.Generic.IList`1[Xamarin.Forms.IGestureRecognizer] */
    GestureRecognizers?(v: any): { "Xamarin.Forms.BoxView:GestureRecognizers;Xamarin.Forms.Core": any  };
    
    /** Collection Property BoxView.Resources of Type Xamarin.Forms.ResourceDictionary */
    Resources?(v: any): { "Xamarin.Forms.BoxView:Resources;Xamarin.Forms.Core": any  };
    
    /** Collection Property BoxView.StyleClass of Type System.Collections.Generic.IList`1[System.String] */
    StyleClass?(v: any): { "Xamarin.Forms.BoxView:StyleClass;Xamarin.Forms.Core": any  };
    
    /** Collection Property BoxView.Triggers of Type System.Collections.Generic.IList`1[Xamarin.Forms.TriggerBase] */
    Triggers?(v: any): { "Xamarin.Forms.BoxView:Triggers;Xamarin.Forms.Core": any  }
    }
    
    /** BoxView */
    export const BoxView: IBoxViewConstructor = XNode.prepare<IBoxView>("Xamarin.Forms.BoxView;Xamarin.Forms.Core");
    
    
    BoxView.Behaviors = (v) => ({ "Xamarin.Forms.BoxView:Behaviors;Xamarin.Forms.Core": v  }) ;
    
    BoxView.Effects = (v) => ({ "Xamarin.Forms.BoxView:Effects;Xamarin.Forms.Core": v  }) ;
    
    BoxView.GestureRecognizers = (v) => ({ "Xamarin.Forms.BoxView:GestureRecognizers;Xamarin.Forms.Core": v  }) ;
    
    BoxView.Resources = (v) => ({ "Xamarin.Forms.BoxView:Resources;Xamarin.Forms.Core": v  }) ;
    
    BoxView.StyleClass = (v) => ({ "Xamarin.Forms.BoxView:StyleClass;Xamarin.Forms.Core": v  }) ;
    
    BoxView.Triggers = (v) => ({ "Xamarin.Forms.BoxView:Triggers;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property Button.Behaviors of Type System.Collections.Generic.IList`1[Xamarin.Forms.Behavior] */
    Behaviors?(v: any): { "Xamarin.Forms.Button:Behaviors;Xamarin.Forms.Core": any  };
    
    /** Collection Property Button.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.Button:Effects;Xamarin.Forms.Core": any  };
    
    /** Collection Property Button.GestureRecognizers of Type System.Collections.Generic.IList`1[Xamarin.Forms.IGestureRecognizer] */
    GestureRecognizers?(v: any): { "Xamarin.Forms.Button:GestureRecognizers;Xamarin.Forms.Core": any  };
    
    /** Collection Property Button.Resources of Type Xamarin.Forms.ResourceDictionary */
    Resources?(v: any): { "Xamarin.Forms.Button:Resources;Xamarin.Forms.Core": any  };
    
    /** Collection Property Button.StyleClass of Type System.Collections.Generic.IList`1[System.String] */
    StyleClass?(v: any): { "Xamarin.Forms.Button:StyleClass;Xamarin.Forms.Core": any  };
    
    /** Collection Property Button.Triggers of Type System.Collections.Generic.IList`1[Xamarin.Forms.TriggerBase] */
    Triggers?(v: any): { "Xamarin.Forms.Button:Triggers;Xamarin.Forms.Core": any  }
    }
    
    /** Button */
    export const Button: IButtonConstructor = XNode.prepare<IButton>("Xamarin.Forms.Button;Xamarin.Forms.Core");
    
    
    Button.Behaviors = (v) => ({ "Xamarin.Forms.Button:Behaviors;Xamarin.Forms.Core": v  }) ;
    
    Button.Effects = (v) => ({ "Xamarin.Forms.Button:Effects;Xamarin.Forms.Core": v  }) ;
    
    Button.GestureRecognizers = (v) => ({ "Xamarin.Forms.Button:GestureRecognizers;Xamarin.Forms.Core": v  }) ;
    
    Button.Resources = (v) => ({ "Xamarin.Forms.Button:Resources;Xamarin.Forms.Core": v  }) ;
    
    Button.StyleClass = (v) => ({ "Xamarin.Forms.Button:StyleClass;Xamarin.Forms.Core": v  }) ;
    
    Button.Triggers = (v) => ({ "Xamarin.Forms.Button:Triggers;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property CarouselPage.Behaviors of Type System.Collections.Generic.IList`1[Xamarin.Forms.Behavior] */
    Behaviors?(v: any): { "Xamarin.Forms.CarouselPage:Behaviors;Xamarin.Forms.Core": any  };
    
    /** Collection Property CarouselPage.Children of Type System.Collections.Generic.IList`1[Xamarin.Forms.ContentPage] */
    Children?(v: any): { "Xamarin.Forms.CarouselPage:Children;Xamarin.Forms.Core": any  };
    
    /** Collection Property CarouselPage.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.CarouselPage:Effects;Xamarin.Forms.Core": any  };
    
    /** Collection Property CarouselPage.Resources of Type Xamarin.Forms.ResourceDictionary */
    Resources?(v: any): { "Xamarin.Forms.CarouselPage:Resources;Xamarin.Forms.Core": any  };
    
    /** Collection Property CarouselPage.StyleClass of Type System.Collections.Generic.IList`1[System.String] */
    StyleClass?(v: any): { "Xamarin.Forms.CarouselPage:StyleClass;Xamarin.Forms.Core": any  };
    
    /** Collection Property CarouselPage.ToolbarItems of Type System.Collections.Generic.IList`1[Xamarin.Forms.ToolbarItem] */
    ToolbarItems?(v: any): { "Xamarin.Forms.CarouselPage:ToolbarItems;Xamarin.Forms.Core": any  };
    
    /** Collection Property CarouselPage.Triggers of Type System.Collections.Generic.IList`1[Xamarin.Forms.TriggerBase] */
    Triggers?(v: any): { "Xamarin.Forms.CarouselPage:Triggers;Xamarin.Forms.Core": any  }
    }
    
    /** CarouselPage */
    export const CarouselPage: ICarouselPageConstructor = XNode.prepare<ICarouselPage>("Xamarin.Forms.CarouselPage;Xamarin.Forms.Core");
    
    
    CarouselPage.Behaviors = (v) => ({ "Xamarin.Forms.CarouselPage:Behaviors;Xamarin.Forms.Core": v  }) ;
    
    CarouselPage.Children = (v) => ({ "Xamarin.Forms.CarouselPage:Children;Xamarin.Forms.Core": v  }) ;
    
    CarouselPage.Effects = (v) => ({ "Xamarin.Forms.CarouselPage:Effects;Xamarin.Forms.Core": v  }) ;
    
    CarouselPage.Resources = (v) => ({ "Xamarin.Forms.CarouselPage:Resources;Xamarin.Forms.Core": v  }) ;
    
    CarouselPage.StyleClass = (v) => ({ "Xamarin.Forms.CarouselPage:StyleClass;Xamarin.Forms.Core": v  }) ;
    
    CarouselPage.ToolbarItems = (v) => ({ "Xamarin.Forms.CarouselPage:ToolbarItems;Xamarin.Forms.Core": v  }) ;
    
    CarouselPage.Triggers = (v) => ({ "Xamarin.Forms.CarouselPage:Triggers;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property Cell.ContextActions of Type System.Collections.Generic.IList`1[Xamarin.Forms.MenuItem] */
    ContextActions?(v: any): { "Xamarin.Forms.Cell:ContextActions;Xamarin.Forms.Core": any  };
    
    /** Collection Property Cell.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.Cell:Effects;Xamarin.Forms.Core": any  }
    }
    
    /** Cell */
    export const Cell: ICellConstructor = XNode.prepare<ICell>("Xamarin.Forms.Cell;Xamarin.Forms.Core");
    
    
    Cell.ContextActions = (v) => ({ "Xamarin.Forms.Cell:ContextActions;Xamarin.Forms.Core": v  }) ;
    
    Cell.Effects = (v) => ({ "Xamarin.Forms.Cell:Effects;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property EntryCell.ContextActions of Type System.Collections.Generic.IList`1[Xamarin.Forms.MenuItem] */
    ContextActions?(v: any): { "Xamarin.Forms.EntryCell:ContextActions;Xamarin.Forms.Core": any  };
    
    /** Collection Property EntryCell.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.EntryCell:Effects;Xamarin.Forms.Core": any  }
    }
    
    /** EntryCell */
    export const EntryCell: IEntryCellConstructor = XNode.prepare<IEntryCell>("Xamarin.Forms.EntryCell;Xamarin.Forms.Core");
    
    
    EntryCell.ContextActions = (v) => ({ "Xamarin.Forms.EntryCell:ContextActions;Xamarin.Forms.Core": v  }) ;
    
    EntryCell.Effects = (v) => ({ "Xamarin.Forms.EntryCell:Effects;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property ImageCell.ContextActions of Type System.Collections.Generic.IList`1[Xamarin.Forms.MenuItem] */
    ContextActions?(v: any): { "Xamarin.Forms.ImageCell:ContextActions;Xamarin.Forms.Core": any  };
    
    /** Collection Property ImageCell.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.ImageCell:Effects;Xamarin.Forms.Core": any  }
    }
    
    /** ImageCell */
    export const ImageCell: IImageCellConstructor = XNode.prepare<IImageCell>("Xamarin.Forms.ImageCell;Xamarin.Forms.Core");
    
    
    ImageCell.ContextActions = (v) => ({ "Xamarin.Forms.ImageCell:ContextActions;Xamarin.Forms.Core": v  }) ;
    
    ImageCell.Effects = (v) => ({ "Xamarin.Forms.ImageCell:Effects;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property SwitchCell.ContextActions of Type System.Collections.Generic.IList`1[Xamarin.Forms.MenuItem] */
    ContextActions?(v: any): { "Xamarin.Forms.SwitchCell:ContextActions;Xamarin.Forms.Core": any  };
    
    /** Collection Property SwitchCell.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.SwitchCell:Effects;Xamarin.Forms.Core": any  }
    }
    
    /** SwitchCell */
    export const SwitchCell: ISwitchCellConstructor = XNode.prepare<ISwitchCell>("Xamarin.Forms.SwitchCell;Xamarin.Forms.Core");
    
    
    SwitchCell.ContextActions = (v) => ({ "Xamarin.Forms.SwitchCell:ContextActions;Xamarin.Forms.Core": v  }) ;
    
    SwitchCell.Effects = (v) => ({ "Xamarin.Forms.SwitchCell:Effects;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property TextCell.ContextActions of Type System.Collections.Generic.IList`1[Xamarin.Forms.MenuItem] */
    ContextActions?(v: any): { "Xamarin.Forms.TextCell:ContextActions;Xamarin.Forms.Core": any  };
    
    /** Collection Property TextCell.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.TextCell:Effects;Xamarin.Forms.Core": any  }
    }
    
    /** TextCell */
    export const TextCell: ITextCellConstructor = XNode.prepare<ITextCell>("Xamarin.Forms.TextCell;Xamarin.Forms.Core");
    
    
    TextCell.ContextActions = (v) => ({ "Xamarin.Forms.TextCell:ContextActions;Xamarin.Forms.Core": v  }) ;
    
    TextCell.Effects = (v) => ({ "Xamarin.Forms.TextCell:Effects;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property ViewCell.ContextActions of Type System.Collections.Generic.IList`1[Xamarin.Forms.MenuItem] */
    ContextActions?(v: any): { "Xamarin.Forms.ViewCell:ContextActions;Xamarin.Forms.Core": any  };
    
    /** Collection Property ViewCell.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.ViewCell:Effects;Xamarin.Forms.Core": any  }
    }
    
    /** ViewCell */
    export const ViewCell: IViewCellConstructor = XNode.prepare<IViewCell>("Xamarin.Forms.ViewCell;Xamarin.Forms.Core");
    
    
    ViewCell.ContextActions = (v) => ({ "Xamarin.Forms.ViewCell:ContextActions;Xamarin.Forms.Core": v  }) ;
    
    ViewCell.Effects = (v) => ({ "Xamarin.Forms.ViewCell:Effects;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property CheckBox.Behaviors of Type System.Collections.Generic.IList`1[Xamarin.Forms.Behavior] */
    Behaviors?(v: any): { "Xamarin.Forms.CheckBox:Behaviors;Xamarin.Forms.Core": any  };
    
    /** Collection Property CheckBox.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.CheckBox:Effects;Xamarin.Forms.Core": any  };
    
    /** Collection Property CheckBox.GestureRecognizers of Type System.Collections.Generic.IList`1[Xamarin.Forms.IGestureRecognizer] */
    GestureRecognizers?(v: any): { "Xamarin.Forms.CheckBox:GestureRecognizers;Xamarin.Forms.Core": any  };
    
    /** Collection Property CheckBox.Resources of Type Xamarin.Forms.ResourceDictionary */
    Resources?(v: any): { "Xamarin.Forms.CheckBox:Resources;Xamarin.Forms.Core": any  };
    
    /** Collection Property CheckBox.StyleClass of Type System.Collections.Generic.IList`1[System.String] */
    StyleClass?(v: any): { "Xamarin.Forms.CheckBox:StyleClass;Xamarin.Forms.Core": any  };
    
    /** Collection Property CheckBox.Triggers of Type System.Collections.Generic.IList`1[Xamarin.Forms.TriggerBase] */
    Triggers?(v: any): { "Xamarin.Forms.CheckBox:Triggers;Xamarin.Forms.Core": any  }
    }
    
    /** CheckBox */
    export const CheckBox: ICheckBoxConstructor = XNode.prepare<ICheckBox>("Xamarin.Forms.CheckBox;Xamarin.Forms.Core");
    
    
    CheckBox.Behaviors = (v) => ({ "Xamarin.Forms.CheckBox:Behaviors;Xamarin.Forms.Core": v  }) ;
    
    CheckBox.Effects = (v) => ({ "Xamarin.Forms.CheckBox:Effects;Xamarin.Forms.Core": v  }) ;
    
    CheckBox.GestureRecognizers = (v) => ({ "Xamarin.Forms.CheckBox:GestureRecognizers;Xamarin.Forms.Core": v  }) ;
    
    CheckBox.Resources = (v) => ({ "Xamarin.Forms.CheckBox:Resources;Xamarin.Forms.Core": v  }) ;
    
    CheckBox.StyleClass = (v) => ({ "Xamarin.Forms.CheckBox:StyleClass;Xamarin.Forms.Core": v  }) ;
    
    CheckBox.Triggers = (v) => ({ "Xamarin.Forms.CheckBox:Triggers;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property ClickGestureRecognizer.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.ClickGestureRecognizer:Effects;Xamarin.Forms.Core": any  }
    }
    
    /** ClickGestureRecognizer */
    export const ClickGestureRecognizer: IClickGestureRecognizerConstructor = XNode.prepare<IClickGestureRecognizer>("Xamarin.Forms.ClickGestureRecognizer;Xamarin.Forms.Core");
    
    
    ClickGestureRecognizer.Effects = (v) => ({ "Xamarin.Forms.ClickGestureRecognizer:Effects;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property ContentPage.Behaviors of Type System.Collections.Generic.IList`1[Xamarin.Forms.Behavior] */
    Behaviors?(v: any): { "Xamarin.Forms.ContentPage:Behaviors;Xamarin.Forms.Core": any  };
    
    /** Collection Property ContentPage.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.ContentPage:Effects;Xamarin.Forms.Core": any  };
    
    /** Collection Property ContentPage.Resources of Type Xamarin.Forms.ResourceDictionary */
    Resources?(v: any): { "Xamarin.Forms.ContentPage:Resources;Xamarin.Forms.Core": any  };
    
    /** Collection Property ContentPage.StyleClass of Type System.Collections.Generic.IList`1[System.String] */
    StyleClass?(v: any): { "Xamarin.Forms.ContentPage:StyleClass;Xamarin.Forms.Core": any  };
    
    /** Collection Property ContentPage.ToolbarItems of Type System.Collections.Generic.IList`1[Xamarin.Forms.ToolbarItem] */
    ToolbarItems?(v: any): { "Xamarin.Forms.ContentPage:ToolbarItems;Xamarin.Forms.Core": any  };
    
    /** Collection Property ContentPage.Triggers of Type System.Collections.Generic.IList`1[Xamarin.Forms.TriggerBase] */
    Triggers?(v: any): { "Xamarin.Forms.ContentPage:Triggers;Xamarin.Forms.Core": any  }
    }
    
    /** ContentPage */
    export const ContentPage: IContentPageConstructor = XNode.prepare<IContentPage>("Xamarin.Forms.ContentPage;Xamarin.Forms.Core");
    
    
    ContentPage.Behaviors = (v) => ({ "Xamarin.Forms.ContentPage:Behaviors;Xamarin.Forms.Core": v  }) ;
    
    ContentPage.Effects = (v) => ({ "Xamarin.Forms.ContentPage:Effects;Xamarin.Forms.Core": v  }) ;
    
    ContentPage.Resources = (v) => ({ "Xamarin.Forms.ContentPage:Resources;Xamarin.Forms.Core": v  }) ;
    
    ContentPage.StyleClass = (v) => ({ "Xamarin.Forms.ContentPage:StyleClass;Xamarin.Forms.Core": v  }) ;
    
    ContentPage.ToolbarItems = (v) => ({ "Xamarin.Forms.ContentPage:ToolbarItems;Xamarin.Forms.Core": v  }) ;
    
    ContentPage.Triggers = (v) => ({ "Xamarin.Forms.ContentPage:Triggers;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property ContentPresenter.Behaviors of Type System.Collections.Generic.IList`1[Xamarin.Forms.Behavior] */
    Behaviors?(v: any): { "Xamarin.Forms.ContentPresenter:Behaviors;Xamarin.Forms.Core": any  };
    
    /** Collection Property ContentPresenter.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.ContentPresenter:Effects;Xamarin.Forms.Core": any  };
    
    /** Collection Property ContentPresenter.GestureRecognizers of Type System.Collections.Generic.IList`1[Xamarin.Forms.IGestureRecognizer] */
    GestureRecognizers?(v: any): { "Xamarin.Forms.ContentPresenter:GestureRecognizers;Xamarin.Forms.Core": any  };
    
    /** Collection Property ContentPresenter.Resources of Type Xamarin.Forms.ResourceDictionary */
    Resources?(v: any): { "Xamarin.Forms.ContentPresenter:Resources;Xamarin.Forms.Core": any  };
    
    /** Collection Property ContentPresenter.StyleClass of Type System.Collections.Generic.IList`1[System.String] */
    StyleClass?(v: any): { "Xamarin.Forms.ContentPresenter:StyleClass;Xamarin.Forms.Core": any  };
    
    /** Collection Property ContentPresenter.Triggers of Type System.Collections.Generic.IList`1[Xamarin.Forms.TriggerBase] */
    Triggers?(v: any): { "Xamarin.Forms.ContentPresenter:Triggers;Xamarin.Forms.Core": any  }
    }
    
    /** ContentPresenter */
    export const ContentPresenter: IContentPresenterConstructor = XNode.prepare<IContentPresenter>("Xamarin.Forms.ContentPresenter;Xamarin.Forms.Core");
    
    
    ContentPresenter.Behaviors = (v) => ({ "Xamarin.Forms.ContentPresenter:Behaviors;Xamarin.Forms.Core": v  }) ;
    
    ContentPresenter.Effects = (v) => ({ "Xamarin.Forms.ContentPresenter:Effects;Xamarin.Forms.Core": v  }) ;
    
    ContentPresenter.GestureRecognizers = (v) => ({ "Xamarin.Forms.ContentPresenter:GestureRecognizers;Xamarin.Forms.Core": v  }) ;
    
    ContentPresenter.Resources = (v) => ({ "Xamarin.Forms.ContentPresenter:Resources;Xamarin.Forms.Core": v  }) ;
    
    ContentPresenter.StyleClass = (v) => ({ "Xamarin.Forms.ContentPresenter:StyleClass;Xamarin.Forms.Core": v  }) ;
    
    ContentPresenter.Triggers = (v) => ({ "Xamarin.Forms.ContentPresenter:Triggers;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property ContentView.Behaviors of Type System.Collections.Generic.IList`1[Xamarin.Forms.Behavior] */
    Behaviors?(v: any): { "Xamarin.Forms.ContentView:Behaviors;Xamarin.Forms.Core": any  };
    
    /** Collection Property ContentView.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.ContentView:Effects;Xamarin.Forms.Core": any  };
    
    /** Collection Property ContentView.GestureRecognizers of Type System.Collections.Generic.IList`1[Xamarin.Forms.IGestureRecognizer] */
    GestureRecognizers?(v: any): { "Xamarin.Forms.ContentView:GestureRecognizers;Xamarin.Forms.Core": any  };
    
    /** Collection Property ContentView.Resources of Type Xamarin.Forms.ResourceDictionary */
    Resources?(v: any): { "Xamarin.Forms.ContentView:Resources;Xamarin.Forms.Core": any  };
    
    /** Collection Property ContentView.StyleClass of Type System.Collections.Generic.IList`1[System.String] */
    StyleClass?(v: any): { "Xamarin.Forms.ContentView:StyleClass;Xamarin.Forms.Core": any  };
    
    /** Collection Property ContentView.Triggers of Type System.Collections.Generic.IList`1[Xamarin.Forms.TriggerBase] */
    Triggers?(v: any): { "Xamarin.Forms.ContentView:Triggers;Xamarin.Forms.Core": any  }
    }
    
    /** ContentView */
    export const ContentView: IContentViewConstructor = XNode.prepare<IContentView>("Xamarin.Forms.ContentView;Xamarin.Forms.Core");
    
    
    ContentView.Behaviors = (v) => ({ "Xamarin.Forms.ContentView:Behaviors;Xamarin.Forms.Core": v  }) ;
    
    ContentView.Effects = (v) => ({ "Xamarin.Forms.ContentView:Effects;Xamarin.Forms.Core": v  }) ;
    
    ContentView.GestureRecognizers = (v) => ({ "Xamarin.Forms.ContentView:GestureRecognizers;Xamarin.Forms.Core": v  }) ;
    
    ContentView.Resources = (v) => ({ "Xamarin.Forms.ContentView:Resources;Xamarin.Forms.Core": v  }) ;
    
    ContentView.StyleClass = (v) => ({ "Xamarin.Forms.ContentView:StyleClass;Xamarin.Forms.Core": v  }) ;
    
    ContentView.Triggers = (v) => ({ "Xamarin.Forms.ContentView:Triggers;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property DatePicker.Behaviors of Type System.Collections.Generic.IList`1[Xamarin.Forms.Behavior] */
    Behaviors?(v: any): { "Xamarin.Forms.DatePicker:Behaviors;Xamarin.Forms.Core": any  };
    
    /** Collection Property DatePicker.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.DatePicker:Effects;Xamarin.Forms.Core": any  };
    
    /** Collection Property DatePicker.GestureRecognizers of Type System.Collections.Generic.IList`1[Xamarin.Forms.IGestureRecognizer] */
    GestureRecognizers?(v: any): { "Xamarin.Forms.DatePicker:GestureRecognizers;Xamarin.Forms.Core": any  };
    
    /** Collection Property DatePicker.Resources of Type Xamarin.Forms.ResourceDictionary */
    Resources?(v: any): { "Xamarin.Forms.DatePicker:Resources;Xamarin.Forms.Core": any  };
    
    /** Collection Property DatePicker.StyleClass of Type System.Collections.Generic.IList`1[System.String] */
    StyleClass?(v: any): { "Xamarin.Forms.DatePicker:StyleClass;Xamarin.Forms.Core": any  };
    
    /** Collection Property DatePicker.Triggers of Type System.Collections.Generic.IList`1[Xamarin.Forms.TriggerBase] */
    Triggers?(v: any): { "Xamarin.Forms.DatePicker:Triggers;Xamarin.Forms.Core": any  }
    }
    
    /** DatePicker */
    export const DatePicker: IDatePickerConstructor = XNode.prepare<IDatePicker>("Xamarin.Forms.DatePicker;Xamarin.Forms.Core");
    
    
    DatePicker.Behaviors = (v) => ({ "Xamarin.Forms.DatePicker:Behaviors;Xamarin.Forms.Core": v  }) ;
    
    DatePicker.Effects = (v) => ({ "Xamarin.Forms.DatePicker:Effects;Xamarin.Forms.Core": v  }) ;
    
    DatePicker.GestureRecognizers = (v) => ({ "Xamarin.Forms.DatePicker:GestureRecognizers;Xamarin.Forms.Core": v  }) ;
    
    DatePicker.Resources = (v) => ({ "Xamarin.Forms.DatePicker:Resources;Xamarin.Forms.Core": v  }) ;
    
    DatePicker.StyleClass = (v) => ({ "Xamarin.Forms.DatePicker:StyleClass;Xamarin.Forms.Core": v  }) ;
    
    DatePicker.Triggers = (v) => ({ "Xamarin.Forms.DatePicker:Triggers;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property Editor.Behaviors of Type System.Collections.Generic.IList`1[Xamarin.Forms.Behavior] */
    Behaviors?(v: any): { "Xamarin.Forms.Editor:Behaviors;Xamarin.Forms.Core": any  };
    
    /** Collection Property Editor.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.Editor:Effects;Xamarin.Forms.Core": any  };
    
    /** Collection Property Editor.GestureRecognizers of Type System.Collections.Generic.IList`1[Xamarin.Forms.IGestureRecognizer] */
    GestureRecognizers?(v: any): { "Xamarin.Forms.Editor:GestureRecognizers;Xamarin.Forms.Core": any  };
    
    /** Collection Property Editor.Resources of Type Xamarin.Forms.ResourceDictionary */
    Resources?(v: any): { "Xamarin.Forms.Editor:Resources;Xamarin.Forms.Core": any  };
    
    /** Collection Property Editor.StyleClass of Type System.Collections.Generic.IList`1[System.String] */
    StyleClass?(v: any): { "Xamarin.Forms.Editor:StyleClass;Xamarin.Forms.Core": any  };
    
    /** Collection Property Editor.Triggers of Type System.Collections.Generic.IList`1[Xamarin.Forms.TriggerBase] */
    Triggers?(v: any): { "Xamarin.Forms.Editor:Triggers;Xamarin.Forms.Core": any  }
    }
    
    /** Editor */
    export const Editor: IEditorConstructor = XNode.prepare<IEditor>("Xamarin.Forms.Editor;Xamarin.Forms.Core");
    
    
    Editor.Behaviors = (v) => ({ "Xamarin.Forms.Editor:Behaviors;Xamarin.Forms.Core": v  }) ;
    
    Editor.Effects = (v) => ({ "Xamarin.Forms.Editor:Effects;Xamarin.Forms.Core": v  }) ;
    
    Editor.GestureRecognizers = (v) => ({ "Xamarin.Forms.Editor:GestureRecognizers;Xamarin.Forms.Core": v  }) ;
    
    Editor.Resources = (v) => ({ "Xamarin.Forms.Editor:Resources;Xamarin.Forms.Core": v  }) ;
    
    Editor.StyleClass = (v) => ({ "Xamarin.Forms.Editor:StyleClass;Xamarin.Forms.Core": v  }) ;
    
    Editor.Triggers = (v) => ({ "Xamarin.Forms.Editor:Triggers;Xamarin.Forms.Core": v  }) ;
    
    
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
        
    /** Collection Property Element.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.Element:Effects;Xamarin.Forms.Core": any  }
    }
    
    /** Element */
    export const Element: IElementConstructor = XNode.prepare<IElement>("Xamarin.Forms.Element;Xamarin.Forms.Core");
    
    Element.Menu = (v) => ({ "Xamarin.Forms.Element:Menu;Xamarin.Forms.Core": v  }) ;
    
    Element.Effects = (v) => ({ "Xamarin.Forms.Element:Effects;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property Entry.Behaviors of Type System.Collections.Generic.IList`1[Xamarin.Forms.Behavior] */
    Behaviors?(v: any): { "Xamarin.Forms.Entry:Behaviors;Xamarin.Forms.Core": any  };
    
    /** Collection Property Entry.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.Entry:Effects;Xamarin.Forms.Core": any  };
    
    /** Collection Property Entry.GestureRecognizers of Type System.Collections.Generic.IList`1[Xamarin.Forms.IGestureRecognizer] */
    GestureRecognizers?(v: any): { "Xamarin.Forms.Entry:GestureRecognizers;Xamarin.Forms.Core": any  };
    
    /** Collection Property Entry.Resources of Type Xamarin.Forms.ResourceDictionary */
    Resources?(v: any): { "Xamarin.Forms.Entry:Resources;Xamarin.Forms.Core": any  };
    
    /** Collection Property Entry.StyleClass of Type System.Collections.Generic.IList`1[System.String] */
    StyleClass?(v: any): { "Xamarin.Forms.Entry:StyleClass;Xamarin.Forms.Core": any  };
    
    /** Collection Property Entry.Triggers of Type System.Collections.Generic.IList`1[Xamarin.Forms.TriggerBase] */
    Triggers?(v: any): { "Xamarin.Forms.Entry:Triggers;Xamarin.Forms.Core": any  }
    }
    
    /** Entry */
    export const Entry: IEntryConstructor = XNode.prepare<IEntry>("Xamarin.Forms.Entry;Xamarin.Forms.Core");
    
    
    Entry.Behaviors = (v) => ({ "Xamarin.Forms.Entry:Behaviors;Xamarin.Forms.Core": v  }) ;
    
    Entry.Effects = (v) => ({ "Xamarin.Forms.Entry:Effects;Xamarin.Forms.Core": v  }) ;
    
    Entry.GestureRecognizers = (v) => ({ "Xamarin.Forms.Entry:GestureRecognizers;Xamarin.Forms.Core": v  }) ;
    
    Entry.Resources = (v) => ({ "Xamarin.Forms.Entry:Resources;Xamarin.Forms.Core": v  }) ;
    
    Entry.StyleClass = (v) => ({ "Xamarin.Forms.Entry:StyleClass;Xamarin.Forms.Core": v  }) ;
    
    Entry.Triggers = (v) => ({ "Xamarin.Forms.Entry:Triggers;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property FileImageSource.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.FileImageSource:Effects;Xamarin.Forms.Core": any  }
    }
    
    /** FileImageSource */
    export const FileImageSource: IFileImageSourceConstructor = XNode.prepare<IFileImageSource>("Xamarin.Forms.FileImageSource;Xamarin.Forms.Core");
    
    
    FileImageSource.Effects = (v) => ({ "Xamarin.Forms.FileImageSource:Effects;Xamarin.Forms.Core": v  }) ;
    
    
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
        
    /** Collection Property FlexLayout.Behaviors of Type System.Collections.Generic.IList`1[Xamarin.Forms.Behavior] */
    Behaviors?(v: any): { "Xamarin.Forms.FlexLayout:Behaviors;Xamarin.Forms.Core": any  };
    
    /** Collection Property FlexLayout.Children of Type System.Collections.Generic.IList`1[Xamarin.Forms.View] */
    Children?(v: any): { "Xamarin.Forms.FlexLayout:Children;Xamarin.Forms.Core": any  };
    
    /** Collection Property FlexLayout.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.FlexLayout:Effects;Xamarin.Forms.Core": any  };
    
    /** Collection Property FlexLayout.GestureRecognizers of Type System.Collections.Generic.IList`1[Xamarin.Forms.IGestureRecognizer] */
    GestureRecognizers?(v: any): { "Xamarin.Forms.FlexLayout:GestureRecognizers;Xamarin.Forms.Core": any  };
    
    /** Collection Property FlexLayout.Resources of Type Xamarin.Forms.ResourceDictionary */
    Resources?(v: any): { "Xamarin.Forms.FlexLayout:Resources;Xamarin.Forms.Core": any  };
    
    /** Collection Property FlexLayout.StyleClass of Type System.Collections.Generic.IList`1[System.String] */
    StyleClass?(v: any): { "Xamarin.Forms.FlexLayout:StyleClass;Xamarin.Forms.Core": any  };
    
    /** Collection Property FlexLayout.Triggers of Type System.Collections.Generic.IList`1[Xamarin.Forms.TriggerBase] */
    Triggers?(v: any): { "Xamarin.Forms.FlexLayout:Triggers;Xamarin.Forms.Core": any  }
    }
    
    /** FlexLayout */
    export const FlexLayout: IFlexLayoutConstructor = XNode.prepare<IFlexLayout>("Xamarin.Forms.FlexLayout;Xamarin.Forms.Core");
    
    FlexLayout.Order = (v) => ({ "Xamarin.Forms.FlexLayout:Order;Xamarin.Forms.Core": v  }) ;
    
    FlexLayout.Grow = (v) => ({ "Xamarin.Forms.FlexLayout:Grow;Xamarin.Forms.Core": v  }) ;
    
    FlexLayout.Shrink = (v) => ({ "Xamarin.Forms.FlexLayout:Shrink;Xamarin.Forms.Core": v  }) ;
    
    FlexLayout.AlignSelf = (v) => ({ "Xamarin.Forms.FlexLayout:AlignSelf;Xamarin.Forms.Core": v  }) ;
    
    FlexLayout.Basis = (v) => ({ "Xamarin.Forms.FlexLayout:Basis;Xamarin.Forms.Core": v  }) ;
    
    FlexLayout.Behaviors = (v) => ({ "Xamarin.Forms.FlexLayout:Behaviors;Xamarin.Forms.Core": v  }) ;
    
    FlexLayout.Children = (v) => ({ "Xamarin.Forms.FlexLayout:Children;Xamarin.Forms.Core": v  }) ;
    
    FlexLayout.Effects = (v) => ({ "Xamarin.Forms.FlexLayout:Effects;Xamarin.Forms.Core": v  }) ;
    
    FlexLayout.GestureRecognizers = (v) => ({ "Xamarin.Forms.FlexLayout:GestureRecognizers;Xamarin.Forms.Core": v  }) ;
    
    FlexLayout.Resources = (v) => ({ "Xamarin.Forms.FlexLayout:Resources;Xamarin.Forms.Core": v  }) ;
    
    FlexLayout.StyleClass = (v) => ({ "Xamarin.Forms.FlexLayout:StyleClass;Xamarin.Forms.Core": v  }) ;
    
    FlexLayout.Triggers = (v) => ({ "Xamarin.Forms.FlexLayout:Triggers;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property FontImageSource.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.FontImageSource:Effects;Xamarin.Forms.Core": any  }
    }
    
    /** FontImageSource */
    export const FontImageSource: IFontImageSourceConstructor = XNode.prepare<IFontImageSource>("Xamarin.Forms.FontImageSource;Xamarin.Forms.Core");
    
    
    FontImageSource.Effects = (v) => ({ "Xamarin.Forms.FontImageSource:Effects;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property FormattedString.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.FormattedString:Effects;Xamarin.Forms.Core": any  };
    
    /** Collection Property FormattedString.Spans of Type System.Collections.Generic.IList`1[Xamarin.Forms.Span] */
    Spans?(v: any): { "Xamarin.Forms.FormattedString:Spans;Xamarin.Forms.Core": any  }
    }
    
    /** FormattedString */
    export const FormattedString: IFormattedStringConstructor = XNode.prepare<IFormattedString>("Xamarin.Forms.FormattedString;Xamarin.Forms.Core");
    
    
    FormattedString.Effects = (v) => ({ "Xamarin.Forms.FormattedString:Effects;Xamarin.Forms.Core": v  }) ;
    
    FormattedString.Spans = (v) => ({ "Xamarin.Forms.FormattedString:Spans;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property Frame.Behaviors of Type System.Collections.Generic.IList`1[Xamarin.Forms.Behavior] */
    Behaviors?(v: any): { "Xamarin.Forms.Frame:Behaviors;Xamarin.Forms.Core": any  };
    
    /** Collection Property Frame.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.Frame:Effects;Xamarin.Forms.Core": any  };
    
    /** Collection Property Frame.GestureRecognizers of Type System.Collections.Generic.IList`1[Xamarin.Forms.IGestureRecognizer] */
    GestureRecognizers?(v: any): { "Xamarin.Forms.Frame:GestureRecognizers;Xamarin.Forms.Core": any  };
    
    /** Collection Property Frame.Resources of Type Xamarin.Forms.ResourceDictionary */
    Resources?(v: any): { "Xamarin.Forms.Frame:Resources;Xamarin.Forms.Core": any  };
    
    /** Collection Property Frame.StyleClass of Type System.Collections.Generic.IList`1[System.String] */
    StyleClass?(v: any): { "Xamarin.Forms.Frame:StyleClass;Xamarin.Forms.Core": any  };
    
    /** Collection Property Frame.Triggers of Type System.Collections.Generic.IList`1[Xamarin.Forms.TriggerBase] */
    Triggers?(v: any): { "Xamarin.Forms.Frame:Triggers;Xamarin.Forms.Core": any  }
    }
    
    /** Frame */
    export const Frame: IFrameConstructor = XNode.prepare<IFrame>("Xamarin.Forms.Frame;Xamarin.Forms.Core");
    
    
    Frame.Behaviors = (v) => ({ "Xamarin.Forms.Frame:Behaviors;Xamarin.Forms.Core": v  }) ;
    
    Frame.Effects = (v) => ({ "Xamarin.Forms.Frame:Effects;Xamarin.Forms.Core": v  }) ;
    
    Frame.GestureRecognizers = (v) => ({ "Xamarin.Forms.Frame:GestureRecognizers;Xamarin.Forms.Core": v  }) ;
    
    Frame.Resources = (v) => ({ "Xamarin.Forms.Frame:Resources;Xamarin.Forms.Core": v  }) ;
    
    Frame.StyleClass = (v) => ({ "Xamarin.Forms.Frame:StyleClass;Xamarin.Forms.Core": v  }) ;
    
    Frame.Triggers = (v) => ({ "Xamarin.Forms.Frame:Triggers;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property GestureElement.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.GestureElement:Effects;Xamarin.Forms.Core": any  };
    
    /** Collection Property GestureElement.GestureRecognizers of Type System.Collections.Generic.IList`1[Xamarin.Forms.IGestureRecognizer] */
    GestureRecognizers?(v: any): { "Xamarin.Forms.GestureElement:GestureRecognizers;Xamarin.Forms.Core": any  }
    }
    
    /** GestureElement */
    export const GestureElement: IGestureElementConstructor = XNode.prepare<IGestureElement>("Xamarin.Forms.GestureElement;Xamarin.Forms.Core");
    
    
    GestureElement.Effects = (v) => ({ "Xamarin.Forms.GestureElement:Effects;Xamarin.Forms.Core": v  }) ;
    
    GestureElement.GestureRecognizers = (v) => ({ "Xamarin.Forms.GestureElement:GestureRecognizers;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property GestureRecognizer.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.GestureRecognizer:Effects;Xamarin.Forms.Core": any  }
    }
    
    /** GestureRecognizer */
    export const GestureRecognizer: IGestureRecognizerConstructor = XNode.prepare<IGestureRecognizer>("Xamarin.Forms.GestureRecognizer;Xamarin.Forms.Core");
    
    
    GestureRecognizer.Effects = (v) => ({ "Xamarin.Forms.GestureRecognizer:Effects;Xamarin.Forms.Core": v  }) ;
    
    
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
        
    /** Collection Property Grid.Behaviors of Type System.Collections.Generic.IList`1[Xamarin.Forms.Behavior] */
    Behaviors?(v: any): { "Xamarin.Forms.Grid:Behaviors;Xamarin.Forms.Core": any  };
    
    /** Collection Property Grid.Children of Type Xamarin.Forms.Grid+IGridList`1[Xamarin.Forms.View] */
    Children?(v: any): { "Xamarin.Forms.Grid:Children;Xamarin.Forms.Core": any  };
    
    /** Collection Property Grid.ColumnDefinitions of Type Xamarin.Forms.ColumnDefinitionCollection */
    ColumnDefinitions?(v: any): { "Xamarin.Forms.Grid:ColumnDefinitions;Xamarin.Forms.Core": any  };
    
    /** Collection Property Grid.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.Grid:Effects;Xamarin.Forms.Core": any  };
    
    /** Collection Property Grid.GestureRecognizers of Type System.Collections.Generic.IList`1[Xamarin.Forms.IGestureRecognizer] */
    GestureRecognizers?(v: any): { "Xamarin.Forms.Grid:GestureRecognizers;Xamarin.Forms.Core": any  };
    
    /** Collection Property Grid.Resources of Type Xamarin.Forms.ResourceDictionary */
    Resources?(v: any): { "Xamarin.Forms.Grid:Resources;Xamarin.Forms.Core": any  };
    
    /** Collection Property Grid.RowDefinitions of Type Xamarin.Forms.RowDefinitionCollection */
    RowDefinitions?(v: any): { "Xamarin.Forms.Grid:RowDefinitions;Xamarin.Forms.Core": any  };
    
    /** Collection Property Grid.StyleClass of Type System.Collections.Generic.IList`1[System.String] */
    StyleClass?(v: any): { "Xamarin.Forms.Grid:StyleClass;Xamarin.Forms.Core": any  };
    
    /** Collection Property Grid.Triggers of Type System.Collections.Generic.IList`1[Xamarin.Forms.TriggerBase] */
    Triggers?(v: any): { "Xamarin.Forms.Grid:Triggers;Xamarin.Forms.Core": any  }
    }
    
    /** Grid */
    export const Grid: IGridConstructor = XNode.prepare<IGrid>("Xamarin.Forms.Grid;Xamarin.Forms.Core");
    
    Grid.Row = (v) => ({ "Xamarin.Forms.Grid:Row;Xamarin.Forms.Core": v  }) ;
    
    Grid.RowSpan = (v) => ({ "Xamarin.Forms.Grid:RowSpan;Xamarin.Forms.Core": v  }) ;
    
    Grid.Column = (v) => ({ "Xamarin.Forms.Grid:Column;Xamarin.Forms.Core": v  }) ;
    
    Grid.ColumnSpan = (v) => ({ "Xamarin.Forms.Grid:ColumnSpan;Xamarin.Forms.Core": v  }) ;
    
    Grid.Behaviors = (v) => ({ "Xamarin.Forms.Grid:Behaviors;Xamarin.Forms.Core": v  }) ;
    
    Grid.Children = (v) => ({ "Xamarin.Forms.Grid:Children;Xamarin.Forms.Core": v  }) ;
    
    Grid.ColumnDefinitions = (v) => ({ "Xamarin.Forms.Grid:ColumnDefinitions;Xamarin.Forms.Core": v  }) ;
    
    Grid.Effects = (v) => ({ "Xamarin.Forms.Grid:Effects;Xamarin.Forms.Core": v  }) ;
    
    Grid.GestureRecognizers = (v) => ({ "Xamarin.Forms.Grid:GestureRecognizers;Xamarin.Forms.Core": v  }) ;
    
    Grid.Resources = (v) => ({ "Xamarin.Forms.Grid:Resources;Xamarin.Forms.Core": v  }) ;
    
    Grid.RowDefinitions = (v) => ({ "Xamarin.Forms.Grid:RowDefinitions;Xamarin.Forms.Core": v  }) ;
    
    Grid.StyleClass = (v) => ({ "Xamarin.Forms.Grid:StyleClass;Xamarin.Forms.Core": v  }) ;
    
    Grid.Triggers = (v) => ({ "Xamarin.Forms.Grid:Triggers;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property Image.Behaviors of Type System.Collections.Generic.IList`1[Xamarin.Forms.Behavior] */
    Behaviors?(v: any): { "Xamarin.Forms.Image:Behaviors;Xamarin.Forms.Core": any  };
    
    /** Collection Property Image.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.Image:Effects;Xamarin.Forms.Core": any  };
    
    /** Collection Property Image.GestureRecognizers of Type System.Collections.Generic.IList`1[Xamarin.Forms.IGestureRecognizer] */
    GestureRecognizers?(v: any): { "Xamarin.Forms.Image:GestureRecognizers;Xamarin.Forms.Core": any  };
    
    /** Collection Property Image.Resources of Type Xamarin.Forms.ResourceDictionary */
    Resources?(v: any): { "Xamarin.Forms.Image:Resources;Xamarin.Forms.Core": any  };
    
    /** Collection Property Image.StyleClass of Type System.Collections.Generic.IList`1[System.String] */
    StyleClass?(v: any): { "Xamarin.Forms.Image:StyleClass;Xamarin.Forms.Core": any  };
    
    /** Collection Property Image.Triggers of Type System.Collections.Generic.IList`1[Xamarin.Forms.TriggerBase] */
    Triggers?(v: any): { "Xamarin.Forms.Image:Triggers;Xamarin.Forms.Core": any  }
    }
    
    /** Image */
    export const Image: IImageConstructor = XNode.prepare<IImage>("Xamarin.Forms.Image;Xamarin.Forms.Core");
    
    
    Image.Behaviors = (v) => ({ "Xamarin.Forms.Image:Behaviors;Xamarin.Forms.Core": v  }) ;
    
    Image.Effects = (v) => ({ "Xamarin.Forms.Image:Effects;Xamarin.Forms.Core": v  }) ;
    
    Image.GestureRecognizers = (v) => ({ "Xamarin.Forms.Image:GestureRecognizers;Xamarin.Forms.Core": v  }) ;
    
    Image.Resources = (v) => ({ "Xamarin.Forms.Image:Resources;Xamarin.Forms.Core": v  }) ;
    
    Image.StyleClass = (v) => ({ "Xamarin.Forms.Image:StyleClass;Xamarin.Forms.Core": v  }) ;
    
    Image.Triggers = (v) => ({ "Xamarin.Forms.Image:Triggers;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property ImageButton.Behaviors of Type System.Collections.Generic.IList`1[Xamarin.Forms.Behavior] */
    Behaviors?(v: any): { "Xamarin.Forms.ImageButton:Behaviors;Xamarin.Forms.Core": any  };
    
    /** Collection Property ImageButton.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.ImageButton:Effects;Xamarin.Forms.Core": any  };
    
    /** Collection Property ImageButton.GestureRecognizers of Type System.Collections.Generic.IList`1[Xamarin.Forms.IGestureRecognizer] */
    GestureRecognizers?(v: any): { "Xamarin.Forms.ImageButton:GestureRecognizers;Xamarin.Forms.Core": any  };
    
    /** Collection Property ImageButton.Resources of Type Xamarin.Forms.ResourceDictionary */
    Resources?(v: any): { "Xamarin.Forms.ImageButton:Resources;Xamarin.Forms.Core": any  };
    
    /** Collection Property ImageButton.StyleClass of Type System.Collections.Generic.IList`1[System.String] */
    StyleClass?(v: any): { "Xamarin.Forms.ImageButton:StyleClass;Xamarin.Forms.Core": any  };
    
    /** Collection Property ImageButton.Triggers of Type System.Collections.Generic.IList`1[Xamarin.Forms.TriggerBase] */
    Triggers?(v: any): { "Xamarin.Forms.ImageButton:Triggers;Xamarin.Forms.Core": any  }
    }
    
    /** ImageButton */
    export const ImageButton: IImageButtonConstructor = XNode.prepare<IImageButton>("Xamarin.Forms.ImageButton;Xamarin.Forms.Core");
    
    
    ImageButton.Behaviors = (v) => ({ "Xamarin.Forms.ImageButton:Behaviors;Xamarin.Forms.Core": v  }) ;
    
    ImageButton.Effects = (v) => ({ "Xamarin.Forms.ImageButton:Effects;Xamarin.Forms.Core": v  }) ;
    
    ImageButton.GestureRecognizers = (v) => ({ "Xamarin.Forms.ImageButton:GestureRecognizers;Xamarin.Forms.Core": v  }) ;
    
    ImageButton.Resources = (v) => ({ "Xamarin.Forms.ImageButton:Resources;Xamarin.Forms.Core": v  }) ;
    
    ImageButton.StyleClass = (v) => ({ "Xamarin.Forms.ImageButton:StyleClass;Xamarin.Forms.Core": v  }) ;
    
    ImageButton.Triggers = (v) => ({ "Xamarin.Forms.ImageButton:Triggers;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property ImageSource.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.ImageSource:Effects;Xamarin.Forms.Core": any  }
    }
    
    /** ImageSource */
    export const ImageSource: IImageSourceConstructor = XNode.prepare<IImageSource>("Xamarin.Forms.ImageSource;Xamarin.Forms.Core");
    
    
    ImageSource.Effects = (v) => ({ "Xamarin.Forms.ImageSource:Effects;Xamarin.Forms.Core": v  }) ;
    
    
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
        
    /** Collection Property IndicatorView.Behaviors of Type System.Collections.Generic.IList`1[Xamarin.Forms.Behavior] */
    Behaviors?(v: any): { "Xamarin.Forms.IndicatorView:Behaviors;Xamarin.Forms.Core": any  };
    
    /** Collection Property IndicatorView.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.IndicatorView:Effects;Xamarin.Forms.Core": any  };
    
    /** Collection Property IndicatorView.GestureRecognizers of Type System.Collections.Generic.IList`1[Xamarin.Forms.IGestureRecognizer] */
    GestureRecognizers?(v: any): { "Xamarin.Forms.IndicatorView:GestureRecognizers;Xamarin.Forms.Core": any  };
    
    /** Collection Property IndicatorView.Resources of Type Xamarin.Forms.ResourceDictionary */
    Resources?(v: any): { "Xamarin.Forms.IndicatorView:Resources;Xamarin.Forms.Core": any  };
    
    /** Collection Property IndicatorView.StyleClass of Type System.Collections.Generic.IList`1[System.String] */
    StyleClass?(v: any): { "Xamarin.Forms.IndicatorView:StyleClass;Xamarin.Forms.Core": any  };
    
    /** Collection Property IndicatorView.Triggers of Type System.Collections.Generic.IList`1[Xamarin.Forms.TriggerBase] */
    Triggers?(v: any): { "Xamarin.Forms.IndicatorView:Triggers;Xamarin.Forms.Core": any  }
    }
    
    /** IndicatorView */
    export const IndicatorView: IIndicatorViewConstructor = XNode.prepare<IIndicatorView>("Xamarin.Forms.IndicatorView;Xamarin.Forms.Core");
    
    IndicatorView.ItemsSourceBy = (v) => ({ "Xamarin.Forms.IndicatorView:ItemsSourceBy;Xamarin.Forms.Core": v  }) ;
    
    IndicatorView.Behaviors = (v) => ({ "Xamarin.Forms.IndicatorView:Behaviors;Xamarin.Forms.Core": v  }) ;
    
    IndicatorView.Effects = (v) => ({ "Xamarin.Forms.IndicatorView:Effects;Xamarin.Forms.Core": v  }) ;
    
    IndicatorView.GestureRecognizers = (v) => ({ "Xamarin.Forms.IndicatorView:GestureRecognizers;Xamarin.Forms.Core": v  }) ;
    
    IndicatorView.Resources = (v) => ({ "Xamarin.Forms.IndicatorView:Resources;Xamarin.Forms.Core": v  }) ;
    
    IndicatorView.StyleClass = (v) => ({ "Xamarin.Forms.IndicatorView:StyleClass;Xamarin.Forms.Core": v  }) ;
    
    IndicatorView.Triggers = (v) => ({ "Xamarin.Forms.IndicatorView:Triggers;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property InputView.Behaviors of Type System.Collections.Generic.IList`1[Xamarin.Forms.Behavior] */
    Behaviors?(v: any): { "Xamarin.Forms.InputView:Behaviors;Xamarin.Forms.Core": any  };
    
    /** Collection Property InputView.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.InputView:Effects;Xamarin.Forms.Core": any  };
    
    /** Collection Property InputView.GestureRecognizers of Type System.Collections.Generic.IList`1[Xamarin.Forms.IGestureRecognizer] */
    GestureRecognizers?(v: any): { "Xamarin.Forms.InputView:GestureRecognizers;Xamarin.Forms.Core": any  };
    
    /** Collection Property InputView.Resources of Type Xamarin.Forms.ResourceDictionary */
    Resources?(v: any): { "Xamarin.Forms.InputView:Resources;Xamarin.Forms.Core": any  };
    
    /** Collection Property InputView.StyleClass of Type System.Collections.Generic.IList`1[System.String] */
    StyleClass?(v: any): { "Xamarin.Forms.InputView:StyleClass;Xamarin.Forms.Core": any  };
    
    /** Collection Property InputView.Triggers of Type System.Collections.Generic.IList`1[Xamarin.Forms.TriggerBase] */
    Triggers?(v: any): { "Xamarin.Forms.InputView:Triggers;Xamarin.Forms.Core": any  }
    }
    
    /** InputView */
    export const InputView: IInputViewConstructor = XNode.prepare<IInputView>("Xamarin.Forms.InputView;Xamarin.Forms.Core");
    
    
    InputView.Behaviors = (v) => ({ "Xamarin.Forms.InputView:Behaviors;Xamarin.Forms.Core": v  }) ;
    
    InputView.Effects = (v) => ({ "Xamarin.Forms.InputView:Effects;Xamarin.Forms.Core": v  }) ;
    
    InputView.GestureRecognizers = (v) => ({ "Xamarin.Forms.InputView:GestureRecognizers;Xamarin.Forms.Core": v  }) ;
    
    InputView.Resources = (v) => ({ "Xamarin.Forms.InputView:Resources;Xamarin.Forms.Core": v  }) ;
    
    InputView.StyleClass = (v) => ({ "Xamarin.Forms.InputView:StyleClass;Xamarin.Forms.Core": v  }) ;
    
    InputView.Triggers = (v) => ({ "Xamarin.Forms.InputView:Triggers;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property DataTrigger.EnterActions of Type System.Collections.Generic.IList`1[Xamarin.Forms.TriggerAction] */
    EnterActions?(v: any): { "Xamarin.Forms.DataTrigger:EnterActions;Xamarin.Forms.Core": any  };
    
    /** Collection Property DataTrigger.ExitActions of Type System.Collections.Generic.IList`1[Xamarin.Forms.TriggerAction] */
    ExitActions?(v: any): { "Xamarin.Forms.DataTrigger:ExitActions;Xamarin.Forms.Core": any  };
    
    /** Collection Property DataTrigger.Setters of Type System.Collections.Generic.IList`1[Xamarin.Forms.Setter] */
    Setters?(v: any): { "Xamarin.Forms.DataTrigger:Setters;Xamarin.Forms.Core": any  }
    }
    
    /** DataTrigger */
    export const DataTrigger: IDataTriggerConstructor = XNode.prepare<IDataTrigger>("Xamarin.Forms.DataTrigger;Xamarin.Forms.Core");
    
    
    DataTrigger.EnterActions = (v) => ({ "Xamarin.Forms.DataTrigger:EnterActions;Xamarin.Forms.Core": v  }) ;
    
    DataTrigger.ExitActions = (v) => ({ "Xamarin.Forms.DataTrigger:ExitActions;Xamarin.Forms.Core": v  }) ;
    
    DataTrigger.Setters = (v) => ({ "Xamarin.Forms.DataTrigger:Setters;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property EventTrigger.Actions of Type System.Collections.Generic.IList`1[Xamarin.Forms.TriggerAction] */
    Actions?(v: any): { "Xamarin.Forms.EventTrigger:Actions;Xamarin.Forms.Core": any  };
    
    /** Collection Property EventTrigger.EnterActions of Type System.Collections.Generic.IList`1[Xamarin.Forms.TriggerAction] */
    EnterActions?(v: any): { "Xamarin.Forms.EventTrigger:EnterActions;Xamarin.Forms.Core": any  };
    
    /** Collection Property EventTrigger.ExitActions of Type System.Collections.Generic.IList`1[Xamarin.Forms.TriggerAction] */
    ExitActions?(v: any): { "Xamarin.Forms.EventTrigger:ExitActions;Xamarin.Forms.Core": any  }
    }
    
    /** EventTrigger */
    export const EventTrigger: IEventTriggerConstructor = XNode.prepare<IEventTrigger>("Xamarin.Forms.EventTrigger;Xamarin.Forms.Core");
    
    
    EventTrigger.Actions = (v) => ({ "Xamarin.Forms.EventTrigger:Actions;Xamarin.Forms.Core": v  }) ;
    
    EventTrigger.EnterActions = (v) => ({ "Xamarin.Forms.EventTrigger:EnterActions;Xamarin.Forms.Core": v  }) ;
    
    EventTrigger.ExitActions = (v) => ({ "Xamarin.Forms.EventTrigger:ExitActions;Xamarin.Forms.Core": v  }) ;
    
    
    export interface IMultiTrigger {
        
    /** Property BindingContext of Type Object */
    bindingContext?: any;
    
    /** Property Dispatcher of Type IDispatcher */
    dispatcher?: any;
        [key: string]: any;
    }
    
    export interface IMultiTriggerConstructor {
        (a?: Partial<IMultiTrigger>, ... nodes: XNode[]): XNode;
        
        
    /** Collection Property MultiTrigger.Conditions of Type System.Collections.Generic.IList`1[Xamarin.Forms.Condition] */
    Conditions?(v: any): { "Xamarin.Forms.MultiTrigger:Conditions;Xamarin.Forms.Core": any  };
    
    /** Collection Property MultiTrigger.EnterActions of Type System.Collections.Generic.IList`1[Xamarin.Forms.TriggerAction] */
    EnterActions?(v: any): { "Xamarin.Forms.MultiTrigger:EnterActions;Xamarin.Forms.Core": any  };
    
    /** Collection Property MultiTrigger.ExitActions of Type System.Collections.Generic.IList`1[Xamarin.Forms.TriggerAction] */
    ExitActions?(v: any): { "Xamarin.Forms.MultiTrigger:ExitActions;Xamarin.Forms.Core": any  };
    
    /** Collection Property MultiTrigger.Setters of Type System.Collections.Generic.IList`1[Xamarin.Forms.Setter] */
    Setters?(v: any): { "Xamarin.Forms.MultiTrigger:Setters;Xamarin.Forms.Core": any  }
    }
    
    /** MultiTrigger */
    export const MultiTrigger: IMultiTriggerConstructor = XNode.prepare<IMultiTrigger>("Xamarin.Forms.MultiTrigger;Xamarin.Forms.Core");
    
    
    MultiTrigger.Conditions = (v) => ({ "Xamarin.Forms.MultiTrigger:Conditions;Xamarin.Forms.Core": v  }) ;
    
    MultiTrigger.EnterActions = (v) => ({ "Xamarin.Forms.MultiTrigger:EnterActions;Xamarin.Forms.Core": v  }) ;
    
    MultiTrigger.ExitActions = (v) => ({ "Xamarin.Forms.MultiTrigger:ExitActions;Xamarin.Forms.Core": v  }) ;
    
    MultiTrigger.Setters = (v) => ({ "Xamarin.Forms.MultiTrigger:Setters;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property Trigger.EnterActions of Type System.Collections.Generic.IList`1[Xamarin.Forms.TriggerAction] */
    EnterActions?(v: any): { "Xamarin.Forms.Trigger:EnterActions;Xamarin.Forms.Core": any  };
    
    /** Collection Property Trigger.ExitActions of Type System.Collections.Generic.IList`1[Xamarin.Forms.TriggerAction] */
    ExitActions?(v: any): { "Xamarin.Forms.Trigger:ExitActions;Xamarin.Forms.Core": any  };
    
    /** Collection Property Trigger.Setters of Type System.Collections.Generic.IList`1[Xamarin.Forms.Setter] */
    Setters?(v: any): { "Xamarin.Forms.Trigger:Setters;Xamarin.Forms.Core": any  }
    }
    
    /** Trigger */
    export const Trigger: ITriggerConstructor = XNode.prepare<ITrigger>("Xamarin.Forms.Trigger;Xamarin.Forms.Core");
    
    
    Trigger.EnterActions = (v) => ({ "Xamarin.Forms.Trigger:EnterActions;Xamarin.Forms.Core": v  }) ;
    
    Trigger.ExitActions = (v) => ({ "Xamarin.Forms.Trigger:ExitActions;Xamarin.Forms.Core": v  }) ;
    
    Trigger.Setters = (v) => ({ "Xamarin.Forms.Trigger:Setters;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property TriggerBase.EnterActions of Type System.Collections.Generic.IList`1[Xamarin.Forms.TriggerAction] */
    EnterActions?(v: any): { "Xamarin.Forms.TriggerBase:EnterActions;Xamarin.Forms.Core": any  };
    
    /** Collection Property TriggerBase.ExitActions of Type System.Collections.Generic.IList`1[Xamarin.Forms.TriggerAction] */
    ExitActions?(v: any): { "Xamarin.Forms.TriggerBase:ExitActions;Xamarin.Forms.Core": any  }
    }
    
    /** TriggerBase */
    export const TriggerBase: ITriggerBaseConstructor = XNode.prepare<ITriggerBase>("Xamarin.Forms.TriggerBase;Xamarin.Forms.Core");
    
    
    TriggerBase.EnterActions = (v) => ({ "Xamarin.Forms.TriggerBase:EnterActions;Xamarin.Forms.Core": v  }) ;
    
    TriggerBase.ExitActions = (v) => ({ "Xamarin.Forms.TriggerBase:ExitActions;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property CarouselView.Behaviors of Type System.Collections.Generic.IList`1[Xamarin.Forms.Behavior] */
    Behaviors?(v: any): { "Xamarin.Forms.CarouselView:Behaviors;Xamarin.Forms.Core": any  };
    
    /** Collection Property CarouselView.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.CarouselView:Effects;Xamarin.Forms.Core": any  };
    
    /** Collection Property CarouselView.GestureRecognizers of Type System.Collections.Generic.IList`1[Xamarin.Forms.IGestureRecognizer] */
    GestureRecognizers?(v: any): { "Xamarin.Forms.CarouselView:GestureRecognizers;Xamarin.Forms.Core": any  };
    
    /** Collection Property CarouselView.Resources of Type Xamarin.Forms.ResourceDictionary */
    Resources?(v: any): { "Xamarin.Forms.CarouselView:Resources;Xamarin.Forms.Core": any  };
    
    /** Collection Property CarouselView.StyleClass of Type System.Collections.Generic.IList`1[System.String] */
    StyleClass?(v: any): { "Xamarin.Forms.CarouselView:StyleClass;Xamarin.Forms.Core": any  };
    
    /** Collection Property CarouselView.Triggers of Type System.Collections.Generic.IList`1[Xamarin.Forms.TriggerBase] */
    Triggers?(v: any): { "Xamarin.Forms.CarouselView:Triggers;Xamarin.Forms.Core": any  };
    
    /** Collection Property CarouselView.VisibleViews of Type System.Collections.Generic.List`1[Xamarin.Forms.View] */
    VisibleViews?(v: any): { "Xamarin.Forms.CarouselView:VisibleViews;Xamarin.Forms.Core": any  }
    }
    
    /** CarouselView */
    export const CarouselView: ICarouselViewConstructor = XNode.prepare<ICarouselView>("Xamarin.Forms.CarouselView;Xamarin.Forms.Core");
    
    
    CarouselView.Behaviors = (v) => ({ "Xamarin.Forms.CarouselView:Behaviors;Xamarin.Forms.Core": v  }) ;
    
    CarouselView.Effects = (v) => ({ "Xamarin.Forms.CarouselView:Effects;Xamarin.Forms.Core": v  }) ;
    
    CarouselView.GestureRecognizers = (v) => ({ "Xamarin.Forms.CarouselView:GestureRecognizers;Xamarin.Forms.Core": v  }) ;
    
    CarouselView.Resources = (v) => ({ "Xamarin.Forms.CarouselView:Resources;Xamarin.Forms.Core": v  }) ;
    
    CarouselView.StyleClass = (v) => ({ "Xamarin.Forms.CarouselView:StyleClass;Xamarin.Forms.Core": v  }) ;
    
    CarouselView.Triggers = (v) => ({ "Xamarin.Forms.CarouselView:Triggers;Xamarin.Forms.Core": v  }) ;
    
    CarouselView.VisibleViews = (v) => ({ "Xamarin.Forms.CarouselView:VisibleViews;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property CollectionView.Behaviors of Type System.Collections.Generic.IList`1[Xamarin.Forms.Behavior] */
    Behaviors?(v: any): { "Xamarin.Forms.CollectionView:Behaviors;Xamarin.Forms.Core": any  };
    
    /** Collection Property CollectionView.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.CollectionView:Effects;Xamarin.Forms.Core": any  };
    
    /** Collection Property CollectionView.GestureRecognizers of Type System.Collections.Generic.IList`1[Xamarin.Forms.IGestureRecognizer] */
    GestureRecognizers?(v: any): { "Xamarin.Forms.CollectionView:GestureRecognizers;Xamarin.Forms.Core": any  };
    
    /** Collection Property CollectionView.Resources of Type Xamarin.Forms.ResourceDictionary */
    Resources?(v: any): { "Xamarin.Forms.CollectionView:Resources;Xamarin.Forms.Core": any  };
    
    /** Collection Property CollectionView.SelectedItems of Type System.Collections.Generic.IList`1[System.Object] */
    SelectedItems?(v: any): { "Xamarin.Forms.CollectionView:SelectedItems;Xamarin.Forms.Core": any  };
    
    /** Collection Property CollectionView.StyleClass of Type System.Collections.Generic.IList`1[System.String] */
    StyleClass?(v: any): { "Xamarin.Forms.CollectionView:StyleClass;Xamarin.Forms.Core": any  };
    
    /** Collection Property CollectionView.Triggers of Type System.Collections.Generic.IList`1[Xamarin.Forms.TriggerBase] */
    Triggers?(v: any): { "Xamarin.Forms.CollectionView:Triggers;Xamarin.Forms.Core": any  }
    }
    
    /** CollectionView */
    export const CollectionView: ICollectionViewConstructor = XNode.prepare<ICollectionView>("Xamarin.Forms.CollectionView;Xamarin.Forms.Core");
    
    
    CollectionView.Behaviors = (v) => ({ "Xamarin.Forms.CollectionView:Behaviors;Xamarin.Forms.Core": v  }) ;
    
    CollectionView.Effects = (v) => ({ "Xamarin.Forms.CollectionView:Effects;Xamarin.Forms.Core": v  }) ;
    
    CollectionView.GestureRecognizers = (v) => ({ "Xamarin.Forms.CollectionView:GestureRecognizers;Xamarin.Forms.Core": v  }) ;
    
    CollectionView.Resources = (v) => ({ "Xamarin.Forms.CollectionView:Resources;Xamarin.Forms.Core": v  }) ;
    
    CollectionView.SelectedItems = (v) => ({ "Xamarin.Forms.CollectionView:SelectedItems;Xamarin.Forms.Core": v  }) ;
    
    CollectionView.StyleClass = (v) => ({ "Xamarin.Forms.CollectionView:StyleClass;Xamarin.Forms.Core": v  }) ;
    
    CollectionView.Triggers = (v) => ({ "Xamarin.Forms.CollectionView:Triggers;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property GroupableItemsView.Behaviors of Type System.Collections.Generic.IList`1[Xamarin.Forms.Behavior] */
    Behaviors?(v: any): { "Xamarin.Forms.GroupableItemsView:Behaviors;Xamarin.Forms.Core": any  };
    
    /** Collection Property GroupableItemsView.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.GroupableItemsView:Effects;Xamarin.Forms.Core": any  };
    
    /** Collection Property GroupableItemsView.GestureRecognizers of Type System.Collections.Generic.IList`1[Xamarin.Forms.IGestureRecognizer] */
    GestureRecognizers?(v: any): { "Xamarin.Forms.GroupableItemsView:GestureRecognizers;Xamarin.Forms.Core": any  };
    
    /** Collection Property GroupableItemsView.Resources of Type Xamarin.Forms.ResourceDictionary */
    Resources?(v: any): { "Xamarin.Forms.GroupableItemsView:Resources;Xamarin.Forms.Core": any  };
    
    /** Collection Property GroupableItemsView.SelectedItems of Type System.Collections.Generic.IList`1[System.Object] */
    SelectedItems?(v: any): { "Xamarin.Forms.GroupableItemsView:SelectedItems;Xamarin.Forms.Core": any  };
    
    /** Collection Property GroupableItemsView.StyleClass of Type System.Collections.Generic.IList`1[System.String] */
    StyleClass?(v: any): { "Xamarin.Forms.GroupableItemsView:StyleClass;Xamarin.Forms.Core": any  };
    
    /** Collection Property GroupableItemsView.Triggers of Type System.Collections.Generic.IList`1[Xamarin.Forms.TriggerBase] */
    Triggers?(v: any): { "Xamarin.Forms.GroupableItemsView:Triggers;Xamarin.Forms.Core": any  }
    }
    
    /** GroupableItemsView */
    export const GroupableItemsView: IGroupableItemsViewConstructor = XNode.prepare<IGroupableItemsView>("Xamarin.Forms.GroupableItemsView;Xamarin.Forms.Core");
    
    
    GroupableItemsView.Behaviors = (v) => ({ "Xamarin.Forms.GroupableItemsView:Behaviors;Xamarin.Forms.Core": v  }) ;
    
    GroupableItemsView.Effects = (v) => ({ "Xamarin.Forms.GroupableItemsView:Effects;Xamarin.Forms.Core": v  }) ;
    
    GroupableItemsView.GestureRecognizers = (v) => ({ "Xamarin.Forms.GroupableItemsView:GestureRecognizers;Xamarin.Forms.Core": v  }) ;
    
    GroupableItemsView.Resources = (v) => ({ "Xamarin.Forms.GroupableItemsView:Resources;Xamarin.Forms.Core": v  }) ;
    
    GroupableItemsView.SelectedItems = (v) => ({ "Xamarin.Forms.GroupableItemsView:SelectedItems;Xamarin.Forms.Core": v  }) ;
    
    GroupableItemsView.StyleClass = (v) => ({ "Xamarin.Forms.GroupableItemsView:StyleClass;Xamarin.Forms.Core": v  }) ;
    
    GroupableItemsView.Triggers = (v) => ({ "Xamarin.Forms.GroupableItemsView:Triggers;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property ItemsView.Behaviors of Type System.Collections.Generic.IList`1[Xamarin.Forms.Behavior] */
    Behaviors?(v: any): { "Xamarin.Forms.ItemsView:Behaviors;Xamarin.Forms.Core": any  };
    
    /** Collection Property ItemsView.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.ItemsView:Effects;Xamarin.Forms.Core": any  };
    
    /** Collection Property ItemsView.GestureRecognizers of Type System.Collections.Generic.IList`1[Xamarin.Forms.IGestureRecognizer] */
    GestureRecognizers?(v: any): { "Xamarin.Forms.ItemsView:GestureRecognizers;Xamarin.Forms.Core": any  };
    
    /** Collection Property ItemsView.Resources of Type Xamarin.Forms.ResourceDictionary */
    Resources?(v: any): { "Xamarin.Forms.ItemsView:Resources;Xamarin.Forms.Core": any  };
    
    /** Collection Property ItemsView.StyleClass of Type System.Collections.Generic.IList`1[System.String] */
    StyleClass?(v: any): { "Xamarin.Forms.ItemsView:StyleClass;Xamarin.Forms.Core": any  };
    
    /** Collection Property ItemsView.Triggers of Type System.Collections.Generic.IList`1[Xamarin.Forms.TriggerBase] */
    Triggers?(v: any): { "Xamarin.Forms.ItemsView:Triggers;Xamarin.Forms.Core": any  }
    }
    
    /** ItemsView */
    export const ItemsView: IItemsViewConstructor = XNode.prepare<IItemsView>("Xamarin.Forms.ItemsView;Xamarin.Forms.Core");
    
    
    ItemsView.Behaviors = (v) => ({ "Xamarin.Forms.ItemsView:Behaviors;Xamarin.Forms.Core": v  }) ;
    
    ItemsView.Effects = (v) => ({ "Xamarin.Forms.ItemsView:Effects;Xamarin.Forms.Core": v  }) ;
    
    ItemsView.GestureRecognizers = (v) => ({ "Xamarin.Forms.ItemsView:GestureRecognizers;Xamarin.Forms.Core": v  }) ;
    
    ItemsView.Resources = (v) => ({ "Xamarin.Forms.ItemsView:Resources;Xamarin.Forms.Core": v  }) ;
    
    ItemsView.StyleClass = (v) => ({ "Xamarin.Forms.ItemsView:StyleClass;Xamarin.Forms.Core": v  }) ;
    
    ItemsView.Triggers = (v) => ({ "Xamarin.Forms.ItemsView:Triggers;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property SelectableItemsView.Behaviors of Type System.Collections.Generic.IList`1[Xamarin.Forms.Behavior] */
    Behaviors?(v: any): { "Xamarin.Forms.SelectableItemsView:Behaviors;Xamarin.Forms.Core": any  };
    
    /** Collection Property SelectableItemsView.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.SelectableItemsView:Effects;Xamarin.Forms.Core": any  };
    
    /** Collection Property SelectableItemsView.GestureRecognizers of Type System.Collections.Generic.IList`1[Xamarin.Forms.IGestureRecognizer] */
    GestureRecognizers?(v: any): { "Xamarin.Forms.SelectableItemsView:GestureRecognizers;Xamarin.Forms.Core": any  };
    
    /** Collection Property SelectableItemsView.Resources of Type Xamarin.Forms.ResourceDictionary */
    Resources?(v: any): { "Xamarin.Forms.SelectableItemsView:Resources;Xamarin.Forms.Core": any  };
    
    /** Collection Property SelectableItemsView.SelectedItems of Type System.Collections.Generic.IList`1[System.Object] */
    SelectedItems?(v: any): { "Xamarin.Forms.SelectableItemsView:SelectedItems;Xamarin.Forms.Core": any  };
    
    /** Collection Property SelectableItemsView.StyleClass of Type System.Collections.Generic.IList`1[System.String] */
    StyleClass?(v: any): { "Xamarin.Forms.SelectableItemsView:StyleClass;Xamarin.Forms.Core": any  };
    
    /** Collection Property SelectableItemsView.Triggers of Type System.Collections.Generic.IList`1[Xamarin.Forms.TriggerBase] */
    Triggers?(v: any): { "Xamarin.Forms.SelectableItemsView:Triggers;Xamarin.Forms.Core": any  }
    }
    
    /** SelectableItemsView */
    export const SelectableItemsView: ISelectableItemsViewConstructor = XNode.prepare<ISelectableItemsView>("Xamarin.Forms.SelectableItemsView;Xamarin.Forms.Core");
    
    
    SelectableItemsView.Behaviors = (v) => ({ "Xamarin.Forms.SelectableItemsView:Behaviors;Xamarin.Forms.Core": v  }) ;
    
    SelectableItemsView.Effects = (v) => ({ "Xamarin.Forms.SelectableItemsView:Effects;Xamarin.Forms.Core": v  }) ;
    
    SelectableItemsView.GestureRecognizers = (v) => ({ "Xamarin.Forms.SelectableItemsView:GestureRecognizers;Xamarin.Forms.Core": v  }) ;
    
    SelectableItemsView.Resources = (v) => ({ "Xamarin.Forms.SelectableItemsView:Resources;Xamarin.Forms.Core": v  }) ;
    
    SelectableItemsView.SelectedItems = (v) => ({ "Xamarin.Forms.SelectableItemsView:SelectedItems;Xamarin.Forms.Core": v  }) ;
    
    SelectableItemsView.StyleClass = (v) => ({ "Xamarin.Forms.SelectableItemsView:StyleClass;Xamarin.Forms.Core": v  }) ;
    
    SelectableItemsView.Triggers = (v) => ({ "Xamarin.Forms.SelectableItemsView:Triggers;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property StructuredItemsView.Behaviors of Type System.Collections.Generic.IList`1[Xamarin.Forms.Behavior] */
    Behaviors?(v: any): { "Xamarin.Forms.StructuredItemsView:Behaviors;Xamarin.Forms.Core": any  };
    
    /** Collection Property StructuredItemsView.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.StructuredItemsView:Effects;Xamarin.Forms.Core": any  };
    
    /** Collection Property StructuredItemsView.GestureRecognizers of Type System.Collections.Generic.IList`1[Xamarin.Forms.IGestureRecognizer] */
    GestureRecognizers?(v: any): { "Xamarin.Forms.StructuredItemsView:GestureRecognizers;Xamarin.Forms.Core": any  };
    
    /** Collection Property StructuredItemsView.Resources of Type Xamarin.Forms.ResourceDictionary */
    Resources?(v: any): { "Xamarin.Forms.StructuredItemsView:Resources;Xamarin.Forms.Core": any  };
    
    /** Collection Property StructuredItemsView.StyleClass of Type System.Collections.Generic.IList`1[System.String] */
    StyleClass?(v: any): { "Xamarin.Forms.StructuredItemsView:StyleClass;Xamarin.Forms.Core": any  };
    
    /** Collection Property StructuredItemsView.Triggers of Type System.Collections.Generic.IList`1[Xamarin.Forms.TriggerBase] */
    Triggers?(v: any): { "Xamarin.Forms.StructuredItemsView:Triggers;Xamarin.Forms.Core": any  }
    }
    
    /** StructuredItemsView */
    export const StructuredItemsView: IStructuredItemsViewConstructor = XNode.prepare<IStructuredItemsView>("Xamarin.Forms.StructuredItemsView;Xamarin.Forms.Core");
    
    
    StructuredItemsView.Behaviors = (v) => ({ "Xamarin.Forms.StructuredItemsView:Behaviors;Xamarin.Forms.Core": v  }) ;
    
    StructuredItemsView.Effects = (v) => ({ "Xamarin.Forms.StructuredItemsView:Effects;Xamarin.Forms.Core": v  }) ;
    
    StructuredItemsView.GestureRecognizers = (v) => ({ "Xamarin.Forms.StructuredItemsView:GestureRecognizers;Xamarin.Forms.Core": v  }) ;
    
    StructuredItemsView.Resources = (v) => ({ "Xamarin.Forms.StructuredItemsView:Resources;Xamarin.Forms.Core": v  }) ;
    
    StructuredItemsView.StyleClass = (v) => ({ "Xamarin.Forms.StructuredItemsView:StyleClass;Xamarin.Forms.Core": v  }) ;
    
    StructuredItemsView.Triggers = (v) => ({ "Xamarin.Forms.StructuredItemsView:Triggers;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property Label.Behaviors of Type System.Collections.Generic.IList`1[Xamarin.Forms.Behavior] */
    Behaviors?(v: any): { "Xamarin.Forms.Label:Behaviors;Xamarin.Forms.Core": any  };
    
    /** Collection Property Label.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.Label:Effects;Xamarin.Forms.Core": any  };
    
    /** Collection Property Label.GestureRecognizers of Type System.Collections.Generic.IList`1[Xamarin.Forms.IGestureRecognizer] */
    GestureRecognizers?(v: any): { "Xamarin.Forms.Label:GestureRecognizers;Xamarin.Forms.Core": any  };
    
    /** Collection Property Label.Resources of Type Xamarin.Forms.ResourceDictionary */
    Resources?(v: any): { "Xamarin.Forms.Label:Resources;Xamarin.Forms.Core": any  };
    
    /** Collection Property Label.StyleClass of Type System.Collections.Generic.IList`1[System.String] */
    StyleClass?(v: any): { "Xamarin.Forms.Label:StyleClass;Xamarin.Forms.Core": any  };
    
    /** Collection Property Label.Triggers of Type System.Collections.Generic.IList`1[Xamarin.Forms.TriggerBase] */
    Triggers?(v: any): { "Xamarin.Forms.Label:Triggers;Xamarin.Forms.Core": any  }
    }
    
    /** Label */
    export const Label: ILabelConstructor = XNode.prepare<ILabel>("Xamarin.Forms.Label;Xamarin.Forms.Core");
    
    
    Label.Behaviors = (v) => ({ "Xamarin.Forms.Label:Behaviors;Xamarin.Forms.Core": v  }) ;
    
    Label.Effects = (v) => ({ "Xamarin.Forms.Label:Effects;Xamarin.Forms.Core": v  }) ;
    
    Label.GestureRecognizers = (v) => ({ "Xamarin.Forms.Label:GestureRecognizers;Xamarin.Forms.Core": v  }) ;
    
    Label.Resources = (v) => ({ "Xamarin.Forms.Label:Resources;Xamarin.Forms.Core": v  }) ;
    
    Label.StyleClass = (v) => ({ "Xamarin.Forms.Label:StyleClass;Xamarin.Forms.Core": v  }) ;
    
    Label.Triggers = (v) => ({ "Xamarin.Forms.Label:Triggers;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property Layout.Behaviors of Type System.Collections.Generic.IList`1[Xamarin.Forms.Behavior] */
    Behaviors?(v: any): { "Xamarin.Forms.Layout:Behaviors;Xamarin.Forms.Core": any  };
    
    /** Collection Property Layout.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.Layout:Effects;Xamarin.Forms.Core": any  };
    
    /** Collection Property Layout.GestureRecognizers of Type System.Collections.Generic.IList`1[Xamarin.Forms.IGestureRecognizer] */
    GestureRecognizers?(v: any): { "Xamarin.Forms.Layout:GestureRecognizers;Xamarin.Forms.Core": any  };
    
    /** Collection Property Layout.Resources of Type Xamarin.Forms.ResourceDictionary */
    Resources?(v: any): { "Xamarin.Forms.Layout:Resources;Xamarin.Forms.Core": any  };
    
    /** Collection Property Layout.StyleClass of Type System.Collections.Generic.IList`1[System.String] */
    StyleClass?(v: any): { "Xamarin.Forms.Layout:StyleClass;Xamarin.Forms.Core": any  };
    
    /** Collection Property Layout.Triggers of Type System.Collections.Generic.IList`1[Xamarin.Forms.TriggerBase] */
    Triggers?(v: any): { "Xamarin.Forms.Layout:Triggers;Xamarin.Forms.Core": any  }
    }
    
    /** Layout */
    export const Layout: ILayoutConstructor = XNode.prepare<ILayout>("Xamarin.Forms.Layout;Xamarin.Forms.Core");
    
    
    Layout.Behaviors = (v) => ({ "Xamarin.Forms.Layout:Behaviors;Xamarin.Forms.Core": v  }) ;
    
    Layout.Effects = (v) => ({ "Xamarin.Forms.Layout:Effects;Xamarin.Forms.Core": v  }) ;
    
    Layout.GestureRecognizers = (v) => ({ "Xamarin.Forms.Layout:GestureRecognizers;Xamarin.Forms.Core": v  }) ;
    
    Layout.Resources = (v) => ({ "Xamarin.Forms.Layout:Resources;Xamarin.Forms.Core": v  }) ;
    
    Layout.StyleClass = (v) => ({ "Xamarin.Forms.Layout:StyleClass;Xamarin.Forms.Core": v  }) ;
    
    Layout.Triggers = (v) => ({ "Xamarin.Forms.Layout:Triggers;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property ListView.Behaviors of Type System.Collections.Generic.IList`1[Xamarin.Forms.Behavior] */
    Behaviors?(v: any): { "Xamarin.Forms.ListView:Behaviors;Xamarin.Forms.Core": any  };
    
    /** Collection Property ListView.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.ListView:Effects;Xamarin.Forms.Core": any  };
    
    /** Collection Property ListView.GestureRecognizers of Type System.Collections.Generic.IList`1[Xamarin.Forms.IGestureRecognizer] */
    GestureRecognizers?(v: any): { "Xamarin.Forms.ListView:GestureRecognizers;Xamarin.Forms.Core": any  };
    
    /** Collection Property ListView.Resources of Type Xamarin.Forms.ResourceDictionary */
    Resources?(v: any): { "Xamarin.Forms.ListView:Resources;Xamarin.Forms.Core": any  };
    
    /** Collection Property ListView.StyleClass of Type System.Collections.Generic.IList`1[System.String] */
    StyleClass?(v: any): { "Xamarin.Forms.ListView:StyleClass;Xamarin.Forms.Core": any  };
    
    /** Collection Property ListView.Triggers of Type System.Collections.Generic.IList`1[Xamarin.Forms.TriggerBase] */
    Triggers?(v: any): { "Xamarin.Forms.ListView:Triggers;Xamarin.Forms.Core": any  }
    }
    
    /** ListView */
    export const ListView: IListViewConstructor = XNode.prepare<IListView>("Xamarin.Forms.ListView;Xamarin.Forms.Core");
    
    
    ListView.Behaviors = (v) => ({ "Xamarin.Forms.ListView:Behaviors;Xamarin.Forms.Core": v  }) ;
    
    ListView.Effects = (v) => ({ "Xamarin.Forms.ListView:Effects;Xamarin.Forms.Core": v  }) ;
    
    ListView.GestureRecognizers = (v) => ({ "Xamarin.Forms.ListView:GestureRecognizers;Xamarin.Forms.Core": v  }) ;
    
    ListView.Resources = (v) => ({ "Xamarin.Forms.ListView:Resources;Xamarin.Forms.Core": v  }) ;
    
    ListView.StyleClass = (v) => ({ "Xamarin.Forms.ListView:StyleClass;Xamarin.Forms.Core": v  }) ;
    
    ListView.Triggers = (v) => ({ "Xamarin.Forms.ListView:Triggers;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property MasterDetailPage.Behaviors of Type System.Collections.Generic.IList`1[Xamarin.Forms.Behavior] */
    Behaviors?(v: any): { "Xamarin.Forms.MasterDetailPage:Behaviors;Xamarin.Forms.Core": any  };
    
    /** Collection Property MasterDetailPage.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.MasterDetailPage:Effects;Xamarin.Forms.Core": any  };
    
    /** Collection Property MasterDetailPage.Resources of Type Xamarin.Forms.ResourceDictionary */
    Resources?(v: any): { "Xamarin.Forms.MasterDetailPage:Resources;Xamarin.Forms.Core": any  };
    
    /** Collection Property MasterDetailPage.StyleClass of Type System.Collections.Generic.IList`1[System.String] */
    StyleClass?(v: any): { "Xamarin.Forms.MasterDetailPage:StyleClass;Xamarin.Forms.Core": any  };
    
    /** Collection Property MasterDetailPage.ToolbarItems of Type System.Collections.Generic.IList`1[Xamarin.Forms.ToolbarItem] */
    ToolbarItems?(v: any): { "Xamarin.Forms.MasterDetailPage:ToolbarItems;Xamarin.Forms.Core": any  };
    
    /** Collection Property MasterDetailPage.Triggers of Type System.Collections.Generic.IList`1[Xamarin.Forms.TriggerBase] */
    Triggers?(v: any): { "Xamarin.Forms.MasterDetailPage:Triggers;Xamarin.Forms.Core": any  }
    }
    
    /** MasterDetailPage */
    export const MasterDetailPage: IMasterDetailPageConstructor = XNode.prepare<IMasterDetailPage>("Xamarin.Forms.MasterDetailPage;Xamarin.Forms.Core");
    
    
    MasterDetailPage.Behaviors = (v) => ({ "Xamarin.Forms.MasterDetailPage:Behaviors;Xamarin.Forms.Core": v  }) ;
    
    MasterDetailPage.Effects = (v) => ({ "Xamarin.Forms.MasterDetailPage:Effects;Xamarin.Forms.Core": v  }) ;
    
    MasterDetailPage.Resources = (v) => ({ "Xamarin.Forms.MasterDetailPage:Resources;Xamarin.Forms.Core": v  }) ;
    
    MasterDetailPage.StyleClass = (v) => ({ "Xamarin.Forms.MasterDetailPage:StyleClass;Xamarin.Forms.Core": v  }) ;
    
    MasterDetailPage.ToolbarItems = (v) => ({ "Xamarin.Forms.MasterDetailPage:ToolbarItems;Xamarin.Forms.Core": v  }) ;
    
    MasterDetailPage.Triggers = (v) => ({ "Xamarin.Forms.MasterDetailPage:Triggers;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property Menu.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.Menu:Effects;Xamarin.Forms.Core": any  };
    
    /** Collection Property Menu.Item of Type Xamarin.Forms.Menu */
    Item?(v: any): { "Xamarin.Forms.Menu:Item;Xamarin.Forms.Core": any  };
    
    /** Collection Property Menu.Items of Type System.Collections.ObjectModel.ObservableCollection`1[Xamarin.Forms.MenuItem] */
    Items?(v: any): { "Xamarin.Forms.Menu:Items;Xamarin.Forms.Core": any  }
    }
    
    /** Menu */
    export const Menu: IMenuConstructor = XNode.prepare<IMenu>("Xamarin.Forms.Menu;Xamarin.Forms.Core");
    
    
    Menu.Effects = (v) => ({ "Xamarin.Forms.Menu:Effects;Xamarin.Forms.Core": v  }) ;
    
    Menu.Item = (v) => ({ "Xamarin.Forms.Menu:Item;Xamarin.Forms.Core": v  }) ;
    
    Menu.Items = (v) => ({ "Xamarin.Forms.Menu:Items;Xamarin.Forms.Core": v  }) ;
    
    
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
        
    /** Collection Property MenuItem.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.MenuItem:Effects;Xamarin.Forms.Core": any  }
    }
    
    /** MenuItem */
    export const MenuItem: IMenuItemConstructor = XNode.prepare<IMenuItem>("Xamarin.Forms.MenuItem;Xamarin.Forms.Core");
    
    MenuItem.Accelerator = (v) => ({ "Xamarin.Forms.MenuItem:Accelerator;Xamarin.Forms.Core": v  }) ;
    
    MenuItem.Effects = (v) => ({ "Xamarin.Forms.MenuItem:Effects;Xamarin.Forms.Core": v  }) ;
    
    
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
        
    /** Collection Property NavigationPage.Behaviors of Type System.Collections.Generic.IList`1[Xamarin.Forms.Behavior] */
    Behaviors?(v: any): { "Xamarin.Forms.NavigationPage:Behaviors;Xamarin.Forms.Core": any  };
    
    /** Collection Property NavigationPage.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.NavigationPage:Effects;Xamarin.Forms.Core": any  };
    
    /** Collection Property NavigationPage.Resources of Type Xamarin.Forms.ResourceDictionary */
    Resources?(v: any): { "Xamarin.Forms.NavigationPage:Resources;Xamarin.Forms.Core": any  };
    
    /** Collection Property NavigationPage.StyleClass of Type System.Collections.Generic.IList`1[System.String] */
    StyleClass?(v: any): { "Xamarin.Forms.NavigationPage:StyleClass;Xamarin.Forms.Core": any  };
    
    /** Collection Property NavigationPage.ToolbarItems of Type System.Collections.Generic.IList`1[Xamarin.Forms.ToolbarItem] */
    ToolbarItems?(v: any): { "Xamarin.Forms.NavigationPage:ToolbarItems;Xamarin.Forms.Core": any  };
    
    /** Collection Property NavigationPage.Triggers of Type System.Collections.Generic.IList`1[Xamarin.Forms.TriggerBase] */
    Triggers?(v: any): { "Xamarin.Forms.NavigationPage:Triggers;Xamarin.Forms.Core": any  }
    }
    
    /** NavigationPage */
    export const NavigationPage: INavigationPageConstructor = XNode.prepare<INavigationPage>("Xamarin.Forms.NavigationPage;Xamarin.Forms.Core");
    
    NavigationPage.BackButtonTitle = (v) => ({ "Xamarin.Forms.NavigationPage:BackButtonTitle;Xamarin.Forms.Core": v  }) ;
    
    NavigationPage.HasNavigationBar = (v) => ({ "Xamarin.Forms.NavigationPage:HasNavigationBar;Xamarin.Forms.Core": v  }) ;
    
    NavigationPage.HasBackButton = (v) => ({ "Xamarin.Forms.NavigationPage:HasBackButton;Xamarin.Forms.Core": v  }) ;
    
    NavigationPage.TitleIconImageSource = (v) => ({ "Xamarin.Forms.NavigationPage:TitleIconImageSource;Xamarin.Forms.Core": v  }) ;
    
    NavigationPage.TitleIcon = (v) => ({ "Xamarin.Forms.NavigationPage:TitleIcon;Xamarin.Forms.Core": v  }) ;
    
    NavigationPage.TitleView = (v) => ({ "Xamarin.Forms.NavigationPage:TitleView;Xamarin.Forms.Core": v  }) ;
    
    NavigationPage.Behaviors = (v) => ({ "Xamarin.Forms.NavigationPage:Behaviors;Xamarin.Forms.Core": v  }) ;
    
    NavigationPage.Effects = (v) => ({ "Xamarin.Forms.NavigationPage:Effects;Xamarin.Forms.Core": v  }) ;
    
    NavigationPage.Resources = (v) => ({ "Xamarin.Forms.NavigationPage:Resources;Xamarin.Forms.Core": v  }) ;
    
    NavigationPage.StyleClass = (v) => ({ "Xamarin.Forms.NavigationPage:StyleClass;Xamarin.Forms.Core": v  }) ;
    
    NavigationPage.ToolbarItems = (v) => ({ "Xamarin.Forms.NavigationPage:ToolbarItems;Xamarin.Forms.Core": v  }) ;
    
    NavigationPage.Triggers = (v) => ({ "Xamarin.Forms.NavigationPage:Triggers;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property OpenGLView.Behaviors of Type System.Collections.Generic.IList`1[Xamarin.Forms.Behavior] */
    Behaviors?(v: any): { "Xamarin.Forms.OpenGLView:Behaviors;Xamarin.Forms.Core": any  };
    
    /** Collection Property OpenGLView.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.OpenGLView:Effects;Xamarin.Forms.Core": any  };
    
    /** Collection Property OpenGLView.GestureRecognizers of Type System.Collections.Generic.IList`1[Xamarin.Forms.IGestureRecognizer] */
    GestureRecognizers?(v: any): { "Xamarin.Forms.OpenGLView:GestureRecognizers;Xamarin.Forms.Core": any  };
    
    /** Collection Property OpenGLView.Resources of Type Xamarin.Forms.ResourceDictionary */
    Resources?(v: any): { "Xamarin.Forms.OpenGLView:Resources;Xamarin.Forms.Core": any  };
    
    /** Collection Property OpenGLView.StyleClass of Type System.Collections.Generic.IList`1[System.String] */
    StyleClass?(v: any): { "Xamarin.Forms.OpenGLView:StyleClass;Xamarin.Forms.Core": any  };
    
    /** Collection Property OpenGLView.Triggers of Type System.Collections.Generic.IList`1[Xamarin.Forms.TriggerBase] */
    Triggers?(v: any): { "Xamarin.Forms.OpenGLView:Triggers;Xamarin.Forms.Core": any  }
    }
    
    /** OpenGLView */
    export const OpenGLView: IOpenGLViewConstructor = XNode.prepare<IOpenGLView>("Xamarin.Forms.OpenGLView;Xamarin.Forms.Core");
    
    
    OpenGLView.Behaviors = (v) => ({ "Xamarin.Forms.OpenGLView:Behaviors;Xamarin.Forms.Core": v  }) ;
    
    OpenGLView.Effects = (v) => ({ "Xamarin.Forms.OpenGLView:Effects;Xamarin.Forms.Core": v  }) ;
    
    OpenGLView.GestureRecognizers = (v) => ({ "Xamarin.Forms.OpenGLView:GestureRecognizers;Xamarin.Forms.Core": v  }) ;
    
    OpenGLView.Resources = (v) => ({ "Xamarin.Forms.OpenGLView:Resources;Xamarin.Forms.Core": v  }) ;
    
    OpenGLView.StyleClass = (v) => ({ "Xamarin.Forms.OpenGLView:StyleClass;Xamarin.Forms.Core": v  }) ;
    
    OpenGLView.Triggers = (v) => ({ "Xamarin.Forms.OpenGLView:Triggers;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property Page.Behaviors of Type System.Collections.Generic.IList`1[Xamarin.Forms.Behavior] */
    Behaviors?(v: any): { "Xamarin.Forms.Page:Behaviors;Xamarin.Forms.Core": any  };
    
    /** Collection Property Page.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.Page:Effects;Xamarin.Forms.Core": any  };
    
    /** Collection Property Page.Resources of Type Xamarin.Forms.ResourceDictionary */
    Resources?(v: any): { "Xamarin.Forms.Page:Resources;Xamarin.Forms.Core": any  };
    
    /** Collection Property Page.StyleClass of Type System.Collections.Generic.IList`1[System.String] */
    StyleClass?(v: any): { "Xamarin.Forms.Page:StyleClass;Xamarin.Forms.Core": any  };
    
    /** Collection Property Page.ToolbarItems of Type System.Collections.Generic.IList`1[Xamarin.Forms.ToolbarItem] */
    ToolbarItems?(v: any): { "Xamarin.Forms.Page:ToolbarItems;Xamarin.Forms.Core": any  };
    
    /** Collection Property Page.Triggers of Type System.Collections.Generic.IList`1[Xamarin.Forms.TriggerBase] */
    Triggers?(v: any): { "Xamarin.Forms.Page:Triggers;Xamarin.Forms.Core": any  }
    }
    
    /** Page */
    export const Page: IPageConstructor = XNode.prepare<IPage>("Xamarin.Forms.Page;Xamarin.Forms.Core");
    
    
    Page.Behaviors = (v) => ({ "Xamarin.Forms.Page:Behaviors;Xamarin.Forms.Core": v  }) ;
    
    Page.Effects = (v) => ({ "Xamarin.Forms.Page:Effects;Xamarin.Forms.Core": v  }) ;
    
    Page.Resources = (v) => ({ "Xamarin.Forms.Page:Resources;Xamarin.Forms.Core": v  }) ;
    
    Page.StyleClass = (v) => ({ "Xamarin.Forms.Page:StyleClass;Xamarin.Forms.Core": v  }) ;
    
    Page.ToolbarItems = (v) => ({ "Xamarin.Forms.Page:ToolbarItems;Xamarin.Forms.Core": v  }) ;
    
    Page.Triggers = (v) => ({ "Xamarin.Forms.Page:Triggers;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property PanGestureRecognizer.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.PanGestureRecognizer:Effects;Xamarin.Forms.Core": any  }
    }
    
    /** PanGestureRecognizer */
    export const PanGestureRecognizer: IPanGestureRecognizerConstructor = XNode.prepare<IPanGestureRecognizer>("Xamarin.Forms.PanGestureRecognizer;Xamarin.Forms.Core");
    
    
    PanGestureRecognizer.Effects = (v) => ({ "Xamarin.Forms.PanGestureRecognizer:Effects;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property Picker.Behaviors of Type System.Collections.Generic.IList`1[Xamarin.Forms.Behavior] */
    Behaviors?(v: any): { "Xamarin.Forms.Picker:Behaviors;Xamarin.Forms.Core": any  };
    
    /** Collection Property Picker.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.Picker:Effects;Xamarin.Forms.Core": any  };
    
    /** Collection Property Picker.GestureRecognizers of Type System.Collections.Generic.IList`1[Xamarin.Forms.IGestureRecognizer] */
    GestureRecognizers?(v: any): { "Xamarin.Forms.Picker:GestureRecognizers;Xamarin.Forms.Core": any  };
    
    /** Collection Property Picker.Items of Type System.Collections.Generic.IList`1[System.String] */
    Items?(v: any): { "Xamarin.Forms.Picker:Items;Xamarin.Forms.Core": any  };
    
    /** Collection Property Picker.Resources of Type Xamarin.Forms.ResourceDictionary */
    Resources?(v: any): { "Xamarin.Forms.Picker:Resources;Xamarin.Forms.Core": any  };
    
    /** Collection Property Picker.StyleClass of Type System.Collections.Generic.IList`1[System.String] */
    StyleClass?(v: any): { "Xamarin.Forms.Picker:StyleClass;Xamarin.Forms.Core": any  };
    
    /** Collection Property Picker.Triggers of Type System.Collections.Generic.IList`1[Xamarin.Forms.TriggerBase] */
    Triggers?(v: any): { "Xamarin.Forms.Picker:Triggers;Xamarin.Forms.Core": any  }
    }
    
    /** Picker */
    export const Picker: IPickerConstructor = XNode.prepare<IPicker>("Xamarin.Forms.Picker;Xamarin.Forms.Core");
    
    
    Picker.Behaviors = (v) => ({ "Xamarin.Forms.Picker:Behaviors;Xamarin.Forms.Core": v  }) ;
    
    Picker.Effects = (v) => ({ "Xamarin.Forms.Picker:Effects;Xamarin.Forms.Core": v  }) ;
    
    Picker.GestureRecognizers = (v) => ({ "Xamarin.Forms.Picker:GestureRecognizers;Xamarin.Forms.Core": v  }) ;
    
    Picker.Items = (v) => ({ "Xamarin.Forms.Picker:Items;Xamarin.Forms.Core": v  }) ;
    
    Picker.Resources = (v) => ({ "Xamarin.Forms.Picker:Resources;Xamarin.Forms.Core": v  }) ;
    
    Picker.StyleClass = (v) => ({ "Xamarin.Forms.Picker:StyleClass;Xamarin.Forms.Core": v  }) ;
    
    Picker.Triggers = (v) => ({ "Xamarin.Forms.Picker:Triggers;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property PinchGestureRecognizer.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.PinchGestureRecognizer:Effects;Xamarin.Forms.Core": any  }
    }
    
    /** PinchGestureRecognizer */
    export const PinchGestureRecognizer: IPinchGestureRecognizerConstructor = XNode.prepare<IPinchGestureRecognizer>("Xamarin.Forms.PinchGestureRecognizer;Xamarin.Forms.Core");
    
    
    PinchGestureRecognizer.Effects = (v) => ({ "Xamarin.Forms.PinchGestureRecognizer:Effects;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property ProgressBar.Behaviors of Type System.Collections.Generic.IList`1[Xamarin.Forms.Behavior] */
    Behaviors?(v: any): { "Xamarin.Forms.ProgressBar:Behaviors;Xamarin.Forms.Core": any  };
    
    /** Collection Property ProgressBar.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.ProgressBar:Effects;Xamarin.Forms.Core": any  };
    
    /** Collection Property ProgressBar.GestureRecognizers of Type System.Collections.Generic.IList`1[Xamarin.Forms.IGestureRecognizer] */
    GestureRecognizers?(v: any): { "Xamarin.Forms.ProgressBar:GestureRecognizers;Xamarin.Forms.Core": any  };
    
    /** Collection Property ProgressBar.Resources of Type Xamarin.Forms.ResourceDictionary */
    Resources?(v: any): { "Xamarin.Forms.ProgressBar:Resources;Xamarin.Forms.Core": any  };
    
    /** Collection Property ProgressBar.StyleClass of Type System.Collections.Generic.IList`1[System.String] */
    StyleClass?(v: any): { "Xamarin.Forms.ProgressBar:StyleClass;Xamarin.Forms.Core": any  };
    
    /** Collection Property ProgressBar.Triggers of Type System.Collections.Generic.IList`1[Xamarin.Forms.TriggerBase] */
    Triggers?(v: any): { "Xamarin.Forms.ProgressBar:Triggers;Xamarin.Forms.Core": any  }
    }
    
    /** ProgressBar */
    export const ProgressBar: IProgressBarConstructor = XNode.prepare<IProgressBar>("Xamarin.Forms.ProgressBar;Xamarin.Forms.Core");
    
    
    ProgressBar.Behaviors = (v) => ({ "Xamarin.Forms.ProgressBar:Behaviors;Xamarin.Forms.Core": v  }) ;
    
    ProgressBar.Effects = (v) => ({ "Xamarin.Forms.ProgressBar:Effects;Xamarin.Forms.Core": v  }) ;
    
    ProgressBar.GestureRecognizers = (v) => ({ "Xamarin.Forms.ProgressBar:GestureRecognizers;Xamarin.Forms.Core": v  }) ;
    
    ProgressBar.Resources = (v) => ({ "Xamarin.Forms.ProgressBar:Resources;Xamarin.Forms.Core": v  }) ;
    
    ProgressBar.StyleClass = (v) => ({ "Xamarin.Forms.ProgressBar:StyleClass;Xamarin.Forms.Core": v  }) ;
    
    ProgressBar.Triggers = (v) => ({ "Xamarin.Forms.ProgressBar:Triggers;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property RefreshView.Behaviors of Type System.Collections.Generic.IList`1[Xamarin.Forms.Behavior] */
    Behaviors?(v: any): { "Xamarin.Forms.RefreshView:Behaviors;Xamarin.Forms.Core": any  };
    
    /** Collection Property RefreshView.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.RefreshView:Effects;Xamarin.Forms.Core": any  };
    
    /** Collection Property RefreshView.GestureRecognizers of Type System.Collections.Generic.IList`1[Xamarin.Forms.IGestureRecognizer] */
    GestureRecognizers?(v: any): { "Xamarin.Forms.RefreshView:GestureRecognizers;Xamarin.Forms.Core": any  };
    
    /** Collection Property RefreshView.Resources of Type Xamarin.Forms.ResourceDictionary */
    Resources?(v: any): { "Xamarin.Forms.RefreshView:Resources;Xamarin.Forms.Core": any  };
    
    /** Collection Property RefreshView.StyleClass of Type System.Collections.Generic.IList`1[System.String] */
    StyleClass?(v: any): { "Xamarin.Forms.RefreshView:StyleClass;Xamarin.Forms.Core": any  };
    
    /** Collection Property RefreshView.Triggers of Type System.Collections.Generic.IList`1[Xamarin.Forms.TriggerBase] */
    Triggers?(v: any): { "Xamarin.Forms.RefreshView:Triggers;Xamarin.Forms.Core": any  }
    }
    
    /** RefreshView */
    export const RefreshView: IRefreshViewConstructor = XNode.prepare<IRefreshView>("Xamarin.Forms.RefreshView;Xamarin.Forms.Core");
    
    
    RefreshView.Behaviors = (v) => ({ "Xamarin.Forms.RefreshView:Behaviors;Xamarin.Forms.Core": v  }) ;
    
    RefreshView.Effects = (v) => ({ "Xamarin.Forms.RefreshView:Effects;Xamarin.Forms.Core": v  }) ;
    
    RefreshView.GestureRecognizers = (v) => ({ "Xamarin.Forms.RefreshView:GestureRecognizers;Xamarin.Forms.Core": v  }) ;
    
    RefreshView.Resources = (v) => ({ "Xamarin.Forms.RefreshView:Resources;Xamarin.Forms.Core": v  }) ;
    
    RefreshView.StyleClass = (v) => ({ "Xamarin.Forms.RefreshView:StyleClass;Xamarin.Forms.Core": v  }) ;
    
    RefreshView.Triggers = (v) => ({ "Xamarin.Forms.RefreshView:Triggers;Xamarin.Forms.Core": v  }) ;
    
    
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
        
    /** Collection Property RelativeLayout.Behaviors of Type System.Collections.Generic.IList`1[Xamarin.Forms.Behavior] */
    Behaviors?(v: any): { "Xamarin.Forms.RelativeLayout:Behaviors;Xamarin.Forms.Core": any  };
    
    /** Collection Property RelativeLayout.Children of Type Xamarin.Forms.RelativeLayout+IRelativeList`1[Xamarin.Forms.View] */
    Children?(v: any): { "Xamarin.Forms.RelativeLayout:Children;Xamarin.Forms.Core": any  };
    
    /** Collection Property RelativeLayout.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.RelativeLayout:Effects;Xamarin.Forms.Core": any  };
    
    /** Collection Property RelativeLayout.GestureRecognizers of Type System.Collections.Generic.IList`1[Xamarin.Forms.IGestureRecognizer] */
    GestureRecognizers?(v: any): { "Xamarin.Forms.RelativeLayout:GestureRecognizers;Xamarin.Forms.Core": any  };
    
    /** Collection Property RelativeLayout.Resources of Type Xamarin.Forms.ResourceDictionary */
    Resources?(v: any): { "Xamarin.Forms.RelativeLayout:Resources;Xamarin.Forms.Core": any  };
    
    /** Collection Property RelativeLayout.StyleClass of Type System.Collections.Generic.IList`1[System.String] */
    StyleClass?(v: any): { "Xamarin.Forms.RelativeLayout:StyleClass;Xamarin.Forms.Core": any  };
    
    /** Collection Property RelativeLayout.Triggers of Type System.Collections.Generic.IList`1[Xamarin.Forms.TriggerBase] */
    Triggers?(v: any): { "Xamarin.Forms.RelativeLayout:Triggers;Xamarin.Forms.Core": any  }
    }
    
    /** RelativeLayout */
    export const RelativeLayout: IRelativeLayoutConstructor = XNode.prepare<IRelativeLayout>("Xamarin.Forms.RelativeLayout;Xamarin.Forms.Core");
    
    RelativeLayout.XConstraint = (v) => ({ "Xamarin.Forms.RelativeLayout:XConstraint;Xamarin.Forms.Core": v  }) ;
    
    RelativeLayout.YConstraint = (v) => ({ "Xamarin.Forms.RelativeLayout:YConstraint;Xamarin.Forms.Core": v  }) ;
    
    RelativeLayout.WidthConstraint = (v) => ({ "Xamarin.Forms.RelativeLayout:WidthConstraint;Xamarin.Forms.Core": v  }) ;
    
    RelativeLayout.HeightConstraint = (v) => ({ "Xamarin.Forms.RelativeLayout:HeightConstraint;Xamarin.Forms.Core": v  }) ;
    
    RelativeLayout.BoundsConstraint = (v) => ({ "Xamarin.Forms.RelativeLayout:BoundsConstraint;Xamarin.Forms.Core": v  }) ;
    
    RelativeLayout.Behaviors = (v) => ({ "Xamarin.Forms.RelativeLayout:Behaviors;Xamarin.Forms.Core": v  }) ;
    
    RelativeLayout.Children = (v) => ({ "Xamarin.Forms.RelativeLayout:Children;Xamarin.Forms.Core": v  }) ;
    
    RelativeLayout.Effects = (v) => ({ "Xamarin.Forms.RelativeLayout:Effects;Xamarin.Forms.Core": v  }) ;
    
    RelativeLayout.GestureRecognizers = (v) => ({ "Xamarin.Forms.RelativeLayout:GestureRecognizers;Xamarin.Forms.Core": v  }) ;
    
    RelativeLayout.Resources = (v) => ({ "Xamarin.Forms.RelativeLayout:Resources;Xamarin.Forms.Core": v  }) ;
    
    RelativeLayout.StyleClass = (v) => ({ "Xamarin.Forms.RelativeLayout:StyleClass;Xamarin.Forms.Core": v  }) ;
    
    RelativeLayout.Triggers = (v) => ({ "Xamarin.Forms.RelativeLayout:Triggers;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property ScrollView.Behaviors of Type System.Collections.Generic.IList`1[Xamarin.Forms.Behavior] */
    Behaviors?(v: any): { "Xamarin.Forms.ScrollView:Behaviors;Xamarin.Forms.Core": any  };
    
    /** Collection Property ScrollView.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.ScrollView:Effects;Xamarin.Forms.Core": any  };
    
    /** Collection Property ScrollView.GestureRecognizers of Type System.Collections.Generic.IList`1[Xamarin.Forms.IGestureRecognizer] */
    GestureRecognizers?(v: any): { "Xamarin.Forms.ScrollView:GestureRecognizers;Xamarin.Forms.Core": any  };
    
    /** Collection Property ScrollView.Resources of Type Xamarin.Forms.ResourceDictionary */
    Resources?(v: any): { "Xamarin.Forms.ScrollView:Resources;Xamarin.Forms.Core": any  };
    
    /** Collection Property ScrollView.StyleClass of Type System.Collections.Generic.IList`1[System.String] */
    StyleClass?(v: any): { "Xamarin.Forms.ScrollView:StyleClass;Xamarin.Forms.Core": any  };
    
    /** Collection Property ScrollView.Triggers of Type System.Collections.Generic.IList`1[Xamarin.Forms.TriggerBase] */
    Triggers?(v: any): { "Xamarin.Forms.ScrollView:Triggers;Xamarin.Forms.Core": any  }
    }
    
    /** ScrollView */
    export const ScrollView: IScrollViewConstructor = XNode.prepare<IScrollView>("Xamarin.Forms.ScrollView;Xamarin.Forms.Core");
    
    
    ScrollView.Behaviors = (v) => ({ "Xamarin.Forms.ScrollView:Behaviors;Xamarin.Forms.Core": v  }) ;
    
    ScrollView.Effects = (v) => ({ "Xamarin.Forms.ScrollView:Effects;Xamarin.Forms.Core": v  }) ;
    
    ScrollView.GestureRecognizers = (v) => ({ "Xamarin.Forms.ScrollView:GestureRecognizers;Xamarin.Forms.Core": v  }) ;
    
    ScrollView.Resources = (v) => ({ "Xamarin.Forms.ScrollView:Resources;Xamarin.Forms.Core": v  }) ;
    
    ScrollView.StyleClass = (v) => ({ "Xamarin.Forms.ScrollView:StyleClass;Xamarin.Forms.Core": v  }) ;
    
    ScrollView.Triggers = (v) => ({ "Xamarin.Forms.ScrollView:Triggers;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property SearchBar.Behaviors of Type System.Collections.Generic.IList`1[Xamarin.Forms.Behavior] */
    Behaviors?(v: any): { "Xamarin.Forms.SearchBar:Behaviors;Xamarin.Forms.Core": any  };
    
    /** Collection Property SearchBar.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.SearchBar:Effects;Xamarin.Forms.Core": any  };
    
    /** Collection Property SearchBar.GestureRecognizers of Type System.Collections.Generic.IList`1[Xamarin.Forms.IGestureRecognizer] */
    GestureRecognizers?(v: any): { "Xamarin.Forms.SearchBar:GestureRecognizers;Xamarin.Forms.Core": any  };
    
    /** Collection Property SearchBar.Resources of Type Xamarin.Forms.ResourceDictionary */
    Resources?(v: any): { "Xamarin.Forms.SearchBar:Resources;Xamarin.Forms.Core": any  };
    
    /** Collection Property SearchBar.StyleClass of Type System.Collections.Generic.IList`1[System.String] */
    StyleClass?(v: any): { "Xamarin.Forms.SearchBar:StyleClass;Xamarin.Forms.Core": any  };
    
    /** Collection Property SearchBar.Triggers of Type System.Collections.Generic.IList`1[Xamarin.Forms.TriggerBase] */
    Triggers?(v: any): { "Xamarin.Forms.SearchBar:Triggers;Xamarin.Forms.Core": any  }
    }
    
    /** SearchBar */
    export const SearchBar: ISearchBarConstructor = XNode.prepare<ISearchBar>("Xamarin.Forms.SearchBar;Xamarin.Forms.Core");
    
    
    SearchBar.Behaviors = (v) => ({ "Xamarin.Forms.SearchBar:Behaviors;Xamarin.Forms.Core": v  }) ;
    
    SearchBar.Effects = (v) => ({ "Xamarin.Forms.SearchBar:Effects;Xamarin.Forms.Core": v  }) ;
    
    SearchBar.GestureRecognizers = (v) => ({ "Xamarin.Forms.SearchBar:GestureRecognizers;Xamarin.Forms.Core": v  }) ;
    
    SearchBar.Resources = (v) => ({ "Xamarin.Forms.SearchBar:Resources;Xamarin.Forms.Core": v  }) ;
    
    SearchBar.StyleClass = (v) => ({ "Xamarin.Forms.SearchBar:StyleClass;Xamarin.Forms.Core": v  }) ;
    
    SearchBar.Triggers = (v) => ({ "Xamarin.Forms.SearchBar:Triggers;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property BaseShellItem.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.BaseShellItem:Effects;Xamarin.Forms.Core": any  };
    
    /** Collection Property BaseShellItem.StyleClass of Type System.Collections.Generic.IList`1[System.String] */
    StyleClass?(v: any): { "Xamarin.Forms.BaseShellItem:StyleClass;Xamarin.Forms.Core": any  }
    }
    
    /** BaseShellItem */
    export const BaseShellItem: IBaseShellItemConstructor = XNode.prepare<IBaseShellItem>("Xamarin.Forms.BaseShellItem;Xamarin.Forms.Core");
    
    
    BaseShellItem.Effects = (v) => ({ "Xamarin.Forms.BaseShellItem:Effects;Xamarin.Forms.Core": v  }) ;
    
    BaseShellItem.StyleClass = (v) => ({ "Xamarin.Forms.BaseShellItem:StyleClass;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property NavigableElement.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.NavigableElement:Effects;Xamarin.Forms.Core": any  };
    
    /** Collection Property NavigableElement.StyleClass of Type System.Collections.Generic.IList`1[System.String] */
    StyleClass?(v: any): { "Xamarin.Forms.NavigableElement:StyleClass;Xamarin.Forms.Core": any  }
    }
    
    /** NavigableElement */
    export const NavigableElement: INavigableElementConstructor = XNode.prepare<INavigableElement>("Xamarin.Forms.NavigableElement;Xamarin.Forms.Core");
    
    
    NavigableElement.Effects = (v) => ({ "Xamarin.Forms.NavigableElement:Effects;Xamarin.Forms.Core": v  }) ;
    
    NavigableElement.StyleClass = (v) => ({ "Xamarin.Forms.NavigableElement:StyleClass;Xamarin.Forms.Core": v  }) ;
    
    
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
        
    /** Collection Property Shell.Behaviors of Type System.Collections.Generic.IList`1[Xamarin.Forms.Behavior] */
    Behaviors?(v: any): { "Xamarin.Forms.Shell:Behaviors;Xamarin.Forms.Core": any  };
    
    /** Collection Property Shell.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.Shell:Effects;Xamarin.Forms.Core": any  };
    
    /** Collection Property Shell.Items of Type System.Collections.Generic.IList`1[Xamarin.Forms.ShellItem] */
    Items?(v: any): { "Xamarin.Forms.Shell:Items;Xamarin.Forms.Core": any  };
    
    /** Collection Property Shell.Resources of Type Xamarin.Forms.ResourceDictionary */
    Resources?(v: any): { "Xamarin.Forms.Shell:Resources;Xamarin.Forms.Core": any  };
    
    /** Collection Property Shell.StyleClass of Type System.Collections.Generic.IList`1[System.String] */
    StyleClass?(v: any): { "Xamarin.Forms.Shell:StyleClass;Xamarin.Forms.Core": any  };
    
    /** Collection Property Shell.ToolbarItems of Type System.Collections.Generic.IList`1[Xamarin.Forms.ToolbarItem] */
    ToolbarItems?(v: any): { "Xamarin.Forms.Shell:ToolbarItems;Xamarin.Forms.Core": any  };
    
    /** Collection Property Shell.Triggers of Type System.Collections.Generic.IList`1[Xamarin.Forms.TriggerBase] */
    Triggers?(v: any): { "Xamarin.Forms.Shell:Triggers;Xamarin.Forms.Core": any  }
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
    
    Shell.Behaviors = (v) => ({ "Xamarin.Forms.Shell:Behaviors;Xamarin.Forms.Core": v  }) ;
    
    Shell.Effects = (v) => ({ "Xamarin.Forms.Shell:Effects;Xamarin.Forms.Core": v  }) ;
    
    Shell.Items = (v) => ({ "Xamarin.Forms.Shell:Items;Xamarin.Forms.Core": v  }) ;
    
    Shell.Resources = (v) => ({ "Xamarin.Forms.Shell:Resources;Xamarin.Forms.Core": v  }) ;
    
    Shell.StyleClass = (v) => ({ "Xamarin.Forms.Shell:StyleClass;Xamarin.Forms.Core": v  }) ;
    
    Shell.ToolbarItems = (v) => ({ "Xamarin.Forms.Shell:ToolbarItems;Xamarin.Forms.Core": v  }) ;
    
    Shell.Triggers = (v) => ({ "Xamarin.Forms.Shell:Triggers;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property ShellContent.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.ShellContent:Effects;Xamarin.Forms.Core": any  };
    
    /** Collection Property ShellContent.MenuItems of Type Xamarin.Forms.MenuItemCollection */
    MenuItems?(v: any): { "Xamarin.Forms.ShellContent:MenuItems;Xamarin.Forms.Core": any  };
    
    /** Collection Property ShellContent.StyleClass of Type System.Collections.Generic.IList`1[System.String] */
    StyleClass?(v: any): { "Xamarin.Forms.ShellContent:StyleClass;Xamarin.Forms.Core": any  }
    }
    
    /** ShellContent */
    export const ShellContent: IShellContentConstructor = XNode.prepare<IShellContent>("Xamarin.Forms.ShellContent;Xamarin.Forms.Core");
    
    
    ShellContent.Effects = (v) => ({ "Xamarin.Forms.ShellContent:Effects;Xamarin.Forms.Core": v  }) ;
    
    ShellContent.MenuItems = (v) => ({ "Xamarin.Forms.ShellContent:MenuItems;Xamarin.Forms.Core": v  }) ;
    
    ShellContent.StyleClass = (v) => ({ "Xamarin.Forms.ShellContent:StyleClass;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property ShellGroupItem.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.ShellGroupItem:Effects;Xamarin.Forms.Core": any  };
    
    /** Collection Property ShellGroupItem.StyleClass of Type System.Collections.Generic.IList`1[System.String] */
    StyleClass?(v: any): { "Xamarin.Forms.ShellGroupItem:StyleClass;Xamarin.Forms.Core": any  }
    }
    
    /** ShellGroupItem */
    export const ShellGroupItem: IShellGroupItemConstructor = XNode.prepare<IShellGroupItem>("Xamarin.Forms.ShellGroupItem;Xamarin.Forms.Core");
    
    
    ShellGroupItem.Effects = (v) => ({ "Xamarin.Forms.ShellGroupItem:Effects;Xamarin.Forms.Core": v  }) ;
    
    ShellGroupItem.StyleClass = (v) => ({ "Xamarin.Forms.ShellGroupItem:StyleClass;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property FlyoutItem.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.FlyoutItem:Effects;Xamarin.Forms.Core": any  };
    
    /** Collection Property FlyoutItem.Items of Type System.Collections.Generic.IList`1[Xamarin.Forms.ShellSection] */
    Items?(v: any): { "Xamarin.Forms.FlyoutItem:Items;Xamarin.Forms.Core": any  };
    
    /** Collection Property FlyoutItem.StyleClass of Type System.Collections.Generic.IList`1[System.String] */
    StyleClass?(v: any): { "Xamarin.Forms.FlyoutItem:StyleClass;Xamarin.Forms.Core": any  }
    }
    
    /** FlyoutItem */
    export const FlyoutItem: IFlyoutItemConstructor = XNode.prepare<IFlyoutItem>("Xamarin.Forms.FlyoutItem;Xamarin.Forms.Core");
    
    
    FlyoutItem.Effects = (v) => ({ "Xamarin.Forms.FlyoutItem:Effects;Xamarin.Forms.Core": v  }) ;
    
    FlyoutItem.Items = (v) => ({ "Xamarin.Forms.FlyoutItem:Items;Xamarin.Forms.Core": v  }) ;
    
    FlyoutItem.StyleClass = (v) => ({ "Xamarin.Forms.FlyoutItem:StyleClass;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property TabBar.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.TabBar:Effects;Xamarin.Forms.Core": any  };
    
    /** Collection Property TabBar.Items of Type System.Collections.Generic.IList`1[Xamarin.Forms.ShellSection] */
    Items?(v: any): { "Xamarin.Forms.TabBar:Items;Xamarin.Forms.Core": any  };
    
    /** Collection Property TabBar.StyleClass of Type System.Collections.Generic.IList`1[System.String] */
    StyleClass?(v: any): { "Xamarin.Forms.TabBar:StyleClass;Xamarin.Forms.Core": any  }
    }
    
    /** TabBar */
    export const TabBar: ITabBarConstructor = XNode.prepare<ITabBar>("Xamarin.Forms.TabBar;Xamarin.Forms.Core");
    
    
    TabBar.Effects = (v) => ({ "Xamarin.Forms.TabBar:Effects;Xamarin.Forms.Core": v  }) ;
    
    TabBar.Items = (v) => ({ "Xamarin.Forms.TabBar:Items;Xamarin.Forms.Core": v  }) ;
    
    TabBar.StyleClass = (v) => ({ "Xamarin.Forms.TabBar:StyleClass;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property ShellItem.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.ShellItem:Effects;Xamarin.Forms.Core": any  };
    
    /** Collection Property ShellItem.Items of Type System.Collections.Generic.IList`1[Xamarin.Forms.ShellSection] */
    Items?(v: any): { "Xamarin.Forms.ShellItem:Items;Xamarin.Forms.Core": any  };
    
    /** Collection Property ShellItem.StyleClass of Type System.Collections.Generic.IList`1[System.String] */
    StyleClass?(v: any): { "Xamarin.Forms.ShellItem:StyleClass;Xamarin.Forms.Core": any  }
    }
    
    /** ShellItem */
    export const ShellItem: IShellItemConstructor = XNode.prepare<IShellItem>("Xamarin.Forms.ShellItem;Xamarin.Forms.Core");
    
    
    ShellItem.Effects = (v) => ({ "Xamarin.Forms.ShellItem:Effects;Xamarin.Forms.Core": v  }) ;
    
    ShellItem.Items = (v) => ({ "Xamarin.Forms.ShellItem:Items;Xamarin.Forms.Core": v  }) ;
    
    ShellItem.StyleClass = (v) => ({ "Xamarin.Forms.ShellItem:StyleClass;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property Tab.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.Tab:Effects;Xamarin.Forms.Core": any  };
    
    /** Collection Property Tab.Items of Type System.Collections.Generic.IList`1[Xamarin.Forms.ShellContent] */
    Items?(v: any): { "Xamarin.Forms.Tab:Items;Xamarin.Forms.Core": any  };
    
    /** Collection Property Tab.StyleClass of Type System.Collections.Generic.IList`1[System.String] */
    StyleClass?(v: any): { "Xamarin.Forms.Tab:StyleClass;Xamarin.Forms.Core": any  }
    }
    
    /** Tab */
    export const Tab: ITabConstructor = XNode.prepare<ITab>("Xamarin.Forms.Tab;Xamarin.Forms.Core");
    
    
    Tab.Effects = (v) => ({ "Xamarin.Forms.Tab:Effects;Xamarin.Forms.Core": v  }) ;
    
    Tab.Items = (v) => ({ "Xamarin.Forms.Tab:Items;Xamarin.Forms.Core": v  }) ;
    
    Tab.StyleClass = (v) => ({ "Xamarin.Forms.Tab:StyleClass;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property ShellSection.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.ShellSection:Effects;Xamarin.Forms.Core": any  };
    
    /** Collection Property ShellSection.Items of Type System.Collections.Generic.IList`1[Xamarin.Forms.ShellContent] */
    Items?(v: any): { "Xamarin.Forms.ShellSection:Items;Xamarin.Forms.Core": any  };
    
    /** Collection Property ShellSection.StyleClass of Type System.Collections.Generic.IList`1[System.String] */
    StyleClass?(v: any): { "Xamarin.Forms.ShellSection:StyleClass;Xamarin.Forms.Core": any  }
    }
    
    /** ShellSection */
    export const ShellSection: IShellSectionConstructor = XNode.prepare<IShellSection>("Xamarin.Forms.ShellSection;Xamarin.Forms.Core");
    
    
    ShellSection.Effects = (v) => ({ "Xamarin.Forms.ShellSection:Effects;Xamarin.Forms.Core": v  }) ;
    
    ShellSection.Items = (v) => ({ "Xamarin.Forms.ShellSection:Items;Xamarin.Forms.Core": v  }) ;
    
    ShellSection.StyleClass = (v) => ({ "Xamarin.Forms.ShellSection:StyleClass;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property Slider.Behaviors of Type System.Collections.Generic.IList`1[Xamarin.Forms.Behavior] */
    Behaviors?(v: any): { "Xamarin.Forms.Slider:Behaviors;Xamarin.Forms.Core": any  };
    
    /** Collection Property Slider.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.Slider:Effects;Xamarin.Forms.Core": any  };
    
    /** Collection Property Slider.GestureRecognizers of Type System.Collections.Generic.IList`1[Xamarin.Forms.IGestureRecognizer] */
    GestureRecognizers?(v: any): { "Xamarin.Forms.Slider:GestureRecognizers;Xamarin.Forms.Core": any  };
    
    /** Collection Property Slider.Resources of Type Xamarin.Forms.ResourceDictionary */
    Resources?(v: any): { "Xamarin.Forms.Slider:Resources;Xamarin.Forms.Core": any  };
    
    /** Collection Property Slider.StyleClass of Type System.Collections.Generic.IList`1[System.String] */
    StyleClass?(v: any): { "Xamarin.Forms.Slider:StyleClass;Xamarin.Forms.Core": any  };
    
    /** Collection Property Slider.Triggers of Type System.Collections.Generic.IList`1[Xamarin.Forms.TriggerBase] */
    Triggers?(v: any): { "Xamarin.Forms.Slider:Triggers;Xamarin.Forms.Core": any  }
    }
    
    /** Slider */
    export const Slider: ISliderConstructor = XNode.prepare<ISlider>("Xamarin.Forms.Slider;Xamarin.Forms.Core");
    
    
    Slider.Behaviors = (v) => ({ "Xamarin.Forms.Slider:Behaviors;Xamarin.Forms.Core": v  }) ;
    
    Slider.Effects = (v) => ({ "Xamarin.Forms.Slider:Effects;Xamarin.Forms.Core": v  }) ;
    
    Slider.GestureRecognizers = (v) => ({ "Xamarin.Forms.Slider:GestureRecognizers;Xamarin.Forms.Core": v  }) ;
    
    Slider.Resources = (v) => ({ "Xamarin.Forms.Slider:Resources;Xamarin.Forms.Core": v  }) ;
    
    Slider.StyleClass = (v) => ({ "Xamarin.Forms.Slider:StyleClass;Xamarin.Forms.Core": v  }) ;
    
    Slider.Triggers = (v) => ({ "Xamarin.Forms.Slider:Triggers;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property Span.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.Span:Effects;Xamarin.Forms.Core": any  };
    
    /** Collection Property Span.GestureRecognizers of Type System.Collections.Generic.IList`1[Xamarin.Forms.IGestureRecognizer] */
    GestureRecognizers?(v: any): { "Xamarin.Forms.Span:GestureRecognizers;Xamarin.Forms.Core": any  }
    }
    
    /** Span */
    export const Span: ISpanConstructor = XNode.prepare<ISpan>("Xamarin.Forms.Span;Xamarin.Forms.Core");
    
    
    Span.Effects = (v) => ({ "Xamarin.Forms.Span:Effects;Xamarin.Forms.Core": v  }) ;
    
    Span.GestureRecognizers = (v) => ({ "Xamarin.Forms.Span:GestureRecognizers;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property StackLayout.Behaviors of Type System.Collections.Generic.IList`1[Xamarin.Forms.Behavior] */
    Behaviors?(v: any): { "Xamarin.Forms.StackLayout:Behaviors;Xamarin.Forms.Core": any  };
    
    /** Collection Property StackLayout.Children of Type System.Collections.Generic.IList`1[Xamarin.Forms.View] */
    Children?(v: any): { "Xamarin.Forms.StackLayout:Children;Xamarin.Forms.Core": any  };
    
    /** Collection Property StackLayout.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.StackLayout:Effects;Xamarin.Forms.Core": any  };
    
    /** Collection Property StackLayout.GestureRecognizers of Type System.Collections.Generic.IList`1[Xamarin.Forms.IGestureRecognizer] */
    GestureRecognizers?(v: any): { "Xamarin.Forms.StackLayout:GestureRecognizers;Xamarin.Forms.Core": any  };
    
    /** Collection Property StackLayout.Resources of Type Xamarin.Forms.ResourceDictionary */
    Resources?(v: any): { "Xamarin.Forms.StackLayout:Resources;Xamarin.Forms.Core": any  };
    
    /** Collection Property StackLayout.StyleClass of Type System.Collections.Generic.IList`1[System.String] */
    StyleClass?(v: any): { "Xamarin.Forms.StackLayout:StyleClass;Xamarin.Forms.Core": any  };
    
    /** Collection Property StackLayout.Triggers of Type System.Collections.Generic.IList`1[Xamarin.Forms.TriggerBase] */
    Triggers?(v: any): { "Xamarin.Forms.StackLayout:Triggers;Xamarin.Forms.Core": any  }
    }
    
    /** StackLayout */
    export const StackLayout: IStackLayoutConstructor = XNode.prepare<IStackLayout>("Xamarin.Forms.StackLayout;Xamarin.Forms.Core");
    
    
    StackLayout.Behaviors = (v) => ({ "Xamarin.Forms.StackLayout:Behaviors;Xamarin.Forms.Core": v  }) ;
    
    StackLayout.Children = (v) => ({ "Xamarin.Forms.StackLayout:Children;Xamarin.Forms.Core": v  }) ;
    
    StackLayout.Effects = (v) => ({ "Xamarin.Forms.StackLayout:Effects;Xamarin.Forms.Core": v  }) ;
    
    StackLayout.GestureRecognizers = (v) => ({ "Xamarin.Forms.StackLayout:GestureRecognizers;Xamarin.Forms.Core": v  }) ;
    
    StackLayout.Resources = (v) => ({ "Xamarin.Forms.StackLayout:Resources;Xamarin.Forms.Core": v  }) ;
    
    StackLayout.StyleClass = (v) => ({ "Xamarin.Forms.StackLayout:StyleClass;Xamarin.Forms.Core": v  }) ;
    
    StackLayout.Triggers = (v) => ({ "Xamarin.Forms.StackLayout:Triggers;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property Stepper.Behaviors of Type System.Collections.Generic.IList`1[Xamarin.Forms.Behavior] */
    Behaviors?(v: any): { "Xamarin.Forms.Stepper:Behaviors;Xamarin.Forms.Core": any  };
    
    /** Collection Property Stepper.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.Stepper:Effects;Xamarin.Forms.Core": any  };
    
    /** Collection Property Stepper.GestureRecognizers of Type System.Collections.Generic.IList`1[Xamarin.Forms.IGestureRecognizer] */
    GestureRecognizers?(v: any): { "Xamarin.Forms.Stepper:GestureRecognizers;Xamarin.Forms.Core": any  };
    
    /** Collection Property Stepper.Resources of Type Xamarin.Forms.ResourceDictionary */
    Resources?(v: any): { "Xamarin.Forms.Stepper:Resources;Xamarin.Forms.Core": any  };
    
    /** Collection Property Stepper.StyleClass of Type System.Collections.Generic.IList`1[System.String] */
    StyleClass?(v: any): { "Xamarin.Forms.Stepper:StyleClass;Xamarin.Forms.Core": any  };
    
    /** Collection Property Stepper.Triggers of Type System.Collections.Generic.IList`1[Xamarin.Forms.TriggerBase] */
    Triggers?(v: any): { "Xamarin.Forms.Stepper:Triggers;Xamarin.Forms.Core": any  }
    }
    
    /** Stepper */
    export const Stepper: IStepperConstructor = XNode.prepare<IStepper>("Xamarin.Forms.Stepper;Xamarin.Forms.Core");
    
    
    Stepper.Behaviors = (v) => ({ "Xamarin.Forms.Stepper:Behaviors;Xamarin.Forms.Core": v  }) ;
    
    Stepper.Effects = (v) => ({ "Xamarin.Forms.Stepper:Effects;Xamarin.Forms.Core": v  }) ;
    
    Stepper.GestureRecognizers = (v) => ({ "Xamarin.Forms.Stepper:GestureRecognizers;Xamarin.Forms.Core": v  }) ;
    
    Stepper.Resources = (v) => ({ "Xamarin.Forms.Stepper:Resources;Xamarin.Forms.Core": v  }) ;
    
    Stepper.StyleClass = (v) => ({ "Xamarin.Forms.Stepper:StyleClass;Xamarin.Forms.Core": v  }) ;
    
    Stepper.Triggers = (v) => ({ "Xamarin.Forms.Stepper:Triggers;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property StreamImageSource.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.StreamImageSource:Effects;Xamarin.Forms.Core": any  }
    }
    
    /** StreamImageSource */
    export const StreamImageSource: IStreamImageSourceConstructor = XNode.prepare<IStreamImageSource>("Xamarin.Forms.StreamImageSource;Xamarin.Forms.Core");
    
    
    StreamImageSource.Effects = (v) => ({ "Xamarin.Forms.StreamImageSource:Effects;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property SwipeGestureRecognizer.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.SwipeGestureRecognizer:Effects;Xamarin.Forms.Core": any  }
    }
    
    /** SwipeGestureRecognizer */
    export const SwipeGestureRecognizer: ISwipeGestureRecognizerConstructor = XNode.prepare<ISwipeGestureRecognizer>("Xamarin.Forms.SwipeGestureRecognizer;Xamarin.Forms.Core");
    
    
    SwipeGestureRecognizer.Effects = (v) => ({ "Xamarin.Forms.SwipeGestureRecognizer:Effects;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property SwipeItem.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.SwipeItem:Effects;Xamarin.Forms.Core": any  }
    }
    
    /** SwipeItem */
    export const SwipeItem: ISwipeItemConstructor = XNode.prepare<ISwipeItem>("Xamarin.Forms.SwipeItem;Xamarin.Forms.Core");
    
    
    SwipeItem.Effects = (v) => ({ "Xamarin.Forms.SwipeItem:Effects;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property SwipeItems.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.SwipeItems:Effects;Xamarin.Forms.Core": any  }
    }
    
    /** SwipeItems */
    export const SwipeItems: ISwipeItemsConstructor = XNode.prepare<ISwipeItems>("Xamarin.Forms.SwipeItems;Xamarin.Forms.Core");
    
    
    SwipeItems.Effects = (v) => ({ "Xamarin.Forms.SwipeItems:Effects;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property SwipeItemView.Behaviors of Type System.Collections.Generic.IList`1[Xamarin.Forms.Behavior] */
    Behaviors?(v: any): { "Xamarin.Forms.SwipeItemView:Behaviors;Xamarin.Forms.Core": any  };
    
    /** Collection Property SwipeItemView.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.SwipeItemView:Effects;Xamarin.Forms.Core": any  };
    
    /** Collection Property SwipeItemView.GestureRecognizers of Type System.Collections.Generic.IList`1[Xamarin.Forms.IGestureRecognizer] */
    GestureRecognizers?(v: any): { "Xamarin.Forms.SwipeItemView:GestureRecognizers;Xamarin.Forms.Core": any  };
    
    /** Collection Property SwipeItemView.Resources of Type Xamarin.Forms.ResourceDictionary */
    Resources?(v: any): { "Xamarin.Forms.SwipeItemView:Resources;Xamarin.Forms.Core": any  };
    
    /** Collection Property SwipeItemView.StyleClass of Type System.Collections.Generic.IList`1[System.String] */
    StyleClass?(v: any): { "Xamarin.Forms.SwipeItemView:StyleClass;Xamarin.Forms.Core": any  };
    
    /** Collection Property SwipeItemView.Triggers of Type System.Collections.Generic.IList`1[Xamarin.Forms.TriggerBase] */
    Triggers?(v: any): { "Xamarin.Forms.SwipeItemView:Triggers;Xamarin.Forms.Core": any  }
    }
    
    /** SwipeItemView */
    export const SwipeItemView: ISwipeItemViewConstructor = XNode.prepare<ISwipeItemView>("Xamarin.Forms.SwipeItemView;Xamarin.Forms.Core");
    
    
    SwipeItemView.Behaviors = (v) => ({ "Xamarin.Forms.SwipeItemView:Behaviors;Xamarin.Forms.Core": v  }) ;
    
    SwipeItemView.Effects = (v) => ({ "Xamarin.Forms.SwipeItemView:Effects;Xamarin.Forms.Core": v  }) ;
    
    SwipeItemView.GestureRecognizers = (v) => ({ "Xamarin.Forms.SwipeItemView:GestureRecognizers;Xamarin.Forms.Core": v  }) ;
    
    SwipeItemView.Resources = (v) => ({ "Xamarin.Forms.SwipeItemView:Resources;Xamarin.Forms.Core": v  }) ;
    
    SwipeItemView.StyleClass = (v) => ({ "Xamarin.Forms.SwipeItemView:StyleClass;Xamarin.Forms.Core": v  }) ;
    
    SwipeItemView.Triggers = (v) => ({ "Xamarin.Forms.SwipeItemView:Triggers;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property SwipeView.Behaviors of Type System.Collections.Generic.IList`1[Xamarin.Forms.Behavior] */
    Behaviors?(v: any): { "Xamarin.Forms.SwipeView:Behaviors;Xamarin.Forms.Core": any  };
    
    /** Collection Property SwipeView.BottomItems of Type Xamarin.Forms.SwipeItems */
    BottomItems?(v: any): { "Xamarin.Forms.SwipeView:BottomItems;Xamarin.Forms.Core": any  };
    
    /** Collection Property SwipeView.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.SwipeView:Effects;Xamarin.Forms.Core": any  };
    
    /** Collection Property SwipeView.GestureRecognizers of Type System.Collections.Generic.IList`1[Xamarin.Forms.IGestureRecognizer] */
    GestureRecognizers?(v: any): { "Xamarin.Forms.SwipeView:GestureRecognizers;Xamarin.Forms.Core": any  };
    
    /** Collection Property SwipeView.LeftItems of Type Xamarin.Forms.SwipeItems */
    LeftItems?(v: any): { "Xamarin.Forms.SwipeView:LeftItems;Xamarin.Forms.Core": any  };
    
    /** Collection Property SwipeView.Resources of Type Xamarin.Forms.ResourceDictionary */
    Resources?(v: any): { "Xamarin.Forms.SwipeView:Resources;Xamarin.Forms.Core": any  };
    
    /** Collection Property SwipeView.RightItems of Type Xamarin.Forms.SwipeItems */
    RightItems?(v: any): { "Xamarin.Forms.SwipeView:RightItems;Xamarin.Forms.Core": any  };
    
    /** Collection Property SwipeView.StyleClass of Type System.Collections.Generic.IList`1[System.String] */
    StyleClass?(v: any): { "Xamarin.Forms.SwipeView:StyleClass;Xamarin.Forms.Core": any  };
    
    /** Collection Property SwipeView.TopItems of Type Xamarin.Forms.SwipeItems */
    TopItems?(v: any): { "Xamarin.Forms.SwipeView:TopItems;Xamarin.Forms.Core": any  };
    
    /** Collection Property SwipeView.Triggers of Type System.Collections.Generic.IList`1[Xamarin.Forms.TriggerBase] */
    Triggers?(v: any): { "Xamarin.Forms.SwipeView:Triggers;Xamarin.Forms.Core": any  }
    }
    
    /** SwipeView */
    export const SwipeView: ISwipeViewConstructor = XNode.prepare<ISwipeView>("Xamarin.Forms.SwipeView;Xamarin.Forms.Core");
    
    
    SwipeView.Behaviors = (v) => ({ "Xamarin.Forms.SwipeView:Behaviors;Xamarin.Forms.Core": v  }) ;
    
    SwipeView.BottomItems = (v) => ({ "Xamarin.Forms.SwipeView:BottomItems;Xamarin.Forms.Core": v  }) ;
    
    SwipeView.Effects = (v) => ({ "Xamarin.Forms.SwipeView:Effects;Xamarin.Forms.Core": v  }) ;
    
    SwipeView.GestureRecognizers = (v) => ({ "Xamarin.Forms.SwipeView:GestureRecognizers;Xamarin.Forms.Core": v  }) ;
    
    SwipeView.LeftItems = (v) => ({ "Xamarin.Forms.SwipeView:LeftItems;Xamarin.Forms.Core": v  }) ;
    
    SwipeView.Resources = (v) => ({ "Xamarin.Forms.SwipeView:Resources;Xamarin.Forms.Core": v  }) ;
    
    SwipeView.RightItems = (v) => ({ "Xamarin.Forms.SwipeView:RightItems;Xamarin.Forms.Core": v  }) ;
    
    SwipeView.StyleClass = (v) => ({ "Xamarin.Forms.SwipeView:StyleClass;Xamarin.Forms.Core": v  }) ;
    
    SwipeView.TopItems = (v) => ({ "Xamarin.Forms.SwipeView:TopItems;Xamarin.Forms.Core": v  }) ;
    
    SwipeView.Triggers = (v) => ({ "Xamarin.Forms.SwipeView:Triggers;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property Switch.Behaviors of Type System.Collections.Generic.IList`1[Xamarin.Forms.Behavior] */
    Behaviors?(v: any): { "Xamarin.Forms.Switch:Behaviors;Xamarin.Forms.Core": any  };
    
    /** Collection Property Switch.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.Switch:Effects;Xamarin.Forms.Core": any  };
    
    /** Collection Property Switch.GestureRecognizers of Type System.Collections.Generic.IList`1[Xamarin.Forms.IGestureRecognizer] */
    GestureRecognizers?(v: any): { "Xamarin.Forms.Switch:GestureRecognizers;Xamarin.Forms.Core": any  };
    
    /** Collection Property Switch.Resources of Type Xamarin.Forms.ResourceDictionary */
    Resources?(v: any): { "Xamarin.Forms.Switch:Resources;Xamarin.Forms.Core": any  };
    
    /** Collection Property Switch.StyleClass of Type System.Collections.Generic.IList`1[System.String] */
    StyleClass?(v: any): { "Xamarin.Forms.Switch:StyleClass;Xamarin.Forms.Core": any  };
    
    /** Collection Property Switch.Triggers of Type System.Collections.Generic.IList`1[Xamarin.Forms.TriggerBase] */
    Triggers?(v: any): { "Xamarin.Forms.Switch:Triggers;Xamarin.Forms.Core": any  }
    }
    
    /** Switch */
    export const Switch: ISwitchConstructor = XNode.prepare<ISwitch>("Xamarin.Forms.Switch;Xamarin.Forms.Core");
    
    
    Switch.Behaviors = (v) => ({ "Xamarin.Forms.Switch:Behaviors;Xamarin.Forms.Core": v  }) ;
    
    Switch.Effects = (v) => ({ "Xamarin.Forms.Switch:Effects;Xamarin.Forms.Core": v  }) ;
    
    Switch.GestureRecognizers = (v) => ({ "Xamarin.Forms.Switch:GestureRecognizers;Xamarin.Forms.Core": v  }) ;
    
    Switch.Resources = (v) => ({ "Xamarin.Forms.Switch:Resources;Xamarin.Forms.Core": v  }) ;
    
    Switch.StyleClass = (v) => ({ "Xamarin.Forms.Switch:StyleClass;Xamarin.Forms.Core": v  }) ;
    
    Switch.Triggers = (v) => ({ "Xamarin.Forms.Switch:Triggers;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property TabbedPage.Behaviors of Type System.Collections.Generic.IList`1[Xamarin.Forms.Behavior] */
    Behaviors?(v: any): { "Xamarin.Forms.TabbedPage:Behaviors;Xamarin.Forms.Core": any  };
    
    /** Collection Property TabbedPage.Children of Type System.Collections.Generic.IList`1[Xamarin.Forms.Page] */
    Children?(v: any): { "Xamarin.Forms.TabbedPage:Children;Xamarin.Forms.Core": any  };
    
    /** Collection Property TabbedPage.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.TabbedPage:Effects;Xamarin.Forms.Core": any  };
    
    /** Collection Property TabbedPage.Resources of Type Xamarin.Forms.ResourceDictionary */
    Resources?(v: any): { "Xamarin.Forms.TabbedPage:Resources;Xamarin.Forms.Core": any  };
    
    /** Collection Property TabbedPage.StyleClass of Type System.Collections.Generic.IList`1[System.String] */
    StyleClass?(v: any): { "Xamarin.Forms.TabbedPage:StyleClass;Xamarin.Forms.Core": any  };
    
    /** Collection Property TabbedPage.ToolbarItems of Type System.Collections.Generic.IList`1[Xamarin.Forms.ToolbarItem] */
    ToolbarItems?(v: any): { "Xamarin.Forms.TabbedPage:ToolbarItems;Xamarin.Forms.Core": any  };
    
    /** Collection Property TabbedPage.Triggers of Type System.Collections.Generic.IList`1[Xamarin.Forms.TriggerBase] */
    Triggers?(v: any): { "Xamarin.Forms.TabbedPage:Triggers;Xamarin.Forms.Core": any  }
    }
    
    /** TabbedPage */
    export const TabbedPage: ITabbedPageConstructor = XNode.prepare<ITabbedPage>("Xamarin.Forms.TabbedPage;Xamarin.Forms.Core");
    
    
    TabbedPage.Behaviors = (v) => ({ "Xamarin.Forms.TabbedPage:Behaviors;Xamarin.Forms.Core": v  }) ;
    
    TabbedPage.Children = (v) => ({ "Xamarin.Forms.TabbedPage:Children;Xamarin.Forms.Core": v  }) ;
    
    TabbedPage.Effects = (v) => ({ "Xamarin.Forms.TabbedPage:Effects;Xamarin.Forms.Core": v  }) ;
    
    TabbedPage.Resources = (v) => ({ "Xamarin.Forms.TabbedPage:Resources;Xamarin.Forms.Core": v  }) ;
    
    TabbedPage.StyleClass = (v) => ({ "Xamarin.Forms.TabbedPage:StyleClass;Xamarin.Forms.Core": v  }) ;
    
    TabbedPage.ToolbarItems = (v) => ({ "Xamarin.Forms.TabbedPage:ToolbarItems;Xamarin.Forms.Core": v  }) ;
    
    TabbedPage.Triggers = (v) => ({ "Xamarin.Forms.TabbedPage:Triggers;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property TableRoot.Item of Type Xamarin.Forms.TableSection */
    Item?(v: any): { "Xamarin.Forms.TableRoot:Item;Xamarin.Forms.Core": any  }
    }
    
    /** TableRoot */
    export const TableRoot: ITableRootConstructor = XNode.prepare<ITableRoot>("Xamarin.Forms.TableRoot;Xamarin.Forms.Core");
    
    
    TableRoot.Item = (v) => ({ "Xamarin.Forms.TableRoot:Item;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property TableView.Behaviors of Type System.Collections.Generic.IList`1[Xamarin.Forms.Behavior] */
    Behaviors?(v: any): { "Xamarin.Forms.TableView:Behaviors;Xamarin.Forms.Core": any  };
    
    /** Collection Property TableView.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.TableView:Effects;Xamarin.Forms.Core": any  };
    
    /** Collection Property TableView.GestureRecognizers of Type System.Collections.Generic.IList`1[Xamarin.Forms.IGestureRecognizer] */
    GestureRecognizers?(v: any): { "Xamarin.Forms.TableView:GestureRecognizers;Xamarin.Forms.Core": any  };
    
    /** Collection Property TableView.Resources of Type Xamarin.Forms.ResourceDictionary */
    Resources?(v: any): { "Xamarin.Forms.TableView:Resources;Xamarin.Forms.Core": any  };
    
    /** Collection Property TableView.Root of Type Xamarin.Forms.TableRoot */
    Root?(v: any): { "Xamarin.Forms.TableView:Root;Xamarin.Forms.Core": any  };
    
    /** Collection Property TableView.StyleClass of Type System.Collections.Generic.IList`1[System.String] */
    StyleClass?(v: any): { "Xamarin.Forms.TableView:StyleClass;Xamarin.Forms.Core": any  };
    
    /** Collection Property TableView.Triggers of Type System.Collections.Generic.IList`1[Xamarin.Forms.TriggerBase] */
    Triggers?(v: any): { "Xamarin.Forms.TableView:Triggers;Xamarin.Forms.Core": any  }
    }
    
    /** TableView */
    export const TableView: ITableViewConstructor = XNode.prepare<ITableView>("Xamarin.Forms.TableView;Xamarin.Forms.Core");
    
    
    TableView.Behaviors = (v) => ({ "Xamarin.Forms.TableView:Behaviors;Xamarin.Forms.Core": v  }) ;
    
    TableView.Effects = (v) => ({ "Xamarin.Forms.TableView:Effects;Xamarin.Forms.Core": v  }) ;
    
    TableView.GestureRecognizers = (v) => ({ "Xamarin.Forms.TableView:GestureRecognizers;Xamarin.Forms.Core": v  }) ;
    
    TableView.Resources = (v) => ({ "Xamarin.Forms.TableView:Resources;Xamarin.Forms.Core": v  }) ;
    
    TableView.Root = (v) => ({ "Xamarin.Forms.TableView:Root;Xamarin.Forms.Core": v  }) ;
    
    TableView.StyleClass = (v) => ({ "Xamarin.Forms.TableView:StyleClass;Xamarin.Forms.Core": v  }) ;
    
    TableView.Triggers = (v) => ({ "Xamarin.Forms.TableView:Triggers;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property TapGestureRecognizer.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.TapGestureRecognizer:Effects;Xamarin.Forms.Core": any  }
    }
    
    /** TapGestureRecognizer */
    export const TapGestureRecognizer: ITapGestureRecognizerConstructor = XNode.prepare<ITapGestureRecognizer>("Xamarin.Forms.TapGestureRecognizer;Xamarin.Forms.Core");
    
    
    TapGestureRecognizer.Effects = (v) => ({ "Xamarin.Forms.TapGestureRecognizer:Effects;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property TemplatedPage.Behaviors of Type System.Collections.Generic.IList`1[Xamarin.Forms.Behavior] */
    Behaviors?(v: any): { "Xamarin.Forms.TemplatedPage:Behaviors;Xamarin.Forms.Core": any  };
    
    /** Collection Property TemplatedPage.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.TemplatedPage:Effects;Xamarin.Forms.Core": any  };
    
    /** Collection Property TemplatedPage.Resources of Type Xamarin.Forms.ResourceDictionary */
    Resources?(v: any): { "Xamarin.Forms.TemplatedPage:Resources;Xamarin.Forms.Core": any  };
    
    /** Collection Property TemplatedPage.StyleClass of Type System.Collections.Generic.IList`1[System.String] */
    StyleClass?(v: any): { "Xamarin.Forms.TemplatedPage:StyleClass;Xamarin.Forms.Core": any  };
    
    /** Collection Property TemplatedPage.ToolbarItems of Type System.Collections.Generic.IList`1[Xamarin.Forms.ToolbarItem] */
    ToolbarItems?(v: any): { "Xamarin.Forms.TemplatedPage:ToolbarItems;Xamarin.Forms.Core": any  };
    
    /** Collection Property TemplatedPage.Triggers of Type System.Collections.Generic.IList`1[Xamarin.Forms.TriggerBase] */
    Triggers?(v: any): { "Xamarin.Forms.TemplatedPage:Triggers;Xamarin.Forms.Core": any  }
    }
    
    /** TemplatedPage */
    export const TemplatedPage: ITemplatedPageConstructor = XNode.prepare<ITemplatedPage>("Xamarin.Forms.TemplatedPage;Xamarin.Forms.Core");
    
    
    TemplatedPage.Behaviors = (v) => ({ "Xamarin.Forms.TemplatedPage:Behaviors;Xamarin.Forms.Core": v  }) ;
    
    TemplatedPage.Effects = (v) => ({ "Xamarin.Forms.TemplatedPage:Effects;Xamarin.Forms.Core": v  }) ;
    
    TemplatedPage.Resources = (v) => ({ "Xamarin.Forms.TemplatedPage:Resources;Xamarin.Forms.Core": v  }) ;
    
    TemplatedPage.StyleClass = (v) => ({ "Xamarin.Forms.TemplatedPage:StyleClass;Xamarin.Forms.Core": v  }) ;
    
    TemplatedPage.ToolbarItems = (v) => ({ "Xamarin.Forms.TemplatedPage:ToolbarItems;Xamarin.Forms.Core": v  }) ;
    
    TemplatedPage.Triggers = (v) => ({ "Xamarin.Forms.TemplatedPage:Triggers;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property TemplatedView.Behaviors of Type System.Collections.Generic.IList`1[Xamarin.Forms.Behavior] */
    Behaviors?(v: any): { "Xamarin.Forms.TemplatedView:Behaviors;Xamarin.Forms.Core": any  };
    
    /** Collection Property TemplatedView.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.TemplatedView:Effects;Xamarin.Forms.Core": any  };
    
    /** Collection Property TemplatedView.GestureRecognizers of Type System.Collections.Generic.IList`1[Xamarin.Forms.IGestureRecognizer] */
    GestureRecognizers?(v: any): { "Xamarin.Forms.TemplatedView:GestureRecognizers;Xamarin.Forms.Core": any  };
    
    /** Collection Property TemplatedView.Resources of Type Xamarin.Forms.ResourceDictionary */
    Resources?(v: any): { "Xamarin.Forms.TemplatedView:Resources;Xamarin.Forms.Core": any  };
    
    /** Collection Property TemplatedView.StyleClass of Type System.Collections.Generic.IList`1[System.String] */
    StyleClass?(v: any): { "Xamarin.Forms.TemplatedView:StyleClass;Xamarin.Forms.Core": any  };
    
    /** Collection Property TemplatedView.Triggers of Type System.Collections.Generic.IList`1[Xamarin.Forms.TriggerBase] */
    Triggers?(v: any): { "Xamarin.Forms.TemplatedView:Triggers;Xamarin.Forms.Core": any  }
    }
    
    /** TemplatedView */
    export const TemplatedView: ITemplatedViewConstructor = XNode.prepare<ITemplatedView>("Xamarin.Forms.TemplatedView;Xamarin.Forms.Core");
    
    
    TemplatedView.Behaviors = (v) => ({ "Xamarin.Forms.TemplatedView:Behaviors;Xamarin.Forms.Core": v  }) ;
    
    TemplatedView.Effects = (v) => ({ "Xamarin.Forms.TemplatedView:Effects;Xamarin.Forms.Core": v  }) ;
    
    TemplatedView.GestureRecognizers = (v) => ({ "Xamarin.Forms.TemplatedView:GestureRecognizers;Xamarin.Forms.Core": v  }) ;
    
    TemplatedView.Resources = (v) => ({ "Xamarin.Forms.TemplatedView:Resources;Xamarin.Forms.Core": v  }) ;
    
    TemplatedView.StyleClass = (v) => ({ "Xamarin.Forms.TemplatedView:StyleClass;Xamarin.Forms.Core": v  }) ;
    
    TemplatedView.Triggers = (v) => ({ "Xamarin.Forms.TemplatedView:Triggers;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property TimePicker.Behaviors of Type System.Collections.Generic.IList`1[Xamarin.Forms.Behavior] */
    Behaviors?(v: any): { "Xamarin.Forms.TimePicker:Behaviors;Xamarin.Forms.Core": any  };
    
    /** Collection Property TimePicker.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.TimePicker:Effects;Xamarin.Forms.Core": any  };
    
    /** Collection Property TimePicker.GestureRecognizers of Type System.Collections.Generic.IList`1[Xamarin.Forms.IGestureRecognizer] */
    GestureRecognizers?(v: any): { "Xamarin.Forms.TimePicker:GestureRecognizers;Xamarin.Forms.Core": any  };
    
    /** Collection Property TimePicker.Resources of Type Xamarin.Forms.ResourceDictionary */
    Resources?(v: any): { "Xamarin.Forms.TimePicker:Resources;Xamarin.Forms.Core": any  };
    
    /** Collection Property TimePicker.StyleClass of Type System.Collections.Generic.IList`1[System.String] */
    StyleClass?(v: any): { "Xamarin.Forms.TimePicker:StyleClass;Xamarin.Forms.Core": any  };
    
    /** Collection Property TimePicker.Triggers of Type System.Collections.Generic.IList`1[Xamarin.Forms.TriggerBase] */
    Triggers?(v: any): { "Xamarin.Forms.TimePicker:Triggers;Xamarin.Forms.Core": any  }
    }
    
    /** TimePicker */
    export const TimePicker: ITimePickerConstructor = XNode.prepare<ITimePicker>("Xamarin.Forms.TimePicker;Xamarin.Forms.Core");
    
    
    TimePicker.Behaviors = (v) => ({ "Xamarin.Forms.TimePicker:Behaviors;Xamarin.Forms.Core": v  }) ;
    
    TimePicker.Effects = (v) => ({ "Xamarin.Forms.TimePicker:Effects;Xamarin.Forms.Core": v  }) ;
    
    TimePicker.GestureRecognizers = (v) => ({ "Xamarin.Forms.TimePicker:GestureRecognizers;Xamarin.Forms.Core": v  }) ;
    
    TimePicker.Resources = (v) => ({ "Xamarin.Forms.TimePicker:Resources;Xamarin.Forms.Core": v  }) ;
    
    TimePicker.StyleClass = (v) => ({ "Xamarin.Forms.TimePicker:StyleClass;Xamarin.Forms.Core": v  }) ;
    
    TimePicker.Triggers = (v) => ({ "Xamarin.Forms.TimePicker:Triggers;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property ToolbarItem.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.ToolbarItem:Effects;Xamarin.Forms.Core": any  }
    }
    
    /** ToolbarItem */
    export const ToolbarItem: IToolbarItemConstructor = XNode.prepare<IToolbarItem>("Xamarin.Forms.ToolbarItem;Xamarin.Forms.Core");
    
    
    ToolbarItem.Effects = (v) => ({ "Xamarin.Forms.ToolbarItem:Effects;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property UriImageSource.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.UriImageSource:Effects;Xamarin.Forms.Core": any  }
    }
    
    /** UriImageSource */
    export const UriImageSource: IUriImageSourceConstructor = XNode.prepare<IUriImageSource>("Xamarin.Forms.UriImageSource;Xamarin.Forms.Core");
    
    
    UriImageSource.Effects = (v) => ({ "Xamarin.Forms.UriImageSource:Effects;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property View.Behaviors of Type System.Collections.Generic.IList`1[Xamarin.Forms.Behavior] */
    Behaviors?(v: any): { "Xamarin.Forms.View:Behaviors;Xamarin.Forms.Core": any  };
    
    /** Collection Property View.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.View:Effects;Xamarin.Forms.Core": any  };
    
    /** Collection Property View.GestureRecognizers of Type System.Collections.Generic.IList`1[Xamarin.Forms.IGestureRecognizer] */
    GestureRecognizers?(v: any): { "Xamarin.Forms.View:GestureRecognizers;Xamarin.Forms.Core": any  };
    
    /** Collection Property View.Resources of Type Xamarin.Forms.ResourceDictionary */
    Resources?(v: any): { "Xamarin.Forms.View:Resources;Xamarin.Forms.Core": any  };
    
    /** Collection Property View.StyleClass of Type System.Collections.Generic.IList`1[System.String] */
    StyleClass?(v: any): { "Xamarin.Forms.View:StyleClass;Xamarin.Forms.Core": any  };
    
    /** Collection Property View.Triggers of Type System.Collections.Generic.IList`1[Xamarin.Forms.TriggerBase] */
    Triggers?(v: any): { "Xamarin.Forms.View:Triggers;Xamarin.Forms.Core": any  }
    }
    
    /** View */
    export const View: IViewConstructor = XNode.prepare<IView>("Xamarin.Forms.View;Xamarin.Forms.Core");
    
    
    View.Behaviors = (v) => ({ "Xamarin.Forms.View:Behaviors;Xamarin.Forms.Core": v  }) ;
    
    View.Effects = (v) => ({ "Xamarin.Forms.View:Effects;Xamarin.Forms.Core": v  }) ;
    
    View.GestureRecognizers = (v) => ({ "Xamarin.Forms.View:GestureRecognizers;Xamarin.Forms.Core": v  }) ;
    
    View.Resources = (v) => ({ "Xamarin.Forms.View:Resources;Xamarin.Forms.Core": v  }) ;
    
    View.StyleClass = (v) => ({ "Xamarin.Forms.View:StyleClass;Xamarin.Forms.Core": v  }) ;
    
    View.Triggers = (v) => ({ "Xamarin.Forms.View:Triggers;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property VisualElement.Behaviors of Type System.Collections.Generic.IList`1[Xamarin.Forms.Behavior] */
    Behaviors?(v: any): { "Xamarin.Forms.VisualElement:Behaviors;Xamarin.Forms.Core": any  };
    
    /** Collection Property VisualElement.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.VisualElement:Effects;Xamarin.Forms.Core": any  };
    
    /** Collection Property VisualElement.Resources of Type Xamarin.Forms.ResourceDictionary */
    Resources?(v: any): { "Xamarin.Forms.VisualElement:Resources;Xamarin.Forms.Core": any  };
    
    /** Collection Property VisualElement.StyleClass of Type System.Collections.Generic.IList`1[System.String] */
    StyleClass?(v: any): { "Xamarin.Forms.VisualElement:StyleClass;Xamarin.Forms.Core": any  };
    
    /** Collection Property VisualElement.Triggers of Type System.Collections.Generic.IList`1[Xamarin.Forms.TriggerBase] */
    Triggers?(v: any): { "Xamarin.Forms.VisualElement:Triggers;Xamarin.Forms.Core": any  }
    }
    
    /** VisualElement */
    export const VisualElement: IVisualElementConstructor = XNode.prepare<IVisualElement>("Xamarin.Forms.VisualElement;Xamarin.Forms.Core");
    
    
    VisualElement.Behaviors = (v) => ({ "Xamarin.Forms.VisualElement:Behaviors;Xamarin.Forms.Core": v  }) ;
    
    VisualElement.Effects = (v) => ({ "Xamarin.Forms.VisualElement:Effects;Xamarin.Forms.Core": v  }) ;
    
    VisualElement.Resources = (v) => ({ "Xamarin.Forms.VisualElement:Resources;Xamarin.Forms.Core": v  }) ;
    
    VisualElement.StyleClass = (v) => ({ "Xamarin.Forms.VisualElement:StyleClass;Xamarin.Forms.Core": v  }) ;
    
    VisualElement.Triggers = (v) => ({ "Xamarin.Forms.VisualElement:Triggers;Xamarin.Forms.Core": v  }) ;
    
    
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
        
        
    /** Collection Property WebView.Behaviors of Type System.Collections.Generic.IList`1[Xamarin.Forms.Behavior] */
    Behaviors?(v: any): { "Xamarin.Forms.WebView:Behaviors;Xamarin.Forms.Core": any  };
    
    /** Collection Property WebView.Effects of Type System.Collections.Generic.IList`1[Xamarin.Forms.Effect] */
    Effects?(v: any): { "Xamarin.Forms.WebView:Effects;Xamarin.Forms.Core": any  };
    
    /** Collection Property WebView.GestureRecognizers of Type System.Collections.Generic.IList`1[Xamarin.Forms.IGestureRecognizer] */
    GestureRecognizers?(v: any): { "Xamarin.Forms.WebView:GestureRecognizers;Xamarin.Forms.Core": any  };
    
    /** Collection Property WebView.Resources of Type Xamarin.Forms.ResourceDictionary */
    Resources?(v: any): { "Xamarin.Forms.WebView:Resources;Xamarin.Forms.Core": any  };
    
    /** Collection Property WebView.StyleClass of Type System.Collections.Generic.IList`1[System.String] */
    StyleClass?(v: any): { "Xamarin.Forms.WebView:StyleClass;Xamarin.Forms.Core": any  };
    
    /** Collection Property WebView.Triggers of Type System.Collections.Generic.IList`1[Xamarin.Forms.TriggerBase] */
    Triggers?(v: any): { "Xamarin.Forms.WebView:Triggers;Xamarin.Forms.Core": any  }
    }
    
    /** WebView */
    export const WebView: IWebViewConstructor = XNode.prepare<IWebView>("Xamarin.Forms.WebView;Xamarin.Forms.Core");
    
    
    WebView.Behaviors = (v) => ({ "Xamarin.Forms.WebView:Behaviors;Xamarin.Forms.Core": v  }) ;
    
    WebView.Effects = (v) => ({ "Xamarin.Forms.WebView:Effects;Xamarin.Forms.Core": v  }) ;
    
    WebView.GestureRecognizers = (v) => ({ "Xamarin.Forms.WebView:GestureRecognizers;Xamarin.Forms.Core": v  }) ;
    
    WebView.Resources = (v) => ({ "Xamarin.Forms.WebView:Resources;Xamarin.Forms.Core": v  }) ;
    
    WebView.StyleClass = (v) => ({ "Xamarin.Forms.WebView:StyleClass;Xamarin.Forms.Core": v  }) ;
    
    WebView.Triggers = (v) => ({ "Xamarin.Forms.WebView:Triggers;Xamarin.Forms.Core": v  }) ;
    
    
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
    
    
    