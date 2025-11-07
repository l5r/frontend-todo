import Model, { attr, hasMany } from '@ember-data/model';

export default class TodoListModel extends Model {
  @attr('string') title;
  @attr total;
  @attr completed;

  @hasMany('todo-item', {
    inverse: 'list',
    async: true,
  })
  items;
}
