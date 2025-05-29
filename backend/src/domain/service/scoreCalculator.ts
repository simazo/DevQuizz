import { Question } from '../../domain/entity/question';
import { UserAnswer, ScoreResult, QuestionResultSummary } from "@shared/types";

export function calculateScore(
  questions: Question[], 
  userAnswers: UserAnswer[],
): ScoreResult {
  
  // 出題順で結果を構築
  const questionResultSummary: QuestionResultSummary[] = userAnswers.map(userAnswer => {
    const q = questions.find(q => q.id === userAnswer.questionId)!;
    const isCorrect = q.correctAnswerId === userAnswer.selectedId;

    return {
      id: q.id,
      questionPreview: q.questionText.slice(0, 30),
      subCategoryId: q.subCategory.id,
      subCategoryName: q.subCategory.name,
      mainCategoryId: q.mainCategory.id,
      mainCategoryName: q.mainCategory.name,
      isCorrect,
    };
  });

  const correctAnswers = questionResultSummary.filter(q => q.isCorrect).length;

  return {
    totalQuestions: questions.length,
    correctAnswers,
    questionResultSummary,
    correctRate: correctAnswers / questions.length,
  };
}
