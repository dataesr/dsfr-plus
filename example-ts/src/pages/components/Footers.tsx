import {
  Footer, FooterTop, FooterTopCategory, FooterPartners, FooterPartner,
  Breadcrumb, Container, Title, Text, Row, Col, Link,
} from '@dataesr/dsfr-plus';

import Playground from '../../components/Playground';
import { Code } from '../../components/Code';

const placeholder = (width: number, height: number) => `data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}"><rect width="100%" height="100%" fill="#ccc"/></svg>`
)}`;
const logoHorizontal = placeholder(160, 90);
const logoCarre = placeholder(90, 90);

const simple = `
<Footer
  brand="Ministère|de l'enseignement|supérieur"
  description="DSFR+ est une bibliothèque de composants React basée sur le Système de design de l'État."
>
  <Link href="#">Plan du site</Link>
  <Link href="#">Accessibilité : partiellement conforme</Link>
  <Link href="#">Mentions légales</Link>
  <Link href="#">Données personnelles</Link>
  <Link href="#">Gestion des cookies</Link>
</Footer>
`;

const usage = `import { Skiplinks, Header, Footer, Link } from '@dataesr/dsfr-plus';

export function Layout() {
  return (
    <>
      <Skiplinks
        links={[
          { label: 'Contenu', href: '#content' },
          { label: 'Pied de page', href: '#footer' },
        ]}
      />
      <Header>...</Header>
      <main id="content">...</main>
      <Footer id="footer" brand="Ministère|de l'enseignement|supérieur">
        <Link href="/plan-du-site">Plan du site</Link>
        <Link href="/accessibilite">Accessibilité : partiellement conforme</Link>
        <Link href="/mentions-legales">Mentions légales</Link>
        <Link href="/donnees-personnelles">Données personnelles</Link>
        <Link href="/cookies">Gestion des cookies</Link>
      </Footer>
    </>
  );
}`;

const bottomLinks = `
<Footer brand="Ministère|de l'enseignement|supérieur">
  <Link href="#">Plan du site</Link>
  <span>Accessibilité : non conforme</span>
  <Link href="#">Mentions légales</Link>
  <Link href="#">Données personnelles</Link>
  <Link href="#">Gestion des cookies</Link>
  <Link href="https://github.com/dataesr/dsfr-plus" target="_blank" rel="noopener external" title="Github - nouvelle fenêtre">
    Github
  </Link>
  <button
    type="button"
    className="fr-icon-theme-fill fr-btn--icon-left"
    aria-controls="fr-theme-modal"
    data-fr-opened="false"
  >
    Paramètres d'affichage
  </button>
</Footer>
`;

const withTop = `
<Footer brand="Ministère|de l'enseignement|supérieur">
  <FooterTop>
    <FooterTopCategory title="Composants">
      <Link href="#">En-tête</Link>
      <Link href="#">Navigation principale</Link>
      <Link href="#">Pied de page</Link>
    </FooterTopCategory>
    <FooterTopCategory title="Ressources">
      <Link href="#">Démarrage rapide</Link>
      <Link href="#">Système de design de l'État</Link>
    </FooterTopCategory>
  </FooterTop>
  <Link href="#">Plan du site</Link>
  <Link href="#">Accessibilité : partiellement conforme</Link>
  <Link href="#">Mentions légales</Link>
  <Link href="#">Données personnelles</Link>
  <Link href="#">Gestion des cookies</Link>
</Footer>
`;

const withOperator = `
<Footer
  brand="République|Française"
  operator={{ src: logoHorizontal, alt: "DOAD (nous)" }}
>
  <Link href="#">Plan du site</Link>
  <Link href="#">Accessibilité : partiellement conforme</Link>
  <Link href="#">Mentions légales</Link>
  <Link href="#">Données personnelles</Link>
  <Link href="#">Gestion des cookies</Link>
</Footer>
`;

const withPartners = `
<Footer brand="Ministère|de l'enseignement|supérieur">
  <FooterPartners main={<FooterPartner src={logoHorizontal} alt="Partenaire principal" href="#" />}>
    <FooterPartner src={logoHorizontal} alt="Partenaire A" href="#" />
    <FooterPartner src={logoCarre} alt="Partenaire B" href="#" />
  </FooterPartners>
  <Link href="#">Plan du site</Link>
  <Link href="#">Accessibilité : partiellement conforme</Link>
  <Link href="#">Mentions légales</Link>
  <Link href="#">Données personnelles</Link>
  <Link href="#">Gestion des cookies</Link>
</Footer>
`;

const withLicense = `
<Footer
  brand="Ministère|de l'enseignement|supérieur"
  license="© République Française 2026 - Tous droits réservés"
>
  <Link href="#">Plan du site</Link>
  <Link href="#">Accessibilité : partiellement conforme</Link>
  <Link href="#">Mentions légales</Link>
  <Link href="#">Données personnelles</Link>
  <Link href="#">Gestion des cookies</Link>
</Footer>
`;

const english = `
<Footer
  brand="Ministry|of Higher Education"
  homeTitle="Back to home - Ministry of Higher Education"
  newWindowLabel="new window"
  license="Unless otherwise stated, all content of this site is under the etalab-2.0 licence"
>
  <Link href="#">Sitemap</Link>
  <Link href="#">Accessibility: partially compliant</Link>
  <Link href="#">Legal notice</Link>
  <Link href="#">Personal data</Link>
  <Link href="#">Cookies</Link>
</Footer>
`;

export function Footers() {
  return (
    <Container fluid className="fr-mb-5w">
      <Row>
        <Breadcrumb>
          <Link href="/">Accueil</Link>
          <Link href="/composants">Composants</Link>
          <Link>Pied de page - Footer</Link>
        </Breadcrumb>
      </Row>
      <Row gutters>
        <Col xs={12}>
          <Title as="h1">Pied de page - Footer</Title>
          <Text>
            Le pied de page est un élément de navigation secondaire qui permet à l’usager de poursuivre son parcours.
            Il propose aussi des informations complémentaires. Il est obligatoire sur tous les sites de la sphère
            gouvernementale, et s'affiche en bas de chacune des pages.
          </Text>
        </Col>
        <Col xs={12}>
          <Title as="h2" look="h4">Pied de page simple</Title>
          <Text>
            Donnez l'intitulé du bloc marque avec <code>brand</code> (le caractère <code>|</code> marque un retour à la ligne),
            puis placez dans <code>Footer</code> les liens liés aux obligations légales.
            La <code>description</code> est facultative et ne devrait pas dépasser 3 lignes.
          </Text>
          <Playground code={simple} scope={{ Footer, Link }} defaultShowCode />
        </Col>
        <Col xs={12}>
          <Title as="h2" look="h4">Ce que le composant fait pour vous</Title>
          <ul>
            <li>
              Les quatre liens de l'écosystème de l'État (info.gouv.fr, service-public.gouv.fr, legifrance.gouv.fr, data.gouv.fr)
              sont toujours présents, dans l'ordre imposé. Le DSFR interdit de les modifier.
            </li>
            <li>La mention de la licence etalab-2.0 est affichée par défaut.</li>
            <li>
              Le bloc marque renvoie vers l'accueil (<code>homeHref</code>, « / » par défaut),
              avec le titre « Retour à l’accueil du site - … » attendu par le DSFR.
            </li>
            <li>L'élément <code>footer</code> porte le rôle <code>contentinfo</code>.</li>
          </ul>
        </Col>
        <Col xs={12}>
          <Title as="h2" look="h4">Mise en place dans une application</Title>
          <Text>
            Placez le pied de page une seule fois, après le contenu principal.
            Donnez-lui un <code>id</code> pour que le lien d'évitement « Pied de page » puisse le cibler.
          </Text>
          <Code code={usage} />
        </Col>
        <Col xs={12}>
          <Title as="h2" look="h4">Les liens du bas de page</Title>
          <Text>
            Chaque enfant de <code>Footer</code> devient un élément de la liste : un <code>Link</code>,
            un lien externe, un bouton, ou un simple texte. La mention d'accessibilité est obligatoire sur toutes les pages ;
            elle peut être un lien vers la déclaration d'accessibilité ou un texte seul.
          </Text>
          <Text>
            Le bouton « Paramètres d'affichage » ouvre la modale du même nom, qui doit être présente dans la page.
          </Text>
          <Playground code={bottomLinks} scope={{ Footer, Link }} />
        </Col>
        <Col xs={12}>
          <Title as="h2" look="h4">Avec liens de navigation</Title>
          <Text>
            Pour les sites profonds, <code>FooterTop</code> ajoute des listes de liens classées par catégorie,
            avec <code>FooterTopCategory</code>. Jusqu'à 6 colonnes, et 8 liens par liste au maximum.
            Ces listes complètent la navigation principale, elles n'en sont pas le miroir.
          </Text>
          <Playground code={withTop} scope={{ Footer, FooterTop, FooterTopCategory, Link }} />
        </Col>
        <Col xs={12}>
          <Title as="h2" look="h4">Avec logo opérateur</Title>
          <Text>
            Le lien vers l'accueil est alors porté par le logo de l'opérateur (logo purement homemade by Mihoub (sorry...)).
            Le texte alternatif <code>alt</code> est obligatoire et reprend le nom de l'opérateur.
          </Text>
          <Playground code={withOperator} scope={{ Footer, Link, logoHorizontal }} />
        </Col>
        <Col xs={12}>
          <Title as="h2" look="h4">Avec logos partenaires</Title>
          <Text>
            <code>FooterPartners</code> affiche un partenaire principal (<code>main</code>) et des partenaires secondaires (ses enfants).
            L'un ou l'autre peut être omis. Le titre « Nos partenaires » se change avec <code>title</code>.
          </Text>
          <Playground code={withPartners} scope={{ Footer, FooterPartners, FooterPartner, Link, logoHorizontal, logoCarre }} />
        </Col>
        <Col xs={12}>
          <Title as="h2" look="h4">Mention de licence</Title>
          <Text>
            La propriété <code>license</code> remplace la mention par défaut lorsque les contenus du site
            ne sont pas sous licence etalab-2.0.
          </Text>
          <Playground code={withLicense} scope={{ Footer, Link }} />
        </Col>
        <Col xs={12}>
          <Title as="h2" look="h4">Dans une autre langue</Title>
          <Text>
            Les textes fournis par le composant sont en français par défaut. Ils se remplacent avec
            <code>homeTitle</code> (titre du lien d'accueil), <code>newWindowLabel</code> (mention « nouvelle fenêtre »
            des liens de l'État) et <code>license</code>. Le titre de <code>FooterPartners</code> se change avec <code>title</code>.
          </Text>
          <Playground code={english} scope={{ Footer, Link }} />
        </Col>
        <Col xs={12}>
          <Title as="h2" look="h4">Accessibilité</Title>
          <Text>La mention de conformité au RGAA doit apparaître sur toutes les pages, sous l'une de ces formes :</Text>
          <ul>
            <li>« Accessibilité : non conforme » si le taux de conformité est inférieur à 50 %, ou sans audit ;</li>
            <li>« Accessibilité : partiellement conforme » s'il est supérieur à 50 % ;</li>
            <li>« Accessibilité : totalement conforme » s'il est égal à 100 %.</li>
          </ul>
          <Text>
            Les liens obligatoires sont : accessibilité, mentions légales, données personnelles et gestion des cookies.
            Les logos sont des images porteuses d'information : leur texte alternatif est obligatoire.
          </Text>
          <Text>
            <Link
              href="https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/pied-de-page"
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
