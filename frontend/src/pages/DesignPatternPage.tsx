import { Link } from 'react-router-dom';
import { PATHS } from '../routes/paths';
import QuestionContainer from '../container/QuestionContainer';

const DesignPatternPage: React.FC = () => {
  return (
    <div>
      <h1>DesignPatternPage ページ</h1>
      <Link to={PATHS.HOME}>ホームへ戻る</Link>
      <Link to={PATHS.ARCHITECTURE}>アーキテクチャページへ移動</Link>
      <QuestionContainer categoryId={1} limit={3} />
    </div>
  );
};

export default DesignPatternPage;
