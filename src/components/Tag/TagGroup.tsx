import classNames from 'classnames';
import { useId } from 'react';

import { DismissibleTag, SelectableTag, Tag } from './Tag';
import { getChildrenOfTypes } from '../../utils/children';
import { forwardProps } from '../../utils/props';

export interface TagGroupProps {
  children: React.ReactNode;
  className?: string;
}

export const TagGroup: React.FC<TagGroupProps> = ({
  children,
  className,
  ...props
}) => {
  const id = useId();
  const _classes = classNames('fr-tags-group', className);
  return (
    <ul className={_classes} {...forwardProps(props)}>
      {getChildrenOfTypes(children, [DismissibleTag, SelectableTag, Tag]).map((child, index) => <li key={`${id}-${index}`}>{child}</li>)}
    </ul>
  );
};
