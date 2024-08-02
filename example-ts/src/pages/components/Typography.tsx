import {
  Breadcrumb,
  Col,
  Container,
  Link,
  Row,
  Text,
  Title,
} from "@dataesr/dsfr-plus";

import Playground from "../../components/Playground";

export function Typography() {
  return (
    <Container fluid className="fr-mb-5w">
      <Row>
        <Breadcrumb>
          <Link href="/">Accueil</Link>
          <Link href="/composants">Composants</Link>
          <Link>Typography - Typographie</Link>
        </Breadcrumb>
      </Row>
      <Row gutters>
        <Col xs={12}>
          <Title as="h1">Texte</Title>
          <Text>Affichage d'un texte</Text>
          <Playground
            code={`<Text>Ceci est un texte</Text>`}
            scope={{ Text }}
          />
        </Col>
        <Col xs={12}>
          <Title as="h2">Petit texte</Title>
          <Text>Tailles disponibles : xs, sm, md, lg et lead</Text>
          <Playground
            code={`<Text size="xs">Ceci est un petit texte</Text>`}
            scope={{ Text }}
          />
        </Col>
        <Col xs={12}>
          <Title as="h2">Texte en tag "span"</Title>
          <Text>Tags disponibles : p et span. Défaut: p</Text>
          <Playground
            code={`<Text as="span">Ceci est un span</Text>`}
            scope={{ Text }}
          />
        </Col>
        <Col xs={12}>
          <Title as="h2">Texte avec alt</Title>
          <Playground
            code={`<Text alt="example de balise Texte avec alt">Ceci est un texte avec alt</Text>`}
            scope={{ Text }}
          />
        </Col>
        <Col xs={12}>
          <Title as="h2">Texte en gras</Title>
          <Playground
            code={`<Text bold>Ceci est un texte en gras</Text>`}
            scope={{ Text }}
          />
        </Col>
      </Row>
      <Row gutters>
        <Col xs={12}>
          <Title as="h1">Titre</Title>
          <Text>Affichage d'un titre</Text>
          <Playground
            code={`<Title>Ceci est un titre</Title>`}
            scope={{ Title }}
          />
        </Col>
        <Col xs={12}>
          <Title as="h2">Petit titre</Title>
          <Text>Tailles disponibles : xs, sm, md, lg et xl</Text>
          <Playground
            code={`<Title look="xs">Ceci est un petit titre</Title>`}
            scope={{ Title }}
          />
        </Col>
        <Col xs={12}>
          <Title as="h2">Titre en tag "h5"</Title>
          <Text>Tags disponibles: h1, h2, h3, h4, h5 et h6. Défaut: h1</Text>
          <Playground
            code={`<Title as="h5">Ceci est un h5</Title>`}
            scope={{ Title }}
          />
        </Col>
      </Row>
    </Container>
  );
}
