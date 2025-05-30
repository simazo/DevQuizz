import { Box, Progress, Text } from '@chakra-ui/react';

type Props = {
  currentIndex: number; // 0始まり
  total: number;
};

const QuestionProgress: React.FC<Props> = ({ currentIndex, total }) => {
  const progressValue = ((currentIndex + 1) / total) * 100;

  return (
    <Box w="100%" mb={6}>
      <Text fontWeight="bold" mb={2}>{currentIndex + 1}問目 / {total}問中</Text>
      <Progress.Root value={progressValue} max={100} colorPalette={"orange"} size="lg">
        <Progress.Track>
          <Progress.Range />
        </Progress.Track>
        <Progress.Label />
        <Progress.ValueText />
      </Progress.Root>
    </Box>
  );
};

export default QuestionProgress;
