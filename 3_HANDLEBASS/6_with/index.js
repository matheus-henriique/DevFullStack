const PORT = 3000;

const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.set('views', './views');


app.get("/post", (req, res) => {
    const post = {
        title:"Aprendendo Node.js",
        category: "Javascripts",
        body: "Este artigo vai te ajudar a aprender Node.js",
        comments: 4
    };

    res.render('post', {post})
});

app.get('/', (req, res) => {
    
    const usuario = {
        nome: "Matheus",
        profissao: "Programador",
        idade: 19
    }

    const auth = true;
    
    res.render('home', {usuario, auth});
});

app.get('/dashboard', (req, res) => {
    const items = [`item a`, `item b`, `item c`]
    res.render('dashboard', {items})
});

app.listen(PORT, ()=>{
    console.log("Rodando");
}); 