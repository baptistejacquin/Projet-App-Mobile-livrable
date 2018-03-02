import Vue from 'vue';
import App from './App.vue';
import ToggleButton from 'vue-js-toggle-button';

Vue.use(ToggleButton);

Vue.component("machine", {
  props: ["objet"],
  template: "<li><h2 v-bind:class=\"{green:objet.active}\">{{objet.nom}}</h2>\n" +
  "    <toggle-button :color=\"{checked: '#41d100',unchecked: '#cb0c70'} \" v-model=\"objet.active\"/>\n" +
  "    <br><br>" +
  "</li>",
})

Vue.component("formAjoutMachine", {
  props:['tempo'],
  template:
  " <div>     <!-- Text input-->\n" +
  "        <div class=\"form-group\">\n" +
  "          <label class=\"col-md-12 control-label\" for=\"Nom\">Nom</label>\n" +
  "          <div class=\"col-md-12\">\n" +
  "            <input id=\"Nom\" name=\"Nom\" type=\"text\" placeholder=\"Nom\" class=\"form-control input-md\" required=\"\" v-model=\"tempo.selectName\">\n" +
  "\n" +
  "          </div>\n" +
  "        </div>\n" +
  "\n" +
  "        <!-- Select Basic -->\n" +
  "        <div class=\"form-group\">\n" +
  "          <label class=\"col-md-12 control-label\" for=\"active\">En marche</label>\n" +
  "          <div class=\"col-md-12\">\n" +
  "            <select id=\"active\" name=\"active\" class=\"form-control\" v-model=\"tempo.selectEtat\">\n" +
  "              <option value=\"true\">true</option>\n" +
  "              <option value=\"false\">false</option>\n" +
  "            </select>\n" +
  "          </div>\n" +
  "        </div>\n" +
  "\n" +
  "</div>  "
})

new Vue({
  el: '#app',
  render: h => h(App),
})
;

