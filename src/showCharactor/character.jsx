import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function CharacterList({ charactersData }) {
  return (
    <ul>
      {charactersData.map((character) => (
        <li key={character}>
          <Link to={`/showCharacter/${character}`}>{character}</Link>
        </li>
      ))}
    </ul>
  );
}

export default function Character() {
  const [charactersData, setCharactersData] = useState([]);
  const [selectedRarity, setSelectedRarity] = useState("all");

  useEffect(() => {
    const fetchData = async () => {
      let apiUrl =
        "https://genshin-db-api.vercel.app/api/characters?matchCategories=true&queryLanguages=Japanese&resultLanguage=Japanese";

      if (selectedRarity === "5") {
        apiUrl += "&query=5";
      } else if (selectedRarity === "4") {
        apiUrl += "&query=4";
      } else if (selectedRarity === "all") {
        apiUrl =
          "https://genshin-db-api.vercel.app/api/characters?query=names&matchCategories=true&queryLanguages=Japanese&resultLanguage=Japanese";
      }

      const response = await fetch(apiUrl);
      const data = await response.json();

      setCharactersData(data);
    };

    fetchData();
  }, [selectedRarity]);

  const handleRarityChange = (event) => {
    setSelectedRarity(event.target.value);
  };

  return (
    <div>
      <h2>キャラクター一覧</h2>
      <label htmlFor="category">レアリティ選択:</label>
      <select
        id="category"
        onChange={handleRarityChange}
        value={selectedRarity}
      >
        <option value="all">全キャラクター</option>
        <option value="5">星５キャラクター</option>
        <option value="4">星４キャラクター</option>
      </select>
      <CharacterList charactersData={charactersData} />
    </div>
  );
}
