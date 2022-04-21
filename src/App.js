import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Peoples from "./components/Peoples";
import Person from "./cards/Person";
import Films from "./components/Films";
import Film from "./cards/Film";
import Species from "./components/Species";
import Specie from "./cards/Specie";
import Planets from "./components/Planets";
import Planet from "./cards/Planet";

function App() {
  return (
    <>
      <Container fluid>
        <Router>
          <Navbar />
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/people" element={<Peoples />} />
              <Route path="/people/:id/" element={<Person />} />
              <Route path="/planets" element={<Planets />} />
              <Route path="/planets/:id/" element={<Planet />} />
              <Route path="/species" element={<Species />} />
              <Route path="/species/:id/" element={<Specie />} />
              <Route path="/films" element={<Films />} />
              <Route path="/films/:id/" element={<Film />} />
            </Routes>
          </Container>
        </Router>
      </Container>
    </>
  );
}

export default App;
