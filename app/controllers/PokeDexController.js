import { AppState } from "../AppState.js";
import { Pokemon } from "../models/pokemon.js";
import { pokeDexService } from "../services/PokeDexService.js";
import { setHTML } from "../utils/Writer.js";

function _drawPokemon(){
  let content = ''
  AppState.pokemon.forEach(pokemans => content += pokemans.pokeCard)
  setHTML('pokeDex', content)
}

export class PokeDexController {

  constructor(){
    console.log('controller')

    this.getPokeIds()
    AppState.on('pokemon', _drawPokemon)
  
  }

  async getPokeIds(){
    try{pokeDexService.getPokeIds()}
    catch(error){
      console.log(error)
    }
  }
  
}
