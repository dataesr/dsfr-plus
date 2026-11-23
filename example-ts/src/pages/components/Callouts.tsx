import {
  Breadcrumb, Button, Callout, Col, Container, Link, Row, Text, Title,
} from '@dataesr/dsfr-plus';

import { Code } from '../../components/Code';
import Playground from '../../components/Playground';

const scope = { Button, Callout, Link };

const usage = `import { Button, Callout } from '@dataesr/dsfr-plus';

<Callout
  title="Titre de la mise en avant"
  icon="info-line"
  action={<Button>En savoir plus</Button>}
>
  Contenu de la mise en avant.

</Callout>`;

const basic = `
<Callout title="Titre de la mise en avant">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec libero ultricies aliquet.
</Callout>
`;

const withIcon = `
<Callout title="Titre de la mise en avant" icon="info-line">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec libero ultricies aliquet.
</Callout>
`;

const withAction = `
<Callout
  title="Titre de la mise en avant"
  icon="info-line"
  action={<Button>En savoir plus</Button>}
>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec libero ultricies aliquet.
</Callout>
`;

const withColor = `
<Callout title="Titre de la mise en avant" color="green-emeraude">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec libero ultricies aliquet.
</Callout>
`;

const withoutTitle = `
<Callout>
  Le texte peut contenir un <Link href="#">lien</Link>.
</Callout>
`;

export function Callouts() {
  return (
    <Container fluid className="fr-mb-5w">
      <Row>
        <Breadcrumb>
          <Link href="/">Accueil</Link>
          <Link href="/composants">Composants</Link>
          <Link>Callout - Mise en avant</Link>
        </Breadcrumb>
      </Row>
      <Row gutters>
        <Col xs={12}>
          <Title as="h1">Callout - Mise en avant</Title>
          <Text>
            La mise en avant met l'accent sur une information complémentaire au contenu principal.
            Utilisez-en une ou deux au maximum par page, et jamais pour une erreur ou une confirmation :
            dans ce cas, utilisez une alerte.
          </Text>
          <Code code={usage} />
        </Col>
        <Col xs={12}>
          <Title as="h2" look="h4">Par défaut</Title>
          <Text>Le texte, obligatoire, se place entre les balises. Le <code>title</code> est optionnel.</Text>
          <Playground code={basic} scope={scope} defaultShowCode />
        </Col>
        <Col xs={12}>
          <Title as="h2" look="h4">Icône</Title>
          <Text><code>icon</code> reçoit le nom d'une icône du DSFR, sans le préfixe <code>fr-icon-</code>.</Text>
          <Playground code={withIcon} scope={scope} />
        </Col>
        <Col xs={12}>
          <Title as="h2" look="h4">Bouton ou lien</Title>
          <Text><code>action</code> ajoute un bouton ou un lien sous le texte.</Text>
          <Playground code={withAction} scope={scope} />
        </Col>
        <Col xs={12}>
          <Title as="h2" look="h4">Couleur</Title>
          <Text><code>color</code> change la bordure et le fond, avec l'une des couleurs illustratives du DSFR.</Text>
          <Playground code={withColor} scope={scope} />
        </Col>
        <Col xs={12}>
          <Title as="h2" look="h4">Sans titre</Title>
          <Playground code={withoutTitle} scope={scope} />
        </Col>
        <Col xs={12}>
          <Title as="h2" look="h4">Accessibilité</Title>
          <ul>
            <li>Le titre est un <code>h3</code> par défaut. Adaptez-le à la page avec <code>titleAs</code>.</li>
            <li>Ajoutez un titre pour que les personnes aveugles trouvent plus facilement la mise en avant.</li>
            <li>L'icône, la bordure et la couleur sont décoratives : l'information doit être portée par le texte.</li>
            <li>Ne l'utilisez pas pour une citation.</li>
          </ul>
          <Text>
            <Link
              href="https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/mise-en-avant"
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
