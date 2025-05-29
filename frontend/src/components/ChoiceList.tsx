import type { Choice } from "@shared/types";
import {
  Button,
  HStack,
  Text,
  Stack,
  Box,
} from '@chakra-ui/react';

type Props = {
  choices: Choice[];
  onSelect?: (choice: Choice, index: number) => void;
  isSelectable?: boolean;
};

const ChoiceList: React.FC<Props> = ({ choices, onSelect, isSelectable = false }) => {
  return (
    <Stack mt={4}>
      {choices.map((choice, index) => (
        <HStack
          key={choice.id}
          align="center"
          p={3}
          borderWidth="1px"
          borderRadius="md"
          _hover={isSelectable ? { bg: 'gray.50' } : undefined}
          cursor={isSelectable ? 'pointer' : 'default'}
          onClick={isSelectable && onSelect ? () => onSelect(choice, index) : undefined}
          pointerEvents={isSelectable ? 'auto' : 'none'}
        >
          {isSelectable ? (
            <Button
              size="sm"
              colorScheme="blue"
              variant="solid"
              pointerEvents="none"
              minW="32px"
            >
              {index + 1}
            </Button>
          ) : (
            <Box
              as="span"
              px={3}
              py={1}
              fontSize="sm"
              fontWeight="semibold"
              color="white"
              bg="gray.400"
              borderRadius="md"
              userSelect="none"
              minW="32px"
              textAlign="center"
            >
              {index + 1}
            </Box>
          )}
          <Text>{choice.choiceText}</Text>
        </HStack>
      ))}
    </Stack>
  );
};

export default ChoiceList;
