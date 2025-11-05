import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class TodoItemsIndexRoute extends Route {
  @service store;

  model() {
    return this.store.query('todo-item', {
      sort: "deadline"
    }, {
      reload: true
    });
  }

  @action
  refresh () {
    return super.refresh();
  }
}
