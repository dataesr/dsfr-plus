import { Text, Breadcrumb, Col, Container, Link, Select, SelectOption, Row, Title } from '@dataesr/react-dsfr';
import Playground from '../../components/Playground';

const single = `
  <Select disabledKeys={["red"]} aria-label="Select a color">
    <SelectOption color="orange-terre-battue" startContent={<span className="fr-mr-3v fr-icon--lg fr-icon-account-circle-fill fr-text-action-high--red-marianne" />} description="Couleur rouge" key="red">Red</SelectOption>
    <SelectOption color="green-emeraude" startContent={<span className="fr-mr-3v fr-icon--lg fr-icon-account-circle-fill fr-text-action-high--green-emeraude" />} description="Couleur verte" key="green">Green</SelectOption>
    <SelectOption color="blue-cumulus" startContent={<span className="fr-mr-3v fr-icon--lg fr-icon-account-circle-fill fr-text-action-high--blue-france" />} description="Couleur bleue" key="blue">Blue</SelectOption>
  </Select>
`

export function Selects() {
  return (
    <Container fluid className="fr-mb-5w">
      <Row>
        <Breadcrumb>
          <Link href="/">Accueil</Link>
          <Link href="/composants">Composants</Link>
          <Link>Select</Link>
        </Breadcrumb>
      </Row>
      <Row gutters>
        <Col xs={12}>
          <Title as="h1">Select</Title>
          <Text>
            Composant Select
          </Text>
          <Playground code={single} scope={{ Select, SelectOption }} defaultShowCode />
        </Col>

      </Row>
    </Container>
  )
}