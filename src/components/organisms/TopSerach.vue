<template>
  <div>
    <InputBox id = "search-box"
        v-bind:placeholderName="defaultName"
        v-on:input="searchName = $event.target.value"
    />
    <ul class="search-result">
      <router-link
          v-for="hero in heroes"
          :key="hero.id"
          v-bind:to="{name: 'HeroDetail', params : {id: hero.id}}">
        {{hero.name}}
      </router-link>
    </ul>
  </div>
</template>

<!--v-bind:placeholderName InputBoxで定義したpropsのplaceholderNameを指定してデータを渡す-->
<!--v-on:input searchNameに入力された値を代入する-->
<!--v-onとは、イベントを監視するためのディレクティブです。-->
<!--v-on:inputは、inputイベントを監視するためのディレクティブです。-->
<!--v-modelは、v-bindとv-onを同時に使用したものです。-->
<!--SearchNameをpropsで渡すと、InputBoxのv-modelで受け取れないので、v-on:inputで受け取る-->


<script>
import InputBox from "@/components/atom/InputBox";
import store from "@/store/store";

export default {
  name: "TopSearch",
  components: {
    InputBox
  },
  data: function() {
    return {
      heroes: undefined,
      searchName: '',
      defaultName: 'name'
    }
  },
  //watchとは、dataの値が変更された時に、自動的に呼び出されるメソッドのことです。
  watch: {
    searchName: function () {
      this.search(this.searchName)
    }
  },
  methods: {
    search: function (name) {
      this.heroes = store.search(name)
    },
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

ul.search-result {
  margin-top: 0;
  padding-left: 0;
}
</style>