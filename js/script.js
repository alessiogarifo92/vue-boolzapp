// Per oggi saremo sulla MILESTONE 2, chat differenziate:
// cliccando sulla chat vedo quella corrispondente;
// con header con dati relativi a chat attiva;
// relativa chat in elenco rimane selezionata

// Per oggi saremo sulla MILESTONE 3, inserimento msg in chat e relativa risposta:
// l’utente può scrivere nel campo di input in basso;
// al click sull’invio succedono 2 cose: 1. il mio msg viene inviato alla chat relativa; 2. ottengo un msg di risposta automatico;
// il msg di risposta non è istantaneo, ma viene dopo 1 secondo;
// chiaramente tutto ciò viene agganciato/creato solo nella chat dove stò chattando;
// quindi ogni chat avrà i proprio messaggi.

// Per oggi saremo sulla MILESTONE 4, filtro su listato chat attive:
// l’utente può scrivere nel campo di input a sx;
// alla digitazione, ad ogni carattere digitato il istato si aggiorna in base alla corrispondenza della stringa scritta nell’input, rispetto al nomeContatto/Chat.


var app = new Vue({
  el: "#app",
  data: {
    activeEl:0,
    searchContact: '',
    inputMessaggio: '',
    mioUtente:{
      nome:"Nome Utente",
      avatar:"img/avatar_2.jpg"
    },
    listaUtenti : [
      {
        nome:"Michele",
        data: "20/11/2020 10:52:03",
        avatar:"img/avatar_1.jpg",
        chat: [
         {
           messaggio:"Lo sai che ha aperto una nuova pizzeria?",
           orario:"20/11/2020 10:52:03",
           stato:"mychat"
         },
         {
           messaggio:"Si, ma preferirei andare al cinema",
           orario:"20/11/2020 10:52:03",
           stato:"yourchat"
         }
       ]
      },
      {
        nome:"Camillo",
        data: "20/11/2020 10:52:03",
        avatar:"img/avatar_3.jpg",
        chat: [
         {
           messaggio:"Cosa ti va da mangiare stasera?",
           orario:"20/11/2020 10:52:03",
           stato:"mychat"
         },
         {
           messaggio:"Sai cosa ci starebbe bene?...Una bella pizza!",
           orario:"20/11/2020 10:52:03",
           stato:"yourchat"
         }
       ]
      },
      {
        nome:"Giovanni",
        data: "20/11/2020 10:52:03",
        avatar:"img/avatar_4.jpg",
        chat: [
         {
           messaggio:"Hai visto il nuovo film di Avengers?",
           orario:"20/11/2020 10:52:03",
           stato:"mychat"
         },
         {
           messaggio:"Si e sto già fremendo per il prossimo capitolo!!!",
           orario:"20/11/2020 10:52:03",
           stato:"yourchat"
         }
       ]
      },
      {
        nome:"Mario",
        data: "20/11/2020 10:52:03",
        avatar:"img/avatar_5.jpg",
        chat: [
         {
           messaggio:"Ci sei per una corsetta oggi pomeriggio?",
           orario:"20/11/2020 10:52:03",
           stato:"mychat"
         },
         {
           messaggio:"Penso di no, non sto molto bene...",
           orario:"20/11/2020 10:52:03",
           stato:"yourchat"
         }
       ]
      },
   ]
  },

  methods : {
    // per cambiare con click l active el
    mostraChat : function (el) {
      this.activeEl = el;
    },

// MILESTONE 3
    addElement : function (index) {
      if (this.inputMessaggio !== '') {
        this.listaUtenti[this.activeEl].chat.push({
          messaggio: this.inputMessaggio,
          orario: this.getNow(),
          stato:"mychat"
        });
        setTimeout(() => this.listaUtenti[this.activeEl].chat.push({
          messaggio:'ok...',
          orario: this.getNow(),
          stato:"yourchat"
        }), 2000);

        this.inputMessaggio = '';
      }
    },

    getNow: function() {
      const today = new Date();
      const date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
      const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const dateTime = date +' '+ time;
      return dateTime
    }

  },
  // funzione per vedere scroll al pari del nuovo messaggio(funz solo con prima chat)
  updated: function () {
    var container = document.querySelector("#chat");
    var scrollHeight = container.scrollHeight;
    container.scrollTop = scrollHeight;
  }
});
