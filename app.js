const express = require("express");
const app = express();








app.use(express.static(__dirname + '/public'));





app.get("/", function(req,res){

    res.sendFile(__dirname + "/index.html")
});


app.get("/contact.html", function(req,res){

    res.sendFile(__dirname + "/contact.html")
});


app.get("/appointment.html", function(req,res){

    res.sendFile(__dirname + "/appointment.html")
});

app.get("/index.html", function(req,res){

    res.sendFile(__dirname + "/index.html")
});


app.get("/login.html", function(req,res){

    res.sendFile(__dirname + "/login.html")
});










app.listen(3000, function(){
    console.log("Server is running fine")
});