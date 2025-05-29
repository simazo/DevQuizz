import { QuestionRepository } from "./repository/questionRepository";
import { Question } from "../domain/entity/question";
import { AppError } from "../error/appError";
import { wrapError } from "../error/wrapError";
import { Logger } from "../application/logger/logger";

export class GetQuestionByIdUseCase {
  constructor(
    private repo: QuestionRepository,
    private logger: Logger
  ) {}

  async execute(id: number): Promise<Question> {
    try {
      const question = await this.repo.getQuestionById(id);
      this.logger.info(`[GetQuestionByIdUseCase] ID ${id} の問題を取得`);
      return question;
    } catch (error) {
      this.logger.error(`[GetQuestionByIdUseCase] ID ${id} の問題取得に失敗`, error);
      throw wrapError(error, AppError, `ID ${id} の問題の取得に失敗しました`);
    }
  }
}
