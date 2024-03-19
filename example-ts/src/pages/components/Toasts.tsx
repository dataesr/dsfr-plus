import { Breadcrumb, Button, Col, Container, Link, Row, Text, Title, useToast } from '@dataesr/dsfr-plus';

import Playground from '../../components/Playground';

const toaster = `
() => {
  const { toast } = useToast();

  let displayToastError = () => { };
  let displayToastSuccess = () => { };
  let displayToastWarning = () => { };

  if (toast) {
    displayToastError = () => {
      toast({
        description: 'Toast - Error - AutoDismissAfter 3 seconds',
        id: 'toast-error',
        title: 'Error',
        type: 'error',
      });
    };

    displayToastSuccess = () => {
      toast({
        autoDismissAfter: 0,
        description: 'Toast - Success - No AutoDismiss',
        id: 'toast-success',
        title: 'Success',
        type: 'success',
      });
    };

    displayToastWarning = () => {
      toast({
        autoDismissAfter: 10000,
        description: 'Toast - Warning - AutoDismissAfter 10 seconds',
        id: 'toast-warning',
        title: 'Warning',
        type: 'warning',
      });
    };
  }

  return (
    <div>
      <div>
        <Button
          className="fr-mb-1w"
          onClick={displayToastError}
          size="sm"
        >
          Test error toast, removed after 3 seconds
        </Button>
      </div>
      <div>
        <Button
          className="fr-mb-1w"
          onClick={(displayToastSuccess)}
          size="sm"
        >
          Test successfull toast, never automatically removed
        </Button>
      </div>
      <div>
        <Button
          onClick={displayToastWarning}
          size="sm"
        >
          Test warning toast, removed after 10 seconds
        </Button>
      </div>
    </div>
  );
  };
`;

export function Toasts() {
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
            Message éphémère pouvant afficher une erreur, un warning, un succès ou encore une information.
          </Text>
          <Playground code={toaster} scope={{ Button, useToast }} defaultShowCode />
        </Col>
      </Row>
    </Container>
  )
}