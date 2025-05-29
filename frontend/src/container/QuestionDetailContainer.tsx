import { useEffect, useState } from 'react'
import { useQuestionDetail } from '../hooks/useQuestionDetail';
import { Loading } from '../components/Loading';
import { ErrorMessage } from '../components/ErrorMessage';
import type { FetchQuestionDetailParams } from 'src/types/fetchQuestionDetailParams';
import QuestionText from '../components/QuestionText';
import Hint from '../components/Hint';

export const QuestionDetailContainer: React.FC<FetchQuestionDetailParams> = ({id}) => {
  const { question, loading, error } = useQuestionDetail(id);
  const [ showHint, setShowHint ] = useState(false);

  useEffect(() => {
    setShowHint(false);
  }, [question])

  if (error) return <ErrorMessage message={error} />;
  if (loading || !question) return <Loading />;

  return (
    <>
      <QuestionText text={question.questionText} />
      <button onClick={() => setShowHint((prev) => !prev)}>
        {showHint ? 'ヒントを隠す' : 'ヒントを見る'}
      </button>
      <Hint hint={question.hint} visible={showHint} />
    </>
  );
};

export default QuestionDetailContainer;