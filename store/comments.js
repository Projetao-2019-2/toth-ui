export const state = () => ({
  list: []
});

export const mutations = {
  add(state, comment) {
    state.list.push(comment);
  },
  setList(state, data) {
    state.list = data;
  },
  setById(state, newComment) {
    const id = newComment.id;
    if (state.list && state.list.length > 0) {
      const comment = state.list.find(comment => comment.id.toString() === id);
      if (comment) {
        const index = state.list.indexOf(comment);
        state.list[index] = newComment;
      } else {
        state.list.push(newComment);
      }
    } else {
      state.list = [newComment];
    }
  }
};

export const actions = {
  async getAll({ commit }) {
    const data = await this.$axios.$get("comments");
    commit("setList", data.comments);
  },

  async getDetails({ commit }, id) {
    const response = await this.$axios.get(`comments/${id}`);
    commit("setById", response.data.comment);
  },
  async getDetailsFromList({ dispatch }, ids = []) {
    for(const id of ids) {
      await dispatch("getDetails", id);
    };
  },
  async post({ commit, getters, dispatch }, comment) {
    const response = await this.$axios.$post(`comments/`, comment);
    await dispatch("getDetails", response.comment.id);

    const newComment = getters.getById(response.comment.id);
    commit("posts/addComment", newComment, { root: true });
  }
};

export const getters = {
  getById: state => id => {
    let output = {};
    if (state.list && state.list.length > 0) {
      output = state.list.find(comment => comment.id.toString() === id.toString());
    }
    return output;
  }
};
