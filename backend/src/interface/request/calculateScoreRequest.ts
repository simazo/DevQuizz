import { UserAnswer } from "@shared/types";
import { AppError } from "../../error/appError";

export class CalculateScoreRequest {
  public readonly answers: UserAnswer[];
  private constructor(answers: UserAnswer[]) {
    this.answers = answers;
  }
  public static fromBody(body: any): CalculateScoreRequest {
    if (!body || !Array.isArray(body.answers)) {
      throw new AppError("リクエストボディは { answers: [...] } の形式で送信してください");
    }
    if (body.answers.length === 0) {
      throw new AppError("answersは空ではいけません");
    }
    const parsed: UserAnswer[] = body.answers.map((item: any) => {
      if (typeof item.questionId !== "number" || typeof item.selectedId !== "number") {
        throw new AppError("questionId と selectedId は数値で指定してください");
      }
      return {
        questionId: item.questionId,
        selectedId: item.selectedId,
      };
    });
    return new CalculateScoreRequest(parsed);
  }
} 