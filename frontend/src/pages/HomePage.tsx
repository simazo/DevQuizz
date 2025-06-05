import { Link } from 'react-router-dom';
import { generateCategoryPath } from '../routes/paths';
import { Heading, VStack, Button, Text } from '@chakra-ui/react';
import CenterLayout from '../components/layout/CenterLayout';
import { CATEGORIES } from '../constants/categories';

const HomePage: React.FC = () => {
  return (
    <CenterLayout>
      <Heading as="h1" size="xl" mb={6} textAlign="center">DevQuizz</Heading>
      <Text fontWeight="bold" mb={6}>選んだカテゴリに関するクイズが10問出題されます</Text>
      <VStack align="start" mb={8}>
        {CATEGORIES.map(({ key, label }) => (
          <Button asChild key={key}>
            <Link to={generateCategoryPath(key)}>{label}</Link>
          </Button>
        ))}
      </VStack>
    </CenterLayout>
  );
};

export default HomePage;
