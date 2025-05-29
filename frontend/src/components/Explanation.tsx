import { Box, Heading, Text } from '@chakra-ui/react';

type Props = {
  explanation: string;
};

const Explanation: React.FC<Props> = ({ explanation }) => {
  return (
    <Box mt={8} p={4} bg="gray.50" borderRadius="md" boxShadow="sm" w="full">
      <Heading as="h3" size="md" mb={2}>
        解説
      </Heading>
      <Text fontSize="md" whiteSpace="pre-wrap">
        {explanation}
      </Text>
    </Box>
  );
};

export default Explanation;
