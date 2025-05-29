import { useEffect, useState } from "react";
import { postScore } from "../api/scoreApi";
import type { UserAnswer, ScoreResult } from "@shared/types";

export const useScore = () => {
  const [score, setScore] = useState<ScoreResult | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const raw = localStorage.getItem("userAnswers");
    if (!raw) {
      setError("回答データが見つかりません。");
      return;
    }

    const answers: UserAnswer[] = JSON.parse(raw);
    
    if (!Array.isArray(answers) || answers.length === 0) {
      setError("有効な回答データがありません。");
      return;
    }

    const fetchScore = async () => {
      setLoading(true);
      setError(null);
      try {
        const result = await postScore(answers);
        setScore(result);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("スコアの取得に失敗しました。");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchScore();
  }, []);

  return { score, loading, error };
};