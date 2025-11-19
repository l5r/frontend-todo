import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action, observer } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class TodoItemsIndexController extends Controller {
  @service store;

  queryParams = ['query']

  @tracked query = '';
  @tracked newQuery = this.query;
  @tracked model;

  get todoItems() {
    return this.model;
  }

  @action
  doSearch(event) {
    event && event.preventDefault();

    this.query = this.newQuery;
  }

  @action
  update() {
    this.send('refresh');
  }
}
