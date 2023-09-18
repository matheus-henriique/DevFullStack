const express = require("express");
const path = require("path");
const app = express();

const basePath = path.join(__dirname, "templates");

// Dados de comparação quando fizer login
const user = {
    name: "Matheus",
    password: "12345"
};

// Renderiza tela de login
app.get("/", (req, res) => {
    res.sendFile(`${basePath}/login.html`);
});

// Renderiza tela de login
app.get("/login", (req, res) => {
    res.sendFile(`${basePath}/login.html`);
});

// Renderiza tela home
app.get("/home", (req, res) => {
    res.sendFile(`${basePath}/home.html`);
});

// Valida os dados de login
app.post("/login", (req, res) => {
    const {userName, password} = req.body;

    if(userName == user.name && password == user.passwordd) {
        return res.sendFile(`${basePath}/home.html`); 
    }

    res.sendFile(`${basePath}/login.html`);
});

app.listen(5000, ()=>{
    console.log("server rodando");
});