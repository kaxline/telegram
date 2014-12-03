import Ember from 'ember';

export default Ember.Route.extend({

  /* for testing only

  beforeModel: function () {
    var self = this;
    var testUser = this.store.find('user', 'kaxline');
    return testUser.then(function (fulfilledUser) {
      self.set('session.user', fulfilledUser);
    });
  },

  */

  redirect: function () {
    var loggedInUser = this.get('session.user');
    if (!loggedInUser) {
      this.transitionTo('/')
    }
  },

  model: function () {
    return this.store.find('post');
  }

});
