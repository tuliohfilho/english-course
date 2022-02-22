import { Wrapper, CustomType, ColorType } from "./styles";

type Props = {
  color?: ColorType;
  customClass?: CustomType;
  children?: React.ReactNode;
};

const Card = ({ color = "blue", children, customClass }: Props) => {
  return (
    <Wrapper color={color} customClass={customClass}>
      {children}
    </Wrapper>
  );
};

export default Card;
