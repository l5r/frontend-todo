import ApplicationAdapter from './application';

export default class TodoListAdapter extends ApplicationAdapter {
  urlForFindAll(modelName, _snapshot) {
    const baseUrl = this.pathForType(modelName);
    return `${baseUrl}/with-counts`;
  }
}
