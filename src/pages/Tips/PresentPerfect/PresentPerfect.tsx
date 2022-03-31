import { Wrapper, CardContainer, CardTitle } from "./styles";

import { Card } from "../../../components";

type Props = {
  data: Array<PresentPerfectType>;
};

const PresentPerfect = ({ data }: Props) => {
  const renderItem = ({ id, verb, subject, auxiliaryVerb }: PresentPerfect) => {
    return (
      <p key={id}>
        <span>{subject}</span>
        <b>{auxiliaryVerb}</b>
        <span>{verb}</span>
      </p>
    );
  };

  const renderCardContent = ({
    title,
    description,
    presentPerfects,
  }: PresentPerfectType) => {
    return (
      <Card>
        <CardTitle>
          <h2>{title}</h2>
          <h4>
            {description && description.split(".").map((text) => <p>{text}</p>)}
          </h4>
        </CardTitle>
        {presentPerfects && presentPerfects.map(renderItem)}
      </Card>
    );
  };

  return (
    <Wrapper>
      <h3>Present Perfect Forms</h3>
      <CardContainer>{data && data.map(renderCardContent)}</CardContainer>
    </Wrapper>
  );
};

export default PresentPerfect;
