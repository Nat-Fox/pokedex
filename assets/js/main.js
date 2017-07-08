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
    $.get('https://pokeapi.co/api/v2/pokedex/1/', function(result) {
        //console.log(result);
        result.pokemon_entries.forEach(function(pokemon) {
            //console.log(pokemon);

            $('.pokemon').append(`<div class="col s3"> 
                                    <div class="card"> 
                                        <div class="card-content">                                                                                                  
                                                <img class="pokemon-test img-responsive" id="pokemon-${idPokemon}" src="https://img.pokemondb.net/sprites/x-y/normal/${pokemon.pokemon_species.name}.png" alt="Bulbasaur">
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
                                </div>                                                              
                                `);

            // evento del pokemon clickeado
            $('#pokemon-' + idPokemon).click(function(x) {
                // Obtengo el id de lo que clickeo
                //console.log('id', $(this).attr('id'));
                var idClickeado = $(this).attr('id');
                // Obtengo el último para armar la URL -> http://pokeapi.co/api/v2/pokemon-species/1/
                console.log('id', idClickeado.substr(8, idClickeado.length));
                var numberPokemon = idClickeado.substr(8, idClickeado.length);

                $.get('https://pokeapi.co/api/v2/pokemon-species/' + numberPokemon + '/', function(response) {

                    console.log('data ->', response);
                    // Obteniendo la data del pokemon correspondiente
                    console.log('nombre pokemon', response.name);
                    // Tipo del pokemon
                    var tipos = '';

                    response.egg_groups.forEach(function(tipo) {
                        console.log('tipo', tipo.name);
                        tipos += `<a class="waves-effect waves-light btn btn-tipo">${tipo.name}</a>`;
                    });
                    // Habitat
                    console.log('Habitat', response.habitat.name);
                    // Descripcion
                    console.log('Descripcion', response.flavor_text_entries[9].flavor_text);

                    // Abre el modal
                    $('#modal1').modal('open');

                    var modal = `  <div class="input-field col s6">
                                        <div class="card"> 
                                            <div class="card-content">                                                                                                  
                                                    <img class="pokemon-test img-responsive" src="https://img.pokemondb.net/sprites/x-y/normal/${response.name}.png" alt="Bulbasaur">
                                            </div>                                          
                                        <div class="card-content"> 
                                                <hr>  
                                                <img class="img-pokebola" src="vendors/icon/pokeball_gray.png">
                                                <img class="img-heart" src="vendors/icon/valentines-heart.png">
                                                <img class="img-data" src="vendors/icon/data.png">
                                            </div>                                                                               
                                        </div>
                                    </div>
                                    <div class="input-field col s6">
                                        <h3 class="center">${response.name}</h3>   
                                        <p>${response.flavor_text_entries[9].flavor_text}</p>
                                        <h5> Type </h5>
                                        ${tipos}
                                        <h5> Habitat </h5>
                                        <a class="waves-effect waves-light btn">${response.habitat.name}</a>                                        
                                    </div>`;

                    $('#modal-content').append(modal);





                });
            });

            idPokemon++;
        });





    });










});