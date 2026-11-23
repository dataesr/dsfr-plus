import { Fragment, cloneElement, isValidElement } from 'react';
import cn, { Argument } from 'classnames';
import { filterChildrenOfTypes, getChildrenOfType } from '../../utils/children';
import { Merge } from '../../types/polymophic';
import { Link } from '../Link';
import { FooterTop } from './FooterTop';
import { FooterPartners } from './FooterPartners';

// Mandatory links of the State ecosystem: the DSFR fixes both the list and its order.
const STATE_SITES = ['info.gouv.fr', 'service-public.gouv.fr', 'legifrance.gouv.fr', 'data.gouv.fr'];

export type FooterOperator = {
  alt: string;
  src: string;
}

export type FooterBaseProps = {
  brand: string;
  className?: Argument;
  description?: React.ReactNode;
  homeHref?: string;
  homeTitle?: string;
  license?: React.ReactNode;
  newWindowLabel?: string;
  operator?: FooterOperator;
}

export type FooterProps = Merge<React.HTMLAttributes<HTMLElement>, FooterBaseProps>;

export const Footer = ({
  brand,
  children,
  className,
  description,
  homeHref = '/',
  homeTitle,
  license,
  newWindowLabel = 'nouvelle fenêtre',
  operator,
  ...props
}: FooterProps) => {
  const lines = brand.split('|').map((line) => line.trim());
  const bottomLinks = filterChildrenOfTypes(children, [FooterTop, FooterPartners]);
  const homeLinkTitle = homeTitle || `Retour à l’accueil du site - ${operator ? `${operator.alt} - ` : ''}${lines.join(' ')}`;
  const logo = (
    <p className="fr-logo">
      {lines.map((line, i) => <Fragment key={i}>{i > 0 && <br />}{line}</Fragment>)}
    </p>
  );
  return (
    <footer className={cn("fr-footer", className)} role="contentinfo" {...props}>
      {getChildrenOfType(children, FooterTop)}
      <div className="fr-container">
        <div className="fr-footer__body">
          <div className="fr-footer__brand fr-enlarge-link">
            {operator ? (
              <>
                {logo}
                <Link className="fr-footer__brand-link" href={homeHref} title={homeLinkTitle}>
                  <img className="fr-footer__logo" style={{ maxWidth: '10rem' }} src={operator.src} alt={operator.alt} />
                </Link>
              </>
            ) : (
              <Link href={homeHref} title={homeLinkTitle}>{logo}</Link>
            )}
          </div>
          <div className="fr-footer__content">
            {description && <p className="fr-footer__content-desc">{description}</p>}
            <ul className="fr-footer__content-list">
              {STATE_SITES.map((site) => (
                <li className="fr-footer__content-item" key={site}>
                  <Link
                    className="fr-footer__content-link"
                    href={`https://${site}`}
                    rel="noopener external"
                    target="_blank"
                    title={`${site} - ${newWindowLabel}`}
                  >
                    {site}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {getChildrenOfType(children, FooterPartners)}
        <div className="fr-footer__bottom">
          {bottomLinks.length > 0 && (
            <ul className="fr-footer__bottom-list">
              {bottomLinks.map((child) => (
                isValidElement<{ className?: Argument }>(child) && (
                  <li className="fr-footer__bottom-item" key={child.key}>
                    {' '}
                    {cloneElement(child, { className: cn("fr-footer__bottom-link", child.props.className) })}
                    {' '}
                  </li>
                )
              ))}
            </ul>
          )}
          <div className="fr-footer__bottom-copy">
            <p>
              {license || (
                <>
                  Sauf mention explicite de propriété intellectuelle détenue par des tiers, les contenus de ce site sont proposés sous{' '}
                  <Link
                    href="https://github.com/etalab/licence-ouverte/blob/master/LO.md"
                    rel="noopener external"
                    target="_blank"
                    title={`Licence Ouverte 2.0 par Etalab - ${newWindowLabel}`}
                  >
                    Licence Ouverte 2.0 par Etalab
                  </Link>
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
