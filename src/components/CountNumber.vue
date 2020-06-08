<template>
  <div>
    <p>{{ title | upperCase | lowerCase}}</p>
    <p>{{ subTitle | upperCase}}</p>
  </div>
</template>

<script>
import { title } from "@/title";

export default {
  mixins: [title]
};
</script>