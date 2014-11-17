import Ember from 'ember';

export default Ember.Route.extend({
  activate: function () {
    var user = this.get('session.user');
    if (!user) {
      this.transitionTo('auth.login');
    }
  }
});
