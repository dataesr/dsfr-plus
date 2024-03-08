import { Breadcrumb, Container, Title, Text, Row, Col, Link } from '@dataesr/react-dsfr';
import Playground from '../../components/Playground';

const code = `
<TagInput tags={["tag_01"]} />
`;

export function Tags() {
  return (
    <Container fluid className="fr-mb-5w">
      <Row>
        <Breadcrumb>
          <Link href="/">Accueil</Link>
          <Link href="/composants">Composants</Link>
          <Link>TagInput - TagInput</Link>
        </Breadcrumb>
      </Row>
      <Row gutters>
        <Col xs={12}>
          <Title as="h1">TagInput - TagInput</Title>
          <Text>
            Le tag catégorise/classe/organise les contenus à l'aide de mots-clés. Il aide les utilisateurs à rechercher et à trouver facilement une information.
          </Text>
          <Playground code={code} scope={{ TagInput }} defaultShowCode />
        </Col>
      </Row>
    </Container>
  )
}