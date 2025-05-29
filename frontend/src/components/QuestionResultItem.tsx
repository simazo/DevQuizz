import { Link } from 'react-router-dom';
import { PATHS } from '../routes/paths';

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
    <li style={{ marginBottom: '1rem' }}>
      <div>
        <strong>【{index + 1}問目】</strong>
        <span
          style={{
            color: isCorrect ? 'green' : 'red',
            fontWeight: 'bold',
            marginLeft: '1rem',
          }}
        >
          {isCorrect ? '正解' : '不正解'}
        </span>
      </div>
      <div>
        <strong>ID:</strong> {id},
        <strong> カテゴリ:</strong> {mainCategoryName} / {subCategoryName}
      </div>
      <div>
        <strong>問題:</strong> {questionPreview}...
      </div>
      <div>
        <Link to={PATHS.QUESTION_DETAIL.replace(':id', id.toString())}>
          この問題を詳しく見る
        </Link>
      </div>
    </li>
  );
};
