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

export class UserService {

  private users: Observable<Users[]>;
  private userCollection: AngularFirestoreCollection<Users>;

  constructor(
    private afs: AngularFirestore,
    private nav: NavController
  ) {
    this.userCollection = this.afs.collection<Users>('users');
    this.users = this.userCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getUsers(): Observable<Users[]> {
    return this.users;
  }

  getUser(id: string): Observable<Users> {
    return this.userCollection.doc<Users>(id).valueChanges().pipe(
      take(1),
      map(idea => {
        idea.id = id;
        return idea;
      })
    );
  }

  add(user: Users): Promise<DocumentReference> {
    return this.userCollection.add(user);
  }

  update(user: Users): Promise<void> {
    return this.userCollection.doc(user.id).update(
      {
        name: user.name,
        age: user.age,
        sex: user.sex,
        avatar: user.avatar
      }
    );
  }

  delete(id: string): Promise<void> {
    return this.userCollection.doc(id).delete();
  }


  async activate(): Promise<boolean> {
    const token = localStorage.getItem('yemaApp');
    await token;
    console.log(token);
    if (!token) {
      this.nav.navigateRoot('/intro');
      return Promise.resolve(false);
    } else {
      return Promise.resolve(true);
    }
  }
}
