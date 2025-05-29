import { useEffect, useState } from "react";
import { fetchQuestionDetail } from '../api/questionDetailApi';
import type { Question } from "@shared/types";
import { FETCH_STATUS, createInitialFetchState, type FetchState } from '../types/fetchState';

export const useQuestionDetail = (id: number) => {
  const [questionState, setQuestionState] = useState<FetchState<Question>>(createInitialFetchState());

  useEffect(() => {
    // ローディング・成功・失敗時は再 fetch しない
    if (questionState.status !== FETCH_STATUS.IDLE) return;

    setQuestionState((prev) => ({ ...prev, status: FETCH_STATUS.LOADING }));

    const load = async () => {
      try{
        const result = await fetchQuestionDetail(id);
        setQuestionState({ data: result, status: FETCH_STATUS.SUCCESS, error: '' });
      } catch (err) {
        console.log(err);
        setQuestionState({ data: null, status: FETCH_STATUS.ERROR, error: '問題の取得に失敗しました' });
      }
    };
    
  load();
  }, []); // 問題文の取得は最初の1回だけ

  return {
    question: questionState.data ?? null,
    loading: questionState.status === FETCH_STATUS.LOADING,
    error: questionState.error,
  };
};