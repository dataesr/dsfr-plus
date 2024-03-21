import { RadioGroup, Radio, Fieldset, Container, Title, Text, Row, Col, Breadcrumb, Link } from '@dataesr/dsfr-plus';
import Playground from '../../components/Playground';

const radio = `
<Radio value="1" name="checker1" label="Radio 1" />
`;
const radioChecked = `
<Radio value="1" name="checker2" label="Radio 1" checked />
`;
const radioRich = `
<Radio
  value="2"
  name="checker3"
  label="Radio 2"
  imageComponent={<img src="/placeholder.1x1.png" alt="placeholder"/>}
/>
`;
const radioRichGroup = `
<Fieldset legend="Un groupe de bouton radio">
  <Radio
    value="1"
    name="checker4"
    label="Radio 1"
    imageComponent={<img src="/placeholder.1x1.png" alt="placeholder"/>}
  />
  <Radio
  checked
    value="2"
    name="checker4"
    label="Radio 2"
    imageComponent={<img src="/placeholder.1x1.png" alt="placeholder"/>}
  />
  <Radio
    value="3"
    name="checker4"
    label="Radio 3"
    imageComponent={<img src="/placeholder.1x1.png" alt="placeholder"/>}
  />
</Fieldset>
`;

const state = `
<Fieldset
  hint="Moi je suis en succès"
  messageType="valid"
  message="Bien joué !"
  legend="Un groupe de bouton radio"
>
  <Radio value="1" name="checker5" label="Radio 1" />
  <Radio value="2" name="checker5" label="Radio 2" />
  <Radio value="3" name="checker5" label="Radio 3" />
</Fieldset>
`;
const stateRich = `
<Fieldset
  hint="Je risque d'être en erreur"
  messageType="error"
  message="Une erreur dans ce champs"
  legend="Un groupe de bouton radio"
>
  <Radio
    value="1"
    name="checker6"
    label="Radio 1"
    imageComponent={{<img src="/placeholder.1x1.png" alt="placeholder"/>}}
  />
  <Radio
    value="2"
    name="checker6"
    label="Radio 2"
    imageComponent={<img src="/placeholder.1x1.png" alt="placeholder"/>}
  />
  <Radio
    value="3"
    name="checker6"
    label="Radio 3"
    imageComponent={<img src="/placeholder.1x1.png" alt="placeholder"/>}
  />
</Fieldset>
`;
const disabled = `
<Fieldset
  disabled
  hint="Je suis pas cliquable"
  legend="Un groupe de bouton radio"
>
  <Radio value="1" name="checker7" label="Radio 1" />
  <Radio value="2" name="checker7" label="Radio 2" />
  <Radio value="3" name="checker7" label="Radio 3" />
</Fieldset>
`;
const disabledRich = `
<Fieldset
  disabled
  hint="Je suis pas cliquable"
  legend="Un groupe de bouton radio"
>
  <Radio
    value="1"
    name="checker8"
    label="Radio 1"
    imageComponent={{<img src="/placeholder.1x1.png" alt="placeholder"/>}}
  />
  <Radio
    value="2"
    name="checker8"
    label="Radio 2"
    imageComponent={<img src="/placeholder.1x1.png" alt="placeholder"/>}
  />
  <Radio
    value="3"
    name="checker8"
    label="Radio 3"
    imageComponent={<img src="/placeholder.1x1.png" alt="placeholder"/>}
  />
</Fieldset>
`;

const hint = `
<Fieldset
  hint="Texte d'explication pour tout le champs"
  legend="Un groupe de bouton radio"
>
  <Radio
    hint="Je suis la valeur numéro 1"
    value="1"
    name="checker9"
    label="Radio 1" />
  <Radio
    hint="Je suis la valeur numéro 2"
    value="2"
    name="checker9"
    label="Radio 2" />
  <Radio
    hint="Je suis la valeur numéro 3"
    value="3"
    name="checker9"
    label="Radio 3" />
</Fieldset>
`;
const hintRich = `
<Fieldset
  hint="Texte d'explication pour tout le champs"
  legend="Un groupe de bouton radio"
>
  <Radio
    hint="Je suis la valeur numéro 1"
    value="1"
    name="checker10"
    label="Radio 1"
    imageComponent={{<img src="/placeholder.1x1.png" alt="placeholder"/>}}
  />
  <Radio
    hint="Je suis la valeur numéro 2"
    value="2"
    name="checker10"
    label="Radio 2"
    imageComponent={<img src="/placeholder.1x1.png" alt="placeholder"/>}
  />
  <Radio
    hint="Je suis la valeur numéro 3"
    value="3"
    name="checker10"
    label="Radio 3"
    imageComponent={<img src="/placeholder.1x1.png" alt="placeholder"/>}
  />
</Fieldset>
`;

const inlineRich = `
<Fieldset isInline hint="Je suis en ligne" legend="Un groupe de bouton radio riches">
  <Radio 
    hint="Je suis la valeur numéro 1"
    value="1"
    name="checker11"
    label="Radio 1"
    imageComponent={{<img src="/placeholder.1x1.png" alt="placeholder"/>}}
  />
  <Radio 
    hint="Je suis la valeur numéro 2"
    value="2"
    name="checker11"
    label="Radio 2"
    imageComponent={<img src="/placeholder.1x1.png" alt="placeholder"/>}
  />
  <Radio 
    hint="Je suis la valeur numéro 3"
    value="3"
    name="checker11"
    label="Radio 3"
    imageComponent={<img src="/placeholder.1x1.png" alt="placeholder"/>}
  />
</Fieldset>
`;
const inline = `
<Fieldset isInline hint="Je suis en ligne" legend="Un groupe de bouton radio">
  <Radio 
    hint="Je suis la valeur numéro 1"
    value="1"
    name="checker12"
    label="Radio 1"
  />
  <Radio 
    hint="Je suis la valeur numéro 2"
    value="2"
    name="checker12"
    label="Radio 2"
  />
  <Radio 
    hint="Je suis la valeur numéro 3"
    value="3"
    name="checker12"
    label="Radio 3"
  />
</Fieldset>
`;
const radios = `
<Fieldset legend="Un groupe de bouton radio">
  <Radio
    value="1"
    name="checker13"
    label="Radio 1"
  />
  <Radio
    value="2"
    name="checker13"
    label="Radio 2"
  />
  <Radio
    value="3"
    name="checker13"
    label="Radio 3"
  />
</Fieldset>
`;
const radioGroup = `
<RadioGroup
  name="radioGroup"
  label="Un groupe de bouton radio"
  hint="Texte d'explication pour tout le champs"
>
  <Radio
    value="1"
    label="Radio 1"
  />
  <Radio
    checked
    value="2"
    label="Radio 2"
  />
</RadioGroup>
`;
const radioGroupInline = `
<RadioGroup
  name="radioGroupInline"
  label="Un groupe de bouton radio affiché sur une ligne"
  hint="Texte d'explication pour tout le champs"
  isInline
>
  <Radio
    value="1"
    label="Radio 1"
  />
  <Radio
    checked
    value="2"
    label="Radio 2"
  />
</RadioGroup>
`;

export function Radios() {
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
          <Title as="h1">Bouton radio - Radio button</Title>
          <Text>
            Les boutons radio permettent à l’utilisateur de sélectionner une seule option dans une liste.
          </Text>
          <Text>
            Le bouton radio ne peut pas être utilisé seul : il faut au minimum 2 options.
            Il est préférable de ne pas sélectionner d’option par défaut pour que le choix de
            l’utilisateur soit conscient (en particulier si le choix est obligatoire).
          </Text>
        </Col>
        <Col xs={12}>
          <Title as="h2" look="h4">Bouton radio simple</Title>
          <Playground code={radio} scope={{ Radio }} defaultShowCode />
        </Col>
        <Col xs={12}>
          <Title as="h2" look="h4">Bouton radio simple checked</Title>
          <Playground code={radioChecked} scope={{ Radio }} defaultShowCode />
        </Col>
        <Col xs={12}>
          <Title as="h2" look="h4">Bouton radio 'riche'</Title>
          <Text>Le bouton radio peut ếtre utilisé en mode `riche`, avec image.
            Cette fonctionalité s'active lorsque vous vous utilisez la propriété `imageComponent`.
            Vous pouvez passer un composant React valide (y compris une balise html <img />)
          </Text>
          <Playground code={radioRich} scope={{ Radio }} defaultShowCode />
        </Col>
        <Col xs={12}>
          <Title as="h2" look="h4">Groupe de boutons radio</Title>
          <Text>
            Comme pour le composant Checkbox, plusieurs bouton radios sont
            regroupé sous un composant `Fieldset`, qui permet de gérer la
            légende ainsi que l'erreur sur le champs.
          </Text>
          <Playground code={radios} scope={{ Radio, Fieldset }} />
          <Playground code={radioRichGroup} scope={{ Radio, Fieldset }} />
        </Col>
        <Col xs={12}>
          <Title as="h2" look="h4">Gestion de l'état</Title>
          <Text>
            Vous dévez gérer l'état du champ directement dans le composant `Fieldset`:
          </Text>
          <Playground code={state} scope={{ Radio, Fieldset }} />
          <Playground code={stateRich} scope={{ Radio, Fieldset }} />
        </Col>
        <Col xs={12}>
          <Title as="h2" look="h4">Avec des texte d'explication</Title>
          <Text>
            Vous pouvez ajouter des textes explicatif dans chaque bouton Radio et dans le Fieldset:
          </Text>
          <Playground code={hint} scope={{ Radio, Fieldset }} />
          <Playground code={hintRich} scope={{ Radio, Fieldset }} />
        </Col>
        <Col xs={12}>
          <Title as="h2" look="h4">Désactivé</Title>
          <Text>
            Appliquez simplement un disabled sur le Fieldset:
          </Text>
          <Playground code={disabled} scope={{ Radio, Fieldset }} />
          <Playground code={disabledRich} scope={{ Radio, Fieldset }} />
        </Col>
        <Col xs={12}>
          <Title as="h2" look="h4">En ligne</Title>
          <Text>
            Vous pouvez ajouter la propriété `isInline`, pour afficher les boutons radios sur une ligne
          </Text>
          <Playground code={inline} scope={{ Radio, Fieldset }} />
          <Playground code={inlineRich} scope={{ Radio, Fieldset }} />
        </Col>
        <Col xs={12}>
          <Title as="h2" look="h4">RadioGroup</Title>
          <Text>
            Ensemble de Radio
          </Text>
          <Playground code={radioGroup} scope={{ Radio, RadioGroup }} />
        </Col>
        <Col xs={12}>
          <Title as="h2" look="h4">RadioGroup en ligne</Title>
          <Text>
            Vous pouvez ajouter la propriété `isInline`, pour afficher les boutons radios sur une ligne
          </Text>
          <Playground code={radioGroupInline} scope={{ Radio, RadioGroup }} />
        </Col>
      </Row>
    </Container>
  )
}