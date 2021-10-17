const Logo = (props) => {
    const appName = props.appName;
    console.log(props);
  return (
    <header>
      <h1> Welcome to {props}</h1>
      <img 
      onClick={props.handleClick}
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
        alt="Pidgey"
      ></img>
    </header>
  );
};
export default Logo;