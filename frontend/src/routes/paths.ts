export const PATHS = {
  HOME: '/',
  CATEGORY: '/category/:categoryKey',
  RESULT: '/result',
  QUESTION_DETAIL: '/questions/:id',
};

export const generateCategoryPath = (categoryKey: string) =>
  PATHS.CATEGORY.replace(':categoryKey', categoryKey);