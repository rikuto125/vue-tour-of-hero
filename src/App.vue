<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/heroes">Heroes</router-link> |
      <router-link to="/atomic">Atomic</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
  data: function() {
    return {
      title: 'Tour of Heroes',
    }
  }
}
</script>

<style>
</style>
