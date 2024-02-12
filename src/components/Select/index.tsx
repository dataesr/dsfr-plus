import { useRef } from 'react';
import cn from 'classnames';
import { Item, ItemProps, useSelectState } from 'react-stately';
import { AriaSelectProps, HiddenSelect, mergeProps, useButton, useFocusRing, useSelect } from 'react-aria';
import { Argument } from 'classnames';

import { DSFRColors } from '../../types/colors';
import Listbox from "../Listbox/listbox";
import Popover from '../Popover';
import styles from './styles.module.scss';

export function Select<T extends object>(props: AriaSelectProps<T> & { buttonLabel?: string }) {
  // Create state based on the incoming props
  const { buttonLabel, ...rest } = props;
  const state = useSelectState(rest);

  // Get props for child elements from useSelect
  const ref = useRef(null);
  const {
    labelProps,
    triggerProps,
    valueProps,
    menuProps
  } = useSelect(rest, state, ref);
  const { isFocusVisible, focusProps } = useFocusRing();
  const { buttonProps } = useButton({ ...mergeProps(triggerProps, focusProps) }, ref);

  return (
    <div className="fr-select-group">
      {props.label && <label {...labelProps} className="fr-label">{props.label}</label>}
      <button
        {...buttonProps}
        ref={ref}
        className={cn("fr-select", styles["fr-select-btn"])}
        data-focus-visible={isFocusVisible}
      >
        <span {...valueProps}>
          {state.selectedItem
            ? state.selectedItem.rendered
            : buttonLabel}
        </span>
      </button>
      <HiddenSelect
        isDisabled={props.isDisabled}
        state={state}
        triggerRef={ref}
        label={props.label}
        name={props.name}
      />
      {state.isOpen &&
        (
          <Popover state={state} triggerRef={ref} placement="bottom start">
            <Listbox
              {...menuProps}
              state={state}
              triggerRef={ref}
            />
          </Popover>
        )}
    </div>
  );
}

export type SelectOptionProps = {
  showDivider?: boolean;
  className?: Argument;
  color?: DSFRColors;
  description?: React.ReactNode;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
}

export const SelectOption = Item as <T extends object>(
  props: SelectOptionProps & ItemProps<T>,
) => JSX.Element;

