var express = require('express');
var path = require('path');

// Create new app
const app = express();
const port = process.env.PORT || 8000;

app.use(express.static('src'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});



app.listen(port, () => {
  console.log(`Express server is up on port ${port}`);
});