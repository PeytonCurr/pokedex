import { appState } from "../AppState.js";
import { Pokemon } from "../Models/Pokemon.js";
import { pokemonService } from "../Services/PokemonService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawWildPokemon() {
  let wildPokemon = appState.wildPokemon
  let template = ``
  wildPokemon.forEach(w => template += Pokemon.wildListTemplate(w))
  setHTML(`wildList`, template)
}

function _drawActivePokemon() {
  console.log(`drawing active`);
  let activePokemon = appState.activePokemon
  if (activePokemon) {
    setHTML(`activePokemon`, activePokemon.activeTemplate)
  }
}

export class PokemonController {

  constructor() {
    this.getWildPokemon();
    appState.on(`wildPokemon`, _drawWildPokemon)
    appState.on(`activePokemon`, _drawActivePokemon)
  }

  async getWildPokemon() {
    try {
      await pokemonService.getWildPokemon();
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }

  async getOnePokemon(url) {
    try {
      await pokemonService.getOnePokemon(url);
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }
}