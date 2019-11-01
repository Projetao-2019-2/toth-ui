export const state = () => ({
  listOfCategories: []
});

export const mutations = {
  setList(state, data) {
    state.listOfCategories = data;
  }
};

export const actions = {
  async getAll({ commit }) {
    const data = await this.$axios.$get("categories");
    commit("setList", data.categories);
  }
};

export const getters = {
  getAll: state => {
    return state.listOfCategories;
  }
};
