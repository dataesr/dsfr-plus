import cn, { Argument } from 'classnames';
import { OnlyAs, PolymorphicComponent } from 'react-polymorphed';

type TextTags = 'p' | 'span';
type TextSizes = 'xs' | 'sm' | 'md' | 'lg' | 'lead';

type TextPropsPartial = React.PropsWithChildren<{
  alt?: boolean;
  bold?: boolean;
  className?: Argument;
  size?: TextSizes;
}>

export type TextProps = PolymorphicComponent<"p", TextPropsPartial, OnlyAs<TextTags>>;

export const Text: TextProps = ({
  alt,
  as: As = 'p',
  bold,
  className,
  size,
  ...props
}) => {
  const _cn = cn(className, {
    'fr-text--alt': size !== 'lead' && alt,
    'fr-text--heavy': bold,
    [`fr-text--${size}`]: size && size !== 'md',
  });
  return (
    <As className={_cn} {...props} />
  );
};
