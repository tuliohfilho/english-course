import { SubTitle, Title, Wrapper } from "./styles";

type Props = {
  title?: string;
  subTitle?: string;
};

const Index = ({ title, subTitle }: Props) => {
  return (
    <Wrapper>
      {title && <Title>{title}</Title>}
      {subTitle && <SubTitle>{subTitle}</SubTitle>}
    </Wrapper>
  );
};

export default Index;
