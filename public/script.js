function CocktailCard(props) {
    if (props.hide) {
      return null;
    }
  
    return (
        <div className="cocktailCard">
            <p>{props.randomCocktailName}</p>
            <img src={props.randomCocktailImage} alt="Random cocktail" width="500" height="600"></img>
            <h2>Ingredients</h2>
            <li>{props.randomCocktailIngredient1}</li>
            <li>{props.randomCocktailIngredient2}</li>
            <li>{props.randomCocktailIngredient3}</li>
            <li>{props.randomCocktailIngredient4}</li>
            <li>{props.randomCocktailIngredient5}</li>
            <li>{props.randomCocktailIngredient6}</li>
            <li>{props.randomCocktailIngredient7}</li>
            <li>{props.randomCocktailIngredient8}</li>
            <li>{props.randomCocktailIngredient9}</li>
            <li>{props.randomCocktailIngredient10}</li>
            <li>{props.randomCocktailIngredient11}</li>
            <li>{props.randomCocktailIngredient12}</li>
            <li>{props.randomCocktailIngredient13}</li>
            <li>{props.randomCocktailIngredient14}</li>
            <li>{props.randomCocktailIngredient15}</li>
        </div>
    );
  }

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            randomCocktailName: "",
            randomCocktailImage: "",
            randomCocktailIngredient1: "",
            randomCocktailIngredient2: "",
            randomCocktailIngredient3: "",
            randomCocktailIngredient4: "",
            randomCocktailIngredient5: "",
            randomCocktailIngredient6: "",
            randomCocktailIngredient7: "",
            randomCocktailIngredient8: "",
            randomCocktailIngredient9: "",
            randomCocktailIngredient10: "",
            randomCocktailIngredient11: "",
            randomCocktailIngredient12: "",
            randomCocktailIngredient13: "",
            randomCocktailIngredient14: "",
            randomCocktailIngredient15: "",
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
                var randomCocktailIngredient1 = randomCocktail["drinks"][0]["strIngredient1"];
                var randomCocktailIngredient2 = randomCocktail["drinks"][0]["strIngredient2"];
                var randomCocktailIngredient3 = randomCocktail["drinks"][0]["strIngredient3"];
                var randomCocktailIngredient4 = randomCocktail["drinks"][0]["strIngredient4"];
                var randomCocktailIngredient5 = randomCocktail["drinks"][0]["strIngredient5"];
                var randomCocktailIngredient6 = randomCocktail["drinks"][0]["strIngredient6"];
                var randomCocktailIngredient7 = randomCocktail["drinks"][0]["strIngredient7"];
                var randomCocktailIngredient8 = randomCocktail["drinks"][0]["strIngredient8"];
                var randomCocktailIngredient9 = randomCocktail["drinks"][0]["strIngredient9"];
                var randomCocktailIngredient10 = randomCocktail["drinks"][0]["strIngredient10"];
                var randomCocktailIngredient11 = randomCocktail["drinks"][0]["strIngredient11"];
                var randomCocktailIngredient12 = randomCocktail["drinks"][0]["strIngredient12"];
                var randomCocktailIngredient13 = randomCocktail["drinks"][0]["strIngredient13"];
                var randomCocktailIngredient14 = randomCocktail["drinks"][0]["strIngredient14"];
                var randomCocktailIngredient15 = randomCocktail["drinks"][0]["strIngredient15"];
                app.setState({
                    randomCocktailName: randomCocktailName,
                    randomCocktailImage: randomCocktailImage,
                    randomCocktailIngredient1: randomCocktailIngredient1,
                    randomCocktailIngredient2: randomCocktailIngredient2,
                    randomCocktailIngredient3: randomCocktailIngredient3,
                    randomCocktailIngredient4: randomCocktailIngredient4,
                    randomCocktailIngredient5: randomCocktailIngredient5,
                    randomCocktailIngredient6: randomCocktailIngredient6,
                    randomCocktailIngredient7: randomCocktailIngredient7,
                    randomCocktailIngredient8: randomCocktailIngredient8,
                    randomCocktailIngredient9: randomCocktailIngredient9,
                    randomCocktailIngredient10: randomCocktailIngredient10,
                    randomCocktailIngredient11: randomCocktailIngredient11,
                    randomCocktailIngredient12: randomCocktailIngredient12,
                    randomCocktailIngredient13: randomCocktailIngredient13,
                    randomCocktailIngredient14: randomCocktailIngredient14,
                    randomCocktailIngredient15: randomCocktailIngredient15,
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
                randomCocktailIngredient1={this.state.randomCocktailIngredient1}
                randomCocktailIngredient2={this.state.randomCocktailIngredient2}
                randomCocktailIngredient3={this.state.randomCocktailIngredient3}                
                />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('main')
);