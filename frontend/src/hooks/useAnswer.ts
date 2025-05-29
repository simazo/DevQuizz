import { useState } from 'react';
import type { UserAnswer } from '@shared/types';

export const useAnswer = () => {
  const [answers, setAnswers] = useState<UserAnswer[]>(() => {
    // 初期値としてセッションストレージから保存された回答を取得
    // もし保存されていなければ空の配列を返す
    const saved = localStorage.getItem('userAnswers');
    return saved ? JSON.parse(saved) : [];
  });

  const addAnswer = (answer: UserAnswer) => {
    setAnswers(prev => {
      const updated = [...prev, answer];
      localStorage.setItem('userAnswers', JSON.stringify(updated));
      return updated;
    });
  };

  const resetAnswers = () => {
    setAnswers([]);
    localStorage.removeItem('userAnswers');
  };

  return {
    answers,
    addAnswer,
    resetAnswers,
  };
};