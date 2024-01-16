export default function sanctualVessel() {
  return (
    <div>
      <h2>聖遺物スコア計算機</h2>
      <p>このページではゲーム内で獲得した聖遺物のスコアを計算します</p>
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
