import dotenv from 'dotenv';
dotenv.config();

import Fastify from 'fastify';
import cors from '@fastify/cors';
import { registerQuestionRoutes } from './interface/routes/questionRoutes';
import { registerQuestionsRoutes } from './interface/routes/questionsRoutes'
import { registerScoreRoutes } from './interface/routes/scoreRoutes';
import { GetQuestionByIdUseCase } from './usecase/getQuestionByIdUseCase';
import { GetQuestionsByMainCategoryUseCase } from './usecase/getQuestionsByMainCategoryUseCase';
import { CalculateScoreUseCase } from './usecase/calculateScoreUseCace';
import { ConsoleLogger } from './infrastructure/logger/consoleLogger';
import { Logger } from './application/logger/logger';
import { createMockQuestionRepository } from './__mocks__/mockDataFactory';
import { SupabaseQuestionRepository } from './infrastructure/repository/supabaseQuestionRepository';

export async function buildServer() {
  const fastify = Fastify({ logger: true });
  
  // CORS設定
  await fastify.register(cors, {
    origin: process.env.CORS_ORIGIN || '*',
  });

  // DI: usecase ← repository
  const repositoryMode = process.env.REPOSITORY_MODE;
  const questionRepository = repositoryMode === 'mock'
    ? createMockQuestionRepository()
    : new SupabaseQuestionRepository();

  const logger: Logger = new ConsoleLogger();
  const questionUseCase = new GetQuestionByIdUseCase(questionRepository, logger);
  const questionsUseCase = new GetQuestionsByMainCategoryUseCase(questionRepository, logger);
  const scoreUseCase = new CalculateScoreUseCase(questionRepository, logger);

  // DI: route ← controller ← usecase
  await registerQuestionRoutes(fastify, questionUseCase, logger);
  await registerQuestionsRoutes(fastify, questionsUseCase, logger);
  await registerScoreRoutes(fastify, scoreUseCase, logger);

  return fastify;
}

