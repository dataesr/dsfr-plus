import cn, { Argument } from 'classnames';
import { useId } from 'react';
import { HeadingTags } from '../../types/headings';
import { Merge } from '../../types/polymophic';

export type SummaryLink = {
  href: string;
  label: string;
  links?: SummaryLink[];
}

export type SummaryBaseProps = {
  className?: Argument;
  links: SummaryLink[];
  title?: string;
  titleAs?: HeadingTags | 'p';
}

export type SummaryProps = Merge<React.HTMLAttributes<HTMLElement>, SummaryBaseProps>;

const SummaryList = ({ links }: { links: SummaryLink[] }) => (
  <ol>
    {links.map(({ href, label, links: sublinks }) => (
      <li key={href}>
        <a className="fr-summary__link" href={href}>{label}</a>
        {sublinks && <SummaryList links={sublinks} />}
      </li>
    ))}
  </ol>
);

export const Summary = ({ className, links, title = 'Sommaire', titleAs: TitleAs = 'h2', ...props }: SummaryProps) => {
  const id = useId();

  return (
    <nav aria-labelledby={id} className={cn('fr-summary', className)} role="navigation" {...props}>
      <TitleAs className="fr-summary__title" id={id}>{title}</TitleAs>
      <SummaryList links={links} />
    </nav>
  );
};
