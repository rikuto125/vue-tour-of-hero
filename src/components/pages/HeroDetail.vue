<template>
  <div>
    <h2>Details</h2>
    <div>
      <label>id: </label>{{hero.id}}
      <label>name: </label>{{hero.name}}
    </div>
  </div>
</template>

<script>
import store from "@/store/store";

export default {
  name: 'HeroDetail',
  data: function(){
    //params.idを取得する→detail/hogehogeのhogehogeを取得する
    let id =  this.$route.params.id
    //idをstringからnumberに変換する
    id = Number(id)
    return {
      hero: store.state.heroes.find(hero => hero.id === id) //===は型も比較する
    }
  },
}

</script>

<style scoped>

</style>