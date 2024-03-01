const app = require('./src/app');
const db = require('./src/config/db');
const { PORT } = require('./src/utils/constants');

/**
 * Ejecuta la conexión a la base de datos y pone en marcha
 * el servidor en el puerto indicado
 */
async function main() {
  try {
    // await db();
    app.listen(PORT, () => {
      console.log('[INFO] Server listening on Port:', PORT);
    });
  } catch (error) {
    console.error('[ERROR] Error starting server:', error);
    process.exit(1);
  }
}

main();
