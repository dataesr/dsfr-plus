import { forwardRef } from 'react';

export type ModalContentProps = React.HTMLAttributes<HTMLDivElement>

export const ModalContent = forwardRef<HTMLDivElement, ModalContentProps>(({ ...props }, ref) => (
  <div
    ref={ref}
    {...props}
  />
));