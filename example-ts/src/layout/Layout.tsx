import { Button, Header, Logo, Service, FastAccess, Skiplinks } from '@dataesr/dsfr-plus';
import { Outlet } from 'react-router-dom';

const moveFocusToTarget = (event: React.MouseEvent<HTMLDivElement>) => {
  const link = (event.target as HTMLElement).closest('.fr-skiplinks a');
  if (!link) return;
  event.preventDefault();
  document.getElementById(link.getAttribute('href')!.slice(1))?.focus();
};

export function Layout() {

  return (
    <div onClick={moveFocusToTarget}>
      <Skiplinks
        links={[
          { label: 'Contenu', href: '#content' },
          { label: 'Menu', href: '#menu' },
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
    </div>
  )
}
