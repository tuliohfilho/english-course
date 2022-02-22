import { CustomType, Wrapper } from "./styles";

type Props = {
  customClass?: CustomType;
  children?: React.ReactNode;
};

function Index({ children, customClass }: Props) {
  return <Wrapper customClass={customClass}>{children}</Wrapper>;
}

export default Index;
