import { Children, isValidElement, useId } from 'react';
import { Link } from '../Link';

export type FooterPartnersProps = {
  children?: React.ReactNode;
  main?: React.ReactNode;
  title?: React.ReactNode;
}

export const FooterPartners = ({ children, main, title = 'Nos partenaires' }: FooterPartnersProps) => {
  const id = useId();
  const others = Children.toArray(children).filter(isValidElement);
  if (!main && others.length === 0) return null;
  return (
    <div className="fr-footer__partners">
      <h2 className="fr-footer__partners-title">{title}</h2>
      <div className="fr-footer__partners-logos">
        {main && <div className="fr-footer__partners-main">{main}</div>}
        {others.length > 0 && (
          <div className="fr-footer__partners-sub">
            <ul>
              {others.map((partner) => <li key={`${id}-${partner.key}`}>{partner}</li>)}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export type FooterPartnerProps = {
  alt: string;
  href?: string;
  src: string;
}

export const FooterPartner = ({ alt, href, src }: FooterPartnerProps) => {
  const logo = <img className="fr-footer__logo" style={{ height: '5.625rem' }} src={src} alt={alt} />;
  return href ? <Link className="fr-footer__partners-link" href={href}>{logo}</Link> : logo;
}
