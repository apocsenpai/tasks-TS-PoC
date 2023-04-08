import express, { json } from "express";
var app = express();
app.use(json());
var PORT = 5000;
app.listen(PORT, function () { return console.log("Server listening in PORT: ".concat(PORT)); });
