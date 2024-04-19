import { forwardRef, useId } from 'react';
import cn, { Argument } from 'classnames';
import { Merge } from '../../types/polymophic';

type RadioCss = {
  "fr-label"?: Argument;
  "fr-hint-text"?: Argument;
  "fr-radio-rich__img"?: Argument;
}

type RadioBaseProps = {
  checked?: boolean,
  className?: Argument,
  css?: RadioCss;
  hint?: string,
  id?: string,
  imageComponent?: React.ReactNode,
  label?: string,
  name: string,
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
  name,
  ...props
}, ref) => {
  const _id = id || useId();

  return (
    <div className={cn('fr-radio-group', { 'fr-radio-rich': ImageComponent }, className)}>
      <input
        checked={checked}
        id={_id}
        name={name}
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