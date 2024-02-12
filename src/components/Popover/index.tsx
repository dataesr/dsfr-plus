import { useRef } from 'react';
import { DismissButton, Overlay, usePopover } from 'react-aria';
import type { AriaPopoverProps } from 'react-aria';
import type { OverlayTriggerState } from 'react-stately';
import styles from './styles.module.scss';

interface PopoverProps extends Omit<AriaPopoverProps, "popoverRef"> {
  children: React.ReactNode;
  state: OverlayTriggerState;
  popoverRef?: React.RefObject<HTMLDivElement>;
}

export default function Popover({ children, state, ...props }: PopoverProps) {
  const ref = useRef(null);
  const { isNonModal = false, popoverRef = ref } = props;
  const { popoverProps, underlayProps } = usePopover({
    ...props,
    popoverRef
  }, state);


  return (
    <Overlay>
      {!isNonModal && <div {...underlayProps} style={{ position: 'fixed', inset: 0 }} />}
      <div
        {...popoverProps}
        ref={popoverRef}
        className={styles.popover}
      >
        {!isNonModal && <DismissButton onDismiss={state.close} />}
        {children}
        <DismissButton onDismiss={state.close} />
      </div>
    </Overlay>
  );
}