var express = require('express');
var app = require('./app');
var PORT = process.env.PORT || 3000;

app.listen(3000, function() {
  console.log('TODO app listening on port ' + PORT + '!');
});
