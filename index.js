const express = require("express");
const path = require('path');
const ejs = require("ejs")
const app = express();
// set template engine 
app.set("view engine", "ejs")

// dang ky public
app.use (express.static("public"))
 
app.get("/", (req, res) =>{
   res.render("index");
});

app.get("/about", (req, res) =>{
    res.render("about");
 });

app.get("/contact", (req, res) =>{
   res.render("contact");
});

app.get("/post", (req, res) =>{
    res.render("post");
 });

app.listen(5000, () => {
    console.log("App listening on http://localhost:5000");
});
