import { Argument } from 'classnames';
import { Merge } from '../../types/polymophic';
type CheckboxCss = {
    label?: Argument;
    labelHint?: Argument;
    input?: Argument;
};
type CheckboxBaseProps = {
    className?: Argument;
    css?: CheckboxCss;
    hint?: string;
    id?: string;
    label?: string;
    size?: 'sm' | 'md';
};
export type CheckboxProps = Merge<React.InputHTMLAttributes<HTMLInputElement>, CheckboxBaseProps>;
export declare const Checkbox: import("react").ForwardRefExoticComponent<Omit<import("react").InputHTMLAttributes<HTMLInputElement>, keyof CheckboxBaseProps> & CheckboxBaseProps & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLInputElement>>;
export {};
//# sourceMappingURL=Checkbox.d.ts.map