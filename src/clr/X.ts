import XNode from "@web-atoms/core/dist/core/XNode";

const X = {
    Name: (n: string) => ({ "WebAtoms.AtomX:Name": n }),
    Arguments: ( args?: any, ... nodes: XNode[]) => new XNode("WebAtoms.AtomX:Arguments", {}, nodes),
    // Key: (n: string) => ({ "WebAtoms.AtomX:Key": n }),
};

export default X;
