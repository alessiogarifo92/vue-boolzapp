// Per oggi saremo sulla milestone2, chat differenziate:
// cliccando sulla chat vedo quella corrispondente;
// con header con dati relativi a chat attiva;
// relativa chat in elenco rimane selezionata

var app = new Vue({
  el : '#app',
  data : {
    activeEl : 0
  },

  methods : {
    mostraChat : function (el) {
      this.activeEl = el;
    }
  }
});
