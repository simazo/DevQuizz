import { useParams, useNavigate } from 'react-router-dom';
import QuestionDetailContainer from '../container/QuestionDetailContainer';

const QestionDetailPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  if (!id) return <p>不正なアクセスです</p>;
  return (
    <>
      <button onClick={() => navigate(-1)}>← 採点結果に戻る</button>
      <QuestionDetailContainer id={Number(id)} />
    </>
  );
};

export default QestionDetailPage;
