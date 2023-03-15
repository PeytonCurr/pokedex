import { appState } from "../AppState.js";
import { Pokemon } from "../Models/Pokemon.js";

// @ts-ignore
const sandbox = axios.create({
    baseURL: `https://bcw-sandbox.herokuapp.com/api/peyton/pokemon`,
    timeout: 5000
})

class PokedexService {
    async addNewPokemon() {
        let pokemon = appState.activePokemon
        let res = await sandbox.post("", pokemon)
        appState.myPokemon.push(res.data)
        appState.emit(`myPokemon`)
        console.log(appState.myPokemon);
    }

}

export const pokedexService = new PokedexService();