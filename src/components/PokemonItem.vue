<template>
    <div class="container-items">
      <div class="card">
        <h3 class="title-card">{{ pokemon.name }}</h3>
        <ButtonFavorite :onClick="toggleFavorite" :isFavorite="isFavorite"/>
     </div>
    </div>
  </template>
  
  <script>
  import ButtonFavorite from '../components/ButtonFavorite.vue';

  export default {
    name: "PokemonItem",
    components: {
      ButtonFavorite
    },
    props: {
      pokemon: Object
    },
    computed: {
      isFavorite() {
        return this.$store.getters.isFavorite(this.pokemon.name);
      }
    },
    methods: {
      toggleFavorite() {
        this.$store.dispatch('toggleFavorite', this.pokemon);
      },
      sharePokemon() {
        const attributes = `Name: ${this.pokemon.name}, Height: ${this.pokemon.height}, Weight: ${this.pokemon.weight}`;
        navigator.clipboard.writeText(attributes)
          .then(() => alert('Pokemon attributes copied to clipboard!'));
      }
    }
  };
  </script>