import { CardContainer, Wrapper } from "./styles";

import { Card } from "../../../components";

type Props = {
  data: PresentPerfect;
};

const PresentPerfect = ({ data }: Props) => {
  const { longForm, shortForm } = data;

  const renderItem = (item: PresentPerfectItem) => {
    const { id, verb, subject, auxiliaryVerb } = item;

    return (
      <p key={id}>
        <span>{subject}</span>
        <b>{auxiliaryVerb}</b>
        <span>{verb}</span>
      </p>
    );
  };

  const renderCardContent = (data: PresentPerfectItem[], title: string) => {
    return (
      <Card>
        <h2>{title}</h2>
        {longForm.map(renderItem)}
      </Card>
    );
  };

  return (
    <Wrapper>
      <h3>Present Perfect Forms</h3>

      <CardContainer>
        {longForm && renderCardContent(longForm, "Long Form")}
        {shortForm && renderCardContent(shortForm, "Short Form")}
      </CardContainer>
    </Wrapper>
  );
};

export default PresentPerfect;
