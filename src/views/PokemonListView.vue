<template>
  <div>
    <loading-spinner v-if="loading" />
    <div class="container-list" v-else>
      <search-input
        :searchQuery="searchQuery"
        placeholder="Search Pokémon..."
        :imageSearch="imageSearch"
        @update:searchQuery="searchQuery = $event"
      />
      <no-results v-if="filteredPokemons.length === 0" />

      <pokemon-item
        v-for="pokemon in filteredPokemons"
        :key="pokemon.name"
        :pokemon="pokemon"
        @click="openModal(pokemon)"
      />
      <pokemon-modal
        :pokemon="selectedPokemon"
        :isVisible="isModalVisible"
        @close="closeModal"
      />
    </div>
  </div>
</template>

<script>
import LoadingSpinner from '../components/LoadingSpinner.vue';
import PokemonItem from '../components/PokemonItem.vue';
import PokemonModal from '../components/PokemonModal.vue';
import SearchInput from '../components/SearchInput.vue';
import NoResults from '../components/NoResults.vue';
import IconSearch from '../assets/icon-search.svg';

export default {
  components: {
    LoadingSpinner,
    PokemonItem,
    PokemonModal,
    SearchInput,
    NoResults
  },
  data() {
    return {
      loading: true,
      pokemons: [],
      searchQuery: '',
      isModalVisible: false,
      selectedPokemon: null,
      imageSearch: IconSearch,
    };
  },
  computed: {
    filteredPokemons() {
      const query = this.searchQuery.toLowerCase();
      return this.pokemons.filter(pokemon =>
        pokemon.name.toLowerCase().includes(query)
      );
    }
  },
  methods: {
    openModal(pokemon) {
      this.selectedPokemon = pokemon;
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
      this.selectedPokemon = null;
    }
  },
  mounted() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
      .then(response => response.json())
      .then(data => {
        const promises = data.results.map(pokemon =>
          fetch(pokemon.url).then(res => res.json())
        );
        return Promise.all(promises);
      })
      .then(results => {
        this.pokemons = results;
        setTimeout(() => {
          this.loading = false;
        }, 200);
      });
  }
};
</script>
