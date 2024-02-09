import { Argument } from 'classnames';
import { Merge } from '../../types/polymophic';
type SearchBarCss = {
    "fr-label"?: Argument;
    "fr-btn"?: Argument;
    "fr-input"?: Argument;
};
export type SearchBarBaseProps = {
    buttonLabel?: string;
    className?: Argument;
    css?: SearchBarCss;
    label?: string;
    onSearch: (text?: string) => void;
    isLarge?: boolean;
    id?: string;
};
export type SearchBarProps = Merge<React.HTMLAttributes<HTMLInputElement>, SearchBarBaseProps>;
export declare const SearchBar: import("react").ForwardRefExoticComponent<Omit<import("react").HTMLAttributes<HTMLInputElement>, keyof SearchBarBaseProps> & SearchBarBaseProps & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLInputElement>>;
export {};
//# sourceMappingURL=SearchBar.d.ts.map