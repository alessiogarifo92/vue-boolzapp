// Per oggi saremo sulla milestone2, chat differenziate:
// cliccando sulla chat vedo quella corrispondente;
// con header con dati relativi a chat attiva;
// relativa chat in elenco rimane selezionata

// var app = new Vue({
//   el : '#app',
//   data : {
//     activeEl : 0,
//     chat : [],
//     addElement : '',
//     rispostaFissa: ''
//   },

var app = new Vue({
  el: "#app",
  data: {
    activeEl:0,
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
    mostraChat : function (el) {
      this.activeEl = el;
    }
  }
  });
  //   addItem(){
  //     this.chat.push(this.addElement);
  //     this.addElement = '';
  //     // uso arrow function senno il this diventa su l intera window e this perde valore rispetto rispostaFissa
  //      setTimeout(() => {
  //         this.rispostaFissa='ok...'
  //       }, 3000);
  //   }
  // }
// });
