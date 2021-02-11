//tslint:disable
import XNode, { RootObject, NodeFactory, AttachedNode } from "@web-atoms/core/dist/core/XNode";
import Bind from "@web-atoms/core/dist/core/Bind";import { ColorItem } from "@web-atoms/core/dist/core/Colors";declare var bridge: any;




declare class AvatarView extends RootObject {
    
    
/** Property AvatarView.Background of Type Xamarin.Forms.Brush */
public static background: NodeFactory;;

/** Property AvatarView.Behaviors of Type Xamarin.Forms.Behavior */
public static behaviors: NodeFactory;;

/** Property AvatarView.Clip of Type Xamarin.Forms.Shapes.Geometry */
public static clip: NodeFactory;;

/** Property AvatarView.ControlTemplate of Type Xamarin.Forms.ControlTemplate */
public static controlTemplate: NodeFactory;;

/** Property AvatarView.Effects of Type Xamarin.Forms.Effect */
public static effects: NodeFactory;;

/** Property AvatarView.GestureRecognizers of Type Xamarin.Forms.IGestureRecognizer */
public static gestureRecognizers: NodeFactory;;

/** Property AvatarView.Menu of Type Xamarin.Forms.Menu */
public static menu: NodeFactory;;

/** Property AvatarView.Resources of Type System.Collections.Generic.KeyValuePair`2[System.String,System.Object] */
public static resources: NodeFactory;;

/** Property AvatarView.Source of Type Xamarin.Forms.ImageSource */
public static source: NodeFactory;;

/** Property AvatarView.StyleClass of Type System.String */
public static styleClass: NodeFactory;;

/** Property AvatarView.Triggers of Type Xamarin.Forms.TriggerBase */
public static triggers: NodeFactory;
    
    
/** Property AnchorX of Type Double */
public anchorX?: number | Bind;

/** Property AnchorY of Type Double */
public anchorY?: number | Bind;

/** Property Aspect of Type Aspect */
public aspect?: "AspectFit" | "AspectFill" | "Fill" | Bind;

/** Property AutomationId of Type String */
public automationId?: string | null | Bind;

/** Property Background of Type Brush */
public background?: "AliceBlue" | "AntiqueWhite" | "Aqua" | "Aquamarine" | "Azure" | "Beige" | "Bisque" | "Black" | "BlanchedAlmond" | "Blue" | "BlueViolet" | "Brown" | "BurlyWood" | "CadetBlue" | "Chartreuse" | "Chocolate" | "Coral" | "CornflowerBlue" | "Cornsilk" | "Crimson" | "Cyan" | "DarkBlue" | "DarkCyan" | "DarkGoldenrod" | "DarkGray" | "DarkGreen" | "DarkKhaki" | "DarkMagenta" | "DarkOliveGreen" | "DarkOrange" | "DarkOrchid" | "DarkRed" | "DarkSalmon" | "DarkSeaGreen" | "DarkSlateBlue" | "DarkSlateGray" | "DarkTurquoise" | "DarkViolet" | "DeepPink" | "DeepSkyBlue" | "DimGray" | "DodgerBlue" | "Firebrick" | "FloralWhite" | "ForestGreen" | "Fuchsia" | "Gainsboro" | "GhostWhite" | "Gold" | "Goldenrod" | "Gray" | "Green" | "GreenYellow" | "Honeydew" | "HotPink" | "IndianRed" | "Indigo" | "Ivory" | "Khaki" | "Lavender" | "LavenderBlush" | "LawnGreen" | "LemonChiffon" | "LightBlue" | "LightCoral" | "LightCyan" | "LightGoldenrodYellow" | "LightGray" | "LightGreen" | "LightPink" | "LightSalmon" | "LightSeaGreen" | "LightSkyBlue" | "LightSlateGray" | "LightSteelBlue" | "LightYellow" | "Lime" | "LimeGreen" | "Linen" | "Magenta" | "Maroon" | "MediumAquamarine" | "MediumBlue" | "MediumOrchid" | "MediumPurple" | "MediumSeaGreen" | "MediumSlateBlue" | "MediumSpringGreen" | "MediumTurquoise" | "MediumVioletRed" | "MidnightBlue" | "MintCream" | "MistyRose" | "Moccasin" | "NavajoWhite" | "Navy" | "OldLace" | "Olive" | "OliveDrab" | "Orange" | "OrangeRed" | "Orchid" | "PaleGoldenrod" | "PaleGreen" | "PaleTurquoise" | "PaleVioletRed" | "PapayaWhip" | "PeachPuff" | "Peru" | "Pink" | "Plum" | "PowderBlue" | "Purple" | "Red" | "RosyBrown" | "RoyalBlue" | "SaddleBrown" | "Salmon" | "SandyBrown" | "SeaGreen" | "SeaShell" | "Sienna" | "Silver" | "SkyBlue" | "SlateBlue" | "SlateGray" | "Snow" | "SpringGreen" | "SteelBlue" | "Tan" | "Teal" | "Thistle" | "Tomato" | "Transparent" | "Turquoise" | "Violet" | "Wheat" | "White" | "WhiteSmoke" | "Yellow" | "YellowGreen" | Bind;

/** Property BackgroundColor of Type Color */
public backgroundColor?: ColorItem | string | null | Bind;

/** Property BindingContext of Type Object */
public bindingContext?: any;

/** Property BorderColor of Type Color */
public borderColor?: ColorItem | string | null | Bind;

/** Property CascadeInputTransparent of Type Boolean */
public cascadeInputTransparent?: boolean | Bind;

/** Property class of Type IList`1 */
public class?: any;

/** Property ClassId of Type String */
public classId?: string | null | Bind;

/** Property Clip of Type Geometry */
public clip?: any;

/** Property Color of Type Color */
public color?: ColorItem | string | null | Bind;

/** Property ColorTheme of Type IColorTheme */
public colorTheme?: any;

/** Property ControlTemplate of Type ControlTemplate */
public controlTemplate?: any;

/** Property CornerRadius of Type Double */
public cornerRadius?: number | Bind;

/** Property DisableLayout of Type Boolean */
public disableLayout?: boolean | Bind;

/** Property Dispatcher of Type IDispatcher */
public dispatcher?: any;

/** Property EffectControlProvider of Type IEffectControlProvider */
public effectControlProvider?: any;

/** Property FlowDirection of Type FlowDirection */
public flowDirection?: "MatchParent" | "LeftToRight" | "RightToLeft" | Bind;

/** Property FontAttributes of Type FontAttributes */
public fontAttributes?: "None" | "Bold" | "Italic" | Bind;

/** Property FontFamily of Type String */
public fontFamily?: string | null | Bind;

/** Property FontSize of Type Double */
public fontSize?: number | Bind;

/** Property HeightRequest of Type Double */
public heightRequest?: number | Bind;

/** Property HorizontalOptions of Type LayoutOptions */
public horizontalOptions?: "Start" | "Center" | "End" | "Fill" | "StartAndExpand" | "CenterAndExpand" | "EndAndExpand" | "FillAndExpand" | Bind;

/** Property InputTransparent of Type Boolean */
public inputTransparent?: boolean | Bind;

/** Property IsClippedToBounds of Type Boolean */
public isClippedToBounds?: boolean | Bind;

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

/** Property Margin of Type Thickness */
public margin?: /*Thickness*/ any;

/** Property MinimumHeightRequest of Type Double */
public minimumHeightRequest?: number | Bind;

/** Property MinimumWidthRequest of Type Double */
public minimumWidthRequest?: number | Bind;

/** Property Navigation of Type INavigation */
public navigation?: any;

/** Property Opacity of Type Double */
public opacity?: number | Bind;

/** Property Padding of Type Thickness */
public padding?: /*Thickness*/ any;

/** Property Parent of Type Element */
public parent?: any;

/** Property Platform of Type IPlatform */
public platform?: any;

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

/** Property Size of Type Double */
public size?: number | Bind;

/** Property Source of Type ImageSource */
public source?: /*ImageSource*/ any;

/** Property Style of Type Style */
public style?: any;

/** Property StyleClass of Type IList`1 */
public styleClass?: any;

/** Property StyleId of Type String */
public styleId?: string | null | Bind;

/** Property TabIndex of Type Int32 */
public tabIndex?: number | Bind;

/** Property Text of Type String */
public text?: string | null | Bind;

/** Property TextColor of Type Color */
public textColor?: ColorItem | string | null | Bind;

/** Property TranslationX of Type Double */
public translationX?: number | Bind;

/** Property TranslationY of Type Double */
public translationY?: number | Bind;

/** Property VerticalOptions of Type LayoutOptions */
public verticalOptions?: "Start" | "Center" | "End" | "Fill" | "StartAndExpand" | "CenterAndExpand" | "EndAndExpand" | "FillAndExpand" | Bind;

/** Property Visual of Type IVisual */
public visual?: /*IVisual*/ any;

/** Property WidthRequest of Type Double */
public widthRequest?: number | Bind;
}


declare class BadgeView extends RootObject {
    
    
/** Property BadgeView.Background of Type Xamarin.Forms.Brush */
public static background: NodeFactory;;

/** Property BadgeView.Behaviors of Type Xamarin.Forms.Behavior */
public static behaviors: NodeFactory;;

/** Property BadgeView.Clip of Type Xamarin.Forms.Shapes.Geometry */
public static clip: NodeFactory;;

/** Property BadgeView.Content of Type Xamarin.Forms.View */
public static content: NodeFactory;;

/** Property BadgeView.ControlTemplate of Type Xamarin.Forms.ControlTemplate */
public static controlTemplate: NodeFactory;;

/** Property BadgeView.Effects of Type Xamarin.Forms.Effect */
public static effects: NodeFactory;;

/** Property BadgeView.GestureRecognizers of Type Xamarin.Forms.IGestureRecognizer */
public static gestureRecognizers: NodeFactory;;

/** Property BadgeView.Menu of Type Xamarin.Forms.Menu */
public static menu: NodeFactory;;

/** Property BadgeView.Resources of Type System.Collections.Generic.KeyValuePair`2[System.String,System.Object] */
public static resources: NodeFactory;;

/** Property BadgeView.StyleClass of Type System.String */
public static styleClass: NodeFactory;;

/** Property BadgeView.Triggers of Type Xamarin.Forms.TriggerBase */
public static triggers: NodeFactory;
    
    
/** Property AnchorX of Type Double */
public anchorX?: number | Bind;

/** Property AnchorY of Type Double */
public anchorY?: number | Bind;

/** Property AutoHide of Type Boolean */
public autoHide?: boolean | Bind;

/** Property AutomationId of Type String */
public automationId?: string | null | Bind;

/** Property Background of Type Brush */
public background?: "AliceBlue" | "AntiqueWhite" | "Aqua" | "Aquamarine" | "Azure" | "Beige" | "Bisque" | "Black" | "BlanchedAlmond" | "Blue" | "BlueViolet" | "Brown" | "BurlyWood" | "CadetBlue" | "Chartreuse" | "Chocolate" | "Coral" | "CornflowerBlue" | "Cornsilk" | "Crimson" | "Cyan" | "DarkBlue" | "DarkCyan" | "DarkGoldenrod" | "DarkGray" | "DarkGreen" | "DarkKhaki" | "DarkMagenta" | "DarkOliveGreen" | "DarkOrange" | "DarkOrchid" | "DarkRed" | "DarkSalmon" | "DarkSeaGreen" | "DarkSlateBlue" | "DarkSlateGray" | "DarkTurquoise" | "DarkViolet" | "DeepPink" | "DeepSkyBlue" | "DimGray" | "DodgerBlue" | "Firebrick" | "FloralWhite" | "ForestGreen" | "Fuchsia" | "Gainsboro" | "GhostWhite" | "Gold" | "Goldenrod" | "Gray" | "Green" | "GreenYellow" | "Honeydew" | "HotPink" | "IndianRed" | "Indigo" | "Ivory" | "Khaki" | "Lavender" | "LavenderBlush" | "LawnGreen" | "LemonChiffon" | "LightBlue" | "LightCoral" | "LightCyan" | "LightGoldenrodYellow" | "LightGray" | "LightGreen" | "LightPink" | "LightSalmon" | "LightSeaGreen" | "LightSkyBlue" | "LightSlateGray" | "LightSteelBlue" | "LightYellow" | "Lime" | "LimeGreen" | "Linen" | "Magenta" | "Maroon" | "MediumAquamarine" | "MediumBlue" | "MediumOrchid" | "MediumPurple" | "MediumSeaGreen" | "MediumSlateBlue" | "MediumSpringGreen" | "MediumTurquoise" | "MediumVioletRed" | "MidnightBlue" | "MintCream" | "MistyRose" | "Moccasin" | "NavajoWhite" | "Navy" | "OldLace" | "Olive" | "OliveDrab" | "Orange" | "OrangeRed" | "Orchid" | "PaleGoldenrod" | "PaleGreen" | "PaleTurquoise" | "PaleVioletRed" | "PapayaWhip" | "PeachPuff" | "Peru" | "Pink" | "Plum" | "PowderBlue" | "Purple" | "Red" | "RosyBrown" | "RoyalBlue" | "SaddleBrown" | "Salmon" | "SandyBrown" | "SeaGreen" | "SeaShell" | "Sienna" | "Silver" | "SkyBlue" | "SlateBlue" | "SlateGray" | "Snow" | "SpringGreen" | "SteelBlue" | "Tan" | "Teal" | "Thistle" | "Tomato" | "Transparent" | "Turquoise" | "Violet" | "Wheat" | "White" | "WhiteSmoke" | "Yellow" | "YellowGreen" | Bind;

/** Property BackgroundColor of Type Color */
public backgroundColor?: ColorItem | string | null | Bind;

/** Property BadgeAnimation of Type IBadgeAnimation */
public badgeAnimation?: any;

/** Property BadgePosition of Type BadgePosition */
public badgePosition?: "TopLeft" | "TopRight" | "BottomLeft" | "BottomRight" | Bind;

/** Property BindingContext of Type Object */
public bindingContext?: any;

/** Property BorderColor of Type Color */
public borderColor?: ColorItem | string | null | Bind;

/** Property CascadeInputTransparent of Type Boolean */
public cascadeInputTransparent?: boolean | Bind;

/** Property class of Type IList`1 */
public class?: any;

/** Property ClassId of Type String */
public classId?: string | null | Bind;

/** Property Clip of Type Geometry */
public clip?: any;

/** Property Content of Type View */
public content?: any;

/** Property ControlTemplate of Type ControlTemplate */
public controlTemplate?: any;

/** Property DisableLayout of Type Boolean */
public disableLayout?: boolean | Bind;

/** Property Dispatcher of Type IDispatcher */
public dispatcher?: any;

/** Property EffectControlProvider of Type IEffectControlProvider */
public effectControlProvider?: any;

/** Property FlowDirection of Type FlowDirection */
public flowDirection?: "MatchParent" | "LeftToRight" | "RightToLeft" | Bind;

/** Property FontAttributes of Type FontAttributes */
public fontAttributes?: "None" | "Bold" | "Italic" | Bind;

/** Property FontFamily of Type String */
public fontFamily?: string | null | Bind;

/** Property FontSize of Type Double */
public fontSize?: number | Bind;

/** Property HasShadow of Type Boolean */
public hasShadow?: boolean | Bind;

/** Property HeightRequest of Type Double */
public heightRequest?: number | Bind;

/** Property HorizontalOptions of Type LayoutOptions */
public horizontalOptions?: "Start" | "Center" | "End" | "Fill" | "StartAndExpand" | "CenterAndExpand" | "EndAndExpand" | "FillAndExpand" | Bind;

/** Property InputTransparent of Type Boolean */
public inputTransparent?: boolean | Bind;

/** Property IsAnimated of Type Boolean */
public isAnimated?: boolean | Bind;

/** Property IsClippedToBounds of Type Boolean */
public isClippedToBounds?: boolean | Bind;

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

/** Property Margin of Type Thickness */
public margin?: /*Thickness*/ any;

/** Property MinimumHeightRequest of Type Double */
public minimumHeightRequest?: number | Bind;

/** Property MinimumWidthRequest of Type Double */
public minimumWidthRequest?: number | Bind;

/** Property Navigation of Type INavigation */
public navigation?: any;

/** Property Opacity of Type Double */
public opacity?: number | Bind;

/** Property Padding of Type Thickness */
public padding?: /*Thickness*/ any;

/** Property Parent of Type Element */
public parent?: any;

/** Property Platform of Type IPlatform */
public platform?: any;

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

/** Property Style of Type Style */
public style?: any;

/** Property StyleClass of Type IList`1 */
public styleClass?: any;

/** Property StyleId of Type String */
public styleId?: string | null | Bind;

/** Property TabIndex of Type Int32 */
public tabIndex?: number | Bind;

/** Property Text of Type String */
public text?: string | null | Bind;

/** Property TextColor of Type Color */
public textColor?: ColorItem | string | null | Bind;

/** Property TranslationX of Type Double */
public translationX?: number | Bind;

/** Property TranslationY of Type Double */
public translationY?: number | Bind;

/** Property VerticalOptions of Type LayoutOptions */
public verticalOptions?: "Start" | "Center" | "End" | "Fill" | "StartAndExpand" | "CenterAndExpand" | "EndAndExpand" | "FillAndExpand" | Bind;

/** Property Visual of Type IVisual */
public visual?: /*IVisual*/ any;

/** Property WidthRequest of Type Double */
public widthRequest?: number | Bind;
}


declare class CameraView extends RootObject {
    
    
/** Property CameraView.Background of Type Xamarin.Forms.Brush */
public static background: NodeFactory;;

/** Property CameraView.Behaviors of Type Xamarin.Forms.Behavior */
public static behaviors: NodeFactory;;

/** Property CameraView.Clip of Type Xamarin.Forms.Shapes.Geometry */
public static clip: NodeFactory;;

/** Property CameraView.Effects of Type Xamarin.Forms.Effect */
public static effects: NodeFactory;;

/** Property CameraView.GestureRecognizers of Type Xamarin.Forms.IGestureRecognizer */
public static gestureRecognizers: NodeFactory;;

/** Property CameraView.Menu of Type Xamarin.Forms.Menu */
public static menu: NodeFactory;;

/** Property CameraView.Resources of Type System.Collections.Generic.KeyValuePair`2[System.String,System.Object] */
public static resources: NodeFactory;;

/** Property CameraView.StyleClass of Type System.String */
public static styleClass: NodeFactory;;

/** Property CameraView.Triggers of Type Xamarin.Forms.TriggerBase */
public static triggers: NodeFactory;
    
    
/** Property AnchorX of Type Double */
public anchorX?: number | Bind;

/** Property AnchorY of Type Double */
public anchorY?: number | Bind;

/** Property AutomationId of Type String */
public automationId?: string | null | Bind;

/** Property Background of Type Brush */
public background?: "AliceBlue" | "AntiqueWhite" | "Aqua" | "Aquamarine" | "Azure" | "Beige" | "Bisque" | "Black" | "BlanchedAlmond" | "Blue" | "BlueViolet" | "Brown" | "BurlyWood" | "CadetBlue" | "Chartreuse" | "Chocolate" | "Coral" | "CornflowerBlue" | "Cornsilk" | "Crimson" | "Cyan" | "DarkBlue" | "DarkCyan" | "DarkGoldenrod" | "DarkGray" | "DarkGreen" | "DarkKhaki" | "DarkMagenta" | "DarkOliveGreen" | "DarkOrange" | "DarkOrchid" | "DarkRed" | "DarkSalmon" | "DarkSeaGreen" | "DarkSlateBlue" | "DarkSlateGray" | "DarkTurquoise" | "DarkViolet" | "DeepPink" | "DeepSkyBlue" | "DimGray" | "DodgerBlue" | "Firebrick" | "FloralWhite" | "ForestGreen" | "Fuchsia" | "Gainsboro" | "GhostWhite" | "Gold" | "Goldenrod" | "Gray" | "Green" | "GreenYellow" | "Honeydew" | "HotPink" | "IndianRed" | "Indigo" | "Ivory" | "Khaki" | "Lavender" | "LavenderBlush" | "LawnGreen" | "LemonChiffon" | "LightBlue" | "LightCoral" | "LightCyan" | "LightGoldenrodYellow" | "LightGray" | "LightGreen" | "LightPink" | "LightSalmon" | "LightSeaGreen" | "LightSkyBlue" | "LightSlateGray" | "LightSteelBlue" | "LightYellow" | "Lime" | "LimeGreen" | "Linen" | "Magenta" | "Maroon" | "MediumAquamarine" | "MediumBlue" | "MediumOrchid" | "MediumPurple" | "MediumSeaGreen" | "MediumSlateBlue" | "MediumSpringGreen" | "MediumTurquoise" | "MediumVioletRed" | "MidnightBlue" | "MintCream" | "MistyRose" | "Moccasin" | "NavajoWhite" | "Navy" | "OldLace" | "Olive" | "OliveDrab" | "Orange" | "OrangeRed" | "Orchid" | "PaleGoldenrod" | "PaleGreen" | "PaleTurquoise" | "PaleVioletRed" | "PapayaWhip" | "PeachPuff" | "Peru" | "Pink" | "Plum" | "PowderBlue" | "Purple" | "Red" | "RosyBrown" | "RoyalBlue" | "SaddleBrown" | "Salmon" | "SandyBrown" | "SeaGreen" | "SeaShell" | "Sienna" | "Silver" | "SkyBlue" | "SlateBlue" | "SlateGray" | "Snow" | "SpringGreen" | "SteelBlue" | "Tan" | "Teal" | "Thistle" | "Tomato" | "Transparent" | "Turquoise" | "Violet" | "Wheat" | "White" | "WhiteSmoke" | "Yellow" | "YellowGreen" | Bind;

/** Property BackgroundColor of Type Color */
public backgroundColor?: ColorItem | string | null | Bind;

/** Property BindingContext of Type Object */
public bindingContext?: any;

/** Property CameraOptions of Type CameraOptions */
public cameraOptions?: "Default" | "Front" | "Back" | "External" | Bind;

/** Property CaptureMode of Type CameraCaptureMode */
public captureMode?: "Default" | "Photo" | "Video" | Bind;

/** Property class of Type IList`1 */
public class?: any;

/** Property ClassId of Type String */
public classId?: string | null | Bind;

/** Property Clip of Type Geometry */
public clip?: any;

/** Property DisableLayout of Type Boolean */
public disableLayout?: boolean | Bind;

/** Property Dispatcher of Type IDispatcher */
public dispatcher?: any;

/** Property EffectControlProvider of Type IEffectControlProvider */
public effectControlProvider?: any;

/** Property FlashMode of Type CameraFlashMode */
public flashMode?: "Off" | "On" | "Auto" | "Torch" | Bind;

/** Property FlowDirection of Type FlowDirection */
public flowDirection?: "MatchParent" | "LeftToRight" | "RightToLeft" | Bind;

/** Property HeightRequest of Type Double */
public heightRequest?: number | Bind;

/** Property HorizontalOptions of Type LayoutOptions */
public horizontalOptions?: "Start" | "Center" | "End" | "Fill" | "StartAndExpand" | "CenterAndExpand" | "EndAndExpand" | "FillAndExpand" | Bind;

/** Property InputTransparent of Type Boolean */
public inputTransparent?: boolean | Bind;

/** Property IsAvailable of Type Boolean */
public isAvailable?: boolean | Bind;

/** Property IsBusy of Type Boolean */
public isBusy?: boolean | Bind;

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

/** Property Margin of Type Thickness */
public margin?: /*Thickness*/ any;

/** Property MaxZoom of Type Double */
public maxZoom?: number | Bind;

/** Property MinimumHeightRequest of Type Double */
public minimumHeightRequest?: number | Bind;

/** Property MinimumWidthRequest of Type Double */
public minimumWidthRequest?: number | Bind;

/** Property Navigation of Type INavigation */
public navigation?: any;

/** Property Opacity of Type Double */
public opacity?: number | Bind;

/** Property Parent of Type Element */
public parent?: any;

/** Property Platform of Type IPlatform */
public platform?: any;

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

/** Property Style of Type Style */
public style?: any;

/** Property StyleClass of Type IList`1 */
public styleClass?: any;

/** Property StyleId of Type String */
public styleId?: string | null | Bind;

/** Property TabIndex of Type Int32 */
public tabIndex?: number | Bind;

/** Property TranslationX of Type Double */
public translationX?: number | Bind;

/** Property TranslationY of Type Double */
public translationY?: number | Bind;

/** Property VerticalOptions of Type LayoutOptions */
public verticalOptions?: "Start" | "Center" | "End" | "Fill" | "StartAndExpand" | "CenterAndExpand" | "EndAndExpand" | "FillAndExpand" | Bind;

/** Property VideoStabilization of Type Boolean */
public videoStabilization?: boolean | Bind;

/** Property Visual of Type IVisual */
public visual?: /*IVisual*/ any;

/** Property WidthRequest of Type Double */
public widthRequest?: number | Bind;

/** Property Zoom of Type Double */
public zoom?: number | Bind;
}


declare class DockLayout extends RootObject {
    
/** Attached Property DockLayout.Dock of Type BindableProperty*/
public static dock: AttachedNode;

    
/** Property DockLayout.Background of Type Xamarin.Forms.Brush */
public static background: NodeFactory;;

/** Property DockLayout.Behaviors of Type Xamarin.Forms.Behavior */
public static behaviors: NodeFactory;;

/** Property DockLayout.Children of Type Xamarin.Forms.View */
public static children: NodeFactory;;

/** Property DockLayout.Clip of Type Xamarin.Forms.Shapes.Geometry */
public static clip: NodeFactory;;

/** Property DockLayout.Effects of Type Xamarin.Forms.Effect */
public static effects: NodeFactory;;

/** Property DockLayout.GestureRecognizers of Type Xamarin.Forms.IGestureRecognizer */
public static gestureRecognizers: NodeFactory;;

/** Property DockLayout.Menu of Type Xamarin.Forms.Menu */
public static menu: NodeFactory;;

/** Property DockLayout.Resources of Type System.Collections.Generic.KeyValuePair`2[System.String,System.Object] */
public static resources: NodeFactory;;

/** Property DockLayout.StyleClass of Type System.String */
public static styleClass: NodeFactory;;

/** Property DockLayout.Triggers of Type Xamarin.Forms.TriggerBase */
public static triggers: NodeFactory;
    
    
/** Property AnchorX of Type Double */
public anchorX?: number | Bind;

/** Property AnchorY of Type Double */
public anchorY?: number | Bind;

/** Property AutomationId of Type String */
public automationId?: string | null | Bind;

/** Property Background of Type Brush */
public background?: "AliceBlue" | "AntiqueWhite" | "Aqua" | "Aquamarine" | "Azure" | "Beige" | "Bisque" | "Black" | "BlanchedAlmond" | "Blue" | "BlueViolet" | "Brown" | "BurlyWood" | "CadetBlue" | "Chartreuse" | "Chocolate" | "Coral" | "CornflowerBlue" | "Cornsilk" | "Crimson" | "Cyan" | "DarkBlue" | "DarkCyan" | "DarkGoldenrod" | "DarkGray" | "DarkGreen" | "DarkKhaki" | "DarkMagenta" | "DarkOliveGreen" | "DarkOrange" | "DarkOrchid" | "DarkRed" | "DarkSalmon" | "DarkSeaGreen" | "DarkSlateBlue" | "DarkSlateGray" | "DarkTurquoise" | "DarkViolet" | "DeepPink" | "DeepSkyBlue" | "DimGray" | "DodgerBlue" | "Firebrick" | "FloralWhite" | "ForestGreen" | "Fuchsia" | "Gainsboro" | "GhostWhite" | "Gold" | "Goldenrod" | "Gray" | "Green" | "GreenYellow" | "Honeydew" | "HotPink" | "IndianRed" | "Indigo" | "Ivory" | "Khaki" | "Lavender" | "LavenderBlush" | "LawnGreen" | "LemonChiffon" | "LightBlue" | "LightCoral" | "LightCyan" | "LightGoldenrodYellow" | "LightGray" | "LightGreen" | "LightPink" | "LightSalmon" | "LightSeaGreen" | "LightSkyBlue" | "LightSlateGray" | "LightSteelBlue" | "LightYellow" | "Lime" | "LimeGreen" | "Linen" | "Magenta" | "Maroon" | "MediumAquamarine" | "MediumBlue" | "MediumOrchid" | "MediumPurple" | "MediumSeaGreen" | "MediumSlateBlue" | "MediumSpringGreen" | "MediumTurquoise" | "MediumVioletRed" | "MidnightBlue" | "MintCream" | "MistyRose" | "Moccasin" | "NavajoWhite" | "Navy" | "OldLace" | "Olive" | "OliveDrab" | "Orange" | "OrangeRed" | "Orchid" | "PaleGoldenrod" | "PaleGreen" | "PaleTurquoise" | "PaleVioletRed" | "PapayaWhip" | "PeachPuff" | "Peru" | "Pink" | "Plum" | "PowderBlue" | "Purple" | "Red" | "RosyBrown" | "RoyalBlue" | "SaddleBrown" | "Salmon" | "SandyBrown" | "SeaGreen" | "SeaShell" | "Sienna" | "Silver" | "SkyBlue" | "SlateBlue" | "SlateGray" | "Snow" | "SpringGreen" | "SteelBlue" | "Tan" | "Teal" | "Thistle" | "Tomato" | "Transparent" | "Turquoise" | "Violet" | "Wheat" | "White" | "WhiteSmoke" | "Yellow" | "YellowGreen" | Bind;

/** Property BackgroundColor of Type Color */
public backgroundColor?: ColorItem | string | null | Bind;

/** Property BindingContext of Type Object */
public bindingContext?: any;

/** Property CascadeInputTransparent of Type Boolean */
public cascadeInputTransparent?: boolean | Bind;

/** Property class of Type IList`1 */
public class?: any;

/** Property ClassId of Type String */
public classId?: string | null | Bind;

/** Property Clip of Type Geometry */
public clip?: any;

/** Property DisableLayout of Type Boolean */
public disableLayout?: boolean | Bind;

/** Property Dispatcher of Type IDispatcher */
public dispatcher?: any;

/** Property Dock of Type Dock */
public dock?: "Left" | "Top" | "Right" | "Bottom" | Bind;

/** Property EffectControlProvider of Type IEffectControlProvider */
public effectControlProvider?: any;

/** Property FlowDirection of Type FlowDirection */
public flowDirection?: "MatchParent" | "LeftToRight" | "RightToLeft" | Bind;

/** Property HeightRequest of Type Double */
public heightRequest?: number | Bind;

/** Property HorizontalOptions of Type LayoutOptions */
public horizontalOptions?: "Start" | "Center" | "End" | "Fill" | "StartAndExpand" | "CenterAndExpand" | "EndAndExpand" | "FillAndExpand" | Bind;

/** Property InputTransparent of Type Boolean */
public inputTransparent?: boolean | Bind;

/** Property IsClippedToBounds of Type Boolean */
public isClippedToBounds?: boolean | Bind;

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

/** Property LastChildFill of Type Boolean */
public lastChildFill?: boolean | Bind;

/** Property Margin of Type Thickness */
public margin?: /*Thickness*/ any;

/** Property MinimumHeightRequest of Type Double */
public minimumHeightRequest?: number | Bind;

/** Property MinimumWidthRequest of Type Double */
public minimumWidthRequest?: number | Bind;

/** Property Navigation of Type INavigation */
public navigation?: any;

/** Property Opacity of Type Double */
public opacity?: number | Bind;

/** Property Padding of Type Thickness */
public padding?: /*Thickness*/ any;

/** Property Parent of Type Element */
public parent?: any;

/** Property Platform of Type IPlatform */
public platform?: any;

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

/** Property Style of Type Style */
public style?: any;

/** Property StyleClass of Type IList`1 */
public styleClass?: any;

/** Property StyleId of Type String */
public styleId?: string | null | Bind;

/** Property TabIndex of Type Int32 */
public tabIndex?: number | Bind;

/** Property TranslationX of Type Double */
public translationX?: number | Bind;

/** Property TranslationY of Type Double */
public translationY?: number | Bind;

/** Property VerticalOptions of Type LayoutOptions */
public verticalOptions?: "Start" | "Center" | "End" | "Fill" | "StartAndExpand" | "CenterAndExpand" | "EndAndExpand" | "FillAndExpand" | Bind;

/** Property Visual of Type IVisual */
public visual?: /*IVisual*/ any;

/** Property WidthRequest of Type Double */
public widthRequest?: number | Bind;
}


declare class Expander extends RootObject {
    
    
/** Property Expander.Background of Type Xamarin.Forms.Brush */
public static background: NodeFactory;;

/** Property Expander.Behaviors of Type Xamarin.Forms.Behavior */
public static behaviors: NodeFactory;;

/** Property Expander.Clip of Type Xamarin.Forms.Shapes.Geometry */
public static clip: NodeFactory;;

/** Property Expander.Content of Type Xamarin.Forms.View */
public static content: NodeFactory;;

/** Property Expander.ContentTemplate of Type Xamarin.Forms.DataTemplate */
public static contentTemplate: NodeFactory;;

/** Property Expander.ControlTemplate of Type Xamarin.Forms.ControlTemplate */
public static controlTemplate: NodeFactory;;

/** Property Expander.Effects of Type Xamarin.Forms.Effect */
public static effects: NodeFactory;;

/** Property Expander.GestureRecognizers of Type Xamarin.Forms.IGestureRecognizer */
public static gestureRecognizers: NodeFactory;;

/** Property Expander.Header of Type Xamarin.Forms.View */
public static header: NodeFactory;;

/** Property Expander.Menu of Type Xamarin.Forms.Menu */
public static menu: NodeFactory;;

/** Property Expander.Resources of Type System.Collections.Generic.KeyValuePair`2[System.String,System.Object] */
public static resources: NodeFactory;;

/** Property Expander.StyleClass of Type System.String */
public static styleClass: NodeFactory;;

/** Property Expander.Triggers of Type Xamarin.Forms.TriggerBase */
public static triggers: NodeFactory;
    
    
/** Property AnchorX of Type Double */
public anchorX?: number | Bind;

/** Property AnchorY of Type Double */
public anchorY?: number | Bind;

/** Property AutomationId of Type String */
public automationId?: string | null | Bind;

/** Property Background of Type Brush */
public background?: "AliceBlue" | "AntiqueWhite" | "Aqua" | "Aquamarine" | "Azure" | "Beige" | "Bisque" | "Black" | "BlanchedAlmond" | "Blue" | "BlueViolet" | "Brown" | "BurlyWood" | "CadetBlue" | "Chartreuse" | "Chocolate" | "Coral" | "CornflowerBlue" | "Cornsilk" | "Crimson" | "Cyan" | "DarkBlue" | "DarkCyan" | "DarkGoldenrod" | "DarkGray" | "DarkGreen" | "DarkKhaki" | "DarkMagenta" | "DarkOliveGreen" | "DarkOrange" | "DarkOrchid" | "DarkRed" | "DarkSalmon" | "DarkSeaGreen" | "DarkSlateBlue" | "DarkSlateGray" | "DarkTurquoise" | "DarkViolet" | "DeepPink" | "DeepSkyBlue" | "DimGray" | "DodgerBlue" | "Firebrick" | "FloralWhite" | "ForestGreen" | "Fuchsia" | "Gainsboro" | "GhostWhite" | "Gold" | "Goldenrod" | "Gray" | "Green" | "GreenYellow" | "Honeydew" | "HotPink" | "IndianRed" | "Indigo" | "Ivory" | "Khaki" | "Lavender" | "LavenderBlush" | "LawnGreen" | "LemonChiffon" | "LightBlue" | "LightCoral" | "LightCyan" | "LightGoldenrodYellow" | "LightGray" | "LightGreen" | "LightPink" | "LightSalmon" | "LightSeaGreen" | "LightSkyBlue" | "LightSlateGray" | "LightSteelBlue" | "LightYellow" | "Lime" | "LimeGreen" | "Linen" | "Magenta" | "Maroon" | "MediumAquamarine" | "MediumBlue" | "MediumOrchid" | "MediumPurple" | "MediumSeaGreen" | "MediumSlateBlue" | "MediumSpringGreen" | "MediumTurquoise" | "MediumVioletRed" | "MidnightBlue" | "MintCream" | "MistyRose" | "Moccasin" | "NavajoWhite" | "Navy" | "OldLace" | "Olive" | "OliveDrab" | "Orange" | "OrangeRed" | "Orchid" | "PaleGoldenrod" | "PaleGreen" | "PaleTurquoise" | "PaleVioletRed" | "PapayaWhip" | "PeachPuff" | "Peru" | "Pink" | "Plum" | "PowderBlue" | "Purple" | "Red" | "RosyBrown" | "RoyalBlue" | "SaddleBrown" | "Salmon" | "SandyBrown" | "SeaGreen" | "SeaShell" | "Sienna" | "Silver" | "SkyBlue" | "SlateBlue" | "SlateGray" | "Snow" | "SpringGreen" | "SteelBlue" | "Tan" | "Teal" | "Thistle" | "Tomato" | "Transparent" | "Turquoise" | "Violet" | "Wheat" | "White" | "WhiteSmoke" | "Yellow" | "YellowGreen" | Bind;

/** Property BackgroundColor of Type Color */
public backgroundColor?: ColorItem | string | null | Bind;

/** Property BindingContext of Type Object */
public bindingContext?: any;

/** Property CascadeInputTransparent of Type Boolean */
public cascadeInputTransparent?: boolean | Bind;

/** Property class of Type IList`1 */
public class?: any;

/** Property ClassId of Type String */
public classId?: string | null | Bind;

/** Property Clip of Type Geometry */
public clip?: any;

/** Property CollapseAnimationEasing of Type Easing */
public collapseAnimationEasing?: "Linear" | "SinOut" | "SinIn" | "SinInOut" | "CubicIn" | "CubicOut" | "CubicInOut" | "BounceOut" | "BounceIn" | "SpringIn" | "SpringOut" | Bind;

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

/** Property ControlTemplate of Type ControlTemplate */
public controlTemplate?: any;

/** Property Direction of Type ExpandDirection */
public direction?: "Down" | "Up" | "Left" | "Right" | Bind;

/** Property DisableLayout of Type Boolean */
public disableLayout?: boolean | Bind;

/** Property Dispatcher of Type IDispatcher */
public dispatcher?: any;

/** Property EffectControlProvider of Type IEffectControlProvider */
public effectControlProvider?: any;

/** Property ExpandAnimationEasing of Type Easing */
public expandAnimationEasing?: "Linear" | "SinOut" | "SinIn" | "SinInOut" | "CubicIn" | "CubicOut" | "CubicInOut" | "BounceOut" | "BounceIn" | "SpringIn" | "SpringOut" | Bind;

/** Property ExpandAnimationLength of Type UInt32 */
public expandAnimationLength?: any;

/** Property FlowDirection of Type FlowDirection */
public flowDirection?: "MatchParent" | "LeftToRight" | "RightToLeft" | Bind;

/** Property ForceUpdateSizeCommand of Type ICommand */
public forceUpdateSizeCommand?: any;

/** Property Header of Type View */
public header?: any;

/** Property HeightRequest of Type Double */
public heightRequest?: number | Bind;

/** Property HorizontalOptions of Type LayoutOptions */
public horizontalOptions?: "Start" | "Center" | "End" | "Fill" | "StartAndExpand" | "CenterAndExpand" | "EndAndExpand" | "FillAndExpand" | Bind;

/** Property InputTransparent of Type Boolean */
public inputTransparent?: boolean | Bind;

/** Property IsClippedToBounds of Type Boolean */
public isClippedToBounds?: boolean | Bind;

/** Property IsEnabled of Type Boolean */
public isEnabled?: boolean | Bind;

/** Property IsExpanded of Type Boolean */
public isExpanded?: boolean | Bind;

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

/** Property Margin of Type Thickness */
public margin?: /*Thickness*/ any;

/** Property MinimumHeightRequest of Type Double */
public minimumHeightRequest?: number | Bind;

/** Property MinimumWidthRequest of Type Double */
public minimumWidthRequest?: number | Bind;

/** Property Navigation of Type INavigation */
public navigation?: any;

/** Property Opacity of Type Double */
public opacity?: number | Bind;

/** Property Padding of Type Thickness */
public padding?: /*Thickness*/ any;

/** Property Parent of Type Element */
public parent?: any;

/** Property Platform of Type IPlatform */
public platform?: any;

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

/** Property State of Type ExpandState */
public state?: "Expanding" | "Expanded" | "Collapsing" | "Collapsed" | Bind;

/** Property Style of Type Style */
public style?: any;

/** Property StyleClass of Type IList`1 */
public styleClass?: any;

/** Property StyleId of Type String */
public styleId?: string | null | Bind;

/** Property TabIndex of Type Int32 */
public tabIndex?: number | Bind;

/** Property TranslationX of Type Double */
public translationX?: number | Bind;

/** Property TranslationY of Type Double */
public translationY?: number | Bind;

/** Property VerticalOptions of Type LayoutOptions */
public verticalOptions?: "Start" | "Center" | "End" | "Fill" | "StartAndExpand" | "CenterAndExpand" | "EndAndExpand" | "FillAndExpand" | Bind;

/** Property Visual of Type IVisual */
public visual?: /*IVisual*/ any;

/** Property WidthRequest of Type Double */
public widthRequest?: number | Bind;
}


declare class GravatarImageSource extends RootObject {
    
    
/** Property GravatarImageSource.Effects of Type Xamarin.Forms.Effect */
public static effects: NodeFactory;;

/** Property GravatarImageSource.Menu of Type Xamarin.Forms.Menu */
public static menu: NodeFactory;
    
    
/** Property AutomationId of Type String */
public automationId?: string | null | Bind;

/** Property BindingContext of Type Object */
public bindingContext?: any;

/** Property CacheValidity of Type TimeSpan */
public cacheValidity?: any;

/** Property CachingEnabled of Type Boolean */
public cachingEnabled?: boolean | Bind;

/** Property ClassId of Type String */
public classId?: string | null | Bind;

/** Property Default of Type DefaultGravatar */
public default?: "FileNotFound" | "MysteryPerson" | "Identicon" | "MonsterId" | "Wavatar" | "Retro" | "Robohash" | "Blank" | Bind;

/** Property Dispatcher of Type IDispatcher */
public dispatcher?: any;

/** Property EffectControlProvider of Type IEffectControlProvider */
public effectControlProvider?: any;

/** Property Email of Type String */
public email?: string | null | Bind;

/** Property Parent of Type Element */
public parent?: any;

/** Property Platform of Type IPlatform */
public platform?: any;

/** Property Size of Type Int32 */
public size?: number | Bind;

/** Property StyleId of Type String */
public styleId?: string | null | Bind;
}


declare class MediaElement extends RootObject {
    
    
/** Property MediaElement.Background of Type Xamarin.Forms.Brush */
public static background: NodeFactory;;

/** Property MediaElement.Behaviors of Type Xamarin.Forms.Behavior */
public static behaviors: NodeFactory;;

/** Property MediaElement.Clip of Type Xamarin.Forms.Shapes.Geometry */
public static clip: NodeFactory;;

/** Property MediaElement.Effects of Type Xamarin.Forms.Effect */
public static effects: NodeFactory;;

/** Property MediaElement.GestureRecognizers of Type Xamarin.Forms.IGestureRecognizer */
public static gestureRecognizers: NodeFactory;;

/** Property MediaElement.Menu of Type Xamarin.Forms.Menu */
public static menu: NodeFactory;;

/** Property MediaElement.Resources of Type System.Collections.Generic.KeyValuePair`2[System.String,System.Object] */
public static resources: NodeFactory;;

/** Property MediaElement.Source of Type Xamarin.CommunityToolkit.Core.MediaSource */
public static source: NodeFactory;;

/** Property MediaElement.StyleClass of Type System.String */
public static styleClass: NodeFactory;;

/** Property MediaElement.Triggers of Type Xamarin.Forms.TriggerBase */
public static triggers: NodeFactory;
    
    
/** Property AnchorX of Type Double */
public anchorX?: number | Bind;

/** Property AnchorY of Type Double */
public anchorY?: number | Bind;

/** Property Aspect of Type Aspect */
public aspect?: "AspectFit" | "AspectFill" | "Fill" | Bind;

/** Property AutomationId of Type String */
public automationId?: string | null | Bind;

/** Property AutoPlay of Type Boolean */
public autoPlay?: boolean | Bind;

/** Property Background of Type Brush */
public background?: "AliceBlue" | "AntiqueWhite" | "Aqua" | "Aquamarine" | "Azure" | "Beige" | "Bisque" | "Black" | "BlanchedAlmond" | "Blue" | "BlueViolet" | "Brown" | "BurlyWood" | "CadetBlue" | "Chartreuse" | "Chocolate" | "Coral" | "CornflowerBlue" | "Cornsilk" | "Crimson" | "Cyan" | "DarkBlue" | "DarkCyan" | "DarkGoldenrod" | "DarkGray" | "DarkGreen" | "DarkKhaki" | "DarkMagenta" | "DarkOliveGreen" | "DarkOrange" | "DarkOrchid" | "DarkRed" | "DarkSalmon" | "DarkSeaGreen" | "DarkSlateBlue" | "DarkSlateGray" | "DarkTurquoise" | "DarkViolet" | "DeepPink" | "DeepSkyBlue" | "DimGray" | "DodgerBlue" | "Firebrick" | "FloralWhite" | "ForestGreen" | "Fuchsia" | "Gainsboro" | "GhostWhite" | "Gold" | "Goldenrod" | "Gray" | "Green" | "GreenYellow" | "Honeydew" | "HotPink" | "IndianRed" | "Indigo" | "Ivory" | "Khaki" | "Lavender" | "LavenderBlush" | "LawnGreen" | "LemonChiffon" | "LightBlue" | "LightCoral" | "LightCyan" | "LightGoldenrodYellow" | "LightGray" | "LightGreen" | "LightPink" | "LightSalmon" | "LightSeaGreen" | "LightSkyBlue" | "LightSlateGray" | "LightSteelBlue" | "LightYellow" | "Lime" | "LimeGreen" | "Linen" | "Magenta" | "Maroon" | "MediumAquamarine" | "MediumBlue" | "MediumOrchid" | "MediumPurple" | "MediumSeaGreen" | "MediumSlateBlue" | "MediumSpringGreen" | "MediumTurquoise" | "MediumVioletRed" | "MidnightBlue" | "MintCream" | "MistyRose" | "Moccasin" | "NavajoWhite" | "Navy" | "OldLace" | "Olive" | "OliveDrab" | "Orange" | "OrangeRed" | "Orchid" | "PaleGoldenrod" | "PaleGreen" | "PaleTurquoise" | "PaleVioletRed" | "PapayaWhip" | "PeachPuff" | "Peru" | "Pink" | "Plum" | "PowderBlue" | "Purple" | "Red" | "RosyBrown" | "RoyalBlue" | "SaddleBrown" | "Salmon" | "SandyBrown" | "SeaGreen" | "SeaShell" | "Sienna" | "Silver" | "SkyBlue" | "SlateBlue" | "SlateGray" | "Snow" | "SpringGreen" | "SteelBlue" | "Tan" | "Teal" | "Thistle" | "Tomato" | "Transparent" | "Turquoise" | "Violet" | "Wheat" | "White" | "WhiteSmoke" | "Yellow" | "YellowGreen" | Bind;

/** Property BackgroundColor of Type Color */
public backgroundColor?: ColorItem | string | null | Bind;

/** Property BindingContext of Type Object */
public bindingContext?: any;

/** Property class of Type IList`1 */
public class?: any;

/** Property ClassId of Type String */
public classId?: string | null | Bind;

/** Property Clip of Type Geometry */
public clip?: any;

/** Property DisableLayout of Type Boolean */
public disableLayout?: boolean | Bind;

/** Property Dispatcher of Type IDispatcher */
public dispatcher?: any;

/** Property EffectControlProvider of Type IEffectControlProvider */
public effectControlProvider?: any;

/** Property FlowDirection of Type FlowDirection */
public flowDirection?: "MatchParent" | "LeftToRight" | "RightToLeft" | Bind;

/** Property HeightRequest of Type Double */
public heightRequest?: number | Bind;

/** Property HorizontalOptions of Type LayoutOptions */
public horizontalOptions?: "Start" | "Center" | "End" | "Fill" | "StartAndExpand" | "CenterAndExpand" | "EndAndExpand" | "FillAndExpand" | Bind;

/** Property InputTransparent of Type Boolean */
public inputTransparent?: boolean | Bind;

/** Property IsEnabled of Type Boolean */
public isEnabled?: boolean | Bind;

/** Property IsInNativeLayout of Type Boolean */
public isInNativeLayout?: boolean | Bind;

/** Property IsLooping of Type Boolean */
public isLooping?: boolean | Bind;

/** Property IsNativeStateConsistent of Type Boolean */
public isNativeStateConsistent?: boolean | Bind;

/** Property IsPlatformEnabled of Type Boolean */
public isPlatformEnabled?: boolean | Bind;

/** Property IsTabStop of Type Boolean */
public isTabStop?: boolean | Bind;

/** Property IsVisible of Type Boolean */
public isVisible?: boolean | Bind;

/** Property KeepScreenOn of Type Boolean */
public keepScreenOn?: boolean | Bind;

/** Property Margin of Type Thickness */
public margin?: /*Thickness*/ any;

/** Property MinimumHeightRequest of Type Double */
public minimumHeightRequest?: number | Bind;

/** Property MinimumWidthRequest of Type Double */
public minimumWidthRequest?: number | Bind;

/** Property Navigation of Type INavigation */
public navigation?: any;

/** Property Opacity of Type Double */
public opacity?: number | Bind;

/** Property Parent of Type Element */
public parent?: any;

/** Property Platform of Type IPlatform */
public platform?: any;

/** Property Position of Type TimeSpan */
public position?: any;

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

/** Property ShowsPlaybackControls of Type Boolean */
public showsPlaybackControls?: boolean | Bind;

/** Property Source of Type MediaSource */
public source?: any;

/** Property Style of Type Style */
public style?: any;

/** Property StyleClass of Type IList`1 */
public styleClass?: any;

/** Property StyleId of Type String */
public styleId?: string | null | Bind;

/** Property TabIndex of Type Int32 */
public tabIndex?: number | Bind;

/** Property TranslationX of Type Double */
public translationX?: number | Bind;

/** Property TranslationY of Type Double */
public translationY?: number | Bind;

/** Property VerticalOptions of Type LayoutOptions */
public verticalOptions?: "Start" | "Center" | "End" | "Fill" | "StartAndExpand" | "CenterAndExpand" | "EndAndExpand" | "FillAndExpand" | Bind;

/** Property Visual of Type IVisual */
public visual?: /*IVisual*/ any;

/** Property Volume of Type Double */
public volume?: number | Bind;

/** Property WidthRequest of Type Double */
public widthRequest?: number | Bind;
}


declare class RangeSlider extends RootObject {
    
    
/** Property RangeSlider.Background of Type Xamarin.Forms.Brush */
public static background: NodeFactory;;

/** Property RangeSlider.Behaviors of Type Xamarin.Forms.Behavior */
public static behaviors: NodeFactory;;

/** Property RangeSlider.Clip of Type Xamarin.Forms.Shapes.Geometry */
public static clip: NodeFactory;;

/** Property RangeSlider.ControlTemplate of Type Xamarin.Forms.ControlTemplate */
public static controlTemplate: NodeFactory;;

/** Property RangeSlider.Effects of Type Xamarin.Forms.Effect */
public static effects: NodeFactory;;

/** Property RangeSlider.GestureRecognizers of Type Xamarin.Forms.IGestureRecognizer */
public static gestureRecognizers: NodeFactory;;

/** Property RangeSlider.LowerThumbView of Type Xamarin.Forms.View */
public static lowerThumbView: NodeFactory;;

/** Property RangeSlider.Menu of Type Xamarin.Forms.Menu */
public static menu: NodeFactory;;

/** Property RangeSlider.Resources of Type System.Collections.Generic.KeyValuePair`2[System.String,System.Object] */
public static resources: NodeFactory;;

/** Property RangeSlider.StyleClass of Type System.String */
public static styleClass: NodeFactory;;

/** Property RangeSlider.Triggers of Type Xamarin.Forms.TriggerBase */
public static triggers: NodeFactory;;

/** Property RangeSlider.UpperThumbView of Type Xamarin.Forms.View */
public static upperThumbView: NodeFactory;
    
    
/** Property AnchorX of Type Double */
public anchorX?: number | Bind;

/** Property AnchorY of Type Double */
public anchorY?: number | Bind;

/** Property AutomationId of Type String */
public automationId?: string | null | Bind;

/** Property Background of Type Brush */
public background?: "AliceBlue" | "AntiqueWhite" | "Aqua" | "Aquamarine" | "Azure" | "Beige" | "Bisque" | "Black" | "BlanchedAlmond" | "Blue" | "BlueViolet" | "Brown" | "BurlyWood" | "CadetBlue" | "Chartreuse" | "Chocolate" | "Coral" | "CornflowerBlue" | "Cornsilk" | "Crimson" | "Cyan" | "DarkBlue" | "DarkCyan" | "DarkGoldenrod" | "DarkGray" | "DarkGreen" | "DarkKhaki" | "DarkMagenta" | "DarkOliveGreen" | "DarkOrange" | "DarkOrchid" | "DarkRed" | "DarkSalmon" | "DarkSeaGreen" | "DarkSlateBlue" | "DarkSlateGray" | "DarkTurquoise" | "DarkViolet" | "DeepPink" | "DeepSkyBlue" | "DimGray" | "DodgerBlue" | "Firebrick" | "FloralWhite" | "ForestGreen" | "Fuchsia" | "Gainsboro" | "GhostWhite" | "Gold" | "Goldenrod" | "Gray" | "Green" | "GreenYellow" | "Honeydew" | "HotPink" | "IndianRed" | "Indigo" | "Ivory" | "Khaki" | "Lavender" | "LavenderBlush" | "LawnGreen" | "LemonChiffon" | "LightBlue" | "LightCoral" | "LightCyan" | "LightGoldenrodYellow" | "LightGray" | "LightGreen" | "LightPink" | "LightSalmon" | "LightSeaGreen" | "LightSkyBlue" | "LightSlateGray" | "LightSteelBlue" | "LightYellow" | "Lime" | "LimeGreen" | "Linen" | "Magenta" | "Maroon" | "MediumAquamarine" | "MediumBlue" | "MediumOrchid" | "MediumPurple" | "MediumSeaGreen" | "MediumSlateBlue" | "MediumSpringGreen" | "MediumTurquoise" | "MediumVioletRed" | "MidnightBlue" | "MintCream" | "MistyRose" | "Moccasin" | "NavajoWhite" | "Navy" | "OldLace" | "Olive" | "OliveDrab" | "Orange" | "OrangeRed" | "Orchid" | "PaleGoldenrod" | "PaleGreen" | "PaleTurquoise" | "PaleVioletRed" | "PapayaWhip" | "PeachPuff" | "Peru" | "Pink" | "Plum" | "PowderBlue" | "Purple" | "Red" | "RosyBrown" | "RoyalBlue" | "SaddleBrown" | "Salmon" | "SandyBrown" | "SeaGreen" | "SeaShell" | "Sienna" | "Silver" | "SkyBlue" | "SlateBlue" | "SlateGray" | "Snow" | "SpringGreen" | "SteelBlue" | "Tan" | "Teal" | "Thistle" | "Tomato" | "Transparent" | "Turquoise" | "Violet" | "Wheat" | "White" | "WhiteSmoke" | "Yellow" | "YellowGreen" | Bind;

/** Property BackgroundColor of Type Color */
public backgroundColor?: ColorItem | string | null | Bind;

/** Property BindingContext of Type Object */
public bindingContext?: any;

/** Property CascadeInputTransparent of Type Boolean */
public cascadeInputTransparent?: boolean | Bind;

/** Property class of Type IList`1 */
public class?: any;

/** Property ClassId of Type String */
public classId?: string | null | Bind;

/** Property Clip of Type Geometry */
public clip?: any;

/** Property ControlTemplate of Type ControlTemplate */
public controlTemplate?: any;

/** Property DisableLayout of Type Boolean */
public disableLayout?: boolean | Bind;

/** Property Dispatcher of Type IDispatcher */
public dispatcher?: any;

/** Property EffectControlProvider of Type IEffectControlProvider */
public effectControlProvider?: any;

/** Property FlowDirection of Type FlowDirection */
public flowDirection?: "MatchParent" | "LeftToRight" | "RightToLeft" | Bind;

/** Property HeightRequest of Type Double */
public heightRequest?: number | Bind;

/** Property HorizontalOptions of Type LayoutOptions */
public horizontalOptions?: "Start" | "Center" | "End" | "Fill" | "StartAndExpand" | "CenterAndExpand" | "EndAndExpand" | "FillAndExpand" | Bind;

/** Property InputTransparent of Type Boolean */
public inputTransparent?: boolean | Bind;

/** Property IsClippedToBounds of Type Boolean */
public isClippedToBounds?: boolean | Bind;

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

/** Property LowerThumbBorderColor of Type Color */
public lowerThumbBorderColor?: ColorItem | string | null | Bind;

/** Property LowerThumbColor of Type Color */
public lowerThumbColor?: ColorItem | string | null | Bind;

/** Property LowerThumbRadius of Type Double */
public lowerThumbRadius?: number | Bind;

/** Property LowerThumbSize of Type Double */
public lowerThumbSize?: number | Bind;

/** Property LowerThumbView of Type View */
public lowerThumbView?: any;

/** Property LowerValue of Type Double */
public lowerValue?: number | Bind;

/** Property LowerValueLabelStyle of Type Style */
public lowerValueLabelStyle?: any;

/** Property Margin of Type Thickness */
public margin?: /*Thickness*/ any;

/** Property MaximumValue of Type Double */
public maximumValue?: number | Bind;

/** Property MinimumHeightRequest of Type Double */
public minimumHeightRequest?: number | Bind;

/** Property MinimumValue of Type Double */
public minimumValue?: number | Bind;

/** Property MinimumWidthRequest of Type Double */
public minimumWidthRequest?: number | Bind;

/** Property Navigation of Type INavigation */
public navigation?: any;

/** Property Opacity of Type Double */
public opacity?: number | Bind;

/** Property Padding of Type Thickness */
public padding?: /*Thickness*/ any;

/** Property Parent of Type Element */
public parent?: any;

/** Property Platform of Type IPlatform */
public platform?: any;

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

/** Property StepValue of Type Double */
public stepValue?: number | Bind;

/** Property Style of Type Style */
public style?: any;

/** Property StyleClass of Type IList`1 */
public styleClass?: any;

/** Property StyleId of Type String */
public styleId?: string | null | Bind;

/** Property TabIndex of Type Int32 */
public tabIndex?: number | Bind;

/** Property ThumbBorderColor of Type Color */
public thumbBorderColor?: ColorItem | string | null | Bind;

/** Property ThumbColor of Type Color */
public thumbColor?: ColorItem | string | null | Bind;

/** Property ThumbRadius of Type Double */
public thumbRadius?: number | Bind;

/** Property ThumbSize of Type Double */
public thumbSize?: number | Bind;

/** Property TrackBorderColor of Type Color */
public trackBorderColor?: ColorItem | string | null | Bind;

/** Property TrackColor of Type Color */
public trackColor?: ColorItem | string | null | Bind;

/** Property TrackHighlightBorderColor of Type Color */
public trackHighlightBorderColor?: ColorItem | string | null | Bind;

/** Property TrackHighlightColor of Type Color */
public trackHighlightColor?: ColorItem | string | null | Bind;

/** Property TrackRadius of Type Double */
public trackRadius?: number | Bind;

/** Property TrackSize of Type Double */
public trackSize?: number | Bind;

/** Property TranslationX of Type Double */
public translationX?: number | Bind;

/** Property TranslationY of Type Double */
public translationY?: number | Bind;

/** Property UpperThumbBorderColor of Type Color */
public upperThumbBorderColor?: ColorItem | string | null | Bind;

/** Property UpperThumbColor of Type Color */
public upperThumbColor?: ColorItem | string | null | Bind;

/** Property UpperThumbRadius of Type Double */
public upperThumbRadius?: number | Bind;

/** Property UpperThumbSize of Type Double */
public upperThumbSize?: number | Bind;

/** Property UpperThumbView of Type View */
public upperThumbView?: any;

/** Property UpperValue of Type Double */
public upperValue?: number | Bind;

/** Property UpperValueLabelStyle of Type Style */
public upperValueLabelStyle?: any;

/** Property ValueLabelSpacing of Type Double */
public valueLabelSpacing?: number | Bind;

/** Property ValueLabelStringFormat of Type String */
public valueLabelStringFormat?: string | null | Bind;

/** Property ValueLabelStyle of Type Style */
public valueLabelStyle?: any;

/** Property VerticalOptions of Type LayoutOptions */
public verticalOptions?: "Start" | "Center" | "End" | "Fill" | "StartAndExpand" | "CenterAndExpand" | "EndAndExpand" | "FillAndExpand" | Bind;

/** Property Visual of Type IVisual */
public visual?: /*IVisual*/ any;

/** Property WidthRequest of Type Double */
public widthRequest?: number | Bind;
}


declare class Shield extends RootObject {
    
    
/** Property Shield.Background of Type Xamarin.Forms.Brush */
public static background: NodeFactory;;

/** Property Shield.Behaviors of Type Xamarin.Forms.Behavior */
public static behaviors: NodeFactory;;

/** Property Shield.Clip of Type Xamarin.Forms.Shapes.Geometry */
public static clip: NodeFactory;;

/** Property Shield.ControlTemplate of Type Xamarin.Forms.ControlTemplate */
public static controlTemplate: NodeFactory;;

/** Property Shield.Effects of Type Xamarin.Forms.Effect */
public static effects: NodeFactory;;

/** Property Shield.GestureRecognizers of Type Xamarin.Forms.IGestureRecognizer */
public static gestureRecognizers: NodeFactory;;

/** Property Shield.Menu of Type Xamarin.Forms.Menu */
public static menu: NodeFactory;;

/** Property Shield.Resources of Type System.Collections.Generic.KeyValuePair`2[System.String,System.Object] */
public static resources: NodeFactory;;

/** Property Shield.StyleClass of Type System.String */
public static styleClass: NodeFactory;;

/** Property Shield.Triggers of Type Xamarin.Forms.TriggerBase */
public static triggers: NodeFactory;
    
    
/** Property AnchorX of Type Double */
public anchorX?: number | Bind;

/** Property AnchorY of Type Double */
public anchorY?: number | Bind;

/** Property AutomationId of Type String */
public automationId?: string | null | Bind;

/** Property Background of Type Brush */
public background?: "AliceBlue" | "AntiqueWhite" | "Aqua" | "Aquamarine" | "Azure" | "Beige" | "Bisque" | "Black" | "BlanchedAlmond" | "Blue" | "BlueViolet" | "Brown" | "BurlyWood" | "CadetBlue" | "Chartreuse" | "Chocolate" | "Coral" | "CornflowerBlue" | "Cornsilk" | "Crimson" | "Cyan" | "DarkBlue" | "DarkCyan" | "DarkGoldenrod" | "DarkGray" | "DarkGreen" | "DarkKhaki" | "DarkMagenta" | "DarkOliveGreen" | "DarkOrange" | "DarkOrchid" | "DarkRed" | "DarkSalmon" | "DarkSeaGreen" | "DarkSlateBlue" | "DarkSlateGray" | "DarkTurquoise" | "DarkViolet" | "DeepPink" | "DeepSkyBlue" | "DimGray" | "DodgerBlue" | "Firebrick" | "FloralWhite" | "ForestGreen" | "Fuchsia" | "Gainsboro" | "GhostWhite" | "Gold" | "Goldenrod" | "Gray" | "Green" | "GreenYellow" | "Honeydew" | "HotPink" | "IndianRed" | "Indigo" | "Ivory" | "Khaki" | "Lavender" | "LavenderBlush" | "LawnGreen" | "LemonChiffon" | "LightBlue" | "LightCoral" | "LightCyan" | "LightGoldenrodYellow" | "LightGray" | "LightGreen" | "LightPink" | "LightSalmon" | "LightSeaGreen" | "LightSkyBlue" | "LightSlateGray" | "LightSteelBlue" | "LightYellow" | "Lime" | "LimeGreen" | "Linen" | "Magenta" | "Maroon" | "MediumAquamarine" | "MediumBlue" | "MediumOrchid" | "MediumPurple" | "MediumSeaGreen" | "MediumSlateBlue" | "MediumSpringGreen" | "MediumTurquoise" | "MediumVioletRed" | "MidnightBlue" | "MintCream" | "MistyRose" | "Moccasin" | "NavajoWhite" | "Navy" | "OldLace" | "Olive" | "OliveDrab" | "Orange" | "OrangeRed" | "Orchid" | "PaleGoldenrod" | "PaleGreen" | "PaleTurquoise" | "PaleVioletRed" | "PapayaWhip" | "PeachPuff" | "Peru" | "Pink" | "Plum" | "PowderBlue" | "Purple" | "Red" | "RosyBrown" | "RoyalBlue" | "SaddleBrown" | "Salmon" | "SandyBrown" | "SeaGreen" | "SeaShell" | "Sienna" | "Silver" | "SkyBlue" | "SlateBlue" | "SlateGray" | "Snow" | "SpringGreen" | "SteelBlue" | "Tan" | "Teal" | "Thistle" | "Tomato" | "Transparent" | "Turquoise" | "Violet" | "Wheat" | "White" | "WhiteSmoke" | "Yellow" | "YellowGreen" | Bind;

/** Property BackgroundColor of Type Color */
public backgroundColor?: ColorItem | string | null | Bind;

/** Property BindingContext of Type Object */
public bindingContext?: any;

/** Property CascadeInputTransparent of Type Boolean */
public cascadeInputTransparent?: boolean | Bind;

/** Property class of Type IList`1 */
public class?: any;

/** Property ClassId of Type String */
public classId?: string | null | Bind;

/** Property Clip of Type Geometry */
public clip?: any;

/** Property Color of Type Color */
public color?: ColorItem | string | null | Bind;

/** Property Command of Type ICommand */
public command?: any;

/** Property CommandParameter of Type Object */
public commandParameter?: any;

/** Property ControlTemplate of Type ControlTemplate */
public controlTemplate?: any;

/** Property DisableLayout of Type Boolean */
public disableLayout?: boolean | Bind;

/** Property Dispatcher of Type IDispatcher */
public dispatcher?: any;

/** Property EffectControlProvider of Type IEffectControlProvider */
public effectControlProvider?: any;

/** Property FlowDirection of Type FlowDirection */
public flowDirection?: "MatchParent" | "LeftToRight" | "RightToLeft" | Bind;

/** Property FontAttributes of Type FontAttributes */
public fontAttributes?: "None" | "Bold" | "Italic" | Bind;

/** Property FontFamily of Type String */
public fontFamily?: string | null | Bind;

/** Property FontSize of Type Double */
public fontSize?: number | Bind;

/** Property HeightRequest of Type Double */
public heightRequest?: number | Bind;

/** Property HorizontalOptions of Type LayoutOptions */
public horizontalOptions?: "Start" | "Center" | "End" | "Fill" | "StartAndExpand" | "CenterAndExpand" | "EndAndExpand" | "FillAndExpand" | Bind;

/** Property InputTransparent of Type Boolean */
public inputTransparent?: boolean | Bind;

/** Property IsClippedToBounds of Type Boolean */
public isClippedToBounds?: boolean | Bind;

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

/** Property Margin of Type Thickness */
public margin?: /*Thickness*/ any;

/** Property MinimumHeightRequest of Type Double */
public minimumHeightRequest?: number | Bind;

/** Property MinimumWidthRequest of Type Double */
public minimumWidthRequest?: number | Bind;

/** Property Navigation of Type INavigation */
public navigation?: any;

/** Property Opacity of Type Double */
public opacity?: number | Bind;

/** Property Padding of Type Thickness */
public padding?: /*Thickness*/ any;

/** Property Parent of Type Element */
public parent?: any;

/** Property Platform of Type IPlatform */
public platform?: any;

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

/** Property Status of Type String */
public status?: string | null | Bind;

/** Property Style of Type Style */
public style?: any;

/** Property StyleClass of Type IList`1 */
public styleClass?: any;

/** Property StyleId of Type String */
public styleId?: string | null | Bind;

/** Property Subject of Type String */
public subject?: string | null | Bind;

/** Property TabIndex of Type Int32 */
public tabIndex?: number | Bind;

/** Property TextColor of Type Color */
public textColor?: ColorItem | string | null | Bind;

/** Property TranslationX of Type Double */
public translationX?: number | Bind;

/** Property TranslationY of Type Double */
public translationY?: number | Bind;

/** Property VerticalOptions of Type LayoutOptions */
public verticalOptions?: "Start" | "Center" | "End" | "Fill" | "StartAndExpand" | "CenterAndExpand" | "EndAndExpand" | "FillAndExpand" | Bind;

/** Property Visual of Type IVisual */
public visual?: /*IVisual*/ any;

/** Property WidthRequest of Type Double */
public widthRequest?: number | Bind;
}


declare class SideMenuView extends RootObject {
    
/** Attached Property SideMenuView.Position of Type BindableProperty*/
public static position: AttachedNode;


/** Attached Property SideMenuView.MenuWidthPercentage of Type BindableProperty*/
public static menuWidthPercentage: AttachedNode;


/** Attached Property SideMenuView.MenuGestureEnabled of Type BindableProperty*/
public static menuGestureEnabled: AttachedNode;

    
/** Property SideMenuView.Background of Type Xamarin.Forms.Brush */
public static background: NodeFactory;;

/** Property SideMenuView.Behaviors of Type Xamarin.Forms.Behavior */
public static behaviors: NodeFactory;;

/** Property SideMenuView.Children of Type Xamarin.Forms.View */
public static children: NodeFactory;;

/** Property SideMenuView.Clip of Type Xamarin.Forms.Shapes.Geometry */
public static clip: NodeFactory;;

/** Property SideMenuView.ControlTemplate of Type Xamarin.Forms.ControlTemplate */
public static controlTemplate: NodeFactory;;

/** Property SideMenuView.Effects of Type Xamarin.Forms.Effect */
public static effects: NodeFactory;;

/** Property SideMenuView.GestureRecognizers of Type Xamarin.Forms.IGestureRecognizer */
public static gestureRecognizers: NodeFactory;;

/** Property SideMenuView.Menu of Type Xamarin.Forms.Menu */
public static menu: NodeFactory;;

/** Property SideMenuView.Resources of Type System.Collections.Generic.KeyValuePair`2[System.String,System.Object] */
public static resources: NodeFactory;;

/** Property SideMenuView.StyleClass of Type System.String */
public static styleClass: NodeFactory;;

/** Property SideMenuView.Triggers of Type Xamarin.Forms.TriggerBase */
public static triggers: NodeFactory;
    
    
/** Property AllowInterceptGesture of Type Boolean */
public allowInterceptGesture?: boolean | Bind;

/** Property AnchorX of Type Double */
public anchorX?: number | Bind;

/** Property AnchorY of Type Double */
public anchorY?: number | Bind;

/** Property AutomationId of Type String */
public automationId?: string | null | Bind;

/** Property Background of Type Brush */
public background?: "AliceBlue" | "AntiqueWhite" | "Aqua" | "Aquamarine" | "Azure" | "Beige" | "Bisque" | "Black" | "BlanchedAlmond" | "Blue" | "BlueViolet" | "Brown" | "BurlyWood" | "CadetBlue" | "Chartreuse" | "Chocolate" | "Coral" | "CornflowerBlue" | "Cornsilk" | "Crimson" | "Cyan" | "DarkBlue" | "DarkCyan" | "DarkGoldenrod" | "DarkGray" | "DarkGreen" | "DarkKhaki" | "DarkMagenta" | "DarkOliveGreen" | "DarkOrange" | "DarkOrchid" | "DarkRed" | "DarkSalmon" | "DarkSeaGreen" | "DarkSlateBlue" | "DarkSlateGray" | "DarkTurquoise" | "DarkViolet" | "DeepPink" | "DeepSkyBlue" | "DimGray" | "DodgerBlue" | "Firebrick" | "FloralWhite" | "ForestGreen" | "Fuchsia" | "Gainsboro" | "GhostWhite" | "Gold" | "Goldenrod" | "Gray" | "Green" | "GreenYellow" | "Honeydew" | "HotPink" | "IndianRed" | "Indigo" | "Ivory" | "Khaki" | "Lavender" | "LavenderBlush" | "LawnGreen" | "LemonChiffon" | "LightBlue" | "LightCoral" | "LightCyan" | "LightGoldenrodYellow" | "LightGray" | "LightGreen" | "LightPink" | "LightSalmon" | "LightSeaGreen" | "LightSkyBlue" | "LightSlateGray" | "LightSteelBlue" | "LightYellow" | "Lime" | "LimeGreen" | "Linen" | "Magenta" | "Maroon" | "MediumAquamarine" | "MediumBlue" | "MediumOrchid" | "MediumPurple" | "MediumSeaGreen" | "MediumSlateBlue" | "MediumSpringGreen" | "MediumTurquoise" | "MediumVioletRed" | "MidnightBlue" | "MintCream" | "MistyRose" | "Moccasin" | "NavajoWhite" | "Navy" | "OldLace" | "Olive" | "OliveDrab" | "Orange" | "OrangeRed" | "Orchid" | "PaleGoldenrod" | "PaleGreen" | "PaleTurquoise" | "PaleVioletRed" | "PapayaWhip" | "PeachPuff" | "Peru" | "Pink" | "Plum" | "PowderBlue" | "Purple" | "Red" | "RosyBrown" | "RoyalBlue" | "SaddleBrown" | "Salmon" | "SandyBrown" | "SeaGreen" | "SeaShell" | "Sienna" | "Silver" | "SkyBlue" | "SlateBlue" | "SlateGray" | "Snow" | "SpringGreen" | "SteelBlue" | "Tan" | "Teal" | "Thistle" | "Tomato" | "Transparent" | "Turquoise" | "Violet" | "Wheat" | "White" | "WhiteSmoke" | "Yellow" | "YellowGreen" | Bind;

/** Property BackgroundColor of Type Color */
public backgroundColor?: ColorItem | string | null | Bind;

/** Property BindingContext of Type Object */
public bindingContext?: any;

/** Property CancelVerticalGestureThreshold of Type Double */
public cancelVerticalGestureThreshold?: number | Bind;

/** Property CascadeInputTransparent of Type Boolean */
public cascadeInputTransparent?: boolean | Bind;

/** Property class of Type IList`1 */
public class?: any;

/** Property ClassId of Type String */
public classId?: string | null | Bind;

/** Property Clip of Type Geometry */
public clip?: any;

/** Property ControlTemplate of Type ControlTemplate */
public controlTemplate?: any;

/** Property CurrentGestureShift of Type Double */
public currentGestureShift?: number | Bind;

/** Property CurrentGestureState of Type SideMenuState */
public currentGestureState?: "MainViewShown" | "RightMenuShown" | "LeftMenuShown" | Bind;

/** Property DisableLayout of Type Boolean */
public disableLayout?: boolean | Bind;

/** Property Dispatcher of Type IDispatcher */
public dispatcher?: any;

/** Property EffectControlProvider of Type IEffectControlProvider */
public effectControlProvider?: any;

/** Property FlowDirection of Type FlowDirection */
public flowDirection?: "MatchParent" | "LeftToRight" | "RightToLeft" | Bind;

/** Property GestureThreshold of Type Double */
public gestureThreshold?: number | Bind;

/** Property HeightRequest of Type Double */
public heightRequest?: number | Bind;

/** Property HorizontalOptions of Type LayoutOptions */
public horizontalOptions?: "Start" | "Center" | "End" | "Fill" | "StartAndExpand" | "CenterAndExpand" | "EndAndExpand" | "FillAndExpand" | Bind;

/** Property InputTransparent of Type Boolean */
public inputTransparent?: boolean | Bind;

/** Property IsClippedToBounds of Type Boolean */
public isClippedToBounds?: boolean | Bind;

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

/** Property Margin of Type Thickness */
public margin?: /*Thickness*/ any;

/** Property MinimumHeightRequest of Type Double */
public minimumHeightRequest?: number | Bind;

/** Property MinimumWidthRequest of Type Double */
public minimumWidthRequest?: number | Bind;

/** Property Navigation of Type INavigation */
public navigation?: any;

/** Property Opacity of Type Double */
public opacity?: number | Bind;

/** Property Padding of Type Thickness */
public padding?: /*Thickness*/ any;

/** Property Parent of Type Element */
public parent?: any;

/** Property Platform of Type IPlatform */
public platform?: any;

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

/** Property Shift of Type Double */
public shift?: number | Bind;

/** Property State of Type SideMenuState */
public state?: "MainViewShown" | "RightMenuShown" | "LeftMenuShown" | Bind;

/** Property Style of Type Style */
public style?: any;

/** Property StyleClass of Type IList`1 */
public styleClass?: any;

/** Property StyleId of Type String */
public styleId?: string | null | Bind;

/** Property TabIndex of Type Int32 */
public tabIndex?: number | Bind;

/** Property TranslationX of Type Double */
public translationX?: number | Bind;

/** Property TranslationY of Type Double */
public translationY?: number | Bind;

/** Property VerticalOptions of Type LayoutOptions */
public verticalOptions?: "Start" | "Center" | "End" | "Fill" | "StartAndExpand" | "CenterAndExpand" | "EndAndExpand" | "FillAndExpand" | Bind;

/** Property Visual of Type IVisual */
public visual?: /*IVisual*/ any;

/** Property WidthRequest of Type Double */
public widthRequest?: number | Bind;
}


declare class StateView extends RootObject {
    
    
/** Property StateView.Background of Type Xamarin.Forms.Brush */
public static background: NodeFactory;;

/** Property StateView.Behaviors of Type Xamarin.Forms.Behavior */
public static behaviors: NodeFactory;;

/** Property StateView.Clip of Type Xamarin.Forms.Shapes.Geometry */
public static clip: NodeFactory;;

/** Property StateView.Content of Type Xamarin.Forms.View */
public static content: NodeFactory;;

/** Property StateView.ControlTemplate of Type Xamarin.Forms.ControlTemplate */
public static controlTemplate: NodeFactory;;

/** Property StateView.Effects of Type Xamarin.Forms.Effect */
public static effects: NodeFactory;;

/** Property StateView.GestureRecognizers of Type Xamarin.Forms.IGestureRecognizer */
public static gestureRecognizers: NodeFactory;;

/** Property StateView.Menu of Type Xamarin.Forms.Menu */
public static menu: NodeFactory;;

/** Property StateView.Resources of Type System.Collections.Generic.KeyValuePair`2[System.String,System.Object] */
public static resources: NodeFactory;;

/** Property StateView.StyleClass of Type System.String */
public static styleClass: NodeFactory;;

/** Property StateView.Template of Type Xamarin.Forms.DataTemplate */
public static template: NodeFactory;;

/** Property StateView.Triggers of Type Xamarin.Forms.TriggerBase */
public static triggers: NodeFactory;
    
    
/** Property AnchorX of Type Double */
public anchorX?: number | Bind;

/** Property AnchorY of Type Double */
public anchorY?: number | Bind;

/** Property AutomationId of Type String */
public automationId?: string | null | Bind;

/** Property Background of Type Brush */
public background?: "AliceBlue" | "AntiqueWhite" | "Aqua" | "Aquamarine" | "Azure" | "Beige" | "Bisque" | "Black" | "BlanchedAlmond" | "Blue" | "BlueViolet" | "Brown" | "BurlyWood" | "CadetBlue" | "Chartreuse" | "Chocolate" | "Coral" | "CornflowerBlue" | "Cornsilk" | "Crimson" | "Cyan" | "DarkBlue" | "DarkCyan" | "DarkGoldenrod" | "DarkGray" | "DarkGreen" | "DarkKhaki" | "DarkMagenta" | "DarkOliveGreen" | "DarkOrange" | "DarkOrchid" | "DarkRed" | "DarkSalmon" | "DarkSeaGreen" | "DarkSlateBlue" | "DarkSlateGray" | "DarkTurquoise" | "DarkViolet" | "DeepPink" | "DeepSkyBlue" | "DimGray" | "DodgerBlue" | "Firebrick" | "FloralWhite" | "ForestGreen" | "Fuchsia" | "Gainsboro" | "GhostWhite" | "Gold" | "Goldenrod" | "Gray" | "Green" | "GreenYellow" | "Honeydew" | "HotPink" | "IndianRed" | "Indigo" | "Ivory" | "Khaki" | "Lavender" | "LavenderBlush" | "LawnGreen" | "LemonChiffon" | "LightBlue" | "LightCoral" | "LightCyan" | "LightGoldenrodYellow" | "LightGray" | "LightGreen" | "LightPink" | "LightSalmon" | "LightSeaGreen" | "LightSkyBlue" | "LightSlateGray" | "LightSteelBlue" | "LightYellow" | "Lime" | "LimeGreen" | "Linen" | "Magenta" | "Maroon" | "MediumAquamarine" | "MediumBlue" | "MediumOrchid" | "MediumPurple" | "MediumSeaGreen" | "MediumSlateBlue" | "MediumSpringGreen" | "MediumTurquoise" | "MediumVioletRed" | "MidnightBlue" | "MintCream" | "MistyRose" | "Moccasin" | "NavajoWhite" | "Navy" | "OldLace" | "Olive" | "OliveDrab" | "Orange" | "OrangeRed" | "Orchid" | "PaleGoldenrod" | "PaleGreen" | "PaleTurquoise" | "PaleVioletRed" | "PapayaWhip" | "PeachPuff" | "Peru" | "Pink" | "Plum" | "PowderBlue" | "Purple" | "Red" | "RosyBrown" | "RoyalBlue" | "SaddleBrown" | "Salmon" | "SandyBrown" | "SeaGreen" | "SeaShell" | "Sienna" | "Silver" | "SkyBlue" | "SlateBlue" | "SlateGray" | "Snow" | "SpringGreen" | "SteelBlue" | "Tan" | "Teal" | "Thistle" | "Tomato" | "Transparent" | "Turquoise" | "Violet" | "Wheat" | "White" | "WhiteSmoke" | "Yellow" | "YellowGreen" | Bind;

/** Property BackgroundColor of Type Color */
public backgroundColor?: ColorItem | string | null | Bind;

/** Property BindingContext of Type Object */
public bindingContext?: any;

/** Property CascadeInputTransparent of Type Boolean */
public cascadeInputTransparent?: boolean | Bind;

/** Property class of Type IList`1 */
public class?: any;

/** Property ClassId of Type String */
public classId?: string | null | Bind;

/** Property Clip of Type Geometry */
public clip?: any;

/** Property Content of Type View */
public content?: any;

/** Property ControlTemplate of Type ControlTemplate */
public controlTemplate?: any;

/** Property CustomStateKey of Type String */
public customStateKey?: string | null | Bind;

/** Property DisableLayout of Type Boolean */
public disableLayout?: boolean | Bind;

/** Property Dispatcher of Type IDispatcher */
public dispatcher?: any;

/** Property EffectControlProvider of Type IEffectControlProvider */
public effectControlProvider?: any;

/** Property FlowDirection of Type FlowDirection */
public flowDirection?: "MatchParent" | "LeftToRight" | "RightToLeft" | Bind;

/** Property HeightRequest of Type Double */
public heightRequest?: number | Bind;

/** Property HorizontalOptions of Type LayoutOptions */
public horizontalOptions?: "Start" | "Center" | "End" | "Fill" | "StartAndExpand" | "CenterAndExpand" | "EndAndExpand" | "FillAndExpand" | Bind;

/** Property InputTransparent of Type Boolean */
public inputTransparent?: boolean | Bind;

/** Property IsClippedToBounds of Type Boolean */
public isClippedToBounds?: boolean | Bind;

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

/** Property Margin of Type Thickness */
public margin?: /*Thickness*/ any;

/** Property MinimumHeightRequest of Type Double */
public minimumHeightRequest?: number | Bind;

/** Property MinimumWidthRequest of Type Double */
public minimumWidthRequest?: number | Bind;

/** Property Navigation of Type INavigation */
public navigation?: any;

/** Property Opacity of Type Double */
public opacity?: number | Bind;

/** Property Padding of Type Thickness */
public padding?: /*Thickness*/ any;

/** Property Parent of Type Element */
public parent?: any;

/** Property Platform of Type IPlatform */
public platform?: any;

/** Property RepeatCount of Type Int32 */
public repeatCount?: number | Bind;

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

/** Property StateKey of Type LayoutState */
public stateKey?: "None" | "Loading" | "Saving" | "Success" | "Error" | "Empty" | "Custom" | Bind;

/** Property Style of Type Style */
public style?: any;

/** Property StyleClass of Type IList`1 */
public styleClass?: any;

/** Property StyleId of Type String */
public styleId?: string | null | Bind;

/** Property TabIndex of Type Int32 */
public tabIndex?: number | Bind;

/** Property Template of Type DataTemplate */
public template?: any;

/** Property TranslationX of Type Double */
public translationX?: number | Bind;

/** Property TranslationY of Type Double */
public translationY?: number | Bind;

/** Property VerticalOptions of Type LayoutOptions */
public verticalOptions?: "Start" | "Center" | "End" | "Fill" | "StartAndExpand" | "CenterAndExpand" | "EndAndExpand" | "FillAndExpand" | Bind;

/** Property Visual of Type IVisual */
public visual?: /*IVisual*/ any;

/** Property WidthRequest of Type Double */
public widthRequest?: number | Bind;
}


declare class TabBadgeTemplate extends RootObject {
    
    
/** Property TabBadgeTemplate.Background of Type Xamarin.Forms.Brush */
public static background: NodeFactory;;

/** Property TabBadgeTemplate.Behaviors of Type Xamarin.Forms.Behavior */
public static behaviors: NodeFactory;;

/** Property TabBadgeTemplate.Children of Type Xamarin.Forms.View */
public static children: NodeFactory;;

/** Property TabBadgeTemplate.Clip of Type Xamarin.Forms.Shapes.Geometry */
public static clip: NodeFactory;;

/** Property TabBadgeTemplate.ColumnDefinitions of Type Xamarin.Forms.ColumnDefinition */
public static columnDefinitions: NodeFactory;;

/** Property TabBadgeTemplate.Effects of Type Xamarin.Forms.Effect */
public static effects: NodeFactory;;

/** Property TabBadgeTemplate.GestureRecognizers of Type Xamarin.Forms.IGestureRecognizer */
public static gestureRecognizers: NodeFactory;;

/** Property TabBadgeTemplate.Menu of Type Xamarin.Forms.Menu */
public static menu: NodeFactory;;

/** Property TabBadgeTemplate.Resources of Type System.Collections.Generic.KeyValuePair`2[System.String,System.Object] */
public static resources: NodeFactory;;

/** Property TabBadgeTemplate.RowDefinitions of Type Xamarin.Forms.RowDefinition */
public static rowDefinitions: NodeFactory;;

/** Property TabBadgeTemplate.StyleClass of Type System.String */
public static styleClass: NodeFactory;;

/** Property TabBadgeTemplate.Triggers of Type Xamarin.Forms.TriggerBase */
public static triggers: NodeFactory;
    
    
/** Property AnchorX of Type Double */
public anchorX?: number | Bind;

/** Property AnchorY of Type Double */
public anchorY?: number | Bind;

/** Property AutomationId of Type String */
public automationId?: string | null | Bind;

/** Property Background of Type Brush */
public background?: "AliceBlue" | "AntiqueWhite" | "Aqua" | "Aquamarine" | "Azure" | "Beige" | "Bisque" | "Black" | "BlanchedAlmond" | "Blue" | "BlueViolet" | "Brown" | "BurlyWood" | "CadetBlue" | "Chartreuse" | "Chocolate" | "Coral" | "CornflowerBlue" | "Cornsilk" | "Crimson" | "Cyan" | "DarkBlue" | "DarkCyan" | "DarkGoldenrod" | "DarkGray" | "DarkGreen" | "DarkKhaki" | "DarkMagenta" | "DarkOliveGreen" | "DarkOrange" | "DarkOrchid" | "DarkRed" | "DarkSalmon" | "DarkSeaGreen" | "DarkSlateBlue" | "DarkSlateGray" | "DarkTurquoise" | "DarkViolet" | "DeepPink" | "DeepSkyBlue" | "DimGray" | "DodgerBlue" | "Firebrick" | "FloralWhite" | "ForestGreen" | "Fuchsia" | "Gainsboro" | "GhostWhite" | "Gold" | "Goldenrod" | "Gray" | "Green" | "GreenYellow" | "Honeydew" | "HotPink" | "IndianRed" | "Indigo" | "Ivory" | "Khaki" | "Lavender" | "LavenderBlush" | "LawnGreen" | "LemonChiffon" | "LightBlue" | "LightCoral" | "LightCyan" | "LightGoldenrodYellow" | "LightGray" | "LightGreen" | "LightPink" | "LightSalmon" | "LightSeaGreen" | "LightSkyBlue" | "LightSlateGray" | "LightSteelBlue" | "LightYellow" | "Lime" | "LimeGreen" | "Linen" | "Magenta" | "Maroon" | "MediumAquamarine" | "MediumBlue" | "MediumOrchid" | "MediumPurple" | "MediumSeaGreen" | "MediumSlateBlue" | "MediumSpringGreen" | "MediumTurquoise" | "MediumVioletRed" | "MidnightBlue" | "MintCream" | "MistyRose" | "Moccasin" | "NavajoWhite" | "Navy" | "OldLace" | "Olive" | "OliveDrab" | "Orange" | "OrangeRed" | "Orchid" | "PaleGoldenrod" | "PaleGreen" | "PaleTurquoise" | "PaleVioletRed" | "PapayaWhip" | "PeachPuff" | "Peru" | "Pink" | "Plum" | "PowderBlue" | "Purple" | "Red" | "RosyBrown" | "RoyalBlue" | "SaddleBrown" | "Salmon" | "SandyBrown" | "SeaGreen" | "SeaShell" | "Sienna" | "Silver" | "SkyBlue" | "SlateBlue" | "SlateGray" | "Snow" | "SpringGreen" | "SteelBlue" | "Tan" | "Teal" | "Thistle" | "Tomato" | "Transparent" | "Turquoise" | "Violet" | "Wheat" | "White" | "WhiteSmoke" | "Yellow" | "YellowGreen" | Bind;

/** Property BackgroundColor of Type Color */
public backgroundColor?: ColorItem | string | null | Bind;

/** Property BindingContext of Type Object */
public bindingContext?: any;

/** Property CascadeInputTransparent of Type Boolean */
public cascadeInputTransparent?: boolean | Bind;

/** Property class of Type IList`1 */
public class?: any;

/** Property ClassId of Type String */
public classId?: string | null | Bind;

/** Property Clip of Type Geometry */
public clip?: any;

/** Property ColumnDefinitions of Type ColumnDefinitionCollection */
public columnDefinitions?: any;

/** Property ColumnSpacing of Type Double */
public columnSpacing?: number | Bind;

/** Property DisableLayout of Type Boolean */
public disableLayout?: boolean | Bind;

/** Property Dispatcher of Type IDispatcher */
public dispatcher?: any;

/** Property EffectControlProvider of Type IEffectControlProvider */
public effectControlProvider?: any;

/** Property FlowDirection of Type FlowDirection */
public flowDirection?: "MatchParent" | "LeftToRight" | "RightToLeft" | Bind;

/** Property HeightRequest of Type Double */
public heightRequest?: number | Bind;

/** Property HorizontalOptions of Type LayoutOptions */
public horizontalOptions?: "Start" | "Center" | "End" | "Fill" | "StartAndExpand" | "CenterAndExpand" | "EndAndExpand" | "FillAndExpand" | Bind;

/** Property InputTransparent of Type Boolean */
public inputTransparent?: boolean | Bind;

/** Property IsClippedToBounds of Type Boolean */
public isClippedToBounds?: boolean | Bind;

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

/** Property Margin of Type Thickness */
public margin?: /*Thickness*/ any;

/** Property MinimumHeightRequest of Type Double */
public minimumHeightRequest?: number | Bind;

/** Property MinimumWidthRequest of Type Double */
public minimumWidthRequest?: number | Bind;

/** Property Navigation of Type INavigation */
public navigation?: any;

/** Property Opacity of Type Double */
public opacity?: number | Bind;

/** Property Padding of Type Thickness */
public padding?: /*Thickness*/ any;

/** Property Parent of Type Element */
public parent?: any;

/** Property Platform of Type IPlatform */
public platform?: any;

/** Property Resources of Type ResourceDictionary */
public resources?: any;

/** Property Rotation of Type Double */
public rotation?: number | Bind;

/** Property RotationX of Type Double */
public rotationX?: number | Bind;

/** Property RotationY of Type Double */
public rotationY?: number | Bind;

/** Property RowDefinitions of Type RowDefinitionCollection */
public rowDefinitions?: any;

/** Property RowSpacing of Type Double */
public rowSpacing?: number | Bind;

/** Property Scale of Type Double */
public scale?: number | Bind;

/** Property ScaleX of Type Double */
public scaleX?: number | Bind;

/** Property ScaleY of Type Double */
public scaleY?: number | Bind;

/** Property Style of Type Style */
public style?: any;

/** Property StyleClass of Type IList`1 */
public styleClass?: any;

/** Property StyleId of Type String */
public styleId?: string | null | Bind;

/** Property TabIndex of Type Int32 */
public tabIndex?: number | Bind;

/** Property TranslationX of Type Double */
public translationX?: number | Bind;

/** Property TranslationY of Type Double */
public translationY?: number | Bind;

/** Property VerticalOptions of Type LayoutOptions */
public verticalOptions?: "Start" | "Center" | "End" | "Fill" | "StartAndExpand" | "CenterAndExpand" | "EndAndExpand" | "FillAndExpand" | Bind;

/** Property Visual of Type IVisual */
public visual?: /*IVisual*/ any;

/** Property WidthRequest of Type Double */
public widthRequest?: number | Bind;
}


declare class TabBadgeView extends RootObject {
    
    
/** Property TabBadgeView.Background of Type Xamarin.Forms.Brush */
public static background: NodeFactory;;

/** Property TabBadgeView.Behaviors of Type Xamarin.Forms.Behavior */
public static behaviors: NodeFactory;;

/** Property TabBadgeView.Clip of Type Xamarin.Forms.Shapes.Geometry */
public static clip: NodeFactory;;

/** Property TabBadgeView.ControlTemplate of Type Xamarin.Forms.ControlTemplate */
public static controlTemplate: NodeFactory;;

/** Property TabBadgeView.Effects of Type Xamarin.Forms.Effect */
public static effects: NodeFactory;;

/** Property TabBadgeView.GestureRecognizers of Type Xamarin.Forms.IGestureRecognizer */
public static gestureRecognizers: NodeFactory;;

/** Property TabBadgeView.Menu of Type Xamarin.Forms.Menu */
public static menu: NodeFactory;;

/** Property TabBadgeView.PlacementTarget of Type Xamarin.Forms.View */
public static placementTarget: NodeFactory;;

/** Property TabBadgeView.Resources of Type System.Collections.Generic.KeyValuePair`2[System.String,System.Object] */
public static resources: NodeFactory;;

/** Property TabBadgeView.StyleClass of Type System.String */
public static styleClass: NodeFactory;;

/** Property TabBadgeView.Triggers of Type Xamarin.Forms.TriggerBase */
public static triggers: NodeFactory;
    
    
/** Property AnchorX of Type Double */
public anchorX?: number | Bind;

/** Property AnchorY of Type Double */
public anchorY?: number | Bind;

/** Property AutoHide of Type Boolean */
public autoHide?: boolean | Bind;

/** Property AutomationId of Type String */
public automationId?: string | null | Bind;

/** Property Background of Type Brush */
public background?: "AliceBlue" | "AntiqueWhite" | "Aqua" | "Aquamarine" | "Azure" | "Beige" | "Bisque" | "Black" | "BlanchedAlmond" | "Blue" | "BlueViolet" | "Brown" | "BurlyWood" | "CadetBlue" | "Chartreuse" | "Chocolate" | "Coral" | "CornflowerBlue" | "Cornsilk" | "Crimson" | "Cyan" | "DarkBlue" | "DarkCyan" | "DarkGoldenrod" | "DarkGray" | "DarkGreen" | "DarkKhaki" | "DarkMagenta" | "DarkOliveGreen" | "DarkOrange" | "DarkOrchid" | "DarkRed" | "DarkSalmon" | "DarkSeaGreen" | "DarkSlateBlue" | "DarkSlateGray" | "DarkTurquoise" | "DarkViolet" | "DeepPink" | "DeepSkyBlue" | "DimGray" | "DodgerBlue" | "Firebrick" | "FloralWhite" | "ForestGreen" | "Fuchsia" | "Gainsboro" | "GhostWhite" | "Gold" | "Goldenrod" | "Gray" | "Green" | "GreenYellow" | "Honeydew" | "HotPink" | "IndianRed" | "Indigo" | "Ivory" | "Khaki" | "Lavender" | "LavenderBlush" | "LawnGreen" | "LemonChiffon" | "LightBlue" | "LightCoral" | "LightCyan" | "LightGoldenrodYellow" | "LightGray" | "LightGreen" | "LightPink" | "LightSalmon" | "LightSeaGreen" | "LightSkyBlue" | "LightSlateGray" | "LightSteelBlue" | "LightYellow" | "Lime" | "LimeGreen" | "Linen" | "Magenta" | "Maroon" | "MediumAquamarine" | "MediumBlue" | "MediumOrchid" | "MediumPurple" | "MediumSeaGreen" | "MediumSlateBlue" | "MediumSpringGreen" | "MediumTurquoise" | "MediumVioletRed" | "MidnightBlue" | "MintCream" | "MistyRose" | "Moccasin" | "NavajoWhite" | "Navy" | "OldLace" | "Olive" | "OliveDrab" | "Orange" | "OrangeRed" | "Orchid" | "PaleGoldenrod" | "PaleGreen" | "PaleTurquoise" | "PaleVioletRed" | "PapayaWhip" | "PeachPuff" | "Peru" | "Pink" | "Plum" | "PowderBlue" | "Purple" | "Red" | "RosyBrown" | "RoyalBlue" | "SaddleBrown" | "Salmon" | "SandyBrown" | "SeaGreen" | "SeaShell" | "Sienna" | "Silver" | "SkyBlue" | "SlateBlue" | "SlateGray" | "Snow" | "SpringGreen" | "SteelBlue" | "Tan" | "Teal" | "Thistle" | "Tomato" | "Transparent" | "Turquoise" | "Violet" | "Wheat" | "White" | "WhiteSmoke" | "Yellow" | "YellowGreen" | Bind;

/** Property BackgroundColor of Type Color */
public backgroundColor?: ColorItem | string | null | Bind;

/** Property BadgeAnimation of Type IBadgeAnimation */
public badgeAnimation?: any;

/** Property BindingContext of Type Object */
public bindingContext?: any;

/** Property BorderColor of Type Color */
public borderColor?: ColorItem | string | null | Bind;

/** Property CascadeInputTransparent of Type Boolean */
public cascadeInputTransparent?: boolean | Bind;

/** Property class of Type IList`1 */
public class?: any;

/** Property ClassId of Type String */
public classId?: string | null | Bind;

/** Property Clip of Type Geometry */
public clip?: any;

/** Property ControlTemplate of Type ControlTemplate */
public controlTemplate?: any;

/** Property DisableLayout of Type Boolean */
public disableLayout?: boolean | Bind;

/** Property Dispatcher of Type IDispatcher */
public dispatcher?: any;

/** Property EffectControlProvider of Type IEffectControlProvider */
public effectControlProvider?: any;

/** Property FlowDirection of Type FlowDirection */
public flowDirection?: "MatchParent" | "LeftToRight" | "RightToLeft" | Bind;

/** Property HeightRequest of Type Double */
public heightRequest?: number | Bind;

/** Property HorizontalOptions of Type LayoutOptions */
public horizontalOptions?: "Start" | "Center" | "End" | "Fill" | "StartAndExpand" | "CenterAndExpand" | "EndAndExpand" | "FillAndExpand" | Bind;

/** Property InputTransparent of Type Boolean */
public inputTransparent?: boolean | Bind;

/** Property IsAnimated of Type Boolean */
public isAnimated?: boolean | Bind;

/** Property IsClippedToBounds of Type Boolean */
public isClippedToBounds?: boolean | Bind;

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

/** Property Margin of Type Thickness */
public margin?: /*Thickness*/ any;

/** Property MinimumHeightRequest of Type Double */
public minimumHeightRequest?: number | Bind;

/** Property MinimumWidthRequest of Type Double */
public minimumWidthRequest?: number | Bind;

/** Property Navigation of Type INavigation */
public navigation?: any;

/** Property Opacity of Type Double */
public opacity?: number | Bind;

/** Property Padding of Type Thickness */
public padding?: /*Thickness*/ any;

/** Property Parent of Type Element */
public parent?: any;

/** Property PlacementTarget of Type View */
public placementTarget?: any;

/** Property Platform of Type IPlatform */
public platform?: any;

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

/** Property Style of Type Style */
public style?: any;

/** Property StyleClass of Type IList`1 */
public styleClass?: any;

/** Property StyleId of Type String */
public styleId?: string | null | Bind;

/** Property TabIndex of Type Int32 */
public tabIndex?: number | Bind;

/** Property Text of Type String */
public text?: string | null | Bind;

/** Property TextColor of Type Color */
public textColor?: ColorItem | string | null | Bind;

/** Property TranslationX of Type Double */
public translationX?: number | Bind;

/** Property TranslationY of Type Double */
public translationY?: number | Bind;

/** Property VerticalOptions of Type LayoutOptions */
public verticalOptions?: "Start" | "Center" | "End" | "Fill" | "StartAndExpand" | "CenterAndExpand" | "EndAndExpand" | "FillAndExpand" | Bind;

/** Property Visual of Type IVisual */
public visual?: /*IVisual*/ any;

/** Property WidthRequest of Type Double */
public widthRequest?: number | Bind;
}


declare class TabView extends RootObject {
    
    
/** Property TabView.Background of Type Xamarin.Forms.Brush */
public static background: NodeFactory;;

/** Property TabView.Behaviors of Type Xamarin.Forms.Behavior */
public static behaviors: NodeFactory;;

/** Property TabView.Clip of Type Xamarin.Forms.Shapes.Geometry */
public static clip: NodeFactory;;

/** Property TabView.Content of Type Xamarin.Forms.View */
public static content: NodeFactory;;

/** Property TabView.ControlTemplate of Type Xamarin.Forms.ControlTemplate */
public static controlTemplate: NodeFactory;;

/** Property TabView.Effects of Type Xamarin.Forms.Effect */
public static effects: NodeFactory;;

/** Property TabView.GestureRecognizers of Type Xamarin.Forms.IGestureRecognizer */
public static gestureRecognizers: NodeFactory;;

/** Property TabView.Menu of Type Xamarin.Forms.Menu */
public static menu: NodeFactory;;

/** Property TabView.Resources of Type System.Collections.Generic.KeyValuePair`2[System.String,System.Object] */
public static resources: NodeFactory;;

/** Property TabView.StyleClass of Type System.String */
public static styleClass: NodeFactory;;

/** Property TabView.TabContentDataTemplate of Type Xamarin.Forms.DataTemplate */
public static tabContentDataTemplate: NodeFactory;;

/** Property TabView.TabIndicatorView of Type Xamarin.Forms.View */
public static tabIndicatorView: NodeFactory;;

/** Property TabView.TabItems of Type Xamarin.CommunityToolkit.UI.Views.TabViewItem */
public static tabItems: NodeFactory;;

/** Property TabView.TabStripBackgroundView of Type Xamarin.Forms.View */
public static tabStripBackgroundView: NodeFactory;;

/** Property TabView.TabViewItemDataTemplate of Type Xamarin.Forms.DataTemplate */
public static tabViewItemDataTemplate: NodeFactory;;

/** Property TabView.Triggers of Type Xamarin.Forms.TriggerBase */
public static triggers: NodeFactory;
    
    
/** Property AnchorX of Type Double */
public anchorX?: number | Bind;

/** Property AnchorY of Type Double */
public anchorY?: number | Bind;

/** Property AutomationId of Type String */
public automationId?: string | null | Bind;

/** Property Background of Type Brush */
public background?: "AliceBlue" | "AntiqueWhite" | "Aqua" | "Aquamarine" | "Azure" | "Beige" | "Bisque" | "Black" | "BlanchedAlmond" | "Blue" | "BlueViolet" | "Brown" | "BurlyWood" | "CadetBlue" | "Chartreuse" | "Chocolate" | "Coral" | "CornflowerBlue" | "Cornsilk" | "Crimson" | "Cyan" | "DarkBlue" | "DarkCyan" | "DarkGoldenrod" | "DarkGray" | "DarkGreen" | "DarkKhaki" | "DarkMagenta" | "DarkOliveGreen" | "DarkOrange" | "DarkOrchid" | "DarkRed" | "DarkSalmon" | "DarkSeaGreen" | "DarkSlateBlue" | "DarkSlateGray" | "DarkTurquoise" | "DarkViolet" | "DeepPink" | "DeepSkyBlue" | "DimGray" | "DodgerBlue" | "Firebrick" | "FloralWhite" | "ForestGreen" | "Fuchsia" | "Gainsboro" | "GhostWhite" | "Gold" | "Goldenrod" | "Gray" | "Green" | "GreenYellow" | "Honeydew" | "HotPink" | "IndianRed" | "Indigo" | "Ivory" | "Khaki" | "Lavender" | "LavenderBlush" | "LawnGreen" | "LemonChiffon" | "LightBlue" | "LightCoral" | "LightCyan" | "LightGoldenrodYellow" | "LightGray" | "LightGreen" | "LightPink" | "LightSalmon" | "LightSeaGreen" | "LightSkyBlue" | "LightSlateGray" | "LightSteelBlue" | "LightYellow" | "Lime" | "LimeGreen" | "Linen" | "Magenta" | "Maroon" | "MediumAquamarine" | "MediumBlue" | "MediumOrchid" | "MediumPurple" | "MediumSeaGreen" | "MediumSlateBlue" | "MediumSpringGreen" | "MediumTurquoise" | "MediumVioletRed" | "MidnightBlue" | "MintCream" | "MistyRose" | "Moccasin" | "NavajoWhite" | "Navy" | "OldLace" | "Olive" | "OliveDrab" | "Orange" | "OrangeRed" | "Orchid" | "PaleGoldenrod" | "PaleGreen" | "PaleTurquoise" | "PaleVioletRed" | "PapayaWhip" | "PeachPuff" | "Peru" | "Pink" | "Plum" | "PowderBlue" | "Purple" | "Red" | "RosyBrown" | "RoyalBlue" | "SaddleBrown" | "Salmon" | "SandyBrown" | "SeaGreen" | "SeaShell" | "Sienna" | "Silver" | "SkyBlue" | "SlateBlue" | "SlateGray" | "Snow" | "SpringGreen" | "SteelBlue" | "Tan" | "Teal" | "Thistle" | "Tomato" | "Transparent" | "Turquoise" | "Violet" | "Wheat" | "White" | "WhiteSmoke" | "Yellow" | "YellowGreen" | Bind;

/** Property BackgroundColor of Type Color */
public backgroundColor?: ColorItem | string | null | Bind;

/** Property BindingContext of Type Object */
public bindingContext?: any;

/** Property CascadeInputTransparent of Type Boolean */
public cascadeInputTransparent?: boolean | Bind;

/** Property class of Type IList`1 */
public class?: any;

/** Property ClassId of Type String */
public classId?: string | null | Bind;

/** Property Clip of Type Geometry */
public clip?: any;

/** Property Content of Type View */
public content?: any;

/** Property ControlTemplate of Type ControlTemplate */
public controlTemplate?: any;

/** Property DisableLayout of Type Boolean */
public disableLayout?: boolean | Bind;

/** Property Dispatcher of Type IDispatcher */
public dispatcher?: any;

/** Property EffectControlProvider of Type IEffectControlProvider */
public effectControlProvider?: any;

/** Property FlowDirection of Type FlowDirection */
public flowDirection?: "MatchParent" | "LeftToRight" | "RightToLeft" | Bind;

/** Property HeightRequest of Type Double */
public heightRequest?: number | Bind;

/** Property HorizontalOptions of Type LayoutOptions */
public horizontalOptions?: "Start" | "Center" | "End" | "Fill" | "StartAndExpand" | "CenterAndExpand" | "EndAndExpand" | "FillAndExpand" | Bind;

/** Property InputTransparent of Type Boolean */
public inputTransparent?: boolean | Bind;

/** Property IsClippedToBounds of Type Boolean */
public isClippedToBounds?: boolean | Bind;

/** Property IsEnabled of Type Boolean */
public isEnabled?: boolean | Bind;

/** Property IsInNativeLayout of Type Boolean */
public isInNativeLayout?: boolean | Bind;

/** Property IsNativeStateConsistent of Type Boolean */
public isNativeStateConsistent?: boolean | Bind;

/** Property IsPlatformEnabled of Type Boolean */
public isPlatformEnabled?: boolean | Bind;

/** Property IsSwipeEnabled of Type Boolean */
public isSwipeEnabled?: boolean | Bind;

/** Property IsTabStop of Type Boolean */
public isTabStop?: boolean | Bind;

/** Property IsTabStripVisible of Type Boolean */
public isTabStripVisible?: boolean | Bind;

/** Property IsTabTransitionEnabled of Type Boolean */
public isTabTransitionEnabled?: boolean | Bind;

/** Property IsVisible of Type Boolean */
public isVisible?: boolean | Bind;

/** Property Margin of Type Thickness */
public margin?: /*Thickness*/ any;

/** Property MinimumHeightRequest of Type Double */
public minimumHeightRequest?: number | Bind;

/** Property MinimumWidthRequest of Type Double */
public minimumWidthRequest?: number | Bind;

/** Property Navigation of Type INavigation */
public navigation?: any;

/** Property Opacity of Type Double */
public opacity?: number | Bind;

/** Property Padding of Type Thickness */
public padding?: /*Thickness*/ any;

/** Property Parent of Type Element */
public parent?: any;

/** Property Platform of Type IPlatform */
public platform?: any;

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

/** Property SelectedIndex of Type Int32 */
public selectedIndex?: number | Bind;

/** Property Style of Type Style */
public style?: any;

/** Property StyleClass of Type IList`1 */
public styleClass?: any;

/** Property StyleId of Type String */
public styleId?: string | null | Bind;

/** Property TabContentBackgroundColor of Type Color */
public tabContentBackgroundColor?: ColorItem | string | null | Bind;

/** Property TabContentDataTemplate of Type DataTemplate */
public tabContentDataTemplate?: any;

/** Property TabContentHeight of Type Double */
public tabContentHeight?: number | Bind;

/** Property TabIndex of Type Int32 */
public tabIndex?: number | Bind;

/** Property TabIndicatorColor of Type Color */
public tabIndicatorColor?: ColorItem | string | null | Bind;

/** Property TabIndicatorHeight of Type Double */
public tabIndicatorHeight?: number | Bind;

/** Property TabIndicatorPlacement of Type TabIndicatorPlacement */
public tabIndicatorPlacement?: "Top" | "Center" | "Bottom" | Bind;

/** Property TabIndicatorView of Type View */
public tabIndicatorView?: any;

/** Property TabIndicatorWidth of Type Double */
public tabIndicatorWidth?: number | Bind;

/** Property TabItems of Type ObservableCollection`1 */
public tabItems?: any;

/** Property TabItemsSource of Type IList */
public tabItemsSource?: any;

/** Property TabStripBackgroundColor of Type Color */
public tabStripBackgroundColor?: ColorItem | string | null | Bind;

/** Property TabStripBackgroundView of Type View */
public tabStripBackgroundView?: any;

/** Property TabStripBorderColor of Type Color */
public tabStripBorderColor?: ColorItem | string | null | Bind;

/** Property TabStripHeight of Type Double */
public tabStripHeight?: number | Bind;

/** Property TabStripPlacement of Type TabStripPlacement */
public tabStripPlacement?: "Top" | "Bottom" | Bind;

/** Property TabViewItemDataTemplate of Type DataTemplate */
public tabViewItemDataTemplate?: any;

/** Property TranslationX of Type Double */
public translationX?: number | Bind;

/** Property TranslationY of Type Double */
public translationY?: number | Bind;

/** Property VerticalOptions of Type LayoutOptions */
public verticalOptions?: "Start" | "Center" | "End" | "Fill" | "StartAndExpand" | "CenterAndExpand" | "EndAndExpand" | "FillAndExpand" | Bind;

/** Property Visual of Type IVisual */
public visual?: /*IVisual*/ any;

/** Property WidthRequest of Type Double */
public widthRequest?: number | Bind;
}


declare class TabViewItem extends RootObject {
    
    
/** Property TabViewItem.Background of Type Xamarin.Forms.Brush */
public static background: NodeFactory;;

/** Property TabViewItem.Behaviors of Type Xamarin.Forms.Behavior */
public static behaviors: NodeFactory;;

/** Property TabViewItem.Clip of Type Xamarin.Forms.Shapes.Geometry */
public static clip: NodeFactory;;

/** Property TabViewItem.Content of Type Xamarin.Forms.View */
public static content: NodeFactory;;

/** Property TabViewItem.ControlTemplate of Type Xamarin.Forms.ControlTemplate */
public static controlTemplate: NodeFactory;;

/** Property TabViewItem.CurrentContent of Type Xamarin.Forms.View */
public static currentContent: NodeFactory;;

/** Property TabViewItem.CurrentIcon of Type Xamarin.Forms.ImageSource */
public static currentIcon: NodeFactory;;

/** Property TabViewItem.Effects of Type Xamarin.Forms.Effect */
public static effects: NodeFactory;;

/** Property TabViewItem.GestureRecognizers of Type Xamarin.Forms.IGestureRecognizer */
public static gestureRecognizers: NodeFactory;;

/** Property TabViewItem.Icon of Type Xamarin.Forms.ImageSource */
public static icon: NodeFactory;;

/** Property TabViewItem.IconSelected of Type Xamarin.Forms.ImageSource */
public static iconSelected: NodeFactory;;

/** Property TabViewItem.Menu of Type Xamarin.Forms.Menu */
public static menu: NodeFactory;;

/** Property TabViewItem.Resources of Type System.Collections.Generic.KeyValuePair`2[System.String,System.Object] */
public static resources: NodeFactory;;

/** Property TabViewItem.StyleClass of Type System.String */
public static styleClass: NodeFactory;;

/** Property TabViewItem.Triggers of Type Xamarin.Forms.TriggerBase */
public static triggers: NodeFactory;
    
    
/** Property AnchorX of Type Double */
public anchorX?: number | Bind;

/** Property AnchorY of Type Double */
public anchorY?: number | Bind;

/** Property AutomationId of Type String */
public automationId?: string | null | Bind;

/** Property Background of Type Brush */
public background?: "AliceBlue" | "AntiqueWhite" | "Aqua" | "Aquamarine" | "Azure" | "Beige" | "Bisque" | "Black" | "BlanchedAlmond" | "Blue" | "BlueViolet" | "Brown" | "BurlyWood" | "CadetBlue" | "Chartreuse" | "Chocolate" | "Coral" | "CornflowerBlue" | "Cornsilk" | "Crimson" | "Cyan" | "DarkBlue" | "DarkCyan" | "DarkGoldenrod" | "DarkGray" | "DarkGreen" | "DarkKhaki" | "DarkMagenta" | "DarkOliveGreen" | "DarkOrange" | "DarkOrchid" | "DarkRed" | "DarkSalmon" | "DarkSeaGreen" | "DarkSlateBlue" | "DarkSlateGray" | "DarkTurquoise" | "DarkViolet" | "DeepPink" | "DeepSkyBlue" | "DimGray" | "DodgerBlue" | "Firebrick" | "FloralWhite" | "ForestGreen" | "Fuchsia" | "Gainsboro" | "GhostWhite" | "Gold" | "Goldenrod" | "Gray" | "Green" | "GreenYellow" | "Honeydew" | "HotPink" | "IndianRed" | "Indigo" | "Ivory" | "Khaki" | "Lavender" | "LavenderBlush" | "LawnGreen" | "LemonChiffon" | "LightBlue" | "LightCoral" | "LightCyan" | "LightGoldenrodYellow" | "LightGray" | "LightGreen" | "LightPink" | "LightSalmon" | "LightSeaGreen" | "LightSkyBlue" | "LightSlateGray" | "LightSteelBlue" | "LightYellow" | "Lime" | "LimeGreen" | "Linen" | "Magenta" | "Maroon" | "MediumAquamarine" | "MediumBlue" | "MediumOrchid" | "MediumPurple" | "MediumSeaGreen" | "MediumSlateBlue" | "MediumSpringGreen" | "MediumTurquoise" | "MediumVioletRed" | "MidnightBlue" | "MintCream" | "MistyRose" | "Moccasin" | "NavajoWhite" | "Navy" | "OldLace" | "Olive" | "OliveDrab" | "Orange" | "OrangeRed" | "Orchid" | "PaleGoldenrod" | "PaleGreen" | "PaleTurquoise" | "PaleVioletRed" | "PapayaWhip" | "PeachPuff" | "Peru" | "Pink" | "Plum" | "PowderBlue" | "Purple" | "Red" | "RosyBrown" | "RoyalBlue" | "SaddleBrown" | "Salmon" | "SandyBrown" | "SeaGreen" | "SeaShell" | "Sienna" | "Silver" | "SkyBlue" | "SlateBlue" | "SlateGray" | "Snow" | "SpringGreen" | "SteelBlue" | "Tan" | "Teal" | "Thistle" | "Tomato" | "Transparent" | "Turquoise" | "Violet" | "Wheat" | "White" | "WhiteSmoke" | "Yellow" | "YellowGreen" | Bind;

/** Property BackgroundColor of Type Color */
public backgroundColor?: ColorItem | string | null | Bind;

/** Property BadgeBackgroundColor of Type Color */
public badgeBackgroundColor?: ColorItem | string | null | Bind;

/** Property BadgeBackgroundColorSelected of Type Color */
public badgeBackgroundColorSelected?: ColorItem | string | null | Bind;

/** Property BadgeBorderColor of Type Color */
public badgeBorderColor?: ColorItem | string | null | Bind;

/** Property BadgeBorderColorSelected of Type Color */
public badgeBorderColorSelected?: ColorItem | string | null | Bind;

/** Property BadgeText of Type String */
public badgeText?: string | null | Bind;

/** Property BadgeTextColor of Type Color */
public badgeTextColor?: ColorItem | string | null | Bind;

/** Property BindingContext of Type Object */
public bindingContext?: any;

/** Property CascadeInputTransparent of Type Boolean */
public cascadeInputTransparent?: boolean | Bind;

/** Property class of Type IList`1 */
public class?: any;

/** Property ClassId of Type String */
public classId?: string | null | Bind;

/** Property Clip of Type Geometry */
public clip?: any;

/** Property Content of Type View */
public content?: any;

/** Property ControlTemplate of Type ControlTemplate */
public controlTemplate?: any;

/** Property CurrentBadgeBackgroundColor of Type Color */
public currentBadgeBackgroundColor?: ColorItem | string | null | Bind;

/** Property CurrentBadgeBorderColor of Type Color */
public currentBadgeBorderColor?: ColorItem | string | null | Bind;

/** Property CurrentContent of Type View */
public currentContent?: any;

/** Property CurrentFontAttributes of Type FontAttributes */
public currentFontAttributes?: "None" | "Bold" | "Italic" | Bind;

/** Property CurrentFontFamily of Type String */
public currentFontFamily?: string | null | Bind;

/** Property CurrentFontSize of Type Double */
public currentFontSize?: number | Bind;

/** Property CurrentIcon of Type ImageSource */
public currentIcon?: /*ImageSource*/ any;

/** Property CurrentTextColor of Type Color */
public currentTextColor?: ColorItem | string | null | Bind;

/** Property DisableLayout of Type Boolean */
public disableLayout?: boolean | Bind;

/** Property Dispatcher of Type IDispatcher */
public dispatcher?: any;

/** Property EffectControlProvider of Type IEffectControlProvider */
public effectControlProvider?: any;

/** Property FlowDirection of Type FlowDirection */
public flowDirection?: "MatchParent" | "LeftToRight" | "RightToLeft" | Bind;

/** Property FontAttributes of Type FontAttributes */
public fontAttributes?: "None" | "Bold" | "Italic" | Bind;

/** Property FontAttributesSelected of Type FontAttributes */
public fontAttributesSelected?: "None" | "Bold" | "Italic" | Bind;

/** Property FontFamily of Type String */
public fontFamily?: string | null | Bind;

/** Property FontFamilySelected of Type String */
public fontFamilySelected?: string | null | Bind;

/** Property FontSize of Type Double */
public fontSize?: number | Bind;

/** Property FontSizeSelected of Type Double */
public fontSizeSelected?: number | Bind;

/** Property HeightRequest of Type Double */
public heightRequest?: number | Bind;

/** Property HorizontalOptions of Type LayoutOptions */
public horizontalOptions?: "Start" | "Center" | "End" | "Fill" | "StartAndExpand" | "CenterAndExpand" | "EndAndExpand" | "FillAndExpand" | Bind;

/** Property Icon of Type ImageSource */
public icon?: /*ImageSource*/ any;

/** Property IconSelected of Type ImageSource */
public iconSelected?: /*ImageSource*/ any;

/** Property InputTransparent of Type Boolean */
public inputTransparent?: boolean | Bind;

/** Property IsClippedToBounds of Type Boolean */
public isClippedToBounds?: boolean | Bind;

/** Property IsEnabled of Type Boolean */
public isEnabled?: boolean | Bind;

/** Property IsInNativeLayout of Type Boolean */
public isInNativeLayout?: boolean | Bind;

/** Property IsNativeStateConsistent of Type Boolean */
public isNativeStateConsistent?: boolean | Bind;

/** Property IsPlatformEnabled of Type Boolean */
public isPlatformEnabled?: boolean | Bind;

/** Property IsSelected of Type Boolean */
public isSelected?: boolean | Bind;

/** Property IsTabStop of Type Boolean */
public isTabStop?: boolean | Bind;

/** Property IsVisible of Type Boolean */
public isVisible?: boolean | Bind;

/** Property Margin of Type Thickness */
public margin?: /*Thickness*/ any;

/** Property MinimumHeightRequest of Type Double */
public minimumHeightRequest?: number | Bind;

/** Property MinimumWidthRequest of Type Double */
public minimumWidthRequest?: number | Bind;

/** Property Navigation of Type INavigation */
public navigation?: any;

/** Property Opacity of Type Double */
public opacity?: number | Bind;

/** Property Padding of Type Thickness */
public padding?: /*Thickness*/ any;

/** Property Parent of Type Element */
public parent?: any;

/** Property Platform of Type IPlatform */
public platform?: any;

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

/** Property Style of Type Style */
public style?: any;

/** Property StyleClass of Type IList`1 */
public styleClass?: any;

/** Property StyleId of Type String */
public styleId?: string | null | Bind;

/** Property TabAnimation of Type ITabViewItemAnimation */
public tabAnimation?: any;

/** Property TabIndex of Type Int32 */
public tabIndex?: number | Bind;

/** Property TabWidth of Type Double */
public tabWidth?: number | Bind;

/** Property TapCommand of Type ICommand */
public tapCommand?: any;

/** Property Text of Type String */
public text?: string | null | Bind;

/** Property TextColor of Type Color */
public textColor?: ColorItem | string | null | Bind;

/** Property TextColorSelected of Type Color */
public textColorSelected?: ColorItem | string | null | Bind;

/** Property TranslationX of Type Double */
public translationX?: number | Bind;

/** Property TranslationY of Type Double */
public translationY?: number | Bind;

/** Property VerticalOptions of Type LayoutOptions */
public verticalOptions?: "Start" | "Center" | "End" | "Fill" | "StartAndExpand" | "CenterAndExpand" | "EndAndExpand" | "FillAndExpand" | Bind;

/** Property Visual of Type IVisual */
public visual?: /*IVisual*/ any;

/** Property WidthRequest of Type Double */
public widthRequest?: number | Bind;
}


declare class UniformGrid extends RootObject {
    
    
/** Property UniformGrid.Background of Type Xamarin.Forms.Brush */
public static background: NodeFactory;;

/** Property UniformGrid.Behaviors of Type Xamarin.Forms.Behavior */
public static behaviors: NodeFactory;;

/** Property UniformGrid.Children of Type Xamarin.Forms.View */
public static children: NodeFactory;;

/** Property UniformGrid.Clip of Type Xamarin.Forms.Shapes.Geometry */
public static clip: NodeFactory;;

/** Property UniformGrid.Effects of Type Xamarin.Forms.Effect */
public static effects: NodeFactory;;

/** Property UniformGrid.GestureRecognizers of Type Xamarin.Forms.IGestureRecognizer */
public static gestureRecognizers: NodeFactory;;

/** Property UniformGrid.Menu of Type Xamarin.Forms.Menu */
public static menu: NodeFactory;;

/** Property UniformGrid.Resources of Type System.Collections.Generic.KeyValuePair`2[System.String,System.Object] */
public static resources: NodeFactory;;

/** Property UniformGrid.StyleClass of Type System.String */
public static styleClass: NodeFactory;;

/** Property UniformGrid.Triggers of Type Xamarin.Forms.TriggerBase */
public static triggers: NodeFactory;
    
    
/** Property AnchorX of Type Double */
public anchorX?: number | Bind;

/** Property AnchorY of Type Double */
public anchorY?: number | Bind;

/** Property AutomationId of Type String */
public automationId?: string | null | Bind;

/** Property Background of Type Brush */
public background?: "AliceBlue" | "AntiqueWhite" | "Aqua" | "Aquamarine" | "Azure" | "Beige" | "Bisque" | "Black" | "BlanchedAlmond" | "Blue" | "BlueViolet" | "Brown" | "BurlyWood" | "CadetBlue" | "Chartreuse" | "Chocolate" | "Coral" | "CornflowerBlue" | "Cornsilk" | "Crimson" | "Cyan" | "DarkBlue" | "DarkCyan" | "DarkGoldenrod" | "DarkGray" | "DarkGreen" | "DarkKhaki" | "DarkMagenta" | "DarkOliveGreen" | "DarkOrange" | "DarkOrchid" | "DarkRed" | "DarkSalmon" | "DarkSeaGreen" | "DarkSlateBlue" | "DarkSlateGray" | "DarkTurquoise" | "DarkViolet" | "DeepPink" | "DeepSkyBlue" | "DimGray" | "DodgerBlue" | "Firebrick" | "FloralWhite" | "ForestGreen" | "Fuchsia" | "Gainsboro" | "GhostWhite" | "Gold" | "Goldenrod" | "Gray" | "Green" | "GreenYellow" | "Honeydew" | "HotPink" | "IndianRed" | "Indigo" | "Ivory" | "Khaki" | "Lavender" | "LavenderBlush" | "LawnGreen" | "LemonChiffon" | "LightBlue" | "LightCoral" | "LightCyan" | "LightGoldenrodYellow" | "LightGray" | "LightGreen" | "LightPink" | "LightSalmon" | "LightSeaGreen" | "LightSkyBlue" | "LightSlateGray" | "LightSteelBlue" | "LightYellow" | "Lime" | "LimeGreen" | "Linen" | "Magenta" | "Maroon" | "MediumAquamarine" | "MediumBlue" | "MediumOrchid" | "MediumPurple" | "MediumSeaGreen" | "MediumSlateBlue" | "MediumSpringGreen" | "MediumTurquoise" | "MediumVioletRed" | "MidnightBlue" | "MintCream" | "MistyRose" | "Moccasin" | "NavajoWhite" | "Navy" | "OldLace" | "Olive" | "OliveDrab" | "Orange" | "OrangeRed" | "Orchid" | "PaleGoldenrod" | "PaleGreen" | "PaleTurquoise" | "PaleVioletRed" | "PapayaWhip" | "PeachPuff" | "Peru" | "Pink" | "Plum" | "PowderBlue" | "Purple" | "Red" | "RosyBrown" | "RoyalBlue" | "SaddleBrown" | "Salmon" | "SandyBrown" | "SeaGreen" | "SeaShell" | "Sienna" | "Silver" | "SkyBlue" | "SlateBlue" | "SlateGray" | "Snow" | "SpringGreen" | "SteelBlue" | "Tan" | "Teal" | "Thistle" | "Tomato" | "Transparent" | "Turquoise" | "Violet" | "Wheat" | "White" | "WhiteSmoke" | "Yellow" | "YellowGreen" | Bind;

/** Property BackgroundColor of Type Color */
public backgroundColor?: ColorItem | string | null | Bind;

/** Property BindingContext of Type Object */
public bindingContext?: any;

/** Property CascadeInputTransparent of Type Boolean */
public cascadeInputTransparent?: boolean | Bind;

/** Property class of Type IList`1 */
public class?: any;

/** Property ClassId of Type String */
public classId?: string | null | Bind;

/** Property Clip of Type Geometry */
public clip?: any;

/** Property DisableLayout of Type Boolean */
public disableLayout?: boolean | Bind;

/** Property Dispatcher of Type IDispatcher */
public dispatcher?: any;

/** Property EffectControlProvider of Type IEffectControlProvider */
public effectControlProvider?: any;

/** Property FlowDirection of Type FlowDirection */
public flowDirection?: "MatchParent" | "LeftToRight" | "RightToLeft" | Bind;

/** Property HeightRequest of Type Double */
public heightRequest?: number | Bind;

/** Property HorizontalOptions of Type LayoutOptions */
public horizontalOptions?: "Start" | "Center" | "End" | "Fill" | "StartAndExpand" | "CenterAndExpand" | "EndAndExpand" | "FillAndExpand" | Bind;

/** Property InputTransparent of Type Boolean */
public inputTransparent?: boolean | Bind;

/** Property IsClippedToBounds of Type Boolean */
public isClippedToBounds?: boolean | Bind;

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

/** Property Margin of Type Thickness */
public margin?: /*Thickness*/ any;

/** Property MinimumHeightRequest of Type Double */
public minimumHeightRequest?: number | Bind;

/** Property MinimumWidthRequest of Type Double */
public minimumWidthRequest?: number | Bind;

/** Property Navigation of Type INavigation */
public navigation?: any;

/** Property Opacity of Type Double */
public opacity?: number | Bind;

/** Property Padding of Type Thickness */
public padding?: /*Thickness*/ any;

/** Property Parent of Type Element */
public parent?: any;

/** Property Platform of Type IPlatform */
public platform?: any;

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

/** Property Style of Type Style */
public style?: any;

/** Property StyleClass of Type IList`1 */
public styleClass?: any;

/** Property StyleId of Type String */
public styleId?: string | null | Bind;

/** Property TabIndex of Type Int32 */
public tabIndex?: number | Bind;

/** Property TranslationX of Type Double */
public translationX?: number | Bind;

/** Property TranslationY of Type Double */
public translationY?: number | Bind;

/** Property VerticalOptions of Type LayoutOptions */
public verticalOptions?: "Start" | "Center" | "End" | "Fill" | "StartAndExpand" | "CenterAndExpand" | "EndAndExpand" | "FillAndExpand" | Bind;

/** Property Visual of Type IVisual */
public visual?: /*IVisual*/ any;

/** Property WidthRequest of Type Double */
public widthRequest?: number | Bind;
}


declare class GravatarImageExtension extends GravatarImageSource {
    
    
/** Property GravatarImageExtension.Effects of Type Xamarin.Forms.Effect */
public static effects: NodeFactory;;

/** Property GravatarImageExtension.Menu of Type Xamarin.Forms.Menu */
public static menu: NodeFactory;
    
    
/** Property AutomationId of Type String */
public automationId?: string | null | Bind;

/** Property BindingContext of Type Object */
public bindingContext?: any;

/** Property ClassId of Type String */
public classId?: string | null | Bind;

/** Property Dispatcher of Type IDispatcher */
public dispatcher?: any;

/** Property EffectControlProvider of Type IEffectControlProvider */
public effectControlProvider?: any;

/** Property Parent of Type Element */
public parent?: any;

/** Property Platform of Type IPlatform */
public platform?: any;

/** Property StyleId of Type String */
public styleId?: string | null | Bind;
}


declare class MediaSource extends RootObject {
    
    
/** Property MediaSource.Effects of Type Xamarin.Forms.Effect */
public static effects: NodeFactory;;

/** Property MediaSource.Menu of Type Xamarin.Forms.Menu */
public static menu: NodeFactory;
    
    
/** Property AutomationId of Type String */
public automationId?: string | null | Bind;

/** Property BindingContext of Type Object */
public bindingContext?: any;

/** Property ClassId of Type String */
public classId?: string | null | Bind;

/** Property Dispatcher of Type IDispatcher */
public dispatcher?: any;

/** Property EffectControlProvider of Type IEffectControlProvider */
public effectControlProvider?: any;

/** Property Parent of Type Element */
public parent?: any;

/** Property Platform of Type IPlatform */
public platform?: any;

/** Property StyleId of Type String */
public styleId?: string | null | Bind;
}


declare class FileMediaSource extends MediaSource {
    
    
/** Property FileMediaSource.Effects of Type Xamarin.Forms.Effect */
public static effects: NodeFactory;;

/** Property FileMediaSource.Menu of Type Xamarin.Forms.Menu */
public static menu: NodeFactory;
    
    
/** Property AutomationId of Type String */
public automationId?: string | null | Bind;

/** Property BindingContext of Type Object */
public bindingContext?: any;

/** Property ClassId of Type String */
public classId?: string | null | Bind;

/** Property Dispatcher of Type IDispatcher */
public dispatcher?: any;

/** Property EffectControlProvider of Type IEffectControlProvider */
public effectControlProvider?: any;

/** Property File of Type String */
public file?: string | null | Bind;

/** Property Parent of Type Element */
public parent?: any;

/** Property Platform of Type IPlatform */
public platform?: any;

/** Property StyleId of Type String */
public styleId?: string | null | Bind;
}


declare class StreamMediaSource extends MediaSource {
    
    
/** Property StreamMediaSource.Effects of Type Xamarin.Forms.Effect */
public static effects: NodeFactory;;

/** Property StreamMediaSource.Menu of Type Xamarin.Forms.Menu */
public static menu: NodeFactory;
    
    
/** Property AutomationId of Type String */
public automationId?: string | null | Bind;

/** Property BindingContext of Type Object */
public bindingContext?: any;

/** Property ClassId of Type String */
public classId?: string | null | Bind;

/** Property Dispatcher of Type IDispatcher */
public dispatcher?: any;

/** Property EffectControlProvider of Type IEffectControlProvider */
public effectControlProvider?: any;

/** Property Parent of Type Element */
public parent?: any;

/** Property Platform of Type IPlatform */
public platform?: any;

/** Property Stream of Type Func`2 */
public stream?: any;

/** Property StyleId of Type String */
public styleId?: string | null | Bind;
}


declare class UriMediaSource extends MediaSource {
    
    
/** Property UriMediaSource.Effects of Type Xamarin.Forms.Effect */
public static effects: NodeFactory;;

/** Property UriMediaSource.Menu of Type Xamarin.Forms.Menu */
public static menu: NodeFactory;
    
    
/** Property AutomationId of Type String */
public automationId?: string | null | Bind;

/** Property BindingContext of Type Object */
public bindingContext?: any;

/** Property ClassId of Type String */
public classId?: string | null | Bind;

/** Property Dispatcher of Type IDispatcher */
public dispatcher?: any;

/** Property EffectControlProvider of Type IEffectControlProvider */
public effectControlProvider?: any;

/** Property Parent of Type Element */
public parent?: any;

/** Property Platform of Type IPlatform */
public platform?: any;

/** Property StyleId of Type String */
public styleId?: string | null | Bind;

/** Property Uri of Type Uri */
public uri?: any;
}


declare class MultiConverterParameter extends RootObject {
    
    
    
    
/** Property BindingContext of Type Object */
public bindingContext?: any;

/** Property ConverterType of Type Type */
public converterType?: any;

/** Property Dispatcher of Type IDispatcher */
public dispatcher?: any;

/** Property Value of Type Object */
public value?: any;
}


declare class EventToCommandBehavior extends RootObject {
    
    
    
    
/** Property BindingContext of Type Object */
public bindingContext?: any;

/** Property Command of Type ICommand */
public command?: any;

/** Property CommandParameter of Type Object */
public commandParameter?: any;

/** Property Dispatcher of Type IDispatcher */
public dispatcher?: any;

/** Property EventArgsConverter of Type IValueConverter */
public eventArgsConverter?: any;

/** Property EventName of Type String */
public eventName?: string | null | Bind;
}


declare class AnimationBehavior extends EventToCommandBehavior {
    
    
    
    
/** Property AnimationType of Type AnimationBase */
public animationType?: any;

/** Property BindingContext of Type Object */
public bindingContext?: any;

/** Property Dispatcher of Type IDispatcher */
public dispatcher?: any;
}


declare class AnimationBase extends RootObject {
    
    
    
    
/** Property BindingContext of Type Object */
public bindingContext?: any;

/** Property Dispatcher of Type IDispatcher */
public dispatcher?: any;

/** Property Duration of Type UInt32 */
public duration?: any;

/** Property Easing of Type Easing */
public easing?: "Linear" | "SinOut" | "SinIn" | "SinInOut" | "CubicIn" | "CubicOut" | "CubicInOut" | "BounceOut" | "BounceIn" | "SpringIn" | "SpringOut" | Bind;
}


declare class FadeAnimation extends AnimationBase {
    
    
    
    
/** Property BindingContext of Type Object */
public bindingContext?: any;

/** Property Dispatcher of Type IDispatcher */
public dispatcher?: any;

/** Property Duration of Type UInt32 */
public duration?: any;

/** Property Easing of Type Easing */
public easing?: "Linear" | "SinOut" | "SinIn" | "SinInOut" | "CubicIn" | "CubicOut" | "CubicInOut" | "BounceOut" | "BounceIn" | "SpringIn" | "SpringOut" | Bind;

/** Property Fade of Type Double */
public fade?: number | Bind;
}


declare class RotateAnimation extends AnimationBase {
    
    
    
    
/** Property BindingContext of Type Object */
public bindingContext?: any;

/** Property Dispatcher of Type IDispatcher */
public dispatcher?: any;

/** Property Duration of Type UInt32 */
public duration?: any;

/** Property Easing of Type Easing */
public easing?: "Linear" | "SinOut" | "SinIn" | "SinInOut" | "CubicIn" | "CubicOut" | "CubicInOut" | "BounceOut" | "BounceIn" | "SpringIn" | "SpringOut" | Bind;

/** Property Rotation of Type Double */
public rotation?: number | Bind;
}


declare class FlipHorizontalAnimation extends RotateAnimation {
    
    
    
    
/** Property BindingContext of Type Object */
public bindingContext?: any;

/** Property Dispatcher of Type IDispatcher */
public dispatcher?: any;

/** Property Duration of Type UInt32 */
public duration?: any;

/** Property Easing of Type Easing */
public easing?: "Linear" | "SinOut" | "SinIn" | "SinInOut" | "CubicIn" | "CubicOut" | "CubicInOut" | "BounceOut" | "BounceIn" | "SpringIn" | "SpringOut" | Bind;
}


declare class FlipVerticalAnimation extends RotateAnimation {
    
    
    
    
/** Property BindingContext of Type Object */
public bindingContext?: any;

/** Property Dispatcher of Type IDispatcher */
public dispatcher?: any;

/** Property Duration of Type UInt32 */
public duration?: any;

/** Property Easing of Type Easing */
public easing?: "Linear" | "SinOut" | "SinIn" | "SinInOut" | "CubicIn" | "CubicOut" | "CubicInOut" | "BounceOut" | "BounceIn" | "SpringIn" | "SpringOut" | Bind;
}


declare class ScaleAnimation extends AnimationBase {
    
    
    
    
/** Property BindingContext of Type Object */
public bindingContext?: any;

/** Property Dispatcher of Type IDispatcher */
public dispatcher?: any;

/** Property Duration of Type UInt32 */
public duration?: any;

/** Property Easing of Type Easing */
public easing?: "Linear" | "SinOut" | "SinIn" | "SinInOut" | "CubicIn" | "CubicOut" | "CubicInOut" | "BounceOut" | "BounceIn" | "SpringIn" | "SpringOut" | Bind;

/** Property Scale of Type Double */
public scale?: number | Bind;
}


declare class ShakeAnimation extends AnimationBase {
    
    
    
    
/** Property BindingContext of Type Object */
public bindingContext?: any;

/** Property Dispatcher of Type IDispatcher */
public dispatcher?: any;

/** Property Duration of Type UInt32 */
public duration?: any;

/** Property Easing of Type Easing */
public easing?: "Linear" | "SinOut" | "SinIn" | "SinInOut" | "CubicIn" | "CubicOut" | "CubicInOut" | "BounceOut" | "BounceIn" | "SpringIn" | "SpringOut" | Bind;

/** Property StartFactor of Type Double */
public startFactor?: number | Bind;
}


declare class ImpliedOrderGridBehavior extends RootObject {
    
    
    
    
/** Property BindingContext of Type Object */
public bindingContext?: any;

/** Property Dispatcher of Type IDispatcher */
public dispatcher?: any;

/** Property ThrowOnLayoutWarning of Type Boolean */
public throwOnLayoutWarning?: boolean | Bind;
}


declare class MaskedBehavior extends RootObject {
    
    
    
    
/** Property BindingContext of Type Object */
public bindingContext?: any;

/** Property Dispatcher of Type IDispatcher */
public dispatcher?: any;

/** Property Mask of Type String */
public mask?: string | null | Bind;

/** Property UnMaskedCharacter of Type Char */
public unMaskedCharacter?: any;
}


declare class MaxLengthReachedBehavior extends RootObject {
    
    
    
    
/** Property BindingContext of Type Object */
public bindingContext?: any;

/** Property Command of Type ICommand */
public command?: any;

/** Property Dispatcher of Type IDispatcher */
public dispatcher?: any;

/** Property ShouldDismissKeyboardAutomatically of Type Boolean */
public shouldDismissKeyboardAutomatically?: boolean | Bind;
}


declare class UserStoppedTypingBehavior extends RootObject {
    
    
    
    
/** Property BindingContext of Type Object */
public bindingContext?: any;

/** Property Command of Type ICommand */
public command?: any;

/** Property Dispatcher of Type IDispatcher */
public dispatcher?: any;

/** Property MinimumLengthThreshold of Type Int32 */
public minimumLengthThreshold?: number | Bind;

/** Property ShouldDismissKeyboardAutomatically of Type Boolean */
public shouldDismissKeyboardAutomatically?: boolean | Bind;

/** Property StoppedTypingTimeThreshold of Type Int32 */
public stoppedTypingTimeThreshold?: number | Bind;
}


declare class ValidationBehavior extends RootObject {
    
    
    
    
/** Property BindingContext of Type Object */
public bindingContext?: any;

/** Property Dispatcher of Type IDispatcher */
public dispatcher?: any;

/** Property Flags of Type ValidationFlags */
public flags?: "None" | "ValidateOnAttaching" | "ValidateOnFocusing" | "ValidateOnUnfocusing" | "ValidateOnValueChanging" | "ForceMakeValidWhenFocused" | Bind;

/** Property ForceValidateCommand of Type ICommand */
public forceValidateCommand?: any;

/** Property InvalidStyle of Type Style */
public invalidStyle?: any;

/** Property IsValid of Type Boolean */
public isValid?: boolean | Bind;

/** Property ValidStyle of Type Style */
public validStyle?: any;

/** Property Value of Type Object */
public value?: any;

/** Property ValuePropertyName of Type String */
public valuePropertyName?: string | null | Bind;
}


declare class TextValidationBehavior extends ValidationBehavior {
    
    
    
    
/** Property BindingContext of Type Object */
public bindingContext?: any;

/** Property DecorationFlags of Type TextDecorationFlags */
public decorationFlags?: "None" | "TrimStart" | "TrimEnd" | "Trim" | "NullToEmpty" | "NormalizeWhiteSpace" | Bind;

/** Property Dispatcher of Type IDispatcher */
public dispatcher?: any;

/** Property MaximumLength of Type Int32 */
public maximumLength?: number | Bind;

/** Property MinimumLength of Type Int32 */
public minimumLength?: number | Bind;

/** Property RegexOptions of Type RegexOptions */
public regexOptions?: "None" | "IgnoreCase" | "Multiline" | "ExplicitCapture" | "Compiled" | "Singleline" | "IgnorePatternWhitespace" | "RightToLeft" | "ECMAScript" | "CultureInvariant" | Bind;

/** Property RegexPattern of Type String */
public regexPattern?: string | null | Bind;
}


declare class CharactersValidationBehavior extends TextValidationBehavior {
    
    
    
    
/** Property BindingContext of Type Object */
public bindingContext?: any;

/** Property CharacterType of Type CharacterType */
public characterType?: "LowercaseLetter" | "UppercaseLetter" | "Letter" | "Digit" | "Alphanumeric" | "Whitespace" | "NonAlphanumericSymbol" | "Any" | "LowercaseLatinLetter" | "UppercaseLatinLetter" | "LatinLetter" | Bind;

/** Property Dispatcher of Type IDispatcher */
public dispatcher?: any;

/** Property MaximumCharacterCount of Type Int32 */
public maximumCharacterCount?: number | Bind;

/** Property MinimumCharacterCount of Type Int32 */
public minimumCharacterCount?: number | Bind;
}


declare class EmailValidationBehavior extends TextValidationBehavior {
    
    
    
    
/** Property BindingContext of Type Object */
public bindingContext?: any;

/** Property Dispatcher of Type IDispatcher */
public dispatcher?: any;
}


declare class MultiValidationBehavior extends ValidationBehavior {
    
/** Attached Property MultiValidationBehavior.Error of Type BindableProperty*/
public static error: AttachedNode;

    
/** Property MultiValidationBehavior.Children of Type Xamarin.CommunityToolkit.Behaviors.Internals.ValidationBehavior */
public static children: NodeFactory;;

/** Property MultiValidationBehavior.Errors of Type System.Object */
public static errors: NodeFactory;
    
    
/** Property BindingContext of Type Object */
public bindingContext?: any;

/** Property Dispatcher of Type IDispatcher */
public dispatcher?: any;

/** Property Errors of Type List`1 */
public errors?: any;
}


declare class NumericValidationBehavior extends ValidationBehavior {
    
    
    
    
/** Property BindingContext of Type Object */
public bindingContext?: any;

/** Property Dispatcher of Type IDispatcher */
public dispatcher?: any;

/** Property MaximumDecimalPlaces of Type Int32 */
public maximumDecimalPlaces?: number | Bind;

/** Property MaximumValue of Type Double */
public maximumValue?: number | Bind;

/** Property MinimumDecimalPlaces of Type Int32 */
public minimumDecimalPlaces?: number | Bind;

/** Property MinimumValue of Type Double */
public minimumValue?: number | Bind;
}


declare class RequiredStringValidationBehavior extends ValidationBehavior {
    
    
    
    
/** Property BindingContext of Type Object */
public bindingContext?: any;

/** Property Dispatcher of Type IDispatcher */
public dispatcher?: any;

/** Property RequiredString of Type String */
public requiredString?: string | null | Bind;
}


declare class UriValidationBehavior extends TextValidationBehavior {
    
    
    
    
/** Property BindingContext of Type Object */
public bindingContext?: any;

/** Property Dispatcher of Type IDispatcher */
public dispatcher?: any;

/** Property UriKind of Type UriKind */
public uriKind?: "RelativeOrAbsolute" | "Absolute" | "Relative" | Bind;
}
const XCT = { get AvatarView(): typeof AvatarView { return  this._AvatarView || (this._AvatarView = bridge.getClass('Xamarin.CommunityToolkit.UI.Views.AvatarView, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get BadgeView(): typeof BadgeView { return  this._BadgeView || (this._BadgeView = bridge.getClass('Xamarin.CommunityToolkit.UI.Views.BadgeView, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get CameraView(): typeof CameraView { return  this._CameraView || (this._CameraView = bridge.getClass('Xamarin.CommunityToolkit.UI.Views.CameraView, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get DockLayout(): typeof DockLayout { return  this._DockLayout || (this._DockLayout = bridge.getClass('Xamarin.CommunityToolkit.UI.Views.DockLayout, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get Expander(): typeof Expander { return  this._Expander || (this._Expander = bridge.getClass('Xamarin.CommunityToolkit.UI.Views.Expander, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get GravatarImageSource(): typeof GravatarImageSource { return  this._GravatarImageSource || (this._GravatarImageSource = bridge.getClass('Xamarin.CommunityToolkit.UI.Views.GravatarImageSource, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get MediaElement(): typeof MediaElement { return  this._MediaElement || (this._MediaElement = bridge.getClass('Xamarin.CommunityToolkit.UI.Views.MediaElement, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get RangeSlider(): typeof RangeSlider { return  this._RangeSlider || (this._RangeSlider = bridge.getClass('Xamarin.CommunityToolkit.UI.Views.RangeSlider, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get Shield(): typeof Shield { return  this._Shield || (this._Shield = bridge.getClass('Xamarin.CommunityToolkit.UI.Views.Shield, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get SideMenuView(): typeof SideMenuView { return  this._SideMenuView || (this._SideMenuView = bridge.getClass('Xamarin.CommunityToolkit.UI.Views.SideMenuView, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get StateView(): typeof StateView { return  this._StateView || (this._StateView = bridge.getClass('Xamarin.CommunityToolkit.UI.Views.StateView, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get TabBadgeTemplate(): typeof TabBadgeTemplate { return  this._TabBadgeTemplate || (this._TabBadgeTemplate = bridge.getClass('Xamarin.CommunityToolkit.UI.Views.TabBadgeTemplate, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get TabBadgeView(): typeof TabBadgeView { return  this._TabBadgeView || (this._TabBadgeView = bridge.getClass('Xamarin.CommunityToolkit.UI.Views.TabBadgeView, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get TabView(): typeof TabView { return  this._TabView || (this._TabView = bridge.getClass('Xamarin.CommunityToolkit.UI.Views.TabView, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get TabViewItem(): typeof TabViewItem { return  this._TabViewItem || (this._TabViewItem = bridge.getClass('Xamarin.CommunityToolkit.UI.Views.TabViewItem, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get UniformGrid(): typeof UniformGrid { return  this._UniformGrid || (this._UniformGrid = bridge.getClass('Xamarin.CommunityToolkit.UI.Views.UniformGrid, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get GravatarImageExtension(): typeof GravatarImageExtension { return  this._GravatarImageExtension || (this._GravatarImageExtension = bridge.getClass('Xamarin.CommunityToolkit.Extensions.GravatarImageExtension, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get MediaSource(): typeof MediaSource { return  this._MediaSource || (this._MediaSource = bridge.getClass('Xamarin.CommunityToolkit.Core.MediaSource, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get FileMediaSource(): typeof FileMediaSource { return  this._FileMediaSource || (this._FileMediaSource = bridge.getClass('Xamarin.CommunityToolkit.Core.FileMediaSource, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get StreamMediaSource(): typeof StreamMediaSource { return  this._StreamMediaSource || (this._StreamMediaSource = bridge.getClass('Xamarin.CommunityToolkit.Core.StreamMediaSource, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get UriMediaSource(): typeof UriMediaSource { return  this._UriMediaSource || (this._UriMediaSource = bridge.getClass('Xamarin.CommunityToolkit.Core.UriMediaSource, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get MultiConverterParameter(): typeof MultiConverterParameter { return  this._MultiConverterParameter || (this._MultiConverterParameter = bridge.getClass('Xamarin.CommunityToolkit.Converters.MultiConverterParameter, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get EventToCommandBehavior(): typeof EventToCommandBehavior { return  this._EventToCommandBehavior || (this._EventToCommandBehavior = bridge.getClass('Xamarin.CommunityToolkit.Behaviors.EventToCommandBehavior, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get AnimationBehavior(): typeof AnimationBehavior { return  this._AnimationBehavior || (this._AnimationBehavior = bridge.getClass('Xamarin.CommunityToolkit.Behaviors.AnimationBehavior, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get AnimationBase(): typeof AnimationBase { return  this._AnimationBase || (this._AnimationBase = bridge.getClass('Xamarin.CommunityToolkit.Behaviors.AnimationBase, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get FadeAnimation(): typeof FadeAnimation { return  this._FadeAnimation || (this._FadeAnimation = bridge.getClass('Xamarin.CommunityToolkit.Behaviors.FadeAnimation, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get RotateAnimation(): typeof RotateAnimation { return  this._RotateAnimation || (this._RotateAnimation = bridge.getClass('Xamarin.CommunityToolkit.Behaviors.RotateAnimation, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get FlipHorizontalAnimation(): typeof FlipHorizontalAnimation { return  this._FlipHorizontalAnimation || (this._FlipHorizontalAnimation = bridge.getClass('Xamarin.CommunityToolkit.Behaviors.FlipHorizontalAnimation, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get FlipVerticalAnimation(): typeof FlipVerticalAnimation { return  this._FlipVerticalAnimation || (this._FlipVerticalAnimation = bridge.getClass('Xamarin.CommunityToolkit.Behaviors.FlipVerticalAnimation, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get ScaleAnimation(): typeof ScaleAnimation { return  this._ScaleAnimation || (this._ScaleAnimation = bridge.getClass('Xamarin.CommunityToolkit.Behaviors.ScaleAnimation, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get ShakeAnimation(): typeof ShakeAnimation { return  this._ShakeAnimation || (this._ShakeAnimation = bridge.getClass('Xamarin.CommunityToolkit.Behaviors.ShakeAnimation, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get ImpliedOrderGridBehavior(): typeof ImpliedOrderGridBehavior { return  this._ImpliedOrderGridBehavior || (this._ImpliedOrderGridBehavior = bridge.getClass('Xamarin.CommunityToolkit.Behaviors.ImpliedOrderGridBehavior, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get MaskedBehavior(): typeof MaskedBehavior { return  this._MaskedBehavior || (this._MaskedBehavior = bridge.getClass('Xamarin.CommunityToolkit.Behaviors.MaskedBehavior, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get MaxLengthReachedBehavior(): typeof MaxLengthReachedBehavior { return  this._MaxLengthReachedBehavior || (this._MaxLengthReachedBehavior = bridge.getClass('Xamarin.CommunityToolkit.Behaviors.MaxLengthReachedBehavior, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get UserStoppedTypingBehavior(): typeof UserStoppedTypingBehavior { return  this._UserStoppedTypingBehavior || (this._UserStoppedTypingBehavior = bridge.getClass('Xamarin.CommunityToolkit.Behaviors.UserStoppedTypingBehavior, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get ValidationBehavior(): typeof ValidationBehavior { return  this._ValidationBehavior || (this._ValidationBehavior = bridge.getClass('Xamarin.CommunityToolkit.Behaviors.Internals.ValidationBehavior, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get TextValidationBehavior(): typeof TextValidationBehavior { return  this._TextValidationBehavior || (this._TextValidationBehavior = bridge.getClass('Xamarin.CommunityToolkit.Behaviors.TextValidationBehavior, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get CharactersValidationBehavior(): typeof CharactersValidationBehavior { return  this._CharactersValidationBehavior || (this._CharactersValidationBehavior = bridge.getClass('Xamarin.CommunityToolkit.Behaviors.CharactersValidationBehavior, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get EmailValidationBehavior(): typeof EmailValidationBehavior { return  this._EmailValidationBehavior || (this._EmailValidationBehavior = bridge.getClass('Xamarin.CommunityToolkit.Behaviors.EmailValidationBehavior, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get MultiValidationBehavior(): typeof MultiValidationBehavior { return  this._MultiValidationBehavior || (this._MultiValidationBehavior = bridge.getClass('Xamarin.CommunityToolkit.Behaviors.MultiValidationBehavior, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get NumericValidationBehavior(): typeof NumericValidationBehavior { return  this._NumericValidationBehavior || (this._NumericValidationBehavior = bridge.getClass('Xamarin.CommunityToolkit.Behaviors.NumericValidationBehavior, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get RequiredStringValidationBehavior(): typeof RequiredStringValidationBehavior { return  this._RequiredStringValidationBehavior || (this._RequiredStringValidationBehavior = bridge.getClass('Xamarin.CommunityToolkit.Behaviors.RequiredStringValidationBehavior, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null')); },
	get UriValidationBehavior(): typeof UriValidationBehavior { return  this._UriValidationBehavior || (this._UriValidationBehavior = bridge.getClass('Xamarin.CommunityToolkit.Behaviors.UriValidationBehavior, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null')); }
};
export default XCT;
