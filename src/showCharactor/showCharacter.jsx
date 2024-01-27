import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function CharacterDetail({ characterData, characterId }) {
  if (!characterData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="character-details">
        <div className="character-image">
            <img src={`../../public/images/characters/${characterId}.jpg`} alt={characterData.name}/>
        </div>
      <div className="character-info">
        <h3>キャラクター名: {characterData.name}</h3>
        <p>紹介: {characterData.description}</p>
        <p>レアリティ: 星{characterData.rarity}</p>
        <p>属性: {characterData.element}</p>
        <p>武器種: {characterData.weapontype}</p>
        <p>性別: {characterData.gender}</p>
        <p>誕生日: {characterData.birthday}</p>
        <p>命の星座: {characterData.constellation}</p>
        <p>声優: {characterData.cv.japanese}</p>

        {/* 他のキャラクターの詳細情報を表示する場合、ここに追加 */}
      </div>
    </div>
  );
}

export default function ShowCharacter() {
  const { characterId } = useParams();
  const [characterData, setCharacterData] = useState(null);

  // APIのURLをキャラクターIDに基づいて書き換え
  const apiUrl = `https://genshin-db-api.vercel.app/api/characters?query=${characterId}&queryLanguages=Japanese&resultLanguage=Japanese`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setCharacterData(data);
      } catch (error) {
        console.error("Error fetching character data:", error);
      }
    };

    fetchData();
  }, [apiUrl]);

  return (
    <div>
      <h2>キャラクター詳細</h2>
      <CharacterDetail
        characterId={characterId}
        characterData={characterData}
      />
    </div>
  );
}
