import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate: function () {
    this._super();
    $('body').addClass('index');
  }
});
