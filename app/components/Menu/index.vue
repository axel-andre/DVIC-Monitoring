<template>
  <aside class="menu">
    <p class="menu-label">
      Administration
    </p>
    <ul class="menu-list">
      <li>
        <nuxt-link
          to="/client/"
          :class="{ 'is-active': $route.path === '/client/' }"
          >Clients</nuxt-link
        >
      </li>
      <li>
        <ul>
          <li v-for="client in $store.state.clients" :key="client._id">
            <nuxt-link
              :to="'/client/' + client._id"
              tag="a"
              :class="{ 'is-active': $route.params.id === client._id }"
            >
              {{ client.name }}
            </nuxt-link>
          </li>
        </ul>
      </li>
      <li>
        <nuxt-link
          to="/project/"
          tag="a"
          :class="{ 'is-active': $route.path === '/project/' }"
        >
          Projets
        </nuxt-link>
        <ul>
          <li v-for="project in $store.state.projects" :key="project._id">
            <nuxt-link
              :to="'/project/' + project._id"
              tag="a"
              :class="{ 'is-active': $route.params.id === project._id }"
            >
              {{ project.name }}
            </nuxt-link>
          </li>
        </ul>
      </li>
    </ul>
  </aside>
</template>
<script>
export default {
  mounted() {
    console.log(this.$route);
  }
};
</script>
