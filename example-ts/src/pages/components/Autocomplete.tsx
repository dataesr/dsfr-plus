import { Text, Breadcrumb, Col, Container, Link, Autocomplete, AutocompleteItem, useAutocompleteList, Row, Title } from '@dataesr/dsfr-plus';

import Playground from '../../components/Playground';

const autocomplete = `
() => {
  const list = useAutocompleteList({
    async load({ signal, filterText }) {
      const res = await fetch(
        "https://swapi.py4e.com/api/people/?search=" + filterText,
        { signal }
      );
      const json = await res.json();
      return { items: json.results };
    }
  });

  return (
    <>
      <Autocomplete
        label="Star Wars Character Lookup"
        items={list.items}
        inputValue={list.filterText}
        onInputChange={list.setFilterText}
        loadingState={list.loadingState}
        menuTrigger="focus"
        size="md"
        onSubmit={(text) => alert(text)}
      >
        {(item) => (
          <AutocompleteItem
            href="#"
            startContent={<span className="fr-mr-3v fr-icon--md fr-icon-user-line" />}
            description="go to page directly"
            key={item.name}
            endContent={item.key === "__default" && <span className="fr-text--sm fr-ml-1v fr-px-3v fr-py-1v"> ⏎ Enter </span>}
            className={item.key === "__default" && "fr-py-2w"}
          >
            {item.name}
          </AutocompleteItem>
        )}
      </Autocomplete >
    </>
  );
}
`
export function Autocompletes() {
  return (
    <Container fluid className="fr-mb-5w">
      <Row>
        <Breadcrumb>
          <Link href="/">Accueil</Link>
          <Link href="/composants">Composants</Link>
          <Link>Autocomplete</Link>
        </Breadcrumb>
      </Row>
      <Row gutters>
        <Col xs={12}>
          <Title as="h1">Autocomplete</Title>
          <Text>
            Autocomplete
          </Text>
          <Playground code={autocomplete} scope={{ Autocomplete, AutocompleteItem, useAutocompleteList }} defaultShowCode />
        </Col>
      </Row>
    </Container>
  )
}