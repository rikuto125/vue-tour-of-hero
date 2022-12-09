<template>
  <div>
    <div v-if="hero">
      <h2>{{hero.name.toUpperCase()}} Details</h2>
      <div><span>id: </span>{{hero.id}}</div>
      <div>
        <label>
          name:
          <input v-model="hero.name" placeholder="name">
        </label>
      </div>
    </div>
  </div>

</template>

<script>
import store from "@/store/store";
export default {
  name: 'HeroDetail',
  data: function() {
    return {
      hero: undefined
    }
  },
  created: function () {
    this.getHero()
  },
  methods: {
    getHero: function () {
      this.hero = store.getHero(this.$route.params.id)
    },
  }
}
</script>

<style scoped>

</style>