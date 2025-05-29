import { Question } from "../question";
import { Choice, MainCategory, SubCategory } from "@shared/types";
import { DomainError } from "../../../error";

const mockChoices: Choice[] = [
  { id: 1, choiceText: "Choice 1" },
  { id: 2, choiceText: "Choice 2" },
  { id: 3, choiceText: "Choice 3" },
  { id: 4, choiceText: "Choice 4" },
];

const mockMainCategory: MainCategory = {
  id: 1,
  name: "main",
};

const mockSubCategory: SubCategory = {
  id: 1,
  name: "sub",
  mainCategoryId: 1,
}

const emptyMainCategory: MainCategory = {
  id: 0,
  name: "",
};

describe("Question Entity", () => {
  it('正常にインスタンス生成できる', () => {
    const question = new Question({
      id: 1,
      questionText: '日本の首都は？',
      choices: mockChoices,
      mainCategory: mockMainCategory,
      subCategory: mockSubCategory,
      correctAnswerId: 1,
      explanation: '解説',
      hint: 'ヒント'
    });
    
    expect(question).toBeInstanceOf(Question);
    expect(question.questionText).toBe('日本の首都は？');
  });

  it('questionTextが空ならDomainErrorを投げる', () => {
    const question = () => new Question({
      id: 1,
      questionText: '',
      choices: mockChoices,
      mainCategory: mockMainCategory,
      subCategory: mockSubCategory,
      correctAnswerId: 1,
      explanation: '解説',
      hint: 'ヒント'
    });
    expect(question).toThrow(DomainError);
    expect(question).toThrow("問題文は必須です");
  });

  it('選択肢が1つ以下ならDomainErrorを投げる', () => {
    const question = () => new Question({
      id: 1,
      questionText: '問題文',
      choices: [{ id: 1, choiceText: 'A' }],
      mainCategory: mockMainCategory,
      subCategory: mockSubCategory,
      correctAnswerId: 1,
      explanation: '解説',
      hint: 'ヒント'
    });
    expect(question).toThrow(DomainError);
    expect(question).toThrow("選択肢は4つです");
  });

  it('correctAnswerIdが選択肢にないとDomainErrorを投げる', () => {
    const question = () => new Question({
      id: 1,
      questionText: '問題文',
      choices: mockChoices,
      mainCategory: mockMainCategory,
      subCategory: mockSubCategory,
      correctAnswerId: 99,
      explanation: '解説',
      hint: 'ヒント'
    });
    expect(question).toThrow(DomainError);
    expect(question).toThrow("正解の選択肢がchoicesに含まれていません");
  });

  it('カテゴリが空ならDomainErrorを投げる', () => {
    const question = () => new Question({
      id: 1,
      questionText: '問題文',
      choices: mockChoices,
      mainCategory: emptyMainCategory,
      subCategory: mockSubCategory,
      correctAnswerId: 1,
      explanation: '解説',
      hint: 'ヒント'
    });
    expect(question).toThrow(DomainError);
    expect(question).toThrow("Mainカテゴリが不正です");
  });

  it('解説が空ならDomainErrorを投げる', () => {
    const question = () => new Question({
      id: 1,
      questionText: '問題文',
      choices: mockChoices,
      mainCategory: mockMainCategory,
      subCategory: mockSubCategory,
      correctAnswerId: 1,
      explanation: '',
      hint: 'ヒント'
    });
    expect(question).toThrow(DomainError);
    expect(question).toThrow("解説は必須です");
  });

  it('ヒントが空ならDomainErrorを投げる', () => {
    const question = () => new Question({
      id: 1,
      questionText: '問題文',
      choices: mockChoices,
      mainCategory: mockMainCategory,
      subCategory: mockSubCategory,
      correctAnswerId: 1,
      explanation: '解説',
      hint: ''
    });
    expect(question).toThrow(DomainError);
    expect(question).toThrow("ヒントは必須です");
  });

})