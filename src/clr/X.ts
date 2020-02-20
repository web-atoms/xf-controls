import { AtomBridge } from "@web-atoms/core/dist/core/AtomBridge";
import Bind from "@web-atoms/core/dist/core/Bind";
import XNode from "@web-atoms/core/dist/core/XNode";

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
    Name: (n: string) => ({ "WebAtoms.AtomX:Name": n }),
    Arguments: ( args?: any, ... nodes: XNode[]) => new XNode("WebAtoms.AtomX:Arguments", {}, nodes),
    Type: (n: string) => ({ type: n }),
    Resource: (n: string) => ({ resource: n}),
    RelativeSource,
    Binding: (b: {
        path: string,
        source: any,
        converter: any,
        converterParameter: any}) => {
            return new Bind((n, bx, e, s) => {
                (AtomBridge.instance as any).setBinding(e, bx.name, b);
            }, null);
        }
    // Key: (n: string) => ({ "WebAtoms.AtomX:Key": n }),
};

export default X;
