import { Argument } from 'classnames';
import { Merge } from '../../types/polymophic';
interface FieldsetCss {
    legend?: Argument;
    legendHint?: Argument;
    element?: Argument;
    messageDiv?: Argument;
    messageP?: Argument;
}
type FieldsetBaseProps = {
    className?: Argument;
    css?: FieldsetCss;
    hint?: React.ReactNode;
    isInline?: boolean;
    legend?: React.ReactNode;
    message?: React.ReactNode;
    messageType?: 'valid' | 'error';
    required?: boolean;
};
export type FieldsetProps = Merge<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, FieldsetBaseProps>;
export declare const Fieldset: import("react").ForwardRefExoticComponent<Omit<import("react").FieldsetHTMLAttributes<HTMLFieldSetElement>, keyof FieldsetBaseProps> & FieldsetBaseProps & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLFieldSetElement>>;
export {};
//# sourceMappingURL=Fieldset.d.ts.map