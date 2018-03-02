<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1><br>
    <ul>
    <li  v-for="(machine,index) in tableau" >
    <h2 v-bind:class="{green:machine.active}">{{machine.nom}}</h2>
    <p>fonctionne {{machine.active}}</p>
    <toggle-button :color="{checked: '#41d100',unchecked: '#cb0c70'} " v-model="machine.active"/>
    <br><br>
    </li>
    </ul>
    </div>
</template>
<script>
  export default {
    name: 'app',
    data() {
      return {
        msg: 'Welcome to the future',
        tableau: [
          {
            nom: 'Hobbit',
            active: true,
          },
          {
            nom: 'Dans',
            active: false,
          },
          {
            nom: 'La',
            active: true,
          },
          {
            nom: 'Comté',
            active: true,
          }
        ],
      }
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1, h2 {
    font-weight: normal;
  }

  h2 {
    color: #cb0c70;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .green {
    color: #41d100;
  }


</style>
