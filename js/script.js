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
   ],
   messInviato : {
     messaggio:"",
     orario:"20/11/2020 10:52:03",
     stato:"mychat"
   },
   rispostaFissa:{
     messaggio:"ok...",
     orario:"20/11/2020 10:52:03",
     stato:"yourchat"
   }
  },

  methods : {
    // per cambiare con click l active el
    mostraChat : function (el) {
      this.activeEl = el;
    },

// MILESTONE 3

    addElement: function (index) {
      // imposto condizione che se messaggio inserito input diverso da vuoto allora pusha tutto else sottinteso non fa nulla
      if (this.messInviato.messaggio !== "") {
        // seleziono percorso per pushare oggetto messInviato alla sola chat attiva
        this.listaUtenti[this.activeEl].chat.push({...this.messInviato});
        // altrimenti this.listaUtenti[this.activeEl].chat.push(
      //   {
      //     messaggio:"",
      //     orario:"20/11/2020 10:52:03",
      //     stato:"mychat"
      //   }
      // );
        // riporto messaggio di messInviato vuoto per azzerare input
        this.messInviato.messaggio = "";
        // array function per setTimeout 2 sec per risposta fissa (array function senno non riconoscerebbe this come elemento cod vue ma come elemento window quindi tutta la pagina)
         setTimeout(() => this.listaUtenti[this.activeEl].chat.push({...this.rispostaFissa}), 2000);
         // altrimenti this.listaUtenti[this.activeEl].chat.push({
         //   messaggio:"ok...",
         //   orario:"20/11/2020 10:52:03",
         //   stato:"yourchat"
         // }), 2000);
      }
   }
 },
 // funzione per vedere scroll al pari del nuovo messaggio
  updated: function () {
    var container = document.querySelector("#chat");
    var scrollHeight = container.scrollHeight;
    container.scrollTop = scrollHeight;
  },

// MILESTONE 4
// funzione per filtrare nome search bar
  computed: {
   listafiltr() {
     return this.listaUtenti.filter( utente => {
        return !this.searchContact || utente.nome.toLowerCase().indexOf(this.searchContact.toLowerCase()) > -1
      })
    }
  }
});
