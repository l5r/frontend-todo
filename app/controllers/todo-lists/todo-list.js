import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class TodoListsTodoListController extends Controller {
  @service store;

}
