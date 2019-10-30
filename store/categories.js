export const state = () => ({
  listOfCategories: []
});

export const mutations = {
  setList(state, data) {
    console.log("oioioi");
    console.log(data);
    state.listOfCategories = data;
  }
};

export const actions = {
  async getAll({ commit }) {
    const data = await this.$axios.$get("categories");
    console.log(data);
    commit("setList", data.categories);
  }
};

export const getters = {
  getAll: state => {
    return state.listOfCategories;
  }
};
