import { SegmentedControl, SegmentedElement, Container, Title, Text, Row, Col, Breadcrumb, Link } from '@dataesr/dsfr-plus';
import Playground from '../../components/Playground';

const segmentedControl1 = `
<SegmentedControl
  name="SegmentedControl1"
  label="Légende du contrôle segmenté"
>
  <SegmentedElement
    value="1"
    label="Radio 1"
  />
  <SegmentedElement
    value="2"
    label="Radio 2"
  />
  <SegmentedElement
    value="3"
    label="Radio 3"
  />
</SegmentedControl>
`;

const segmentedControl2 = `
<SegmentedControl
  name="SegmentedControl2"
  label="Légende du contrôle segmenté"
  isVertical
>
  <SegmentedElement
    value="1"
    label="Radio 1"
  />
  <SegmentedElement
    value="2"
    label="Radio 2"
  />
  <SegmentedElement
    value="3"
    label="Radio 3"
  />
</SegmentedControl>
`;

const segmentedControl3 = `
<SegmentedControl
  name="SegmentedControl3"
  label="Légende du contrôle segmenté"
  legendInline
>
  <SegmentedElement
    value="1"
    label="Radio 1"
  />
  <SegmentedElement
    value="2"
    label="Radio 2"
  />
  <SegmentedElement
    value="3"
    label="Radio 3"
  />
</SegmentedControl>
`;

const segmentedControl4 = `
<SegmentedControl
  name="SegmentedControl4"
  label="Légende du contrôle segmenté"
>
  <SegmentedElement
    value="1"
    label="Radio 1"
    icon="fr-fi-eye-line"
  />
  <SegmentedElement
    value="2"
    label="Radio 2"
    icon="fr-fi-eye-line"
  />
  <SegmentedElement
    value="3"
    label="Radio 3"
    icon="fr-fi-eye-line"
  />
</SegmentedControl>
`;


export function SegmentedControls() {
  return (
    <Container fluid className="fr-mb-5w">
      <Row>
        <Breadcrumb>
          <Link href="/">Accueil</Link>
          <Link href="/composants">Composants</Link>
          <Link aria-current="page">Bouton radio - Radio button</Link>
        </Breadcrumb>
      </Row>
      <Row gutters>
        <Col xs={12}>
          <Title as="h1">Contrôle segmenté - Segmented control</Title>
          <Text>
            Le composant "Contrôle segmenté" permet à l'utilisateur de choisir un type de vue parmi plusieurs options d'affichage disponibles, mutuellement exclusives avec une valeur sélectionnée par défaut.
          </Text>
        </Col>
        <Col xs={12}>
          <Title as="h2" look="h4">Boutons radio simple</Title>
          <Playground code={segmentedControl1} scope={{ SegmentedControl, SegmentedElement }} />
        </Col>
        <Col xs={12}>
          <Title as="h2" look="h4">Boutons radio affichés verticalement</Title>
          <Playground code={segmentedControl2} scope={{ SegmentedControl, SegmentedElement }} />
        </Col>
        <Col xs={12}>
          <Title as="h2" look="h4">Légende inline</Title>
          <Playground code={segmentedControl3} scope={{ SegmentedControl, SegmentedElement }} />
        </Col>
        <Col xs={12}>
          <Title as="h2" look="h4">Boutons radio avec icon</Title>
          <Playground code={segmentedControl4} scope={{ SegmentedControl, SegmentedElement }} />
        </Col>
      </Row>
    </Container>
  )
}