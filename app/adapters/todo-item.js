import ApplicationAdapter from './application';

export default class TodoItemAdapter extends ApplicationAdapter {
  urlForQuery(_query, _modelName, _snapshot) {
    return `search/todo-items/search`
  }

  buildQuery(_snapshot) {
    return {
      sort: 'deadline',
      include: 'file',
    }
  }
}
