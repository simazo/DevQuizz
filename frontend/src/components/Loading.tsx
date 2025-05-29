import { Spinner, Text, VStack } from '@chakra-ui/react';

export const Loading = () => (
  <VStack align="center" justify="center" mt={10}>
    <Spinner size="xl" color="blue.500" />
    <Text fontSize="md" color="gray.600">
      読み込み中...
    </Text>
  </VStack>
);
