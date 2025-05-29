import { FastifyReply, FastifyRequest } from "fastify";
import { GetQuestionByIdUseCase } from "../../usecase/getQuestionByIdUseCase";
import { HttpError, BaseError } from "../../error";
import { toQuestionResponseDto } from "../dto/questionDto";
import { Logger } from "../../application/logger/logger";

export function getQuestionByIdController(useCase: GetQuestionByIdUseCase, logger: Logger) {
  return async function (
    request: FastifyRequest<{Params: { id: string };}>,
    reply: FastifyReply
  ){
    logger.info("[Controller] /questions/:id リクエスト受信", request.params);
    try {
      const id = parseInt(request.params.id, 10);
      if (isNaN(id)) {
        logger.warn("[Controller] 不正なIDパラメータ");
        reply.status(400).send({ error: "idは数値で指定してください" });
        return;
      }

      const question = await useCase.execute(id);
      logger.info(`[Controller] クイズ取得成功: id=${id}`);
      reply.send(toQuestionResponseDto(question));
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
};