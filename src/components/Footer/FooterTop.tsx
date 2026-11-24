import { Children, cloneElement, isValidElement, useId } from 'react';
import cn, { Argument } from 'classnames';

export type FooterTopProps = {
  children: React.ReactNode;
}

export const FooterTop = ({ children }: FooterTopProps) => {
  if (Children.toArray(children).length === 0) return null;
  return (
    <div className="fr-footer__top">
      <div className="fr-container">
        <div className="fr-grid-row fr-grid-row--start fr-grid-row--gutters">
          {children}
        </div>
      </div>
    </div>
  )
}

export type FooterTopCategoryProps = {
  children: React.ReactNode;
  title: React.ReactNode;
}

export const FooterTopCategory = ({ children, title }: FooterTopCategoryProps) => {
  const id = useId();
  if (Children.toArray(children).length === 0) return null;
  return (
    <div className="fr-col-12 fr-col-sm-3 fr-col-md-2">
      <h2 className="fr-footer__top-cat">{title}</h2>
      <ul className="fr-footer__top-list">
        {Children.toArray(children).map((child) => (
          isValidElement<{ className?: Argument }>(child) && (
            <li key={`${id}-${child.key}`}>
              {cloneElement(child, { className: cn("fr-footer__top-link", child.props.className) })}
            </li>
          )
        ))}
      </ul>
    </div>
  )
}
