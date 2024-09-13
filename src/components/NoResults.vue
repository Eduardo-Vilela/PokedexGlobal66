<template>
    <div class="no-results">
      <p class="title">{{ title }}</p>
      <p class="subTitle">{{ subTitle }}</p>
      <CustomButton to="/">Go back home</CustomButton>
    </div>
  </template>
  
  <script>
  import CustomButton from './CustomButton.vue';
  
  export default {
    name: "NoResults",
    components: { CustomButton },
    props: {
      title: {
        type: String,
        default: 'Uh-oh!'
      },
      subTitle: {
        type: String,
        default: 'You look lost on your journey!'
      }
    }
  };
  </script>