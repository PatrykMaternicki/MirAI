const os = require('os');
class SystemChecker {
  checkSystem() {
    return os.platform();
  }
}

module.exports = SystemChecker;
