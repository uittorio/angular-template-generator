var fs = require('fs');

function File() {}

File.create = function(dir, nameFile, extension, content, callback) {
  fs.writeFile(dir + "/" + nameFile + "." + extension, content, function(err) {
    if(err) {
      return console.log(err);
    }

    if (callback) {
      callback();
    }
  });
};

File.read = function(file, callback) {
  fs.readFile(file, "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }

    if (callback) {
      callback(data);
    }
  });
};

module.exports = File;