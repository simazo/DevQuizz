import { Box, Text } from '@chakra-ui/react';

type Props = {
  hint: string;
  visible: boolean;
};

const Hint: React.FC<Props> = ({ hint, visible }) => {
  if (!visible) return null;

  return (
    <Box
      mt={4}
      p={3}
      bg="gray.100"
      borderRadius="md"
      boxShadow="sm"
      maxW="lg"
      w="100%"
    >
      <Text fontWeight="bold" mb={1}>ヒント：</Text>
      <Text>{hint}</Text>
    </Box>
  );
};

export default Hint;