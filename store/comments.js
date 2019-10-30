export const state = () => ({
  list: []
});

export const mutations = {
  add(state, text) {
    state.list.push({
      name: text
    });
  },
  remove(state, { post }) {
    state.list.splice(state.list.indexOf(post), 1);
  },
  setList(state, data) {
    state.list = data;
  }
};

export const actions = {
  async getPosts({ commit }) {

    commit("setList", data.posts);
  },
  async sendComment({ commit }, data) {
    // await axios.post("http://localhost:3030/courses", data);
    commit("setList", data);
  }
};

export const getters = {
  getPostById: state => id => {
    let output = {};
    if (state.list && state.list.length > 0) {
      const post = state.list.find(post => post.id.toString() === id);
      //get post comments
      output = post;
    }
    return output;
  }
};
