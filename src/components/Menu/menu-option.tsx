import cn from 'classnames';
import { useRef } from "react";
import { useMenuItem } from "react-aria";
import styles from './styles.module.scss';
import { Node, TreeState } from 'react-stately';
import React from 'react';

type OptionProps = {
  item: Node<unknown>;
  state: TreeState<unknown>;
}

export default function MenuOption({ item, state }: OptionProps) {
  // Get props for the option element
  const ref = useRef(null);
  const { menuItemProps, labelProps, descriptionProps, isFocused } = useMenuItem({ key: item.key }, state, ref);

  const { description, startContent, endContent, color, showDivider, href, className } = item.props || {};
  const ElementType: React.ElementType = href ? 'a' : 'li';

  return (
    <ElementType
      {...menuItemProps}
      ref={ref}
      href={href}
      className={cn(
        styles['listbox-item'],
        className,
        {
          [styles[`listbox-item--${color}`]]: color,
          [styles.divider]: showDivider,
          "fr-enlarge-link": href,
          [styles.focused]: isFocused,

        }
      )}
    >
      {startContent && startContent}
      <span className={styles.content}>
        <span {...labelProps}>{item.rendered}</span>
        {description && <span {...descriptionProps} className={styles.description}>{description}</span>}
      </span>
      {endContent && endContent}
    </ElementType>
  );
}