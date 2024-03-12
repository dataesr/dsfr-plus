import { Breadcrumb, Col, Container, Link, Row, Text, Title, Toast } from '@dataesr/dsfr-plus';

import Playground from '../../components/Playground';

const toaster = `
<Toast type="error" id="toast" description="description" title="title" autoDismissAfter={1000} />
`;

export function Toasts() {
  return (
    <Container fluid className="fr-mb-5w">
      <Row>
        <Breadcrumb>
          <Link href="/">Accueil</Link>
          <Link href="/composants">Composants</Link>
          <Link>Toaster - Toaster</Link>
        </Breadcrumb>
      </Row>
      <Row gutters>
        <Col xs={12}>
          <Title as="h1">Toaster - Toaster</Title>
          <Text>
            Message éphémère pouvant afficher une error, un warning, un succès ou encore une information.
          </Text>
          <Playground code={toaster} scope={{ Toast }} defaultShowCode />
        </Col>
      </Row>
    </Container>
  )
}