'use client'

import { useAppSelector } from "@/store"
import { PokemonGrid } from "./PokemonGrid";
import { IoHeartOutline } from 'react-icons/io5'

export const PokemonGridFavorites = () => {

    const pokemonsFavorites = Object.values(useAppSelector(state => state.pokemons.favorites))
    console.log(pokemonsFavorites);

    return (
        <>
            {pokemonsFavorites.length
                ? <PokemonGrid pokemons={pokemonsFavorites} />
                : <NoFavorite />}
        </>

    )
}

export const NoFavorite = () => {
    return (
        <div className="flex flex-col h-[50vh] items-center justify-center">
            <IoHeartOutline size={100} className="text-red-500" />
            <span>No hay favoritos</span>
        </div>
    )
}