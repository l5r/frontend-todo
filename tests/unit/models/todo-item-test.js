import { setupTest } from 'frontend-todo/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Model | todo item', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('todo-item', {});
    assert.ok(model, 'model exists');
  });
});
