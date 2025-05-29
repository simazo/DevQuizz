import { useQuestionDetail } from '../hooks/useQuestionDetail';
import { Loading } from '../components/Loading';
import { ErrorMessage } from '../components/ErrorMessage';
import type { FetchQuestionDetailParams } from 'src/types/fetchQuestionDetailParams';
import QuestionText from '../components/QuestionText';
import QuestionCategory from '../components/QuestionCategory';
import ChoiceList from '../components/ChoiceList';

export const QuestionDetailContainer: React.FC<FetchQuestionDetailParams> = ({id}) => {
  const { question, loading, error } = useQuestionDetail(id);

  if (error) return <ErrorMessage message={error} />;
  if (loading || !question) return <Loading />;

  return (
    <>
      <QuestionCategory
        mainCategoryName={question.mainCategoryName}
        subCategoryName={question.subCategoryName}
      />
      <QuestionText id={question.id} text={question.questionText} />
      <ChoiceList choices={question.choices} />
    </>


  );
};

export default QuestionDetailContainer;