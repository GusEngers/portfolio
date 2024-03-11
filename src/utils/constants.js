require('dotenv').config();

module.exports = {
  // Variables de entorno para la ejecución de la aplicación
  PORT: process.env.PORT || 3000,
  DB_URI: process.env.DB_URI,
  GUS_MAILER_URI: process.env.GUS_MAILER_URI,
  
  // Constantes
  TYPES: ['full-stack', 'back-end', 'front-end', 'otros'],
};
