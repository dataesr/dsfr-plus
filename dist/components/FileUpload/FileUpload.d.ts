import { Argument } from "classnames";
import { Merge } from "../../types/polymophic";
type FileUploadCss = {
    label?: Argument;
    input?: Argument;
    errorParagraph?: Argument;
};
type FileUploadBaseProps = {
    className?: Argument;
    css?: FileUploadCss;
    errorMessage?: React.ReactNode;
    hint?: React.ReactNode;
    label?: React.ReactNode;
};
export type FileUploadProps = Merge<React.InputHTMLAttributes<HTMLInputElement>, FileUploadBaseProps>;
export declare const FileUpload: import("react").ForwardRefExoticComponent<Omit<import("react").InputHTMLAttributes<HTMLInputElement>, keyof FileUploadBaseProps> & FileUploadBaseProps & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLInputElement>>;
export {};
//# sourceMappingURL=FileUpload.d.ts.map