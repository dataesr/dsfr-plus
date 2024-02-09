import { Argument } from 'classnames';
import { Merge } from '../../types/polymophic';
export type TabProps = Merge<React.HTMLAttributes<HTMLDivElement>, {
    className?: Argument;
    icon?: string;
    label?: string;
    readonly index?: string;
}>;
export declare const Tab: ({ className, index, ...props }: TabProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Tab.d.ts.map