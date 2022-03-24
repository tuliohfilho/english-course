import { usePronouns } from "../../../hooks/context";

import { Title } from "../../../components";

import {
  Wrapper,
  CardType,
  CardTitle,
  CardContent,
  List,
  ItemSubject,
  ItemTranslation,
} from "./styles";

const PronounDetails = () => {
  const { pronounCategory, pronounsTypes } = usePronouns();

  const renderCardContent = ({ id, subject, translations }: Pronoun) => {
    return (
      <List key={id}>
        <ItemSubject>{subject}:</ItemSubject>
        <ItemTranslation>{translations.join(", ")}</ItemTranslation>
      </List>
    );
  };

  const renderCardType = ({ pronouns, title, description }: PronounType) => {
    return (
      <CardType>
        <CardTitle>
          <h2>{title}</h2>
          <h4>
            {description && description.split(".").map((text) => <p>{text}</p>)}
          </h4>
        </CardTitle>
        <CardContent>{pronouns && pronouns.map(renderCardContent)}</CardContent>
      </CardType>
    );
  };

  return (
    <Wrapper>
      <Title
        title={pronounCategory.title}
        subTitle={pronounCategory.description}
      />

      {pronounsTypes && pronounsTypes.map(renderCardType)}
    </Wrapper>
  );
};

export default PronounDetails;
