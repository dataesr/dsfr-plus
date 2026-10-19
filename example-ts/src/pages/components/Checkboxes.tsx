import {
  Checkbox,
  Fieldset,
  Container,
  Title,
  Text,
  Row,
  Col,
  Breadcrumb,
  Link,
} from "@dataesr/dsfr-plus";
import Playground from "../../components/Playground";
import { useState } from "react";

const checkboxData = [
  { value: "1", label: "Checkbox 1", hint: "Je suis la valeur numéro 1" },
  { value: "2", label: "Checkbox 2", hint: "Je suis la valeur numéro 2" },
  { value: "3", label: "Checkbox 3", hint: "Je suis la valeur numéro 3" },
];

const useCheckboxState = (initialState: boolean) => {
  const [isChecked, setIsChecked] = useState(initialState);
  const handleChange = (event: { target: { checked: boolean } }) => {
    setIsChecked(event.target.checked);
  };
  return { isChecked, handleChange };
};

export function Checkboxes() {
  const checkboxStates = checkboxData.map((_, index) =>
    useCheckboxState(index === 0 || index === 2)
  );

  return (
    <Container fluid className="fr-mb-5w">
      <Row>
        <Breadcrumb>
          <Link href="/">Accueil</Link>
          <Link href="/composants">Composants</Link>
          <Link aria-current="page">Case à cocher - Checkbox</Link>
        </Breadcrumb>
      </Row>
      <Row gutters>
        <Col xs={12}>
          <Title as="h1">Case à cocher - Checkbox</Title>
          <Text>
            Les cases à cocher permettent à l’utilisateur de sélectionner une ou
            plusieurs options dans une liste.
          </Text>
        </Col>

        {/* Groupe de boutons Checkbox */}
        <Col xs={12}>
          <Title as="h2" look="h4">
            Groupe de boutons Checkbox
          </Title>

          <Playground
            code={`
              <Fieldset
                hint="Moi je suis en succès"
                messageType="valid"
                message="Bien joué !"
                legend="Un groupe de boutons Checkbox"
              >
                ${checkboxData
                  .map(
                    (checkbox, index) => `<Checkbox
                    value="${checkbox.value}"
                    label="${checkbox.label}"
                    checked={${checkboxStates[index].isChecked}}
                    onChange={handleCheckboxChange${checkbox.value}}
                  />`
                  )
                  .join("\n")}
              </Fieldset>
            `}
            scope={{
              Checkbox,
              Fieldset,
              checkboxData,
              handleCheckboxChange1: checkboxStates[0].handleChange,
              handleCheckboxChange2: checkboxStates[1].handleChange,
              handleCheckboxChange3: checkboxStates[2].handleChange,
            }}
          />
        </Col>

        {/* Checkbox avec Hint */}
        <Col xs={12}>
          <Title as="h2" look="h4">
            Checkbox avec Hint
          </Title>

          <Playground
            code={`
              <Fieldset
                hint="Texte d'explication pour tout le champ"
                legend="Un groupe de boutons Checkbox avec des hints"
              >
                ${checkboxData
                  .map(
                    (checkbox, index) => `<Checkbox
                    value="${checkbox.value}"
                    label="${checkbox.label}"
                    checked={${checkboxStates[index].isChecked}}
                    onChange={handleCheckboxChange${checkbox.value}}
                    hint="${checkbox.hint}"
                  />`
                  )
                  .join("\n")}
              </Fieldset>
            `}
            scope={{
              Checkbox,
              Fieldset,
              checkboxData,
              handleCheckboxChange1: checkboxStates[0].handleChange,
              handleCheckboxChange2: checkboxStates[1].handleChange,
              handleCheckboxChange3: checkboxStates[2].handleChange,
            }}
          />
        </Col>

        {/* Checkbox avec Size */}
        <Col xs={12}>
          <Title as="h2" look="h4">
            Checkbox avec Taille
          </Title>

          <Playground
            code={`
              <Fieldset
                hint="Les boutons Checkbox avec une taille spécifique"
                legend="Un groupe de boutons Checkbox avec petite taille"
              >
                ${checkboxData
                  .map(
                    (checkbox, index) => `<Checkbox
                    value="${checkbox.value}"
                    label="${checkbox.label}"
                    checked={${checkboxStates[index].isChecked}}
                    onChange={handleCheckboxChange${checkbox.value}}
                    size="sm"
                  />`
                  )
                  .join("\n")}
              </Fieldset>
            `}
            scope={{
              Checkbox,
              Fieldset,
              checkboxData,
              handleCheckboxChange1: checkboxStates[0].handleChange,
              handleCheckboxChange2: checkboxStates[1].handleChange,
              handleCheckboxChange3: checkboxStates[2].handleChange,
            }}
          />
        </Col>
      </Row>
    </Container>
  );
}
