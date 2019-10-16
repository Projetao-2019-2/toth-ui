// import axios from "axios";
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
    // const { data } = await axios.get("http://localhost:3030/courses");
    const data = [
      {
        id: "1",
        texto:
          "Aqui é Body Builder Ipsum PORRA! É 13 porra! Sabe o que é isso daí? Trapézio descendente é o nome disso aí. " +
          "É esse que a gente quer, é ele que nóis vamo buscar. AHHHHHHHHHHHHHHHHHHHHHH..., porra! É nóis caraio é trapezera" +
          " buscando caraio! Sai de casa comi pra caralho porra. AHHHHHHHHHHHHHHHHHHHHHH..., porra! Negativa Bambam negativa." +
          "Sai de casa comi pra caralho porra. Sai de casa comi pra caralho porra.Vai subir árvore é o caralho porra! É 13 porra!" +
          "Sai de casa comi pra caralho porra. Sabe o que é isso daí? Trapézio descendente é o nome disso aí.É esse que a gente quer, é ele que nóis vamo buscar.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTtMKMnYUGqhDXd1AzttMejKimEmFR-DMBTVb7T-5Btv2EK7ogr",
        comments: [
          {
            texto: "Isso aí é bom demais",
            user: {
              nome: "Joao Coutinho",
              email: "jvsc@cin.ufpe.br"
            },
            replys:[{
              texto: "Concordo Bro!",
              user: {
                nome: "Rosinaldo Guedes",
                email: "rglj2@cin.ufpe.br"
              }
            }]
          },
          {
            texto: "O que significa CCEN?",
            user: {
              nome: "Thiago ",
              email: "titi@cin.ufpe.br"
            }
          }
        ],
        categoria: {
          nome: "Infraestrutura",
          cor: "#1dbdff"
        }
      }
    ];
    commit("setList", data);
  },
  async sendPosts({ commit }, data) {
    // await axios.post("http://localhost:3030/courses", data);
    commit("setList", data);
  }
};

export const getters = {
  getPostById: state => id => {
    return state.list.find(post => post.id === id);
  }
};
