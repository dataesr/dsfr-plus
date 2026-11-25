import cn, { Argument } from 'classnames';
import { useId } from 'react';
import { Merge } from '../../types/polymophic';
import { Link } from '../Link';

export type TranslateLanguage = {
  code: string;
  href: string;
  label: string;
}

export type TranslateBaseProps = {
  className?: Argument;
  current: string;
  languages: TranslateLanguage[];
  noOutline?: boolean;
  title?: string;
}

export type TranslateProps = Merge<React.HTMLAttributes<HTMLDivElement>, TranslateBaseProps>;

export const Translate = ({
  className,
  current,
  languages,
  noOutline,
  title = 'Sélectionner une langue',
  ...props
}: TranslateProps) => {
  const id = useId();
  const active = languages.find(({ code }) => code === current);

  return (
    <div className={cn('fr-translate fr-nav', className)} {...props}>
      <div className="fr-nav__item">
        <button
          aria-controls={id}
          aria-expanded="false"
          className={cn('fr-translate__btn fr-btn', noOutline ? 'fr-btn--tertiary-no-outline' : 'fr-btn--tertiary')}
          title={title}
          type="button"
        >
          {current.toUpperCase()}
          {active && <span className="fr-hidden-lg">&nbsp;- {active.label}</span>}
        </button>
        <div className="fr-collapse fr-translate__menu fr-menu" id={id}>
          <ul className="fr-menu__list">
            {languages.map(({ code, href, label }) => (
              <li key={code}>
                <Link
                  aria-current={code === current ? 'true' : undefined}
                  className="fr-translate__language fr-nav__link"
                  href={href}
                  hrefLang={code}
                  lang={code}
                >
                  {`${code.toUpperCase()} - ${label}`}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
