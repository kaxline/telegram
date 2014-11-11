import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return this.store.find('session').then(function (foundSessions) {
      return foundSessions.get('firstObject');
    })
  },
  afterModel: function (session, transition) {
    if (!session.get('isLoggedIn')) {
      this.transitionTo('index.create-account');
    } else {
      this.transitionTo('user.dashboard');
    }
  }
});
