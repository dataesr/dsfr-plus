import { Argument } from 'classnames';
import { OnlyAs, PolymorphicComponent } from 'react-polymorphed';
type TitleTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type TitleDisplay = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type Look = TitleTags | TitleDisplay;
type TitleProps = React.PropsWithChildren<{
    className?: Argument;
    look?: Look;
}>;
export declare const Title: PolymorphicComponent<'h1', TitleProps, OnlyAs<TitleTags>>;
export default Title;
//# sourceMappingURL=Title.d.ts.map