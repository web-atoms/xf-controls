//tslint:disable
import Bind from "@web-atoms/core/dist/core/Bind";
import { ColorItem } from "@web-atoms/core/dist/core/Colors";
import XNode, { RootObject, NodeFactory, AttachedNode } from "@web-atoms/core/dist/core/XNode";
import DateTime from "@web-atoms/date-time/dist/DateTime";
import RgPluginsPopup from "./RgPluginsPopup";
import XF from "./XF";

const NSAtoms = "WebAtoms.Controls";
const NSAssembly = "WebAtoms.XF";

declare var bridge: any;

namespace WA {

    export class AtomPathButton extends XF.Grid {

        public static close: XF.Geometry;

        public static question: XF.Geometry;

        public static dropDown: XF.Geometry;

        public static dropUp: XF.Geometry;

        public static command: NodeFactory;

        public static commandParameter: NodeFactory;

        public static fill: NodeFactory;

        public static stroke: NodeFactory;

        public static data: NodeFactory;

        public static cornerRadius: NodeFactory;

        public command: any;

        public commandParameter: any;

        public fill: XF.Brush | Bind | null;

        public stroke: XF.Brush | Bind | null;

        public data: XF.Geometry | Bind | null;

        public cornerRadius: number | Bind | null;
    }

    export declare class AtomButtonBar extends XF.StackLayout {

        public static itemTemplate: NodeFactory;

        public static itemControlTemplate: NodeFactory;

        public itemSource: any[] | Bind;
        
        public itemTemplate: XF.DataTemplate | Bind;

        public selectedItem: any;

        public itemControlTemplate: XF.ControlTemplate | Bind;

        public selectedItemTextColor: XF.Color | Bind;

        public textColor: XF.Color | Bind;

        public selectedItemBackground: XF.Brush | Bind;
        
        public minItemWidth: number | Bind;

        public itemTappedCommand: any;
    }

    export declare class AtomCheckBoxList extends AtomWrapLayout {

        public static itemTemplate: NodeFactory;

        public static itemControlTemplate: NodeFactory;

        public itemTemplate: XF.DataTemplate;

        public itemControlTemplate: XF.ControlTemplate;

        public itemsSource: any[];

        public selectedItems: any[];        

    }

    export declare class AtomRadioButtonList extends AtomWrapLayout {

        public static itemTemplate: NodeFactory;

        public static itemControlTemplate: NodeFactory;

        public itemTemplate: XF.DataTemplate;

        public itemControlTemplate: XF.ControlTemplate;

        public itemsSource: any[];

        public selectedItem: any;

    }    

    export declare class AtomChips extends XF.ContentView {

        public static itemTemplate: NodeFactory;

        /**'
         * Default is Input
         */
        public entryMode: "Input" | "Search";

        public selectedItems: any[];

        public itemsSource: any[];

        public itemTemplate: XF.DataTemplate;

        public search: string;

        public eventSearchChanged: any;

        public separator: string;

    }

    export declare class AtomDropDown extends AtomChoiceView {
        
    }

    
    export declare class AtomChoiceView extends XF.ContentView {
        
        public static emptyItemTemplate: NodeFactory;

        public static itemTemplate: NodeFactory;

        public dropDownHeight: number;

        public searchEnabled: boolean;

        public search: string;

        public eventSearchChanged: any;

        public eventSelectionStarted: any;

        public eventSelectionEnded: any;

        public itemsSource: any[];

        public itemTemplate: XF.DataTemplate;

        public emptyItemTemplate: XF.DataTemplate;

        public isActive: boolean;

        public selectedItem: any;

        /**
         * default is Select
         */
        public prompt: string;

    }

    export declare class AtomEntry extends XF.Entry {

    }

    export declare class AtomExpander extends XF.ContentView {

        public static icon: NodeFactory;

        public static detailTemplate: NodeFactory;

        public static detail: NodeFactory;

        public detail: XF.View;

        public detailTemplate: XF.DataTemplate;

        public icon: XF.ImageSource;

        public isExpanded: boolean;
    }

    export declare class AtomDateField extends XF.ContentView {

        public selectedDate: Date;

        public selectedDateChangedCommand: any;
        
    }

    export declare class AtomCalendar extends XF.Grid {

        public static itemTemplate: NodeFactory;

        public static itemControlTemplate: NodeFactory;

        public yearStart: number | Bind;

        public yearEnd: number | Bind;

        public year: number | Bind;

        public month: number | Bind;

        public weekendTextColor: XF.Color | Bind;

        public todayBackground: XF.Brush | Bind;

        public itemBackground: XF.Brush | Bind;

        public selectedItemBackground: XF.Brush | Bind;

        public textColor: XF.Color | Bind;

        public otherMonthBackground: XF.Brush | Bind;

        public selectedItemTextColor: XF.Color | Bind;

        public itemControlTemplate: XF.ControlTemplate | Bind;

        public itemTemplate: XF.DataTemplate | Bind;

        public selectedDate: Date | DateTime | Bind;

        public enableFunc: ((x) => boolean) | Bind;

        public weekHeaderBackground: XF.Brush | Bind;

        public weekHeaderTextColor: XF.Color | Bind;

        public itemTappedCommand: any;

    }

    export declare class AtomDuoToneFontImageSource extends XF.FontImageSource {
        public secondaryColor: XF.Color | string;
        public secondaryGlyph: string;
        public secondaryOpacity: number;
    }

    export declare class AtomDuoToneFontButton extends XF.Grid {

        public static source: NodeFactory;

        public command: any;
        public commandParameter: any;
        public source: AtomDuoToneFontImageSource;
    }

    export declare class AtomWrapLayout extends XF.Layout {

    }

    export declare class AtomView extends XF.ContentView {
        public static dataTemplate: NodeFactory;
        public static emptyDataTemplate: NodeFactory;
    
        public dataTemplate: any;
        public emptyDataTemplate: any;
    }
    
    export declare class AtomViewCell extends XF.ViewCell {
        public static dataTemplate: NodeFactory;
        public static command: NodeFactory;
    
        public dataTemplate: any;
        public command: any;
    }
    

    export declare class AtomSuggestions extends XF.Grid {

        public static itemTemplate: NodeFactory;

        public static itemControlTemplate: NodeFactory;

        public static header: NodeFactory;

        public static more: NodeFactory;

        public static promptIcon: NodeFactory;

        public itemsSource: any[];

        public itemTemplate: XF.DataTemplate;

        public itemControlTemplate: XF.ControlTemplate;

        public header: any;

        public itemTappedCommand: any;

    }
    
    export declare class AtomToolbarItem extends XF.ToolbarItem {
    
        public isVisible: boolean;
    
    }
    
    export declare class GroupBy {
        public static itemsSource: NodeFactory;
    };

    export declare class AtomPopup {

        /** Set this to align popup */
        public static horizontalAlignment(layout: "Start" | "Center" | "End" | "Fill" | Bind): any;

        /** You can set DataTemplate that contains a view that will be displayed as popup */
        public static popupTemplate: AttachedNode;

        /** You can set ControlTemplate that will render background of the popup*/
        public static popupControlTemplate: AttachedNode;

        /** You can use it to close the popup by setting displayPopup to false and do some other cleaning */
        public static popupCloseCommand: AttachedNode;

        /** When set to true, the popup will be displayed */
        public static displayPopup(display: boolean | Bind): any;

    }
    
    export declare class Markdown {
        public static text: AttachedNode;
    }
    
    export declare class AtomRepeater extends XF.ListView {
    
    }
    
    export declare class AtomForm extends XF.ContentView {
    
        public static fieldStyle: NodeFactory;
    
        submitCommand: any;
        fieldStyle: any;
    }

    export declare class AtomPopupPage extends RgPluginsPopup.PopupPage {

        public cancelCommand: any;

    }
    
    
    export declare class AtomField extends XF.ContentView {

        public static description: AttachedNode;
        public static help: AttachedNode;
    
        public label?: string;
        public isRequired?: boolean;
        public labelColor?: ColorItem | XF.Color | string | null | Bind;
        public error?: string;
        public errorColor?: ColorItem | XF.Color | string | null | Bind;
        public errorBackgroundColor?: ColorItem | XF.Color | string | null | Bind;
        public help?: any;
        public helpCommand?: any;

        /**
         * Enlarge label to cover the content, this is false by default.
         * It is set to true automatically if, 
         * 1. Content is an Entry and it is empty and does not have the focus.
         * 2. Content is an Editor and it is empty and does not have the focus.
         * 3. Content is a Switch.
         */
        public scaleUpLabel: boolean | Bind;
    }
    
    export declare class AtomTemplateSelector extends RootObject {
        public static templates: NodeFactory;
        public static templateSelector: NodeFactory;
        selector: (data: any) => number;
    }
};

function create(name: string) {
    return {
        configurable: true,
        enumerable: true,
        get() {
            const t = bridge.getClass(`${NSAtoms}.${name}, ${NSAssembly}`); 
            Object.defineProperty(this, name, {
                enumerable: true,
                configurable: true,
                writable: true,
                value: t
            });
            return t;
        }
    };
}

Object.defineProperties( (WA as any), {
    AtomPathButton: create("AtomPathButton"),
    AtomButtonBar: create("AtomButtonBar"),
    AtomCalendar: create("AtomCalendar"),
    AtomCheckBoxList: create("AtomCheckBoxList"),
    AtomDateField: create("AtomDateField"),
    AtomEntry: create("AtomEntry"),
    AtomExpander: create("AtomExpander"),
    AtomChips: create("AtomChips"),
    AtomChoiceView: create("AtomChoiceView"),
    AtomPopup: create("AtomPopup"),
    AtomRepeater: create("AtomRepeater"),
    AtomRadioButtonList: create("AtomRadioButtonList"),
    AtomToolbarItem: create("AtomToolbarItem"),
    AtomWrapLayout: create("AtomWrapLayout"),
    AtomView: create("AtomView"),
    AtomViewCell: create("AtomViewCell"),
    AtomForm: create("AtomForm"),
    AtomField: create("AtomField"),
    AtomSuggestions: create("AtomSuggestions"),
    GroupBy: create("GroupBy"),
    Markdown: create("Markdown"),
    AtomPopupPage: create("AtomPopupPage"),
    AtomTemplateSelector: create("AtomTemplateSelector")
        // get AtomToolbarItem(): typeof AtomToolbarItem { return this._AtomToolbarItem || (this._AtomToolbarItem = bridge.getClass(`${NSAtoms}.AtomToolbarItem, ${NSAssembly}`)); },
        // get AtomView(): typeof  AtomView { return this._AtomView || (this._AtomView = bridge.getClass(`${NSAtoms}.AtomView, ${NSAssembly}`)); },
        // get AtomViewCell(): typeof  AtomViewCell { return this._AtomViewCell || (this._AtomViewCell = bridge.getClass(`${NSAtoms}.AtomViewCell, ${NSAssembly}`)); },
        // get AtomForm(): typeof AtomForm { return this._AtomForm || (this._AtomForm = bridge.getClass(`${NSAtoms}.AtomForm, ${NSAssembly}`)); },
        // get AtomField(): typeof AtomField { return this._AtomField || (this._AtomField = bridge.getClass(`${NSAtoms}.AtomField, ${NSAssembly}`)) ; },
        // get AtomTemplateSelector(): typeof AtomTemplateSelector { return this._AtomTemplateSelector || (this._AtomTemplateSelector = bridge.getClass(`${NSAtoms}.AtomTemplateSelector, ${NSAssembly}`)) ; },
        // get GroupBy(): typeof GroupBy { return this._GroupBy || (this._GroupBy = bridge.getClass(`${NSAtoms}.GroupBy, ${NSAssembly}`)); },
        // get Markdown(): typeof Markdown { return this._Markdown || (this._Markdown = bridge.getClass(`${NSAtoms}.Markdown, ${NSAssembly}`)); }
    }
);

export default WA;
