import { Wrapper, ColorType } from "./styles";

type Props = {
  color?: ColorType;
  children?: React.ReactNode;
};

const Card = ({ color = "blue", children, ...rest }: Props) => {
  return (
    <Wrapper {...rest} color={color}>
      {children}
    </Wrapper>
  );
};

export default Card;
