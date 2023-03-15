import { pokedexService } from "../Services/PokedexService.js";
import { Pop } from "../Utils/Pop.js";


export class PokedexController {

  constructor() {

  }

  async addNewPokemon() {
    try {
      await pokedexService.addNewPokemon();
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }
}