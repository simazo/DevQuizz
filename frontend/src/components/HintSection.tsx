import { useState } from 'react';
import { Button, Box } from '@chakra-ui/react';
import Hint from './Hint';

type Props = {
  hint: string;
};

const HintSection: React.FC<Props> = ({ hint }) => {
  const [showHint, setShowHint] = useState(false);

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
