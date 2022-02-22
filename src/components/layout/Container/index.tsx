import { CustomType, Wrapper } from "./styles";

type Props = {
  customClass?: CustomType;
  children?: React.ReactNode;
};

const Container = ({ children, customClass, ...rest }: Props) => {
  return (
    <Wrapper {...rest} customClass={customClass}>
      {children}
    </Wrapper>
  );
};

export default Container;
