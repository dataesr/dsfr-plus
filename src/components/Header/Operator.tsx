import cn, { Argument } from "classnames";
import { Merge } from "../../types/polymophic";
import { Link } from "../Link";

interface OperatorCss {
  "fr-responsive-img"?: Argument;
}

export type OperatorBaseProps = {
  alt: string;
  className?: Argument;
  css?: OperatorCss;
  href?: string;
}

export type OperatorProps = Merge<React.ImgHTMLAttributes<HTMLImageElement>, OperatorBaseProps>;

export const Operator = ({ alt, className, css = {}, href, ...props }: OperatorProps) => {
  const logo = <img alt={alt} className={cn("fr-responsive-img", css["fr-responsive-img"])} {...props} />;
  return (
    <div className={cn("fr-header__operator", className)}>
      {href ? <Link href={href} title={`Accueil - ${alt}`}>{logo}</Link> : logo}
    </div>
  )
}