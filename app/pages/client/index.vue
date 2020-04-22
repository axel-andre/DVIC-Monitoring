<template>
  <div>
    <h1 class="title is-1">Clients</h1>
    <hr />
    <button
      class="button is-success"
      @click="$store.commit('SHOW_MODAL', 'create_client')"
    >
      Créer un client
    </button>
    <br />
    <div class="client-box">
      <ClientCard v-for="client in $store.state.clients" :key="client._id" :client="client"/>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import ClientCard from "../../components/ClientCard/index.vue";
export default Vue.extend({
  components: {
    ClientCard
  }
});
</script>
<style>
.client-box {
  padding: 20px 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>
