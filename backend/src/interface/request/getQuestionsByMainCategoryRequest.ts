import { AppError } from "../../error/appError";

export class GetQuestionsByMainCategoryRequest {
  public readonly mainCategory: number;
  public readonly limit: number;

  private constructor(mainCategory: number, limit: number) {
    this.mainCategory = mainCategory;
    this.limit = limit;
  }

  public static fromQuery(query: { main_category?: string; limit?: string }): GetQuestionsByMainCategoryRequest {
    const mainCategory = Number(query.main_category);
    const limit = query.limit ? Number(query.limit) : 30;

    if (isNaN(mainCategory) || mainCategory <= 0) {
      throw new AppError("main category は正の数で指定してください");
    }

    if (isNaN(limit) || limit <= 0 || limit > 1000) {
      throw new AppError("limit は 1〜1000 の数値で指定してください");
    }

    return new GetQuestionsByMainCategoryRequest(mainCategory, limit);
  }
}