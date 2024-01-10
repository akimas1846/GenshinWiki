import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from "./components/side";
import Header from "./components/header";
import AboutSite from "./components/aboutSite";
import BestSanctualessel from "./components/bestSanctualVessel";
import SanctualVessel from "./components/sanctualVessel";
import Artifact from "./seiibutu/artifact";
import Character from "./charactors/character"

import Footer from "./components/footer"
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
              <Route path="/bestSanctualVessel" element={<BestSanctualessel />} />
              <Route path="/artifact"element={<Artifact />} />
              <Route path="/characters"element={<Character />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
