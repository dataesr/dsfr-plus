import { Container, Title, Text, Row, Col, Breadcrumb, Link } from '@dataesr/dsfr-plus';

import { Code } from '../../components/Code';

export function QuickStart() {
  return (
    <Container fluid className="fr-mb-5w">
      <Row>
        <Breadcrumb>
          <Link href="/">Accueil</Link>
          <Link href="/composants">Composants</Link>
          <Link aria-current="page">Démarrage rapide</Link>
        </Breadcrumb>
      </Row>
      <Row gutters>
        <Col xs={12}>
          <Title as="h1">Démarrage rapide</Title>
          <Text>Installer la librarie en utilisant votre manager de paquets favori:</Text>
          <Code code="npm install @dataesr/dsfr-plus" />
          <Code code="yarn add @dataesr/dsfr-plus" />
          <Code code="pnpm install @dataesr/dsfr-plus" />
        </Col>
      </Row>
    </Container>
  )
}
