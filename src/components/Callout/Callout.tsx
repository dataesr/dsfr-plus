import cn, { Argument } from 'classnames';
import { ColorFamily } from '../../types/colors';
import { HeadingTags } from '../../types/headings';
import { Merge } from '../../types/polymophic';

export type CalloutBaseProps = {
  action?: React.ReactNode;
  className?: Argument;
  color?: ColorFamily;
  icon?: string;
  title?: React.ReactNode;
  titleAs?: HeadingTags | 'p';
}

export type CalloutProps = Merge<React.HTMLAttributes<HTMLDivElement>, CalloutBaseProps>;

export const Callout = ({
  action,
  children,
  className,
  color,
  icon,
  title,
  titleAs: TitleAs = 'h3',
  ...props
}: CalloutProps) => (
  <div className={cn('fr-callout', { [`fr-icon-${icon}`]: icon, [`fr-callout--${color}`]: color }, className)} {...props}>
    {title && <TitleAs className="fr-callout__title">{title}</TitleAs>}
    <p className="fr-callout__text">{children}</p>
    {action}
  </div>
);
