import { AppState } from "../AppState.js"
import { Pokemon } from "../models/pokemon.js"




let pokeApi = axios.create({
    baseURL:'https://pokeapi.co/api/v2/pokemon',
    setTimeout: 80000
})

class PokeDexService{

    constructor(){
        console.log('service')
    }

    async getPokeIds(){
        let i = 0
        
        while(i < AppState.groups){
            const Response = await pokeApi.get()
            AppState.pokeIds = Response.data.results
            console.log(AppState.pokeIds)
            AppState.pokeIds.forEach(id => this.getPokeDetails(id))
            pokeApi = axios.create({
                baseURL:Response.data.next,
                setTimeout: 80000
            })
            i++
        }
        console.log(AppState.pokemon)
    }

    async getPokeDetails(id){
        pokeApi = axios.create({
            baseURL:id.url,
            setTimeout: 800000
        })
        const Response = await pokeApi.get()
        console.log(Response)
        AppState.pokemon.push(new Pokemon(Response.data))
        console.log(Response.data, new Pokemon(Response.data))
    }
        
}

export const pokeDexService = new PokeDexService