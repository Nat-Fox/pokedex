$(document).ready(function() {
    // Llama end point de todos los pokemones
    $.get('http://pokeapi.co/api/v2/pokedex/1/', function(result) {
        console.log(result);
        result.pokemon_entries.forEach(function(pokemon) {
            $('.pokemon').append('<div>' + pokemon.pokemon_species.name + '</div>')
        });

        //console.log(result.pokemon_entries[0].pokemon_species.name);
    });
});