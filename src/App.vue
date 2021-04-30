<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Header />
    <router-view
      :data="data"
      @delete-item="handleDelete($event)"
      @new-note="handleNewNote($event)"
      @update:note="handelUpdate($event)"
    ></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Header from "./components/header";

export default {
  name: "App",
  components: {
    // HelloWorld
    Header,
  },

  data() {
    return {
      data: [
        {
          id: 1,
          title: "title1",
          content: ["first", "second"],
        },
        {
          id: 2,
          title: "title2",
          content: ["first", "second"],
        },
      ],
    };
  },
  methods: {
    handleDelete(id) {
      this.data = this.data.filter((item) => item.id !== id);
    },
    handleNewNote(note) {
      this.data.push(note);
    },
    handelUpdate(note) {
      console.log(note.id);
      console.log(this.data[1].id);
      for (var i in this.data) {
        if (this.data[i].id == note.id) {
          this.data[i] = note;
          alert('hi')
          break; //Stop this loop, we found it!
        }
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
