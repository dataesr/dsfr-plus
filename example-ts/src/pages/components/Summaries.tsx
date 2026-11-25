import { Breadcrumb, Col, Container, Link, Row, Summary, Text, Title } from '@dataesr/dsfr-plus';
import { useEffect } from 'react';

import { Code } from '../../components/Code';
import Playground from '../../components/Playground';

const usage = `import { Summary } from '@dataesr/dsfr-plus';

<Summary
  links={[
    { label: 'Introduction', href: '#introduction' },
    { label: 'Contexte', href: '#contexte' },
    { label: 'Conclusion', href: '#conclusion' },
  ]}
/>`;

const basic = `
<Summary
  links={[
    { label: 'Par défaut', href: '#par-defaut' },
    { label: 'Avec des sous-sections', href: '#sous-sections' },
    { label: 'Titre du sommaire', href: '#titre' },
    { label: 'Accessibilité', href: '#accessibilite' },
  ]}
/>
`;

const nested = `
<Summary
  links={[
    {
      label: 'Section 1',
      href: '#section-1',
      links: [
        { label: 'Section 1.1', href: '#section-1-1' },
        { label: 'Section 1.2', href: '#section-1-2' },
      ],
    },
    { label: 'Section 2', href: '#section-2' },
  ]}
/>
`;

const english = `
<Summary
  title="Contents"
  titleAs="p"
  links={[
    { label: 'Introduction', href: '#introduction' },
    { label: 'Conclusion', href: '#conclusion' },
  ]}
/>
`;

// Demo only: the HashRouter already uses the "#" of the URL, so we scroll to the target ourselves.
const scrollToTarget = (event: MouseEvent) => {
  const link = (event.target as HTMLElement).closest<HTMLAnchorElement>('.fr-summary a');
  if (!link) return;
  event.preventDefault();
  document.getElementById(link.hash.slice(1))?.scrollIntoView();
};

export function Summaries() {
  useEffect(() => {
    document.addEventListener('click', scrollToTarget);
    return () => document.removeEventListener('click', scrollToTarget);
  }, []);

  return (
    <Container fluid className="fr-mb-5w">
      <Row>
        <Breadcrumb>
          <Link href="/">Accueil</Link>
          <Link href="/composants">Composants</Link>
          <Link>Summary - Sommaire</Link>
        </Breadcrumb>
      </Row>
      <Row gutters>
        <Col xs={12}>
          <Title as="h1">Summary - Sommaire</Title>
          <Text>
            Le sommaire liste les sections d'une page longue, sous forme d'ancres.
            Il se place en haut de la page, juste avant le contenu, et ne reste pas visible au défilement.
          </Text>
          <Code code={usage} />
        </Col>
        <Col xs={12}>
          <Title as="h2" id="par-defaut" look="h4">Par défaut</Title>
          <Text>
            Chaque lien reprend exactement le texte du titre d'une section de la page,
            et son <code>href</code> pointe vers l'<code>id</code> de cette section.
          </Text>
          <Playground code={basic} scope={{ Summary }} defaultShowCode />
        </Col>
        <Col xs={12}>
          <Title as="h2" id="sous-sections" look="h4">Avec des sous-sections</Title>
          <Text>Un lien peut avoir ses propres <code>links</code>, affichés dans une liste imbriquée.</Text>
          <Playground code={nested} scope={{ Summary }} />
        </Col>
        <Col xs={12}>
          <Title as="h2" id="titre" look="h4">Titre du sommaire</Title>
          <Text>
            Le titre est un <code>h2</code> par défaut. Changez son niveau avec <code>titleAs</code>,
            ou utilisez un <code>p</code>. Sur une page dans une autre langue, traduisez-le avec <code>title</code>.
          </Text>
          <Playground code={english} scope={{ Summary }} />
        </Col>
        <Col xs={12}>
          <Title as="h2" id="accessibilite" look="h4">Accessibilité</Title>
          <ul>
            <li>Le sommaire est une navigation, nommée automatiquement par son titre (<code>aria-labelledby</code>).</li>
            <li>Les liens sont dans une liste numérotée, dans l'ordre de la page.</li>
            <li>Gardez le fond gris et l'apparence des liens : ils séparent le sommaire du contenu.</li>
            <li>Ne dépassez pas 8 colonnes de large.</li>
          </ul>
          <Text>
            Attention, le DSFR ne répond pas au critère : 9.3.2
              Dans chaque page web, les informations regroupées visuellement sous forme de liste ordonnée vérifient-elles une de ces conditions ? Test 9.3.2
              La liste utilise les balises HTML ol et li ;
              La liste utilise les attributs WAI-ARIA role="list" et role="listitem".
          </Text>
          <Text>
            <Link
              href="https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/sommaire"
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
