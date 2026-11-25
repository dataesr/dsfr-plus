import { Text, Breadcrumb, Col, Container, Link, Select, SelectOption, Row, Title } from '@dataesr/dsfr-plus';

import Playground from '../../components/Playground';

const single = `
  <Select disabledKeys={["red"]} aria-label="Select a color">
    <SelectOption color="orange-terre-battue" startContent={<span className="fr-mr-3v fr-icon--lg fr-icon-account-circle-fill fr-text-action-high--red-marianne" />} description="Couleur rouge" key="red">Red</SelectOption>
    <SelectOption color="green-emeraude" startContent={<span className="fr-mr-3v fr-icon--lg fr-icon-account-circle-fill fr-text-action-high--green-emeraude" />} description="Couleur verte" key="green">Green</SelectOption>
    <SelectOption color="blue-cumulus" startContent={<span className="fr-mr-3v fr-icon--lg fr-icon-account-circle-fill fr-text-action-high--blue-france" />} description="Couleur bleue" key="blue">Blue</SelectOption>
  </Select>
`

const required = `
  <Select label="Fruits" buttonLabel="Sélectionner un fruit" isRequired>
    <SelectOption key="banane">Banane</SelectOption>
    <SelectOption key="pomme">Pomme</SelectOption>
  </Select>
`

const error = `
  <Select
    label="Fruits"
    buttonLabel="Sélectionner un Fruits"
    isRequired
    messageType="error"
    message="Sélectionnez un Fruits"
  >
    <SelectOption key="banane">Banane</SelectOption>
    <SelectOption key="pomme">Pomme</SelectOption>
  </Select>
`

const valid = `
  <Select
    label="Fruits"
    buttonLabel="Sélectionner un Fruits"
    defaultSelectedKey="Fruits"
    messageType="valid"
    message="Trés bon choix!"
  >
    <SelectOption key="banane">Banane</SelectOption>
    <SelectOption key="pomme">Pomme</SelectOption>
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
        <Col xs={12}>
          <Title as="h2" look="h4">Champ obligatoire</Title>
          <Text>
            Avec <code>isRequired</code>, un astérisque est ajouté au libellé.
          </Text>
          <Playground code={required} scope={{ Select, SelectOption }} defaultShowCode />
        </Col>
        <Col xs={12}>
          <Title as="h2" look="h4">Message d'erreur ou de succès</Title>
          <Text>
            Comme pour <code>TextInput</code>, <code>messageType</code> donne la couleur
            (<code>"error"</code> ou <code>"valid"</code>) et <code>message</code> le texte affiché sous la liste.
          </Text>
          <Playground code={error} scope={{ Select, SelectOption }} defaultShowCode />
          <Playground code={valid} scope={{ Select, SelectOption }} />
        </Col>
      </Row>
    </Container>
  )
}