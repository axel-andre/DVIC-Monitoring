<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        {{ project.name }}
      </p>
      <a href="#" class="card-header-icon" aria-label="more options">
        <span class="icon">
          <i class="fas fa-angle-down" aria-hidden="true"></i>
        </span>
      </a>
    </header>
    <div class="card-content">
      <div class="content">
        <div v-if="project.description">
          {{ project.description }}
          <br />
        </div>
        <div v-if="project.client">
          Projet créé avec
          <nuxt-link :to="'/client/' + project.client._id">{{
            project.client.name
          }}</nuxt-link>
        </div>
        <br />
        <time datetime="2016-1-1">{{ createdAtDisplay }}</time>
      </div>
    </div>
     <footer class="card-footer">
      <nuxt-link
        :to="'/project/' + project._id"
        tag="button"
        class="button is-primary is-light is-fullwidth"
      >
        Voir
      </nuxt-link>
      <button
        @click="deleteProject(project._id)"
        class="button is-danger is-light is-fullwidth"
      >
        Supprimer
      </button>
    </footer>
  </div>
</template>
<script lang="ts">
import Vue, { PropOptions } from "vue";
import moment from "moment";
interface Client {
  _id: string;
  name: string;
  email: string;
  address: string;
}

interface Project {
  _id: string;
  name: string;
  hourlyRate: number;
  tasks?: [];
  client: Client;
  created_at: Date;
}
export default Vue.extend({
  name: "ProjectCard",
  props: {
    project: {
      type: Object,
      required: true
    } as PropOptions<Project>
  },
  data() {
    return {
      actionLoading: {
        delete: false
      }
    };
  },
  methods: {
    deleteProject(id: string) {
      this.$store.dispatch("REQUEST_DELETE_PROJECT", id);
    }
  },
  computed: {
    createdAtDisplay() {
      moment.locale("fr");
      return moment(this.project.created_at).format("LL");
    }
  }
});
</script>
<style scoped>
button {
  margin: 5px;
}
button + button {
  margin-left: 0;
}
</style>
