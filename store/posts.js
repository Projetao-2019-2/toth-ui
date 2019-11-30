export const state = () => ({
  list: [],
  searchResults: [],
  lastSearchedTerm: ""
});

export const mutations = {
  add(state, post) {
    state.list.push(post);
  },
  setList(state, data) {
    state.list = data;
  },
  setSearchResults(state, { results, searchString }) {
    state.searchResults = results;
    state.lastSearchedTerm = searchString;
  },
  setById(state, newPost) {
    const id = newPost.id;
    if (state.list && state.list.length > 0) {
      const post = state.list.find(post => post.id.toString() === id);
      if (post) {
        const index = state.list.indexOf(post);
        state.list[index] = newPost;
      } else {
        state.list.push(newPost);
      }
    } else {
      state.list = [newPost];
    }
  },
  vote(state, { wasUseful, post }) {
    if (wasUseful) {
      post.util = parseInt(post.util) + 1;
    } else {
      post.n_util = parseInt(post.n_util) + 1;
    }
  },

  addComment(state, comment) {
    const post = state.list.find(
      post => post.id.toString() === comment.PostId.toString()
    );
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
    return data.posts;
  },

  async search({ commit }, searchString) {
    const data = await this.$axios.$get("posts", {
      params: {
        search: searchString
      }
    });
    commit("setSearchResults", { results: data.posts, searchString });
    return data.posts;
  },

  async getDetails({ commit, rootGetters, dispatch }, id) {
    const data = await this.$axios.$get(`/posts/${id}`);
    const post = data.post;

    if (post) {
      if (post.comments && post.comments.length > 0) {
        const commentsIds = post.comments.map(comment => comment.id);

        await dispatch("comments/getDetailsFromList", commentsIds, {
          root: true
        });
        post.comments = commentsIds.map(rootGetters["comments/getById"]);
      }

      commit("setById", post);
    } else {
      console.log("could not get post " + id + " details");
    }
  },

  async send({ dispatch }, data) {
    const response = await this.$axios.$post("posts", data);
    await dispatch("getDetails", response.post.id);

    return response.post;
  },

  async update({ commit }, { formData, id }) {
    await this.$axios.$put(`posts/${id}`, formData);
  },

  async vote({ commit, getters, dispatch }, { wasUseful, id }) {
    const post = getters.getById(id);
    const valueToIncrement = wasUseful ? "util" : "n_util";

    await this.$axios.$patch(`posts/${id}`, {'increments': valueToIncrement});
    commit("vote", { wasUseful, post });
  },

  async addComment({ commit, getters, dispatch }, { text, postId }) {
    const post = getters.getById(postId);
    const userid = this.$auth.$state.user.id;

    if (Object.keys(post).length !== 0) {
      const comment = {
        postid: post.id,
        userid,
        text
      };
      dispatch("comments/post", comment, { root: true });
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

  getPostsByUserId: state => id => {
    return state.list.filter(post => post.userid.toString() === id.toString());
  },

  getSearchResults: state => {
    return state.searchResults;
  }
};
