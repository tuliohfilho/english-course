import { Wrapper } from "./styles";

import { Title } from "../../components";

import Pronunons from "./Pronouns";
import OnPronounciation from "./OnPronounciation";
import PresentPerfect from "./PresentPerfect";

function Tips() {
  return (
    <Wrapper>
      <Title title="Tips" subTitle="A lot tips to facilite your learning!" />
      <Pronunons />
      <PresentPerfect />
      <OnPronounciation />
    </Wrapper>
  );
}

export default Tips;
