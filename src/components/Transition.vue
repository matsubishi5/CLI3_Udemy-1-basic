<template>
  <div>
    <button @click="show = !show">表示切り替え</button>
    <transition>
      <p v-if="show">hello</p>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true
    };
  }
};
</script>

<style scoped></style>