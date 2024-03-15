/**
 * Clase para manejar los errores producidos al realizar una operación con la base de datos
 */
class ErrorDB extends Error {
  /**
   * @param {String} message Mensaje de error
   * @param {Error} log Objeto de error original
   */
  constructor(log) {
    super('Error al obtener los datos de la Base de Datos');
    this.log = log;
    this.statusCode = 400;
  }

  /**
   * @returns Respuesta del servidor con el mensaje de error y código de estado HTTP
   */
  response() {
    console.log(`[DB-ERROR] ${this.log.message}`);
    return { message: this.message, statusCode: this.statusCode };
  }
}

/**
 * Clase para manejar los errores controlados de contrladores, servicios, etc.
 */
class ErrorResponse extends Error {
  /**
   * @param {String} message Mensaje de error
   * @param {Number} statusCode Código de estado HTTP
   * @param {[String]} errors Lista de mensajes de error adicionales
   */
  constructor(message, statusCode = 400, errors = []) {
    super(message);
    this.statusCode = statusCode;
    this.errors = errors;
  }

  /**
   * @returns Respuesta del servidor con el mensaje de error, el código de estado HTTP y los errores opcionales
   */
  response() {
    console.log(`[LOG-ERROR] Error response: ${this.message}`);
    let body = {
      message: this.message,
      statusCode: this.statusCode,
    };
    if (this.errors.length > 0) {
      body.errors = this.errors;
    }
    return body;
  }
}

module.exports = { ErrorDB, ErrorResponse };
