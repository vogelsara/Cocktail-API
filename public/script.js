function CocktailCard(props) {
    if (props.hide) {
      return null;
    }

    var listOfIngredients = props.ingredients.map((ingredient) => <li key={ingredient}>{ingredient}</li>);
  
    return (
        <div className="cocktailCard">
            <h2>{props.randomCocktailName}</h2>
            <div class="cocktailImage">
                <img src={props.randomCocktailImage} alt="Random cocktail" width="500" height="600"></img>
                <div class="tape"></div>
            </div>
            <p>Ingredients:</p>
            <ul>{listOfIngredients}</ul>
            <p>{props.recipe}</p>
        </div>
    );
  }

class FavoritCocktail extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            cocktailCardIsHidden: true
        };

        this.changeState = this.changeState.bind(this);
    }

    changeState() {
        if(this.state.cocktailCardIsHidden){
            this.setState({cocktailCardIsHidden: false});
        } else {
            this.setState({cocktailCardIsHidden: true});
        }
    }

    render() {
        return (
            <li>
            <span onClick={this.changeState}>{this.props.name}</span><i className="fa fa-trash fa-sm" onClick={() => {this.props.deleteFavoritCocktail(this.props.name);}}></i>
            <CocktailCard
            hide={this.state.cocktailCardIsHidden}
            randomCocktailName={this.props.name}
            randomCocktailImage={this.props.image}
            ingredients={this.props.ingredients}
            recipe={this.props.recipe}
            />
            </li>
        );
    }
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

        var addToFavoritesButtonDisplay = "";
        if (this.state.buttonClicked) {
            addToFavoritesButtonDisplay = "block";
        } else {
            addToFavoritesButtonDisplay = "none";
        }

        var favoritCocktailList = this.state.favorits.map((favoritCocktail) =>
        <FavoritCocktail
        name={favoritCocktail["favoritCocktailName"]}
        image={favoritCocktail["favoritCocktailImage"]}
        ingredients={favoritCocktail["favoritCocktailIngredients"]}
        recipe={favoritCocktail["favoritCocktailRecipe"]}
        deleteFavoritCocktail={this.deleteFavoritCocktail}/>);

        return (
            <div id="flexContainer">
                <div class="left">
                    <button onClick={ () => this.getRandomCocktail()}>My random cocktail</button>
                    <CocktailCard
                    hide={!this.state.buttonClicked}
                    randomCocktailName={this.state.randomCocktailName}
                    randomCocktailImage={this.state.randomCocktailImage}
                    ingredients={this.state.randomCocktailIngredients}
                    recipe={this.state.randomCocktailRecipe}
                    />
                    <button style={{display: addToFavoritesButtonDisplay}} onClick={ () => this.saveFavoritCocktail()}>Add to my favorits</button>
                </div>
                <div class="right">
                    <ul>{favoritCocktailList}</ul>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('main')
);