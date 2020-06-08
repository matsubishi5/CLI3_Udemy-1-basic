<template>
  <div>
    <p>いいね{{ halfNumber }}</p>
    <p>{{ testProps }}</p>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
export default {
  props: {
    totalNumber: {
      type: Number,
      // required: true,
      default: 10
    },
    testProps: {
      type: String
    }
  },

  computed: {
    halfNumber() {
      return this.totalNumber / 2;
    }
  },

  methods: {
    increment() {
      this.number++;
    }
  }
};
</script>