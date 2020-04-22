<template>
  <section>
    <h1 class="title is-1 has-text-centered">{{ client.name }}</h1>
    <hr />
    <div class="has-text-right">
      <span class="has-text-left">{{ client.email }}</span>
      <button @click="deleteClient" class="button is-danger is-light">
        Supprimer
      </button>
    </div>
    <br />
  </section>
</template>
<script>
export default {
  computed: {
    client() {
      return this.$store.state.clients.find(
        client => client._id === this.$route.params.id
      );
    }
  },
  methods: {
    deleteClient() {
      this.$router.push("/client/");
      this.$store.dispatch("REQUEST_DELETE_CLIENT", this.client._id);
    }
  }
};
</script>
