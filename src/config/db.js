const { connect } = require('mongoose');
require('dotenv').config();

async function db() {
  try {
    await connect(process.env.DB_URI).then(() => {
      console.log('[INFO] Successfully connected database');
    });
  } catch (error) {
    console.error('[ERROR] Error connecting to database:', error);
    process.exit(1);
  }
}

module.exports = db;
