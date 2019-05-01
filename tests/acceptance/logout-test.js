import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | logout test', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /teams and clicking logout' , async function(assert) {
    await visit('/teams');

    assert.equal(currentURL(), '/teams');

    await click('team-sidebar__logout-button'); //grabbed selector from button
    assert.equal(currentURL(), '/login');

  });
});
