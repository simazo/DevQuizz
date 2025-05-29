import axios from 'axios';
import type { Question } from '@shared/types';

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

export const fetchQuestions = async (
  mainCategory: number,
  limit: number
): Promise<Question[]> => {
  const response = await axios.get<Question[]>(
    `${apiBaseUrl}/questions`,
    {
      params: {
        main_category: mainCategory,
        limit,
      },
    }
  );
  return response.data;
};