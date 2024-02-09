import { OnlyAs } from "react-polymorphed";
import { Argument } from "classnames";
import { DSFRColors } from "../../types/colors";
export type BadgeType = "new" | 'error' | 'info' | 'warning' | 'success';
export type BadgeProps = {
    icon?: string;
    className?: Argument;
    size?: "md" | "sm";
    children: string;
    noIcon?: boolean;
    color?: DSFRColors;
    variant?: BadgeType;
};
export declare const Badge: import("react-polymorphed").PolyForwardComponent<"p", BadgeProps, OnlyAs<"a" | "button" | "p">>;
//# sourceMappingURL=Badge.d.ts.map