import cn, { Argument } from 'classnames';
import { Children } from 'react';
import { HeadingTags } from '../../types/headings';
import { Merge } from '../../types/polymophic';
import { Link } from '../Link';

export type CardBaseProps = {
  actions?: React.ReactNode;
  className?: Argument;
  description?: React.ReactNode;
  detailEnd?: React.ReactNode;
  detailEndIcon?: string;
  detailStart?: React.ReactNode;
  detailStartIcon?: string;
  disabled?: boolean;
  download?: boolean;
  enlarge?: boolean;
  horizontal?: boolean | 'half' | 'tier';
  href?: string;
  image?: string;
  imageAlt?: string;
  imageBadge?: React.ReactNode;
  imageRatio?: '32x9' | '3x2' | '4x3' | '1x1' | '3x4' | '2x3';
  newWindowLabel?: string;
  noIcon?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  size?: 'sm' | 'md' | 'lg';
  target?: React.HTMLAttributeAnchorTarget;
  title: string;
  titleAs?: HeadingTags;
  variant?: 'grey' | 'no-background' | 'no-border' | 'shadow';
}

export type CardProps = Merge<React.HTMLAttributes<HTMLDivElement>, CardBaseProps>;

const Detail = ({ children, icon }: { children: React.ReactNode; icon?: string }) => (
  <p className={cn('fr-card__detail', { [`fr-icon-${icon}`]: icon })}>{children}</p>
);

export const Card = ({
  actions,
  children,
  className,
  description,
  detailEnd,
  detailEndIcon,
  detailStart,
  detailStartIcon,
  disabled,
  download,
  enlarge = true,
  horizontal,
  href,
  image,
  imageAlt = '',
  imageBadge,
  imageRatio,
  newWindowLabel = 'nouvelle fenêtre',
  noIcon,
  onClick,
  size,
  target,
  title,
  titleAs: TitleAs = 'h3',
  variant,
  ...props
}: CardProps) => {
  const isNewWindow = target === '_blank';
  const isEnlarged = enlarge && !actions;
  const hasStart = Children.toArray(children).length > 0 || detailStart;

  let action: React.ReactNode = title;
  if (onClick) {
    action = <button disabled={disabled} onClick={onClick} type="button">{title}</button>;
  } else if (href && disabled) {
    // eslint-disable-next-line jsx-a11y/anchor-is-valid -- DSFR disabled link: an anchor without href, announced as a disabled link
    action = <a aria-disabled="true" role="link">{title}</a>;
  } else if (href) {
    action = (
      <Link
        download={download || undefined}
        href={href}
        rel={isNewWindow ? 'noopener external' : undefined}
        target={target}
        title={isNewWindow ? `${title} - ${newWindowLabel}` : undefined}
      >
        {title}
      </Link>
    );
  }

  return (
    <div
      className={cn('fr-card', {
        [`fr-card--${size}`]: size && size !== 'md',
        'fr-card--horizontal': horizontal === true,
        [`fr-card--horizontal-${horizontal}`]: typeof horizontal === 'string',
        'fr-card--download': download,
        [`fr-card--${variant}`]: variant,
        'fr-card--no-icon': noIcon,
        'fr-enlarge-link': isEnlarged && href && !onClick,
        'fr-enlarge-button': isEnlarged && onClick,
      }, className)}
      {...props}
    >
      <div className="fr-card__body">
        <div className="fr-card__content">
          <TitleAs className="fr-card__title">{action}</TitleAs>
          {description && <p className="fr-card__desc">{description}</p>}
          {hasStart && (
            <div className="fr-card__start">
              {children}
              {detailStart && <Detail icon={detailStartIcon}>{detailStart}</Detail>}
            </div>
          )}
          {detailEnd && (
            <div className="fr-card__end">
              <Detail icon={detailEndIcon}>{detailEnd}</Detail>
            </div>
          )}
        </div>
        {actions && <div className="fr-card__footer">{actions}</div>}
      </div>
      {image && (
        <div className="fr-card__header">
          <div className="fr-card__img">
            <img alt={imageAlt} className={cn('fr-responsive-img', { [`fr-ratio-${imageRatio}`]: imageRatio })} src={image} />
          </div>
          {imageBadge}
        </div>
      )}
    </div>
  );
};
