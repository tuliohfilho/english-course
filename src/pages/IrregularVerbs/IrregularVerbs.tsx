import { BaseSyntheticEvent } from "react";

import { CardConainer, CardContent, PlayerConainer, Wrapper } from "./styles";

import { SearchBar, Player, Title } from "../../components";

type Props = {
  data: Array<IrregularVerb>;
  filterVerbs(e: BaseSyntheticEvent): void;
};

const IrregularVerbs = ({ data, filterVerbs }: Props) => {
  return (
    <Wrapper>
      <Title
        title="Irregular Verbs"
        subTitle="Click the play button to listen to the audio"
      />

      <SearchBar
        maxWidth
        type="text"
        placeholder="Serach Bar"
        onChange={filterVerbs}
      />

      <CardConainer>
        {data &&
          data.map((irrVerb) => {
            const {
              id,
              past,
              infinitve,
              translation,
              pastParticiple,
              audioName,
            } = irrVerb;

            return (
              <CardContent key={id}>
                <h2>{infinitve}</h2>
                <p>
                  <b>Simple Past</b>
                </p>
                <p>
                  <span>{past}</span>
                </p>
                <p>
                  <b>Past Participle</b>
                </p>
                <p>
                  <span>{pastParticiple}</span>
                </p>
                <PlayerConainer>
                  <span>({translation})</span>
                  <Player audioName={audioName} context="irregularVerbs" />
                </PlayerConainer>
              </CardContent>
            );
          })}
      </CardConainer>
    </Wrapper>
  );
};

export default IrregularVerbs;
