import QuestionContainer from '../container/QuestionContainer';
import { Box, Heading, VStack, Button } from '@chakra-ui/react';

const DesignPatternPage: React.FC = () => {
  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={6} textAlign="center">デザインパターンに関するクイズ</Heading>
      <VStack align="start" mb={8}>
        <QuestionContainer categoryId={1} limit={3} />
      </VStack>
    </Box>
  );
};

export default DesignPatternPage;
