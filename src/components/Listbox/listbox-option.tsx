import cn from 'classnames';
import { useRef } from "react";
import { useOption } from "react-aria";
import styles from './styles.module.scss';
import { ListState, Node } from 'react-stately';

type OptionProps = {
  item: Node<unknown>;
  state: ListState<unknown>;
}

export default function ListboxOption({ item, state }: OptionProps) {
  // Get props for the option element
  const ref = useRef(null);
  const { optionProps, descriptionProps, labelProps, isFocused, isFocusVisible } = useOption({ key: item.key }, state, ref);

  const { description, startContent, endContent, color, showDivider, href, className } = item.props || {};
  const ElementType: React.ElementType = href ? 'a' : 'li';

  return (
    <ElementType
      {...optionProps}
      ref={ref}
      href={href}
      className={cn(
        styles['listbox-item'],
        className,
        {
          [styles[`listbox-item--${color}`]]: color,
          [styles.divider]: showDivider,
          "fr-enlarge-link": href,
          [styles.focused]: isFocused && isFocusVisible,

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