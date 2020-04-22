<template>
  <div class="project-page">
    <h1 class="title is-1">Projets</h1>
    <hr />
    <button
      class="button is-success"
      @click="$store.commit('SHOW_MODAL', 'create_project')"
    >
      Créer un projet
    </button>
    <div class="project-list">
      <ProjectCard
        v-for="project in $store.state.projects"
        :key="project._id"
        :project="project"
      />
    </div>
  </div>
</template>
<style>
.card {
  max-width: 300px;
}
</style>
<script>
import ProjectCard from '../../components/ProjectCard/index.vue'
export default {
  name: "index",
  components: {
    ProjectCard
  },
  head: {
    title: "Projets"
  },
  mounted() {
    console.log(this.$store.state.projects);
  }
};
</script>
<style>
.project-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 30px;
  padding-top: 30px;
}
</style>
