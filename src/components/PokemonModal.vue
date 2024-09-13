<template>
    <div class="modal" v-if="isVisible">
      <div class="modal-overlay" @click="closeModal"></div>
      <div class="modal-content">
        <button class="icon-close-modal" @click="closeModal"><img :src="imageClose" alt="close-modal" ></button>
        <div class="bg-custom">
          <img :src="pokemon.sprites.front_default" :alt="pokemon.name" />
        </div>
        <div class="container-details">
          <div class="item-details"><p class="title-item-modal">Name:</p><p class="results-item-modal">{{ pokemon.name }}</p></div>
          <div class="item-details"><p class="title-item-modal">Weight:</p><p class="results-item-modal">{{ pokemon.weight }}</p></div>
          <div class="item-details"><p class="title-item-modal">Height:</p><p class="results-item-modal">{{ pokemon.height }}</p></div>
          <div class="item-details">
            <p class="title-item-modal">Types:</p>
            <p class="results-item-modal">
              <span v-for="(type, index) in pokemon.types" :key="index">
                  {{ type.type.name }}<span v-if="index < pokemon.types.length - 1">, </span>
              </span>
            </p>
          </div>
        </div>
        <div class="box-buttons">
          <CustomButton @click="sharePokemon">Share to my friends</CustomButton>
          <ButtonFavorite :onClick="toggleFavorite" :isFavorite="isFavorite"/>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import  '../assets/base.css';
  import IconClose from '../assets/icon-close.svg';
  import CustomButton from '../components/CustomButton.vue';
  import ButtonFavorite from '../components/ButtonFavorite.vue';
  export default {
    name: 'PokemonModal',
    components: {
      CustomButton,
      ButtonFavorite
    },
    props: {
      pokemon: Object,
      isVisible: Boolean
    },
    data() {
      return {
        imageClose: IconClose,
      };
    },
    computed: {
      isFavorite() {
        return this.$store.getters.isFavorite(this.pokemon.name);
      }
    },
    methods: {
      closeModal() {
        this.$emit('close');
      },
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