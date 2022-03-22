import {
  Wrapper,
  CardContainer,
  CardPronoun,
  CardTitle,
  CardContent,
  List,
  ItemSubject,
  ItemTranslation,
} from "./styles";

type Props = {
  data: Pronoun;
};

const PronounDetails = ({ data }: Props) => {
  const {
    subjectPronoun,
    objectPronoun,
    possessiveAdjective,
    possessivePronoun,
    reflexivePronoun,
  } = data;

  const renderItem = (item: PronounItem) => {
    const { id, subject, translations } = item;

    return (
      <List key={id}>
        <ItemSubject>{subject}:</ItemSubject>
        <ItemTranslation>{translations.join(", ")}</ItemTranslation>
      </List>
    );
  };

  const renderCardContent = (
    data: Array<PronounItem>,
    title: string,
    subtitle: string
  ) => {
    return (
      <CardPronoun>
        <CardTitle>
          <h2>{title}</h2>
          <h4>{subtitle}</h4>
        </CardTitle>
        <CardContent>{data.map(renderItem)}</CardContent>
      </CardPronoun>
    );
  };

  return (
    <Wrapper>
      <h3>
        Os pronomes pessoais são termos que indicam pessoas, lugares e objetos.
      </h3>
      <CardContainer>
        {subjectPronoun &&
          renderCardContent(
            subjectPronoun,
            "Subject Pronoun",
            "Pronomes pessoais do caso reto funcionam como sujeitos."
          )}
        {objectPronoun &&
          renderCardContent(
            objectPronoun,
            "Object Pronoun",
            "Pronomes pessoais do caso oblíquo funcionam como objetos."
          )}
      </CardContainer>
      <h3>
        Os pronomes possessivos em inglês, tal qual no português, indicam que
        algo pertence a alguém ou alguma coisa.
      </h3>
      <CardContainer>
        {possessiveAdjective &&
          renderCardContent(
            possessiveAdjective,
            "Possessive Adjectve",
            "Os pronomes adjetivos atribuírem a determinada palavra a qualidade de ser de algo ou alguém."
          )}
        {possessivePronoun &&
          renderCardContent(
            possessivePronoun,
            "Possessive Pronoun",
            "Os pronomes substantivos têm a função de substituir o substantivo"
          )}
      </CardContainer>

      <h3>
        Os pronomes reflexivos são aqueles que aparecem após o verbo,
        concordando sempre com o sujeito da oração
      </h3>
      <CardContainer>
        {reflexivePronoun &&
          renderCardContent(
            reflexivePronoun,
            "Reflexive Pronoun",
            "Os pronomes reflexivos são aqueles que aparecem após o verbo, concordando sempre com o sujeito da oração"
          )}
      </CardContainer>
    </Wrapper>
  );
};

export default PronounDetails;
