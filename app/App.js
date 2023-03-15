import { PokedexController } from "./Controllers/PokedexController.js";
import { PokemonController } from "./Controllers/PokemonController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();

  pokemonController = new PokemonController();

  pokedexController = new PokedexController();
}

window["app"] = new App();
