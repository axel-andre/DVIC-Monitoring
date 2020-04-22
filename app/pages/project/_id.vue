<template>
  <section>
    <h1 class="title is-1 has-text-centered">{{ project.name }}</h1>
    <hr />
    <div class="has-text-right">
      <button @click="deleteProject" class="button is-danger is-light">Supprimer</button>
      <span class="has-text-grey is-italic ">
        {{ project.created_at }}
      </span>
    </div>
    <br />
    <p>{{ project.description }}</p>
  </section>
</template>
<script>
import moment from "moment";
export default {
  head() {
    return {
      title: "Projet — " + this.project.name
    };
  },
  computed: {
    project() {
      moment.locale("fr");
      const project = this.$store.state.projects.find(
        project => project._id === this.$route.params.id
      );
      return {
        ...project,
        created_at: moment(project.created_at).format("LL")
      };
    }
  },
  methods: {
    deleteProject(){
      this.$router.push('/project')
      this.$store.dispatch('REQUEST_DELETE_PROJECT', this.project._id)
    }
  },
};
</script>
<style>
button{
  margin-top: -7px;
  margin-right: 10px;
}
</style>
