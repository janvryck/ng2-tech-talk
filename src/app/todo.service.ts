import { Todo } from './todo';
import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {

  constructor() { }

  getTodos(): Todo[] {
    return [{ title: 'techtalk voorbereiden', voltooid: true },
    { title: 'techtalk ng basic', voltooid: false },
    { title: 'techtalk subscribes/observables/http', voltooid: false },
    { title: 'techtalk frontend testing', voltooid: false },
    { title: 'techtalk specfiles testen', voltooid: false },
    { title: 'repeat for infinite profit', voltooid: false }];
  }
}
