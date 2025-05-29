import { useEffect, useState } from 'react'
import { useQuestions } from '../hooks/useQuestions';
import { useAnswer } from '../hooks/useAnswer';
import { useNavigate } from 'react-router-dom';
import type { Choice } from '@shared/types';
import type { FetchQuestionsParams } from '../types/fetchQuestionsParams';
import QuestionText from '../components/QuestionText';
import ChoiceList from '../components/ChoiceList';
import Hint from '../components/Hint';
import { PATHS } from '../routes/paths';
import { Loading } from '../components/Loading';
import { ErrorMessage } from '../components/ErrorMessage';

const QuestionContainer: React.FC<FetchQuestionsParams> = ({categoryId, limit}) => {
  const { question, loading, error, next, hasNext } = useQuestions({ categoryId, limit });
  const { addAnswer, resetAnswers } = useAnswer();
  const [ showHint, setShowHint ] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    resetAnswers();
  }, []); // 初回レンダリング時に回答をリセット

  useEffect(() => {
    setShowHint(false);
  }, [question])

  const handleSelect = (choice: Choice) => {
    if (!question) return;

    const newAnswer = {questionId: question.id, selectedId: choice.id};
    addAnswer(newAnswer);

    if (hasNext) {  
      next();
    } else {
      navigate(PATHS.RESULT);
    }
  };

  if (error) return <ErrorMessage message={error} />;
  if (loading || !question) return <Loading />;

  return (
    <>
      <QuestionText text={question.questionText} />
      <ChoiceList choices={question.choices} onSelect={handleSelect} />
      <button onClick={() => setShowHint((prev) => !prev)}>
        {showHint ? 'ヒントを隠す' : 'ヒントを見る'}
      </button>
      <Hint hint={question.hint} visible={showHint} />
    </>
  );
};

export default QuestionContainer;