<template>
  <div>
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