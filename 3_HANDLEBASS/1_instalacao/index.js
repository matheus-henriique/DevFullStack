const PORT = 3000;

const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('home', {layout: false});
});

app.listen(PORT, ()=>{
    console.log("Rodando");
}); 