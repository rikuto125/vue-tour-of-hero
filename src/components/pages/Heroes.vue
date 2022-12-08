<template>
<div>
    <h2>My Heroes</h2>
    <div>
        <label>Hero name:
            <input v-model="heroName" placeholder="name">
        </label>
        <button v-on:click="add(heroName)">add</button>
    </div>
    <ul class="heroes">
        <li v-for="hero in heroes"
            :key="hero.id">
            <div class="link-group">
                <div class="link" v-on:click="select(hero)">
                    <span class="badge">{{hero.id}}</span>{{hero.name}}
                </div>
                <button class="delete"
                    v-on:click="deleteHero(hero)">×</button>
            </div>
        </li>
    </ul>
</div>
</template>

<script>
import router from '../../router/index'
import store from '../../store/store'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
    name: 'Heroes',
    data: function() {
        return {
            heroes: undefined,
            heroName: undefined
        }
    },
    methods: {
        select: function (hero) {
            router.push({name: 'Detail', params : {id: hero.id}})
        },
        add: function (name) {
            name = name.trim();
            if (!name) { return }
            store.addHero(name)
            this.heroName = ''
        },
        deleteHero: function (hero) {
            this.heroes = store.delete(hero)
        }
    },
    mounted: function () {
        this.heroes = store.getHeroes()
    }
};
</script>

<style scoped>
.heroes {
  margin: 0 0 2em 0;
  list-style-type: none;
  padding: 0;
  width: 15em;
}
.heroes li {
  position: relative;
  cursor: pointer;
  background-color: #EEE;
  margin: .5em;
  padding: .3em 0;
  height: 1.6em;
  border-radius: 4px;
}
 
.heroes li:hover {
  color: #607D8B;
  background-color: #DDD;
  left: .1em;
}
 
.heroes a {
  color: #888;
  text-decoration: none;
  position: relative;
  display: block;
  width: 250px;
}
 
.heroes a:hover {
  color:#607D8B;
}
 
.heroes .badge {
  display: inline-block;
  font-size: small;
  color: white;
  padding: 0.8em 0.7em 0 0.7em;
  background-color: #607D8B;
  line-height: 1em;
  position: relative;
  left: -1px;
  top: -4px;
  height: 1.8em;
  min-width: 16px;
  text-align: right;
  margin-right: .8em;
  border-radius: 4px 0 0 4px;
}
 
button {
  background-color: #eee;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  cursor: hand;
  font-family: Arial;
}
 
button:hover {
  background-color: #cfd8dc;
}
 
button.delete {
  position: relative;
  bottom: 4px;
  background-color: gray !important;
  color: white;
}
.link-group {
    display: flex;
}
.link {
    width: 90%;
}
</style>
