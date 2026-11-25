import {
  Badge, BadgeGroup, Breadcrumb, Button, ButtonGroup, Card, Col, Container, Link, Row, Tag, TagGroup, Text, Title,
} from '@dataesr/dsfr-plus';

import image from '@gouvfr/dsfr/example/img/placeholder.16x9.png?no-inline';

import { Code } from '../../components/Code';
import Playground from '../../components/Playground';

const scope = { Badge, BadgeGroup, Button, ButtonGroup, Card, Col, Row, Tag, TagGroup, image };

const usage = `import { Card, Col, Row } from '@dataesr/dsfr-plus';

<Row gutters>
  <Col xs={12} md={4}>
    <Card
      title="Intitulé de la carte"
      href="/ma-page"
      description="Description (optionnelle)"
      detailEnd="Détail (optionnel)"
      image="/images/illustration.png"
    />
  </Col>
</Row>`;

const basic = `
<Row gutters>
  <Col xs={12} md={4}>
    <Card title="Intitulé de la carte" href="#" description="Description (optionnelle)" detailEnd="Détail (optionnel)" image={image} />
  </Col>
  <Col xs={12} md={4}>
    <Card title="Avec des badges" href="#" detailStart="Détail avec icône" detailStartIcon="warning-fill" image={image}>
      <BadgeGroup>
        <Badge color="purple-glycine">Badge</Badge>
        <Badge color="green-menthe">Badge</Badge>
      </BadgeGroup>
    </Card>
  </Col>
  <Col xs={12} md={4}>
    <Card
      title="Avec des tags"
      href="#"
      image={image}
      imageBadge={<BadgeGroup><Badge color="blue-ecume">Sur l'image</Badge></BadgeGroup>}
    >
      <TagGroup>
        <Tag>Tag</Tag>
        <Tag>Tag</Tag>
      </TagGroup>
    </Card>
  </Col>
</Row>
`;

const sizes = `
<Row gutters>
  <Col xs={12} md={3}>
    <Card size="sm" title="Carte SM" href="#" description="Description" image={image} />
  </Col>
  <Col xs={12} md={4}>
    <Card title="Carte MD" href="#" description="Description" image={image} />
  </Col>
  <Col xs={12} md={5}>
    <Card size="lg" title="Carte LG" href="#" description="Description" image={image} />
  </Col>
</Row>
`;

const orientation = `
<Row gutters>
  <Col xs={12} lg={8}>
    <Card horizontal title="Horizontale, image à 40 %" href="#" description="Description" image={image} />
  </Col>
  <Col xs={12} lg={8}>
    <Card horizontal="half" title="Horizontale, image à 50 %" href="#" description="Description" image={image} />
  </Col>
  <Col xs={12} lg={8}>
    <Card horizontal="tier" title="Horizontale, image à 33 %" href="#" description="Description" image={image} />
  </Col>
</Row>
`;

const ratio = `
<Row gutters>
  <Col xs={12} md={4}>
    <Card imageRatio="1x1" title="Image carrée" href="#" image={image} />
  </Col>
  <Col xs={12} md={4}>
    <Card imageRatio="4x3" title="Image en 4/3" href="#" image={image} imageAlt="Texte alternatif de l'image" />
  </Col>
</Row>
`;

const variants = `
<Row gutters>
  <Col xs={12} md={3}>
    <Card variant="grey" title="Fond gris" href="#" />
  </Col>
  <Col xs={12} md={3}>
    <Card variant="no-background" title="Sans fond" href="#" />
  </Col>
  <Col xs={12} md={3}>
    <Card variant="no-border" title="Sans bordure" href="#" />
  </Col>
  <Col xs={12} md={3}>
    <Card variant="shadow" title="Ombre portée" href="#" />
  </Col>
</Row>
`;

const links = `
<Row gutters>
  <Col xs={12} md={3}>
    <Card noIcon title="Sans icône" href="#" />
  </Col>
  <Col xs={12} md={3}>
    <Card target="_blank" title="Lien externe" href="https://www.systeme-de-design.gouv.fr" />
  </Col>
  <Col xs={12} md={3}>
    <Card disabled title="Lien désactivé" href="#" />
  </Col>
  <Col xs={12} md={3}>
    <Card title="Sans lien" description="Carte non cliquable" />
  </Col>
</Row>
`;

const actions = `
<Row gutters>
  <Col xs={12} md={6}>
    <Card
      title="Intitulé de la carte"
      href="#"
      description="Description"
      image={image}
      actions={
        <ButtonGroup isInlineFrom="lg" isReversed>
          <Button variant="secondary">Libellé</Button>
          <Button>Libellé</Button>
        </ButtonGroup>
      }
    />
  </Col>
</Row>
`;

const download = `
<Row gutters>
  <Col xs={12} md={8}>
    <Card download horizontal title="Télécharger le document XX" href="#" detailEnd="PDF - 48 ko" image={image} />
  </Col>
  <Col xs={12} md={8}>
    <Card download horizontal title="Télécharger le document YY" onClick={() => alert('Téléchargement')} detailEnd="CSV - 12 ko" image={image} />
  </Col>
</Row>
`;

export function Cards() {
  return (
    <Container fluid className="fr-mb-5w">
      <Row>
        <Breadcrumb>
          <Link href="/">Accueil</Link>
          <Link href="/composants">Composants</Link>
          <Link>Card - Carte</Link>
        </Breadcrumb>
      </Row>
      <Row gutters>
        <Col xs={12}>
          <Title as="h1">Card - Carte</Title>
          <Text>
            La carte donne un aperçu d'une page de contenu et y mène. Elle est rarement isolée :
            on l'utilise en liste ou en collection de cartes de même structure, dans la grille.
          </Text>
          <Code code={usage} />
        </Col>
        <Col xs={12}>
          <Title as="h2" look="h4">Contenu</Title>
          <Text>
            Seul le <code>title</code> est obligatoire. Avec <code>href</code>, toute la carte devient cliquable.
            Les enfants de la carte (un groupe de badges ou de tags, jusqu'à 4) s'affichent au-dessus du titre,
            avec <code>detailStart</code>. <code>detailEnd</code> s'affiche en bas.
            Chaque détail peut avoir une icône : <code>detailStartIcon</code> et <code>detailEndIcon</code>.{' '}
            <code>image</code> est l'adresse de l'image, <code>imageBadge</code> un groupe de badges posé dessus.
          </Text>
          <Playground code={basic} scope={scope} defaultShowCode />
        </Col>
        <Col xs={12}>
          <Title as="h2" look="h4">Taille</Title>
          <Text>
            <code>size="sm"</code> sur 3 à 4 colonnes, la carte MD par défaut sur 4 à 6,{' '}
            <code>size="lg"</code> sur 6 à 12.
          </Text>
          <Playground code={sizes} scope={scope} />
        </Col>
        <Col xs={12}>
          <Title as="h2" look="h4">Orientation</Title>
          <Text>
            <code>horizontal</code> place l'image à gauche à partir des écrans moyens ; elle repasse en vertical sur mobile.{' '}
            <code>horizontal="half"</code> donne la moitié de la largeur à l'image, <code>horizontal="tier"</code> un tiers.
          </Text>
          <Playground code={orientation} scope={scope} />
        </Col>
        <Col xs={12}>
          <Title as="h2" look="h4">Image</Title>
          <Text>
            L'image est en 16/9 par défaut. <code>imageRatio</code> change ses proportions, sauf sur une carte horizontale.
            Elle est décorative par défaut (<code>alt</code> vide) ; si elle apporte une information, décrivez-la avec <code>imageAlt</code>.
          </Text>
          <Playground code={ratio} scope={scope} />
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
            <code>disabled</code> désactive le lien. Sans <code>href</code>, la carte n'est pas cliquable.
          </Text>
          <Playground code={links} scope={scope} />
        </Col>
        <Col xs={12}>
          <Title as="h2" look="h4">Zone d'action</Title>
          <Text>
            <code>actions</code> accueille des boutons ou des liens, jusqu'à 4. Seul le titre reste cliquable :
            la carte entière ne l'est plus, sinon on ne pourrait pas cliquer sur les boutons.
          </Text>
          <Playground code={actions} scope={scope} />
        </Col>
        <Col xs={12}>
          <Title as="h2" look="h4">Téléchargement</Title>
          <Text>
            Avec <code>download</code>, le titre commence par « Télécharger » et <code>detailEnd</code> est
            obligatoire : format, poids et langue si elle diffère de la page. Si le fichier est généré par le code,
            utilisez <code>onClick</code> à la place de <code>href</code> : le titre devient un bouton.
          </Text>
          <Playground code={download} scope={scope} />
        </Col>
        <Col xs={12}>
          <Title as="h2" look="h4">Accessibilité</Title>
          <ul>
            <li>Le titre est un <code>h3</code> par défaut. Adaptez-le à la page avec <code>titleAs</code>.</li>
            <li>Le titre doit être explicite : c'est lui que les lecteurs d'écran annoncent comme lien.</li>
            <li>Dans le code, l'image, les badges, les détails et les actions sont placés après le titre.</li>
            <li>Si la carte contient un autre élément cliquable, comme un tag cliquable, ajoutez <code>enlarge={'{false}'}</code>.</li>
          </ul>
          <Text>
            <Link
              href="https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/carte"
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
