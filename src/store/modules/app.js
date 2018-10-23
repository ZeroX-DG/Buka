const state = {
  toggleBooksContent: true,
  openedBookPath: "",
  isLoading: false,
  openedBooklistId: "",
  openedBookId: ""
};

const getters = {
  toggleBooksContent: state => state.toggleBooksContent,
  openedBookPath: state => state.openedBookPath,
  isLoading: state => state.isLoading,
  openedBooklistId: state => state.openedBooklistId,
  openedBookId: state => state.openedBookId
};

const mutations = {
  isLoading(state) {
    state.isLoading = !state.isLoading;
  }
};

export default {
  state,
  getters,
  mutations
};
