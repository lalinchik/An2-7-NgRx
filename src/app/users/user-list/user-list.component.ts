import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import * as UsersActions from './../../+store/actions/users.actions';
import { AppState, getUsers, getUsersError, getEditedUser } from './../../+store';
import { Subscription } from 'rxjs/Subscription';
import { AutoUnsubscribe } from '../../core/decorators';

// rxjs
import { Observable } from 'rxjs/Observable';
import { catchError, switchMap } from 'rxjs/operators';

import { User } from '../models/user.model';
import { UserArrayService, UserObservableService } from '../services';

@Component({
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
@AutoUnsubscribe('subscription')
export class UserListComponent implements OnInit {
  users$: Store<Array<User>>;
  usersError$: Store<Error | string>;
  private subscription: Subscription;

  private editedUser: User;

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private route: ActivatedRoute
  ) { }


  ngOnInit() {
    this.users$ = this.store.select(getUsers);
    this.usersError$ = this.store.select(getUsersError);
    this.store.dispatch(new UsersActions.GetUsers());

    // listen id from UserFormComponent
    this.subscription = this.store.select(getEditedUser)
      .subscribe(
        user => {
          this.editedUser = user;
          console.log(`Last time you edited user ${JSON.stringify(this.editedUser)}`);
        }
      );
  }


  editUser(user: User) {
    const link = ['/users/edit', user.id];
    this.router.navigate(link);
  }

  isEdited(user: User) {
    if (this.editedUser) {
      return user.id === this.editedUser.id;
    }
    return false;
  }

  deleteUser(user: User) {
    this.store.dispatch(new UsersActions.DeleteUser(user));
  }
}
