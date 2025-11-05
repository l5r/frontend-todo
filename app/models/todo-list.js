import Model, { attr, hasMany } from '@ember-data/model';

export default class TodoListModel extends Model {
  @attr('string') title;

  @hasMany('todo-item', {
    inverse: 'list',
    async: true,
  })
  items;
}
