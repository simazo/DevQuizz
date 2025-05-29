/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string;
  // 他に使う環境変数があればここに追記
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
