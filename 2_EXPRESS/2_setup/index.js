const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Oi, balde");
});

app.listen(3000, ()=>{
    console.log("server rodando")
})