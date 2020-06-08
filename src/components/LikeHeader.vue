<template>
  <div>
    <slot :user="user"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "拓海",
        age: 20
      }
    };
  }
};
</script>

<style scoped>
h1 {
  color: red;
}
</style>>