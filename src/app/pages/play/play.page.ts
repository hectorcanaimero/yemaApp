import { DesafiosService } from './../../shared/services/desafios.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play',
  templateUrl: './play.page.html',
  styleUrls: ['./play.page.scss'],
})
export class PlayPage implements OnInit {

  constructor(
    private desafio: DesafiosService
  ) { }

  ngOnInit() {
  }

}
