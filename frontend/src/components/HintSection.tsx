import { Button, Box } from '@chakra-ui/react';
import Hint from './Hint';
import { useShowHint } from '../hooks/useShowHint';

type Props = {
  hint: string;
  questionId: number;
};

const HintSection: React.FC<Props> = ({ hint, questionId }) => {
  const [showHint, setShowHint] = useShowHint(false, questionId);

  return (
    <Box mt={6} w="100%">
      <Button
        onClick={() => setShowHint((prev) => !prev)}
        colorScheme="teal"
        size="sm"
        mb={3}
      >
        {showHint ? 'ヒントを隠す' : 'ヒントを見る'}
      </Button>
      <Hint hint={hint} visible={showHint} />
    </Box>
  );
};

export default HintSection;
