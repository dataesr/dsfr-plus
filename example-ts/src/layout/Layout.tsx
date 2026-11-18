import { Button, FastAccess, Header, Logo, Service, Skiplinks } from '@dataesr/dsfr-plus';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

// Demo only: the HashRouter already uses the "#" of the URL, so we scroll to the target ourselves.
const scrollToTarget = (event: MouseEvent) => {
  event.preventDefault();
  const link = (event.target as HTMLElement).closest<HTMLAnchorElement>('.fr-skiplinks a');
  if (!link) return;
  const target = document.querySelector<HTMLElement>(link.hash);
  target?.scrollIntoView();
  target?.focus();
};

export function Layout() {
  useEffect(() => {
    document.addEventListener('click', scrollToTarget);
    return () => document.removeEventListener('click', scrollToTarget);
  }, []);

  return (
    <>
      <Skiplinks
        links={[
          { label: 'Contenu', href: '#content' },
          // Sidemenu holds ids missing here, in real router, we set ids on outlet here
          { label: 'Menu', href: '#menu' },
          { label: 'Pied de page', href: '#footer' },
        ]}
      />
      <Header>
        <Logo text="Ministère de | l'enseignement supérieur, | de la recherche | et de l'espace" />
        <Service name="DSFR+" tagline="Une bibliothèque de composants React" />
        <FastAccess>
          <Button as="a" href="https://github.com/dataesr/dsfr-plus" target="_blank" rel="noreferer noopener" icon="github-fill" size="sm" variant="text">Github</Button>
          <Button as="a" href="https://www.systeme-de-design.gouv.fr" target="_blank" rel="noreferer noopener" icon="code-s-slash-line" size="sm" variant="text">Système de design de l'état</Button>
        </FastAccess>
      </Header>
      <Outlet />
      <footer id="footer" tabIndex={-1} className="fr-container fr-py-4w">
        Faux pied de page, validez la pr SVPPPPPPPPPPPPP.
      </footer>
    </>
  )
}
