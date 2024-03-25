import cn, { Argument } from 'classnames';
import { forwardRef } from 'react';
import { OnlyAs, PolyRefFunction } from 'react-polymorphed';

import { Link } from '../Link';
import { ColorFamily } from '../../types/colors';
import { Merge } from '../../types/polymophic';


import './styles.scss';

const polyRef = forwardRef as PolyRefFunction;

const getTagClasses = ({ className, color, icon, iconPosition, size }: TagProps) => cn('fr-tag', className, {
  'fr-tag--sm': size === "sm",
  [`fr-icon-${icon}`]: icon,
  [`fr-tag--icon-${iconPosition}`]: icon && iconPosition,
  [`fr-tag--${color}`]: color
});

export type TagProps = {
  'aria-label'?: string;
  className?: Argument;
  color?: ColorFamily;
  icon?: string;
  iconPosition?: "left" | "right";
  size?: "md" | "sm";
}

export type SelectableTagProps = Merge<TagProps, { selected: boolean; }>;

export const Tag = polyRef<"p", TagProps, OnlyAs<"button" | "p" | "a">>(({
  as,
  className,
  color,
  icon,
  iconPosition = 'right',
  size,
  ...props
}, ref) => {
  const _classes = getTagClasses({ className, color, icon, iconPosition, size });
  const Component = (as === "a") ? Link : as ? as : 'p';

  return (
    <Component
      className={_classes}
      ref={ref}
      {...props}
    />

  );
});

export const SelectableTag = polyRef<"button", SelectableTagProps, OnlyAs<"button" | "a">>(({
  as,
  className,
  color,
  icon,
  iconPosition = 'left',
  selected,
  size,
  ...props
}, ref) => {
  const _classes = getTagClasses({ className, color, icon, iconPosition, size });
  const Component = (as === "a") ? Link : as ? as : 'button';

  return (
    <Component
      aria-pressed={selected}
      className={_classes}
      data-fr-js-disable="true"
      ref={ref}
      {...props}
    />

  );
});

export const DismissibleTag = polyRef<"button", TagProps, OnlyAs<"button" | "a">>(({
  as,
  className,
  color,
  icon,
  iconPosition = 'left',
  size,
  ...props
}, ref) => {
  const _classes = cn('fr-tag--dismiss', 'custom-dismissible-tag', getTagClasses({ className, color, icon, iconPosition, size }));
  const Component = (as === "a") ? Link : as ? as : 'button';

  return (
    <Component
      className={_classes}
      ref={ref}
      {...props}
    />
  );
});
