//tslint:disable
import XNode, { RootObject, NodeFactory, AttachedNode } from "@web-atoms/core/dist/core/XNode";
import Bind from "@web-atoms/core/dist/core/Bind";
import { ColorItem } from "@web-atoms/core/dist/core/Colors";

import * as XF from "./XF";
declare var bridge: any;
const assemblyName = `FFImageLoading.Forms, Version=2.4.11.982, Culture=neutral, PublicKeyToken=null`;
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

namespace FFImageLoading {
    export namespace Forms {
        export declare class CachedImage extends XF.default.View {
            public static fixedOnMeasureBehavior: boolean | null;
            public static fixedAndroidMotionEventHandler: boolean | null;
            public static aspect: AttachedNode;
            public static isLoading: AttachedNode;
            public static isOpaque: AttachedNode;
            public static source: AttachedNode;
            public static retryCount: AttachedNode;
            public static retryDelay: AttachedNode;
            public static loadingDelay: AttachedNode;
            public static downsampleWidth: AttachedNode;
            public static downsampleHeight: AttachedNode;
            public static downsampleToViewSize: AttachedNode;
            public static downsampleUseDipUnits: AttachedNode;
            public static cacheDuration: AttachedNode;
            public static loadingPriority: AttachedNode;
            public static bitmapOptimizations: AttachedNode;
            public static fadeAnimationForCachedImages: AttachedNode;
            public static fadeAnimationEnabled: AttachedNode;
            public static fadeAnimationDuration: AttachedNode;
            public static loadingPlaceholder: AttachedNode;
            public static errorPlaceholder: AttachedNode;
            public static transformPlaceholders: AttachedNode;
            public static transformations: AttachedNode;
            public static invalidateLayoutAfterLoaded: AttachedNode;
            public static successCommand: AttachedNode;
            public static errorCommand: AttachedNode;
            public static finishCommand: AttachedNode;
            public static downloadStartedCommand: AttachedNode;
            public static downloadProgressCommand: AttachedNode;
            public static fileWriteFinishedCommand: AttachedNode;
            public static cacheType: AttachedNode;
            /**
            * Xamarin.Forms.Aspect
            */
            public aspect: "AspectFit" | "AspectFill" | "Fill" | string | number | null | undefined | Bind;
            /**
            * System.Boolean
            */
            public isLoading: boolean | null | Bind;
            /**
            * System.Boolean
            */
            public isOpaque: boolean | null | Bind;
            /**
            * Xamarin.Forms.ImageSource
            */
            public source: /*ImageSource*/ any | Bind;
            /**
            * System.Int32
            */
            public retryCount: number | null | Bind;
            /**
            * System.Int32
            */
            public retryDelay: number | null | Bind;
            /**
            * System.Nullable`1[[System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]]
            */
            public loadingDelay: RootObject /*System.Nullable`1[[System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]]*/ | Bind;
            /**
            * System.Double
            */
            public downsampleWidth: number | null | Bind;
            /**
            * System.Double
            */
            public downsampleHeight: number | null | Bind;
            /**
            * System.Boolean
            */
            public downsampleToViewSize: boolean | null | Bind;
            /**
            * System.Boolean
            */
            public downsampleUseDipUnits: boolean | null | Bind;
            /**
            * System.Nullable`1[[System.TimeSpan, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]]
            */
            public cacheDuration: RootObject /*System.Nullable`1[[System.TimeSpan, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]]*/ | Bind;
            /**
            * FFImageLoading.Work.LoadingPriority
            */
            public loadingPriority: "Normal" | "High" | "Highest" | "Lowest" | "Low" | string | number | null | undefined | Bind;
            /**
            * System.Nullable`1[[System.Boolean, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]]
            */
            public bitmapOptimizations: RootObject /*System.Nullable`1[[System.Boolean, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]]*/ | Bind;
            /**
            * System.Nullable`1[[System.Boolean, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]]
            */
            public fadeAnimationForCachedImages: RootObject /*System.Nullable`1[[System.Boolean, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]]*/ | Bind;
            /**
            * System.Nullable`1[[System.Boolean, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]]
            */
            public fadeAnimationEnabled: RootObject /*System.Nullable`1[[System.Boolean, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]]*/ | Bind;
            /**
            * System.Nullable`1[[System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]]
            */
            public fadeAnimationDuration: RootObject /*System.Nullable`1[[System.Int32, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]]*/ | Bind;
            /**
            * Xamarin.Forms.ImageSource
            */
            public loadingPlaceholder: /*ImageSource*/ any | Bind;
            /**
            * Xamarin.Forms.ImageSource
            */
            public errorPlaceholder: /*ImageSource*/ any | Bind;
            /**
            * System.Nullable`1[[System.Boolean, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]]
            */
            public transformPlaceholders: RootObject /*System.Nullable`1[[System.Boolean, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]]*/ | Bind;
            /**
            * System.Collections.Generic.List`1[[FFImageLoading.Work.ITransformation, FFImageLoading, Version=2.4.11.982, Culture=neutral, PublicKeyToken=null]]
            */
            public transformations: any;
            /**
            * System.Nullable`1[[System.Boolean, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]]
            */
            public invalidateLayoutAfterLoaded: RootObject /*System.Nullable`1[[System.Boolean, System.Private.CoreLib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e]]*/ | Bind;
            /**
            * FFImageLoading.Forms.ICacheKeyFactory
            */
            public cacheKeyFactory: RootObject | Bind;
            /**
            * FFImageLoading.Work.IDataResolver
            */
            public customDataResolver: RootObject /*FFImageLoading.Work.IDataResolver*/ | Bind;
            /**
            * System.Windows.Input.ICommand
            */
            public successCommand: RootObject /*System.Windows.Input.ICommand*/ | Bind;
            /**
            * System.Windows.Input.ICommand
            */
            public errorCommand: RootObject /*System.Windows.Input.ICommand*/ | Bind;
            /**
            * System.Windows.Input.ICommand
            */
            public finishCommand: RootObject /*System.Windows.Input.ICommand*/ | Bind;
            /**
            * System.Windows.Input.ICommand
            */
            public downloadStartedCommand: RootObject /*System.Windows.Input.ICommand*/ | Bind;
            /**
            * System.Windows.Input.ICommand
            */
            public downloadProgressCommand: RootObject /*System.Windows.Input.ICommand*/ | Bind;
            /**
            * System.Windows.Input.ICommand
            */
            public fileWriteFinishedCommand: RootObject /*System.Windows.Input.ICommand*/ | Bind;
            /**
            * System.Nullable`1[[FFImageLoading.Cache.CacheType, FFImageLoading, Version=2.4.11.982, Culture=neutral, PublicKeyToken=null]]
            */
            public cacheType: RootObject /*System.Nullable`1[[FFImageLoading.Cache.CacheType, FFImageLoading, Version=2.4.11.982, Culture=neutral, PublicKeyToken=null]]*/ | Bind;
        }
        export declare class DataUrlImageSource extends XF.default.ImageSource {
            public static dataUrl: AttachedNode;
            /**
            * System.String
            */
            public dataUrl: string | null | Bind;
        }
        export declare class EmbeddedResourceImageSource extends XF.default.ImageSource {
            public static uri: AttachedNode;
            /**
            * System.Uri
            */
            public uri: RootObject /*System.Uri*/ | Bind;
        }
        export declare class ImageSourceConverter extends RootObject {
        }
    }
}

export default FFImageLoading;

ns = "FFImageLoading.Forms";
Object.defineProperties(FFImageLoading.Forms as any, {
    CachedImage: create("CachedImage",ns),
    DataUrlImageSource: create("DataUrlImageSource",ns),
    EmbeddedResourceImageSource: create("EmbeddedResourceImageSource",ns),
    ImageSourceConverter: create("ImageSourceConverter",ns),
});

