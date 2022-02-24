import { Wrapper, CardContainer, Item } from "./styles";

import { Card, Player } from "../../../components";

type Props = {
  data: OnPronounciation;
};

const OnPronounciation = ({ data }: Props) => {
  const { simplePresenteTense, simplePastTense } = data;

  const renderItem = (item: OnPronounciationItem) => {
    const { id, pronounciation, subject, auxiliaryVerb, audioName } = item;

    return (
      <p key={id}>
        <Item maxWidth>
          <b>{auxiliaryVerb}</b>
        </Item>
        <Item>+</Item>
        <Item maxWidth>{subject}</Item>
        <Item>=</Item>
        <Item maxWidth>{pronounciation}</Item>
        <Player context="onPronounciation" audioName={audioName} />
      </p>
    );
  };

  const renderCardContent = (data: OnPronounciationItem[], title: string) => {
    return (
      <Card>
        <h2>{title}</h2>
        {data.map(renderItem)}
      </Card>
    );
  };

  return (
    <Wrapper>
      <h3>On Pronounciation</h3>
      <CardContainer>
        {simplePresenteTense &&
          renderCardContent(simplePresenteTense, "Simple Present Tense")}
        {simplePastTense &&
          renderCardContent(simplePastTense, "Simple Past Tense")}
      </CardContainer>
    </Wrapper>
  );
};

export default OnPronounciation;
