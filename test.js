//var http = require("http");
//var fs = require("fs");
/*
var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.set("view engine", "ejs");

var urlencodedParser = bodyParser.urlencoded({ extended: false });
/*
app.use('/assests', function(req, res, next){ //everytime an url include /assests till middleware fires up
  console.log(req.url);
  next(); //move on to the next request
});
*/
//express verson
//app.use("/assests", express.static("assests"));//handling the following folder.

/*
var server = http.createServer(function (req, res) {
  console.log("request was made: " + req.url);
  if (req.url === "/home" || req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + "/chatbot.html").pipe(res);
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + "/404.html").pipe(res);
  }
});
*/
/*
app.get("/profile/:name", function (req, res) {
  res.sendFile(__dirname + "/chatbot.html", { person: req.params.name });
});
*/

/*
app.post("/chatbot", urlencodedParser, function (req, res) {
  res.render("bot_answer", { data: req.body }); //passing data to the view
});
*/
//server.listen(3000, "127.0.0.1");

/*
app.get("/minundersida", function (req, res) {
  res.send("Välkommen till min undersida!");
});

app.post("/", function (req, res) {
  res.send("Sida med post!");
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  var sql =
    "CREATE TABLE guestbook (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(50), email VARCHAR(50), tel INT(30), comment VARCHAR(100))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});

*/
