<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>Welcome to Your Vue.js App</h1>
    <h2 v-for="plant in plants" :key="plant.id" @click="selectUser(plant.ownerId)">
      {{ plant.name }}
    </h2>
    <p>{{selectedUser.email}}</p>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      plants: [],
      selectedUser: {
        email: ""
      }
    }
  },
  async created () {
    const res = await fetch("http://localhost:3000/plants");
    const data = await res.json();
    this.plants = data;
  },
  methods: {
    async selectUser(id) {
      const res = await fetch(`http://localhost:3000/users/${id}`);
      const data = await res.json();
      this.selectedUser = data;
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
