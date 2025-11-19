import Controller from '@ember/controller';
import { action } from '@ember/object';
import DataTableController from 'ember-data-table/controller';

export default class FilesIndexController extends DataTableController {
  @action
  delete(file) {
    return file.destroyRecord();
  }
}
