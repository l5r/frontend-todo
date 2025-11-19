import { module, test } from 'qunit';
import { setupTest } from 'frontend-todo/tests/helpers';

module('Unit | Controller | files/file', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:files/file');
    assert.ok(controller);
  });
});
