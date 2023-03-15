import { appState } from "../AppState.js";
import { Pokemon } from "../Models/Pokemon.js";

// @ts-ignore
const Poke = axios.create({
  baseURL: `https://pokeapi.co/api/v2/pokemon`,
  timeout: 5000
})

class PokemonService {
  async getWildPokemon() {
    let res = await Poke.get()
    // console.log(res.data.results);
    appState.wildPokemon = res.data.results
    // console.log(appState.wildPokemon);
  }

  async getOnePokemon(url) {
    // @ts-ignore
    let res = await axios.get(url)
    appState.activePokemon = new Pokemon(res.data)
    // console.log(appState.activePokemon);
  }

}

export const pokemonService = new PokemonService();