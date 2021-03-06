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
            return new Bind((n, bx, c, e) => {
                (AtomBridge.instance as any).setBinding(e, n, b);
            }, null);
        },
    TemplateBinding: (path: string) => X.Binding({path, source: RelativeSource.TemplatedParent})
    // Key: (n: string) => ({ "WebAtoms.AtomX:Key": n }),
};

export default X;
