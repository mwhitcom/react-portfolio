const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3333;

app.use(express.static(`${__dirname}/public`));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});

app.listen(port, () => {
  console.log(`App is listening on ${port}`);
});