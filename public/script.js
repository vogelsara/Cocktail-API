function CocktailCard(props) {
    if (props.hide) {
      return null;
    }

    var listOfIngredients = props.ingredients.map((ingredient) => <li>{ingredient}</li>);
  
    return (
        <div className="cocktailCard">
            <p>{props.randomCocktailName}</p>
            <img src={props.randomCocktailImage} alt="Random cocktail" width="500" height="600"></img>
            <h2>Ingredients</h2>
            <ul>{listOfIngredients}</ul>
        </div>
    );
  }

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            randomCocktailName: "",
            randomCocktailImage: "",
            randomCocktailIngredients: [],
            buttonClicked: false
        }

        this.getRandomCocktail = this.getRandomCocktail.bind(this);
    }

    getRandomCocktail(e) {
        
        var xhttp = new XMLHttpRequest();

        var app = this;

        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var randomCocktail = JSON.parse(this.responseText);
                console.log(randomCocktail);
                var randomCocktailName = randomCocktail["drinks"][0]["strDrink"];
                var randomCocktailImage = randomCocktail["drinks"][0]["strDrinkThumb"];
                var randomCocktailIngredients = [];
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
                    buttonClicked: true
                });
            }
        }

        xhttp.open("GET", "https://www.thecocktaildb.com/api/json/v1/1/random.php", true);

        xhttp.send();
    }
    
    render() {
        return (
            <div>
                <button onClick={ () => this.getRandomCocktail()}>My random cocktail</button>
                <CocktailCard
                hide={!this.state.buttonClicked}
                randomCocktailName={this.state.randomCocktailName}
                randomCocktailImage={this.state.randomCocktailImage}
                ingredients={this.state.randomCocktailIngredients}

                />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('main')
);