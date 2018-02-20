import { TasksActionTypes, TasksActions } from '../actions';
import { TasksState, initialTasksState } from '../state/tasks.state';
import { Task } from '../../tasks/models/task.model';

export function tasksReducer(
  state = initialTasksState,
  action: TasksActions
): TasksState {
  console.log(`Reducer: Action came in! ${action.type}`);

  switch (action.type) {
    case TasksActionTypes.GET_TASKS: {
      console.log('GET_TASKS action being handled!');
      return {
        ...state,
        loading: true
      };
    }

    case TasksActionTypes.GET_TASKS_SUCCESS: {
      console.log('GET_TASKS_SUCCESS action being handled!');
      const data = [...<Array<Task>>action.payload];
      return {
        ...state,
        data,
        loading: false,
        loaded: true
      };
    }

    case TasksActionTypes.GET_TASKS_ERROR: {
      console.log('GET_TASKS_ERROR action being handled!');
      const error = action.payload;
      return {
        ...state,
        loading: false,
        loaded: false,
        error
      };
    }

    case TasksActionTypes.CREATE_TASK: {
      console.log('CREATE_TASK action being handled!');
      return {...state};
    }

    case TasksActionTypes.UPDATE_TASK: {
      console.log('UPDATE_TASK action being handled!');
      return {...state};
    }

    case TasksActionTypes.DELETE_TASK: {
      console.log('DELETE_TASK action being handled!');
      return {...state};
    }

    case TasksActionTypes.GET_TASK: {
      console.log('GET_TASK action being handled!');
      return {
        ...state,
        loading: true
      };
    }

    case TasksActionTypes.GET_TASK_SUCCESS: {
      console.log('GET_TASK_SUCCESS action being handled!');
      const selectedTask = { ...<Task>action.payload };
      return {
        ...state,
        loading: false,
        loaded: true,
        selectedTask
      };
    }

    case TasksActionTypes.GET_TASK_ERROR: {
      console.log('GET_TASK_ERROR action being handled!');
      const error = action.payload;
      return {
        ...state,
        loading: false,
        loaded: false,
        error
      };
    }

    case TasksActionTypes.UPDATE_TASK_SUCCESS: {
      console.log('UPDATE_TASK_SUCCESS action being handled!');
      const task = { ...<Task>action.payload };
      const data = [...state.data];
      const index = data.findIndex(t => t.id === task.id);

      data[index] = task;

      return {
        ...state,
        data
      };
    }

    case TasksActionTypes.UPDATE_TASK_ERROR: {
      console.log('UPDATE_TASK_ERROR action being handled!');
      const error = action.payload;
      return {
        ...state,
        error
      };
    }

    case TasksActionTypes.CREATE_TASK_SUCCESS: {
      console.log('CREATE_TASK_SUCCESS action being handled!');
      const task = { ...<Task>action.payload };
      const data = [...state.data];

      data.push(task);

      return {
        ...state,
        data
      };
    }

    case TasksActionTypes.CREATE_TASK_ERROR: {
      console.log('CREATE_TASK_ERROR action being handled!');
      const error = action.payload;
      return {
        ...state,
        error
      };
    }

    case TasksActionTypes.DELETE_TASK_SUCCESS: {
      console.log('DELETE_TASK_SUCCESS action being handled!');
      const task = { ...<Task>action.payload };
      const data = [...state.data];
      const index = data.findIndex(t => t.id === task.id);

      data.splice(index, 1);

      return {
        ...state,
        data
      };
    }

    case TasksActionTypes.DELETE_TASK_ERROR: {
      console.log('DELETE_TASK_ERROR action being handled!');
      const error = action.payload;
      return {
        ...state,
        error
      };
    }

    default: {
      console.log('UNKNOWN_TASK action being handled!');
      return state;
    }
  }
}
