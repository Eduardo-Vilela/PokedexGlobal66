<template>
  <div class="container-search">
    <input
      type="text"
      :value="searchQuery"
      @input="updateSearchQuery($event.target.value)"
      :placeholder="placeholder"
      class="input-search"
    />
    <img class="search-icon" :src="imageSearch" alt="icon-search" />
  </div>
</template>

<script>
export default {
  name: "SearchInput",
  props: {
    searchQuery: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      default: 'Search'
    },
    imageSearch: {
      type: String,
      required: true
    }
  },
  methods: {
    updateSearchQuery(value) {
      this.$emit('update:searchQuery', value);
    }
  }
};
</script>