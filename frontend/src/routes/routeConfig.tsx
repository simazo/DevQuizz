import type { RouteObject } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ArchitecturePage from '../pages/ArchitecturePage';
import DesignPatternPage from '../pages/DesignPatternPage';
import ResultPage from '../pages/ResultPage';
import QestionDetailPage from '../pages/QestionDetailPage';
import { PATHS } from './paths';

export const routes: RouteObject[] = [
  { path: PATHS.HOME, element: <HomePage /> },
  { path: PATHS.ARCHITECTURE, element: <ArchitecturePage /> },
  { path: PATHS.DESIGN_PATTERN, element: <DesignPatternPage /> },
  { path: PATHS.RESULT, element: <ResultPage /> },
  { path: PATHS.QUESTION_DETAIL, element: <QestionDetailPage /> },
];