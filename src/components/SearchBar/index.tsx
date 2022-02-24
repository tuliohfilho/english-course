import { InputHTMLAttributes } from "react";
import { Wrapper } from "./styles";

type Props = {
  type: string;
  maxWidth?: boolean;
  placeholder: string;
} & InputHTMLAttributes<HTMLInputElement>;

const SearchBar = ({ maxWidth, type, placeholder, ...rest }: Props) => {
  return (
    <Wrapper maxWidth={maxWidth}>
      <input {...rest} type={type} placeholder={placeholder} />
    </Wrapper>
  );
};

export default SearchBar;
