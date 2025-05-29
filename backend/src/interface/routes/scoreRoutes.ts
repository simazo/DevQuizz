import { FastifyInstance } from "fastify";
import { CalculateScoreUseCase } from "../../usecase/calculateScoreUseCace";
import { calculateScoreController } from "../controllers/calculateScoreController";
import { Logger } from "../../application/logger/logger";

export async function registerScoreRoutes (
  fastify: FastifyInstance,
  useCase: CalculateScoreUseCase,
  logger: Logger
) {
  fastify.post("/calculate-score", calculateScoreController(useCase, logger));
}