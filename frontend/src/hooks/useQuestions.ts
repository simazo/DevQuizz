import { useEffect, useState } from 'react';
import { fetchQuestions } from '../api/questionApi';
import type { Question } from '@shared/types';
import type { FetchQuestionsParams } from '../types/fetchQuestionsParams'
import { FETCH_STATUS, createInitialFetchState, type FetchState } from '../types/fetchState';

export const useQuestions = ({categoryId, limit}: FetchQuestionsParams) => {
  const [questionState, setQuestionState] = useState<FetchState<Question[]>>(createInitialFetchState());
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // ローディング・成功・失敗時は再 fetch しない
    if (questionState.status !== FETCH_STATUS.IDLE) return;

    setQuestionState((prev) => ({ ...prev, status: FETCH_STATUS.LOADING }));

    const load = async () => {
      try{
        const result = await fetchQuestions(categoryId, limit);
        setQuestionState({ data: result, status: FETCH_STATUS.SUCCESS, error: '' });
      } catch (err) {
        console.log(err);
        setQuestionState({ data: null, status: FETCH_STATUS.ERROR, error: '問題の取得に失敗しました' });
      }
    };

    load();
  }, []); // 問題文の取得は最初の1回だけ

  const next = () => {
    if (questionState.data && currentIndex < questionState.data.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const hasNext = !!questionState.data && currentIndex < questionState.data.length - 1;

  return {
    question: questionState.data?.[currentIndex] ?? null,
    loading: questionState.status === FETCH_STATUS.LOADING,
    error: questionState.error,
    next,
    hasNext,
    currentIndex,
    total: questionState.data?.length ?? 0,
  };
};