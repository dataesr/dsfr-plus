import cn, { Argument } from 'classnames';
import { Merge } from '../../types/polymophic';

export type Skiplink = {
  href: string;
  label: string;
}

export type SkiplinksBaseProps = {
  className?: Argument;
  links: Skiplink[];
}

export type SkiplinksProps = Merge<React.HTMLAttributes<HTMLDivElement>, SkiplinksBaseProps>;

export const Skiplinks = ({
  'aria-label': ariaLabel = 'Accès rapide',
  className,
  links,
  ...props
}: SkiplinksProps) => {
  return (
    <div className={cn("fr-skiplinks", className)} {...props}>
      <nav aria-label={ariaLabel} className="fr-container" role="navigation">
        <ul className="fr-skiplinks__list">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a className="fr-link" href={href}>{label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
