import { module, test } from 'qunit';
import { setupTest } from 'frontend-todo/tests/helpers';

module('Unit | Controller | todo-lists/index', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:todo-lists/index');
    assert.ok(controller);
  });
});
