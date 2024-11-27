import { simplePokemon } from '@/pokemons'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface PokemonsState {
    favorites: { [key: string]: simplePokemon },

}


// const getInitialState = (): PokemonsState => {
//     // if (typeof localStorage === 'undefined') return {};

//     const favorites = JSON.parse(localStorage.getItem('favorite-pokemons') ?? '{}')

//     return favorites
// }
const initialState: PokemonsState = {
    favorites: {},
    // '1': { id: '1', name: 'bulbasaur' },
    // ...getInitialState(),
}

export const pokemonsSlice = createSlice({
    name: 'Pokemons',
    initialState,
    reducers: {
        setFavoritePokemons(state, action: PayloadAction<{ [key: string]: simplePokemon }>) {
            state.favorites = action.payload
        },

        toggleFavorite(state, action: PayloadAction<simplePokemon>) {
            const pokemon = action.payload
            const { id } = pokemon
            if (!!state.favorites[id]) {
                delete state.favorites[id];
                // return
            } else {
                state.favorites[id] = pokemon
            }
            localStorage.setItem('favorite-pokemons', JSON.stringify(state.favorites));
        }
    },
})

// Action creators are generated for each case reducer function
export const { toggleFavorite, setFavoritePokemons } = pokemonsSlice.actions

export default pokemonsSlice.reducer