import { Link } from 'react-router-dom';
import { PATHS } from '../routes/paths';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Home ページ</h1>
      <Link to={PATHS.ARCHITECTURE}>アーキテクチャページへ移動</Link>
      <Link to={PATHS.DESIGN_PATTERN}>デザインパターンページへ移動</Link>
    </div>
  );
};

export default HomePage;
