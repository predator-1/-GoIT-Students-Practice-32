/**
 * Create new file and add to file any text
 * Read file and return text
 */
const fs = require('fs');
const path = require('path');

const fileName = 'file.txt';

const writeFile = text => {
  fs.writeFileSync(fileName, text, {
    encoding: 'utf-8',
  });
};

const readFile = () => {
  return fs.readFileSync(fileName, {
    encoding: 'utf-8',
  });
};

console.log(fileName);

module.exports = {
  writeFile,
  readFile,
};
