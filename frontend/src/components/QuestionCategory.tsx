import { Box, Text } from '@chakra-ui/react';

type Props = {
  mainCategoryName: string;
  subCategoryName: string;
};

const QuestionCategory: React.FC<Props> = ({ mainCategoryName, subCategoryName }) => {
  return (
    <Box mb={2}>
      <Text fontSize="sm" color="gray.600">
        カテゴリ: <strong>{mainCategoryName}</strong> / {subCategoryName}
      </Text>
    </Box>
  );
};

export default QuestionCategory;
