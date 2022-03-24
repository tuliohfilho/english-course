import { BaseSyntheticEvent } from "react";
import { Link } from "react-router-dom";
import { Title } from "../../components";

import {
  Wrapper,
  CardContainer,
  CardCategory,
  CardTitle,
  CardContent,
} from "./styles";

type Props = {
  data: Array<PronounCategory>;
  setPronounCategory(type: PronounCategory): void;
};

const Pronouns = ({ data, setPronounCategory }: Props) => {
  const setType = (e: BaseSyntheticEvent, category: PronounCategory) => {
    e.preventDefault();

    setPronounCategory(category);
  };

  return (
    <Wrapper>
      <Title
        title="Pronouns"
        subTitle="Os pronomes são palavras que substituem ou acompanham os substantivos."
      />
      <CardContainer>
        {data.map((item) => (
          <CardCategory key={item.id}>
            <CardTitle>
              <h2>{item.title}</h2>
              <h4>{item.description}</h4>
            </CardTitle>
            <CardContent>
              <span onClick={(e) => setType(e, item)}>
                <Link to="/pronoun/details">Quer saber mais?</Link>
              </span>
            </CardContent>
          </CardCategory>
        ))}
      </CardContainer>
    </Wrapper>
  );
};

export default Pronouns;
