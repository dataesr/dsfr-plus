import {
  Skiplinks, Breadcrumb, Container, Title, Text, Row, Col, Link, Button,
} from '@dataesr/dsfr-plus';

import Playground from '../../components/Playground';
import { Code } from '../../components/Code';

const usage = `import { Skiplinks, Header, Logo, Service, Nav, Link } from '@dataesr/dsfr-plus';

export function Layout() {
  return (
    <>
      <Skiplinks
        links={[
          { label: 'Contenu', href: '#content' },
          { label: 'Menu', href: '#main-menu' },
          { label: 'Pied de page', href: '#footer' },
        ]}
      />
      <Header>
        <Logo text="Ministère|de l'enseignement|supérieur" />
        <Service name="Mon application" />
        <Nav id="main-menu">
          <Link href="/">Accueil</Link>
        </Nav>
      </Header>
      <main id="content">...</main>
      <footer id="footer">...</footer>
    </>
  );
}`;

const example = `
<Skiplinks
  links={[
    { label: 'Contenu', href: '#demo-contenu' },
    { label: 'Menu', href: '#demo-menu' },
    { label: 'Pied de page', href: '#demo-pied-de-page' },
  ]}
/>
`;

const english = `
<Skiplinks
  aria-label="Quick access"
  links={[
    { label: 'Content', href: '#demo-contenu' },
    { label: 'Footer', href: '#demo-pied-de-page' },
  ]}
/>
`;

export function SkiplinksPage() {
  return (
    <Container fluid className="fr-mb-5w">
      <Row>
        <Breadcrumb>
          <Link href="/">Accueil</Link>
          <Link href="/composants">Composants</Link>
          <Link>Liens d'évitement - Skiplinks</Link>
        </Breadcrumb>
      </Row>
      <Row gutters>
        <Col xs={12}>
          <Title as="h1">Liens d'évitement - Skiplinks</Title>
          <Text>
            Les liens d’évitement permettent à l’usager qui navigue au clavier, ou avec un lecteur d'écran,
            d’accéder directement aux zones importantes de la page sans parcourir tout ce qui précède.
          </Text>
          <Text>
            Leur présence est une obligation sur tous les sites : le RGAA demande au moins un lien d'accès
            au contenu principal sur chaque page. Ils sont masqués par défaut et apparaissent
            lorsqu'un de leurs liens reçoit le focus.
          </Text>
        </Col>
        <Col xs={12}>
          <Title as="h2" look="h4">Utilisation</Title>
          <Text>
            Placez <code>Skiplinks</code> une seule fois, tout en haut de la page, au-dessus de l'en-tête.
            Chaque lien pointe vers l'<code>id</code> d'un élément présent dans la page.
            Il n'y a pas de JavaScript : le navigateur déplace lui-même le focus.
          </Text>
          <Code code={usage} />
        </Col>
        <Col xs={12}>
          <Title as="h2" look="h4">Essayer</Title>
          <Text>
            Placez le focus sur le bouton ci-dessous puis appuyez sur <code>Tab</code> : les liens apparaissent.
            Appuyez sur <code>Entrée</code> pour rejoindre une des zones de démonstration.
          </Text>
          <Button variant="secondary" size="sm" className="fr-mb-2w">Placer le focus ici, puis Tab</Button>
          <Playground code={example} scope={{ Skiplinks }} defaultShowCode />
          <ul className="fr-mt-2w">
            <li><span id="demo-menu" tabIndex={-1}>Zone « Menu »</span></li>
            <li><span id="demo-contenu" tabIndex={-1}>Zone « Contenu »</span></li>
            <li><span id="demo-pied-de-page" tabIndex={-1}>Zone « Pied de page »</span></li>
          </ul>
        </Col>
        <Col xs={12}>
          <Title as="h2" look="h4">Nom de la navigation</Title>
          <Text>
            Les liens sont annoncés « Accès rapide » aux lecteurs d'écran.
            Sur une page dans une autre langue, changez ce nom avec <code>aria-label</code>.
          </Text>
          <Playground code={english} scope={{ Skiplinks }} />
        </Col>
        <Col xs={12}>
          <Title as="h2" look="h4">Bonnes pratiques</Title>
          <ul>
            <li>Le lien minimum est « Contenu », et il est toujours le premier de la liste.</li>
            <li>Choisissez les autres liens selon les zones clés du site : menu, recherche, pied de page.</li>
            <li>Limitez leur nombre, sinon ils ne font plus gagner de temps.</li>
            <li>Gardez les mêmes liens, dans le même ordre, sur toutes les pages.</li>
            <li>Des libellés courts et explicites, sans icône.</li>
            <li>Chaque cible doit exister dans la page, sinon le lien ne mène nulle part.</li>
          </ul>
          <Text>
            <Link
              href="https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/liens-d-evitement"
              target="_blank"
              rel="noreferrer noopener"
              isSimple
            >
              Voir la documentation officielle du DSFR
            </Link>
          </Text>
        </Col>
      </Row>
    </Container>
  )
}
