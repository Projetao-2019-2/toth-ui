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
  },

  addComment(state, { comment, post }) {
    if (post.comments && post.comments.length > 0) {
      post.comments.push(comment);
    } else {
      post.comments = [comment];
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

  async send({ commit }, { data }) {
    const response = await this.$axios.$post("posts", data);
    commit("add", response.post);
    return response.post;
  },

  async update({ commit }, { formData, id }) {
    const response = await this.$axios.$put(`posts/${id}`, formData);
    return response.post;
  },

  async postComment({ commit }, comment) {
    const response = await this.$axios.$post(`comments/`, comment);
  },

  async vote({ commit, getters, dispatch }, { wasUseful, id }) {
    const post = getters.getById(id);
    if (Object.keys(post).length !== 0) {
      commit("vote", { wasUseful, post });

      const formData = new FormData();
      formData.append("util", post.util);
      formData.append("n_util", post.n_util);
      formData.append("texto", post.texto);
      dispatch("update", { formData, id });
    } else {
      alert("could not find post");
    }
  },

  async addComment({ commit, getters, dispatch }, { text, postId }) {
    const post = getters.getById(postId);

    if (Object.keys(post).length !== 0) {
      const comment = {
        postid: post.id,
        userid: 16,
        text: text
      };
      commit("addComment", { comment, post });
      dispatch("postComment", comment);
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
