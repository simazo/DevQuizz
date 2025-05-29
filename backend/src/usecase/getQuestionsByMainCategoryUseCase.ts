import { QuestionRepository } from "./repository/questionRepository";
import { Question } from "../domain/entity/question";
import { AppError } from "../error/appError";
import { wrapError } from "../error/wrapError";
import { Logger } from "../application/logger/logger";

export class GetQuestionsByMainCategoryUseCase {
  constructor(
    private repo: QuestionRepository,
    private logger: Logger
  ) {}

  async execute(mainCategory: number, limit: number ): Promise<Question[]> {
    try {
      const questions = await this.repo.getQuestionsByCategory(mainCategory, limit);
      this.logger.info(`[GetQuestionsUseCase] カテゴリ ${mainCategory} の問題を ${questions.length} 件取得`);
      return questions;
    } catch (error) {
      this.logger.error("[GetQuestionsUseCase] DBからの取得に失敗", error);
      throw wrapError(error, AppError, "問題の取得に失敗しました");
    }
  }
}
