import { Box, Text } from '@chakra-ui/react';

type Props = {
  id: number;
  text: string;
}

const QuestionText: React.FC<Props> = ({ id, text }) => {
  return (
    <Box
      bg="gray.100"
      p={4}
      borderRadius="md"
      boxShadow="sm"
      mb={4}
    >
      <Text fontSize="sm" color="gray.500" mb={2}>
        問題ID: {id}
      </Text>
      <Text fontSize="lg">{text}</Text>
    </Box>
  );
};

export default QuestionText;