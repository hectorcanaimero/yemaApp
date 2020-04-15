import { Injectable } from '@angular/core';
import { CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class UsersGuard implements CanLoad {

  constructor(private useService: UserService) { }

  canLoad() {
    return this.useService.activate();
  }
}
