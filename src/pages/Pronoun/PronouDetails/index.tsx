import { useEffect, useState } from "react";

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
  SizeType,
} from "./styles";

const PronounDetails = () => {
  const { pronounCategory, pronounsTypes } = usePronouns();
  const [size, setSize] = useState<SizeType>("small");

  useEffect(() => {
    if (pronounsTypes.length) {
      const maxSubjectLength = pronounsTypes
        .map((t) => t.pronouns)
        .reduce((acc, value) => acc.concat(value))
        .reduce((acc, value) =>
          acc.subject.length > value.subject.length ? acc : value
        ).subject.length;

      setSize("small");
      if (maxSubjectLength >= 30) setSize("large");
      else if (maxSubjectLength > 10) setSize("medium");
    }
  }, [pronounsTypes]);

  const renderCardContent = ({ id, subject, translations }: Pronoun) => {
    return (
      <List key={id}>
        <ItemSubject size={size}>{subject}:</ItemSubject>
        <ItemTranslation>{translations.join(", ")}</ItemTranslation>
      </List>
    );
  };

  const renderCardType = ({
    id,
    pronouns,
    title,
    description,
  }: PronounType) => {
    return (
      <CardType key={id}>
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
