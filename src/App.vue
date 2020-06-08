<template>
  <div>
    <LikeHeader></LikeHeader>
    <h2>{{ number }}</h2>
    <LikeNumber :total-number="number" test-props="テストです"></LikeNumber>
    <LikeNumber></LikeNumber>
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue";

export default {
  data() {
    return {
      number: 20
    };
  },

  components: {
    LikeHeader
  }
};
</script>

<style scoped>
div {
  border: 1px solid blue;
}
</style>