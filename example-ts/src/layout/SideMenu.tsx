import { SideMenu, SideMenuItem, Link, Container, Row, Col } from '@dataesr/dsfr-plus';
import { Outlet, useLocation } from 'react-router-dom';

import './styles.scss';

export function Side() {
  const { pathname } = useLocation();
  if (!pathname) return null;

  const is = (str: string): boolean => pathname === str;

  return (
    <Container>
      <Row>
        <Col xs={12} md={4}>
          <SideMenu title="" sticky fullHeight className="padded-sidemenu">
            <SideMenuItem
              defaultExpanded={is('/utilisation')}
              title="Utilisation"
            >
              <Link current={is('/utilisation/demarrage-rapide')} href="/utilisation/demarrage-rapide">Démarrage rapide</Link>
            </SideMenuItem>
            <SideMenuItem
              defaultExpanded={is('/composants')}
              title="Composants"
            >
              <Link current={is('/composants/accordion')} href="/composants/accordion">
                Accordion - Accordéon
              </Link>
              <Link current={is('/composants/autocomplete')} href="/composants/autocomplete">
                Autocomplete
              </Link>
              <Link current={is('/composants/alert')} href="/composants/alert">
                Alert - Alerte
              </Link>
              <Link current={is('/composants/badge')} href="/composants/badge">
                Badge - Badge
              </Link>
              <Link current={is('/composants/fil-d-ariane')} href="/composants/fil-d-ariane">
                Breadcrumb - Fil d'Ariane
              </Link>
              <Link current={is('/composants/button')} href="/composants/button">
                Button - Bouton
              </Link>
              <Link current={is('/composants/checkbox')} href="/composants/checkbox">
                Checkbox - Case à cocher
              </Link>
              <Link current={is('/composants/ajout-de-fichier')} href="/composants/ajout-de-fichier">
                FileUpload - Ajout de fichier
              </Link>
              <Link current={is('/composants/en-tete')} href="/composants/en-tete">
                Header - En-tête
              </Link>
              <Link current={is('/composants/input')} href="/composants/input">
                Input - Champ de saisie
              </Link>
              <Link current={is('/composants/listbox')} href="/composants/listbox">
                Listbox - Zone de liste
              </Link>
              <Link current={is('/composants/menu-button')} href="/composants/menu-button">
                MenuButton - Bouton de menu
              </Link>
              <Link current={is('/composants/modal')} href="/composants/modal">
                Modal - Modale
              </Link>
              <Link current={is('/composants/notice')} href="/composants/notice">
                Notice - Bandeau d'information importante
              </Link>
              <Link current={is('/composants/radio')} href="/composants/radio">
                Radio - Bouton Radio
              </Link>
              <Link current={is('/composants/select')} href="/composants/select">
                Select - Liste déroulante
              </Link>
              <Link current={is('/composants/segmentedControl')} href="/composants/segmentedControl">
                Segmented control - Contrôle segmenté
              </Link>
              <Link current={is('/composants/menu-lateral')} href="/composants/menu-lateral">
                Sidemenu - Menu latéral
              </Link>
              <Link current={is('/composants/indicateur-d-etape')} href="/composants/indicateur-d-etape">
                Stepper - Indicateur d'étapes
              </Link>
              <Link current={is('/composants/tab')} href="/composants/tab">
                Tab - Onglet
              </Link>
              <Link current={is('/composants/tag')} href="/composants/tag">
                Tag - Tag
              </Link>
              <Link current={is('/composants/tag-input')} href="/composants/tag-input">
                TagInput - TagInput
              </Link>
              <Link current={is('/composants/toast')} href="/composants/toast">
                Toast - Toast
              </Link>
              <Link current={is('/composants/interrupteur')} href="/composants/interrupteur">
                Toggle - Interrupteur
              </Link>
              <Link current={is('/composants/typography')} href="/composants/typography">
                Typography - Typographie
              </Link>
            </SideMenuItem>
          </SideMenu>
        </Col>
        <Col xs={12} md={8} className="fr-pt-6w">
          <Outlet />
        </Col>
      </Row>
    </Container>
  )
}

