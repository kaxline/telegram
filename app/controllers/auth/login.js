import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    login: function () {
      var self = this;
      var username = this.get('id');
      var password = this.get('password');
      if (!username) {
        $('.error-text').html('Please enter a username.').show();
        return;
      }
      if (!password) {
        $('.error-text').html('Please enter a password.').show();
        return;
      }
      self.store.find('user', username).then(function (foundUser) {
        if (foundUser.get('password') === password) {
          self.get('session').set('user', foundUser);
          self.set('id', null);
          self.set('password', null);
          self.transitionToRoute('dashboard');
        } else {
          self.set('id', null);
          self.set('password', null);
          $('.error-text').html('Username and password do not match.').show();
        }
      }, function (err) {
        self.set('id', null);
        self.set('password', null);
        $('.error-text').html('No user found with that name.').show();
      })
    }
  }
});
