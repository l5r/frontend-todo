import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class TodoListsTodoListRoute extends Route {
  @service store;

  model(params) {
    return this.store.findRecord('todo-list', params['todo-list_id']);
  }
}
