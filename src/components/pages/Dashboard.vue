<template>
<div>
    <h3>Top Heroes</h3>
    <div class="grid grid-pad">
        <router-link
          v-for="hero in heroes"
          v-bind:key="hero.key" class="col-1-4"
          v-bind:to="{name: 'Detail', params : {id: hero.id}}">
            <div class="module hero">
                <h4>{{hero.name}}</h4>
            </div>
        </router-link>
    </div>
    <HeroSearch />
</div>
</template>

<script>
import store from '../../store/store'
import HeroSearch from '../pages/HeroSearch'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
    name: 'Dashboard',
      components: {
        HeroSearch
      },
    data: function() {
        return {
            heroes: []
        }
    },
    mounted: function () {
        this.heroes = store.getHeroes().slice(1, 5)
    }
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
h3 {
  text-align: center;
  margin-bottom: 0;
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
.module {
  padding: 20px;
  text-align: center;
  color: #eee;
  max-height: 120px;
  min-width: 120px;
  background-color: #607d8b;
  border-radius: 2px;
}
.module:hover {
  background-color: #eee;
  cursor: pointer;
  color: #607d8b;
}
.grid-pad {
  padding: 10px 0;
}
.grid-pad > [class*='col-']:last-of-type {
  padding-right: 20px;
}
@media (max-width: 600px) {
  .module {
    font-size: 10px;
    max-height: 75px; }
}
@media (max-width: 1024px) {
  .grid {
    margin: 0;
  }
  .module {
    min-width: 60px;
  }
}
</style>
