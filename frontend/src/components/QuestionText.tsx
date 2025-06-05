import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import CodeBlock from './CodeBlock';

type Props = {
  id: number;
  text: string;
};

const QuestionText: React.FC<Props> = ({ id, text }) => {
  return (
    <Box maxW="86vw" overflowX="hidden"
      bg="gray.100" p={4} borderRadius="md" boxShadow="sm" mb={4}
      >
      <Text fontSize="sm" color="gray.500" mb={2}>
        問題ID: {id}
      </Text>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code: CodeBlock,
        }}
      >
        {text}
      </ReactMarkdown>
    </Box>
  );
};

export default QuestionText;
