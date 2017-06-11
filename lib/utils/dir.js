const fs = require('fs');

function Dir() {}

Dir.create = function(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
};

module.exports = Dir;