import axios from 'axios'

export default {
  /*  async GET_PROJECTS({ commit }) {
     try {
       const { data: projects } = await axios.get('localhost:8080/project')
       console.log(projects);
       commit('SET_PROJECTS', projects)
     } catch (e) {
       console.error(e);
     }
   }, */
  async nuxtServerInit({ commit, state }, { app }) {
    try {
      const { data: projects } = await axios.get('http://localhost:8080/project')
      commit('SET_PROJECTS', projects)
      const { data: clients } = await axios.get('http://localhost:8080/client')
      commit('SET_CLIENTS', clients)
    } catch (e) {
      console.error(e);
    }
  },
  async REQUEST_DELETE_PROJECT({ commit, state }, id) {
    commit('START_LOADER')
    try {
      commit('START_LOADER')
      await axios.delete(`http://localhost:8080/project/${id}`)
      commit('DELETE_PROJECT', id)
      commit('STOP_LOADER')
    } catch (e) {
      console.error(e);
    }
  },
  async REQUEST_DELETE_CLIENT({ commit }, id) {
    commit('START_LOADER')
    try {
      commit('START_LOADER')
      await axios.delete(`http://localhost:8080/delete/${id}`)
      commit('DELETE_CLIENT', id)
      commit('STOP_LOADER')
    } catch (e) {
      console.error(e);
    }
  },
  async REQUEST_CREATE_PROJECT({ commit }, project) {
    try {
      const { data } = await axios.post(`http://localhost:8080/project/`, project)
      commit('CREATE_PROJECT', data)
    } catch (e) {
      console.error(e);
    }
  },
  async REQUEST_CREATE_CLIENT({ commit }, client) {
    try {
      const { data } = await axios.post(`http://localhost:8080/client/`, client)
      commit('CREATE_CLIENT', data)
    } catch (e) {
      console.error(e);
    }
  }
}
