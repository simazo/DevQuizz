import { FastifyInstance } from "fastify";
import { GetQuestionsByMainCategoryUseCase } from "../../usecase/getQuestionsByMainCategoryUseCase";
import { getQuestionsByMainCategoryController } from "../controllers/getQuestionsByMainCategoryController";
import { Logger } from "../../application/logger/logger";

export async function registerQuestionsRoutes(
  fastify: FastifyInstance,
  useCase: GetQuestionsByMainCategoryUseCase,
  logger: Logger
) {
  fastify.get("/questions", getQuestionsByMainCategoryController(useCase, logger));
}