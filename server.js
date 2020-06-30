const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('./public'));
const favoritCocktails = [];

app.listen(3000, () => console.log('server is listening'));

app.post('/api/cocktails', (req, res) => {
        const cocktail = {...req.body};
        favoritCocktails.push(cocktail);
        res.status(201).json(cocktail);
        console.log(favoritCocktails);
})

app.get('/api/cocktails', (req, res) => res.json(favoritCocktails));
