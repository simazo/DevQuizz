import { Question } from "../../domain/entity/question";

export interface QuestionRepository {
  /**
   * 指定されたメインカテゴリに属する質問を最大limit件返す
   */
  getQuestionsByCategory(mainCategory: number, limit: number): Promise<Question[]>;

  /**
   * 指定された質問IDに対応する質問を複数返す
   */
  getQuestionsByIds(ids: number[]): Promise<Question[]>;

  /**
   * 指定された質問IDに対応する質問を1つだけ返す
   */
  getQuestionById(id: number): Promise<Question>;
}