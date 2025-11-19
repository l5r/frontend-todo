import Model, { attr, belongsTo } from '@ember-data/model';

export default class FileModel extends Model {
  @attr name;
  @attr format;
  @attr size;
  @attr extension;
  @attr created;

  @belongsTo('todo-item', {
    inverse: 'file',
    async: true,
  })
  todoItem;

  @belongsTo('file', {
    inverse: null,
    async: true
  })
  download;
}
