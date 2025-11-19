import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class TodoItemsIndexRoute extends Route {
  @service store;

  queryParams = {
    query: {
      refreshModel: true
    }
  }

  model(params) {
    let query = params.query || '';

    if (query.trim() === '') {
      return this.store.findAll(
        'todo-item',
        {
          reload: true,
        },
      );
    } else {
      return this.store.query('todo-item', {
        filter: {
          title: query
        }
      }, {
        reload: true
      })
    }
  }

  @action
  refresh() {
    return super.refresh();
  }
}
