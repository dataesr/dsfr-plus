import { Text, Breadcrumb, Col, Container, Link, Listbox, ListboxItem, ListboxSection, Row, Title } from '@dataesr/dsfr-plus';
import Playground from '../../components/Playground';

const dynamic = `
() => {
  const options = [
    { id: 1, name: 'Aardvark' },
    { id: 2, name: 'Cat' },
    { id: 3, name: 'Dog' },
    { id: 4, name: 'Kangaroo' },
    { id: 5, name: 'Koala' },
    { id: 6, name: 'Penguin' },
    { id: 7, name: 'Snake' },
    { id: 8, name: 'Turtle' },
    { id: 9, name: 'Wombat' }
  ];
  return (
    <Listbox label="Animals" items={options} selectionMode="single">
      {(item) => <ListboxItem description="i'm a link" href="#">{item.name}</ListboxItem>}
    </Listbox>
  );
}
`
const sections = `
() => {
  const options = [
    {
      name: 'Australian', children: [
        { id: 2, name: 'Koala' },
        { id: 3, name: 'Kangaroo' },
        { id: 4, name: 'Platypus' }
      ]
    },
    {
      name: 'American', children: [
        { id: 6, name: 'Bald Eagle' },
        { id: 7, name: 'Bison' },
        { id: 8, name: 'Skunk' }
      ]
    }
  ];

  return (
    <Listbox
      label="Pick an animal"
      items={options}
      selectionMode="single"
      color="green-tilleul-verveine"
    >
      {(item) => (
        <ListboxSection showDivider key={item.name} items={item.children} title={item.name}>
          {item => <ListboxItem description="i'm a link">{item.name}</ListboxItem>}
        </ListboxSection>
      )}
    </Listbox>
  );
}
`

const single = `
  <Listbox label="Alignment" selectionMode="single">
    <ListboxItem showDivider description="A small description">Left</ListboxItem>
    <ListboxItem showDivider description="A small description">Middle</ListboxItem>
    <ListboxItem description="A small description">Right</ListboxItem>
  </Listbox>
`
const multiple = `
  <Listbox label="Alignment" selectionMode="multiple">
    <ListboxItem showDivider description="A small description">Left</ListboxItem>
    <ListboxItem showDivider description="A small description">Middle</ListboxItem>
    <ListboxItem description="A small description">Right</ListboxItem>
  </Listbox>
`

export function Listboxes() {
  return (
    <Container fluid className="fr-mb-5w">
      <Row>
        <Breadcrumb>
          <Link href="/">Accueil</Link>
          <Link href="/composants">Composants</Link>
          <Link>Listbox</Link>
        </Breadcrumb>
      </Row>
      <Row gutters>
        <Col xs={12}>
          <Title as="h1">Listbox</Title>
          <Text>
            Un composant respectant les comportements et l'accessibilité pour un rôle listbox, qui permet d'afficher une liste,
            pour laquelles l'utilisateur peut faire une selection d'une ou plusieurs options.
          </Text>
          <Playground code={single} scope={{ Listbox, ListboxItem, ListboxSection }} defaultShowCode />
        </Col>
        <Col xs={12}>
          <Title as="h2" look="h4">Séléction multiple</Title>
          <Playground code={multiple} scope={{ Listbox, ListboxItem, ListboxSection }} defaultShowCode />
        </Col>
        <Col xs={12}>
          <Title as="h2" look="h4">Dynamique</Title>
          <Playground code={dynamic} scope={{ Listbox, ListboxItem, ListboxSection }} defaultShowCode />
        </Col>
        <Col xs={12}>
          <Title as="h2" look="h4">Avec section</Title>
          <Text>Les souslistes doivent être dans une clé children</Text>
          <Playground code={sections} scope={{ Listbox, ListboxItem, ListboxSection }} defaultShowCode />
        </Col>
      </Row>
    </Container>
  )
}