var app = require('./server-config');

var port = process.env.PORT || 9000;

app.listen(port, function() {
  console.log(`listening on http://localhost:${port}`);
});
