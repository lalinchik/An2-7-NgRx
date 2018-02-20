import { TasksState } from './tasks.state';
import { ActionReducerMap } from '@ngrx/store';
import { UsersState } from './users.state';
import { tasksReducer, usersReducer} from '../reducers';



export interface AppState {
  tasks: TasksState;
  users: UsersState;
}

export const reducers: ActionReducerMap<AppState> = {
  tasks: tasksReducer,
  users: usersReducer
};
