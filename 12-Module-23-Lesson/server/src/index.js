const express = require('express');
const fs = require('fs');

const storageName = 'storage.json';
const app = express();
const fsOptions = {
  encoding: 'utf-8',
};

app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());

app.get('/notes', function (req, res) {
  const data = getStorageData();
  res.send(data);
});

app.get('/notes/:id', function (req, res) {
  const { id } = req.params;
  const data = getStorageData();
  if (id) {
    res.send(data.find(s => s.id == id));
    return;
  }
  res.send(data);
});

app.put('/notes/:id', function (req, res) {
  const { id } = req.params;
  const data = getStorageData();
  if (id) {
    const index = data.findIndex(s => s.id == id);
    if (index > -1) {
      const { text } = req.body;
      data[index].text = text;
      saveStorageData(data);
      res.send(data[index]);
      return;
    }
  }
  res.status(400).send('Element not found');
});

app.delete('/notes/:id', function (req, res) {
  const { id } = req.params;
  const data = getStorageData();
  if (id) {
    const index = data.findIndex(s => s.id == id);
    if (index > -1) {
      data.splice(index, 1);
      saveStorageData(data);
      res.send();
      return;
    }
  }
  res.status(400).send('Element not found');
});

app.post('/notes', function (req, res) {
  const data = getStorageData();
  let lastIndex = data.length ? data[data.length - 1].id : 0;
  const { text } = req.body;
  const newData = {
    text,
    id: (lastIndex += 1),
  };
  data.push(newData);
  saveStorageData(data);
  res.send(newData);
});

const getStorageData = () => {
  const data = fs.existsSync(storageName)
    ? fs.readFileSync(storageName, fsOptions)
    : null;
  if (data) {
    return JSON.parse(data);
  }
  return [];
};

const saveStorageData = data => {
  fs.writeFileSync(storageName, JSON.stringify(data), fsOptions);
};

app.listen(3002);

module.exports = app;
