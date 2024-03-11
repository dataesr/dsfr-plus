import { Breadcrumb, Container, Tag, TagGroup, SelectableTag, DissmissibleTag, Title, Text, Row, Col, Link } from '@dataesr/dsfr-plus';

import Playground from '../../components/Playground';

const tag = `
<TagGroup>
  <Tag color="green-emeraude">Tag</Tag>
  <Tag color="green-emeraude" as="a" href="#">Tag</Tag>
  <DissmissibleTag color="green-emeraude" onClick={() => {}}>Tag</DissmissibleTag>
  <SelectableTag selected={true} color="green-emeraude" onClick={() => {}}>Tag</SelectableTag>
</TagGroup>
`;

export function Tags() {
  return (
    <Container fluid className="fr-mb-5w">
      <Row>
        <Breadcrumb>
          <Link href="/">Accueil</Link>
          <Link href="/composants">Composants</Link>
          <Link>Tag - Tag</Link>
        </Breadcrumb>
      </Row>
      <Row gutters>
        <Col xs={12}>
          <Title as="h1">Tag - Tag</Title>
          <Text>
            Le tag catégorise/classe/organise les contenus à l'aide de mots-clés. Il aide les utilisateurs à rechercher et à trouver facilement une information.
          </Text>
          <Playground code={tag} scope={{ Tag, TagGroup, SelectableTag, DissmissibleTag }} defaultShowCode />
        </Col>
      </Row>
    </Container>
  )
}