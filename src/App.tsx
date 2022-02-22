import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import { Home, Tips, Contact, IrregularVerbs } from "./pages";

import { Navbar, Footer, Container } from "./components/layout";

function App() {
  return (
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
  );
}

export default App;
