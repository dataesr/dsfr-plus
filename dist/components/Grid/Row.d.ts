import { Argument } from 'classnames';
import { Merge } from '../../types/polymophic';
type RowBaseProps = {
    className?: Argument;
    gutters?: boolean;
    verticalAlign?: 'top' | 'bottom' | 'middle';
    horizontalAlign?: 'left' | 'center' | 'right';
};
export type RowProps = Merge<React.HTMLAttributes<HTMLDivElement>, RowBaseProps>;
export declare const Row: ({ gutters, horizontalAlign, verticalAlign, className, ...props }: RowProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Row.d.ts.map