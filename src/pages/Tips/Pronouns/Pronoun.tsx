import { Wrapper, CardContainer, CardContent, List, Item } from "./styles";

type Props = {
  data: Pronoun;
};

const Pronoun = ({ data }: Props) => {
  const {
    subjectPronoun,
    objectPronoun,
    possessiveAdjective,
    possessivePronoun,
    reflexivePronoun,
  } = data;

  const renderItem = (item: PronounItem) => {
    const { id, subject, translation } = item;

    return (
      <List key={id}>
        <Item>
          <b>{subject}</b>
        </Item>
        <Item>{translation}</Item>
      </List>
    );
  };
  const renderCardContent = (
    data: Array<PronounItem>,
    title: string,
    subtitle: string
  ) => {
    return (
      <CardContent>
        <h2>{title}</h2>
        <h4>{subtitle}</h4>
        {data.map(renderItem)}
      </CardContent>
    );
  };

  return (
    <Wrapper>
      <h3>Pronouns</h3>
      <CardContainer>
        {subjectPronoun &&
          renderCardContent(
            subjectPronoun,
            "Subject Pronoun",
            "Pronomes pessoais do caso reto"
          )}
        {objectPronoun &&
          renderCardContent(
            objectPronoun,
            "Object Pronoun",
            "Pronomes pessoais do caso oblíquo"
          )}
      </CardContainer>
      <CardContainer>
        {possessiveAdjective &&
          renderCardContent(
            possessiveAdjective,
            "Possessive Adjectve",
            "Pronomes adjetivos"
          )}
        {possessivePronoun &&
          renderCardContent(
            possessivePronoun,
            "Possessive Pronoun",
            "Pronomes possessivos"
          )}
      </CardContainer>
      <CardContainer>
        {reflexivePronoun &&
          renderCardContent(
            reflexivePronoun,
            "Reflexive Pronoun",
            "Pronomes reflexivos"
          )}
      </CardContainer>
    </Wrapper>
  );
};

export default Pronoun;
