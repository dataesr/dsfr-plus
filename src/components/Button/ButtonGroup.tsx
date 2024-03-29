import cn, { Argument } from 'classnames';
import { getChildrenOfType } from '../../utils/children';
import { isValidElement, useId } from 'react';
import { Button } from './Button';
import { Merge } from '../../types/polymophic';

type ButtonGroupBaseProps = {
  align?: 'left' | 'right' | 'center';
  children?: React.ReactNode;
  className?: Argument;
  isEquisized?: boolean;
  isReversed?: boolean;
  isInlineFrom?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  size?: 'sm' | 'md' | 'lg';
}

export type ButtonGroupProps = Merge<React.HTMLAttributes<HTMLUListElement>, ButtonGroupBaseProps>;

export const ButtonGroup = ({
  align = 'left',
  children,
  className,
  isEquisized = false,
  isInlineFrom,
  isReversed = false,
  size = 'md',
  ...props
}: ButtonGroupProps) => {
  const id = useId();
  const childIconReducer = (acc: boolean, cur: React.ReactNode) => {
    if (acc) return acc;
    return isValidElement(cur) && cur.props.icon && cur.props.children
  };
  const hasIcon = getChildrenOfType(children, Button).reduce(childIconReducer, false);
  const iconPosition = getChildrenOfType(children, Button).map((child: React.ReactNode) => isValidElement(child) && child.props.iconPosition)?.[0];
  const _classes = cn('fr-btns-group', {
    [`fr-btns-group--${size}`]: (size !== 'md'),
    [`fr-btns-group--${align}`]: (align !== 'left'),
    [`fr-btns-group--icon-${iconPosition}`]: hasIcon,
    'fr-btns-group--inline': (isInlineFrom === 'xs'),
    [`fr-btns-group--inline-${isInlineFrom}`]: (isInlineFrom && isInlineFrom !== 'xs'),
    'fr-btns-group--inline-reverse': isReversed,
    'fr-btns-group--equisized': isEquisized,
  }, className);
  return (
    <ul className={_classes} {...props}>
      {getChildrenOfType(children, Button).map((child, index) => <li key={`${id}-${index}`}>{child}</li>)}
    </ul>
  );
};