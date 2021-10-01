import { AtomBridge } from "@web-atoms/core/dist/core/AtomBridge";
import Bind, { bindSymbol } from "@web-atoms/core/dist/core/Bind";
import XNode from "@web-atoms/core/dist/core/XNode";
import XF from "./XF";

function RelativeSource(
    mode: "FindAncestor" | "FindAncestorBindingContext",
    ancestorType: string | any) {
    if (ancestorType.factory) {
        ancestorType = ancestorType.toString();
    }
    return {
        mode,
        ancestorType
    };
}

RelativeSource.self = { mode: "Self" };
RelativeSource.TemplatedParent = { mode: "TemplatedParent" };

const X = {
    Name: (n: string) => ({ "WebAtoms.AtomX:Name": new Bind((nx, bx, c, e) => {
        ((AtomBridge.instance) as any).setName(e, n);
    }, null) }),
    Arguments: ( args?: any, ... nodes: XNode[]) => new XNode("WebAtoms.AtomX:Arguments", {}, nodes),
    Type: (n: string) => ({ type: n }),
    Resource: (n: string) => ({ resource: n}),
    RelativeSource,
    Binding: (b: {
        path: string,
        source?: any,
        converter?: any,
        converterParameter?: any}) => {
            return {
                [bindSymbol](name: string, control: any, e: any) {
                    const property = Object.getPrototypeOf(e).constructor[name + "Property"];
                    const clrBinding = new XF.Binding();
                    clrBinding.path = b.path;
                    if (b.source) {
                        clrBinding.source = b.source;
                    }
                    if (b.converter) {
                        clrBinding.converter = b.converter;
                    }
                    if (b.converterParameter) {
                        clrBinding.converterParameter = b.converterParameter;
                    }
                    e.setBinding(property, clrBinding);
                }
            };
        },
    TemplateBinding: (path: string) => {
        return {
            [bindSymbol](name: string, control: any, e: any) {
                const property = Object.getPrototypeOf(e).constructor[name + "Property"];
                const clrBinding = new XF.Binding();
                clrBinding.path = path;
                clrBinding.source = XF.RelativeBindingSource.templatedParent;
                e.setBinding(property, clrBinding);
            }
        };
}
    // Key: (n: string) => ({ "WebAtoms.AtomX:Key": n }),
};

export default X;
