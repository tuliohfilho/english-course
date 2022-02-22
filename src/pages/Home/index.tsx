import { Subtitle, Title, Wrapper } from "./styles";

import teacher from "../../assets/svg/home_logo.svg";

const Home = () => {
  return (
    <Wrapper>
      <Title>
        Welcome to the <span>English Course</span>
      </Title>
      <Subtitle>Start learning this amazing language now!</Subtitle>
      <img src={teacher} alt="Teacher" />
    </Wrapper>
  );
};

export default Home;
