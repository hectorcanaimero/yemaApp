import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  ocultar = '';

  slides: { img: string, titulo: string, desc: string }[] = [
    {
      img: '/assets/slides/photos.svg',
      titulo: 'Juega con Nostros',
      desc: 'Mira y comparte increíbles fotos de todo el mundo'
    },
    {
      img: '/assets/slides/music-player-2.svg',
      titulo: 'Estudia la palabra de Dios',
      desc: 'Toda tu música favorita está aquí'
    }
  ];

  constructor( private router: Router ) { }

  ngOnInit() {
  }

  onClick() {
    this.ocultar = 'animated fadeOut fast';
    this.router.navigate(['main/home']);
  }

}
