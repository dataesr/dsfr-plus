import { Argument } from "classnames";
import { ColorType } from "../../types";
type AlertCss = {
    title?: Argument;
    description?: Argument;
    button?: Argument;
};
type AlertBaseProps = {
    title?: React.ReactNode;
    description?: React.ReactNode;
    closeMode?: "disallow" | "uncontrolled" | "controlled";
    onClose?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    titleAs?: React.ElementType;
    className?: Argument;
    css?: AlertCss;
    variant: ColorType;
    size?: "md" | "sm";
};
export declare const Alert: import("react").ForwardRefExoticComponent<Omit<import("react").HTMLAttributes<HTMLDivElement>, keyof AlertBaseProps> & AlertBaseProps & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLDivElement>>;
export {};
//# sourceMappingURL=Alert.d.ts.map