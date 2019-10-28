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
  },
  setById(state, { id, post: newPost }) {
    if (state.list && state.list.length > 0) {
      let post = state.list.find(post => post.id.toString() === id);
      const index = state.list.indexOf(post);
      state.list[index] = newPost;
    } else {
      state.list = [newPost];
    }
  }
};

export const actions = {
  async getAll({ commit }) {
    const data = await this.$axios.$get("posts");
    // const data = [
    //   {
    //     id: "1",
    //     texto:
    //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consequat sed arcu et malesuada. In feugiat quis tellus at interdum. Maecenas eu sapien at eros porttitor sollicitudin at sed eros. Donec nec augue fringilla ante pharetra porta vel non purus. Aenean at cursus nisi. Duis ac commodo quam. Praesent maximus quis velit non viverra. Mauris porttitor nisl eu arcu interdum, ac commodo massa commodo. Nullam nulla purus, molestie at elementum vitae, tincidunt eget sem. Donec gravida mi sit amet rutrum pharetra. Aenean cursus malesuada vestibulum. In interdum arcu at sem viverra aliquam.",
    //     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTtMKMnYUGqhDXd1AzttMejKimEmFR-DMBTVb7T-5Btv2EK7ogr",
    //     comments: [
    //       {
    //         texto: "Isso aí é bom demais",
    //         user: {
    //           nome: "Joao Coutinho",
    //           email: "jvsc@cin.ufpe.br"
    //         },
    //         replys: [{
    //           texto: "Concordo Bro!",
    //           user: {
    //             nome: "Rosinaldo Guedes",
    //             email: "rglj2@cin.ufpe.br"
    //           }
    //         }]
    //       },
    //       {
    //         texto: "O que significa CCEN?",
    //         user: {
    //           nome: "Thiago ",
    //           email: "titi@cin.ufpe.br"
    //         }
    //       }
    //     ],
    //     categoria: {
    //       nome: "Infraestrutura",
    //       cor: "#1dbdff"
    //     }
    //   }
    // ];
    commit("setList", data.posts);
  },
  async send({ commit, auth }, data) {
    // await axios.post("http://localhost:3030/courses", data);

    commit("setList", data);
  },
  async getDetails({ commit }, id) {
    const data = await this.$axios.$get(`/posts/${id}`);

    if (data && data.post) {
      commit("setById", { id, post: data.post });
    } else {
      console.log("could not get post " + id + " details");
    }
  }
};

export const getters = {
  getById: state => id => {
    let output = {};
    if (state.list && state.list.length > 0) {
      output = state.list.find(post => post.id.toString() === id);
    }
    return output;
  }
};
