import { GetQuestionsByMainCategoryUseCase } from "../getQuestionsByMainCategoryUseCase";
import { Question } from "../../domain/entity/question";
import { InfraError } from "../../error";
import { AppError } from "../../error";
import { Logger } from "../../application/logger/logger";

const mockQuestions: Question[] = [
  new Question({
    id: 1,
    questionText: "dummy",
    choices: [
      { id: 1, choiceText: "a" },
      { id: 2, choiceText: "b" },
      { id: 3, choiceText: "c" },
      { id: 4, choiceText: "d" }
    ],
    mainCategory: { id: 1, name: "main" },
    subCategory: { id:1, name: "sub", mainCategoryId:1 },
    correctAnswerId: 1,
    explanation: "dummy",
    hint: "dummy"
  }),
  new Question({
    id: 2,
    questionText: "dummy2",
    choices: [
      { id: 1, choiceText: "a" },
      { id: 2, choiceText: "b" },
      { id: 3, choiceText: "c" },
      { id: 4, choiceText: "d" }
    ],
    mainCategory: { id: 1, name: "main" },
    subCategory: { id:1, name: "sub", mainCategoryId:1 },
    correctAnswerId: 1,
    explanation: "dummy2",
    hint: "dummy2"
  }),
];

const mockLogger = {
  info: jest.fn(),
  warn: jest.fn(),
  error: jest.fn(),
  debug: jest.fn(),
} as unknown as Logger;


describe("GetQuestionsByCategoryUseCase", () => {
  it("指定されたカテゴリの質問を取得できる", async () => {
    const mockRepo = {
      getQuestionsByCategory: jest.fn().mockResolvedValue(mockQuestions)
    };
    const useCase = new GetQuestionsByMainCategoryUseCase(mockRepo as any, mockLogger);
    const result = await useCase.execute(1, 2);
    expect(mockRepo.getQuestionsByCategory).toHaveBeenCalledWith(1, 2);
    expect(result).toHaveLength(2);
  });

  it("カテゴリが未指定の場合は例外を投げる", async () => {
    const mockRepo = { getQuestionsByCategory: jest.fn() };
    const useCase = new GetQuestionsByMainCategoryUseCase(mockRepo as any, mockLogger);

    await expect(useCase.execute(0, 10)).rejects.toThrow(AppError);
  });

  it("limitが0以下の場合は例外を投げる", async () => {
    const mockRepo = { getQuestionsByCategory: jest.fn() };
    const useCase = new GetQuestionsByMainCategoryUseCase(mockRepo as any, mockLogger);

    await expect(useCase.execute(1, 0)).rejects.toThrow(AppError);
  });

  it("limitが100を超える場合は例外を投げる", async () => {
    const mockRepo = { getQuestionsByCategory: jest.fn() };
    const useCase = new GetQuestionsByMainCategoryUseCase(mockRepo as any, mockLogger);

    await expect(useCase.execute(1, 101)).rejects.toThrow(AppError);
  });

  it("リポジトリでエラーが発生した場合はAppErrorに変換される", async () => {
    const mockRepo = {
      getQuestionsByCategory: jest.fn().mockRejectedValue(new InfraError("DB error"))
    };
    const useCase = new GetQuestionsByMainCategoryUseCase(mockRepo as any, mockLogger);

    await expect(useCase.execute(1, 10)).rejects.toThrow(AppError);
  });

});