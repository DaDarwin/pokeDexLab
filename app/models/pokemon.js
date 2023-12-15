

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
        <div class="col-5 m-2 p-1 card">
            <div class="row">
                <img class="img-fluid col-12" src="${this.img}">
                <h2 class="text-center text-capitalize col-12"> ${`${this.id} ${this.name}`} </h2>
                <h6 class="text-capitalize col-12 ps-4">${this.getTypes}</h6>
                <h6 class="col-12 ps-4"> H:${this.height} W:${this.weight}lb</h6> 
            </div>
        </div>`
    }

    get getTypes(){
        let content = ''
        this.types.forEach(type => content += `${type.type.name} `)
        return content
    }
}