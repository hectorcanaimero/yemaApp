import { Component, OnInit } from '@angular/core';
import { Users } from './../../shared/services/games.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  image: string = '';
  user: Users[] = [];

  constructor() { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('yemaApp'));
    this.image = `./assets/avatars/${ this.user['avatar'] }`;
  }

}
