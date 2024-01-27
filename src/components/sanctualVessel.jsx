import { useState } from "react";

export default function SanctualVessel() {
  const [parts, setParts] = useState("flower");
  const [calcStatus, setCalcStatus] = useState("normal");
  const [subStatus1, setSubStatus1] = useState({ type: "critRate", value: "" });
  const [subStatus2, setSubStatus2] = useState({
    type: "critDamage",
    value: "",
  });
  const [subStatus3, setSubStatus3] = useState({
    type: "attackPercentage",
    value: "",
  });
  const [subStatus4, setSubStatus4] = useState({
    type: "hpPercentage",
    value: "",
  });
  const [result, setResult] = useState(null);
  const [rank, setRank] = useState("");

  function handlePartsChange(event) {
    setParts(event.target.value);
  }

  function handleCalcChange(event) {
    setCalcStatus(event.target.value);
  }

  function handleSubStatusChange(setSubStatus, event) {
    setSubStatus({ ...setSubStatus, type: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    let total = 0;
    const critRate = parseFloat(subStatus1.value) || 0;
    const critDamage = parseFloat(subStatus2.value) || 0;
    const attackPercentage = parseFloat(subStatus3.value) || 0;
    const hpPercentage = parseFloat(subStatus4.value) || 0;

    if (calcStatus === "normal") {
      total = critRate * 2 + critDamage + attackPercentage;
    } else if (calcStatus === "hp") {
      total = critRate * 2 + critDamage + hpPercentage;
    }

    setResult(total);
    if ((parts === "flower" || parts === "wing") && total < 30) {
      setRank("B");
    } else if (
      (parts === "flower" || parts === "wing") &&
      total >= 30 &&
      total < 40
    ) {
      setRank("A");
    } else if (
      (parts === "flower" || parts === "wing") &&
      total >= 40 &&
      total <= 50
    ) {
      setRank("S");
    } else if ((parts === "flower" || parts === "wing") && total > 50) {
      setRank("SS");
    } else if (total < 10) {
      setRank("B");
    } else if (total >= 10 && total < 15) {
      setRank("A");
    } else if (total >= 15 && total < 20) {
      setRank("S");
    } else {
      setRank("SS");
    }
  }

  return (
    <div>
      <h2>聖遺物スコア計算機</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="parts">部位を選択:</label>
        <select id="parts" onChange={handlePartsChange} value={parts}>
          <option value="flower">花</option>
          <option value="wing">羽</option>
          <option value="clock">時計</option>
          <option value="goblet">杯</option>
          <option value="head">冠</option>
        </select>
        <br />
        <label htmlFor="calcStatus">ビルドを選択:</label>
        <select id="calcStatus" onChange={handleCalcChange} value={calcStatus}>
          <option value="normal">通常型</option>
          <option value="hp">HP型</option>
          <option value="wisdom">熟知型</option>
          <option value="healer">ヒーラー</option>
        </select>
        <br />
        <div>
          <label htmlFor="subStatus1">サブステータス1:</label>
          <select
            value={subStatus1.type}
            onChange={(event) => handleSubStatusChange(setSubStatus1, event)}
          >
            <option value="critRate">会心率</option>
            <option value="critDamage">会心ダメージ</option>
            <option value="attackPercentage">攻撃力%</option>
            <option value="hpPercentage">HP%</option>
            <option value="defensePercentage">防御%</option>
            <option value="attack">攻撃力実数</option>
            <option value="hp">HP実数</option>
            <option value="defense">防御実数</option>
            <option value="elementalMastery">元素熟知</option>
            <option value="elementCharge">元素チャージ効率%</option>
          </select>
          <input
            type="text"
            id="subStatus1"
            value={subStatus1.value}
            onChange={(event) =>
              setSubStatus1({ ...subStatus1, value: event.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="subStatus2">サブステータス2:</label>
          <select
            value={subStatus2.type}
            onChange={(event) => handleSubStatusChange(setSubStatus2, event)}
          >
            <option value="critRate">会心率</option>
            <option value="critDamage">会心ダメージ</option>
            <option value="attackPercentage">攻撃力%</option>
            <option value="hpPercentage">HP%</option>
            <option value="defensePercentage">防御%</option>
            <option value="attack">攻撃力実数</option>
            <option value="hp">HP実数</option>
            <option value="defense">防御実数</option>
            <option value="elementalMastery">元素熟知</option>
            <option value="elementCharge">元素チャージ効率%</option>
          </select>
          <input
            type="text"
            id="subStatus2"
            value={subStatus2.value}
            onChange={(event) =>
              setSubStatus2({ ...subStatus2, value: event.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="subStatus3">サブステータス3:</label>
          <select
            value={subStatus3.type}
            onChange={(event) => handleSubStatusChange(setSubStatus3, event)}
          >
            <option value="critRate">会心率</option>
            <option value="critDamage">会心ダメージ</option>
            <option value="attackPercentage">攻撃力%</option>
            <option value="hpPercentage">HP%</option>
            <option value="defensePercentage">防御%</option>
            <option value="attack">攻撃力実数</option>
            <option value="hp">HP実数</option>
            <option value="defense">防御実数</option>
            <option value="elementalMastery">元素熟知</option>
            <option value="elementCharge">元素チャージ効率%</option>
          </select>
          <input
            type="text"
            id="subStatus3"
            value={subStatus3.value}
            onChange={(event) =>
              setSubStatus3({ ...subStatus3, value: event.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="subStatus4">サブステータス4:</label>
          <select
            value={subStatus4.type}
            onChange={(event) => handleSubStatusChange(setSubStatus4, event)}
          >
            <option value="critRate">会心率</option>
            <option value="critDamage">会心ダメージ</option>
            <option value="attackPercentage">攻撃力%</option>
            <option value="hpPercentage">HP%</option>
            <option value="defensePercentage">防御%</option>
            <option value="attack">攻撃力実数</option>
            <option value="hp">HP実数</option>
            <option value="defense">防御実数</option>
            <option value="elementalMastery">元素熟知</option>
            <option value="elementCharge">元素チャージ効率%</option>
          </select>
          <input
            type="text"
            id="subStatus4"
            value={subStatus4.value}
            onChange={(event) =>
              setSubStatus4({ ...subStatus4, value: event.target.value })
            }
          />
        </div>
        <br />
        <button type="submit">決定</button>
      </form>
      {result !== null && (
        <div>
          <h3>計算結果: {result}</h3>
          <p>ランク: {rank}</p>
        </div>
      )}
      <p>ゲーム内で獲得した聖遺物のスコアを計算します</p>
      <p>ビルドごとに、以下のように計算式を変えることが出来ます。</p>
      <dl>
        <ul>
          <li>
            <dt>通常型 (物理型、攻撃参照アタッカーなど)</dt>
            <dd>会心率 &times; 2 + 率ダメ + 攻撃力(%)</dd>
          </li>
          <li>
            <dt>HP型(胡桃、ヌヴィレットなどのHP参照アタッカー)</dt>
          </li>
          <dd>会心率 &times; 2 + 率ダメ + HP(%)</dd>
        </ul>
      </dl>
      <p>今後も随時更新予定！</p>
    </div>
  );
}
