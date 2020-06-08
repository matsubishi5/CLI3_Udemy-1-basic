<template>
  <div>
    <LikeHeader #default="user">
      <h1>{{ user.user.name }}</h1>
      <!-- <template #user="user">
        <h1>{{ user.user.name }}</h1>
      </template>-->
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