import { Button, Footer, Header, Link, Service, FastAccess } from '@dataesr/dsfr-plus';
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
      <Footer
        id="footer"
        tabIndex={-1}
        brand="DISD"
        description="DSFR+ est une bibliothèque de composants React basée sur le Système de design de l'État, développée par le DISD."
      >
        <span>Accessibilité : non conforme</span>
        <Link href="https://github.com/dataesr/dsfr-plus" target="_blank" rel="noopener external" title="Github - nouvelle fenêtre">Github</Link>
        <Link href="https://www.npmjs.com/package/@dataesr/dsfr-plus" target="_blank" rel="noopener external" title="npm - nouvelle fenêtre">npm</Link>
        <Link href="https://www.systeme-de-design.gouv.fr" target="_blank" rel="noopener external" title="Système de design de l'État - nouvelle fenêtre">Système de design de l'État</Link>
        <Link href={`https://github.com/dataesr/dsfr-plus/releases/tag/v${VITE_VERSION}`} target="_blank" rel="noopener external" title={`Version ${VITE_VERSION} - nouvelle fenêtre`}>{`v${VITE_VERSION}`}</Link>
      </Footer>
    </>
  )
}
