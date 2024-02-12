import cn from 'classnames';
import { useMenuSection } from 'react-aria';
import MenuOption from './menu-option';
import styles from './styles.module.scss';
import { Node, TreeState } from 'react-stately';

type SectionProps = {
  section: Node<unknown>;
  state: TreeState<unknown>;
}

export default function MenuGroup({ section, state }: SectionProps) {

  const { itemProps, headingProps, groupProps } = useMenuSection({
    heading: section.rendered,
    'aria-label': section['aria-label']
  });

  const { showDivider, className, css = {} } = section.props || {}

  const ElementType: React.ElementType = [...section.childNodes].find((item) => item.props.href) ? 'div' : 'ul';

  return (
    <li
      {...itemProps}
      className={cn(
        styles['listbox-section'],
        className,
        css.base,
        { [styles.divider]: showDivider }
      )}
    >
      {section.rendered && (
        <span
          {...headingProps}
          className={cn(
            "fr-text-mention--grey fr-text--sm fr-my-3v fr-px-1w",
            css.title
          )}
        >
          {section.rendered}
        </span>
      )}
      <ElementType {...groupProps} className={cn(styles['listbox-section-list'], css.list)}>
        {[...section.childNodes].map((node) => (
          <MenuOption
            key={node.key}
            item={node}
            state={state}
          />
        ))}
      </ElementType>
    </li>
  );
}