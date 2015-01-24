import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    logout: function () {
      var self = this;
      var loggedInUser = self.get('session.user');
      $.get(
        '/api/admin/logout',
        null,
        function (data, textStatus, jqXHR) {
          self.store.unloadRecord(loggedInUser);
          self.set('session.user', null);
          self.transitionToRoute('auth.login');
        }
      );
    }
  },

  isLoggedIn: function () {
    return this.get('session.user') === this.get('model');
  }.property('session.user')
});
