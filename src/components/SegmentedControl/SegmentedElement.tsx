import { forwardRef } from 'react';
import cn, { Argument } from 'classnames';
import { Merge } from '../../types/polymophic';

type SegmentedElementBaseProps = {
  checked?: boolean,
  className?: Argument,
  icon?: string,
  id?: string,
  label: string,
  name?: string,
  value: string,
}

export type SegmentedElementProps = Merge<React.HTMLAttributes<HTMLInputElement>, SegmentedElementBaseProps>;

export const SegmentedElement = forwardRef<HTMLInputElement, SegmentedElementProps>(({
  className,
  icon,
  id,
  label,
  name,
  ...props
}, ref) => {

  return (
    <div className={cn('fr-segmented__element')} style={{ width: '100%' }}>
      <input
        id={id}
        name={name}
        ref={ref}
        type="radio"
        {...props}
      />
      <label
        className={cn("fr-label", icon)}
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
});