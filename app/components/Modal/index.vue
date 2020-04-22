<template>
  <div>
    <CreateProjectModal v-if="$store.state.displayedModal === 'create_project'" />
    <CreateClienttModal v-if="$store.state.displayedModal === 'create_client'" />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import CreateProjectModal from "./createProject.vue";
import CreateClienttModal from "./createClient.vue";
const emptyProject = {
  name: null,
  description: null,
  client: null,
  hourlyRate: 0
};
export default Vue.extend({
  components: {
    CreateProjectModal,
    CreateClienttModal
  }
});
</script>
