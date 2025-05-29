import { Question } from "../../domain/entity/question";
import type { Choice, MainCategory, SubCategory } from "@shared/types";

export class QuestionRecordMapper {
  static toDomain(record: {
    id: number;
    question_text: string;
    choice1: string;
    choice2: string;
    choice3: string;
    choice4: string;
    correct_answer_id: number;
    explanation: string;
    hint: string;
    main_category_id: number;
    main_category_name: string;
    sub_category_id: number;
    sub_category_name: string;
  }): Question {
    const choices: Choice[] = [
      { id: 1, choiceText: record.choice1 },
      { id: 2, choiceText: record.choice2 },
      { id: 3, choiceText: record.choice3 },
      { id: 4, choiceText: record.choice4 },
    ];

    const mainCategory: MainCategory = {
      id: record.main_category_id,
      name: record.main_category_name,
    };

    const subCategory: SubCategory = {
      id: record.sub_category_id,
      name: record.sub_category_name,
      mainCategoryId: record.main_category_id,
    };

    return new Question({
      id: record.id,
      questionText: record.question_text,
      choices,
      correctAnswerId: record.correct_answer_id,
      mainCategory: {
        id: record.main_category_id,
        name: record.main_category_name
      },
      subCategory: {
        id: record.sub_category_id,
        name: record.sub_category_name,
        mainCategoryId: record.main_category_id
      },
      explanation: record.explanation,
      hint: record.hint,
    });
  }

  static toPersistence(entity: Question): {
    question_text: string;
    choice1: string;
    choice2: string;
    choice3: string;
    choice4: string;
    correct_answer_id: number;
    explanation: string;
    hint: string;
    main_category_id: number;
    sub_category_id: number;
  } {
    return {
      question_text: entity.questionText,
      choice1: entity.choices[0].choiceText,
      choice2: entity.choices[1].choiceText,
      choice3: entity.choices[2].choiceText,
      choice4: entity.choices[3].choiceText,
      correct_answer_id: entity.correctAnswerId,
      explanation: entity.explanation,
      hint: entity.hint,
      main_category_id: entity.mainCategory.id,
      sub_category_id: entity.subCategory.id,
    };
  }
}
