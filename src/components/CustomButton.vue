<template>
  <button :class="buttonClass" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    to: {
      type: String,
      required: false,
    },
    className: {
      type: String,
      default: ''
    },
    isActive: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    buttonClass() {
      return ['base-button', this.className, { 'active': this.isActive }]; 
    }
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event); 
      if (this.to) {
        this.$router.push(this.to);
      }
    }
  }
};
</script>