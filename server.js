const express = require('express');
const path = require('path');
const ejs = require('ejs');
const wpConfig = require('./webpack.config');

const config = {
  port: (process.env.NODE_ENV === 'production') ? 8082 : 8081
};

var app = express();

app.use('/', express.static('dist'));

// Setup views format to .html
app.set('view engine', 'html');

// Setup EJS as the engine for rendering .html
app.engine('html', ejs.renderFile);

app.listen(config.port, function(){
  console.log(`Webpack Starter deploying on port ${config.port}`);
});
