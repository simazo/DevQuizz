import { buildServer } from './buildServer';

async function main() {
  const server = await buildServer();

  try {
    await server.listen({ port: 3000, host: '0.0.0.0' });
    server.log.info('Server started on http://localhost:3000');
  } catch (err) {
    if (err instanceof Error) {
      server.log.error(`❌ サーバー起動失敗: ${err.message}`);
      server.log.error(err.stack);
    } else {
      server.log.error('❌ サーバー起動失敗 (unknown error):', err);
    }
    process.exit(1);
  }
}

main();