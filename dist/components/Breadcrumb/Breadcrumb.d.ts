import { Argument } from 'classnames';
import { Merge } from '../../types/polymophic';
export type BreadcrumbCss = {
    button?: Argument;
    list?: Argument;
    item?: Argument;
};
export type BreadcrumbBaseProps = {
    buttonLabel?: string;
    className?: Argument;
    css?: BreadcrumbCss;
};
export type BreadcrumbProps = Merge<React.HTMLAttributes<HTMLDivElement>, BreadcrumbBaseProps>;
export declare const Breadcrumb: React.FC<BreadcrumbProps>;
//# sourceMappingURL=Breadcrumb.d.ts.map