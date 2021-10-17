const BestPokemon =({ability}) => {
    return (
        <div>
            <p>My favorite Pokomon is Squirtle</p>
            <ul>
{ability.map((poke, index) => (
    <li key={index}>{poke}</li>
))}
            </ul>
        </div>
    );
};