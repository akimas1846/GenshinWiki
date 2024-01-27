import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ArtifactDetail({ artifactData }) {
  if (!artifactData) {
    return <p>Loading...</p>;
  }

  const { flower, plume, sands, goblet, circlet } = artifactData;

  // 2セット効果と4セット効果がある場合はすべての部位を表示
  if (artifactData["2pc"] && artifactData["4pc"]) {
    return (
      <div className="artifact-details">
        <div className="artifact-image">
          <img
            src={`/public/images/artifacts/${artifactData.flower.name}.jpg`}
            alt={artifactData.name}
          />
        </div>
        <div className="artifact-info">
          <h3>聖遺物名: {artifactData.name}</h3>
          <p>レアリティ: 星{artifactData.rarity.join(",")}</p>
          <p>2セット効果: {artifactData["2pc"]}</p>
          <p>4セット効果: {artifactData["4pc"]}</p>
          <ul>
            <li>
              {flower.relictype} : {flower.name}
            </li>
            <li>
              {plume.relictype} : {plume.name}
            </li>
            <li>
              {sands.relictype} : {sands.name}
            </li>
            <li>
              {goblet.relictype} : {goblet.name}
            </li>
            <li>
              {circlet.relictype} : {circlet.name}
            </li>
          </ul>
        </div>
      </div>
    );
  }

  // 1セット効果のみの場合は冠の情報のみ表示
  if (!artifactData["2pc"] && !artifactData["4pc"]) {
    return (
      <div className="artifact-details">
        <div className="artifact-image">
          <img
            src={`../../public/images/artifacts/${artifactData.circlet.name}.jpg`}
            alt={artifactData.name}
          />
        </div>
        <div className="artifact-info">
          <h3>聖遺物名: {artifactData.name}</h3>
          <p>レアリティ: 星{artifactData.rarity.join(",")}</p>
          <p>
            {circlet.relictype} : {circlet.name}
          </p>
          <p>
            1セット効果 : {artifactData["1pc"]}
          </p>
        </div>
      </div>
    );
  }
}

export default function ShowArtifact() {
  const { artifactId } = useParams();
  const [artifactData, setArtifactData] = useState(null);

  // APIのURLを聖遺物IDに基づいて書き換え
  const apiUrl = `https://genshin-db-api.vercel.app/api/artifacts?query=${artifactId}&queryLanguages=Japanese&resultLanguage=Japanese`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setArtifactData(data);
      } catch (error) {
        console.error("Error fetching artifact data:", error);
      }
    };

    fetchData();
  }, [apiUrl]);

  return (
    <div>
      <h2>聖遺物詳細</h2>
      <ArtifactDetail artifactId={artifactId} artifactData={artifactData} />
    </div>
  );
}
