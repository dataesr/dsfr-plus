import { useId, useRef } from 'react';
import cn from 'classnames';
import { Item, ItemProps, useSelectState } from 'react-stately';
import { AriaSelectProps, HiddenSelect, mergeProps, useButton, useFocusRing, useSelect } from 'react-aria';
import { Argument } from 'classnames';

import { useDSFRConfig } from '../../hooks/useDSFRConfig';
import { DSFRColors } from '../../types/colors';
import Listbox from "../Listbox/listbox-wrapper";
import Popover from '../Popover';
import styles from './styles.module.scss';

type SelectProps<T> = AriaSelectProps<T> & {
  buttonLabel?: string;
  message?: React.ReactNode;
  messageType?: 'error' | 'valid';
}

export function Select<T extends object>(props: SelectProps<T>) {
  // Create state based on the incoming props
  const { buttonLabel, message, messageType, ...rest } = props;
  const { extendRequiredFieldsLabelsWith } = useDSFRConfig();
  const messagesId = useId();
  const state = useSelectState(rest);

  // Get props for child elements from useSelect
  const ref = useRef<HTMLButtonElement>(null);
  const {
    labelProps,
    triggerProps,
    valueProps,
    menuProps
  } = useSelect(rest, state, ref);
  const { isFocusVisible, focusProps } = useFocusRing();
  const { buttonProps } = useButton({ ...mergeProps(triggerProps, focusProps) }, ref);

  return (
    <div className={cn("fr-select-group", { [`fr-select-group--${messageType}`]: messageType })}>
      {props.label && (
        <label {...labelProps} className="fr-label">
          {props.label}
          {props.isRequired && extendRequiredFieldsLabelsWith}
        </label>
      )}
      <button
        {...buttonProps}
        aria-describedby={messagesId}
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
      <div className="fr-messages-group" id={messagesId} aria-live="polite">
        {messageType && <p className={`fr-message fr-message--${messageType}`}>{message}</p>}
      </div>
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
) => React.JSX.Element;

