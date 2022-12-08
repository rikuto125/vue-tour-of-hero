<template>
<div v-if="messages.length">
    <h2>Messages</h2>
    <button class="clear" v-on:click="clear()">clear</button>
    <div v-for="(message, index) in messages" v-bind:key="index">
        {{message}}
    </div>
</div>
</template>

<script>
import store from '../../store/store'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
    name: 'Messages',
    data: function () {
      return {
        messages: store.state.messages
      }
    },
    methods: {
      clear: function () {
        this.messages = store.clear()
      }
    }
};
</script>

<style scoped>
h2 {
  color: red;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: lighter;
}
body {
  margin: 2em;
}
body, input[text], button {
  color: crimson;
  font-family: Cambria, Georgia;
}
 
button.clear {
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
  color: #aaa;
  cursor: auto;
}
button.clear {
  color: #888;
  margin-bottom: 12px;
}
</style>
