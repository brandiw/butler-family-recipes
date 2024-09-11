import '../App.css';

function Header() {
  return (
    <header className="App-header">
    <div className="App-banner-container">
        <img src={'/rolls.jpg'} className="App-banner" alt="banner" />
    </div>
    <p>
        Butler Family Recipes
    </p>
    </header>
  );
}

export default Header;
