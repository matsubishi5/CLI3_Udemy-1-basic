<template>
  <div>
    <slot name="title" :user="user"></slot>
    <hr />
    <p>いいね数</p>
    <slot name="number"></slot>
    <slot></slot>
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