import { Injectable } from '@angular/core';
import { Router, Resolve } from '@angular/router';

// rxjs
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {first} from 'rxjs/operators';

import { User } from '../models/user.model';
// NgRx
import { Store } from '@ngrx/store';
import { AppState, getSelectedUserByUrl } from './../../+store';
import { switchMap } from 'rxjs/operators';


@Injectable()
export class UserResolveGuard implements Resolve<User> {

  constructor(
    private router: Router,
    private store: Store<AppState>,
  ) {}

  resolve(): Observable<User> {
    return this.store.select(getSelectedUserByUrl)
      .pipe(
        switchMap(user => {
          if (user) {
            return of(user);
          } else {
            this.router.navigate(['/users']);
            return of(null);
          }
        }),
        first()
      );
  }
}
