import type { AriaListBoxProps } from 'react-aria';
import { Item, ItemProps, Section, SectionProps, useListState } from 'react-stately';
import { Argument } from 'classnames';
import type { DSFRColors } from '../../types/colors';
import ListBox from './listbox-wrapper';

export type ListboxCss = {
  base?: Argument;
  list?: Argument;
}

export type ListboxProps = {
  className?: Argument;
  css?: ListboxCss;
  color?: DSFRColors;
  topContent?: React.ReactNode;
  bottomContent?: React.ReactNode;
}

export function Listbox<T extends object>(props: AriaListBoxProps<T> & ListboxProps) {
  // Create state based on the incoming props
  const state = useListState(props);

  return (
    <ListBox {...props} state={state} />
  );
}

export type ListboxItemProps = {
  showDivider?: boolean;
  className?: Argument;
  color?: DSFRColors;
  description?: React.ReactNode;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
}

export const ListboxItem = Item as <T extends object>(
  props: ListboxItemProps & ItemProps<T>,
) => JSX.Element;

export type ListboxSectionCss = {
  base?: Argument;
  title?: Argument;
  list?: Argument;
}

export type ListboxSectionProps = {
  showDivider?: boolean;
  className?: Argument;
  css?: ListboxSectionCss;
}

export const ListboxSection = Section as <T extends object>(
  props: ListboxSectionProps & SectionProps<T>,
) => JSX.Element;



