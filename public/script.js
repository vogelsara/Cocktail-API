
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            randomCocktailName: ""
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
                app.setState({
                    randomCocktailName: randomCocktailName
                });
            }
        }

        xhttp.open("GET", "https://www.thecocktaildb.com/api/json/v1/1/random.php", true);

        xhttp.send();
    }
    
    render() {
        return (
            <div>
                <button onClick={this.getRandomCocktail}></button>
                <p>{this.state.randomCocktailName}</p>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('main')
);