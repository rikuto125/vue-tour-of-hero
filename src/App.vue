<template>
  <div id="app">
    <Heroes></Heroes>
  </div>
</template>

<script>

import Heroes from "@/components/pages/Heroes";

export default {
  name: 'app',
  components: {
    Heroes,
  },
  data: function() {
    return {
      title: 'Tour of Heroes',
    }
  }
}
</script>

<style>
</style>
