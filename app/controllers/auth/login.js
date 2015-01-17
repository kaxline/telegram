import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    login: function () {
      var self = this;
      var userId = this.get('id');
      var password = this.get('password');
      if (!userId) {
        this.set('errorMsg', 'Please enter a username.');
        return;
      }
      if (!password) {
        this.set('errorMsg', 'Please enter a password.');
        return;
      }
      self.store.find('user', {userId: userId, password: password, action: 'login'}).then(function (foundUserArray) {
        if (!foundUserArray.get('length')) {
          self.set('errorMsg', 'No user found with that username.');
          return;
        }
        var foundUser = foundUserArray.get('firstObject');
        self.set('session.user', foundUser);
        self.transitionToRoute('dashboard');
        self.set('id', null);
        self.set('password', null);
      }, function (err) {
        self.set('id', null);
        self.set('password', null);
        self.set('errorMsg', 'No user found with that name.');
        console.log(err);
      });
    }
  }
});
