<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Création d'un client</p>
        <button
          @click="$store.commit('HIDE_MODAL')"
          class="delete"
          aria-label="close"
        ></button>
      </header>
      <section class="modal-card-body">
        <div class="field">
          <label class="label">Nom du client *</label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Nom"
              v-model="createClient.name"
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Adresse email *</label>
          <div class="control">
            <input
              class="input"
              type="email"
              placeholder="Email"
              v-model="createClient.email"
            />
          </div>
        </div>
      </section>
      <footer class="modal-card-foot">
        <button @click="submitNewClient" class="button is-success">
          Créer le client
        </button>
        <button class="button" @click="$store.commit('HIDE_MODAL')">
          Annuler
        </button>
      </footer>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
const emptyClient = {
  name: null,
  email: null,
};
export default Vue.extend({
  name: 'CreateClientModal',
  data() {
    return {
      createClient: { ...emptyClient }
    };
  },
  methods: {
    submitNewClient() {
      this.$store.dispatch("REQUEST_CREATE_CLIENT", this.createClient);
      this.$store.commit("HIDE_MODAL");
      this.createClient = { ...emptyClient };
    }
  }
});
</script>
