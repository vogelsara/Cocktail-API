const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('./public'));
const favoritCocktails = [];

app.listen(3000, () => console.log('server is listening'));

function getCocktailByName(cocktailName) {
    for(var i = 0; i < favoritCocktails.length; i++){
        var currentCocktail = favoritCocktails[i]
        if(currentCocktail["favoritCocktailName"] == cocktailName){
            return currentCocktail;
        }
    }
    return false;
}

app.post('/api/cocktails', (req, res) => {
    const cocktail = {...req.body};
    if(!getCocktailByName(cocktail["favoritCocktailName"])){
        favoritCocktails.push(cocktail);
        res.status(201).json(cocktail);
        console.log(favoritCocktails);
    }else{
        res.status(405).json({"message": "Cannot create " + cocktail["favoritCocktailName"] + ". Cocktail already exists."});
    }
})

app.get('/api/cocktails', (req, res) => res.json(favoritCocktails));
