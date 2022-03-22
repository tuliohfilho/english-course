import { BaseSyntheticEvent } from "react";
import { Title } from "../../components";

import {
  Wrapper,
  CardContainer,
  CardPronoun,
  CardTitle,
  CardContent,
} from "./styles";

type Props = {
  data: Array<PronounType>;
  setPronounType(type: PronounType): void;
};

const Pronouns = ({ data, setPronounType }: Props) => {
  const setType = (e: BaseSyntheticEvent, type: PronounType) => {
    e.preventDefault();

    setPronounType(type);
  };

  return (
    <Wrapper>
      <Title
        title="Pronouns"
        subTitle="Os pronomes são palavras que substituem ou acompanham os substantivos."
      />
      <CardContainer>
        {data.map((item) => (
          <CardPronoun key={item.id}>
            <CardTitle>
              <h2>{item.title}</h2>
              <h4>{item.description}</h4>
            </CardTitle>
            <CardContent>
              <span>
                <a href="/" onClick={(e) => setType(e, item)}>
                  Quer saber mais?
                </a>
              </span>
            </CardContent>
          </CardPronoun>
        ))}
      </CardContainer>
    </Wrapper>
  );
};

export default Pronouns;
