import { module, test } from 'qunit';
import { setupTest } from 'my-project/tests/helpers';

module('Unit | Route | color-picker', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:color-picker');
    assert.ok(route);
  });
});
