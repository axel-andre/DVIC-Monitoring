<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Création d'un projet</p>
        <button
          @click="$store.commit('HIDE_MODAL')"
          class="delete"
          aria-label="close"
        ></button>
      </header>
      <section class="modal-card-body">
        <div class="field">
          <label class="label">Nom du projet *</label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Nom"
              v-model="createProject.name"
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Description</label>
          <div class="control">
            <textarea
              class="textarea"
              type="text"
              v-model="createProject.description"
              placeholder="Simple description du projet"
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Client</label>
          <div class="control">
            <div class="select">
              <select v-model="createProject.client">
                <option :value="null">Selectionnez un client</option>
                <option
                  v-for="client in $store.state.clients"
                  :key="client._id"
                  :value="client._id"
                  >{{ client.name }}</option
                >
              </select>
            </div>
          </div>
        </div>
        <div class="field has-addons">
          <p class="control">
            <input class="input" type="number" placeholder="Taux horaire" />
          </p>
          <p class="control">
            <a class="button is-static">
              €
            </a>
          </p>
        </div>
      </section>
      <footer class="modal-card-foot">
        <button @click="submitNewProject" class="button is-success">
          Créer le projet
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
const emptyProject = {
  name: null,
  description: null,
  client: null,
  hourlyRate: 0
};
export default Vue.extend({
  name: 'CreateProjectModal',
  data() {
    return {
      createProject: { ...emptyProject }
    };
  },
  methods: {
    submitNewProject() {
      this.$store.dispatch("REQUEST_CREATE_PROJECT", this.createProject);
      this.$store.commit("HIDE_MODAL");
      this.createProject = { ...emptyProject };
      console.log(this.createProject);
    }
  }
});
</script>
