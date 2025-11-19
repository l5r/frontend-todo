import Model, { attr, belongsTo } from '@ember-data/model';

export default class TodoItemModel extends Model {
  @attr('string') title;
  @attr('datetime') completedAt;
  @attr('datetime') deadline;

  @belongsTo('todo-list', {
    inverse: 'items',
    async: true,
  })
  list;

  @belongsTo('file', {
    inverse: 'todoItem',
    async: true,
  })
  file;
}
