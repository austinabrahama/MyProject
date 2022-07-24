import { module, test } from 'qunit';
import { setupTest } from 'my-project/tests/helpers';

module('Unit | Controller | drum-kit', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:drum-kit');
    assert.ok(controller);
  });
});
