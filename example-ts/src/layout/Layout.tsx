import { Button, Footer, Header, Link, Logo, Service, FastAccess, Skiplinks } from '@dataesr/dsfr-plus';
import { Outlet } from 'react-router-dom';

import { version } from '../../../package.json';

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
      <Footer
        id="footer"
        tabIndex={-1}
        brand="Ministère de | l'enseignement supérieur, | de la recherche | et de l'espace"
        description="DSFR+ est une bibliothèque de composants React basée sur le Système de design de l'État."
        operator={{ src: "/dsfr-plus/logo-operateur.png", alt: "Nom de l'opérateur" }}
      >
        <span>Accessibilité : non conforme</span>
        <Link href="https://github.com/dataesr/dsfr-plus" target="_blank" rel="noopener external" title="Github - nouvelle fenêtre">Github</Link>
        <Link href="https://www.npmjs.com/package/@dataesr/dsfr-plus" target="_blank" rel="noopener external" title="npm - nouvelle fenêtre">npm</Link>
        <Link href="https://www.systeme-de-design.gouv.fr" target="_blank" rel="noopener external" title="Système de design de l'État - nouvelle fenêtre">Système de design de l'État</Link>
        <Link href={`https://github.com/dataesr/dsfr-plus/releases/tag/v${version}`} target="_blank" rel="noopener external" title={`Version ${version} - nouvelle fenêtre`}>{`v${version}`}</Link>
      </Footer>
    </div>
  )
}
