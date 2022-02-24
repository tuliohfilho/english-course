import { Content, Subtitle, Wrapper } from "./styles";

type Props = {
  title?: string;
  subTitle?: string;
};

const Title = ({ title, subTitle }: Props) => {
  return (
    <Wrapper>
      {title && <Content>{title}</Content>}
      {subTitle && <Subtitle>{subTitle}</Subtitle>}
    </Wrapper>
  );
};

export default Title;
