import { module, test } from 'qunit';
import { setupRenderingTest } from 'frontend-todo/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | todo-item-form', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<TodoItemForm />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <TodoItemForm>
        template block text
      </TodoItemForm>
    `);

    assert.dom().hasText('template block text');
  });
});
