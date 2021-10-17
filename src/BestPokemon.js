const BestPokemon =({ability}) => {
    return (
        <div>
            <p>My favorite Pokomon is Pidgie</p>
            <ul>
{ability.map((poke, index) => (
    <li key={index}>{poke}</li>
))}
            </ul>
        </div>
    );
};

export default BestPokemon;