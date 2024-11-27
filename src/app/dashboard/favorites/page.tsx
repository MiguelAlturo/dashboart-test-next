import { PokemonGridFavorites } from "@/pokemons";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Favoritos pokémons',
    description: 'favoritos pokémons Seo description'
}


export default async function pokemonsPage() {
    return (
        <div className="flex flex-col">
            <span className="text-5cl my-2">Pokémons  Favoritos <small className="text-blue-500">Global State</small></span>
            <PokemonGridFavorites />
        </div>
    )
}

