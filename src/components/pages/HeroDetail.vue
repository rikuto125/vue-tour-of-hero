<template>
  <div class="detail">
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
    <button v-on:click="goBack()">go back</button>
    <button v-on:click="save()" class="save">save</button>
  </div>
</template>

<script>
import store from "../../store/store";
import router from "../../router/index";

export default {
  name: 'HeroDetail',
  data: function() {
    this.getHero() //methodで定義したgetHeroを呼び出す
    return {
      hero: this.hero
    }
  },

  //Vue3ではcreatedは使えない → setupに変更で検索
  //今回はdataで代用
  // created: function () {
  //   this.getHero()
  // },

  methods: {
    getHero: function() {
      this.hero = store.getHero(this.$route.params.id);
    },
    goBack: function(){
        router.go(-1)//router.go(-x)でxページ戻る
    },
    save: function(){
      store.save(this.hero)
      this.goBack()
    }
  }
};
</script>

<style scoped>
label {
  display: inline-block;
  width: 3em;
  margin: .5em 0;
  color: #607D8B;
  font-weight: bold;
}
input {
  height: 2em;
  font-size: 1em;
  padding-left: .4em;
}
button {
  margin-top: 20px;
  font-family: Arial;
  background-color: #eee;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  cursor: hand;
}
button:hover {
  background-color: #cfd8dc;
}
button:disabled {
  background-color: #eee;
  color: #ccc;
  cursor: auto;
}
.save {
  margin-left: 10px;
}
</style>