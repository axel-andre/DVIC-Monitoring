export default {
  SET_PROJECTS(state, projects) {
    state.projects = projects
  },
  SET_CLIENTS(state, clients) {
    state.clients = clients
  },
  DELETE_PROJECT(state, id) {
    state.projects = state.projects.filter(project=> project._id !== id)
  },
  CREATE_PROJECT(state, project){
    state.projects.push(project)
  },
  DELETE_CLIENT(state, id) {
    state.clients = state.clients.filter(client=> client._id !== id)
  },
  CREATE_CLIENT(state, client){
    state.clients.push(client)
  },
  START_LOADER(state) {
    state.loader = true
  },
  STOP_LOADER(state) {
    state.loader = false
  },
  SHOW_MODAL(state, modalName){
    state.displayedModal = modalName
  },
  HIDE_MODAL(state){
    state.displayedModal = null
  },
  START_EDITING_PROJECT(state, id){
    state.displayedModal = 'edit_project'
    state.editingProject = state.projects.find(project=>project._id === id)
  }
};
