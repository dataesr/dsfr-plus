import { Argument } from 'classnames';
import { Merge } from '../../types/polymophic';
interface FastAccessCss {
    "fr-btns-group"?: Argument;
}
export type FastAccessBaseProps = {
    className?: Argument;
    css?: FastAccessCss;
};
export type FastAccessProps = Merge<React.HTMLAttributes<HTMLDivElement>, FastAccessBaseProps>;
export declare const FastAccess: ({ children, className, css, ...props }: FastAccessProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=FastAccess.d.ts.map