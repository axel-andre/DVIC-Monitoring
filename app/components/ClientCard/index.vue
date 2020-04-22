<template>
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{{client.name}} </p>
          <p class="subtitle is-6">{{client.email}}</p>
        </div>
      </div>
      <button class="button is-danger is-fullwidth is-light" @click="$store.dispatch('REQUEST_DELETE_DELETE', client._id)">Supprimer</button>
    </div>
  </div>
</template>
<script lang="ts">
import Vue, { PropOptions } from "vue";

interface Client {
  _id: string;
  name: string;
  email: string;
  address: string;
}
export default Vue.extend({
  name: "ClientCard",
  props: {
    client: {
      type: Object,
      required: true
    } as PropOptions<Client>
  }
});
</script>
