import Ember from 'ember';

export default Ember.Route.extend({

  redirect: function () {
    var loggedInUser = this.get('session.user');
    if (!loggedInUser) {
      this.transitionTo('/');
    }
  },

  model: function () {
    return this.store.find('post');
  }

});
