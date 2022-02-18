import { Title, Container } from "../../components/layout";

import OnPronounciation from "./OnPronounciation";
import PresentPerfect from "./PresentPerfect";

function Index() {
  return (
    <Container customClass="column">
      <Title title="Tips" subTitle="A lot tips to facilite your learning!" />
      <PresentPerfect />
      <OnPronounciation />
    </Container>
  );
}

export default Index;
