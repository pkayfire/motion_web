var express = require('express');
var compress = require('compression');

var app = express();

var router = express.Router();

router.use(function(req, res, next) {
  next();
});

global.setImmediate = global.setImmediate || process.nextTick.bind(process);

app.use(compress());
app.use(express.static(__dirname + '/dist/'));

app.get('*', function(req, res){
  res.sendFile(__dirname + '/dist/index.html');
});

app.listen(process.env.PORT || 5000);
console.log("Starting Express Server for motion_web...");
