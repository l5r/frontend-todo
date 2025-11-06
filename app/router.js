import EmberRouter from '@ember/routing/router';
import config from 'frontend-todo/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('todo-items', function () {});
  this.route('todo-lists', function () {
    this.route('todo-list', { path: '/:todo-list_id' });
  });
  this.route('login');
  this.route('register');
});
