import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class TodoItemComponent extends Component {
  @service store;

  get todoItem() {
    if (this.args.todoItem == null) throw TypeError('todoItem cannot be null');

    return this.args.todoItem;
  }

  get completed() {
    return this.todoItem.completedAt && inPast(this.todoItem.completedAt);
  }

  set completed(completed) {
    const todoItem = this.todoItem;
    if (completed) {
      todoItem.completedAt = Temporal.Now.zonedDateTimeISO();
    } else {
      todoItem.completedAt = null;
    }
    return todoItem.save();
  }

  get status() {
    const todoItem = this.todoItem;

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
    this.todoItem.destroyRecord();
  }

  @action
  async uploadFile(fileUpload) {
    try {
      const response = await fileUpload.upload('/files');
      const json = await response.json();
      const fileId = json.data.id;
      const file = await this.store.findRecord('file', fileId);
      this.todoItem.file = file;
      this.todoItem.save();
    } catch (response) {
      console.error('File upload failed:', response);
    }
  }
}

function inPast(dateTime) {
  return (
    Temporal.ZonedDateTime.compare(dateTime, Temporal.Now.zonedDateTimeISO()) <=
    0
  );
}
