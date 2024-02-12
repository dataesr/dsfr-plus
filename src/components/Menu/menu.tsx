import type { AriaMenuProps } from 'react-aria';
import cn from 'classnames';
import { useTreeState } from 'react-stately';
import { useMenu } from 'react-aria';
import { useRef } from 'react';
import MenuOption from './menu-option';
import MenuGroup from './menu-section';
import styles from './styles.module.scss';

export default function Menu<T extends object>(props: AriaMenuProps<T>) {
  // Create menu state based on the incoming props
  const state = useTreeState(props);

  // Get props for the menu element
  const ref = useRef(null);
  const { menuProps } = useMenu(props, state, ref);

  return (
    <ul {...menuProps} ref={ref} className={cn(styles.listbox)} style={{ minWidth: "200px" }}>
      {[...state.collection].map((item) => (
        item.type === 'section'
          ? <MenuGroup key={item.key} section={item} state={state} />
          : <MenuOption key={item.key} item={item} state={state} />
      ))}
    </ul>
  );
}