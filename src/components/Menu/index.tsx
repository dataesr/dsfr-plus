import { useRef } from 'react';
import { Argument } from 'classnames';
import type { ItemProps, MenuTriggerProps, SectionProps } from 'react-stately';
import { AriaMenuProps, mergeProps, useButton, useFocusRing, useMenuTrigger } from 'react-aria';
import { Item, Section, useMenuTriggerState } from 'react-stately';

// Reuse the Popover, and Button from your component library. See below for details.
import Popover from '../Popover';
import Menu from './menu';
import { DSFRColors } from '../../types/colors';
import { Button } from './button';

interface MenuButtonProps<T> extends AriaMenuProps<T>, MenuTriggerProps {
  label?: string;
  className?: Argument
  color?: DSFRColors | 'blue-france';
  icon?: string;
  iconPosition?: 'left' | 'right';
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'tertiary' | 'text';
  placement?: 'start' | 'end';
}

export function MenuButton<T extends object>(props: MenuButtonProps<T>) {
  // Create state based on the incoming props
  const { className, color, icon, iconPosition, size, variant, placement = 'start', ...rest } = props;
  const state = useMenuTriggerState(rest);

  // Get props for the button and menu elements
  const ref = useRef(null);
  const { menuTriggerProps, menuProps } = useMenuTrigger<T>({}, state, ref);
  const { isFocusVisible, focusProps } = useFocusRing();

  const { buttonProps } = useButton({ ...mergeProps(menuTriggerProps, focusProps) }, ref);

  return (
    <>
      <Button
        {...buttonProps}
        ref={ref}
        className={className}
        color={color}
        icon={icon}
        iconPosition={iconPosition}
        size={size}
        variant={variant}
        data-focus-visible={isFocusVisible}
      >
        {props.label}
      </Button>
      {state.isOpen &&
        (
          <Popover state={state} triggerRef={ref} placement={`bottom ${placement}`}>
            <Menu
              {...rest}
              {...menuProps}
            />
          </Popover>
        )}
    </>
  );
}



export type MenuItemProps = {
  showDivider?: boolean;
  className?: Argument;
  color?: DSFRColors;
  description?: React.ReactNode;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
}

export const MenuItem = Item as <T extends object>(
  props: MenuItemProps & ItemProps<T>,
) => JSX.Element;

export type MenuSectionCss = {
  base?: Argument;
  title?: Argument;
  list?: Argument;
}

export type MenuSectionProps = {
  showDivider?: boolean;
  className?: Argument;
  css?: MenuSectionCss;
}

export const MenuSection = Section as <T extends object>(
  props: MenuSectionProps & SectionProps<T>,
) => JSX.Element;
