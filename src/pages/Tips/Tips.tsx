import { Wrapper } from "./styles";

import { Title } from "../../components";

import OnPronounciation from "./OnPronounciation";
import PresentPerfect from "./PresentPerfect";

function Tips() {
  return (
    <Wrapper>
      <Title title="Tips" subTitle="A lot tips to facilite your learning!" />
      <PresentPerfect />
      <OnPronounciation />
    </Wrapper>
  );
}

export default Tips;
