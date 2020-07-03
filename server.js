const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('./public'));
const favoritCocktails = [];

app.listen(3000, () => console.log('server is listening'));

const nonExistentCocktailIndex = -1;

function getCocktailByName(cocktailName) {
    for(var i = 0; i < favoritCocktails.length; i++){
        var currentCocktail = favoritCocktails[i]
        if(currentCocktail["favoritCocktailName"] == cocktailName){
            return i;
        }
    }
    return nonExistentCocktailIndex;
}

app.post('/api/cocktails', (req, res) => {
    const cocktail = {...req.body};
    if(getCocktailByName(cocktail["favoritCocktailName"]) == nonExistentCocktailIndex){
        favoritCocktails.push(cocktail);
        res.status(201).json(cocktail);
        console.log(favoritCocktails);
    }else{
        res.status(405).json({"message": "Cannot create " + cocktail["favoritCocktailName"] + ". Cocktail already exists."});
    }
})

app.get('/api/cocktails', (req, res) => res.json(favoritCocktails));

app.delete('/api/cocktails/:id', (req, res) => {
    const cocktailName = req.params["id"];
    const cocktailIndex = getCocktailByName(cocktailName);

    if(cocktailIndex != nonExistentCocktailIndex) {
        favoritCocktails.splice(cocktailIndex, 1);
    }

    res.status(200).json({});
})
