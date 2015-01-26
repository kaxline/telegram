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
    },
    follow: function () {
      var loggedInUser = this.get('session.user');
      if (!loggedInUser) {
        return this.transitionToRoute('auth.login');
      }
      var profileUser = this.get('model');
      profileUser.set('operation', 'follow');
      profileUser.save().then(function () {
        console.log('user followed');
      }, function () {
        console.error('Error following user.');
      });
    }
  },

  isLoggedIn: function () {
    return this.get('session.user') === this.get('model');
  }.property('session.user'),

  isFollowing: function () {
    if (!this.get('session.user')) {
      return false;
    }
    console.log(this.get('model.id'));
    return this.store.find('user', {follows: this.get('model.id')}).then(function (response) {
      console.log(response);
    });
  }.property('session.user')
});
