import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class FilesFileController extends Controller {
  @service router;

  get isImage() {
    return this.model.format.startsWith('image');
  }

  @action
  async delete() {
    await this.model.destroyRecord();
    this.router.transitionTo('index');
  }
}
