import { forwardRef, useId } from 'react';
import cn, { Argument } from 'classnames';
import { Merge } from '../../types/polymophic';

type RadioCss = {
  "fr-label"?: Argument;
  "fr-hint-text"?: Argument;
  "fr-radio-rich__img"?: Argument;
}

type RadioBaseProps = {
  className?: Argument,
  css?: RadioCss;
  hint?: string,
  id?: string,
  label?: string,
  imageComponent?: React.ReactNode,
  checked?: boolean,
}

export type RadioProps = Merge<React.HTMLAttributes<HTMLInputElement>, RadioBaseProps>;

export const Radio = forwardRef<HTMLInputElement, RadioProps>(({
  checked,
  className,
  css = {},
  hint,
  id,
  imageComponent: ImageComponent,
  label,
  ...props
}, ref) => {
  const _id = id || useId();

  return (
    <div className={cn('fr-radio-group', { 'fr-radio-rich': ImageComponent }, className)}>
      <input
        checked={checked}
        id={_id}
        ref={ref}
        type="radio"
        {...props}
      />
      <label
        className={cn("fr-label")}
        htmlFor={_id}
      >
        {label}
        {hint && <p className={cn("fr-hint-text")}>{hint}</p>}
      </label>
      {ImageComponent && (
        <div className={cn("fr-radio-rich__img")}>
          {ImageComponent}
        </div>
      )}
    </div>
  );
});