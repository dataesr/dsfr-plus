import type { AriaListBoxOptions } from 'react-aria';
import cn from 'classnames';
import { useFocusRing, useListBox } from 'react-aria';
import React, { useRef } from 'react';
import ListboxOption from './listbox-option';
import styles from './styles.module.scss'
import { Argument } from 'classnames';
import type { DSFRColors } from '../../types/colors';
import { ListState } from 'react-stately';
import ListboxGroup from './listbox-section';

export type ListboxCss = {
  base?: Argument;
  list?: Argument;
  top?: Argument;
  bottom?: Argument;
}

export type ListboxProps<T> = {
  className?: Argument;
  css?: ListboxCss;
  color?: DSFRColors;
  topContent?: React.ReactNode;
  bottomContent?: React.ReactNode;
  state: ListState<T>;
  triggerRef?: React.RefObject<HTMLButtonElement>;
  listBoxRef?: React.MutableRefObject<null>;
}



export default function Listbox<T extends object>(props: AriaListBoxOptions<T> & ListboxProps<T>) {
  const ref = useRef(null);
  const { listBoxRef = ref, state, className, css = {}, color, topContent, bottomContent, ...rest } = props;
  const { listBoxProps } = useListBox(rest, state, listBoxRef);
  const { isFocusVisible } = useFocusRing();

  const ElementType: React.ElementType = [...state.collection].find((item) => item.props.href) ? 'div' : 'ul';

  return (
    <div className={cn(styles.listbox, className, css.base)} style={{ minWidth: props?.triggerRef?.current?.offsetWidth || "auto" }}>
      <span className={cn(styles["listbox-top"], css.top)}>
        {topContent && topContent}
      </span>
      <ElementType
        className={cn(styles["listbox-content"], css.list, { [styles[`listbox--${color}`]]: color, })}
        ref={listBoxRef}
        data-focus-visible={isFocusVisible}
        {...listBoxProps}
      >
        {[...state.collection].map((item) => {
          return (item.type === 'section')
            ? <ListboxGroup {...item.props} key={item.key} section={item} state={state} />
            : <ListboxOption {...item.props} key={item.key} item={item} state={state} />
        })}
      </ElementType>
      <span className={cn(styles["listbox-bottom"], css.bottom)}>
        {bottomContent && bottomContent}
      </span>
    </div>
  );
}