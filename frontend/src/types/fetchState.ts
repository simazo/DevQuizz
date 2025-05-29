export const FETCH_STATUS = {
  IDLE: 'idle',
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
} as const;

export type FetchStatus = typeof FETCH_STATUS[keyof typeof FETCH_STATUS];

// 任意の型 T に対する fetch 状態（data, status, error）を型として定義
// data: T | null: 取得したデータ (例：T が Question[] の場合 → data: Question[] | null)
// status: FetchStatus: 状態（例：'idle', 'loading', 'success', 'error'）
// error: string: エラーがあればそのメッセージ、なければ空文字
export type FetchState<T> = {
  data: T | null;
  status: FetchStatus;
  error: string;
};

// 任意の型 型 T に応じた FetchState<T> の初期値（初期状態）を作る関数
export const createInitialFetchState = <T>(): FetchState<T> => ({
  data: null,
  status: FETCH_STATUS.IDLE,
  error: '',
});