import { Wrapper, CardContainer, CardContent, List, Item } from "./styles";

import { Player } from "../../../components";

type Props = {
  data: OnPronounciation;
};

const OnPronounciation = ({ data }: Props) => {
  const { simplePresenteTense, simplePastTense } = data;

  const renderItem = (item: OnPronounciationItem) => {
    const { id, pronounciation, subject, auxiliaryVerb, audioName } = item;

    return (
      <List key={id}>
        <Item maxWidth>
          <b>{auxiliaryVerb}</b>
        </Item>
        <Item>+</Item>
        <Item maxWidth>{subject}</Item>
        <Item>=</Item>
        <Item maxWidth>{pronounciation}</Item>
        <Player context="onPronounciation" audioName={audioName} />
      </List>
    );
  };

  const renderCardContent = (data: OnPronounciationItem[], title: string) => {
    return (
      <CardContent>
        <h2>{title}</h2>
        {data.map(renderItem)}
      </CardContent>
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
