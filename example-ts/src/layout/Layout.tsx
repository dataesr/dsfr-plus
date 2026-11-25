import { Button, FastAccess, Header, Service } from '@dataesr/dsfr-plus';
import { Outlet } from 'react-router-dom';

const { VITE_VERSION } = import.meta.env;

export function Layout() {

  return (
    <>
      <Header>
        <Service name="DSFR+" tagline="Une bibliothèque de composants React" />
        <FastAccess>
          <Button as="a" href="https://github.com/dataesr/dsfr-plus" target="_blank" rel="noreferer noopener" icon="github-fill" size="sm" variant="text">Github</Button>
          <Button as="a" href="https://www.systeme-de-design.gouv.fr" target="_blank" rel="noreferer noopener" icon="code-s-slash-line" size="sm" variant="text">Système de design de l'état</Button>
        </FastAccess>
      </Header>
      <Outlet />
      <footer id="footer" tabIndex={-1} className="fr-container fr-py-4w">
        v{VITE_VERSION}
      </footer>
    </>
  )
}
