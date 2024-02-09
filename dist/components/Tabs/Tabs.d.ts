import { Argument } from 'classnames';
import { Merge } from '../../types/polymophic';
type TabsCss = {
    ul?: Argument;
    li?: Argument;
    button?: Argument;
};
export type TabsProps = Merge<React.HTMLAttributes<HTMLDivElement>, {
    children: React.ReactNode[] | React.ReactNode;
    className?: Argument;
    defaultActiveIndex?: number;
    css?: TabsCss;
    onTabChange?: (i: number) => void;
}>;
export declare const Tabs: ({ className, children, defaultActiveIndex, css, onTabChange, ...props }: TabsProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Tabs.d.ts.map