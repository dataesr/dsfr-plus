import { Argument } from "classnames";
import { ColorType } from "../../types";
import { Merge } from "../../types/polymophic";
interface NoticeCss {
    "fr-container"?: Argument;
    "fr-notice__body"?: Argument;
    "fr-notice__title"?: Argument;
    "fr-btn--close"?: Argument;
}
export type NoticeBaseProps = {
    closeMode: "disallow" | "uncontrolled" | "controlled";
    onClose?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    children?: string | React.ReactNode[] | React.ReactNode;
    className?: Argument;
    css?: NoticeCss;
    type: ColorType;
};
export type NoticeProps = Merge<React.HTMLAttributes<HTMLDivElement>, NoticeBaseProps>;
export declare const Notice: ({ children, closeMode, type, className, css, onClose, ...props }: NoticeProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Notice.d.ts.map