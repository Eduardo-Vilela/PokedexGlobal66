<template>
    <button :class="buttonClass" @click="handleClick">
    <img v-if="isFavorite" :src="iconStarYellow" alt="iconStarYellow" />
    <img v-else :src="imageStar" alt="iconStar" />
  </button>
</template>

<script>
import IconStarGray from '../assets/Icon-star-gray.svg';
import IconStarYellow from '../assets/Icon-star-yellow.svg';

export default {
  name: 'ButtonFavorite',
  props: {
    onClick: {
      type: Function,
      required: true
    },
    isFavorite: {
      type: Boolean,
      required: true
    },
    className: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      imageStar: IconStarGray,
      iconStarYellow: IconStarYellow,
    };
  },
  computed: {
    buttonClass() {
      return ['button-favorite', this.className];
    },
    
  },
  methods: {
    handleClick(event) {
      this.onClick(event);
    }
  }
};
</script>