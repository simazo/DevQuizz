import { Question } from "../../domain/entity/question";

export function toQuestionResponseDto(q: Question) {
  return {
    id: q.id,
    questionText: q.questionText,
    choices: q.choices,
    mainCategoryId: q.mainCategory.id, // フロントで扱いやすいようフラットにして返す
    mainCategoryName: q.mainCategory.name,
    subCategoryId: q.subCategory.id,
    subCategoryName: q.subCategory.name,
    hint: q.hint,
    explanation: q.explanation,
    correctAnswerId: q.correctAnswerId,
  };
}

export function toQuestionListDto(questions: Question[]) {
  return questions.map(toQuestionResponseDto);
}