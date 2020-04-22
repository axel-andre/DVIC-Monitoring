<template>
  <div>
    <Modal />
    <div class="site-container container">
      <div class="columns">
        <div class="column is-one-quarter">
          <Menu />
        </div>
        <div class="column">
          <nuxt />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue, { PropOptions } from "vue";
import Menu from "../components/Menu/index.vue";
import Modal from "../components/Modal/index.vue"

export default Vue.extend({
  name: "default",
  components: {
    Menu,
    Modal
  }
});
</script>
<style>
.site-container {
  padding-top: 50px;
}
</style>
