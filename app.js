const express = require('express');
const createError = require('http-errors');
var path = require('path');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

app.get('/', async (req, res, next) => {
  res.sendFile('./Partials/index.html',{root:__dirname});
});

app.get('/add', async (req, res, next) => {
  res.sendFile('./Partials/postArticle.html',{root:__dirname});
});


app.use('/api', require('./routes/api.route'));

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  next(createError.NotFound());
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    status: err.status || 500,
    message: err.message,
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 @ http://localhost:${PORT}`));
