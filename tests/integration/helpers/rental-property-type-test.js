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
  const self = this;
  const properties = ['Apartment', 'Townhouse', 'Condo'];
  properties.forEach(function (value) {
    self.set('inputValue', 'Apartment');
    self.render(hbs`{{rental-property-type inputValue}}`);
    assert.equal(self.$().text().trim(), 'Community');
  });
});

