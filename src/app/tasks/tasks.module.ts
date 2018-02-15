import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks.routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { tasksReducer } from '../+store/reducers';
import {TasksEffects} from '../+store/effects';


import {
  TaskListComponent,
  TaskComponent,
  TaskFormComponent,
  TaskArrayService,
  TaskPromiseService
} from '.';



@NgModule({
  declarations: [
    TaskListComponent,
    TaskComponent,
    TaskFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TasksRoutingModule,
    StoreModule.forFeature('tasks', tasksReducer),
    EffectsModule.forFeature([TasksEffects])
  ],
  providers: [
    TaskArrayService,
    TaskPromiseService
  ]
})
export class TasksModule {}
