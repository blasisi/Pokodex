import React from "react";
const App = () => (
  <div>
    <Logo />
    <BestPokemon />
  </div>
);
const Logo = () => {
  const appName = "MyaPokodex";

  return (
  <header>
    <h1>Welcome to Pokedex {appName}
    </h1>
    <img
      src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
      alt="bird"
    ></img>
  </header>
  );
};

function BestPokemon(){
  const abilities = ['Anticipation', 'Adaptability', 'Run-Away'];
}

const BestPokemon = () => <p>My favorite Pokemon is pikachu</p>;

export default App;
