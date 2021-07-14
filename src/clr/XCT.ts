//tslint:disable
import XNode, { RootObject, NodeFactory, AttachedNode } from "@web-atoms/core/dist/core/XNode";
import Bind from "@web-atoms/core/dist/core/Bind";
import { ColorItem } from "@web-atoms/core/dist/core/Colors";

import * as XF from "./XF";
declare var bridge: any;
const assemblyName = `Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null`;
let ns = ``;
function create(name: string, ns: string) {
    return {
        configurable: true,
        enumerable: true,
        get() {
            const t = bridge.getClass(`${ns}.${name}, ${assemblyName}`); 
            Object.defineProperty(this, name, {
                configurable: true,
                enumerable: true,
                writable: true,
                value: t
            });
            return t;
        }
    };
}

namespace XCT {
    export declare class AvatarView extends RootObject {
        public static aspect: AttachedNode;
        public static size: AttachedNode;
        public static cornerRadius: AttachedNode;
        public static borderColor: AttachedNode;
        public static color: AttachedNode;
        public static source: AttachedNode;
        public static text: AttachedNode;
        public static textColor: AttachedNode;
        public static fontFamily: AttachedNode;
        public static fontSize: AttachedNode;
        public static fontAttributes: AttachedNode;
        public static colorTheme: AttachedNode;
        /**
        * Xamarin.Forms.Aspect
        */
        public aspect: "AspectFit" | "AspectFill" | "Fill" | string | number | null | undefined | Bind;
        /**
        * System.Double
        */
        public size: number | null | Bind;
        /**
        * System.Double
        */
        public cornerRadius: number | null | Bind;
        /**
        * Xamarin.Forms.Color
        */
        public borderColor: XF.default.Color | ColorItem | string | null | Bind;
        /**
        * Xamarin.Forms.Color
        */
        public color: XF.default.Color | ColorItem | string | null | Bind;
        /**
        * Xamarin.Forms.ImageSource
        */
        public source: /*ImageSource*/ any | Bind;
        /**
        * System.String
        */
        public text: string | null | Bind;
        /**
        * Xamarin.Forms.Color
        */
        public textColor: XF.default.Color | ColorItem | string | null | Bind;
        /**
        * System.String
        */
        public fontFamily: string | null | Bind;
        /**
        * System.Double
        */
        public fontSize: number | null | Bind;
        /**
        * Xamarin.Forms.FontAttributes
        */
        public fontAttributes: "None" | "Bold" | "Italic" | string | number | null | undefined | Bind;
        /**
        * Xamarin.CommunityToolkit.UI.Views.IColorTheme
        */
        public colorTheme: RootObject | Bind;
    }
    export declare class BadgeView extends RootObject {
        public static content: AttachedNode;
        public static badgePosition: AttachedNode;
        public static autoHide: AttachedNode;
        public static isAnimated: AttachedNode;
        public static badgeAnimation: AttachedNode;
        public static backgroundColor: AttachedNode;
        public static borderColor: AttachedNode;
        public static hasShadow: AttachedNode;
        public static textColor: AttachedNode;
        public static text: AttachedNode;
        public static fontSize: AttachedNode;
        public static fontFamily: AttachedNode;
        public static fontAttributes: AttachedNode;
        /**
        * Xamarin.Forms.View
        */
        public content: XF.default.View | Bind;
        /**
        * Xamarin.CommunityToolkit.UI.Views.BadgePosition
        */
        public badgePosition: "TopLeft" | "TopRight" | "BottomLeft" | "BottomRight" | string | number | null | undefined | Bind;
        /**
        * System.Boolean
        */
        public autoHide: boolean | null | Bind;
        /**
        * System.Boolean
        */
        public isAnimated: boolean | null | Bind;
        /**
        * Xamarin.CommunityToolkit.UI.Views.IBadgeAnimation
        */
        public badgeAnimation: RootObject | Bind;
        /**
        * Xamarin.Forms.Color
        */
        public backgroundColor: XF.default.Color | ColorItem | string | null | Bind;
        /**
        * Xamarin.Forms.Color
        */
        public borderColor: XF.default.Color | ColorItem | string | null | Bind;
        /**
        * System.Boolean
        */
        public hasShadow: boolean | null | Bind;
        /**
        * Xamarin.Forms.Color
        */
        public textColor: XF.default.Color | ColorItem | string | null | Bind;
        /**
        * System.String
        */
        public text: string | null | Bind;
        /**
        * System.Double
        */
        public fontSize: number | null | Bind;
        /**
        * System.String
        */
        public fontFamily: string | null | Bind;
        /**
        * Xamarin.Forms.FontAttributes
        */
        public fontAttributes: "None" | "Bold" | "Italic" | string | number | null | undefined | Bind;
    }
    export declare class CameraView extends XF.default.View {
        public static shutterCommand: AttachedNode;
        public static isBusy: AttachedNode;
        public static isAvailable: AttachedNode;
        public static cameraOptions: AttachedNode;
        public static captureMode: AttachedNode;
        public static videoStabilization: AttachedNode;
        public static flashMode: AttachedNode;
        public static zoom: AttachedNode;
        public static maxZoom: AttachedNode;
        /**
        * System.Windows.Input.ICommand
        */
        public shutterCommand: RootObject /*System.Windows.Input.ICommand*/ | Bind;
        /**
        * System.Boolean
        */
        public isBusy: boolean | null | Bind;
        /**
        * System.Boolean
        */
        public isAvailable: boolean | null | Bind;
        /**
        * Xamarin.CommunityToolkit.UI.Views.CameraOptions
        */
        public cameraOptions: "Default" | "Front" | "Back" | "External" | string | number | null | undefined | Bind;
        /**
        * Xamarin.CommunityToolkit.UI.Views.CameraCaptureMode
        */
        public captureMode: "Default" | "Photo" | "Video" | string | number | null | undefined | Bind;
        /**
        * System.Boolean
        */
        public videoStabilization: boolean | null | Bind;
        /**
        * Xamarin.CommunityToolkit.UI.Views.CameraFlashMode
        */
        public flashMode: "Off" | "On" | "Auto" | "Torch" | string | number | null | undefined | Bind;
        /**
        * System.Double
        */
        public zoom: number | null | Bind;
        /**
        * System.Double
        */
        public maxZoom: number | null | Bind;
    }
    export declare class DockLayout extends XF.default.Layout$Generic {
        public static dock: AttachedNode;
        public static lastChildFill: AttachedNode;
        /**
        * Xamarin.CommunityToolkit.UI.Views.Dock
        */
        public dock: "Left" | "Top" | "Right" | "Bottom" | string | number | null | undefined | Bind;
        /**
        * System.Boolean
        */
        public lastChildFill: boolean | null | Bind;
    }
    export declare class Expander extends RootObject {
        public static header: AttachedNode;
        public static content: AttachedNode;
        public static contentTemplate: AttachedNode;
        public static isExpanded: AttachedNode;
        public static direction: AttachedNode;
        public static expandAnimationLength: AttachedNode;
        public static collapseAnimationLength: AttachedNode;
        public static expandAnimationEasing: AttachedNode;
        public static collapseAnimationEasing: AttachedNode;
        public static state: AttachedNode;
        public static commandParameter: AttachedNode;
        public static command: AttachedNode;
        public static forceUpdateSizeCommand: AttachedNode;
        /**
        * Xamarin.Forms.View
        */
        public header: XF.default.View | Bind;
        /**
        * Xamarin.Forms.View
        */
        public content: XF.default.View | Bind;
        /**
        * Xamarin.Forms.DataTemplate
        */
        public contentTemplate: XF.default.DataTemplate | Bind;
        /**
        * System.Boolean
        */
        public isExpanded: boolean | null | Bind;
        /**
        * Xamarin.CommunityToolkit.UI.Views.ExpandDirection
        */
        public direction: "Down" | "Up" | "Left" | "Right" | string | number | null | undefined | Bind;
        /**
        * System.UInt32
        */
        public expandAnimationLength: number | null | Bind;
        /**
        * System.UInt32
        */
        public collapseAnimationLength: number | null | Bind;
        /**
        * Xamarin.Forms.Easing
        */
        public expandAnimationEasing: "Linear" | "SinOut" | "SinIn" | "SinInOut" | "CubicIn" | "CubicOut" | "CubicInOut" | "BounceOut" | "BounceIn" | "SpringIn" | "SpringOut" | XF.default.Easing | Bind | Bind;
        /**
        * Xamarin.Forms.Easing
        */
        public collapseAnimationEasing: "Linear" | "SinOut" | "SinIn" | "SinInOut" | "CubicIn" | "CubicOut" | "CubicInOut" | "BounceOut" | "BounceIn" | "SpringIn" | "SpringOut" | XF.default.Easing | Bind | Bind;
        /**
        * Xamarin.CommunityToolkit.UI.Views.ExpandState
        */
        public state: "Expanding" | "Expanded" | "Collapsing" | "Collapsed" | string | number | null | undefined | Bind;
        /**
        * System.Object
        */
        public commandParameter: RootObject /*System.Object*/ | Bind;
        /**
        * System.Windows.Input.ICommand
        */
        public command: RootObject /*System.Windows.Input.ICommand*/ | Bind;
        /**
        * System.Windows.Input.ICommand
        */
        public forceUpdateSizeCommand: RootObject /*System.Windows.Input.ICommand*/ | Bind;
    }
    export declare class GravatarImageSource extends XF.default.ImageSource {
        public static email: AttachedNode;
        public static size: AttachedNode;
        public static default: AttachedNode;
        public static cachingEnabled: AttachedNode;
        public static cacheValidity: AttachedNode;
        /**
        * System.String
        */
        public email: string | null | Bind;
        /**
        * System.Int32
        */
        public size: number | null | Bind;
        /**
        * Xamarin.CommunityToolkit.UI.Views.DefaultGravatar
        */
        public default: "FileNotFound" | "MysteryPerson" | "Identicon" | "MonsterId" | "Wavatar" | "Retro" | "Robohash" | "Blank" | string | number | null | undefined | Bind;
        /**
        * System.Boolean
        */
        public cachingEnabled: boolean | null | Bind;
        /**
        * System.TimeSpan
        */
        public cacheValidity: RootObject /*System.TimeSpan*/ | Bind;
    }
    export declare class MediaElement extends XF.default.View {
        public static aspect: AttachedNode;
        public static autoPlay: AttachedNode;
        public static bufferingProgress: AttachedNode;
        public static currentState: AttachedNode;
        public static duration: AttachedNode;
        public static isLooping: AttachedNode;
        public static keepScreenOn: AttachedNode;
        public static position: AttachedNode;
        public static showsPlaybackControls: AttachedNode;
        public static source: AttachedNode;
        public static videoHeight: AttachedNode;
        public static videoWidth: AttachedNode;
        public static volume: AttachedNode;
        /**
        * Xamarin.Forms.Aspect
        */
        public aspect: "AspectFit" | "AspectFill" | "Fill" | string | number | null | undefined | Bind;
        /**
        * System.Boolean
        */
        public autoPlay: boolean | null | Bind;
        /**
        * System.Double
        */
        public bufferingProgress: number | null | Bind;
        /**
        * System.Boolean
        */
        public canSeek: boolean | null | Bind;
        /**
        * Xamarin.CommunityToolkit.UI.Views.MediaElementState
        */
        public currentState: "Closed" | "Opening" | "Buffering" | "Playing" | "Paused" | "Stopped" | string | number | null | undefined | Bind;
        /**
        * System.Nullable`1[[System.TimeSpan, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]]
        */
        public duration: RootObject /*System.Nullable`1[[System.TimeSpan, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]]*/ | Bind;
        /**
        * System.Boolean
        */
        public isLooping: boolean | null | Bind;
        /**
        * System.Boolean
        */
        public keepScreenOn: boolean | null | Bind;
        /**
        * System.Boolean
        */
        public showsPlaybackControls: boolean | null | Bind;
        /**
        * System.TimeSpan
        */
        public position: RootObject /*System.TimeSpan*/ | Bind;
        /**
        * Xamarin.CommunityToolkit.Core.MediaSource
        */
        public source: RootObject | Bind;
        /**
        * System.Int32
        */
        public videoHeight: number | null | Bind;
        /**
        * System.Int32
        */
        public videoWidth: number | null | Bind;
        /**
        * System.Double
        */
        public volume: number | null | Bind;
    }
    export declare class RangeSlider extends RootObject {
        public static minimumValue: AttachedNode;
        public static maximumValue: AttachedNode;
        public static stepValue: AttachedNode;
        public static lowerValue: AttachedNode;
        public static upperValue: AttachedNode;
        public static thumbSize: AttachedNode;
        public static lowerThumbSize: AttachedNode;
        public static upperThumbSize: AttachedNode;
        public static trackSize: AttachedNode;
        public static thumbColor: AttachedNode;
        public static lowerThumbColor: AttachedNode;
        public static upperThumbColor: AttachedNode;
        public static trackColor: AttachedNode;
        public static trackHighlightColor: AttachedNode;
        public static thumbBorderColor: AttachedNode;
        public static lowerThumbBorderColor: AttachedNode;
        public static upperThumbBorderColor: AttachedNode;
        public static trackBorderColor: AttachedNode;
        public static trackHighlightBorderColor: AttachedNode;
        public static valueLabelStyle: AttachedNode;
        public static lowerValueLabelStyle: AttachedNode;
        public static upperValueLabelStyle: AttachedNode;
        public static valueLabelStringFormat: AttachedNode;
        public static lowerThumbView: AttachedNode;
        public static upperThumbView: AttachedNode;
        public static valueLabelSpacing: AttachedNode;
        public static thumbRadius: AttachedNode;
        public static lowerThumbRadius: AttachedNode;
        public static upperThumbRadius: AttachedNode;
        public static trackRadius: AttachedNode;
        /**
        * System.Double
        */
        public minimumValue: number | null | Bind;
        /**
        * System.Double
        */
        public maximumValue: number | null | Bind;
        /**
        * System.Double
        */
        public stepValue: number | null | Bind;
        /**
        * System.Double
        */
        public lowerValue: number | null | Bind;
        /**
        * System.Double
        */
        public upperValue: number | null | Bind;
        /**
        * System.Double
        */
        public thumbSize: number | null | Bind;
        /**
        * System.Double
        */
        public lowerThumbSize: number | null | Bind;
        /**
        * System.Double
        */
        public upperThumbSize: number | null | Bind;
        /**
        * System.Double
        */
        public trackSize: number | null | Bind;
        /**
        * Xamarin.Forms.Color
        */
        public thumbColor: XF.default.Color | ColorItem | string | null | Bind;
        /**
        * Xamarin.Forms.Color
        */
        public lowerThumbColor: XF.default.Color | ColorItem | string | null | Bind;
        /**
        * Xamarin.Forms.Color
        */
        public upperThumbColor: XF.default.Color | ColorItem | string | null | Bind;
        /**
        * Xamarin.Forms.Color
        */
        public trackColor: XF.default.Color | ColorItem | string | null | Bind;
        /**
        * Xamarin.Forms.Color
        */
        public trackHighlightColor: XF.default.Color | ColorItem | string | null | Bind;
        /**
        * Xamarin.Forms.Color
        */
        public thumbBorderColor: XF.default.Color | ColorItem | string | null | Bind;
        /**
        * Xamarin.Forms.Color
        */
        public lowerThumbBorderColor: XF.default.Color | ColorItem | string | null | Bind;
        /**
        * Xamarin.Forms.Color
        */
        public upperThumbBorderColor: XF.default.Color | ColorItem | string | null | Bind;
        /**
        * Xamarin.Forms.Color
        */
        public trackBorderColor: XF.default.Color | ColorItem | string | null | Bind;
        /**
        * Xamarin.Forms.Color
        */
        public trackHighlightBorderColor: XF.default.Color | ColorItem | string | null | Bind;
        /**
        * Xamarin.Forms.Style
        */
        public valueLabelStyle: XF.default.Style | Bind;
        /**
        * Xamarin.Forms.Style
        */
        public lowerValueLabelStyle: XF.default.Style | Bind;
        /**
        * Xamarin.Forms.Style
        */
        public upperValueLabelStyle: XF.default.Style | Bind;
        /**
        * System.String
        */
        public valueLabelStringFormat: string | null | Bind;
        /**
        * Xamarin.Forms.View
        */
        public lowerThumbView: XF.default.View | Bind;
        /**
        * Xamarin.Forms.View
        */
        public upperThumbView: XF.default.View | Bind;
        /**
        * System.Double
        */
        public valueLabelSpacing: number | null | Bind;
        /**
        * System.Double
        */
        public thumbRadius: number | null | Bind;
        /**
        * System.Double
        */
        public lowerThumbRadius: number | null | Bind;
        /**
        * System.Double
        */
        public upperThumbRadius: number | null | Bind;
        /**
        * System.Double
        */
        public trackRadius: number | null | Bind;
    }
    export declare class Shield extends RootObject {
        public static subject: AttachedNode;
        public static status: AttachedNode;
        public static color: AttachedNode;
        public static textColor: AttachedNode;
        public static fontSize: AttachedNode;
        public static fontFamily: AttachedNode;
        public static fontAttributes: AttachedNode;
        public static command: AttachedNode;
        public static commandParameter: AttachedNode;
        /**
        * System.String
        */
        public subject: string | null | Bind;
        /**
        * System.String
        */
        public status: string | null | Bind;
        /**
        * Xamarin.Forms.Color
        */
        public color: XF.default.Color | ColorItem | string | null | Bind;
        /**
        * Xamarin.Forms.Color
        */
        public textColor: XF.default.Color | ColorItem | string | null | Bind;
        /**
        * System.Double
        */
        public fontSize: number | null | Bind;
        /**
        * System.String
        */
        public fontFamily: string | null | Bind;
        /**
        * Xamarin.Forms.FontAttributes
        */
        public fontAttributes: "None" | "Bold" | "Italic" | string | number | null | undefined | Bind;
        /**
        * System.Windows.Input.ICommand
        */
        public command: RootObject /*System.Windows.Input.ICommand*/ | Bind;
        /**
        * System.Object
        */
        public commandParameter: RootObject /*System.Object*/ | Bind;
    }
    export declare class SideMenuView extends RootObject {
        public static position: AttachedNode;
        public static menuWidthPercentage: AttachedNode;
        public static menuGestureEnabled: AttachedNode;
        public static shift: AttachedNode;
        public static currentGestureShift: AttachedNode;
        public static gestureThreshold: AttachedNode;
        public static cancelVerticalGestureThreshold: AttachedNode;
        public static allowInterceptGesture: AttachedNode;
        public static state: AttachedNode;
        public static currentGestureState: AttachedNode;
        /**
        * Xamarin.CommunityToolkit.UI.Views.ISideMenuList`1[[Xamarin.Forms.View, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null]]
        */
        public children: RootObject | Bind;
        /**
        * System.Double
        */
        public shift: number | null | Bind;
        /**
        * System.Double
        */
        public currentGestureShift: number | null | Bind;
        /**
        * System.Double
        */
        public gestureThreshold: number | null | Bind;
        /**
        * System.Double
        */
        public cancelVerticalGestureThreshold: number | null | Bind;
        /**
        * System.Boolean
        */
        public allowInterceptGesture: boolean | null | Bind;
        /**
        * Xamarin.CommunityToolkit.UI.Views.SideMenuState
        */
        public state: "MainViewShown" | "RightMenuShown" | "LeftMenuShown" | string | number | null | undefined | Bind;
        /**
        * Xamarin.CommunityToolkit.UI.Views.SideMenuState
        */
        public currentGestureState: "MainViewShown" | "RightMenuShown" | "LeftMenuShown" | string | number | null | undefined | Bind;
    }
    export declare class StateLayout extends RootObject {
        public static currentState: AttachedNode;
        public static currentCustomStateKey: AttachedNode;
        public static animateStateChanges: AttachedNode;
        public static stateViews: AttachedNode;
    }
    export declare class StateView extends XF.default.ContentView {
        public static stateKey: AttachedNode;
        public static customStateKey: AttachedNode;
        public static repeatCount: AttachedNode;
        public static template: AttachedNode;
        /**
        * Xamarin.CommunityToolkit.UI.Views.LayoutState
        */
        public stateKey: "None" | "Loading" | "Saving" | "Success" | "Error" | "Empty" | "Custom" | string | number | null | undefined | Bind;
        /**
        * System.String
        */
        public customStateKey: string | null | Bind;
        /**
        * System.Int32
        */
        public repeatCount: number | null | Bind;
        /**
        * Xamarin.Forms.DataTemplate
        */
        public template: XF.default.DataTemplate | Bind;
    }
    export declare class TabBadgeTemplate extends XF.default.Grid {
    }
    export declare class TabBadgeView extends XF.default.TemplatedView {
        public static placementTarget: AttachedNode;
        public static autoHide: AttachedNode;
        public static isAnimated: AttachedNode;
        public static badgeAnimation: AttachedNode;
        public static backgroundColor: AttachedNode;
        public static borderColor: AttachedNode;
        public static textColor: AttachedNode;
        public static text: AttachedNode;
        /**
        * Xamarin.Forms.View
        */
        public placementTarget: XF.default.View | Bind;
        /**
        * System.Boolean
        */
        public autoHide: boolean | null | Bind;
        /**
        * System.Boolean
        */
        public isAnimated: boolean | null | Bind;
        /**
        * Xamarin.CommunityToolkit.UI.Views.IBadgeAnimation
        */
        public badgeAnimation: RootObject | Bind;
        /**
        * Xamarin.Forms.Color
        */
        public backgroundColor: XF.default.Color | ColorItem | string | null | Bind;
        /**
        * Xamarin.Forms.Color
        */
        public borderColor: XF.default.Color | ColorItem | string | null | Bind;
        /**
        * Xamarin.Forms.Color
        */
        public textColor: XF.default.Color | ColorItem | string | null | Bind;
        /**
        * System.String
        */
        public text: string | null | Bind;
    }
    export declare class TabView extends XF.default.ContentView {
        public static tabItemsSource: AttachedNode;
        public static tabViewItemDataTemplate: AttachedNode;
        public static tabContentDataTemplate: AttachedNode;
        public static selectedIndex: AttachedNode;
        public static tabStripPlacement: AttachedNode;
        public static tabStripBackgroundColor: AttachedNode;
        public static tabStripBackgroundView: AttachedNode;
        public static tabStripBorderColor: AttachedNode;
        public static tabContentBackgroundColor: AttachedNode;
        public static tabStripHeight: AttachedNode;
        public static isTabStripVisible: AttachedNode;
        public static tabContentHeight: AttachedNode;
        public static tabIndicatorColor: AttachedNode;
        public static tabIndicatorHeight: AttachedNode;
        public static tabIndicatorWidth: AttachedNode;
        public static tabIndicatorView: AttachedNode;
        public static tabIndicatorPlacement: AttachedNode;
        public static isTabTransitionEnabled: AttachedNode;
        public static isSwipeEnabled: AttachedNode;
        /**
        * System.Collections.ObjectModel.ObservableCollection`1[[Xamarin.CommunityToolkit.UI.Views.TabViewItem, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]
        */
        public tabItems: any;
        public static tabItems: AttachedNode;
        /**
        * System.Collections.IList
        */
        public tabItemsSource: any;
        /**
        * Xamarin.Forms.DataTemplate
        */
        public tabViewItemDataTemplate: XF.default.DataTemplate | Bind;
        /**
        * Xamarin.Forms.DataTemplate
        */
        public tabContentDataTemplate: XF.default.DataTemplate | Bind;
        /**
        * System.Int32
        */
        public selectedIndex: number | null | Bind;
        /**
        * Xamarin.CommunityToolkit.UI.Views.TabStripPlacement
        */
        public tabStripPlacement: "Top" | "Bottom" | string | number | null | undefined | Bind;
        /**
        * Xamarin.Forms.Color
        */
        public tabStripBackgroundColor: XF.default.Color | ColorItem | string | null | Bind;
        /**
        * Xamarin.Forms.View
        */
        public tabStripBackgroundView: XF.default.View | Bind;
        /**
        * Xamarin.Forms.Color
        */
        public tabStripBorderColor: XF.default.Color | ColorItem | string | null | Bind;
        /**
        * Xamarin.Forms.Color
        */
        public tabContentBackgroundColor: XF.default.Color | ColorItem | string | null | Bind;
        /**
        * System.Double
        */
        public tabStripHeight: number | null | Bind;
        /**
        * System.Boolean
        */
        public isTabStripVisible: boolean | null | Bind;
        /**
        * System.Double
        */
        public tabContentHeight: number | null | Bind;
        /**
        * Xamarin.Forms.Color
        */
        public tabIndicatorColor: XF.default.Color | ColorItem | string | null | Bind;
        /**
        * System.Double
        */
        public tabIndicatorHeight: number | null | Bind;
        /**
        * System.Double
        */
        public tabIndicatorWidth: number | null | Bind;
        /**
        * Xamarin.Forms.View
        */
        public tabIndicatorView: XF.default.View | Bind;
        /**
        * Xamarin.CommunityToolkit.UI.Views.TabIndicatorPlacement
        */
        public tabIndicatorPlacement: "Top" | "Center" | "Bottom" | string | number | null | undefined | Bind;
        /**
        * System.Boolean
        */
        public isTabTransitionEnabled: boolean | null | Bind;
        /**
        * System.Boolean
        */
        public isSwipeEnabled: boolean | null | Bind;
    }
    export declare class TabViewItem extends XF.default.TemplatedView {
        public static text: AttachedNode;
        public static textColor: AttachedNode;
        public static textColorSelected: AttachedNode;
        public static fontSize: AttachedNode;
        public static fontSizeSelected: AttachedNode;
        public static fontFamily: AttachedNode;
        public static fontFamilySelected: AttachedNode;
        public static fontAttributes: AttachedNode;
        public static fontAttributesSelected: AttachedNode;
        public static content: AttachedNode;
        public static icon: AttachedNode;
        public static iconSelected: AttachedNode;
        public static isSelected: AttachedNode;
        public static badgeText: AttachedNode;
        public static tabWidth: AttachedNode;
        public static tabAnimation: AttachedNode;
        public static badgeTextColor: AttachedNode;
        public static badgeBackgroundColor: AttachedNode;
        public static badgeBackgroundColorSelected: AttachedNode;
        public static badgeBorderColor: AttachedNode;
        public static badgeBorderColorSelected: AttachedNode;
        public static tapCommand: AttachedNode;
        public static currentTextColor: AttachedNode;
        public static currentFontSize: AttachedNode;
        public static currentIcon: AttachedNode;
        public static currentFontFamily: AttachedNode;
        public static currentFontAttributes: AttachedNode;
        public static currentBadgeBackgroundColor: AttachedNode;
        public static currentBadgeBorderColor: AttachedNode;
        public static currentContent: AttachedNode;
        /**
        * System.String
        */
        public text: string | null | Bind;
        /**
        * Xamarin.Forms.Color
        */
        public textColor: XF.default.Color | ColorItem | string | null | Bind;
        /**
        * Xamarin.Forms.Color
        */
        public textColorSelected: XF.default.Color | ColorItem | string | null | Bind;
        /**
        * System.Double
        */
        public fontSize: number | null | Bind;
        /**
        * System.Double
        */
        public fontSizeSelected: number | null | Bind;
        /**
        * System.String
        */
        public fontFamily: string | null | Bind;
        /**
        * System.String
        */
        public fontFamilySelected: string | null | Bind;
        /**
        * Xamarin.Forms.FontAttributes
        */
        public fontAttributes: "None" | "Bold" | "Italic" | string | number | null | undefined | Bind;
        /**
        * Xamarin.Forms.FontAttributes
        */
        public fontAttributesSelected: "None" | "Bold" | "Italic" | string | number | null | undefined | Bind;
        /**
        * Xamarin.Forms.View
        */
        public content: XF.default.View | Bind;
        /**
        * Xamarin.Forms.ImageSource
        */
        public icon: /*ImageSource*/ any | Bind;
        /**
        * Xamarin.Forms.ImageSource
        */
        public iconSelected: /*ImageSource*/ any | Bind;
        /**
        * System.Boolean
        */
        public isSelected: boolean | null | Bind;
        /**
        * System.Double
        */
        public tabWidth: number | null | Bind;
        /**
        * Xamarin.CommunityToolkit.UI.Views.ITabViewItemAnimation
        */
        public tabAnimation: RootObject | Bind;
        /**
        * System.String
        */
        public badgeText: string | null | Bind;
        /**
        * Xamarin.Forms.Color
        */
        public badgeTextColor: XF.default.Color | ColorItem | string | null | Bind;
        /**
        * Xamarin.Forms.Color
        */
        public badgeBackgroundColor: XF.default.Color | ColorItem | string | null | Bind;
        /**
        * Xamarin.Forms.Color
        */
        public badgeBackgroundColorSelected: XF.default.Color | ColorItem | string | null | Bind;
        /**
        * Xamarin.Forms.Color
        */
        public badgeBorderColor: XF.default.Color | ColorItem | string | null | Bind;
        /**
        * Xamarin.Forms.Color
        */
        public badgeBorderColorSelected: XF.default.Color | ColorItem | string | null | Bind;
        /**
        * System.Windows.Input.ICommand
        */
        public tapCommand: RootObject /*System.Windows.Input.ICommand*/ | Bind;
        /**
        * Xamarin.Forms.Color
        */
        public currentTextColor: XF.default.Color | ColorItem | string | null | Bind;
        /**
        * System.Double
        */
        public currentFontSize: number | null | Bind;
        /**
        * Xamarin.Forms.ImageSource
        */
        public currentIcon: /*ImageSource*/ any | Bind;
        /**
        * System.String
        */
        public currentFontFamily: string | null | Bind;
        /**
        * Xamarin.Forms.FontAttributes
        */
        public currentFontAttributes: "None" | "Bold" | "Italic" | string | number | null | undefined | Bind;
        /**
        * Xamarin.Forms.Color
        */
        public currentBadgeBackgroundColor: XF.default.Color | ColorItem | string | null | Bind;
        /**
        * Xamarin.Forms.Color
        */
        public currentBadgeBorderColor: XF.default.Color | ColorItem | string | null | Bind;
        /**
        * Xamarin.Forms.View
        */
        public currentContent: XF.default.View | Bind;
    }
    export declare class UniformGrid extends XF.default.Layout$Generic {
    }
    export declare class GravatarImageExtension extends XCT.GravatarImageSource {
    }
    export declare class PageExtension extends RootObject {
        public static playToastAsync: AttachedNode;
        public static playSnackBarAsync: AttachedNode;
    }
    export declare class VisualElementExtension extends RootObject {
        public static rtAnimations: AttachedNode;
    }
    export declare class IconTintColorEffect extends RootObject {
        public static tintColor: AttachedNode;
    }
    export declare class IconTintColorEffectRouter extends XF.default.RoutingEffect {
    }
    export declare class RemoveBorderEffect extends XF.default.RoutingEffect {
    }
    export declare class SafeAreaEffect extends RootObject {
        public static safeArea: AttachedNode;
    }
    export declare class SafeAreaEffectRouter extends XF.default.RoutingEffect {
    }
    export declare class SelectAllTextEffect extends XF.default.RoutingEffect {
    }
    export declare class TouchEffect extends XF.default.RoutingEffect {
        public static animationDuration: AttachedNode;
        public static animationEasing: AttachedNode;
        public static pressedAnimationDuration: AttachedNode;
        public static pressedAnimationEasing: AttachedNode;
        public static normalAnimationDuration: AttachedNode;
        public static normalAnimationEasing: AttachedNode;
        public static hoveredAnimationDuration: AttachedNode;
        public static hoveredAnimationEasing: AttachedNode;
        public static pulseCount: AttachedNode;
        public static isToggled: AttachedNode;
        public static disallowTouchThreshold: AttachedNode;
        public static nativeAnimation: AttachedNode;
        public static nativeAnimationColor: AttachedNode;
        public static nativeAnimationRadius: AttachedNode;
        public static nativeAnimationShadowRadius: AttachedNode;
        public static normalBackgroundImageSource: AttachedNode;
        public static hoveredBackgroundImageSource: AttachedNode;
        public static pressedBackgroundImageSource: AttachedNode;
        public static backgroundImageAspect: AttachedNode;
        public static normalBackgroundImageAspect: AttachedNode;
        public static hoveredBackgroundImageAspect: AttachedNode;
        public static pressedBackgroundImageAspect: AttachedNode;
        public static shouldSetImageOnAnimationEnd: AttachedNode;
        public static isAvailable: AttachedNode;
        public static shouldMakeChildrenInputTransparent: AttachedNode;
        public static command: AttachedNode;
        public static longPressCommand: AttachedNode;
        public static commandParameter: AttachedNode;
        public static longPressCommandParameter: AttachedNode;
        public static longPressDuration: AttachedNode;
        public static status: AttachedNode;
        public static state: AttachedNode;
        public static interactionStatus: AttachedNode;
        public static hoverStatus: AttachedNode;
        public static hoverState: AttachedNode;
        public static normalBackgroundColor: AttachedNode;
        public static hoveredBackgroundColor: AttachedNode;
        public static pressedBackgroundColor: AttachedNode;
        public static normalOpacity: AttachedNode;
        public static hoveredOpacity: AttachedNode;
        public static pressedOpacity: AttachedNode;
        public static normalScale: AttachedNode;
        public static hoveredScale: AttachedNode;
        public static pressedScale: AttachedNode;
        public static normalTranslationX: AttachedNode;
        public static hoveredTranslationX: AttachedNode;
        public static pressedTranslationX: AttachedNode;
        public static normalTranslationY: AttachedNode;
        public static hoveredTranslationY: AttachedNode;
        public static pressedTranslationY: AttachedNode;
        public static normalRotation: AttachedNode;
        public static hoveredRotation: AttachedNode;
        public static pressedRotation: AttachedNode;
        public static normalRotationX: AttachedNode;
        public static hoveredRotationX: AttachedNode;
        public static pressedRotationX: AttachedNode;
        public static normalRotationY: AttachedNode;
        public static hoveredRotationY: AttachedNode;
        public static pressedRotationY: AttachedNode;
        /**
        * System.Boolean
        */
        public isAvailable: boolean | null | Bind;
        /**
        * System.Boolean
        */
        public shouldMakeChildrenInputTransparent: boolean | null | Bind;
        /**
        * System.Windows.Input.ICommand
        */
        public command: RootObject /*System.Windows.Input.ICommand*/ | Bind;
        /**
        * System.Windows.Input.ICommand
        */
        public longPressCommand: RootObject /*System.Windows.Input.ICommand*/ | Bind;
        /**
        * System.Object
        */
        public commandParameter: RootObject /*System.Object*/ | Bind;
        /**
        * System.Object
        */
        public longPressCommandParameter: RootObject /*System.Object*/ | Bind;
        /**
        * System.Int32
        */
        public longPressDuration: number | null | Bind;
        /**
        * Xamarin.CommunityToolkit.Effects.TouchStatus
        */
        public status: "Started" | "Completed" | "Canceled" | string | number | null | undefined | Bind;
        /**
        * Xamarin.CommunityToolkit.Effects.TouchState
        */
        public state: "Normal" | "Pressed" | string | number | null | undefined | Bind;
        /**
        * Xamarin.CommunityToolkit.Effects.TouchInteractionStatus
        */
        public interactionStatus: "Started" | "Completed" | string | number | null | undefined | Bind;
        /**
        * Xamarin.CommunityToolkit.Effects.HoverStatus
        */
        public hoverStatus: "Entered" | "Exited" | string | number | null | undefined | Bind;
        /**
        * Xamarin.CommunityToolkit.Effects.HoverState
        */
        public hoverState: "Normal" | "Hovered" | string | number | null | undefined | Bind;
        /**
        * System.Int32
        */
        public disallowTouchThreshold: number | null | Bind;
        /**
        * System.Boolean
        */
        public nativeAnimation: boolean | null | Bind;
        /**
        * Xamarin.Forms.Color
        */
        public nativeAnimationColor: XF.default.Color | ColorItem | string | null | Bind;
        /**
        * System.Int32
        */
        public nativeAnimationRadius: number | null | Bind;
        /**
        * System.Int32
        */
        public nativeAnimationShadowRadius: number | null | Bind;
        /**
        * Xamarin.Forms.Color
        */
        public normalBackgroundColor: XF.default.Color | ColorItem | string | null | Bind;
        /**
        * Xamarin.Forms.Color
        */
        public hoveredBackgroundColor: XF.default.Color | ColorItem | string | null | Bind;
        /**
        * Xamarin.Forms.Color
        */
        public pressedBackgroundColor: XF.default.Color | ColorItem | string | null | Bind;
        /**
        * System.Double
        */
        public normalOpacity: number | null | Bind;
        /**
        * System.Double
        */
        public hoveredOpacity: number | null | Bind;
        /**
        * System.Double
        */
        public pressedOpacity: number | null | Bind;
        /**
        * System.Double
        */
        public normalScale: number | null | Bind;
        /**
        * System.Double
        */
        public hoveredScale: number | null | Bind;
        /**
        * System.Double
        */
        public pressedScale: number | null | Bind;
        /**
        * System.Double
        */
        public normalTranslationX: number | null | Bind;
        /**
        * System.Double
        */
        public hoveredTranslationX: number | null | Bind;
        /**
        * System.Double
        */
        public pressedTranslationX: number | null | Bind;
        /**
        * System.Double
        */
        public normalTranslationY: number | null | Bind;
        /**
        * System.Double
        */
        public hoveredTranslationY: number | null | Bind;
        /**
        * System.Double
        */
        public pressedTranslationY: number | null | Bind;
        /**
        * System.Double
        */
        public normalRotation: number | null | Bind;
        /**
        * System.Double
        */
        public hoveredRotation: number | null | Bind;
        /**
        * System.Double
        */
        public pressedRotation: number | null | Bind;
        /**
        * System.Double
        */
        public normalRotationX: number | null | Bind;
        /**
        * System.Double
        */
        public hoveredRotationX: number | null | Bind;
        /**
        * System.Double
        */
        public pressedRotationX: number | null | Bind;
        /**
        * System.Double
        */
        public normalRotationY: number | null | Bind;
        /**
        * System.Double
        */
        public hoveredRotationY: number | null | Bind;
        /**
        * System.Double
        */
        public pressedRotationY: number | null | Bind;
        /**
        * System.Int32
        */
        public animationDuration: number | null | Bind;
        /**
        * Xamarin.Forms.Easing
        */
        public animationEasing: "Linear" | "SinOut" | "SinIn" | "SinInOut" | "CubicIn" | "CubicOut" | "CubicInOut" | "BounceOut" | "BounceIn" | "SpringIn" | "SpringOut" | XF.default.Easing | Bind | Bind;
        /**
        * System.Int32
        */
        public pressedAnimationDuration: number | null | Bind;
        /**
        * Xamarin.Forms.Easing
        */
        public pressedAnimationEasing: "Linear" | "SinOut" | "SinIn" | "SinInOut" | "CubicIn" | "CubicOut" | "CubicInOut" | "BounceOut" | "BounceIn" | "SpringIn" | "SpringOut" | XF.default.Easing | Bind | Bind;
        /**
        * System.Int32
        */
        public normalAnimationDuration: number | null | Bind;
        /**
        * Xamarin.Forms.Easing
        */
        public normalAnimationEasing: "Linear" | "SinOut" | "SinIn" | "SinInOut" | "CubicIn" | "CubicOut" | "CubicInOut" | "BounceOut" | "BounceIn" | "SpringIn" | "SpringOut" | XF.default.Easing | Bind | Bind;
        /**
        * System.Int32
        */
        public hoveredAnimationDuration: number | null | Bind;
        /**
        * Xamarin.Forms.Easing
        */
        public hoveredAnimationEasing: "Linear" | "SinOut" | "SinIn" | "SinInOut" | "CubicIn" | "CubicOut" | "CubicInOut" | "BounceOut" | "BounceIn" | "SpringIn" | "SpringOut" | XF.default.Easing | Bind | Bind;
        /**
        * System.Int32
        */
        public pulseCount: number | null | Bind;
        /**
        * System.Nullable`1[[System.Boolean, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]]
        */
        public isToggled: RootObject /*System.Nullable`1[[System.Boolean, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]]*/ | Bind;
        /**
        * Xamarin.Forms.ImageSource
        */
        public normalBackgroundImageSource: /*ImageSource*/ any | Bind;
        /**
        * Xamarin.Forms.ImageSource
        */
        public hoveredBackgroundImageSource: /*ImageSource*/ any | Bind;
        /**
        * Xamarin.Forms.ImageSource
        */
        public pressedBackgroundImageSource: /*ImageSource*/ any | Bind;
        /**
        * Xamarin.Forms.Aspect
        */
        public backgroundImageAspect: "AspectFit" | "AspectFill" | "Fill" | string | number | null | undefined | Bind;
        /**
        * Xamarin.Forms.Aspect
        */
        public normalBackgroundImageAspect: "AspectFit" | "AspectFill" | "Fill" | string | number | null | undefined | Bind;
        /**
        * Xamarin.Forms.Aspect
        */
        public hoveredBackgroundImageAspect: "AspectFit" | "AspectFill" | "Fill" | string | number | null | undefined | Bind;
        /**
        * Xamarin.Forms.Aspect
        */
        public pressedBackgroundImageAspect: "AspectFit" | "AspectFill" | "Fill" | string | number | null | undefined | Bind;
        /**
        * System.Boolean
        */
        public shouldSetImageOnAnimationEnd: boolean | null | Bind;
    }
    export declare class VisualFeedbackEffect extends XF.default.RoutingEffect {
        public static feedbackColor: AttachedNode;
    }
    export declare class BoolToObjectConverter extends XCT.BoolToObjectConverter$Generic {
    }
    export declare class BoolToObjectConverter$Generic extends RootObject {
        /**
        * 
        */
        public trueObject: RootObject | Bind;
        /**
        * 
        */
        public falseObject: RootObject | Bind;
    }
    export declare class ByteArrayToImageSourceConverter extends RootObject {
    }
    export declare class DateTimeOffsetConverter extends RootObject {
    }
    export declare class DoubleToIntConverter extends RootObject {
        /**
        * System.Double
        */
        public ratio: number | null | Bind;
    }
    export declare class EqualConverter extends RootObject {
    }
    export declare class IndexToArrayItemConverter extends RootObject {
    }
    export declare class IntToBoolConverter extends RootObject {
    }
    export declare class InvertedBoolConverter extends RootObject {
    }
    export declare class IsNotNullOrEmptyConverter extends RootObject {
    }
    export declare class IsNullOrEmptyConverter extends RootObject {
    }
    export declare class ItemSelectedEventArgsConverter extends RootObject {
    }
    export declare class ItemTappedEventArgsConverter extends RootObject {
    }
    export declare class ListIsNotNullOrEmptyConverter extends RootObject {
    }
    export declare class ListIsNullOrEmptyConverter extends RootObject {
    }
    export declare class ListToStringConverter extends RootObject {
        /**
        * System.String
        */
        public separator: string | null | Bind;
    }
    export declare class MultiConverter extends RootObject /*System.Collections.Generic.List`1[[Xamarin.Forms.IValueConverter, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null]]*/ {
    }
    export declare class MultiConverterParameter extends XF.default.BindableObject {
        /**
        * System.Type
        */
        public converterType: RootObject /*System.Type*/ | Bind;
        /**
        * System.Object
        */
        public value: RootObject /*System.Object*/ | Bind;
    }
    export declare class NotEqualConverter extends RootObject {
    }
    export declare class StateToBooleanConverter extends RootObject {
        /**
        * Xamarin.CommunityToolkit.UI.Views.LayoutState
        */
        public stateToCompare: "None" | "Loading" | "Saving" | "Success" | "Error" | "Empty" | "Custom" | string | number | null | undefined | Bind;
    }
    export declare class TextCaseConverter extends RootObject {
        /**
        * Xamarin.CommunityToolkit.Converters.TextCaseType
        */
        public type: "None" | "Upper" | "Lower" | string | number | null | undefined | Bind;
    }
    export declare class TimeSpanToDoubleConverter extends RootObject {
    }
    export declare class AnimationBehavior extends XCT.EventToCommandBehavior {
        public static animationType: AttachedNode;
        /**
        * Xamarin.CommunityToolkit.Behaviors.AnimationBase
        */
        public animationType: XCT.AnimationBase | Bind;
    }
    export declare class AnimationBase$Generic extends XF.default.BindableObject {
        public static duration: AttachedNode;
        public static easingType: AttachedNode;
        /**
        * System.UInt32
        */
        public duration: number | null | Bind;
        /**
        * Xamarin.Forms.Easing
        */
        public easing: "Linear" | "SinOut" | "SinIn" | "SinInOut" | "CubicIn" | "CubicOut" | "CubicInOut" | "BounceOut" | "BounceIn" | "SpringIn" | "SpringOut" | XF.default.Easing | Bind | Bind;
        public static easing: AttachedNode;
    }
    export declare class AnimationBase extends XCT.AnimationBase$Generic {
    }
    export declare class FadeAnimation extends XCT.AnimationBase {
        public static fade: AttachedNode;
        /**
        * System.Double
        */
        public fade: number | null | Bind;
    }
    export declare class FlipHorizontalAnimation extends XCT.RotateAnimation {
    }
    export declare class FlipVerticalAnimation extends XCT.RotateAnimation {
    }
    export declare class RotateAnimation extends XCT.AnimationBase {
        public static rotation: AttachedNode;
        /**
        * System.Double
        */
        public rotation: number | null | Bind;
    }
    export declare class ScaleAnimation extends XCT.AnimationBase {
        public static scale: AttachedNode;
        /**
        * System.Double
        */
        public scale: number | null | Bind;
    }
    export declare class ShakeAnimation extends XCT.AnimationBase {
        public static startFactor: AttachedNode;
        /**
        * System.Double
        */
        public startFactor: number | null | Bind;
    }
    export declare class EventToCommandBehavior extends RootObject {
        public static eventName: AttachedNode;
        public static command: AttachedNode;
        public static commandParameter: AttachedNode;
        public static eventArgsConverter: AttachedNode;
        /**
        * System.String
        */
        public eventName: string | null | Bind;
        /**
        * System.Windows.Input.ICommand
        */
        public command: RootObject /*System.Windows.Input.ICommand*/ | Bind;
        /**
        * System.Object
        */
        public commandParameter: RootObject /*System.Object*/ | Bind;
        /**
        * Xamarin.Forms.IValueConverter
        */
        public eventArgsConverter: XF.default.IValueConverter | Bind;
    }
    export declare class ImpliedOrderGridBehavior extends RootObject {
        /**
        * System.Boolean
        */
        public throwOnLayoutWarning: boolean | null | Bind;
    }
    export declare class MaskedBehavior extends RootObject {
        public static mask: AttachedNode;
        public static unMaskedCharacter: AttachedNode;
        /**
        * System.String
        */
        public mask: string | null | Bind;
        /**
        * System.Char
        */
        public unMaskedCharacter: string | null | Bind;
    }
    export declare class MaxLengthReachedBehavior extends RootObject {
        public static command: AttachedNode;
        public static shouldDismissKeyboardAutomatically: AttachedNode;
        /**
        * System.Windows.Input.ICommand
        */
        public command: RootObject /*System.Windows.Input.ICommand*/ | Bind;
        /**
        * System.Boolean
        */
        public shouldDismissKeyboardAutomatically: boolean | null | Bind;
    }
    export declare class UserStoppedTypingBehavior extends RootObject {
        public static command: AttachedNode;
        public static stoppedTypingTimeThreshold: AttachedNode;
        public static minimumLengthThreshold: AttachedNode;
        public static shouldDismissKeyboardAutomatically: AttachedNode;
        /**
        * System.Windows.Input.ICommand
        */
        public command: RootObject /*System.Windows.Input.ICommand*/ | Bind;
        /**
        * System.Int32
        */
        public stoppedTypingTimeThreshold: number | null | Bind;
        /**
        * System.Int32
        */
        public minimumLengthThreshold: number | null | Bind;
        /**
        * System.Boolean
        */
        public shouldDismissKeyboardAutomatically: boolean | null | Bind;
    }
    export declare class CharactersValidationBehavior extends XCT.TextValidationBehavior {
        public static characterType: AttachedNode;
        public static minimumCharacterCount: AttachedNode;
        public static maximumCharacterCount: AttachedNode;
        /**
        * Xamarin.CommunityToolkit.Behaviors.CharacterType
        */
        public characterType: "LowercaseLetter" | "UppercaseLetter" | "Letter" | "Digit" | "Alphanumeric" | "Whitespace" | "NonAlphanumericSymbol" | "Any" | "LowercaseLatinLetter" | "UppercaseLatinLetter" | "LatinLetter" | string | number | null | undefined | Bind;
        /**
        * System.Int32
        */
        public minimumCharacterCount: number | null | Bind;
        /**
        * System.Int32
        */
        public maximumCharacterCount: number | null | Bind;
    }
    export declare class EmailValidationBehavior extends XCT.TextValidationBehavior {
    }
    export declare class MultiValidationBehavior extends RootObject {
        public static error: AttachedNode;
        public static errors: AttachedNode;
        /**
        * System.Collections.Generic.List`1[[System.Object, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]]
        */
        public errors: any;
        /**
        * System.Collections.Generic.IList`1[[Xamarin.CommunityToolkit.Behaviors.Internals.ValidationBehavior, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null]]
        */
        public children: any;
        public static children: AttachedNode;
    }
    export declare class NumericValidationBehavior extends RootObject {
        public static minimumValue: AttachedNode;
        public static maximumValue: AttachedNode;
        public static minimumDecimalPlaces: AttachedNode;
        public static maximumDecimalPlaces: AttachedNode;
        /**
        * System.Double
        */
        public minimumValue: number | null | Bind;
        /**
        * System.Double
        */
        public maximumValue: number | null | Bind;
        /**
        * System.Int32
        */
        public minimumDecimalPlaces: number | null | Bind;
        /**
        * System.Int32
        */
        public maximumDecimalPlaces: number | null | Bind;
    }
    export declare class RequiredStringValidationBehavior extends RootObject {
        public static requiredString: AttachedNode;
        /**
        * System.String
        */
        public requiredString: string | null | Bind;
    }
    export declare class TextValidationBehavior extends RootObject {
        public static minimumLength: AttachedNode;
        public static maximumLength: AttachedNode;
        public static decorationFlags: AttachedNode;
        public static regexPattern: AttachedNode;
        public static regexOptions: AttachedNode;
        /**
        * System.Int32
        */
        public minimumLength: number | null | Bind;
        /**
        * System.Int32
        */
        public maximumLength: number | null | Bind;
        /**
        * Xamarin.CommunityToolkit.Behaviors.TextDecorationFlags
        */
        public decorationFlags: "None" | "TrimStart" | "TrimEnd" | "Trim" | "NullToEmpty" | "NormalizeWhiteSpace" | string | number | null | undefined | Bind;
        /**
        * System.String
        */
        public regexPattern: string | null | Bind;
        /**
        * System.Text.RegularExpressions.RegexOptions
        */
        public regexOptions: "None" | "IgnoreCase" | "Multiline" | "ExplicitCapture" | "Compiled" | "Singleline" | "IgnorePatternWhitespace" | "RightToLeft" | "ECMAScript" | "CultureInvariant" | string | number | null | undefined | Bind;
    }
    export declare class UriValidationBehavior extends XCT.TextValidationBehavior {
        public static uriKind: AttachedNode;
        /**
        * System.UriKind
        */
        public uriKind: "RelativeOrAbsolute" | "Absolute" | "Relative" | string | number | null | undefined | Bind;
    }
}

export default XCT;
export namespace Xamarin {
    export namespace CommunityToolkit {
        export namespace UI {
            export namespace Views {
                export namespace Internals {
                    export declare class BaseTemplatedView$Generic extends XF.default.TemplatedView {
                    }
                }
            }
        }
        export namespace Core {
            export declare class FileMediaSource extends RootObject {
                public static file: AttachedNode;
                /**
                * System.String
                */
                public file: string | null | Bind;
            }
            export declare class MediaSource extends XF.default.Element {
            }
            export declare class StreamMediaSource extends RootObject {
                public static stream: AttachedNode;
                /**
                * System.Func`2[[System.Threading.CancellationToken, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e],[System.Threading.Tasks.Task`1[[System.IO.Stream, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]], System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]]
                */
                public stream: RootObject /*System.Func`2[[System.Threading.CancellationToken, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e],[System.Threading.Tasks.Task`1[[System.IO.Stream, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]], System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]]*/ | Bind;
            }
            export declare class UriMediaSource extends RootObject {
                public static uri: AttachedNode;
                /**
                * System.Uri
                */
                public uri: RootObject /*System.Uri*/ | Bind;
            }
        }
        export namespace Behaviors {
            export namespace Internals {
                export declare class BaseBehavior$Generic extends XF.default.Behavior$Generic {
                }
                export declare class ValidationBehavior extends RootObject {
                    public static isValid: AttachedNode;
                    public static validStyle: AttachedNode;
                    public static invalidStyle: AttachedNode;
                    public static flags: AttachedNode;
                    public static value: AttachedNode;
                    public static valuePropertyName: AttachedNode;
                    public static forceValidateCommand: AttachedNode;
                    /**
                    * System.Boolean
                    */
                    public isValid: boolean | null | Bind;
                    /**
                    * Xamarin.Forms.Style
                    */
                    public validStyle: XF.default.Style | Bind;
                    /**
                    * Xamarin.Forms.Style
                    */
                    public invalidStyle: XF.default.Style | Bind;
                    /**
                    * Xamarin.CommunityToolkit.Behaviors.ValidationFlags
                    */
                    public flags: "None" | "ValidateOnAttaching" | "ValidateOnFocusing" | "ValidateOnUnfocusing" | "ValidateOnValueChanging" | "ForceMakeValidWhenFocused" | string | number | null | undefined | Bind;
                    /**
                    * System.Object
                    */
                    public value: RootObject /*System.Object*/ | Bind;
                    /**
                    * System.String
                    */
                    public valuePropertyName: string | null | Bind;
                    /**
                    * System.Windows.Input.ICommand
                    */
                    public forceValidateCommand: RootObject /*System.Windows.Input.ICommand*/ | Bind;
                }
            }
        }
    }
}
ns = "XCT";
Object.defineProperties(XCT as any, {
    AvatarView: create("AvatarView","Xamarin.CommunityToolkit.UI.Views"),
    BadgeView: create("BadgeView","Xamarin.CommunityToolkit.UI.Views"),
    CameraView: create("CameraView","Xamarin.CommunityToolkit.UI.Views"),
    DockLayout: create("DockLayout","Xamarin.CommunityToolkit.UI.Views"),
    Expander: create("Expander","Xamarin.CommunityToolkit.UI.Views"),
    GravatarImageSource: create("GravatarImageSource","Xamarin.CommunityToolkit.UI.Views"),
    MediaElement: create("MediaElement","Xamarin.CommunityToolkit.UI.Views"),
    RangeSlider: create("RangeSlider","Xamarin.CommunityToolkit.UI.Views"),
    Shield: create("Shield","Xamarin.CommunityToolkit.UI.Views"),
    SideMenuView: create("SideMenuView","Xamarin.CommunityToolkit.UI.Views"),
    StateLayout: create("StateLayout","Xamarin.CommunityToolkit.UI.Views"),
    StateView: create("StateView","Xamarin.CommunityToolkit.UI.Views"),
    TabBadgeTemplate: create("TabBadgeTemplate","Xamarin.CommunityToolkit.UI.Views"),
    TabBadgeView: create("TabBadgeView","Xamarin.CommunityToolkit.UI.Views"),
    TabView: create("TabView","Xamarin.CommunityToolkit.UI.Views"),
    TabViewItem: create("TabViewItem","Xamarin.CommunityToolkit.UI.Views"),
    UniformGrid: create("UniformGrid","Xamarin.CommunityToolkit.UI.Views"),
    GravatarImageExtension: create("GravatarImageExtension","Xamarin.CommunityToolkit.Extensions"),
    PageExtension: create("PageExtension","Xamarin.CommunityToolkit.Extensions"),
    VisualElementExtension: create("VisualElementExtension","Xamarin.CommunityToolkit.Extensions"),
    IconTintColorEffect: create("IconTintColorEffect","Xamarin.CommunityToolkit.Effects"),
    IconTintColorEffectRouter: create("IconTintColorEffectRouter","Xamarin.CommunityToolkit.Effects"),
    RemoveBorderEffect: create("RemoveBorderEffect","Xamarin.CommunityToolkit.Effects"),
    SafeAreaEffect: create("SafeAreaEffect","Xamarin.CommunityToolkit.Effects"),
    SafeAreaEffectRouter: create("SafeAreaEffectRouter","Xamarin.CommunityToolkit.Effects"),
    SelectAllTextEffect: create("SelectAllTextEffect","Xamarin.CommunityToolkit.Effects"),
    TouchEffect: create("TouchEffect","Xamarin.CommunityToolkit.Effects"),
    VisualFeedbackEffect: create("VisualFeedbackEffect","Xamarin.CommunityToolkit.Effects"),
    BoolToObjectConverter: create("BoolToObjectConverter","Xamarin.CommunityToolkit.Converters"),
    BoolToObjectConverter$Generic: create("BoolToObjectConverter`1","Xamarin.CommunityToolkit.Converters"),
    ByteArrayToImageSourceConverter: create("ByteArrayToImageSourceConverter","Xamarin.CommunityToolkit.Converters"),
    DateTimeOffsetConverter: create("DateTimeOffsetConverter","Xamarin.CommunityToolkit.Converters"),
    DoubleToIntConverter: create("DoubleToIntConverter","Xamarin.CommunityToolkit.Converters"),
    EqualConverter: create("EqualConverter","Xamarin.CommunityToolkit.Converters"),
    IndexToArrayItemConverter: create("IndexToArrayItemConverter","Xamarin.CommunityToolkit.Converters"),
    IntToBoolConverter: create("IntToBoolConverter","Xamarin.CommunityToolkit.Converters"),
    InvertedBoolConverter: create("InvertedBoolConverter","Xamarin.CommunityToolkit.Converters"),
    IsNotNullOrEmptyConverter: create("IsNotNullOrEmptyConverter","Xamarin.CommunityToolkit.Converters"),
    IsNullOrEmptyConverter: create("IsNullOrEmptyConverter","Xamarin.CommunityToolkit.Converters"),
    ItemSelectedEventArgsConverter: create("ItemSelectedEventArgsConverter","Xamarin.CommunityToolkit.Converters"),
    ItemTappedEventArgsConverter: create("ItemTappedEventArgsConverter","Xamarin.CommunityToolkit.Converters"),
    ListIsNotNullOrEmptyConverter: create("ListIsNotNullOrEmptyConverter","Xamarin.CommunityToolkit.Converters"),
    ListIsNullOrEmptyConverter: create("ListIsNullOrEmptyConverter","Xamarin.CommunityToolkit.Converters"),
    ListToStringConverter: create("ListToStringConverter","Xamarin.CommunityToolkit.Converters"),
    MultiConverter: create("MultiConverter","Xamarin.CommunityToolkit.Converters"),
    MultiConverterParameter: create("MultiConverterParameter","Xamarin.CommunityToolkit.Converters"),
    NotEqualConverter: create("NotEqualConverter","Xamarin.CommunityToolkit.Converters"),
    StateToBooleanConverter: create("StateToBooleanConverter","Xamarin.CommunityToolkit.Converters"),
    TextCaseConverter: create("TextCaseConverter","Xamarin.CommunityToolkit.Converters"),
    TimeSpanToDoubleConverter: create("TimeSpanToDoubleConverter","Xamarin.CommunityToolkit.Converters"),
    AnimationBehavior: create("AnimationBehavior","Xamarin.CommunityToolkit.Behaviors"),
    AnimationBase$Generic: create("AnimationBase`1","Xamarin.CommunityToolkit.Behaviors"),
    AnimationBase: create("AnimationBase","Xamarin.CommunityToolkit.Behaviors"),
    FadeAnimation: create("FadeAnimation","Xamarin.CommunityToolkit.Behaviors"),
    FlipHorizontalAnimation: create("FlipHorizontalAnimation","Xamarin.CommunityToolkit.Behaviors"),
    FlipVerticalAnimation: create("FlipVerticalAnimation","Xamarin.CommunityToolkit.Behaviors"),
    RotateAnimation: create("RotateAnimation","Xamarin.CommunityToolkit.Behaviors"),
    ScaleAnimation: create("ScaleAnimation","Xamarin.CommunityToolkit.Behaviors"),
    ShakeAnimation: create("ShakeAnimation","Xamarin.CommunityToolkit.Behaviors"),
    EventToCommandBehavior: create("EventToCommandBehavior","Xamarin.CommunityToolkit.Behaviors"),
    ImpliedOrderGridBehavior: create("ImpliedOrderGridBehavior","Xamarin.CommunityToolkit.Behaviors"),
    MaskedBehavior: create("MaskedBehavior","Xamarin.CommunityToolkit.Behaviors"),
    MaxLengthReachedBehavior: create("MaxLengthReachedBehavior","Xamarin.CommunityToolkit.Behaviors"),
    UserStoppedTypingBehavior: create("UserStoppedTypingBehavior","Xamarin.CommunityToolkit.Behaviors"),
    CharactersValidationBehavior: create("CharactersValidationBehavior","Xamarin.CommunityToolkit.Behaviors"),
    EmailValidationBehavior: create("EmailValidationBehavior","Xamarin.CommunityToolkit.Behaviors"),
    MultiValidationBehavior: create("MultiValidationBehavior","Xamarin.CommunityToolkit.Behaviors"),
    NumericValidationBehavior: create("NumericValidationBehavior","Xamarin.CommunityToolkit.Behaviors"),
    RequiredStringValidationBehavior: create("RequiredStringValidationBehavior","Xamarin.CommunityToolkit.Behaviors"),
    TextValidationBehavior: create("TextValidationBehavior","Xamarin.CommunityToolkit.Behaviors"),
    UriValidationBehavior: create("UriValidationBehavior","Xamarin.CommunityToolkit.Behaviors"),
});
ns = "Xamarin.CommunityToolkit.UI.Views.Internals";
Object.defineProperties(Xamarin.CommunityToolkit.UI.Views.Internals as any, {
    BaseTemplatedView$Generic: create("BaseTemplatedView`1",ns),
});
ns = "Xamarin.CommunityToolkit.Core";
Object.defineProperties(Xamarin.CommunityToolkit.Core as any, {
    FileMediaSource: create("FileMediaSource",ns),
    MediaSource: create("MediaSource",ns),
    StreamMediaSource: create("StreamMediaSource",ns),
    UriMediaSource: create("UriMediaSource",ns),
});
ns = "Xamarin.CommunityToolkit.Behaviors.Internals";
Object.defineProperties(Xamarin.CommunityToolkit.Behaviors.Internals as any, {
    BaseBehavior$Generic: create("BaseBehavior`1",ns),
    ValidationBehavior: create("ValidationBehavior",ns),
});

