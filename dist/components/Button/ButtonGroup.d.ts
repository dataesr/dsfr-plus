import { Argument } from 'classnames';
import { Merge } from '../../types/polymophic';
type ButtonGroupBaseProps = {
    align?: 'left' | 'right' | 'center';
    children?: React.ReactNode;
    className?: Argument;
    isEquisized?: boolean;
    isReversed?: boolean;
    isInlineFrom?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    size?: 'sm' | 'md' | 'lg';
};
export type ButtonGroupProps = Merge<React.HTMLAttributes<HTMLUListElement>, ButtonGroupBaseProps>;
export declare const ButtonGroup: ({ align, children, className, isEquisized, isInlineFrom, isReversed, size, ...props }: ButtonGroupProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=ButtonGroup.d.ts.map