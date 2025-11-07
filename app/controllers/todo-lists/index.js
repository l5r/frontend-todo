import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class TodoListsIndexController extends Controller {
  @service store;

  @tracked newTitle = '';

  @action
  createTodoList(event) {
    event.preventDefault();

    const todoList = this.store.createRecord('todo-list', {
      title: this.newTitle,
    });
    todoList.save();

    this.newTitle = '';
  }

  @action
  async delete(todoList) {
    await todoList.destroyRecord();
  }
}
