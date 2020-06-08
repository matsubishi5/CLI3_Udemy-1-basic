import Vue from 'vue';
import App from './App.vue';
import LikeNumber from './components/LikeNumber.vue';

Vue.config.productionTip = false;
Vue.component('LikeNumber', LikeNumber);
Vue.directive('border', function(el, binding) {
  el.style.border = '1px solid black';
  el.style.borderWidth = binding.value.width;
  el.style.borderColor = binding.value.color;
});

new Vue({
  render: (h) => h(App),
}).$mount('#app');
