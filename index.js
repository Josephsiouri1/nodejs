var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mysql = require("mysql");

app.set("view engine", "ejs");

var urlencodedParser = bodyParser.urlencoded({ extended: false });

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "webbserverprogrammering",
});

app.get("/chatbot", function (req, res) {
  res.render("chatbot"); //passing data to the view
});

app.post("/chatbot", urlencodedParser, function (req, res) {
  let sql = "SELECT * FROM chatbot WHERE input = '" + req.body.input + "'";

  con.query(sql, function output(err, result, fields) {
    if (result[0] !== undefined) {
      res.render("bot_answer", {
        input: req.body.input,
        output: result[0].output,
      }); //passing data to the view
    } else {
      res.render("404");
    }
  });
});

app.listen(3000);
console.log("listening to port 3000");
