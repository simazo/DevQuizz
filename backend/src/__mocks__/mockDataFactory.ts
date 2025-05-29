import { Question } from '../domain/entity/question';
import { Choice, MainCategory, SubCategory } from "@shared/types";
import { QuestionRepository } from "../usecase/repository/questionRepository";
import { InMemoryQuestionRepository } from '../infrastructure/repository/inMemoryQuestionRepository';

export function createMockQuestionRepository(): QuestionRepository {
  // ✅ 仮データの準備
  const mockChoices: Choice[] = [
    { id: 1, choiceText: "Choice 1" },
    { id: 2, choiceText: "Choice 2" },
    { id: 3, choiceText: "Choice 3" },
    { id: 4, choiceText: "Choice 4" },
  ];
  const mockMainCategory: MainCategory = {
    id: 1,
    name: "main",
  };
  const mockSubCategory: SubCategory = {
    id: 1,
    name: "sub",
    mainCategoryId: 1,
  };

  const testQuestions: Question[] = [
    new Question({
      id: 1,
      questionText: '私は誰でしょう？',
      choices: mockChoices,
      mainCategory: mockMainCategory,
      subCategory: mockSubCategory,
      correctAnswerId: 1,
      explanation: '解説',
      hint: 'ヒント'
    }),
    new Question({
    id: 2,
    questionText: 'ここはどこ？',
    choices: mockChoices,
    mainCategory: mockMainCategory,
    subCategory: mockSubCategory,
    correctAnswerId: 1,
    explanation: '解説',
    hint: 'ヒント'
  }),
  ];

  return new InMemoryQuestionRepository(testQuestions);
}