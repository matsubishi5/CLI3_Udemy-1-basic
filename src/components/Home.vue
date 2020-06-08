<template>
  <div>
    <p v-border:solid.round.shadow="{ width: '5px', color: 'blue' }">Home</p>
    <p>{{ title | upperCase | lowerCase}}</p>
    <p>{{ subTitle | upperCase}}</p>
    <CountNumber></CountNumber>
  </div>
</template>

<script>
import CountNumber from "./CountNumber.vue";
import { title } from "@/title";

export default {
  mixins: [title],

  components: {
    CountNumber
  },

  directives: {
    border(el, binding) {
      el.style.borderWidth = binding.value.width;
      el.style.borderColor = binding.value.color;
      el.style.borderStyle = binding.arg;
      if (binding.modifiers.round) {
        el.style.borderRadius = "0.5rem";
      }
      if (binding.modifiers.shadow) {
        el.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.26)";
      }
    }
  }
};
</script>