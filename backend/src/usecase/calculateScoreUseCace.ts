import { QuestionRepository } from "./repository/questionRepository"
import { Logger } from "../application/logger/logger"
import { ScoreResult, UserAnswer } from "@shared/types";
import { AppError } from "../error/appError";
import { wrapError } from "../error/wrapError";
import { calculateScore } from "../domain/service/scoreCalculator";

export class CalculateScoreUseCase {
  constructor (
    private repo: QuestionRepository,
    private logger: Logger
  ) {}

  async execute(answers: UserAnswer[]): Promise<ScoreResult> {
    try {
      const questionIds = answers.map(a => a.questionId);
      const questions = await this.repo.getQuestionsByIds(questionIds);
      
      if (questions.length === 0) {
        throw new AppError("該当する問題が見つかりませんでした");
      }
      this.logger.info(`[CalculateScoreUseCase] 回答件数=${answers.length}, 対象問題=${questions.length}`);
      return calculateScore(questions, answers);
    } catch (error) {
      this.logger.error("[CalculateScoreUseCase] スコア計算に失敗", error);
      throw wrapError(error, AppError, "スコア計算に失敗しました");
    }
  }

}