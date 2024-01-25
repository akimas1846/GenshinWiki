import { useState } from "react";

export default function SanctualVessel() {
  const [parts, setParts] = useState("flower");
  const [calcStatus, setCalcStatus] = useState("nomal");
  function handlePartsChange(event) {
    setParts(event.target.value);
  }
  function handleCalcChange(event) {
    setCalcStatus(event.target.value);
  }
  return (
    <div>
      <h2>聖遺物スコア計算機</h2>
      <label htmlFor="parts">部位を選択:</label>
      <select id="category" onChange={handlePartsChange} value={parts}>
        <option value="flower">花</option>
        <option value="wing">羽</option>
        <option value="clock">時計</option>
        <option value="goblet">杯</option>
        <option value="head">冠</option>
      </select>
      <br />
      <label htmlFor="parts">ビルドを選択:</label>
      <select id="category" onChange={handleCalcChange} value={calcStatus}>
        <option value="normal">通常型</option>
        <option value="hp">HP型</option>
        <option value="wisdom">熟知型</option>
        <option value="healer">ヒーラー</option>
      </select>
      <p>ゲーム内で獲得した聖遺物のスコアを計算します</p>
      <p>タブごとに、以下のように計算式を変えることが出来ます。</p>
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
    </div>
  );
}
