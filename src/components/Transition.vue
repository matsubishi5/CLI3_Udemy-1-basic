<template>
  <div>
    <button @click="myAnimation = 'slide'">スライド</button>
    <button @click="myAnimation = 'fade'">フェード</button>
    <p>{{ myAnimation }}</p>
    <button @click="show = !show">表示切り替え</button>
    <transition :name="myAnimation" mode="out-in" appear>
      <p v-if="show" key="hello">hello</p>
      <p v-if="!show" key="bye">bye</p>
    </transition>

    <button @click="myComponent = 'TransitionComponentA'">コンポーネントA</button>
    <button @click="myComponent = 'TransitionComponentB'">コンポーネントB</button>
    <transition name="fade" mode="out-in">
      <component :is="myComponent"></component>
    </transition>

    <transition :css="false" @enter="enter" @leave="leave">
      <div class="circle" v-if="show"></div>
    </transition>
  </div>
</template>

<script>
import TransitionComponentA from "./TransitionComponentA.vue";
import TransitionComponentB from "./TransitionComponentB.vue";

export default {
  data() {
    return {
      show: true,
      myAnimation: "slide",
      myComponent: TransitionComponentA
    };
  },

  methods: {
    // beforeEnter(el, done) {},
    enter(el, done) {
      let scale = 0;
      const interval = setInterval(() => {
        el.style.transform = `scale(&{scale})`;
        scale += 1;
        if (scale > 1) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    // afterEnter(el, done) {},
    // enterCancelled(el, done) {},
    // beforeLeave(el, done) {},
    leave(el, done) {
      let scale = 1;
      const interval = setInterval(() => {
        el.style.transform = `scale(&{scale})`;
        scale -= 1;
        if (scale > 0) {
          clearInterval(interval);
          done();
        }
      }, 20);
    }
    // afterLeave(el, done) {},
    // leaveCancelled(el, done) {}
  },

  components: {
    TransitionComponentA,
    TransitionComponentB
  }
};
</script>

<style scoped>
.circle {
  width: 200px;
  height: 200px;
  margin: auto;
  background-color: pink;
  border-radius: 100px;
}

.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.5s;
}
.fade-enter-to {
  opacity: 1;
}
.fade-leave {
  opacity: 1;
}
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-leave-to {
  opacity: 0;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
}
.slide-enter-active {
  animation: slide-in 0.5s;
  transition: opacity 0.5s;
}
.slide-leave-active {
  animation: slide-in 0.5s reverse;
  transition: opacity 0.5s;
}

@keyframes slide-in {
  from {
    transform: translateX(100px);
  }
  to {
    transform: translateX(0);
  }
}
</style>