var app = new Vue({
  // elemento di aggancio app
  el: '#root',
  // apro oggetto data dedicato alle variabili
  data: {
    // imposto insexImmagini a 0
    indexImmagini: 0,
    // trasferisco immagini html in array immagini
    immagini: [
      'https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=clouds-country-daylight-371633.jpg&fm=jpg',
      'https://static.photocdn.pt/images/articles/2017/04/28/iStock-646511634.jpg',
      'https://cdn.mos.cms.futurecdn.net/FUE7XiFApEqWZQ85wYcAfM.jpg',
      'https://static.photocdn.pt/images/articles/2017/04/28/iStock-546424192.jpg'
    ]
  },
  // apro oggetto methods che conterrà tutte le funzioni
  methods: {
    /* creo funzione slideLeft che aggancierò al click sulla freccia sinistra*/
    sliderLeft: function(){
      /* in vue aggiungo sempre this davanti all elemento che voglio selezionare
      se index è maggiore di 0 lo diminuisco di 1*/
      if(this.indexImmagini > 0){
        this.indexImmagini -= 1;
      }/*altrimenti va all' ultima img*/else{
        this.indexImmagini = this.immagini.length - 1;
      }
    },
    // sliderRight opposto al primo
    sliderRight: function(){
      /*se index è minore della lunghezza array immagini lo aumento di 1*/
      if(this.indexImmagini < this.immagini.length - 1){
        this.indexImmagini += 1;
      }/*altrimenti lo setto alla prima immagine*/else{
        this.indexImmagini = 0;
      }
    },
    /*creo funzione per attivare i pallini alla quale do in pasto index dei pallini,
    quando cliccherò sul pallino mi trasformerà l' index immagine con index pallino
    cliccato cambiando così l' immagine. */
    attivaPallini: function(index){
      this.indexImmagini = index;
    }
  }
})
Vue.config.devtools = true;
