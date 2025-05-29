import { Link } from 'react-router-dom';
import { PATHS } from '../routes/paths';
import { Box, Text, Stack } from '@chakra-ui/react';

type Props = {
  index: number;
  id: number;
  isCorrect: boolean;
  mainCategoryName: string;
  subCategoryName: string;
  questionPreview: string;
};

export const QuestionResultItem: React.FC<Props> = ({
  index,
  id,
  isCorrect,
  mainCategoryName,
  subCategoryName,
  questionPreview,
}) => {
  return (
    <Box as="li" mb={4} p={4} borderWidth="1px" borderRadius="md" shadow="sm">
      <Stack>
        <Link
          to={PATHS.QUESTION_DETAIL.replace(':id', id.toString())}
          color="teal.500"
        >
          <Text fontWeight="bold">
            【{index + 1}問目】
            <Text as="span" color={isCorrect ? 'green.500' : 'red.500'} fontWeight="bold">
              {isCorrect ? '正解' : '不正解'}
            </Text>
          </Text>
          <Text>
            <strong>問題ID:</strong> {id}
          </Text>
          <Text>
            <strong>カテゴリ:</strong> {mainCategoryName} / {subCategoryName}
          </Text>
          <Text>
            <strong>問題:</strong> {questionPreview}...
          </Text>
        </Link>
      </Stack>
    </Box>
  );
};
