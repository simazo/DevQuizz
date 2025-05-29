import { Link } from 'react-router-dom';
import { PATHS } from '../routes/paths';

const ArchitecturePage: React.FC = () => {
  return (
    <div>
      <h1>Architecture ページ</h1>
      <Link to={PATHS.HOME}>ホームへ戻る</Link>
      <Link to={PATHS.DESIGN_PATTERN}>デザインパターンページへ移動</Link>
    </div>
  );
};

export default ArchitecturePage;
