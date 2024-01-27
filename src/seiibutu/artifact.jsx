import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ArtifactsList({ artifactsData }) {
  return (
    <ul>
      {artifactsData.map((artifact) => (
        <li key={artifact}>
          <Link to={`/showArtifact/${artifact}`}>{artifact}</Link>
        </li>
      ))}
    </ul>
  );
}

export default function Artifact() {
  const [artifactsData, setArtifactsData] = useState([]);
  const [selectedRarity, setSelectedRarity] = useState("all");

  useEffect(() => {
    const fetchData = async () => {
      let apiUrl =
        "https://genshin-db-api.vercel.app/api/artifacts?matchCategories=true&queryLanguages=Japanese&resultLanguage=Japanese";

      if (selectedRarity === "5") {
        apiUrl += "&query=5";
      } else if (selectedRarity === "4") {
        apiUrl += "&query=4";
      } else if (selectedRarity === "3") {
        apiUrl += "&query=3";
      } else if (selectedRarity === "all") {
        apiUrl =
          "https://genshin-db-api.vercel.app/api/artifacts?query=names&matchCategories=true&queryLanguages=Japanese&resultLanguage=Japanese";
      }

      const response = await fetch(apiUrl);
      const data = await response.json();

      setArtifactsData(data);
    };

    fetchData();
  }, [selectedRarity]);

  const handleRarityChange = (event) => {
    setSelectedRarity(event.target.value);
  };

  return (
    <div>
      <h2>聖遺物一覧</h2>
      <label htmlFor="category">レアリティ選択:</label>
      <select
        id="category"
        onChange={handleRarityChange}
        value={selectedRarity}
      >
        <option value="all">全聖遺物</option>
        <option value="5">星５聖遺物</option>
        <option value="4">星４聖遺物</option>
        <option value="3">星３聖遺物</option>
      </select>
      <ArtifactsList artifactsData={artifactsData} />
    </div>
  );
}
