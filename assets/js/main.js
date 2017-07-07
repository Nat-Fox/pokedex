$(document).ready(function() {


    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();

    // Para las img -> https://pokemondb.net/sprites                                       
    // Llama end point de todos los pokemones


    // con ajax
    // $.ajax({
    //         url: 'http://pokeapi.co/api/v2/pokedex/1/',
    //         type: 'GET',
    //         dataType: 'JSON',
    //         data: { 'limit': '811' },
    //     })
    //     .done(function(result) {
    //         // https://pokemondb.net/sprites -> para los sprites
    //         result.pokemon_entries.forEach(function(pokemon) {
    //             $('.pokemon').append(`<div class="col s3"> 
    //                                 <div class="card"> 
    //                                     <div class="card-content">                                                      
    //                                             <a href="#modal1"><img src="https://img.pokemondb.net/sprites/x-y/normal/${pokemon.pokemon_species.name}.png" alt="Bulbasaur"></a>                                                                                       
    //                                     </div>
    //                                     <div class="card-content"> 
    //                                         <p class="card-title"> ${pokemon.pokemon_species.name} </p>                                            
    //                                     </div>
    //                                    <div class="card-content"> 
    //                                         <hr>  
    //                                         <img class="img-pokebola" src="vendors/icon/pokeball_gray.png">
    //                                         <img class="img-heart" src="vendors/icon/valentines-heart.png">
    //                                         <img class="img-data" src="vendors/icon/data.png">
    //                                     </div>                                                                               
    //                                 </div>
    //                             </div>`);
    //         });
    //     })
    //     .fail(function() {
    //         console.log('error')
    //     });



    // Parte de 1 por que la API tiene esta forma para el primer pokemon http://pokeapi.co/api/v2/pokemon-species/1/ 
    // Contador para crear ids dinámicos para cada pokemon e identificar el modal que voy a desplegar
    var idPokemon = 1;


    // Otra forma
    $.get('http://pokeapi.co/api/v2/pokedex/1/', function(result) {
        //console.log(result);
        result.pokemon_entries.forEach(function(pokemon) {
            //console.log(pokemon);

            $('.pokemon').append(`<div class="col s3"> 
                                    <div class="card"> 
                                        <div class="card-content">                                                                                                  
                                                <a href="#modal1"><img class="pokemon-test" id="pokemon-${idPokemon}" src="https://img.pokemondb.net/sprites/x-y/normal/${pokemon.pokemon_species.name}.png" alt="Bulbasaur"></a>                                                                                       
                                        </div>
                                        <div class="card-content"> 
                                            <p class="card-title"> ${pokemon.pokemon_species.name} </p>                                            
                                        </div>
                                       <div class="card-content"> 
                                            <hr>  
                                            <img class="img-pokebola" src="vendors/icon/pokeball_gray.png">
                                            <img class="img-heart" src="vendors/icon/valentines-heart.png">
                                            <img class="img-data" src="vendors/icon/data.png">
                                        </div>                                                                               
                                    </div>
                                </div>`);
            idPokemon++;


        });

        // evento del pokemon
        $('.pokemon-test').on('click', function() {
            // obtiene la img donde esta el pokemon que clickeo
            console.log($(this));

        });

        //$('#pokemon-' + idPokemon);
        // $('.pokemon-test').on('click', function() {
        //     console.log($('#pokemon-' + idPokemon));

        //     // http://pokeapi.co/api/v2/pokemon-species/1/ -> esta es la url que tiene que ir variando
        //     //console.log($(this));
        //     $.get('http://pokeapi.co/api/v2/pokemon-species/1/', function(response) {
        //         //console.log('api2', response.name);
        //         // response.egg_groups.forEach(function(tipo) {
        //         //     console.log(tipo);
        //         // });

        //     });
        // });


    });










});