import type { RouteObject } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import QuestionsPage from '../pages/QuestionsPage';
import ResultPage from '../pages/ResultPage';
import QestionDetailPage from '../pages/QestionDetailPage';
import { PATHS } from './paths';

export const routes: RouteObject[] = [
  { path: PATHS.HOME, element: <HomePage /> },
  { path: PATHS.CATEGORY, element: <QuestionsPage /> },
  { path: PATHS.RESULT, element: <ResultPage /> },
  { path: PATHS.QUESTION_DETAIL, element: <QestionDetailPage /> },
];