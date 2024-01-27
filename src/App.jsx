import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from "./components/side";
import Header from "./components/header";
import AboutSite from "./components/aboutSite";
import BestArtifact from "./components/bestArtifacts";
import SanctualVessel from "./components/sanctualVessel";
import Artifact from "./seiibutu/artifact";
import Character from "./showCharactor/character"
import Footer from "./components/footer"
import ShowCharactor
 from "./showCharactor/showCharacter";
import ShowArtifact from "./seiibutu/showArtifact";
export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <div className="container">
          <Sidebar />
          <div className="main">
            <Routes>
              <Route path="/" element={<SanctualVessel />} />
              <Route path="/aboutSite" element={<AboutSite />} />
              <Route path="/bestArtifacts" element={<BestArtifact />} />
              <Route path="/artifact"element={<Artifact />} />
              <Route path="/characters"element={<Character />} />
              <Route path="/showCharacter/:characterId" element={<ShowCharactor />} />
              <Route path="/showArtifact/:artifactId" element={<ShowArtifact />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
