import { Text, Breadcrumb, Col, Container, Link, MenuButton, MenuItem, MenuSection, Row, Title } from '@dataesr/dsfr-plus';

import Playground from '../../components/Playground';

const sections = `
() => {
  const openWindows = [
    {
      name: 'Left Panel',
      id: 'left',
      showDivider: true,
      children: [
        { id: 1, name: 'Final Copy (1)' }
      ]
    },
    {
      name: 'Right Panel',
      id: 'right',
      children: [
        { id: 2, name: 'index.ts' },
        { id: 3, name: 'package.json' },
        { id: 4, name: 'license.txt' }
      ]
    }
  ];
  return (
    <MenuButton placement='start' label="Options" variant="tertiary" icon="more-fill" items={openWindows} onAction={(key) => alert(key)}>
      {section => (
        <MenuSection showDivider={section.showDivider} items={section.children} title={section.name}>
          {item => <MenuItem key={item.id}>{item.name}</MenuItem>}
        </MenuSection>
      )}
    </MenuButton>
  )
}
`
export function Menus() {
  return (
    <Container fluid className="fr-mb-5w">
      <Row>
        <Breadcrumb>
          <Link href="/">Accueil</Link>
          <Link href="/composants">Composants</Link>
          <Link>MenuButton - Bouton de menu</Link>
        </Breadcrumb>
      </Row>
      <Row gutters>
        <Col xs={12}>
          <Title as="h1">MenuButton - Bouton de menu</Title>
          <Playground code={sections} scope={{ MenuButton, MenuItem, MenuSection }} defaultShowCode />
        </Col>
      </Row>
    </Container>
  )
}