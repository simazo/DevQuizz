import { useEffect } from 'react'
import { useQuestions } from '../hooks/useQuestions';
import { useAnswer } from '../hooks/useAnswer';
import { useNavigate } from 'react-router-dom';
import type { Choice } from '@shared/types';
import type { FetchQuestionsParams } from '../types/fetchQuestionsParams';
import QuestionText from '../components/QuestionText';
import ChoiceList from '../components/ChoiceList';
import HintSection from '../components/HintSection';
import QuestionCategory from '../components/QuestionCategory';
import QuestionProgress from '../components/QuestionProgress';
import { PATHS } from '../routes/paths';
import { Loading } from '../components/Loading';
import { ErrorMessage } from '../components/ErrorMessage';
import TweetButton from '../components/TweetButton';

const QuestionContainer: React.FC<FetchQuestionsParams> = ({categoryId, limit}) => {
  const { question, loading, error, next, hasNext, currentIndex, total } = useQuestions({ categoryId, limit });
  const { addAnswer, resetAnswers } = useAnswer();
  const navigate = useNavigate();

  useEffect(() => {
    resetAnswers();
  }, []); // 初回レンダリング時に回答をリセット

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
      <QuestionProgress currentIndex={currentIndex} total={total} />
      <QuestionCategory
        mainCategoryName={question.mainCategoryName}
        subCategoryName={question.subCategoryName}
      />
      <QuestionText id={question.id} text={question.questionText} />
      <ChoiceList choices={question.choices} isSelectable onSelect={handleSelect} />
      <HintSection hint={question.hint} questionId={question.id} />
      <TweetButton
        text={`【開発者向クイズ】${question.questionText.slice(0, 50)}・・・続きは`}
        url={window.location.href}
        hashtags={[
          'DevQuizz',
          'デベロッパー', 
          'プログラマ',
          question.mainCategoryName,
          question.subCategoryName]}
      />
    </>
  );
};

export default QuestionContainer;