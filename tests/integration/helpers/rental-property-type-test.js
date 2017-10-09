import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('rental-property-type', 'helper:rental-property-type', {
  integration: true
});

test('it renders Standalone when property is not part of a community', function(assert) {
  this.set('inputValue', '1234');
  this.render(hbs`{{rental-property-type inputValue}}`);
  assert.equal(this.$().text().trim(), 'Standalone');
});

test('it renders Community when property is part of a community', function(assert) {
    this.set('inputValue', 'Apartment');
    this.render(hbs`{{rental-property-type inputValue}}`);
    assert.equal(this.$().text().trim(), 'Community');

    this.set('inputValue', 'Townhouse');
    this.render(hbs`{{rental-property-type inputValue}}`);
    assert.equal(this.$().text().trim(), 'Community');

    this.set('inputValue', 'Condo');
    this.render(hbs`{{rental-property-type inputValue}}`);
    assert.equal(this.$().text().trim(), 'Community');
});

