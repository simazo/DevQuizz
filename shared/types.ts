export type Choice = {
  id: number;
  choiceText: string;
}

export type MainCategory = {
  id: number;
  name: string;
}

export type SubCategory = {
  id: number;
  name: string;
  mainCategoryId: number;
}

export type Question = {
  id: number;
  questionText: string;
  choices: Choice[];
  // mainCategory: MainCategory;
  // subCategory: SubCategory;
  mainCategoryId: number;
  mainCategoryName: string;
  subCategoryId: number;
  subCategoryName: string;
  hint: string;
};

export type UserAnswer = {
  questionId: number;
  selectedId: number;
};

export type QuestionResultSummary = {
  id: number;
  questionPreview: string;
  subCategoryId: number;
  subCategoryName: string;
  mainCategoryId: number;
  mainCategoryName: string;
  isCorrect: boolean; // 正解かどうか
};

export type ScoreResult = {
  totalQuestions: number; // 全問題数
  correctAnswers: number; // 正解数
  questionResultSummary: QuestionResultSummary[];
  correctRate: number; // 正解率
};