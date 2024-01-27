export default function BestArtifacts() {
  // 目次項目をクリックしたときのスクロール処理
  const handleClick = (targetId) => {
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* 大見出し1 */}
      <h2>初心者向けキャラとビルド</h2>

      {/* 目次 */}
      <nav>
        <ul>
          <li>
            <span onClick={() => handleClick("char1")}>HP爆マシ鍾離</span>
          </li>
          <li>
            <span onClick={() => handleClick("char2")}>
              HP爆マシヌヴィレット
            </span>
          </li>
          <li>
            <span onClick={() => handleClick("char3")}>熟知盛りナヒーダ</span>
          </li>
        </ul>
      </nav>
      <div className="aboutbuild">
        <section id="char1">
          <h3>HP爆マシ鍾離</h3>
          <img src="../images/characters/鍾離.jpg" />
          <p>体力をひたすら伸ばした鍾離。</p>
          <p>
            おすすめポイントとしては、HPだけを考えればいいので聖遺物の厳選が非常に楽。
          </p>
          <p>難点としては、現在鍾離の復刻が1年に一回というスローペースなため、キャラクター入手のチャンスがやや少ない。</p>
          <p>おすすめ聖遺物は、</p>
          <div className="artifact-description">
            <img src="../images/artifacts/盤石芽生の花.jpg" />
            <p>悠久2セット</p>
            <img src="../images/artifacts/偉勲の花.jpg" />
            <p>千岩2セット</p>
          </div>
          <p>シールドの耐久値にかかわるHPと。岩元素バフにより元素爆発ダメージを伸ばすことが出来る。</p>
          <p>または、</p>
          <div className="artifact-description">
            <img src="../images/artifacts/偉勲の花.jpg" />
            <p>千岩4セット</p>
          </div>
          <p>HPだけでなく装備者のシールドの耐久値、そしてチーム全員の攻撃力バフにもつながる。</p>
        </section>

        <section id="char2">
          <h3>HP爆マシヌヴィレット</h3>
          <img src="../images/characters/ヌヴィレット.jpg" />
          <p>HPでダメージが上がるヌヴィレットのHPひたすら伸ばしたビルド。</p>
          <p>難点としては、鍾離の時とは違い、ヌヴィレット自身がアタッカーなのでしっかり会心率と会心ダメージを考えなければならない。</p>
          <p>おすすめ聖遺物は、</p>
          <div className="artifact-description">
            <img src="../images/artifacts/狩人の胸花.jpg" />
            <p>ファントムハンター4セット</p>
          </div>
          <p>ヌヴィレットが主に使う重撃を強化し、セット効果で会心率を最大36%も稼ぐことが出来る。比較的厳選難易度も低い。</p>
        </section>

        <section id="char3">
          <h3>熟知盛りナヒーダ</h3>
          <img src="../images/characters/ナヒーダ.jpg" />
          <p>強力な元素反応を持つ草元素の火力につながるのに加えて、摩耶の宮殿展開時、元素熟知を最大200味方に配ることが出来る。</p>
          <p>おすすめ聖遺物は、</p>
          <div className="artifact-description">
            <img src="../images/artifacts/迷宮の遊客.jpg" />
            <p>深林4セット</p>
          </div>
          <p>あるいは、</p>
          <div className="artifact-description">
            <img src="../images/artifacts/夢境の鉄花.jpg" />
            <p>金メッキ4セット</p>
          </div>
          <p>深森4セットは、草元素ダメージをアップし、スキルを敵に当てた時、あてた敵の草元素耐性を下げることが出来る。現状草元素耐性を下げられるのはこの聖遺物効果と鍾離のシールドのみ。</p>
          <p>対して金メッキ4セットは、セット効果で元素熟知を挙げることができる。こちらの方がナヒーダの熟知のボーダーである1000に容易に近づくことが出来る。</p>
          <p>ちなみに、今回紹介した中でナヒーダが一番厳選難易度が高い。頑張って。</p>
        </section>
      </div>
    </div>
  );
}
