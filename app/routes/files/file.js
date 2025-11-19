import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class FilesFileRoute extends Route {
  @service store;

  model(params) {
    return this.store.findRecord('file', params['file_id']);
  }
}
