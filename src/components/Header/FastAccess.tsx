import cn, { Argument } from 'classnames';
import { useId } from "react";
import { filterChildrenOfTypes, getChildrenOfType } from "../../utils/children";
import { Button } from '../Button';
import { Merge } from '../../types/polymophic';

interface FastAccessCss {
  "fr-btns-group"?: Argument;
}

export type FastAccessBaseProps = {
  className?: Argument;
  css?: FastAccessCss
}

export type FastAccessProps = Merge<React.HTMLAttributes<HTMLDivElement>, FastAccessBaseProps>;

export const FastAccess = ({ children, className, css = {}, ...props }: FastAccessProps) => {
  const _id = useId()
  const id = props.id || _id
  const buttons = getChildrenOfType(children, Button)
  return (
    <div className={cn("fr-header__tools-links", className)} {...props}>
      {buttons.length === 1 && (
        <div className={cn("fr-btns-group", css["fr-btns-group"])}>{buttons}</div>
      )}
      {buttons.length > 1 && (
        <ul className={cn("fr-btns-group", css["fr-btns-group"])}>
          {buttons.map((child: React.ReactNode, i) => (<li key={`${id}-${i}`}>{child}</li>))}
        </ul>
      )}
      {filterChildrenOfTypes(children, [Button])}
    </div>
  )
}