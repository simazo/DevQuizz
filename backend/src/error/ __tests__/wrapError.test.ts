import { wrapError } from "../wrapError";
import { AppError } from "../appError";

describe("wrapError", () => {
  it("すでに AppError ならそのまま返す", () => {
    const original = new AppError("元のエラー");
    const result = wrapError(original, AppError, "ラップ用のメッセージ");
    expect(result).toBe(original);
  });

  it("異なるエラーなら新しい AppError に包む", () => {
    const error = new Error("DB接続失敗");
    const result = wrapError(error, AppError, "アプリケーションエラー");
    expect(result).toBeInstanceOf(AppError);
    expect(result.message).toBe("アプリケーションエラー");
  });

  it("非 Error オブジェクトなら cause は undefined になる", () => {
    const result = wrapError("これはエラーじゃない", AppError, "文字列をラップ");
    expect(result).toBeInstanceOf(AppError);
    expect(result.message).toBe("文字列をラップ");
    expect((result as any).cause).toBeUndefined(); // cause が明示されてない場合
  });

});
