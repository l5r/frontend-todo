import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class TodoItemFormComponent extends Component {
  @service store;

  @tracked newTitle = '';
  @tracked newDeadline = null;

  @action
  async createTodo(event) {
    event.preventDefault();

    const todoList = this.args.todoList;

    let tzDeadline = null;
    if (this.newDeadline) {
      const deadline = Temporal.PlainDateTime.from(this.newDeadline);
      tzDeadline = deadline.toZonedDateTime(Temporal.Now.timeZoneId());
    }

    const todo = this.store.createRecord('todo-item', {
      title: this.newTitle,
      deadline: tzDeadline,
      list: todoList,
    });
    await todo.save();

    this.newTitle = '';
    this.newDeadline = null;

    this.args.onSubmit && this.args.onSubmit(todo);
  }
}
