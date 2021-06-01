/** Create Registration and Authorization API
 * 1. Saving creds in file
 * 2. Add 404 error
 */
const express = require('express');
const { saveCreds, readCreds } = require('./task2.storage');

const app = express();

app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());

app.post('/register', (req, res) => {
  const { login, password } = req.body;
  saveCreds(login, password);
  res.send('ready');
});

app.post('/auth', (req, res) => {
  const { login, password } = req.body;

  const creds = readCreds();
  res.send(login === creds.login && password === creds.password);
});

app.get('*', function (req, res) {
  res.status(404).send('Not found');
});

app.listen(3000);

module.exports = app;
