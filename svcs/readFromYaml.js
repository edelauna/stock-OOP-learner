const fs = require('fs');
const yaml = require('js-yaml');
const path = require('path');

function readFromYaml (confFileName){
  try {
    let fileContents = fs.readFileSync(path.join(__dirname, '../confs', confFileName), 'utf8');
    return yaml.safeLoad(fileContents);
  } catch (e) {
    console.error(e);
  }
}

module.exports = readFromYaml