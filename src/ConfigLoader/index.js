class ConfigLoader {
  constructor(config) {
    this.config = config;
  }

  loadConfig() {
    if (!this.isDefineMaxSizeFolder()) {
      this.config.max_size_folder = 4194304000;
    }

    if (!this.isDefineCache()) {
      this.config.cache = true;
    }
    return this.config;
  }

  isDefineMaxSizeFolder() {
    return this.config.max_size_folder ? true : false;
  }

  isDefineCache() {
    return this.config.cache ? true : false;
  }

}

module.exports = ConfigLoader;
