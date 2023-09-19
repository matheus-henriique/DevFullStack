const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');
const app = express();

const basePath = path.join(__dirname, "templates");

// Dados de comparação quando fizer login
const user = {
    name: "Matheus",
    password: "12345"
};

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }))

// Renderiza tela de login
app.get("/", (req, res) => {
    res.sendFile(`${basePath}/login.html`);
});

// Renderiza tela de login
app.get("/login", (req, res) => {
    res.sendFile(`${basePath}/login.html`);
});

// Renderiza tela home
app.get("/home/:name", (req, res) => {
    const userLogged = req.params.name;
    res.sendFile(`${basePath}/home.html`);

    console.log(`Usuário admin ${userLogged} logado.`);
});

// Valida os dados de login
app.post("/login", (req, res) => {
    const {userName, password} = req.body;

    if(userName == user.name && password == user.password) {
        res.redirect(`/home/${userName}`); 
        return;
    }

    res.redirect('/login'); 
});

app.listen(5000, ()=>{
    console.log("server rodando");
});