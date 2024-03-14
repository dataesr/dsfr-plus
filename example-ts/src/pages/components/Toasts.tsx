import { Breadcrumb, Button, Col, Container, Link, Row, Text, Title, useToast } from '@dataesr/dsfr-plus';

import Playground from '../../components/Playground';

const toaster = `
<Button
  onClick={toastExport}
  size="sm"
>
  Test successfull toast
</Button>
`;

export function Toasts() {
  const { toast } = useToast();

  const toastExport = () => {
    toast({
      description: 'Here goes the description',
      id: 'toast-example',
      title: 'Title',
      toastType: 'success',
    });
  };

  return (
    <Container fluid className="fr-mb-5w">
      <Row>
        <Breadcrumb>
          <Link href="/">Accueil</Link>
          <Link href="/composants">Composants</Link>
          <Link>Toaster - Toaster</Link>
        </Breadcrumb>
      </Row>
      <Row gutters>
        <Col xs={12}>
          <Title as="h1">Toaster - Toaster</Title>
          <Text>
            Message éphémère pouvant afficher une error, un warning, un succès ou encore une information.
          </Text>
          <Playground code={toaster} scope={{ Button, toastExport }} defaultShowCode />
        </Col>
      </Row>
    </Container>
  )
}