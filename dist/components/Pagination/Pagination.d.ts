import { Merge } from '../../types/polymophic';
export type PaginationProps = Merge<React.HTMLAttributes<HTMLDivElement>, {
    pageCount: number;
    currentPage: number;
    buildURL: (page: number) => string;
    surrendingPages?: number;
}>;
export default function AnchorPagination({ pageCount, currentPage, buildURL, surrendingPages, ...props }: PaginationProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Pagination.d.ts.map