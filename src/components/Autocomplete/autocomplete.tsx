import * as React from "react";
import cn, { Argument } from 'classnames';
import type { ComboBoxProps } from "@react-types/combobox";
import type { LoadingState } from "@react-types/shared";
import { Item, ItemProps, useAsyncList, useComboBoxState } from "react-stately";
import { useComboBox, useFilter } from "react-aria";

import Listbox from "../Listbox/listbox-wrapper";
import Popover from "../Popover";
import { DSFRColors } from "../../types/colors";

export { Item, Section } from "react-stately";

import { Spinner } from "./spinner";

interface AutocompleteProps<T> extends ComboBoxProps<T> {
  loadingState?: LoadingState;
  onSubmit?: (text: string) => void;
  size?: "md" | "lg";
  color?: DSFRColors;
  topContent?: React.ReactNode;
  bottomContent?: React.ReactNode;
}

export function Autocomplete<T extends object>(props: AutocompleteProps<T>) {
  const { contains } = useFilter({ sensitivity: "base" });
  const state = useComboBoxState({
    ...props,
    defaultFilter: contains,
    allowsCustomValue: true,
  });

  const inputRef = React.useRef(null);
  const listBoxRef = React.useRef(null);
  const popoverRef = React.useRef(null);
  const triggerRef = React.useRef(null);

  const { size = "md", color, onSubmit, topContent, bottomContent, ...rest } = props;

  const { inputProps, listBoxProps } = useComboBox(
    {
      ...rest,
      inputRef,
      listBoxRef,
      popoverRef,
      onKeyUp: (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          props.onSubmit?.(state.inputValue);
        }
      },
    },
    state,
  );


  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit?.(props?.inputValue || "");
      }}
      ref={triggerRef}
      className={cn("fr-search-bar", { "fr-search-bar--lg": (size === 'lg') })}
      role="search"
    >
      <input
        {...inputProps}
        type="search"
        ref={inputRef}
        className="fr-input"
      />
      <button type="submit" style={{ position: "relative" }} className={cn("fr-btn", { "fr-btn--lg": (size === 'lg') })}>
        <div style={{ position: "absolute", left: '-40px' }}>
          {props.loadingState === "loading" && (
            <Spinner />
          )}
        </div>
        Rechercher
      </button>
      {state.isOpen && (
        <Popover
          popoverRef={popoverRef}
          triggerRef={inputRef}
          state={state}
          isNonModal={false}
          placement="bottom start"
        >
          <Listbox
            {...listBoxProps}
            color={color}
            listBoxRef={listBoxRef}
            triggerRef={triggerRef}
            state={state}
            topContent={topContent}
            bottomContent={bottomContent}
          />
        </Popover>
      )}
    </form>
  );
}

export type AutocompleteItemProps = {
  href?: string;
  showDivider?: boolean;
  className?: Argument;
  color?: DSFRColors;
  description?: React.ReactNode;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
}

export const AutocompleteItem = Item as <T extends object>(
  props: AutocompleteItemProps & ItemProps<T>,
) => JSX.Element;

export { useAsyncList as useAutocompleteList };
