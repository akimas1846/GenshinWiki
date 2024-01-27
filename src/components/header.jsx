export default function Header() {
  return (
    <header>
      <h1>Genshin Impact 聖遺物データベース</h1>
      <div className="headermenu">
        <nav>
          <a href="/">聖遺物スコア計算機</a> |
          <a href="/bestArtifacts">初心者向けビルド</a> |
          <a href="/aboutSite">このサイトについて</a>
        </nav>
      </div>
    </header>
  );
}
