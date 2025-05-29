import { Alert, AlertTitle, Box } from '@chakra-ui/react';

type Props = {
  message: string;
};

export const ErrorMessage: React.FC<Props> = ({ message }) => {
  return (
    <Box my={4}>
      <Alert.Root status="error" borderRadius="md">
        <AlertTitle fontSize="md">{message}</AlertTitle>
      </Alert.Root>
    </Box>
  );
};
