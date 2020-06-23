
class App extends React.Component {
    constructor(props) {
        super(props);

        this.getRandomCocktail = this.getRandomCocktail.bind(this);
    }

    getRandomCocktail(e) {
        
        var xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var randomCocktail = JSON.parse(this.responseText);
                console.log(randomCocktail);
            }
        }

        xhttp.open("GET", "https://www.thecocktaildb.com/api/json/v1/1/random.php", true);

        xhttp.send();
    }
    
    render() {
        return (
            <button onClick={this.getRandomCocktail}></button>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('main')
);