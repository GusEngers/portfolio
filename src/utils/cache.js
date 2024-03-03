const NodeCache = require('node-cache');

class Cache {
  constructor() {
    this.__cache = new NodeCache({
      stdTTL: 1000 * 60 * 60,
    });
  }

  /**
   * @description Verifica si una clave está cacheada
   * @param {string} key Clave de cache para verificar
   * @returns Boolean indicando si la clave está cacheada o no
   */
  has(key) {
    return this.__cache.has(key);
  }

  /**
   * @description Obtiene los datos alojados en la clave de cache
   * @param {string} key Clave de cache
   * @returns Valor alojado en la clave de cache
   */
  get(key) {
    return JSON.parse(this.__cache.get(key));
  }

  /**
   * @description Almacena en cache el valor dado en la clave especificada
   * @param {string} key Clave de cache
   * @param {any} value Valor que se almacenará en cache
   */
  set(key, value) {
    this.__cache.set(key, JSON.stringify(value));
  }
}

const cache = new Cache();

module.exports = cache;
