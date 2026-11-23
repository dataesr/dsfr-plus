import {
  Badge, Breadcrumb, Col, Container, Link, Row, Tag, Text, Tile, Title,
} from '@dataesr/dsfr-plus';

import cityHall from '@gouvfr/dsfr/dist/artwork/pictograms/buildings/city-hall.svg?no-inline';
import documentDownload from '@gouvfr/dsfr/dist/artwork/pictograms/document/document-download.svg?no-inline';
import internet from '@gouvfr/dsfr/dist/artwork/pictograms/digital/internet.svg?no-inline';

import { Code } from '../../components/Code';
import Playground from '../../components/Playground';

const scope = { Badge, Col, Row, Tag, Tile, cityHall, documentDownload, internet };

const usage = `import { Col, Row, Tile } from '@dataesr/dsfr-plus';

<Row gutters>
  <Col xs={12} md={4}>
    <Tile
      title="Intitulé de la tuile"
      href="/ma-page"
      description="Description (optionnelle)"
      detail="Détail (optionnel)"
      pictogram="/artwork/pictograms/buildings/city-hall.svg"
    />
  </Col>
</Row>`;

const basic = `
<Row gutters>
  <Col xs={12} md={4}>
    <Tile title="Intitulé de la tuile" href="#" description="Description (optionnelle)" detail="Détail (optionnel)" pictogram={cityHall} />
  </Col>
  <Col xs={12} md={4}>
    <Tile title="Intitulé de la tuile" href="#" detail="Détail (optionnel)" pictogram={cityHall}>
      <Badge color="purple-glycine">Je suis un badge</Badge>
    </Tile>
  </Col>
  <Col xs={12} md={4}>
    <Tile title="Intitulé de la tuile" href="#" detail="Détail (optionnel)" pictogram={cityHall}>
      <Tag>Je sui un  tag</Tag>
    </Tile>
  </Col>
</Row>
`;

const sizes = `
<Row gutters>
  <Col xs={12} md={3}>
    <Tile size="sm" title="Tuile SM" href="#" detail="Détail (optionnel)" pictogram={cityHall} />
  </Col>
  <Col xs={12} md={4}>
    <Tile title="Tuile MD" href="#" detail="Détail (optionnel)" pictogram={cityHall} />
  </Col>
</Row>
`;

const orientation = `
<Row gutters>
  <Col xs={12} md={6}>
    <Tile horizontal title="Tuile horizontale" href="#" description="Description (optionnelle)" detail="Détail (optionnel)" pictogram={cityHall} />
  </Col>
  <Col xs={12} md={6}>
    <Tile horizontal verticalFrom="md" title="Horizontale puis verticale à partir de MD" href="#" detail="Détail (optionnel)" pictogram={cityHall} />
  </Col>
</Row>
`;

const variants = `
<Row gutters>
  <Col xs={12} md={3}>
    <Tile variant="grey" title="Fond gris" href="#" pictogram={cityHall} />
  </Col>
  <Col xs={12} md={3}>
    <Tile variant="no-background" title="Sans fond" href="#" pictogram={cityHall} />
  </Col>
  <Col xs={12} md={3}>
    <Tile variant="no-border" title="Sans bordure" href="#" pictogram={cityHall} />
  </Col>
  <Col xs={12} md={3}>
    <Tile variant="shadow" title="Ombre portée" href="#" pictogram={cityHall} />
  </Col>
</Row>
`;

const links = `
<Row gutters>
  <Col xs={12} md={3}>
    <Tile noIcon title="Sans icône" href="#" pictogram={cityHall} />
  </Col>
  <Col xs={12} md={3}>
    <Tile target="_blank" title="Lien externe" href="https://www.systeme-de-design.gouv.fr" pictogram={internet} />
  </Col>
  <Col xs={12} md={3}>
    <Tile disabled title="Lien désactivé" href="#" pictogram={cityHall} />
  </Col>
  <Col xs={12} md={3}>
    <Tile title="Sans lien" detail="Tuile non cliquable" pictogram={cityHall} />
  </Col>
</Row>
`;

const download = `
<Row gutters>
  <Col xs={12} md={6}>
    <Tile download title="Télécharger le document XX" href="#" detail="PDF - 91,91 Ko" pictogram={documentDownload} />
  </Col>
</Row>
`;

const button = `
<Row gutters>
  <Col xs={12} md={4}>
    <Tile title="Intitulé de la tuile" onClick={() => alert('Clic sur la tuile')} detail="J'ai fais un truc!" pictogram={cityHall} />
  </Col>
</Row>
`;

export function Tiles() {
  return (
    <Container fluid className="fr-mb-5w">
      <Row>
        <Breadcrumb>
          <Link href="/">Accueil</Link>
          <Link href="/composants">Composants</Link>
          <Link>Tile - Tuile</Link>
        </Breadcrumb>
      </Row>
      <Row gutters>
        <Col xs={12}>
          <Title as="h1">Tile - Tuile</Title>
          <Text>
            La tuile est un raccourci vers une page de contenu. Elle n'est jamais isolée :
            on l'utilise en liste ou en collection de tuiles de même structure, dans la grille.
          </Text>
          <Code code={usage} />
        </Col>
        <Col xs={12}>
          <Title as="h2" look="h4">Contenu</Title>
          <Text>
            Seul le <code>title</code> est obligatoire. <code>description</code>, <code>detail</code> et{' '}
            <code>pictogram</code> (l'adresse d'un pictogramme du DSFR) sont optionnels.
            Les enfants de la tuile (badges ou tags, jusqu'à 4) s'affichent au-dessus du titre.
            Avec <code>href</code>, toute la tuile devient cliquable.
          </Text>
          <Playground code={basic} scope={scope} defaultShowCode />
        </Col>
        <Col xs={12}>
          <Title as="h2" look="h4">Taille</Title>
          <Text><code>size="sm"</code> pour une petite tuile, sur 2 à 4 colonnes. Par défaut, la tuile MD occupe 3 à 6 colonnes.</Text>
          <Playground code={sizes} scope={scope} />
        </Col>
        <Col xs={12}>
          <Title as="h2" look="h4">Orientation</Title>
          <Text>
            <code>horizontal</code> place le pictogramme à gauche, à préférer pour les titres longs.{' '}
            <code>verticalFrom="md"</code> ou <code>"lg"</code> repasse la tuile en vertical à partir de ce point de rupture.
          </Text>
          <Playground code={orientation} scope={scope} />
        </Col>
        <Col xs={12}>
          <Title as="h2" look="h4">Variantes</Title>
          <Text><code>variant</code> : <code>grey</code>, <code>no-background</code>, <code>no-border</code> ou <code>shadow</code>.</Text>
          <Playground code={variants} scope={scope} />
        </Col>
        <Col xs={12}>
          <Title as="h2" look="h4">Liens</Title>
          <Text>
            <code>noIcon</code> retire la flèche. Avec <code>target="_blank"</code>, l'icône de lien externe est obligatoire
            et le titre « - nouvelle fenêtre » est ajouté (modifiable avec <code>newWindowLabel</code>).{' '}
            <code>disabled</code> désactive le lien. Sans <code>href</code>, la tuile n'est pas cliquable.
          </Text>
          <Playground code={links} scope={scope} />
        </Col>
        <Col xs={12}>
          <Title as="h2" look="h4">Téléchargement</Title>
          <Text>
            Avec <code>download</code>, le titre commence par « Télécharger » et le <code>detail</code> est
            obligatoire : format, poids et langue si elle diffère de la page.
          </Text>
          <Playground code={download} scope={scope} />
        </Col>
        <Col xs={12}>
          <Title as="h2" look="h4">Action</Title>
          <Text>Avec <code>onClick</code> à la place de <code>href</code>, le titre devient un bouton.</Text>
          <Playground code={button} scope={scope} />
        </Col>
        <Col xs={12}>
          <Title as="h2" look="h4">Accessibilité</Title>
          <ul>
            <li>Le titre est un <code>h3</code> par défaut. Adaptez-le à la page avec <code>titleAs</code>.</li>
            <li>Le pictogramme est décoratif, il est masqué aux lecteurs d'écran.</li>
            <li>Le titre doit être explicite : c'est lui que les lecteurs d'écran annoncent comme lien.</li>
            <li>Si la tuile contient un autre élément cliquable, comme un tag cliquable, ajoutez <code>enlarge={'{false}'}</code>.</li>
          </ul>
          <Text>
            <Link
              href="https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/tuile"
              isSimple
              rel="noreferrer noopener"
              target="_blank"
            >
              Voir la documentation officielle du DSFR
            </Link>
          </Text>
        </Col>
      </Row>
    </Container>
  );
}
