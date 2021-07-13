//tslint:disable
import XNode, { RootObject, NodeFactory, AttachedNode } from "@web-atoms/core/dist/core/XNode";
import Bind from "@web-atoms/core/dist/core/Bind";
import { ColorItem } from "@web-atoms/core/dist/core/Colors";

import * as XF from "./XF";
import FFImageLoading from "./FFImageLoading";
declare var bridge: any;
const assemblyName = `FFImageLoading.Svg.Forms`;
let ns = `FFImageLoading.Svg.Forms`;
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

namespace FFImageLoadingSvg {
    export namespace Forms {
        export namespace Svg {
            export declare class SvgCachedImage extends FFImageLoading.Forms.CachedImage {
                public replaceStringMap: any;
            }
        }
    }
}

export default FFImageLoadingSvg;
