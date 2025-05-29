import { useParams } from 'react-router-dom';
import QuestionDetailContainer from '../container/QuestionDetailContainer';
import CenterLayout from '../components/layout/CenterLayout';
import { VStack } from '@chakra-ui/react';

const QestionDetailPage: React.FC = () => {
  const { id } = useParams();

  if (!id) return <p>不正なアクセスです</p>;
  return (
    <CenterLayout>
      <VStack align="start" mb={8}>
        <QuestionDetailContainer id={Number(id)} />
      </VStack>
    </CenterLayout>
  );
};

export default QestionDetailPage;
