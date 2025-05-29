import { FastifyReply, FastifyRequest } from "fastify";
import { GetQuestionsByMainCategoryUseCase } from "../../usecase/getQuestionsByMainCategoryUseCase";
import { GetQuestionsByMainCategoryRequest } from "../request/getQuestionsByMainCategoryRequest";
import { HttpError, BaseError } from "../../error";
import { toQuestionListDto } from "../dto/questionDto";
import { Logger } from "../../application/logger/logger";

export function getQuestionsByMainCategoryController(useCase: GetQuestionsByMainCategoryUseCase, logger: Logger) {
  return async function (
    request: FastifyRequest<{
      Querystring: { mainCategory?: string; limit?: string }
    }>,
    reply: FastifyReply
  ){
    logger.info("[Controller] /questions クエリ受信", request.query);

    try {
      const parsed = GetQuestionsByMainCategoryRequest.fromQuery(request.query);
      logger.info(`[Controller] リクエストパース成功: mainCategory=${parsed.mainCategory}, limit=${parsed.limit}`);

      const questions = await useCase.execute(parsed.mainCategory, parsed.limit);
      logger.info(`[Controller] クイズ取得成功: 件数=${questions.length}`);

      reply.send(toQuestionListDto(questions));
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