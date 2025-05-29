import { FastifyReply, FastifyRequest } from "fastify";
import { CalculateScoreUseCase } from "../../usecase/calculateScoreUseCace";
import { CalculateScoreRequest } from "../request/calculateScoreRequest";
import { toScoreResultDto } from "../dto/scoreResultDto";
import { Logger } from "../../application/logger/logger";
import { HttpError, BaseError } from "../../error";

export function calculateScoreController(useCase: CalculateScoreUseCase, logger: Logger){
  return async function (
    request: FastifyRequest,
    reply: FastifyReply
  ){
    try {
      const parsed = CalculateScoreRequest.fromBody(request.body);
      logger.info(`[Controller] リクエストパース成功: questionIds=${parsed.answers.map(a => a.questionId).join(",")}`);

      const result = await useCase.execute(parsed.answers);
      logger.info(`[Controller] 採点完了: 正解数=${result.correctAnswers}, 全体=${result.totalQuestions}`);

      reply.send(toScoreResultDto(result));
    } catch (error) {
      if (error instanceof HttpError) {
        logger.warn("[Controller] HttpError 応答", error.message);
        reply.status(error.statusCode).send({ error: error.message });
      } else if (error instanceof BaseError) {
        logger.warn("[Controller] BaseError 応答", error.message);
        reply.status(400).send({ error: error.message });
      } else {
        logger.error("[Controller] 想定外のエラー", error);
        reply.status(500).send({ error: "サーバーエラーが発生しました" });
      }
    }
  };
}