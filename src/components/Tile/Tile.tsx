import cn, { Argument } from 'classnames';
import { Children } from 'react';
import { HeadingTags } from '../../types/headings';
import { Merge } from '../../types/polymophic';
import { Link } from '../Link';

export type TileBaseProps = {
  className?: Argument;
  description?: React.ReactNode;
  detail?: React.ReactNode;
  disabled?: boolean;
  download?: boolean;
  enlarge?: boolean;
  horizontal?: boolean;
  href?: string;
  newWindowLabel?: string;
  noIcon?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  pictogram?: string;
  size?: 'sm' | 'md';
  target?: React.HTMLAttributeAnchorTarget;
  title: string;
  titleAs?: HeadingTags;
  variant?: 'grey' | 'no-background' | 'no-border' | 'shadow';
  verticalFrom?: 'md' | 'lg';
}

export type TileProps = Merge<React.HTMLAttributes<HTMLDivElement>, TileBaseProps>;

export const Tile = ({
  children,
  className,
  description,
  detail,
  disabled,
  download,
  enlarge = true,
  horizontal,
  href,
  newWindowLabel = 'nouvelle fenêtre',
  noIcon,
  onClick,
  pictogram,
  size,
  target,
  title,
  titleAs: TitleAs = 'h3',
  variant,
  verticalFrom,
  ...props
}: TileProps) => {
  const isNewWindow = target === '_blank';

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
      className={cn('fr-tile', {
        'fr-tile--sm': size === 'sm',
        'fr-tile--horizontal': horizontal,
        [`fr-tile--vertical@${verticalFrom}`]: verticalFrom,
        'fr-tile--download': download,
        [`fr-tile--${variant}`]: variant,
        'fr-tile--no-icon': noIcon,
        'fr-enlarge-link': enlarge && href && !onClick,
        'fr-enlarge-button': enlarge && onClick,
      }, className)}
      {...props}
    >
      <div className="fr-tile__body">
        <div className="fr-tile__content">
          <TitleAs className="fr-tile__title">{action}</TitleAs>
          {description && <p className="fr-tile__desc">{description}</p>}
          {detail && <p className="fr-tile__detail">{detail}</p>}
          {Children.toArray(children).length > 0 && <div className="fr-tile__start">{children}</div>}
        </div>
      </div>
      {pictogram && (
        <div className="fr-tile__header">
          <div className="fr-tile__pictogram">
            <svg aria-hidden="true" className="fr-artwork" height="80px" viewBox="0 0 80 80" width="80px">
              <use className="fr-artwork-decorative" href={`${pictogram}#artwork-decorative`} />
              <use className="fr-artwork-minor" href={`${pictogram}#artwork-minor`} />
              <use className="fr-artwork-major" href={`${pictogram}#artwork-major`} />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};


<div class="fr-tile fr-enlarge-link" id="tile-3">
  <div class="fr-tile__body">
    <div class="fr-tile__content">
      <h3 class="fr-tile__title">
        <a href="[URL - à modifier]">Intitulé de la tuile</a>
      </h3>
      <p class="fr-tile__detail">Détail (optionnel)</p>
      <div class="fr-tile__start">
        <p class="fr-tag">Libellé tag</p>
      </div>
    </div>
  </div>
  <div class="fr-tile__header">
    <div class="fr-tile__pictogram">
      <svg aria-hidden="true" class="fr-artwork" viewBox="0 0 80 80" width="80px" height="80px">
        <use class="fr-artwork-decorative" href="/dist/artwork/pictograms/buildings/city-hall.svg#artwork-decorative"></use>
        <use class="fr-artwork-minor" href="/dist/artwork/pictograms/buildings/city-hall.svg#artwork-minor"></use>
        <use class="fr-artwork-major" href="/dist/artwork/pictograms/buildings/city-hall.svg#artwork-major"></use>
      </svg>
    </div>
  </div>
</div>