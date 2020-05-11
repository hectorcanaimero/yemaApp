import { Injectable } from '@angular/core';
import {  AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { NavController } from '@ionic/angular';

export interface Users {
  id?: string;
  name: string;
  age: number;
  sex: string;
  avatar: string;
}

@Injectable({
  providedIn: 'root'
})

export class GamesService {

  constructor(
    private afs: AngularFirestore,
    private nav: NavController
  ) { }
}
