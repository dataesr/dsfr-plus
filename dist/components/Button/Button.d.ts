import { OnlyAs } from "react-polymorphed";
import { Argument } from "classnames";
import { DSFRColors } from "../../types/colors";
export type ButtonProps = React.PropsWithChildren<{
    className?: Argument;
    color?: DSFRColors | 'blue-france';
    icon?: string;
    iconPosition?: 'left' | 'right';
    size?: 'sm' | 'md' | 'lg';
    variant?: 'primary' | 'secondary' | 'tertiary' | 'text';
}>;
export declare const Button: import("react-polymorphed").PolyForwardComponent<"button", ButtonProps, OnlyAs<"a" | "button">>;
//# sourceMappingURL=Button.d.ts.map