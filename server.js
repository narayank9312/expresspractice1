const express = require('express');

const app = express();

app.get('/hello', (req, res) => {
  let name = 'guest';
  if (req.query.user) {
    name = req.query.user;
  }
  res.send('Hello world ' + name);
});

console.log(__dirname + '/public');
app.use('/xyz', express.static(__dirname + '/public'));

app.listen(4321, () => {
  console.log('server started on http://localhost:4321');
});
