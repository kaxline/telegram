import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    logout: function () {
      this.set('session.user', null);
      this.transitionToRoute('auth.login');
    }
  },

  isLoggedIn: function () {
    return this.get('session.user') === this.get('model');
  }.property('model')
});
