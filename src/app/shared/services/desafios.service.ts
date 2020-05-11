import { Injectable } from '@angular/core';
import {  AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { NavController } from '@ionic/angular';

export interface Desafios {
  id?: string;
  number: string;
  quiz: any;
  text: string;
}

@Injectable({
  providedIn: 'root'
})
export class DesafiosService {

  private desafio: Observable<Desafios[]>;
  private desafioCollection: AngularFirestoreCollection<Desafios>;

  constructor(
    private afs: AngularFirestore,
    private nav: NavController
  ) {
    this.desafioCollection = this.afs.collection<Desafios>('desafio');
    this.desafio = this.desafioCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      })
    )
  }

  getDesafios(): Observable<Desafios[]> {
    return this.desafio;
  }

  getDesafio(id: string): Observable<Desafios> {
    return this.desafioCollection.doc<Desafios>(id).valueChanges().pipe(
      take(1),
      map(idea => {
        idea.id = id;
        return idea;
      })
    );
  }
}
