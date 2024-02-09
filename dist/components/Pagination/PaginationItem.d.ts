import { Merge } from "../../types/polymophic";
export type PaginationItemProps = Merge<React.HTMLAttributes<HTMLAnchorElement>, {
    page: number;
    isActive?: boolean;
    buildURL: (page: number) => string;
    aria: string;
}>;
export declare const PaginationItem: ({ page, isActive, buildURL, aria, ...props }: PaginationItemProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=PaginationItem.d.ts.map