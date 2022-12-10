<template>
    <div class="module hero">
      <h4>{{Name}}</h4>
    </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    Name: {
      type: Object,
      required: true
    }
  },

  data: function() {
    console.log(this.Name)
  }
}
</script>

<style scoped>
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

@media (max-width: 600px) {
  .module {
    font-size: 10px;
    max-height: 75px; }
}
@media (max-width: 1024px) {
  .module {
    min-width: 60px;
  }
}
</style>