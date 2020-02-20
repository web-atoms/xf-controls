import XNode from "@web-atoms/core/dist/core/XNode";
import Bind from "@web-atoms/core/dist/core/Bind";

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
            return Bind.oneTime((c, e) => null);
        }
    // Key: (n: string) => ({ "WebAtoms.AtomX:Key": n }),
};

export default X;
