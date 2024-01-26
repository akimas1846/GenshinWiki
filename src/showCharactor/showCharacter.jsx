import React from "react";
import { useParams } from "react-router-dom";

const CharacterDetail = ({ characterId }) => {
  return <p>キャラクターID: {characterId}</p>;
};

const ShowCharacter = () => {
  const { characterId } = useParams();

  return (
    <div>
      <h2>キャラクター詳細</h2>
      <CharacterDetail characterId={characterId} />
    </div>
  );
};

export default ShowCharacter;
