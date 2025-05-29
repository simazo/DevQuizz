import { ScoreResult } from "@shared/types";

export function toScoreResultDto(result: ScoreResult) {
  return {
    totalQuestions: result.totalQuestions,
    correctAnswers: result.correctAnswers,
    correctRate: result.correctRate,
    questionResultSummary: result.questionResultSummary,
  };
}