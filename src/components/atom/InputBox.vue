<template>
  <div>
    <input v-bind:placeholder="placeholderName"/>
  </div>
</template>

<script>
export default {
  name: "InputBox",
  data: function() {
    return {
    }
  },
  props: {
    placeholderName: {
      type: String,
      default: "name"
    },
  }
}
</script>

<style scoped>

</style>