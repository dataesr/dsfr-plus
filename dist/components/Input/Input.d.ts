import { Argument } from 'classnames';
import { Merge } from '../../types/polymophic';
type TextInputCss = {
    'fr-label'?: Argument;
    'fr-hint-text'?: Argument;
    'fr-input'?: Argument;
    'fr-input-wrap'?: Argument;
};
export type TextInputBaseProps = {
    className?: Argument;
    css?: TextInputCss;
    disableAutoValidation?: boolean;
    message?: React.ReactNode;
    messageType?: 'error' | 'valid' | '' | null;
    label?: React.ReactNode;
    hint?: React.ReactNode;
    icon?: string;
};
export type TextInputProps = Merge<React.InputHTMLAttributes<HTMLInputElement>, TextInputBaseProps>;
export type TextAreaProps = Merge<React.TextareaHTMLAttributes<HTMLTextAreaElement>, TextInputBaseProps>;
export declare const TextInput: import("react").ForwardRefExoticComponent<Omit<import("react").InputHTMLAttributes<HTMLInputElement>, keyof TextInputBaseProps> & TextInputBaseProps & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLInputElement>>;
export declare const TextArea: import("react").ForwardRefExoticComponent<Omit<import("react").TextareaHTMLAttributes<HTMLTextAreaElement>, keyof TextInputBaseProps> & TextInputBaseProps & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLTextAreaElement>>;
export {};
//# sourceMappingURL=Input.d.ts.map