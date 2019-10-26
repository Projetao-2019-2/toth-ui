<template>
  <div class="newpost-container">
    <PostThemes 
      :themes="themes" 
      @selectedTheme="updateSelectedTheme"/>
    <MediaSelection 
      :theme="selectedTheme"
      @onFileSelected ="imageSelected"/>
    <TextBox 
      :theme="selectedTheme"
      @newMessage="updateInputMessage"/>
    <div class="button-wrapper">
      <b-button 
        variant="light" 
        size="lg" 
        @click="doPost()" 
        :disabled="buttonNotActive"> Postar </b-button>
    </div>
  </div>
</template>

<script>
import PostThemes from "./PostThemes/main"
import MediaSelection from "./MediaSelection/main"
import TextBox from "./TextBox/main"

export default {
  name: 'NewPost',
  components: {
    PostThemes,
    MediaSelection,
    TextBox
  },
  data () {
    return {
      buttonNotActive: true,
      selectedTheme: null,
      image: null,
      inputMessage: '',
      themes: [
        {
          name: 'INFRAESTRUTURA',
          selected: false,
          description: "Como é o ambiente físico onde as atividades do curso são feitas? "+
            "Há algo depredado? Como é a coordenação? Existe uma sensação de organização? "+
            "Fique livre para compartilhar suas impressões.",
          color: '#1DBDFF'
        },
        {
          name: 'EXPERIÊNCIA EM DISCIPLINAS',
          selected: true,
          description: "As disciplinas são bem estruturadas? São muito difíceis? "+
            "São engajadoras? Como são os projetos e exercícios realizados na disciplina? "+
            "Se quiser, fale sobre alguma disciplina específica do curso.",
          color: '#16D64C'
        },
        {
          name: 'ATIVIDADES EXTRACURRICULARES',
          selected: false,
          description: "O curso oferece possibilidades de pesquisa, projetos de extensão,empresas juniores...? "+
            "Conte suas experiências nesse aspecto!",
          color: '#FF8E20'
        },
                {
          name: 'ARREDORES',
          selected: false,
          description: "É possível se divertir na faculdade ou em seus arredores? "+
            "Como é o ambiente externo? Conte as suas experiências!",
          color: '#FF6DD5'
        }
      ]
    }
  },
  methods: {
    imageSelected (file) {
      // const fd = new FormData();
      // fd.append('image', file, file.name);
      // console.log(fd);
      this.image = file;
    },

    checkInputMessage (msg) {
      if (msg.length === 0) {
        this.buttonNotActive = true;
      } else {
        this.buttonNotActive = false;
      }
    },

    updateSelectedTheme (theme) {
      this.themes.forEach((item) => {
        if (item.name === theme.name) {
          item.selected = true;
          this.selectedTheme = item;
        } else {
          item.selected = false;
        }
      })
    },

    updateInputMessage(msg) {
      this.inputMessage = msg;
      this.checkInputMessage(msg);
    },

    doPost () {
      console.log('O tema da postagem é: ' + this.selectedTheme.name);
      console.log('O texto da postagem é: ' + this.inputMessage);
      console.log(this.image);

      // this.$axios.post('https://project-toth.herokuapp.com/v1/posts', {
      //   texto: this.inputMessage,
      //   file: []
      // })
      // .then(function (response) {
      //   console.log(response);
      // })
      // .catch(function (error) {
      //   console.log(error);
      // });
    }
  },
  created () {
    this.themes.forEach((theme) => {
      if (theme.selected === true) {
        this.selectedTheme = theme;
      }
    })
  }
}
</script>

<style>
  .newpost-container {
    background: #011932;
    /* border: 1px solid black; */
    width: 800px;
  }
  .button-wrapper {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    margin-top: 30px;
  }
</style>