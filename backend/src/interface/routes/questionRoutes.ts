import { FastifyInstance } from "fastify";
import { GetQuestionByIdUseCase } from "../../usecase/getQuestionByIdUseCase";
import { getQuestionByIdController } from "../controllers/getQuestionByIdController";
import { Logger } from "../../application/logger/logger";

export async function registerQuestionRoutes(
  fastify: FastifyInstance,
  useCase: GetQuestionByIdUseCase,
  logger: Logger
) {
  fastify.get("/questions/:id", getQuestionByIdController(useCase, logger));
}