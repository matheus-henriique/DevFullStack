const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

const basePath = path.join(__dirname, "templates");
app.get("/", (req, res) => {
    res.sendFile(`${basePath}/index.html`);
});

app.listen(3000, ()=>{
    console.log("server rodando");
});