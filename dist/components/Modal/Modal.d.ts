import { Argument } from 'classnames';
import { Merge } from '../../types/polymophic';
type ModalSizes = "sm" | "md" | "lg" | "xl";
type ModalProps = Merge<React.HTMLAttributes<HTMLDialogElement>, {
    size?: ModalSizes;
    isOpen: boolean;
    canClose?: boolean;
    hide: Function;
    id?: string;
    className?: Argument;
}>;
export declare const Modal: ({ id, size, hide, isOpen, className, canClose, ...props }: ModalProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Modal.d.ts.map