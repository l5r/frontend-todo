import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import DataTableRoute from 'ember-data-table/route';

export default class FilesIndexRoute extends DataTableRoute {
  @service store;

  modelName = 'file';

  mergeQueryOptions(_params) {
    return {
      include: 'todo-item,download',
      filter: {
        ':has:download': true
      }
    };
  }
}
