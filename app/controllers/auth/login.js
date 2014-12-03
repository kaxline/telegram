import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    login: function () {
      var self = this;
      var username = this.get('id');
      var password = this.get('password');
      if (!username) {
        this.set('errorMsg', 'Please enter a username.');
        return;
      }
      if (!password) {
        this.set('errorMsg', 'Please enter a password.');
        return;
      }
      self.store.find('user', username).then(function (foundUser) {
        if (foundUser.get('password') === password) {
          self.set('session.user', foundUser);
          self.transitionToRoute('dashboard');
          self.set('id', null);
          self.set('password', null);
        } else {
          self.set('id', null);
          self.set('password', null);
          self.set('errorMsg', 'Username and password do not match.');
        }
      }, function (err) {
        self.set('id', null);
        self.set('password', null);
        self.set('errorMsg', 'No user found with that name.');
      });
    }
  }
});
