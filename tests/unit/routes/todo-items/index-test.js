import { module, test } from 'qunit';
import { setupTest } from 'frontend-todo/tests/helpers';

module('Unit | Route | todo-items/index', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:todo-items/index');
    assert.ok(route);
  });
});
