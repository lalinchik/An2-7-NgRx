import {createFeatureSelector, createSelector} from '@ngrx/store';

import { getRouterState } from '../selectors/router.selectors';
import { Task } from '../../tasks/models/task.model';
import { TasksState } from '../state';

export const getTasksState = createFeatureSelector<TasksState>('tasks');

export const getTasksData = createSelector(getTasksState, (state: TasksState) => state.data);
export const getTasksError = createSelector(getTasksState, (state: TasksState) => state.error);
export const getSelectedTask = createSelector(getTasksState, (state: TasksState) => state.selectedTask);
export const getTasksLoaded = createSelector(getTasksState, (state: TasksState) => state.loaded);
export const getSelectedTaskByUrl = createSelector(
  getTasksData,
  getRouterState,
  (tasks, router): Task => {
    const taskID = router.state.params.id;
    if (taskID) {
      return tasks.find(task => task.id === +taskID);
    } else {
      return new Task(null, '', null, null);
    }
  });


