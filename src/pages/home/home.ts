import { Component, ViewChild   } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('mySlider') mySlider: any;

  elenco =  [
             {
               "img": "https://flamidia.blob.core.windows.net/site/upload/perfil/20170720164222_708.jpg",
               "posicao": "Goleiro  ",
               "nome": "Diego Alves",
               "camisa": "1"
             },
             {
               "img": "https://flamidia.blob.core.windows.net/site/upload/perfil/20170510134436_380.jpg",
               "posicao": "Zagueiro  ",
               "nome": "Juan",
               "camisa": "4"
             },
             {
               "img": "https://flamidia.blob.core.windows.net/site/upload/perfil/20170510133137_26.jpg",
               "posicao": "Volante  ",
               "nome": "Cuellar",
               "camisa": "26"
             },
             {
               "img": "https://flamidia.blob.core.windows.net/site/upload/perfil/20170510133212_528.jpg",
               "posicao": "Meio Campo  ",
               "nome": "Diego",
               "camisa": "35"
             },
             {
               "img": "https://flamidia.blob.core.windows.net/site/upload/perfil/20170613121523_173.jpg",
               "posicao": "Meio Campo  ",
               "nome": "Éverton Ribeiro",
               "camisa": "7"
             },
             {
               "img": "https://flamidia.blob.core.windows.net/site/upload/perfil/20170510133631_285.jpg",
               "posicao": "Atacante  ",
               "nome": "Paolo Guerrero",
               "camisa": "9"
             }
           ]

     constructor(){}

     slideNext(){
       this.mySlider.slideNext();
     }

     slidePrev(){
       this.mySlider.slidePrev();
     }
 }
