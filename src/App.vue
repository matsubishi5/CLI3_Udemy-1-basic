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

      <label for="detail">内容</label>
      <textarea id="detail" cols="30" rows="10" v-model="eventData.detail"></textarea>
      <pre>{{ eventData.detail }}</pre>

      <label for="isPrivate">非公開</label>
      <input type="checkbox" id="isPrivate" v-model="eventData.isPrivate" />
      <p>{{ eventData.isPrivate }}</p>

      <p>参加条件</p>
      <label for="10">10代</label>
      <input type="checkbox" id="10" value="10代" v-model="eventData.target" />
      <label for="20">20代</label>
      <input type="checkbox" id="20" value="20代" v-model="eventData.target" />
      <label for="30">30代</label>
      <input type="checkbox" id="30" value="30代" v-model="eventData.target" />

      <p>参加費用</p>
      <label for="free">無料</label>
      <input type="radio" id="free" value="無料" v-model="eventData.price" />

      <label for="payed">有料</label>
      <input type="radio" id="payed" value="有料" v-model="eventData.price" />

      <p>開催場所</p>
      <select v-model="eventData.prefecture" multiple>
        <option v-for="prefecture in eventData.prefectures" :key="prefecture">{{ prefecture }}</option>
      </select>
      <p>{{ eventData.prefecture }}</p>
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
        title: "",
        detail: "",
        isPrivate: false,
        target: [],
        price: "無料",
        prefectures: ["東京", "大阪", "愛知", "広島", "福岡"],
        prefecture: "東京"
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