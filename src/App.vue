<template>
  <div>
    <LikeHeader>
      <h1>初めまして</h1>
    </LikeHeader>
    <LikeNumber :total-number="number" test-props="テストです" @my-click="incrementNumber"></LikeNumber>

    <button @click="currentComponent='Home'">Home</button>
    <button @click="currentComponent='About'">About</button>
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
    <div>
      <h3>イベントのフォーム</h3>
      <label for="title">タイトル</label>
      <input id="title" type="text" v-model.lazy="eventData.title" />
      <p>{{ eventData.title }}</p>
    </div>
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue";
import Home from "./components/Home.vue";
import About from "./components/About.vue";

export default {
  data() {
    return {
      number: 20,
      currentComponent: "Home",
      eventData: {
        title: "タイトル"
      }
    };
  },

  components: {
    LikeHeader,
    Home,
    About
  },

  methods: {
    incrementNumber(value) {
      this.number = value;
    }
  }
};
</script>