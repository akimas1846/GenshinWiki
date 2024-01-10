import { Link } from 'react-router-dom';

export default function sideBar() {
  return (
    <div className="sidebar">
      <h2>コンテンツ一覧</h2>
      <nav>
      <ul>
        <li><Link to="/">聖遺物スコア計算機</Link></li>
        <li><Link to="/artifact">聖遺物データベース</Link></li>
        <li><Link to="/characters">キャラクター一覧</Link></li>
      </ul>
      </nav>
    </div>
  );
}
