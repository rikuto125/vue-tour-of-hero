<template>
  <div>
    <h3>Top Heroes</h3>
    <TopCard />
    <div>
      <h4>Hero Search</h4>
      <TopSearch />
    </div>
  </div>
</template>

<!--v-bind:heroName="heroName"でTopCard Componentにpropsをわたす-->
<script>
import TopCard from "@/components/organisms/TopCard";
import TopSearch from "@/components/organisms/TopSerach";
export default {
  name: "AtomicDashboard",
  components: {
    TopSearch,
    TopCard
  },
  data: function() {
    return {
      title: "Test Design"
    };
  }
}
</script>

<style scoped>
h3 {
  text-align: center;
  margin-bottom: 0;
}
</style>