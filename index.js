const express = require('express')
const app = express()
const port = 3000
const marked = require('marked');
const fs = require('fs')

app.get('/', function(req, res) {
  var path = __dirname + '/test.md';
  var file = fs.readFileSync(path, 'utf8');
  res.send(marked(file.toString()));
});


//server
app.listen(process.env.PORT || 3000,
	() => console.log("Server is running..."));

//local
//app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
