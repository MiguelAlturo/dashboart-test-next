import { PokemonGrid, PokemonsResponse, simplePokemon } from "@/pokemons";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: '151 pokémons',
    description: '151 pokémons Seo description'
}


const getPokemons = async (limit = 20, offset = 0): Promise<simplePokemon[]> => {
    const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        .then(res => res.json());
    const pokemons = data.results.map(pokemon => ({
        id: pokemon.url.split('/').at(-2)!,
        name: pokemon.name
    }));

    // throw new Error('Esto es un erroro que no deberia suceder');

    return pokemons
}

export default async function pokemonsPage() {

    const pokemons = await getPokemons(150);

    return (
        <div className="flex flex-col">
            <span className="text-5cl my-2">Listado de Pokemons <small className="text-blue-500">Estaticos</small></span>
            <PokemonGrid pokemons={pokemons} />
        </div>
    )
}