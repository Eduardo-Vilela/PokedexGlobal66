export default {
    state: {
      favorites: []  // Lista de Pokémon favoritos
    },
    mutations: {
      ADD_TO_FAVORITES(state, pokemon) {
        if (!state.favorites.some(fav => fav.name === pokemon.name)) {
          state.favorites.push(pokemon);
        }
      },
      REMOVE_FROM_FAVORITES(state, pokemonName) {
        state.favorites = state.favorites.filter(p => p.name !== pokemonName);
      }
    },
    actions: {
      toggleFavorite({ state, commit }, pokemon) {
        const isFavorite = state.favorites.some(fav => fav.name === pokemon.name);
        if (isFavorite) {
          commit('REMOVE_FROM_FAVORITES', pokemon.name);
        } else {
          commit('ADD_TO_FAVORITES', pokemon);
        }
      }
    },
    getters: {
      getFavorites(state) {
        return state.favorites;
      },
      isFavorite: (state) => (pokemonName) => {
        return state.favorites.some(fav => fav.name === pokemonName);
      }
    }
  };
  