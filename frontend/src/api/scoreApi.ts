import axios from 'axios';
import type { UserAnswer, ScoreResult } from "@shared/types";

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

export const postScore = async (
  userAnswers: UserAnswer[]
): Promise<ScoreResult> => {

  try {
    const response = await axios.post<ScoreResult>(`${apiBaseUrl}/calculate-score`, { 
      answers: userAnswers 
    });
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const message =
        error.response?.data?.message || error.message || '予期せぬエラーが発生しました';
      throw new Error(message);
    }
    throw new Error('ネットワークエラーまたは不明なエラー');
  }
};