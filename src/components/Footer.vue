<template>
  <nav>
    <ul>
      <li>
        <CustomButton
          :to="'/pokemonList'"
          :isActive="activeButton === '/pokemonList'"
          @click="setActiveButton('/pokemonList')"
        >
          <img :src="imageAll" alt="iconAll" /> All
        </CustomButton>
      </li>
      <li>
        <CustomButton
          :to="'/favorites'"
          :isActive="activeButton === '/favorites'"
          @click="setActiveButton('/favorites')"
        >
          <img :src="imageStar" alt="iconStar" /> Favorites
        </CustomButton>
      </li>
    </ul>
  </nav>
</template>

<script>
import CustomButton from '../components/CustomButton.vue';
import IconStar from '../assets/Icon-star.svg';
import IconAll from '../assets/Icon-all.svg';

export default {
  name: 'PokemonList',
  components: {
    CustomButton
  },
  data() {
    return {
      imageStar: IconStar,
      imageAll: IconAll,
      activeButton: '/pokemonList'
    };
  },
  methods: {
    setActiveButton(route) {
      this.activeButton = route;
    }
  }
};
</script>
