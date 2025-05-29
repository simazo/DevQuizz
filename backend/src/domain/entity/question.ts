import { Choice, MainCategory, SubCategory } from "@shared/types";
import { DomainError } from "../../error";

export class Question {
  readonly id: number;
  readonly questionText: string;
  readonly choices: Choice[];
  readonly mainCategory: MainCategory;
  readonly subCategory: SubCategory;
  readonly correctAnswerId: number;
  readonly explanation: string;
  readonly hint: string;

  constructor(params: {
    id: number;
    questionText: string;
    choices: Choice[];
    mainCategory: MainCategory;
    subCategory: SubCategory;
    correctAnswerId: number;
    explanation: string;
    hint: string;
  }) {
    const {
      id,
      questionText,
      choices,
      mainCategory,
      subCategory,
      correctAnswerId,
      explanation,
      hint,
    } = params;
  
    if (!questionText.trim()) {
      throw new DomainError("問題文は必須です");
    }

    if (!choices || choices.length !== 4) {
      throw new DomainError("選択肢は4つです");
    }

    if (!choices.some((c) => c.id === correctAnswerId)) {
      throw new DomainError("正解の選択肢がchoicesに含まれていません");
    }

    if (!mainCategory || mainCategory.id <= 0 || !mainCategory.name.trim()) {
      throw new DomainError("Mainカテゴリが不正です");
    }

    if (!subCategory || subCategory.id <= 0 || !subCategory.name.trim()) {
      throw new DomainError("Subカテゴリが不正です");
    }

    if (!explanation.trim()) {
      throw new DomainError("解説は必須です");
    }

    if (!hint.trim()) {
      throw new DomainError("ヒントは必須です");
    }

    this.id = id;
    this.questionText = questionText;
    this.choices = choices;
    this.mainCategory = mainCategory;
    this.subCategory = subCategory;
    this.correctAnswerId = correctAnswerId;
    this.explanation = explanation;
    this.hint = hint;
  }
}