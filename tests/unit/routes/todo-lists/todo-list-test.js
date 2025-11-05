import { module, test } from 'qunit';
import { setupTest } from 'frontend-todo/tests/helpers';

module('Unit | Route | todo-lists/todo-list', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:todo-lists/todo-list');
    assert.ok(route);
  });
});
