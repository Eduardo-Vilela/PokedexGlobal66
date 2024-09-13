<template>
  <div>
    <loading-spinner v-if="loading" />
    <div class="container-list" v-else>
      <search-input
        :searchQuery="searchQuery"
        placeholder="Buscar Pokémon..."
        :imageSearch="imageSearch"
        @update:searchQuery="searchQuery = $event"
      />
      <no-results v-if="filteredFavorites.length === 0" />

      <pokemon-item
        v-for="pokemon in filteredFavorites"
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
import { mapGetters } from 'vuex';
import PokemonModal from '../components/PokemonModal.vue';
import PokemonItem from '@/components/PokemonItem.vue';
import SearchInput from '@/components/SearchInput.vue';
import NoResults from '@/components/NoResults.vue';
import LoadingSpinner from '../components/LoadingSpinner.vue';
import IconSearch from '../assets/icon-search.svg';

export default {
  components: {
    PokemonItem,
    SearchInput,
    NoResults,
    LoadingSpinner,
    PokemonModal
  },
  data() {
    return {
      loading: true,
      searchQuery: '',
      imageSearch: IconSearch,
      selectedPokemon: null,
      isModalVisible: false,
    };
  },
  computed: {
    ...mapGetters({
      favorites: 'getFavorites'
    }),
    filteredFavorites() {
      const query = this.searchQuery.toLowerCase();
      return this.favorites.filter(pokemon =>
        pokemon.name.toLowerCase().includes(query)
      );
    }
  },
  methods: {
    loadFavorites() {
      setTimeout(() => {
        this.loading = false;
      }, 200);
    },
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
    this.loadFavorites();
  }
};
</script>
