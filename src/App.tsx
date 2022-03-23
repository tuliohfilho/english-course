import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import {
  AppProvider,
  TipsProvider,
  PronounsProvider,
  IrregularVerbsProvider,
} from "./hooks/context/providers";

import { Navbar, Footer, Container } from "./components/layout";
import { Home, Tips, Contact, IrregularVerbs } from "./pages";

function App() {
  return (
    <AppProvider>
      <IrregularVerbsProvider>
        <PronounsProvider>
          <TipsProvider>
            <Router>
              <Navbar />
              <Container>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/tips" element={<Tips />} />
                  <Route path="/irregular_verbs" element={<IrregularVerbs />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </Container>
              <Footer />
            </Router>
          </TipsProvider>
        </PronounsProvider>
      </IrregularVerbsProvider>
    </AppProvider>
  );
}

export default App;
