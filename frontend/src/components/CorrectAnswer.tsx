import { Box, Heading, Text } from '@chakra-ui/react';

type Props = {
  correctAnswerId: number;
};

const CorrectAnswer: React.FC<Props> = ({ correctAnswerId }) => {
  return (
    <Box mb={8} p={4} bg="gray.50" borderRadius="md" boxShadow="sm" w="full">
      <Heading as="h3" size="md" mb={2}>
        答え
      </Heading>
      <Text fontSize="md" whiteSpace="pre-wrap">
        {correctAnswerId}
      </Text>
    </Box>
  );
};

export default CorrectAnswer;
