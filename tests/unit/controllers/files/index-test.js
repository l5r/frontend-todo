import { module, test } from 'qunit';
import { setupTest } from 'frontend-todo/tests/helpers';

module('Unit | Controller | files/index', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:files/index');
    assert.ok(controller);
  });
});
