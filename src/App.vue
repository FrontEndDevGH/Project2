<template>
    <product-cards></product-cards>
</template>

<script>
import ProductCards from './components/ProductCards/ProductCards.vue'
export default {
  name: 'app',
  components: {
    ProductCards
  }
}
</script>

<style lang="less">
@import './less/mixins.less';

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
body {
  width: 100%;
  background-image: linear-gradient(0deg,rgba(0,0,0,.5) 0,transparent 50%,rgba(0,0,0,.5)),url(./assets/main_bg.png);
  min-height: 100vh;
  .flex-display();
  .justify-content(center);
  .align-items(center);

}
</style>

