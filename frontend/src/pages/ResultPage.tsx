import { Link } from 'react-router-dom';
import { PATHS } from '../routes/paths';
import { useScore } from '../hooks/useScore';
import { Loading } from '../components/Loading';
import { ErrorMessage } from '../components/ErrorMessage';
import { QuestionResultItem } from '../components/QuestionResultItem';

const ResultPage: React.FC = () => {
  // const raw = sessionStorage.getItem('userAnswers');
  // if (!raw) return;
  // console.log(JSON.parse(raw));
  const { score, loading, error } = useScore();

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;
  if (!score) return <ErrorMessage message="スコアが取得できませんでした。" />;

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>結果発表！</h1>
      <p>全{score.totalQuestions}問中、{score.correctAnswers}問正解！</p>
      <p>正解率: {(score.correctRate * 100).toFixed(2)}%</p>
      <h2 style={{ marginTop: '2rem' }}>各問題の結果</h2>
      <ul style={{ textAlign: 'left', display: 'inline-block', marginTop: '1rem' }}>
        {score.questionResultSummary.map((q, index) => (
          <QuestionResultItem
            key={q.id}
            index={index}
            id={q.id}
            isCorrect={q.isCorrect}
            mainCategoryName={q.mainCategoryName}
            subCategoryName={q.subCategoryName}
            questionPreview={q.questionPreview}
          />
        ))}
      </ul>

      <Link to={PATHS.HOME}>ホームへ戻る</Link>
    </div>
  );
};

export default ResultPage;