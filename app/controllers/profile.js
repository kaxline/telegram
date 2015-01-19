import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    logout: function () {
      var self = this;
      $.get(
        '/api/logout',
        null,
        function (data, textStatus, jqXHR) {
          self.set('session.user', null);
          self.transitionToRoute('auth.login');
        }
      )
    }
  },

  isLoggedIn: function () {
    return this.get('session.user') === this.get('model');
  }.property('session.user')
});
