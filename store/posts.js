export const state = () => ({
  list: []
});

export const mutations = {
  add(state, post) {
    state.list.push(post);
  },
  remove(state, { post }) {
    state.list.splice(state.list.indexOf(post), 1);
  },
  setList(state, data) {
    state.list = data;
  },
  setById(state, { id, post: newPost }) {
    if (state.list && state.list.length > 0) {
      let post = state.list.find(post => post.id.toString() === id);
      const index = state.list.indexOf(post);
      state.list[index] = newPost;
    } else {
      state.list = [newPost];
    }
  },
  vote(state, { wasUseful, post }) {
    if (wasUseful) {
      post.util += 1;
    } else {
      post.n_util += 1;
    }
  }
};

export const actions = {
  async getAll({ commit }) {
    const data = await this.$axios.$get("posts");
    commit("setList", data.posts);
  },
  async getDetails({ commit }, id) {
    const data = await this.$axios.$get(`/posts/${id}`);

    if (data && data.post) {
      commit("setById", { id, post: data.post });
    } else {
      console.log("could not get post " + id + " details");
    }
  },
  async send({ commit }, data) {
    const response = await this.$axios.$post("posts", data);
    commit("add", response.post);
    return response.post;
  },
  async update({ commit }, post) {
    const response = await this.$axios.$put(`posts/${post.id}`, post);
    commit("setById", { id, post: response.post });
    return response.post;
  },

  async vote({ commit, getters, dispatch }, { wasUseful, id }) {
    const post = getters.getById(id);
    if (Object.keys(post).length !== 0) {
      commit("vote", { wasUseful, post });
      dispatch("update", post);
    } else {
      alert("could not find post");
    }
  }
};

export const getters = {
  getById: state => id => {
    let output = {};
    if (state.list && state.list.length > 0 && id) {
      output = state.list.find(post => post.id.toString() === id.toString());
    }
    return output;
  },

  getAllPosts: state => {
    return state.list;
  }
};
