import React, { useId } from 'react';
import classNames from 'classnames';
import { getChildrenOfType } from '../../utils/children';
import { Merge } from '../../types/polymophic';
import { Radio, RadioProps } from './Radio';

type RadioGroupBaseProps = {
  className?: string,
  hint?: string,
  isInline?: boolean,
  label?: string,
  message?: string,
  name: string,
  onChangeValue?: (value: string) => void,
  value?: string,
}

export type RadioGroupProps = Merge<React.HTMLAttributes<HTMLFieldSetElement>, RadioGroupBaseProps>;

export const RadioGroup: React.FC<RadioGroupProps> = ({
  children,
  className,
  hint,
  isInline,
  label,
  message,
  name,
  onChangeValue,
  value,
  ...props
}) => {
  const id = useId();
  const _classes = classNames('fr-fieldset', className);
  return (
    <fieldset
      aria-labelledby="radio-hint-legend radio-hint-messages"
      className={_classes}
      id={id}
      {...props}
    >
      {
        label && (
          <legend
            className="fr-fieldset__legend--regular fr-fieldset__legend"
            id="radio-hint-legend"
          >
            {label}
            {hint && <span className="fr-hint-text">{hint}</span>}
          </legend>
        )
      }
      {
        getChildrenOfType(children, Radio).map((child) => {
          if (React.isValidElement(child)) {
            return (
              <div className={classNames("fr-fieldset__element", { "fr-fieldset__element--inline": isInline })}>
                {
                  React.cloneElement(child as React.ReactElement<RadioProps>, {
                    name,
                    onChange: () => {
                      onChangeValue?.(child.props.value);
                      child.props.onChange();
                    },
                  })
                }
              </div>
            );
          }
        })
      }
      {
        message && (
          <div
            aria-live="assertive"
            className="fr-messages-group"
            id="radio-hint-messages"
          >
            {message}
          </div>
        )
      }
    </fieldset>
  );
};
