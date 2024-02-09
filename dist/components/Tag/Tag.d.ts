import { OnlyAs } from "react-polymorphed";
import { Argument } from "classnames";
import { ColorFamily } from "../../types/colors";
export type TagProps = {
    className?: Argument;
    color?: ColorFamily;
    icon?: string;
    iconPosition?: 'left' | 'right';
    size?: "md" | "sm";
};
export type SelectableTagProps = {
    className?: Argument;
    color?: ColorFamily;
    icon?: string;
    iconPosition?: 'left' | 'right';
    size?: "md" | "sm";
    selected: boolean;
};
export declare const Tag: import("react-polymorphed").PolyForwardComponent<"p", TagProps, OnlyAs<"a" | "button" | "p">>;
export declare const SelectableTag: import("react-polymorphed").PolyForwardComponent<"button", SelectableTagProps, OnlyAs<"a" | "button">>;
export declare const DissmissibleTag: import("react-polymorphed").PolyForwardComponent<"button", TagProps, OnlyAs<"a" | "button">>;
//# sourceMappingURL=Tag.d.ts.map