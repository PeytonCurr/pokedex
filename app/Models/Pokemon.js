


export class Pokemon {

  constructor(data) {
    this.name = data.name
    this.img = data.sprites.front_default
    this.weight = data.weight
    this.height = data.height
    this.types = this.generateTypes(data.types)
  }

  generateTypes(types) {
    if (types.length == 1) {
      return types[0].type.name
    } else {
      return types[0].type.name + `, ` + types[1].type.name
    }
  }

  static wildListTemplate(pokemon) {
    return `
    <div class="col-12 p-1 elevation-2 selectable">
      <h4 class="" onclick="app.pokemonController.getOnePokemon('${pokemon.url}')">${pokemon.name}</h4>
    </div>
    `
  }

  get activeTemplate() {
    return `
    <div class="col-10 act p-2">
    <div class="bg-light rounded text-center">
      <h1 class="">${this.name}</h1>
      <img class="img-fluid" src="${this.img}" alt="">
    </div>
  </div>
  <div class="col-10 act p-2">
    <div class="row bg-light rounded">
      <div class="col-6 text-start">
        <h6>Height: ${this.height}</h6>
      </div>
      <div class="col-6 text-end">
        <h6>Weight: ${this.weight}</h6>
      </div>
      <div class="col-12 text-start">
        <h6>Types: ${this.types}</h6>
      </div>
      <div class="col-12 text-end">
        <button class="btn btn-outline-danger"><i class="mdi mdi-pokeball text-danger"></i> Catch</button>
      </div>
    </div>
  </div>
    `
  }
}