function CocktailCard(props) {
    if (props.hide) {
      return null;
    }

    var listOfIngredients = props.ingredients.map((ingredient) => <li key={ingredient}>{ingredient}</li>);
  
    return (
        <div className="cocktailCard">
            <p>{props.randomCocktailName}</p>
            <img src={props.randomCocktailImage} alt="Random cocktail" width="500" height="600"></img>
            <h2>Ingredients</h2>
            <ul>{listOfIngredients}</ul>
            <p>{props.recipe}</p>
        </div>
    );
  }

function FavoritCocktail(props) {
    return (
    <li><a>{props.name}</a><i className="fa fa-trash fa-lg" onClick={() => {props.deleteFavoritCocktail(props.name);}}></i></li>
    );
}

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            randomCocktailName: "",
            randomCocktailImage: "",
            randomCocktailIngredients: [],
            randomCocktailRecipe: "",
            buttonClicked: false,
            favorits: []
        }
        this.getRandomCocktail = this.getRandomCocktail.bind(this);
        this.saveFavoritCocktail = this.saveFavoritCocktail.bind(this);
        this.deleteFavoritCocktail = this.deleteFavoritCocktail.bind(this);

        this.renderFavoritCocktails();
    }

    getRandomCocktail(e) {
        var xhttp = new XMLHttpRequest();
        var app = this;
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var randomCocktail = JSON.parse(this.responseText);
                var randomCocktailName = randomCocktail["drinks"][0]["strDrink"];
                var randomCocktailImage = randomCocktail["drinks"][0]["strDrinkThumb"];
                var randomCocktailIngredients = [];
                var randomCocktailRecipe = randomCocktail["drinks"][0]["strInstructions"];
                if (randomCocktail["drinks"][0]["strIngredient1"]) {
                    randomCocktailIngredients.push(randomCocktail["drinks"][0]["strIngredient1"]);
                }
                if (randomCocktail["drinks"][0]["strIngredient2"]) {
                    randomCocktailIngredients.push(randomCocktail["drinks"][0]["strIngredient2"]);
                }
                if (randomCocktail["drinks"][0]["strIngredient3"]) {
                    randomCocktailIngredients.push(randomCocktail["drinks"][0]["strIngredient3"]);
                }
                if (randomCocktail["drinks"][0]["strIngredient4"]) {
                    randomCocktailIngredients.push(randomCocktail["drinks"][0]["strIngredient4"]);
                }
                if (randomCocktail["drinks"][0]["strIngredient5"]) {
                    randomCocktailIngredients.push(randomCocktail["drinks"][0]["strIngredient5"]);
                }
                if (randomCocktail["drinks"][0]["strIngredient6"]) {
                    randomCocktailIngredients.push(randomCocktail["drinks"][0]["strIngredient6"]);
                }
                if (randomCocktail["drinks"][0]["strIngredient7"]) {
                    randomCocktailIngredients.push(randomCocktail["drinks"][0]["strIngredient7"]);
                }
                if (randomCocktail["drinks"][0]["strIngredient8"]) {
                    randomCocktailIngredients.push(randomCocktail["drinks"][0]["strIngredient8"]);
                }
                if (randomCocktail["drinks"][0]["strIngredient9"]) {
                    randomCocktailIngredients.push(randomCocktail["drinks"][0]["strIngredient9"]);
                }
                if (randomCocktail["drinks"][0]["strIngredient10"]) {
                    randomCocktailIngredients.push(randomCocktail["drinks"][0]["strIngredient10"]);
                }
                if (randomCocktail["drinks"][0]["strIngredient11"]) {
                    randomCocktailIngredients.push(randomCocktail["drinks"][0]["strIngredient11"]);
                }
                if (randomCocktail["drinks"][0]["strIngredient12"]) {
                    randomCocktailIngredients.push(randomCocktail["drinks"][0]["strIngredient12"]);
                }
                if (randomCocktail["drinks"][0]["strIngredient13"]) {
                    randomCocktailIngredients.push(randomCocktail["drinks"][0]["strIngredient13"]);
                }
                if (randomCocktail["drinks"][0]["strIngredient14"]) {
                    randomCocktailIngredients.push(randomCocktail["drinks"][0]["strIngredient14"]);
                }
                if (randomCocktail["drinks"][0]["strIngredient15"]) {
                    randomCocktailIngredients.push(randomCocktail["drinks"][0]["strIngredient15"]);
                }
                app.setState({
                    randomCocktailName: randomCocktailName,
                    randomCocktailImage: randomCocktailImage,
                    randomCocktailIngredients: randomCocktailIngredients,
                    randomCocktailRecipe: randomCocktailRecipe,
                    buttonClicked: true
                });
            }
        }
        xhttp.open("GET", "https://www.thecocktaildb.com/api/json/v1/1/random.php", true);
        xhttp.send();
    }

    saveFavoritCocktail(e) {
        var self = this;
        var body = {
            favoritCocktailName: this.state.randomCocktailName,
            favoritCocktailImage: this.state.randomCocktailImage,
            favoritCocktailIngredients: this.state.randomCocktailIngredients,
            favoritCocktailRecipe: this.state.randomCocktailRecipe
        }
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && parseInt(this.status/100) == 2) {
              console.log(JSON.parse(this.responseText));
              self.renderFavoritCocktails();
            }
            if(this.readyState == 4 && this.status == 405){
                var responseMessage = JSON.parse(this.responseText)["message"];
                alert(responseMessage);
            }
        }
        xhttp.open("POST", "/api/cocktails", true);
        xhttp.setRequestHeader("Content-Type", "application/json");
        xhttp.send(JSON.stringify(body));
    }

    deleteFavoritCocktail(cocktailName) {
        var self = this;
        var body = {
            favoritCocktailName: this.state.randomCocktailName,
            favoritCocktailImage: this.state.randomCocktailImage,
            favoritCocktailIngredients: this.state.randomCocktailIngredients,
            favoritCocktailRecipe: this.state.randomCocktailRecipe
        }
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && parseInt(this.status/100) == 2) {
              console.log(JSON.parse(this.responseText));
              self.renderFavoritCocktails();
            }
            if(this.readyState == 4 && this.status == 405){
                var responseMessage = JSON.parse(this.responseText)["message"];
                alert(responseMessage);
            }
        }
        xhttp.open("DELETE", "/api/cocktails/" + cocktailName, true);
        xhttp.setRequestHeader("Content-Type", "application/json");
        xhttp.send(JSON.stringify(body));
    }

    renderFavoritCocktails() {
        var self = this;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && parseInt(this.status/100) == 2) {
            var responseJson = JSON.parse(this.responseText);
            console.log(responseJson);
            self.setState({
                favorits: responseJson
            });
        }
        }
        xhttp.open("GET", "/api/cocktails", true);
        xhttp.setRequestHeader("Content-Type", "application/json");
        xhttp.send();
    }
    
    render() {

    var favoritCocktailList = this.state.favorits.map((favoritCocktail) => <FavoritCocktail name={favoritCocktail["favoritCocktailName"]} deleteFavoritCocktail={this.deleteFavoritCocktail} />);

        return (
            <div>
                <button onClick={ () => this.getRandomCocktail()}>My random cocktail</button>
                <CocktailCard
                hide={!this.state.buttonClicked}
                randomCocktailName={this.state.randomCocktailName}
                randomCocktailImage={this.state.randomCocktailImage}
                ingredients={this.state.randomCocktailIngredients}
                recipe={this.state.randomCocktailRecipe}
                />
                <button onClick={ () => this.saveFavoritCocktail()}>Add to my favorits</button>
                <ul>{favoritCocktailList}</ul>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('main')
);