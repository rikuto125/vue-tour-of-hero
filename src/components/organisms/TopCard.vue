<template>
  <div class="grid grid-pad">
    <router-link
        v-for="hero in heroes"
        v-bind:key="hero.key" class="col-1-4"
        v-bind:to="{name: 'HeroDetail', params : {id: hero.id}}">
      <Card v-bind:Name="hero.name"/>
    </router-link>
  </div>
</template>

<script>
import Card from "@/components/atom/Card";
import store from "@/store/store";
export default {
  name: "TopCard",
  components: {
    Card,
  },
  data: function() {
    this.getHeroes()
    return {
      heroes: this.heroes
    }
  },
  methods: {
    getHeroes: function() {
      this.heroes = store.getHeroes().slice(0, 4)
    },
    // select: function(hero) {
    //   //heroDetailに遷移する
    //   router.push({ name: 'HeroDetail', params: { id: hero.id } })
    // },
  },
};
</script>

<style scoped>
[class*='col-'] {
  float: left;
  padding-right: 20px;
  padding-bottom: 20px;
}
[class*='col-']:last-of-type {
  padding-right: 0;
}
a {
  text-decoration: none;
}
*, *:after, *:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
h4 {
  position: relative;
}
.grid {
  margin: 0;
}
.col-1-4 {
  width: 25%;
}

.grid-pad {
  padding: 10px 0;
}
.grid-pad > [class*='col-']:last-of-type {
  padding-right: 20px;
}

@media (max-width: 1024px) {
  .grid {
    margin: 0;
  }
}
</style>
