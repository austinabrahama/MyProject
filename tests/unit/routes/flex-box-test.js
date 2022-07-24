import { module, test } from 'qunit';
import { setupTest } from 'my-project/tests/helpers';

module('Unit | Route | flex-box', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:flex-box');
    assert.ok(route);
  });
});
