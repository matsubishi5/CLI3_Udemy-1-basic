<template>
  <div>
    <LikeHeader header-text="hello">
      <h3>みなさん</h3>
      <template v-slot:title>
        <h1>トータルいいね数</h1>
      </template>
      <template v-slot:number>
        <h2>{{ number }}</h2>
      </template>
      <h3>初めまして</h3>
      <h3>こんにちは</h3>
    </LikeHeader>
    <LikeNumber :total-number="number" test-props="テストです" @my-click="incrementNumber"></LikeNumber>
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
  },

  methods: {
    incrementNumber(value) {
      this.number = value;
    }
  }
};
</script>

<style scoped>
div {
  border: 1px solid blue;
}
</style>