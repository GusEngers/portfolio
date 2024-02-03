const { connect } = require('mongoose');
const { DB_URI } = require('../utils/constants');

/**
 * Establece la conexión de la base de datos en la URI especificada
 */
async function db() {
  try {
    if (!DB_URI) throw new Error('URI not found');
    await connect(process.env.DB_URI).then(() => {
      console.log('[INFO] Successfully connected database');
    });
  } catch (error) {
    console.error('[ERROR] Error connecting to database:', error);
    process.exit(1);
  }
}

module.exports = db;
