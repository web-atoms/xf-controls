//tslint:disable
import XNode, { RootObject, NodeFactory, AttachedNode } from "@web-atoms/core/dist/core/XNode";
import Bind from "@web-atoms/core/dist/core/Bind";
import { ColorItem } from "@web-atoms/core/dist/core/Colors";

import * as XF from "./XF";
declare var bridge: any;
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
        public aspect: "AspectFit" | "AspectFill" | "Fill" | string | number | null | undefined | Bind;
        public size: number | null | Bind;
        public cornerRadius: number | null | Bind;
        public borderColor: XF.default.Color;
        public color: XF.default.Color;
        public source: XF.default.ImageSource;
        public text: string | null | Bind;
        public textColor: XF.default.Color;
        public fontFamily: string | null | Bind;
        public fontSize: number | null | Bind;
        public fontAttributes: "None" | "Bold" | "Italic" | string | number | null | undefined | Bind;
        public colorTheme: RootObject;
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
        public content: XF.default.View;
        public badgePosition: "TopLeft" | "TopRight" | "BottomLeft" | "BottomRight" | string | number | null | undefined | Bind;
        public autoHide: boolean | null | Bind;
        public isAnimated: boolean | null | Bind;
        public badgeAnimation: RootObject;
        public backgroundColor: XF.default.Color;
        public borderColor: XF.default.Color;
        public hasShadow: boolean | null | Bind;
        public textColor: XF.default.Color;
        public text: string | null | Bind;
        public fontSize: number | null | Bind;
        public fontFamily: string | null | Bind;
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
        public shutterCommand: RootObject /*System.Windows.Input.ICommand*/;
        public isBusy: boolean | null | Bind;
        public isAvailable: boolean | null | Bind;
        public cameraOptions: "Default" | "Front" | "Back" | "External" | string | number | null | undefined | Bind;
        public captureMode: "Default" | "Photo" | "Video" | string | number | null | undefined | Bind;
        public videoStabilization: boolean | null | Bind;
        public flashMode: "Off" | "On" | "Auto" | "Torch" | string | number | null | undefined | Bind;
        public zoom: number | null | Bind;
        public maxZoom: number | null | Bind;
    }
    export declare class DockLayout extends XF.default.Layout$Generic {
        public static dock: AttachedNode;
        public static lastChildFill: AttachedNode;
        public dock: "Left" | "Top" | "Right" | "Bottom" | string | number | null | undefined | Bind;
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
        public header: XF.default.View;
        public content: XF.default.View;
        public contentTemplate: XF.default.DataTemplate;
        public isExpanded: boolean | null | Bind;
        public direction: "Down" | "Up" | "Left" | "Right" | string | number | null | undefined | Bind;
        public expandAnimationLength: number | null | Bind;
        public collapseAnimationLength: number | null | Bind;
        public expandAnimationEasing: XF.default.Easing;
        public collapseAnimationEasing: XF.default.Easing;
        public state: "Expanding" | "Expanded" | "Collapsing" | "Collapsed" | string | number | null | undefined | Bind;
        public commandParameter: RootObject /*System.Object*/;
        public command: RootObject /*System.Windows.Input.ICommand*/;
        public forceUpdateSizeCommand: RootObject /*System.Windows.Input.ICommand*/;
    }
    export declare class GravatarImageSource extends XF.default.ImageSource {
        public static email: AttachedNode;
        public static size: AttachedNode;
        public static default: AttachedNode;
        public static cachingEnabled: AttachedNode;
        public static cacheValidity: AttachedNode;
        public email: string | null | Bind;
        public size: number | null | Bind;
        public default: "FileNotFound" | "MysteryPerson" | "Identicon" | "MonsterId" | "Wavatar" | "Retro" | "Robohash" | "Blank" | string | number | null | undefined | Bind;
        public cachingEnabled: boolean | null | Bind;
        public cacheValidity: RootObject /*System.TimeSpan*/;
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
        public aspect: "AspectFit" | "AspectFill" | "Fill" | string | number | null | undefined | Bind;
        public autoPlay: boolean | null | Bind;
        public bufferingProgress: number | null | Bind;
        public canSeek: boolean | null | Bind;
        public currentState: "Closed" | "Opening" | "Buffering" | "Playing" | "Paused" | "Stopped" | string | number | null | undefined | Bind;
        public duration: RootObject /*System.Nullable`1[[System.TimeSpan, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]]*/;
        public isLooping: boolean | null | Bind;
        public keepScreenOn: boolean | null | Bind;
        public showsPlaybackControls: boolean | null | Bind;
        public position: RootObject /*System.TimeSpan*/;
        public source: RootObject;
        public videoHeight: number | null | Bind;
        public videoWidth: number | null | Bind;
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
        public minimumValue: number | null | Bind;
        public maximumValue: number | null | Bind;
        public stepValue: number | null | Bind;
        public lowerValue: number | null | Bind;
        public upperValue: number | null | Bind;
        public thumbSize: number | null | Bind;
        public lowerThumbSize: number | null | Bind;
        public upperThumbSize: number | null | Bind;
        public trackSize: number | null | Bind;
        public thumbColor: XF.default.Color;
        public lowerThumbColor: XF.default.Color;
        public upperThumbColor: XF.default.Color;
        public trackColor: XF.default.Color;
        public trackHighlightColor: XF.default.Color;
        public thumbBorderColor: XF.default.Color;
        public lowerThumbBorderColor: XF.default.Color;
        public upperThumbBorderColor: XF.default.Color;
        public trackBorderColor: XF.default.Color;
        public trackHighlightBorderColor: XF.default.Color;
        public valueLabelStyle: XF.default.Style;
        public lowerValueLabelStyle: XF.default.Style;
        public upperValueLabelStyle: XF.default.Style;
        public valueLabelStringFormat: string | null | Bind;
        public lowerThumbView: XF.default.View;
        public upperThumbView: XF.default.View;
        public valueLabelSpacing: number | null | Bind;
        public thumbRadius: number | null | Bind;
        public lowerThumbRadius: number | null | Bind;
        public upperThumbRadius: number | null | Bind;
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
        public subject: string | null | Bind;
        public status: string | null | Bind;
        public color: XF.default.Color;
        public textColor: XF.default.Color;
        public fontSize: number | null | Bind;
        public fontFamily: string | null | Bind;
        public fontAttributes: "None" | "Bold" | "Italic" | string | number | null | undefined | Bind;
        public command: RootObject /*System.Windows.Input.ICommand*/;
        public commandParameter: RootObject /*System.Object*/;
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
        public children: RootObject;
        public shift: number | null | Bind;
        public currentGestureShift: number | null | Bind;
        public gestureThreshold: number | null | Bind;
        public cancelVerticalGestureThreshold: number | null | Bind;
        public allowInterceptGesture: boolean | null | Bind;
        public state: "MainViewShown" | "RightMenuShown" | "LeftMenuShown" | string | number | null | undefined | Bind;
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
        public stateKey: "None" | "Loading" | "Saving" | "Success" | "Error" | "Empty" | "Custom" | string | number | null | undefined | Bind;
        public customStateKey: string | null | Bind;
        public repeatCount: number | null | Bind;
        public template: XF.default.DataTemplate;
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
        public placementTarget: XF.default.View;
        public autoHide: boolean | null | Bind;
        public isAnimated: boolean | null | Bind;
        public badgeAnimation: RootObject;
        public backgroundColor: XF.default.Color;
        public borderColor: XF.default.Color;
        public textColor: XF.default.Color;
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
        public static tabItems: AttachedNode;
        public tabViewItemDataTemplate: XF.default.DataTemplate;
        public tabContentDataTemplate: XF.default.DataTemplate;
        public selectedIndex: number | null | Bind;
        public tabStripPlacement: "Top" | "Bottom" | string | number | null | undefined | Bind;
        public tabStripBackgroundColor: XF.default.Color;
        public tabStripBackgroundView: XF.default.View;
        public tabStripBorderColor: XF.default.Color;
        public tabContentBackgroundColor: XF.default.Color;
        public tabStripHeight: number | null | Bind;
        public isTabStripVisible: boolean | null | Bind;
        public tabContentHeight: number | null | Bind;
        public tabIndicatorColor: XF.default.Color;
        public tabIndicatorHeight: number | null | Bind;
        public tabIndicatorWidth: number | null | Bind;
        public tabIndicatorView: XF.default.View;
        public tabIndicatorPlacement: "Top" | "Center" | "Bottom" | string | number | null | undefined | Bind;
        public isTabTransitionEnabled: boolean | null | Bind;
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
        public text: string | null | Bind;
        public textColor: XF.default.Color;
        public textColorSelected: XF.default.Color;
        public fontSize: number | null | Bind;
        public fontSizeSelected: number | null | Bind;
        public fontFamily: string | null | Bind;
        public fontFamilySelected: string | null | Bind;
        public fontAttributes: "None" | "Bold" | "Italic" | string | number | null | undefined | Bind;
        public fontAttributesSelected: "None" | "Bold" | "Italic" | string | number | null | undefined | Bind;
        public content: XF.default.View;
        public icon: XF.default.ImageSource;
        public iconSelected: XF.default.ImageSource;
        public isSelected: boolean | null | Bind;
        public tabWidth: number | null | Bind;
        public tabAnimation: RootObject;
        public badgeText: string | null | Bind;
        public badgeTextColor: XF.default.Color;
        public badgeBackgroundColor: XF.default.Color;
        public badgeBackgroundColorSelected: XF.default.Color;
        public badgeBorderColor: XF.default.Color;
        public badgeBorderColorSelected: XF.default.Color;
        public tapCommand: RootObject /*System.Windows.Input.ICommand*/;
        public currentTextColor: XF.default.Color;
        public currentFontSize: number | null | Bind;
        public currentIcon: XF.default.ImageSource;
        public currentFontFamily: string | null | Bind;
        public currentFontAttributes: "None" | "Bold" | "Italic" | string | number | null | undefined | Bind;
        public currentBadgeBackgroundColor: XF.default.Color;
        public currentBadgeBorderColor: XF.default.Color;
        public currentContent: XF.default.View;
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
        public isAvailable: boolean | null | Bind;
        public shouldMakeChildrenInputTransparent: boolean | null | Bind;
        public command: RootObject /*System.Windows.Input.ICommand*/;
        public longPressCommand: RootObject /*System.Windows.Input.ICommand*/;
        public commandParameter: RootObject /*System.Object*/;
        public longPressCommandParameter: RootObject /*System.Object*/;
        public longPressDuration: number | null | Bind;
        public status: "Started" | "Completed" | "Canceled" | string | number | null | undefined | Bind;
        public state: "Normal" | "Pressed" | string | number | null | undefined | Bind;
        public interactionStatus: "Started" | "Completed" | string | number | null | undefined | Bind;
        public hoverStatus: "Entered" | "Exited" | string | number | null | undefined | Bind;
        public hoverState: "Normal" | "Hovered" | string | number | null | undefined | Bind;
        public disallowTouchThreshold: number | null | Bind;
        public nativeAnimation: boolean | null | Bind;
        public nativeAnimationColor: XF.default.Color;
        public nativeAnimationRadius: number | null | Bind;
        public nativeAnimationShadowRadius: number | null | Bind;
        public normalBackgroundColor: XF.default.Color;
        public hoveredBackgroundColor: XF.default.Color;
        public pressedBackgroundColor: XF.default.Color;
        public normalOpacity: number | null | Bind;
        public hoveredOpacity: number | null | Bind;
        public pressedOpacity: number | null | Bind;
        public normalScale: number | null | Bind;
        public hoveredScale: number | null | Bind;
        public pressedScale: number | null | Bind;
        public normalTranslationX: number | null | Bind;
        public hoveredTranslationX: number | null | Bind;
        public pressedTranslationX: number | null | Bind;
        public normalTranslationY: number | null | Bind;
        public hoveredTranslationY: number | null | Bind;
        public pressedTranslationY: number | null | Bind;
        public normalRotation: number | null | Bind;
        public hoveredRotation: number | null | Bind;
        public pressedRotation: number | null | Bind;
        public normalRotationX: number | null | Bind;
        public hoveredRotationX: number | null | Bind;
        public pressedRotationX: number | null | Bind;
        public normalRotationY: number | null | Bind;
        public hoveredRotationY: number | null | Bind;
        public pressedRotationY: number | null | Bind;
        public animationDuration: number | null | Bind;
        public animationEasing: XF.default.Easing;
        public pressedAnimationDuration: number | null | Bind;
        public pressedAnimationEasing: XF.default.Easing;
        public normalAnimationDuration: number | null | Bind;
        public normalAnimationEasing: XF.default.Easing;
        public hoveredAnimationDuration: number | null | Bind;
        public hoveredAnimationEasing: XF.default.Easing;
        public pulseCount: number | null | Bind;
        public isToggled: RootObject /*System.Nullable`1[[System.Boolean, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]]*/;
        public normalBackgroundImageSource: XF.default.ImageSource;
        public hoveredBackgroundImageSource: XF.default.ImageSource;
        public pressedBackgroundImageSource: XF.default.ImageSource;
        public backgroundImageAspect: "AspectFit" | "AspectFill" | "Fill" | string | number | null | undefined | Bind;
        public normalBackgroundImageAspect: "AspectFit" | "AspectFill" | "Fill" | string | number | null | undefined | Bind;
        public hoveredBackgroundImageAspect: "AspectFit" | "AspectFill" | "Fill" | string | number | null | undefined | Bind;
        public pressedBackgroundImageAspect: "AspectFit" | "AspectFill" | "Fill" | string | number | null | undefined | Bind;
        public shouldSetImageOnAnimationEnd: boolean | null | Bind;
    }
    export declare class VisualFeedbackEffect extends XF.default.RoutingEffect {
        public static feedbackColor: AttachedNode;
    }
    export declare class BoolToObjectConverter extends XCT.BoolToObjectConverter$Generic {
    }
    export declare class BoolToObjectConverter$Generic extends RootObject {
        public trueObject: RootObject;
        public falseObject: RootObject;
    }
    export declare class ByteArrayToImageSourceConverter extends RootObject {
    }
    export declare class DateTimeOffsetConverter extends RootObject {
    }
    export declare class DoubleToIntConverter extends RootObject {
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
        public separator: string | null | Bind;
    }
    export declare class MultiConverter extends RootObject /*System.Collections.Generic.List`1[[Xamarin.Forms.IValueConverter, Xamarin.Forms.Core, Version=2.0.0.0, Culture=neutral, PublicKeyToken=null]]*/ {
    }
    export declare class MultiConverterParameter extends XF.default.BindableObject {
        public converterType: RootObject /*System.Type*/;
        public value: RootObject /*System.Object*/;
    }
    export declare class NotEqualConverter extends RootObject {
    }
    export declare class StateToBooleanConverter extends RootObject {
        public stateToCompare: "None" | "Loading" | "Saving" | "Success" | "Error" | "Empty" | "Custom" | string | number | null | undefined | Bind;
    }
    export declare class TextCaseConverter extends RootObject {
        public type: "None" | "Upper" | "Lower" | string | number | null | undefined | Bind;
    }
    export declare class TimeSpanToDoubleConverter extends RootObject {
    }
    export declare class AnimationBehavior extends XCT.EventToCommandBehavior {
        public static animationType: AttachedNode;
        public animationType: XCT.AnimationBase;
    }
    export declare class AnimationBase$Generic extends XF.default.BindableObject {
        public static duration: AttachedNode;
        public static easingType: AttachedNode;
        public duration: number | null | Bind;
        public easing: XF.default.Easing;
        public static easing: AttachedNode;
    }
    export declare class AnimationBase extends XCT.AnimationBase$Generic {
    }
    export declare class FadeAnimation extends XCT.AnimationBase {
        public static fade: AttachedNode;
        public fade: number | null | Bind;
    }
    export declare class FlipHorizontalAnimation extends XCT.RotateAnimation {
    }
    export declare class FlipVerticalAnimation extends XCT.RotateAnimation {
    }
    export declare class RotateAnimation extends XCT.AnimationBase {
        public static rotation: AttachedNode;
        public rotation: number | null | Bind;
    }
    export declare class ScaleAnimation extends XCT.AnimationBase {
        public static scale: AttachedNode;
        public scale: number | null | Bind;
    }
    export declare class ShakeAnimation extends XCT.AnimationBase {
        public static startFactor: AttachedNode;
        public startFactor: number | null | Bind;
    }
    export declare class EventToCommandBehavior extends RootObject {
        public static eventName: AttachedNode;
        public static command: AttachedNode;
        public static commandParameter: AttachedNode;
        public static eventArgsConverter: AttachedNode;
        public eventName: string | null | Bind;
        public command: RootObject /*System.Windows.Input.ICommand*/;
        public commandParameter: RootObject /*System.Object*/;
        public eventArgsConverter: XF.default.IValueConverter;
    }
    export declare class ImpliedOrderGridBehavior extends RootObject {
        public throwOnLayoutWarning: boolean | null | Bind;
    }
    export declare class MaskedBehavior extends RootObject {
        public static mask: AttachedNode;
        public static unMaskedCharacter: AttachedNode;
        public mask: string | null | Bind;
        public unMaskedCharacter: string | null | Bind;
    }
    export declare class MaxLengthReachedBehavior extends RootObject {
        public static command: AttachedNode;
        public static shouldDismissKeyboardAutomatically: AttachedNode;
        public command: RootObject /*System.Windows.Input.ICommand*/;
        public shouldDismissKeyboardAutomatically: boolean | null | Bind;
    }
    export declare class UserStoppedTypingBehavior extends RootObject {
        public static command: AttachedNode;
        public static stoppedTypingTimeThreshold: AttachedNode;
        public static minimumLengthThreshold: AttachedNode;
        public static shouldDismissKeyboardAutomatically: AttachedNode;
        public command: RootObject /*System.Windows.Input.ICommand*/;
        public stoppedTypingTimeThreshold: number | null | Bind;
        public minimumLengthThreshold: number | null | Bind;
        public shouldDismissKeyboardAutomatically: boolean | null | Bind;
    }
    export declare class CharactersValidationBehavior extends XCT.TextValidationBehavior {
        public static characterType: AttachedNode;
        public static minimumCharacterCount: AttachedNode;
        public static maximumCharacterCount: AttachedNode;
        public characterType: "LowercaseLetter" | "UppercaseLetter" | "Letter" | "Digit" | "Alphanumeric" | "Whitespace" | "NonAlphanumericSymbol" | "Any" | "LowercaseLatinLetter" | "UppercaseLatinLetter" | "LatinLetter" | string | number | null | undefined | Bind;
        public minimumCharacterCount: number | null | Bind;
        public maximumCharacterCount: number | null | Bind;
    }
    export declare class EmailValidationBehavior extends XCT.TextValidationBehavior {
    }
    export declare class MultiValidationBehavior extends RootObject {
        public static error: AttachedNode;
        public static errors: AttachedNode;
        public static children: AttachedNode;
    }
    export declare class NumericValidationBehavior extends RootObject {
        public static minimumValue: AttachedNode;
        public static maximumValue: AttachedNode;
        public static minimumDecimalPlaces: AttachedNode;
        public static maximumDecimalPlaces: AttachedNode;
        public minimumValue: number | null | Bind;
        public maximumValue: number | null | Bind;
        public minimumDecimalPlaces: number | null | Bind;
        public maximumDecimalPlaces: number | null | Bind;
    }
    export declare class RequiredStringValidationBehavior extends RootObject {
        public static requiredString: AttachedNode;
        public requiredString: string | null | Bind;
    }
    export declare class TextValidationBehavior extends RootObject {
        public static minimumLength: AttachedNode;
        public static maximumLength: AttachedNode;
        public static decorationFlags: AttachedNode;
        public static regexPattern: AttachedNode;
        public static regexOptions: AttachedNode;
        public minimumLength: number | null | Bind;
        public maximumLength: number | null | Bind;
        public decorationFlags: "None" | "TrimStart" | "TrimEnd" | "Trim" | "NullToEmpty" | "NormalizeWhiteSpace" | string | number | null | undefined | Bind;
        public regexPattern: string | null | Bind;
        public regexOptions: "None" | "IgnoreCase" | "Multiline" | "ExplicitCapture" | "Compiled" | "Singleline" | "IgnorePatternWhitespace" | "RightToLeft" | "ECMAScript" | "CultureInvariant" | string | number | null | undefined | Bind;
    }
    export declare class UriValidationBehavior extends XCT.TextValidationBehavior {
        public static uriKind: AttachedNode;
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
                public file: string | null | Bind;
            }
            export declare class MediaSource extends XF.default.Element {
            }
            export declare class StreamMediaSource extends RootObject {
                public static stream: AttachedNode;
                public stream: RootObject /*System.Func`2[[System.Threading.CancellationToken, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e],[System.Threading.Tasks.Task`1[[System.IO.Stream, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]], System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]]*/;
            }
            export declare class UriMediaSource extends RootObject {
                public static uri: AttachedNode;
                public uri: RootObject /*System.Uri*/;
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
                    public isValid: boolean | null | Bind;
                    public validStyle: XF.default.Style;
                    public invalidStyle: XF.default.Style;
                    public flags: "None" | "ValidateOnAttaching" | "ValidateOnFocusing" | "ValidateOnUnfocusing" | "ValidateOnValueChanging" | "ForceMakeValidWhenFocused" | string | number | null | undefined | Bind;
                    public value: RootObject /*System.Object*/;
                    public valuePropertyName: string | null | Bind;
                    public forceValidateCommand: RootObject /*System.Windows.Input.ICommand*/;
                }
            }
        }
    }
}
Object.defineProperties(XCT as any, {
    AvatarView: { 
        configurable: true,
        enumerable: true,
        get() {
            const t = bridge.getClass("Xamarin.CommunityToolkit.UI.Views.AvatarView, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "AvatarView", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    BadgeView: { 
        configurable: true,
        enumerable: true,
        get() {
            const t = bridge.getClass("Xamarin.CommunityToolkit.UI.Views.BadgeView, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "BadgeView", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    CameraView: { 
        configurable: true,
        enumerable: true,
        get() {
            const t = bridge.getClass("Xamarin.CommunityToolkit.UI.Views.CameraView, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "CameraView", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    DockLayout: { 
        configurable: true,
        enumerable: true,
        get() {
            const t = bridge.getClass("Xamarin.CommunityToolkit.UI.Views.DockLayout, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "DockLayout", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    Expander: { 
        configurable: true,
        enumerable: true,
        get() {
            const t = bridge.getClass("Xamarin.CommunityToolkit.UI.Views.Expander, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "Expander", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    GravatarImageSource: { 
        configurable: true,
        enumerable: true,
        get() {
            const t = bridge.getClass("Xamarin.CommunityToolkit.UI.Views.GravatarImageSource, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "GravatarImageSource", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    MediaElement: { 
        configurable: true,
        enumerable: true,
        get() {
            const t = bridge.getClass("Xamarin.CommunityToolkit.UI.Views.MediaElement, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "MediaElement", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    RangeSlider: { 
        configurable: true,
        enumerable: true,
        get() {
            const t = bridge.getClass("Xamarin.CommunityToolkit.UI.Views.RangeSlider, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "RangeSlider", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    Shield: { 
        configurable: true,
        enumerable: true,
        get() {
            const t = bridge.getClass("Xamarin.CommunityToolkit.UI.Views.Shield, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "Shield", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    SideMenuView: { 
        configurable: true,
        enumerable: true,
        get() {
            const t = bridge.getClass("Xamarin.CommunityToolkit.UI.Views.SideMenuView, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "SideMenuView", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    StateLayout: { 
        configurable: true,
        enumerable: true,
        get() {
            const t = bridge.getClass("Xamarin.CommunityToolkit.UI.Views.StateLayout, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "StateLayout", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    StateView: { 
        configurable: true,
        enumerable: true,
        get() {
            const t = bridge.getClass("Xamarin.CommunityToolkit.UI.Views.StateView, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "StateView", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    TabBadgeTemplate: { 
        configurable: true,
        enumerable: true,
        get() {
            const t = bridge.getClass("Xamarin.CommunityToolkit.UI.Views.TabBadgeTemplate, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "TabBadgeTemplate", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    TabBadgeView: { 
        configurable: true,
        enumerable: true,
        get() {
            const t = bridge.getClass("Xamarin.CommunityToolkit.UI.Views.TabBadgeView, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "TabBadgeView", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    TabView: { 
        configurable: true,
        enumerable: true,
        get() {
            const t = bridge.getClass("Xamarin.CommunityToolkit.UI.Views.TabView, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "TabView", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    TabViewItem: { 
        configurable: true,
        enumerable: true,
        get() {
            const t = bridge.getClass("Xamarin.CommunityToolkit.UI.Views.TabViewItem, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "TabViewItem", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    UniformGrid: { 
        configurable: true,
        enumerable: true,
        get() {
            const t = bridge.getClass("Xamarin.CommunityToolkit.UI.Views.UniformGrid, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "UniformGrid", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    GravatarImageExtension: { 
        configurable: true,
        enumerable: true,
        get() {
            const t = bridge.getClass("Xamarin.CommunityToolkit.Extensions.GravatarImageExtension, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "GravatarImageExtension", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    PageExtension: { 
        configurable: true,
        enumerable: true,
        get() {
            const t = bridge.getClass("Xamarin.CommunityToolkit.Extensions.PageExtension, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "PageExtension", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    VisualElementExtension: { 
        configurable: true,
        enumerable: true,
        get() {
            const t = bridge.getClass("Xamarin.CommunityToolkit.Extensions.VisualElementExtension, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "VisualElementExtension", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    IconTintColorEffect: { 
        configurable: true,
        enumerable: true,
        get() {
            const t = bridge.getClass("Xamarin.CommunityToolkit.Effects.IconTintColorEffect, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "IconTintColorEffect", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    IconTintColorEffectRouter: { 
        configurable: true,
        enumerable: true,
        get() {
            const t = bridge.getClass("Xamarin.CommunityToolkit.Effects.IconTintColorEffectRouter, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "IconTintColorEffectRouter", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    RemoveBorderEffect: { 
        configurable: true,
        enumerable: true,
        get() {
            const t = bridge.getClass("Xamarin.CommunityToolkit.Effects.RemoveBorderEffect, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "RemoveBorderEffect", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    SafeAreaEffect: { 
        configurable: true,
        enumerable: true,
        get() {
            const t = bridge.getClass("Xamarin.CommunityToolkit.Effects.SafeAreaEffect, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "SafeAreaEffect", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    SafeAreaEffectRouter: { 
        configurable: true,
        enumerable: true,
        get() {
            const t = bridge.getClass("Xamarin.CommunityToolkit.Effects.SafeAreaEffectRouter, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "SafeAreaEffectRouter", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    SelectAllTextEffect: { 
        configurable: true,
        enumerable: true,
        get() {
            const t = bridge.getClass("Xamarin.CommunityToolkit.Effects.SelectAllTextEffect, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "SelectAllTextEffect", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    TouchEffect: { 
        configurable: true,
        enumerable: true,
        get() {
            const t = bridge.getClass("Xamarin.CommunityToolkit.Effects.TouchEffect, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "TouchEffect", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    VisualFeedbackEffect: { 
        configurable: true,
        enumerable: true,
        get() {
            const t = bridge.getClass("Xamarin.CommunityToolkit.Effects.VisualFeedbackEffect, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "VisualFeedbackEffect", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    BoolToObjectConverter: { 
        configurable: true,
        enumerable: true,
        get() {
            const t = bridge.getClass("Xamarin.CommunityToolkit.Converters.BoolToObjectConverter, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "BoolToObjectConverter", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    BoolToObjectConverter$Generic: { 
        configurable: true,
        enumerable: true,
        get() {
            const t = bridge.getClass("Xamarin.CommunityToolkit.Converters.BoolToObjectConverter`1, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "BoolToObjectConverter$Generic", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    ByteArrayToImageSourceConverter: { 
        configurable: true,
        enumerable: true,
        get() {
            const t = bridge.getClass("Xamarin.CommunityToolkit.Converters.ByteArrayToImageSourceConverter, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "ByteArrayToImageSourceConverter", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    DateTimeOffsetConverter: { 
        configurable: true,
        enumerable: true,
        get() {
            const t = bridge.getClass("Xamarin.CommunityToolkit.Converters.DateTimeOffsetConverter, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "DateTimeOffsetConverter", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    DoubleToIntConverter: { 
        configurable: true,
        enumerable: true,
        get() {
            const t = bridge.getClass("Xamarin.CommunityToolkit.Converters.DoubleToIntConverter, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "DoubleToIntConverter", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    EqualConverter: { 
        configurable: true,
        enumerable: true,
        get() {
            const t = bridge.getClass("Xamarin.CommunityToolkit.Converters.EqualConverter, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "EqualConverter", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    IndexToArrayItemConverter: { 
        configurable: true,
        enumerable: true,
        get() {
            const t = bridge.getClass("Xamarin.CommunityToolkit.Converters.IndexToArrayItemConverter, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "IndexToArrayItemConverter", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    IntToBoolConverter: { 
        configurable: true,
        enumerable: true,
        get() {
            const t = bridge.getClass("Xamarin.CommunityToolkit.Converters.IntToBoolConverter, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "IntToBoolConverter", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    InvertedBoolConverter: { 
        configurable: true,
        enumerable: true,
        get() {
            const t = bridge.getClass("Xamarin.CommunityToolkit.Converters.InvertedBoolConverter, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "InvertedBoolConverter", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    IsNotNullOrEmptyConverter: { 
        configurable: true,
        enumerable: true,
        get() {
            const t = bridge.getClass("Xamarin.CommunityToolkit.Converters.IsNotNullOrEmptyConverter, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "IsNotNullOrEmptyConverter", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    IsNullOrEmptyConverter: { 
        configurable: true,
        enumerable: true,
        get() {
            const t = bridge.getClass("Xamarin.CommunityToolkit.Converters.IsNullOrEmptyConverter, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "IsNullOrEmptyConverter", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    ItemSelectedEventArgsConverter: { 
        configurable: true,
        enumerable: true,
        get() {
            const t = bridge.getClass("Xamarin.CommunityToolkit.Converters.ItemSelectedEventArgsConverter, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "ItemSelectedEventArgsConverter", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    ItemTappedEventArgsConverter: { 
        configurable: true,
        enumerable: true,
        get() {
            const t = bridge.getClass("Xamarin.CommunityToolkit.Converters.ItemTappedEventArgsConverter, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "ItemTappedEventArgsConverter", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    ListIsNotNullOrEmptyConverter: { 
        configurable: true,
        enumerable: true,
        get() {
            const t = bridge.getClass("Xamarin.CommunityToolkit.Converters.ListIsNotNullOrEmptyConverter, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "ListIsNotNullOrEmptyConverter", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    ListIsNullOrEmptyConverter: { 
        configurable: true,
        enumerable: true,
        get() {
            const t = bridge.getClass("Xamarin.CommunityToolkit.Converters.ListIsNullOrEmptyConverter, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "ListIsNullOrEmptyConverter", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    ListToStringConverter: { 
        configurable: true,
        enumerable: true,
        get() {
            const t = bridge.getClass("Xamarin.CommunityToolkit.Converters.ListToStringConverter, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "ListToStringConverter", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    MultiConverter: { 
        configurable: true,
        enumerable: true,
        get() {
            const t = bridge.getClass("Xamarin.CommunityToolkit.Converters.MultiConverter, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "MultiConverter", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    MultiConverterParameter: { 
        configurable: true,
        enumerable: true,
        get() {
            const t = bridge.getClass("Xamarin.CommunityToolkit.Converters.MultiConverterParameter, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "MultiConverterParameter", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    NotEqualConverter: { 
        configurable: true,
        enumerable: true,
        get() {
            const t = bridge.getClass("Xamarin.CommunityToolkit.Converters.NotEqualConverter, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "NotEqualConverter", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    StateToBooleanConverter: { 
        configurable: true,
        enumerable: true,
        get() {
            const t = bridge.getClass("Xamarin.CommunityToolkit.Converters.StateToBooleanConverter, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "StateToBooleanConverter", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    TextCaseConverter: { 
        configurable: true,
        enumerable: true,
        get() {
            const t = bridge.getClass("Xamarin.CommunityToolkit.Converters.TextCaseConverter, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "TextCaseConverter", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    TimeSpanToDoubleConverter: { 
        configurable: true,
        enumerable: true,
        get() {
            const t = bridge.getClass("Xamarin.CommunityToolkit.Converters.TimeSpanToDoubleConverter, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "TimeSpanToDoubleConverter", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    AnimationBehavior: { 
        configurable: true,
        enumerable: true,
        get() {
            const t = bridge.getClass("Xamarin.CommunityToolkit.Behaviors.AnimationBehavior, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "AnimationBehavior", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    AnimationBase$Generic: { 
        configurable: true,
        enumerable: true,
        get() {
            const t = bridge.getClass("Xamarin.CommunityToolkit.Behaviors.AnimationBase`1, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "AnimationBase$Generic", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    AnimationBase: { 
        configurable: true,
        enumerable: true,
        get() {
            const t = bridge.getClass("Xamarin.CommunityToolkit.Behaviors.AnimationBase, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "AnimationBase", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    FadeAnimation: { 
        configurable: true,
        enumerable: true,
        get() {
            const t = bridge.getClass("Xamarin.CommunityToolkit.Behaviors.FadeAnimation, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "FadeAnimation", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    FlipHorizontalAnimation: { 
        configurable: true,
        enumerable: true,
        get() {
            const t = bridge.getClass("Xamarin.CommunityToolkit.Behaviors.FlipHorizontalAnimation, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "FlipHorizontalAnimation", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    FlipVerticalAnimation: { 
        configurable: true,
        enumerable: true,
        get() {
            const t = bridge.getClass("Xamarin.CommunityToolkit.Behaviors.FlipVerticalAnimation, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "FlipVerticalAnimation", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    RotateAnimation: { 
        configurable: true,
        enumerable: true,
        get() {
            const t = bridge.getClass("Xamarin.CommunityToolkit.Behaviors.RotateAnimation, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "RotateAnimation", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    ScaleAnimation: { 
        configurable: true,
        enumerable: true,
        get() {
            const t = bridge.getClass("Xamarin.CommunityToolkit.Behaviors.ScaleAnimation, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "ScaleAnimation", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    ShakeAnimation: { 
        configurable: true,
        enumerable: true,
        get() {
            const t = bridge.getClass("Xamarin.CommunityToolkit.Behaviors.ShakeAnimation, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "ShakeAnimation", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    EventToCommandBehavior: { 
        configurable: true,
        enumerable: true,
        get() {
            const t = bridge.getClass("Xamarin.CommunityToolkit.Behaviors.EventToCommandBehavior, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "EventToCommandBehavior", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    ImpliedOrderGridBehavior: { 
        configurable: true,
        enumerable: true,
        get() {
            const t = bridge.getClass("Xamarin.CommunityToolkit.Behaviors.ImpliedOrderGridBehavior, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "ImpliedOrderGridBehavior", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    MaskedBehavior: { 
        configurable: true,
        enumerable: true,
        get() {
            const t = bridge.getClass("Xamarin.CommunityToolkit.Behaviors.MaskedBehavior, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "MaskedBehavior", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    MaxLengthReachedBehavior: { 
        configurable: true,
        enumerable: true,
        get() {
            const t = bridge.getClass("Xamarin.CommunityToolkit.Behaviors.MaxLengthReachedBehavior, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "MaxLengthReachedBehavior", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    UserStoppedTypingBehavior: { 
        configurable: true,
        enumerable: true,
        get() {
            const t = bridge.getClass("Xamarin.CommunityToolkit.Behaviors.UserStoppedTypingBehavior, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "UserStoppedTypingBehavior", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    CharactersValidationBehavior: { 
        configurable: true,
        enumerable: true,
        get() {
            const t = bridge.getClass("Xamarin.CommunityToolkit.Behaviors.CharactersValidationBehavior, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "CharactersValidationBehavior", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    EmailValidationBehavior: { 
        configurable: true,
        enumerable: true,
        get() {
            const t = bridge.getClass("Xamarin.CommunityToolkit.Behaviors.EmailValidationBehavior, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "EmailValidationBehavior", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    MultiValidationBehavior: { 
        configurable: true,
        enumerable: true,
        get() {
            const t = bridge.getClass("Xamarin.CommunityToolkit.Behaviors.MultiValidationBehavior, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "MultiValidationBehavior", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    NumericValidationBehavior: { 
        configurable: true,
        enumerable: true,
        get() {
            const t = bridge.getClass("Xamarin.CommunityToolkit.Behaviors.NumericValidationBehavior, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "NumericValidationBehavior", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    RequiredStringValidationBehavior: { 
        configurable: true,
        enumerable: true,
        get() {
            const t = bridge.getClass("Xamarin.CommunityToolkit.Behaviors.RequiredStringValidationBehavior, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "RequiredStringValidationBehavior", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    TextValidationBehavior: { 
        configurable: true,
        enumerable: true,
        get() {
            const t = bridge.getClass("Xamarin.CommunityToolkit.Behaviors.TextValidationBehavior, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "TextValidationBehavior", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    UriValidationBehavior: { 
        configurable: true,
        enumerable: true,
        get() {
            const t = bridge.getClass("Xamarin.CommunityToolkit.Behaviors.UriValidationBehavior, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "UriValidationBehavior", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
});
Object.defineProperties(Xamarin.CommunityToolkit.UI.Views.Internals as any, {
    BaseTemplatedView$Generic: { 
        configurable: true,
        enumerable: true,
        get() {
            const t = bridge.getClass("Xamarin.CommunityToolkit.UI.Views.Internals.BaseTemplatedView`1, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "BaseTemplatedView$Generic", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
});
Object.defineProperties(Xamarin.CommunityToolkit.Core as any, {
    FileMediaSource: { 
        configurable: true,
        enumerable: true,
        get() {
            const t = bridge.getClass("Xamarin.CommunityToolkit.Core.FileMediaSource, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "FileMediaSource", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    MediaSource: { 
        configurable: true,
        enumerable: true,
        get() {
            const t = bridge.getClass("Xamarin.CommunityToolkit.Core.MediaSource, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "MediaSource", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    StreamMediaSource: { 
        configurable: true,
        enumerable: true,
        get() {
            const t = bridge.getClass("Xamarin.CommunityToolkit.Core.StreamMediaSource, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "StreamMediaSource", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    UriMediaSource: { 
        configurable: true,
        enumerable: true,
        get() {
            const t = bridge.getClass("Xamarin.CommunityToolkit.Core.UriMediaSource, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "UriMediaSource", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
});
Object.defineProperties(Xamarin.CommunityToolkit.Behaviors.Internals as any, {
    BaseBehavior$Generic: { 
        configurable: true,
        enumerable: true,
        get() {
            const t = bridge.getClass("Xamarin.CommunityToolkit.Behaviors.Internals.BaseBehavior`1, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "BaseBehavior$Generic", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
    ValidationBehavior: { 
        configurable: true,
        enumerable: true,
        get() {
            const t = bridge.getClass("Xamarin.CommunityToolkit.Behaviors.Internals.ValidationBehavior, Xamarin.CommunityToolkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");
            Object.defineProperty(this, "ValidationBehavior", { value: t, enumerable: true, writable: true, configurable: true })
            return t;
        }
    },
});

