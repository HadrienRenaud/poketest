

export function getPokemon (idPokemon) {
    let address = "https://pokeapi.co/api/v2/pokemon/";
    if (idPokemon)
        address += idPokemon;
    else
        address += "bulbasaur";
    return fetch(address).then(data => data.json());
}

export function getFullPokemon (idPokemon) {
    let address = "https://pokeapi.co/api/v2/pokemon/";
    if (idPokemon)
        address += idPokemon;
    else
        address += "bulbasaur";
    return fetch(address).then(data => data.json());
}

export function getFirstAbility (pokemon) {
    if (pokemon.abilities.length === 0) {
        return null
    } else {
        return pokemon.abilities[0].ability.name
    }
}

export function convertPoundsToKilograms(pounds) {
    return 0.4535924 * pounds;
}

