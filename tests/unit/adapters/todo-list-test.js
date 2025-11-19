import { setupTest } from 'frontend-todo/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Adapter | todo list', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    const adapter = this.owner.lookup('adapter:todo-list');
    assert.ok(adapter, 'adapter exists');
  });
});
