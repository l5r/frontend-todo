import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class TodoItemsIndexController extends Controller {
  @service store;

  @action
  update(){
    this.send("refresh")
  }
}
