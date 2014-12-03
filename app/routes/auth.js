import Ember from 'ember';

export default Ember.Route.extend({
  redirect: function (model, transition) {
    var user = this.get('session.user');
    if (user) {
      this.transitionTo('dashboard');
    }
  }
});
