import React, { useId } from 'react';
import classNames from 'classnames';
import { getChildrenOfType } from '../../utils/children';
import { Merge } from '../../types/polymophic';
import { SegmentedElement, SegmentedElementProps } from './SegmentedElement';

type SegmentedControlBaseProps = {
  className?: string,
  isVertical?: boolean,
  label?: string,
  legendInline?: boolean,
  name: string,
  onChangeValue?: (value: string) => void,
  value?: string,
};

export type SegmentedControlProps = Merge<React.HTMLAttributes<HTMLFieldSetElement>, SegmentedControlBaseProps>;

export const SegmentedControl: React.FC<SegmentedControlProps> = ({
  children,
  className,
  isVertical,
  label,
  legendInline,
  name,
  onChangeValue,
  value,
  ...props
}) => {
  const id = useId();
  const _classes = classNames('fr-segmented', className);
  const attributes: React.HTMLAttributes<HTMLFieldSetElement> = {};
  if (isVertical) {
    attributes.style = { display: 'block' };
  }
  return (
    <fieldset
      className={_classes}
      id={id}
      {...attributes}
      {...props}
    >
      {
        label && (
          <legend className={classNames("fr-segmented__legend", { 'fr-segmented__legend--inline': legendInline })}>
            {label}
          </legend>
        )
      }
      {
        getChildrenOfType(children, SegmentedElement).map((child, index) => {
          if (React.isValidElement(child)) {
            return (
              <div className={classNames("fr-segmented__elements")} key={`segmented-element-${index}`}>
                {
                  React.cloneElement(child as React.ReactElement<SegmentedElementProps>, {
                    name,
                    id: `${name}-${index}`,
                    onChange: () => {
                      onChangeValue?.(child.props.value);
                      child?.props?.onChange?.();
                    },
                  })
                }
              </div>
            );
          }
        })
      }
    </fieldset>
  );
};
