import cn, { Argument } from "classnames";
import { Merge } from "../../types/polymophic";

interface OperatorCss {
  "fr-responsive-img"?: Argument;
}

export type OperatorBaseProps = {
  alt: string;
  className?: Argument;
  css?: OperatorCss;
}

export type OperatorProps = Merge<React.ImgHTMLAttributes<HTMLImageElement>, OperatorBaseProps>;

export const Operator = ({ alt, className, css = {}, ...props }: OperatorProps) => {
  return (
    <div className={cn("fr-header__operator", className)}>
      <img alt={alt} className={cn("fr-responsive-img", css["fr-responsive-img"])} {...props} />
    </div>
  )
}