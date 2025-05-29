import { Link } from 'react-router-dom';
import { PATHS } from '../routes/paths';
import { useScore } from '../hooks/useScore';
import { Loading } from '../components/Loading';
import { ErrorMessage } from '../components/ErrorMessage';
import { QuestionResultItem } from '../components/QuestionResultItem';
import {
  Box,
  Heading,
  Text,
  List,
  Button,
  VStack,
} from '@chakra-ui/react';

const ResultPage: React.FC = () => {
  const { score, loading, error } = useScore();

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;
  if (!score) return <ErrorMessage message="スコアが取得できませんでした。" />;

  return (
    <Box maxW="3xl" mx="auto" p={6} textAlign="center">
      <Heading size="xl" mb={4}>結果発表！</Heading>
      <Text fontSize="lg" mb={2}>
        全{score.totalQuestions}問中、{score.correctAnswers}問正解！
      </Text>
      <Text fontSize="lg" mb={6}>
        正解率: {(score.correctRate * 100).toFixed(2)}%
      </Text>

      <Heading size="md" mt={8} mb={4}>各問題の結果</Heading>
      <List.Root textAlign="left" listStyleType="none">
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
      </List.Root>

      <VStack mt={10}>
        <Button asChild>
          <Link to={PATHS.HOME} >
            ホームへ戻る
          </Link>
        </Button>
      </VStack>
    </Box>
  );
};

export default ResultPage;