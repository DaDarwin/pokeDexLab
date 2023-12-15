

export class Pokemon{


    constructor(data){
        this.id = data.id
        this.name = data.name
        this.img = data.img || data.sprites.front_default

        this.nickname = data.name
        this.weight = data.weight
        this.height = data.height
        this.types = data.types
    }



    get pokeCard(){
        return `
        <div class="col-2 m-2 p-1 card">
            <img class="img-fluid" src="${this.img}">
            <h2 class="text-center text-capitalize"> ${`${this.id} ${this.name}`} </h2>
            <h4>${this.types} H:${this.height} W:${this.weight}lb</h4>  
        </div>`
    }

    getTypes(){
        let content = ''
        this.types.forEach(type => content += type.type.name)
        return content
    }
}