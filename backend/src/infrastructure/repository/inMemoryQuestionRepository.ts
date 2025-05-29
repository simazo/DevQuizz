// 登録先はメモリ上
// 開発初期に利用した
// 今後テストでもスタブとして利用する予定

import { Question } from "../../domain/entity/question";
import { QuestionRepository } from "../../usecase/repository/questionRepository";

export class InMemoryQuestionRepository implements QuestionRepository {
  constructor(
    private questions: Question[],
  ) {}

  async getQuestionsByCategory(mainCategoryId: number, limit: number): Promise<Question[]> {
    return this.questions
      .filter((q) => q.mainCategory.id === mainCategoryId)
      .slice(0, limit);
  }

  async getQuestionsByIds(ids: number[]): Promise<Question[]> {
    return this.questions.filter(q => ids.includes(q.id));
  }

  async getQuestionById(id: number): Promise<Question> {
    const question = this.questions.find(q => q.id === id);
    if (!question) {
      throw new Error(`Question with id ${id} not found`);
    }
    return question;
  }

}
