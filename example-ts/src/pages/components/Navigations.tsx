import { useState } from 'react';
import {
  Header, Service, Logo, Nav, NavItem, Link,
  Breadcrumb, Container, Title, Text, Row, Col,
} from '@dataesr/dsfr-plus';

import Playground from '../../components/Playground';
import { Code } from '../../components/Code';

const directLinks = `
<Header>
  <Logo text="Gouvernement" />
  <Service name="DSFR+" tagline="Une bibliothèque de composants React" />
  <Nav>
    <Link href="#" current>Accueil</Link>
    <Link href="#">Structures</Link>
    <Link href="#">Financements</Link>
    <Link href="#">Contact</Link>
  </Nav>
</Header>
`;

const dropdown = `
<Header>
  <Logo text="Gouvernement" />
  <Service name="DSFR+" tagline="Une bibliothèque de composants React" />
  <Nav>
    <Link href="#">Accueil</Link>
    <NavItem title="Structures" current>
      <Link href="#">Liste des structures</Link>
      <Link href="#" current>Carte des structures</Link>
      <Link href="#">Comparer</Link>
    </NavItem>
    <NavItem title="Financements">
      <Link href="#">Par année</Link>
      <Link href="#">Par programme</Link>
    </NavItem>
    <Link href="#">Contact</Link>
  </Nav>
</Header>
`;

const currentPage = `
() => {
  const [page, setPage] = useState('accueil');
  const go = (name) => (event) => {
    event.preventDefault();
    setPage(name);
  };

  return (
    <>
      <Header>
        <Logo text="Gouvernement" />
        <Service name="DSFR+" />
        <Nav>
          <Link href="#" current={page === 'accueil'} onClick={go('accueil')}>Accueil</Link>
          <NavItem title="Structures" current={page.startsWith('structures')}>
            <Link href="#" current={page === 'structures/liste'} onClick={go('structures/liste')}>Liste</Link>
            <Link href="#" current={page === 'structures/carte'} onClick={go('structures/carte')}>Carte</Link>
          </NavItem>
          <Link href="#" current={page === 'contact'} onClick={go('contact')}>Contact</Link>
        </Nav>
      </Header>
      <p className="fr-m-2w">Page affichée : <strong>{page}</strong></p>
    </>
  );
}
`;

const withRouter = `import { useLocation } from 'react-router-dom';
import { Header, Logo, Service, Nav, NavItem, Link } from '@dataesr/dsfr-plus';

export function AppHeader() {
  const { pathname } = useLocation();

  return (
    <Header>
      <Logo text="Ministère|de l'enseignement|supérieur" />
      <Service name="Mon application" />
      <Nav>
        <Link href="/" current={pathname === '/'}>Accueil</Link>
        <NavItem title="Structures" current={pathname.startsWith('/structures')}>
          <Link href="/structures/liste" current={pathname === '/structures/liste'}>Liste</Link>
          <Link href="/structures/carte" current={pathname === '/structures/carte'}>Carte</Link>
        </NavItem>
      </Nav>
    </Header>
  );
}`;

const customLabel = `
<Header>
  <Logo text="Government" />
  <Service name="DSFR+" />
  <Nav aria-label="Main menu">
    <Link href="#" current>Home</Link>
    <Link href="#">Institutions</Link>
  </Nav>
</Header>
`;

export function Navigations() {
  return (
    <Container fluid className="fr-mb-5w">
      <Row>
        <Breadcrumb>
          <Link href="/">Accueil</Link>
          <Link href="/composants">Composants</Link>
          <Link>Navigation principale - Nav</Link>
        </Breadcrumb>
      </Row>
      <Row gutters>
        <Col xs={12}>
          <Title as="h1">Navigation principale - Nav</Title>
          <Text>
            La navigation principale est le système central de navigation au sein d’un site.
            Elle oriente l’usager à travers les rubriques principales et secondaires du site.
          </Text>
          <Text>
            Elle se place dans l'en-tête : ajoutez un composant <code>Nav</code> parmi les enfants
            de <code>Header</code>, et il n'y a rien d'autre à faire. L'en-tête l'affiche sous le bloc marque
            sur grand écran, et dans le menu « burger » sur mobile. Le bouton burger apparaît automatiquement.
            L'ordre des enfants de <code>Header</code> n'a pas d'importance.
          </Text>
          <Text>
            L'ouverture des menus, la navigation au clavier et la fermeture sont gérées par le JavaScript du DSFR,
            chargé par <code>DSFRConfig</code>.
          </Text>
        </Col>
        <Col xs={12}>
          <Title as="h2" look="h4">Liens directs</Title>
          <Text>
            Placez des composants <code>Link</code> dans <code>Nav</code>. C'est la variante à privilégier
            pour les sites qui ont peu ou pas de second niveau d'arborescence.
            Réduisez la fenêtre pour voir la navigation passer dans le menu mobile.
          </Text>
          <Playground code={directLinks} scope={{ Header, Logo, Service, Nav, Link }} defaultShowCode />
        </Col>
        <Col xs={12}>
          <Title as="h2" look="h4">Menu déroulant</Title>
          <Text>
            Un <code>NavItem</code> affiche un bouton qui ouvre une liste de liens. Son libellé est donné
            par la propriété <code>title</code>. Liens directs et menus déroulants peuvent être associés
            dans une même navigation.
          </Text>
          <Playground code={dropdown} scope={{ Header, Logo, Service, Nav, NavItem, Link }} />
        </Col>
        <Col xs={12}>
          <Title as="h2" look="h4">Indiquer la page active</Title>
          <Text>
            C'est à l'application de dire où se trouve l'usager, avec la propriété <code>current</code>.
            Sur un <code>Link</code>, elle produit <code>aria-current="page"</code>.
            Sur un <code>NavItem</code>, elle signale que la page active se trouve dans ce menu
            (<code>aria-current="true"</code>). Pensez à renseigner les deux.
          </Text>
          <Playground code={currentPage} scope={{ Header, Logo, Service, Nav, NavItem, Link, useState }} />
          <Text className="fr-mt-3w">
            Dans une application, la page active se déduit de l'URL. Les liens utilisent le routeur déclaré
            dans <code>DSFRConfig</code> (propriété <code>routerComponent</code>), sans rechargement de la page.
          </Text>
          <Code code={withRouter} />
        </Col>
        <Col xs={12}>
          <Title as="h2" look="h4">Nom de la navigation</Title>
          <Text>
            La navigation est annoncée « Menu principal » aux lecteurs d'écran.
            Sur une page dans une autre langue, changez ce nom avec <code>aria-label</code>.
          </Text>
          <Playground code={customLabel} scope={{ Header, Logo, Service, Nav, Link }} />
        </Col>
        <Col xs={12}>
          <Title as="h2" look="h4">Accessibilité</Title>
          <Text>Les interactions au clavier sont celles décrites par le DSFR :</Text>
          <ul>
            <li><code>Tab</code> et <code>Maj + Tab</code> déplacent le focus d'un élément à l'autre ;</li>
            <li><code>Entrée</code> ou <code>Espace</code> sur un bouton ouvre ou referme son menu ;</li>
            <li><code>Entrée</code> sur un lien l'active ;</li>
            <li><code>Échap</code> referme le menu ouvert et rend le focus à son bouton.</li>
          </ul>
        </Col>
        <Col xs={12}>
          <Title as="h2" look="h4">Bonnes pratiques</Title>
          <ul>
            <li>8 entrées principales au maximum.</li>
            <li>8 liens au maximum dans un menu déroulant.</li>
            <li>Des libellés clairs et concis, pour que l'usager comprenne où il se rend.</li>
            <li>La navigation n'est pas personnalisable : ne modifiez ni ses couleurs ni sa typographie.</li>
          </ul>
          <Text>
            La variante « méga-menu » du DSFR n'est pas disponible dans DSFR+.
          </Text>
          <Text>
            <Link
              href="https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/navigation-principale"
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
