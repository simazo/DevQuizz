import { Heading, VStack } from '@chakra-ui/react';
import CenterLayout from '../components/layout/CenterLayout';
import { useParams } from 'react-router-dom';
import QuestionContainer from '../container/QuestionContainer';
import { CATEGORY_MAP } from '../constants/categories';

const QuestionsPage: React.FC = () => {
  const { categoryKey } = useParams();
  const config = CATEGORY_MAP[categoryKey as keyof typeof CATEGORY_MAP];
  if (!config) {
    return <CenterLayout p={8}>無効なカテゴリです</CenterLayout>;
  }

  return (
    <CenterLayout>
      <Heading as="h1" size="xl" mb={6} textAlign="center">{config.title}</Heading>
      <VStack align="start" mb={8}>
        <QuestionContainer categoryId={config.categoryId} limit={10} />
      </VStack>
    </CenterLayout>
  );
};

export default QuestionsPage;