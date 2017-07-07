$(document).ready(function() {


    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();


    // Llama end point de todos los pokemones
    $.get('http://pokeapi.co/api/v2/pokedex/1/', function(result) {
        console.log(result);
        result.pokemon_entries.forEach(function(pokemon) {
            $('.pokemon').append(`<div class="col s3"> 
                                    <div class="card"> 
                                        <div class="card-content"> 
                                            <p class="card-title"> foto </p>
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
        });

    });

});