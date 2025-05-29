import { Link } from 'react-router-dom';
import { generateCategoryPath } from '../routes/paths';
import { Heading, VStack, Button, Text } from '@chakra-ui/react';
import CenterLayout from '../components/layout/CenterLayout';

const HomePage: React.FC = () => {
  return (
    <CenterLayout>
      <Heading as="h1" size="xl" mb={6} textAlign="center">DevQuizz</Heading>
      <Text fontWeight="bold" mb={6}>挑戦したいカテゴリを選んでください</Text>
      <VStack align="start" mb={8}>
        <Button asChild>
          <Link to={generateCategoryPath('architecture')}>アーキテクチャ</Link>
        </Button>
        <Button asChild>
          <Link to={generateCategoryPath('design_pattern')}>デザインパターン</Link>
        </Button>
      </VStack>
    </CenterLayout>
  );
};

export default HomePage;
