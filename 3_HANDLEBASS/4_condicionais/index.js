const PORT = 3000;

const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.set('views', './views');


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
    res.render('dashboard')
});

app.listen(PORT, ()=>{
    console.log("Rodando");
}); 