<template>
<div id="search-component">
    <h4>Hero Search</h4>
    <input id="search-box" v-model="searchName" placeholder="name">

    <ul class="search-result">
        <router-link
            v-for="hero in heroes"
            :key="hero.id"
            v-bind:to="{name: 'Detail', params : {id: hero.id}}">
            {{hero.name}}
        </router-link>
    </ul>
</div>
</template>

<script>
import _ from 'lodash'
import store from '../../store/store'

export default {
    name: 'HeroSearch',
    data: function() {
        return {
            heroes: undefined,
            searchName: ''
        }
    },
    watch: {
        searchName: function () {
            this.debouncedGetHeroes()
        }
    },
    methods: {
        search: function (name) {
            this.heroes = store.search(name)
        },
        debouncedGetHeroes: function () {
            _.debounce(this.search(this.searchName), 500)
        }
    }
};
</script>

<style scoped>
.search-result a {
  border-bottom: 1px solid gray;
  border-left: 1px solid gray;
  border-right: 1px solid gray;
  display: flex;
  flex-direction: column;
  width: 195px;
  height: 16px;
  padding: 5px;
  background-color: white;
  cursor: pointer;
  list-style-type: none;
}
 
.search-result a:hover {
  background-color: #607D8B;
}
 
.search-result a {
  color: #888;
  display: block;
  text-decoration: none;
}
 
.search-result a:hover {
  color: white;
}
.search-result a:active {
  color: white;
}
#search-box {
  width: 200px;
  height: 20px;
}
 
ul.search-result {
  margin-top: 0;
  padding-left: 0;
}
</style>
