import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class TodoItemComponent extends Component {
  get completed() {
    const todoItem = this.args.todoItem;
    return todoItem.completedAt && inPast(todoItem.completedAt);
  }

  set completed(completed) {
    const todoItem = this.args.todoItem;
    if (completed) {
      todoItem.completedAt = Temporal.Now.zonedDateTimeISO();
    } else {
      todoItem.completedAt = null;
    }
    return todoItem.save();
  }

  get status() {
    const todoItem = this.args.todoItem;

    if (todoItem.completedAt && inPast(todoItem.completedAt)) {
      return 'completed';
    }

    if (todoItem.deadline) {
      const duration = todoItem.deadline.until(Temporal.Now.zonedDateTimeISO());

      if (duration.sign >= 0) {
        return 'overdue';
      } else if (duration.total('days') < 1.0) {
        return 'due';
      }
    }

    return 'todo';
  }

  get statusDecoration() {
    switch (this.status) {
      case 'completed':
        return 'secondary';
      case 'overdue':
        return 'danger';
      case 'due':
        return 'warning';
      case 'todo':
      default:
        return 'default';
    }
  }

  @action
  delete() {
    this.args.todoItem.destroyRecord();
  }
}

function inPast(dateTime) {
  return (
    Temporal.ZonedDateTime.compare(dateTime, Temporal.Now.zonedDateTimeISO()) <=
    0
  );
}
