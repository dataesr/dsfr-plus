import {
  Breadcrumb, Button, Col, Container, FastAccess, Header, Link, Logo, Row, Service, Text, Title, Translate,
} from '@dataesr/dsfr-plus';

import { Code } from '../../components/Code';
import Playground from '../../components/Playground';

const scope = { Button, FastAccess, Header, Logo, Service, Translate };

const usage = `import { Translate } from '@dataesr/dsfr-plus';

<Translate
  current="fr"
  languages={[
    { code: 'fr', label: 'Français', href: '/fr/' },
    { code: 'en', label: 'English', href: '/en/' },
  ]}
/>`;

const basic = `
<Translate
  current="fr"
  languages={[
    { code: 'fr', label: 'Français', href: '#' },
    { code: 'en', label: 'English', href: '#' },
  ]}
/>
`;

const noOutline = `
<Translate
  noOutline
  current="fr"
  languages={[
    { code: 'fr', label: 'Français', href: '#' },
    { code: 'en', label: 'English', href: '#' },
  ]}
/>
`;

const inHeader = `
<Header>
  <Logo text="Gouvernement" />
  <Service name="DSFR+" />
  <FastAccess>
    <Button icon="question-line" size="sm" variant="text">Aide</Button>
    <Translate
      current="fr"
      languages={[
        { code: 'fr', label: 'Français', href: '#' },
        { code: 'en', label: 'English', href: '#' },
      ]}
    />
  </FastAccess>
</Header>
`;

const english = `
<Translate
  title="Select a language"
  current="en"
  languages={[
    { code: 'fr', label: 'Français', href: '#' },
    { code: 'en', label: 'English', href: '#' },
  ]}
/>
`;

const queryParam = `import { Translate } from '@dataesr/dsfr-plus';
import { useSearchParams } from 'react-router-dom';

const [searchParams] = useSearchParams();
const current = searchParams.get('language') ?? 'fr';

const languageHref = (code: string) => {
  const params = new URLSearchParams(searchParams);
  params.set('language', code);
  return \`?\${params}\`;
};

<Translate
  current={current}
  languages={[
    { code: 'fr', label: 'Français', href: languageHref('fr') },
    { code: 'en', label: 'English', href: languageHref('en') },
  ]}
/>`;

export function Translates() {
  return (
    <Container fluid className="fr-mb-5w">
      <Row>
        <Breadcrumb>
          <Link href="/">Accueil</Link>
          <Link href="/composants">Composants</Link>
          <Link>Translate - Sélecteur de langues</Link>
        </Breadcrumb>
      </Row>
      <Row gutters>
        <Col xs={12}>
          <Title as="h1">Translate - Sélecteur de langues</Title>
          <Text>
            Le sélecteur de langues permet de changer la langue d'un site disponible en plusieurs langues,
            de préférence au moins trois. Il se place dans l'en-tête, à la place de l'accès rapide le plus à droite.
          </Text>
          <Code code={usage} />
        </Col>
        <Col xs={12}>
          <Title as="h2" look="h4">Par défaut</Title>
          <Text>
            <code>current</code> est le code de la langue active, <code>languages</code> la liste des langues.
            Chaque langue est indiquée par son code ISO 639-1 et son nom dans sa propre langue : « English », pas « Anglais ».
          </Text>
          <Playground code={basic} scope={scope} defaultShowCode />
        </Col>
        <Col xs={12}>
          <Title as="h2" look="h4">Sans bordure</Title>
          <Playground code={noOutline} scope={scope} />
        </Col>
        <Col xs={12}>
          <Title as="h2" look="h4">Dans l'en-tête</Title>
          <Text>Placez-le en dernier dans <code>FastAccess</code>.</Text>
          <Playground code={inHeader} scope={scope} />
        </Col>
        <Col xs={12}>
          <Title as="h2" look="h4">Sur une page dans une autre langue</Title>
          <Text>Le titre du bouton, « Sélectionner une langue » par défaut, se change avec <code>title</code>.</Text>
          <Playground code={english} scope={scope} />
        </Col>
        <Col xs={12}>
          <Title as="h2" look="h4">Langue dans un paramètre de l'adresse</Title>
          <Text>
            Si la langue est dans l'adresse sous la forme <code>?language=en</code> comme dans la l'application Tableaux, chaque lien doit garder
            les autres paramètres et ne changer que <code>language</code>.
          </Text>
          <Code code={queryParam} />
        </Col>
        <Col xs={12}>
          <Title as="h2" look="h4">Accessibilité</Title>
          <ul>
            <li>Attention, dans le header il ne doit jamais y avoir + de 3 élements, sinon ça fait bouger le header.</li>
            <li>Le bouton indique s'il est ouvert ou fermé (<code>aria-expanded</code>), le JavaScript du DSFR le met à jour.</li>
            <li>La langue active porte <code>aria-current="true"</code>.</li>
            <li>Chaque lien porte <code>hreflang</code> et <code>lang</code>, pour que les lecteurs d'écran prononcent correctement le nom de la langue.</li>
          </ul>
          <Text>
            <Link
              href="https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/selecteur-de-langues"
              isSimple
              rel="noreferrer noopener"
              target="_blank"
            >
              Voir la documentation officielle du DSFR
            </Link>
          </Text>
        </Col>
      </Row>
    </Container>
  );
}
