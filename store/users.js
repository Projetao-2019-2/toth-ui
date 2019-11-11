export const actions = {
  async update({ commit }, payload) {
    await this.$axios.$put("users/" + payload.userId, payload.data);
  }
};
