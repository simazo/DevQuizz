import axios from 'axios';
import type { Question } from '@shared/types';

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

export const fetchQuestionDetail = async (
  id: number
): Promise<Question> => {
  const response = await axios.get<Question>(
    `${apiBaseUrl}/questions/${id}`,
  );
  return response.data;
};