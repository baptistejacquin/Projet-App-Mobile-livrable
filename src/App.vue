<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1><br>

    <ul>
      <machine  v-for="(machine) in machines" :key="machine.id" :objet="machine"></machine>
    </ul>
    <formAjoutMachine :tempo="machineTempo"></formAjoutMachine>
    <button class="btn btn-success" @click="addMachines(machineTempo.selectName,machineTempo.selectEtat)">Valider</button>
    </div>
</template>
<script>
  export default {
    name: 'app',
    data() {
      return {
        msg: 'Welcome to the future',
        machineTempo:{
          selectName:'',
          selectEtat: false,
        },
      machines: [
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
        ]
      }
    },
    methods:{
      addMachines: function (name,etat) {
        if (etat === 'true'){
          etat = true
        }else {
          etat = false
        }
        this.machines.push({nom:name,active:etat})
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
