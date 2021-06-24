const express = require('express');
const request = require('request');

const app = express();

app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use(express.json());

app.get('/cat', function (req, response) {
  request('https://api.thecatapi.com/v1/images/search', { json: true }, (err, res, body) => {
    if (err) { 
      response.send({});
      return console.log(err);
    }
    const { url, width, height } = body[0];
    response.send({ url, width, height });
  });
});

app.listen(3002);

module.exports = app;
