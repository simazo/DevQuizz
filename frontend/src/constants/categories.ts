export type CategoryKey =
  | 'design_pattern'
  | 'architecture'
  | 'design_philosophy'
  | 'refactoring'
  | 'antipattern';

export interface CategoryConfig {
  key: CategoryKey;
  label: string;     // ボタン表示名
  title: string;     // クイズページのタイトル
  categoryId: number;
}

export const CATEGORIES: CategoryConfig[] = [
  {
    key: 'design_pattern',
    label: 'GoFデザインパターン',
    title: 'GoFデザインパターンに関するクイズ',
    categoryId: 1,
  },
  {
    key: 'architecture',
    label: 'アーキテクチャ',
    title: 'アーキテクチャに関するクイズ',
    categoryId: 2,
  },
  {
    key: 'design_philosophy',
    label: '設計哲学',
    title: '設計哲学に関するクイズ',
    categoryId: 3,
  },
  {
    key: 'refactoring',
    label: 'リファクタリング',
    title: 'リファクタリングに関するクイズ',
    categoryId: 4,
  },
];

export const CATEGORY_MAP = Object.fromEntries(
  CATEGORIES.map((c) => [c.key, c])
) as Record<CategoryKey, CategoryConfig>;
