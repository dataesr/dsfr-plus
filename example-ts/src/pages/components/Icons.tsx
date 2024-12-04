import { Container, Row, Col, Breadcrumb, Link, Title } from '@dataesr/dsfr-plus';

function getCode(icon_string: string, exact: boolean = false): JSX.Element {
  if (exact) {
    return (
      <div>
        <span className={icon_string} aria-hidden="true" />
        <pre> 
          <code>
            {`<span className={icon_string} aria-hidden="true" />`}
          </code>
        </pre>
      </div>
    )
  }
  return (
    <div>
      <span className={`fr-icon-${icon_string}-fill`} aria-hidden="true" />
      <span className={`fr-icon-${icon_string}-line`} aria-hidden="true" />
      <pre> 
        <code>
          {`
          <span className="fr-icon-${icon_string}-fill" aria-hidden="true" />
          <span className="fr-icon-${icon_string}-line" aria-hidden="true" />
          `}
        </code>
      </pre>
    </div>
  )
}

export function Icons() {
  return (
    <Container fluid className="fr-mb-5w">
      <Row>
        <Breadcrumb>
          <Link href="/">Accueil</Link>
          <Link href="/composants">Composants</Link>
          <Link aria-current="page">Alerte - Alert</Link>
        </Breadcrumb>
      </Row>
      <Row>
        <Col>
          <Link href="https://remixicon.com/" target="_blank">RemixIcon</Link>
          <br />
          <Link href="https://www.systeme-de-design.gouv.fr/fondamentaux/icone/" target="_blank">DSFR - Icônes</Link>
        </Col>
      </Row>
      <Row gutters>
        <Col xs={12}>
          <Title as="h1">Icônes - Icons</Title>
          <Title as="h2">Building</Title>
          {getCode("ancient-gate")}
          {getCode("ancient-pavilion")}
          {getCode("bank")}
          {getCode("building")}
          {getCode("community")}
          {getCode("government")}
          {getCode("home-4")}
          {getCode("hospital")}
          {getCode("hotel")}
          {getCode("store")}

          <Title as="h2">Business</Title>
          {getCode("archive")}
          {getCode("attachment")}
          {getCode("award")}
          {getCode("bar-chart-box")}
          {getCode("bookmark")}
          {getCode("briefcase")}
          {getCode("calendar-2")}
          {getCode("calendar-event")}
          {getCode("calendar")}
          {getCode("cloud")}
          {getCode("copyright")}
          {getCode("customer-service")}
          {getCode("flag")}
          {getCode("global")}
          {getCode("line-chart")}
          {getCode("links")}
          {getCode("mail")}
          {getCode("mail-open")}
          {getCode("medal")}
          {getCode("pie-chart-2")}
          {getCode("pie-chart-box")}
          {getCode("printer")}
          {getCode("profil")}
          {getCode("projector-2")}
          {getCode("send-plane")}
          {getCode("slideshow")}
          {getCode("window")}

          <Title as="h2">Communication</Title>
          {getCode("chat-2")}
          {getCode("chat-3")}
          {getCode("chat-check")}
          {getCode("chat-delete")}
          {getCode("chat-poll")}
          {getCode("discuss")}
          {getCode("feedback")}
          {getCode("message-2")}
          {getCode("question-answer")}
          {getCode("questionnaire")}
          {getCode("video-chat")}

          <Title as="h2">Design</Title>
          {getCode("ball-pen")}
          {getCode("brush-3")}
          {getCode("brush")}
          {getCode("contrast")}
          {getCode("crop")}
          {getCode("drag-move-2")}
          {getCode("drop")}
          {getCode("edit-box")}
          {getCode("edit")}
          {getCode("ink-bottle")}
          {getCode("layout-grid")}
          {getCode("mark-pen")}
          {getCode("paint-brush")}
          {getCode("paint")}
          {getCode("palette")}
          {getCode("pantone")}
          {getCode("pen-nib")}
          {getCode("pencil")}
          {getCode("pencil-ruler")}
          {getCode("sip")}
          {getCode("shapes")}
          {getCode("table")}

          <Title as="h2">Development</Title>
          {getCode("bug")}
          {getCode("code-box")}
          {getCode("fr-icon-code-s-slash-line", true)}
          {getCode("cursor")}
          {getCode("git-branch")}
          {getCode("git-commit")}
          {getCode("git-merge")}
          {getCode("git-pull-request")}
          {getCode("git-repository-commits")}
          {getCode("git-repository")}
          {getCode("git-repository-private")}
          {getCode("terminal-box")}
          {getCode("fr-icon-terminal-line", true)}
          {getCode("terminal-window")}

          <Title as="h2">Device</Title>
          {getCode("bluetooth")}
          {getCode("computer")}
          {getCode("dashboard-3")}
          {getCode("database")}
          {getCode("device")}
          {getCode("hard-drive-2")}
          {getCode("mac")}
          {getCode("phone")}
          {getCode("qr-code")}
          {getCode("rss")}
          {getCode("save-3")}
          {getCode("save")}
          {getCode("server")}
          {getCode("smartphone")}
          {getCode("tablet")}
          {getCode("tv")}
          {getCode("wifi")}

          <Title as="h2">Document</Title>
          {getCode("article")}
          {getCode("book-2")}
          {getCode("booklet")}
          {getCode("clipboard")}
          {getCode("draft")}
          {getCode("file-add")}
          {getCode("file-download")}
          {getCode("file")}
          {getCode("file-pdf")}
          {getCode("file-text")}
          {getCode("folder-2")}
          {getCode("newspaper")}
          {getCode("survey")}
          {getCode("todo")}

          <Title as="h2">Editor</Title>
          {getCode("fr-icon-bold", true)}
          {getCode("fr-icon-highlight", true)}
          {getCode("quote")}

          <Title as="h2">Icônes proposées par RemixIcon</Title>
          {getCode("fr-icon-code-view", true)}
          {getCode("fr-icon-font-size", true)}
          {getCode("fr-icon-h-1", true)}
          {getCode("fr-icon-h-2", true)}
          {getCode("fr-icon-h-3", true)}
          {getCode("fr-icon-h-4", true)}
          {getCode("fr-icon-h-5", true)}
          {getCode("fr-icon-h-6", true)}
          {getCode("fr-icon-hashtag", true)}
          {getCode("fr-icon-italic", true)}
          {getCode("fr-icon-link-unlink", true)}
          {getCode("fr-icon-link", true)}
          {getCode("fr-icon-list-ordered", true)}
          {getCode("fr-icon-list-unordered", true)}
          {getCode("fr-icon-question-mark", true)}
          {getCode("fr-icon-separator", true)}
          {getCode("fr-icon-space", true)}
          {getCode("fr-icon-subscript", true)}
          {getCode("fr-icon-superscript", true)}
          {getCode("fr-icon-table-2", true)}
          {getCode("fr-icon-translate-2", true)}
          
          <Title as='h2'>Finance</Title>
          {getCode("bank-card")}
          {getCode("fr-icon-coin-fill", true)}
          {getCode("gift")}
          {getCode("money-euro-box")}
          {getCode("money-euro-circle")}
          {getCode("secure-payment")}
          {getCode("shopping-bag")}
          {getCode("shopping-cart-2")}
          {getCode("trophy")}

          <Title as='h2'>Health</Title>
          {getCode("capsule")}
          {getCode("dislike")}
          {getCode("dossier")}
          {getCode("first-aid-kit")}
          {getCode("hand-sanitizer")}
          {getCode("health-book")}
          {getCode("heart")}
          {getCode("heart-pulse")}
          {getCode("lungs")}
          {getCode("medicine-bottle")}
          {getCode("mental-health")}
          {getCode("microscope")}
          {getCode("psychotherapy")}
          {getCode("pulse")}
          {getCode("stethoscope")}
          {getCode("surgical-mask")}
          {getCode("syringe")}
          {getCode("test-tube")}
          {getCode("thermometer")}
          {getCode("virus")}

          <Title as='h2'>Logos</Title>
          <Title as='h3'>Logos créés par l'équipe DSFR</Title>
          {getCode("dailymotion")}
          {getCode("tiktok")}

          <Title as='h3'>Logos proposés par RemixIcon</Title>
          {getCode("chrome")}
          {getCode("edge")}
          {getCode("facebook-circle")}
          {getCode("firefox")}
          {getCode("github")}
          {getCode("google")}
          {getCode("ie")}
          {getCode("instagram")}
          {getCode("linkedin-box")}
          {getCode("mastodon")}
          {getCode("npmjs")}
          {getCode("remixicon")}
          {getCode("safari")}
          {getCode("slack")}
          {getCode("snapchat")}
          {getCode("telegram")}
          {getCode("twitch")}
          {getCode("twitter-x")}
          {getCode("threads")}
          {getCode("twitter")}
          {getCode("vimeo")}
          {getCode("vuejs")}
          {getCode("whatsapp")}
          {getCode("youtube")}

          <Title as='h2'>Map</Title>
          {getCode("anchor")}
          {getCode("bike")}
          {getCode("bus")}
          {getCode("car")}
          {getCode("caravan")}
          {getCode("charging-pile-2")}
          {getCode("compass-3")}
          {getCode("cup")}
          {getCode("earth")}
          {getCode("france")}
          {getCode("gas-station")}
          {getCode("goblet")}
          {getCode("map-pin-2")}
          {getCode("map-pin-user")}
          {getCode("motorbike")}
          {getCode("passport")}
          {getCode("restaurant")}
          {getCode("road-map")}
          {getCode("sailboat")}
          {getCode("ship-2")}
          {getCode("signal-tower")}
          {getCode("suitcase-2")}
          {getCode("taxi")}
          {getCode("train")}

          <Title as='h2'>Media</Title>
          {getCode("camera")}
          {getCode("clapperboard")}
          {getCode("equalizer")}
          {getCode("film")}
          {getCode("gallery")}
          {getCode("headphone")}
          {getCode("image-add")}
          {getCode("image-edit")}
          {getCode("image")}
          {getCode("live")}
          {getCode("mic")}
          {getCode("music-2")}
          {getCode("notification-3")}
          {getCode("pause-circle")}
          {getCode("play-circle")}
          {getCode("stop-circle")}
          {getCode("volume-down")}
          {getCode("volume-mute")}
          {getCode("volume-up")}

          <Title as='h2'>Other</Title>
          {getCode("leaf")}
          {getCode("lightbulb")}
          {getCode("plant")}
          {getCode("recycle")}
          {getCode("scales-3")}
          {getCode("seedling")}
          {getCode("umbrella")}
          {getCode("accessibility")}
          {getCode("ear-off")}
          {getCode("mental-disabilities")}
          {getCode("sign-language")}
          {getCode("wheelchair")}

          <Title as='h2'>System</Title>
          <Title as='h3'>Icones créés par l'équipe DSFR</Title>
          {getCode("arrow-left-s")}
          {getCode("arrow-right-s")}
          {getCode("error")}
          {getCode("info")}
          {getCode("success")}
          {getCode("warning")}
          {getCode("fr-icon-theme-fill", true)}

          <Title as='h3'>Icones proposés par RemixIcon</Title>
          {getCode("add-circle")}
          {getCode("fr-icon-add-line", true)}
          {getCode("alarm-warning")}
          {getCode("alert")}
          {getCode("arrow-down")}
          {getCode("arrow-down-s")}
          {getCode("arrow-go-back")}
          {getCode("arrow-go-forward")}
          {getCode("arrow-left")}
          {getCode("arrow-right")}
          {getCode("fr-icon-arrow-right-up-line", true)}
          {getCode("arrow-up")}
          {getCode("arrow-up-s")}
          {getCode("fr-icon-check-line", true)}
          {getCode("checkbox-circle")}
          {getCode("checkbox")}
          {getCode("close-circle")}
          {getCode("fr-icon-close-line", true)}
          {getCode("delete")}
          {getCode("download")}
          {getCode("error-warning")}
          {getCode("external-link")}
          {getCode("eye")}
          {getCode("eye-off")}
          {getCode("filter")}
          {getCode("fr-icon-arrow-left-s-first-line", true)}
          {getCode("fr-icon-arrow-left-s-line-double", true)}
          {getCode("fr-icon-arrow-right-s-last-line", true)}
          {getCode("fr-icon-arrow-right-s-line-double", true)}
          {getCode("information")}
          {getCode("lock")}
          {getCode("lock-unlock")}
          {getCode("logout-box-r")}
          {getCode("fr-icon-menu-2-fill", true)}
          {getCode("fr-icon-menu-fill", true)}
          {getCode("more")}
          {getCode("notification-badge")}
          {getCode("question")}
          {getCode("refresh")}
          {getCode("search")}
          {getCode("settings-5")}
          {getCode("shield")}
          {getCode("sort-asc-desc")}
          {getCode("fr-icon-sort-desc-line", true)}
          {getCode("star")}
          {getCode("star-s")}
          {getCode("fr-icon-subtract-line", true)}
          {getCode("thumb-down")}
          {getCode("thumb-up")}
          {getCode("time")}
          {getCode("timer")}
          {getCode("upload-2")}
          {getCode("upload")}
          {getCode("zoom-in")}
          {getCode("zoom-out")}

          <Title as='h2'>User</Title>
          {getCode("account-circle")}
          {getCode("account")}
          {getCode("account-pin-circle")}
          {getCode("admin")}
          {getCode("group")}
          {getCode("parent")}
          {getCode("team")}
          {getCode("user-add")}
          {getCode("user")}
          {getCode("user-heart")}
          {getCode("user-search")}
          {getCode("user-setting")}
          {getCode("user-star")}

          <Title as='h2'>Weather</Title>
          {getCode("cloudy-2")}
          {getCode("flashlight")}
          {getCode("moon")}
          {getCode("fire")}
          {getCode("flood")}
          {getCode("fr-icon-avalanches-fill", true)}
          {getCode("fr-icon-submersion-fill", true)}
          {getCode("heavy-showers")}
          {getCode("snowy")}
          {getCode("sparkling-2")}
          {getCode("temp-cold")}
          {getCode("tornado")}
          {getCode("typhoon")}
          {getCode("windy")}
        </Col>
      </Row>
    </Container>
  )
}