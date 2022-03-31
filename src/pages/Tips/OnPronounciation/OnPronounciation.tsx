import {
  Wrapper,
  CardContainer,
  CardTitle,
  CardContent,
  List,
  Item,
} from "./styles";

import { Player } from "../../../components";

type Props = {
  data: Array<OnPronounciationType>;
};

const OnPronounciation = ({ data }: Props) => {
  const renderItem = (item: OnPronounciation) => {
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

  const renderCardContent = ({
    title,
    description,
    onPronounciations,
  }: OnPronounciationType) => {
    return (
      <CardContent>
        <CardTitle>
          <h2>{title}</h2>
          <h4>
            {description && description.split(".").map((text) => <p>{text}</p>)}
          </h4>
        </CardTitle>
        {onPronounciations && onPronounciations.map(renderItem)}
      </CardContent>
    );
  };

  return (
    <Wrapper>
      <h3>On Pronounciation</h3>
      <CardContainer>
        <CardContainer>{data && data.map(renderCardContent)}</CardContainer>
      </CardContainer>
    </Wrapper>
  );
};

export default OnPronounciation;
