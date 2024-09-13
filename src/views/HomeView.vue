<template>
  <div class='containerView'>
    <div class="box-home">
      <div>
        <img :src="imageHome" alt="pokemoHome" />
      </div>
      <h1 class="title">Welcome to Pokédex</h1>
      <p class="subTitle">The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the Pokémon world.</p>
      <CustomButton to="/pokemonList">Get started</CustomButton>
    </div>
  </div>
</template>

<script>
import ImageHome from '../assets/IconHome.png';
import CustomButton from '../components/CustomButton.vue';
import  '../assets/base.css';

export default {
  name: 'PokemonList',
  components: {
    CustomButton
  },
  data() {
    return {
      imageHome: ImageHome
    };
  }
};
</script>
