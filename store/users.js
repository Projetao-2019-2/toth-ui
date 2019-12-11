export const state = () => ({
  likedPosts: []
});

export const mutations = {
  setLikedPosts(state, posts) {
    state.likedPosts = posts;
  }
}

export const actions = {
  async update({ commit }, payload) {
    await this.$axios.$put("users/" + payload.userId, payload.data);
  },

  async getLikedPosts({ commit }) {
    const data = await this.$axios.$get("users/likedPosts");
    commit("setLikedPosts", data);
  }
};

export const getters = {
  getLikedPosts: state => {
    return state.likedPosts;
  }
}