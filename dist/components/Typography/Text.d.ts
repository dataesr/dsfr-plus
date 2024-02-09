import { Argument } from 'classnames';
import { OnlyAs, PolymorphicComponent } from 'react-polymorphed';
type TextTags = 'p' | 'span';
type TextSizes = 'xs' | 'sm' | 'md' | 'lg' | 'lead';
type TextProps = React.PropsWithChildren<{
    className?: Argument;
    size?: TextSizes;
    alt?: boolean;
    bold?: boolean;
}>;
export declare const Text: PolymorphicComponent<"p", TextProps, OnlyAs<TextTags>>;
export {};
//# sourceMappingURL=Text.d.ts.map