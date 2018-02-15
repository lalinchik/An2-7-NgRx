import { TasksState } from './tasks.state';
import { ActionReducerMap } from '@ngrx/store';
import { tasksReducer } from '../reducers';


export interface AppState {
  tasks: TasksState;
}

export const reducers: ActionReducerMap<AppState> = {
  tasks: tasksReducer
};
