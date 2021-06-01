const fs = require('fs');

const fileName = 'reg.txt';
const devider = ':';
const fsOptions = {
  encoding: 'utf-8',
};

const saveCreds = (login, password) => {
  fs.writeFileSync(fileName, `${login}${devider}${password}`, fsOptions);
};

const readCreds = () => {
  const data = fs.readFileSync(fileName, fsOptions);
  if (data) {
    const [login, password] = data.split(devider);
    return { login, password };
  }
  return null;
};

module.exports = {
  saveCreds,
  readCreds,
};
