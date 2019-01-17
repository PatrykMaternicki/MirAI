class CacheLoader {
  constructor() {
    this.activeCache = false;
    this.cache = [];
  }

  loadCache() {

  }

  setActiveCache() {
    this.activeCache = true;
  }

  isActiveCache() {
    return this.activeCache;
  }

  setCache(cache) {
    this.cache = cache;
  }

  getCache() {
    return this.cache;
  }
}

module.exports = CacheLoader;
