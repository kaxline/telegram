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
      $.getScript('/js/jquery-md5.js')
        .done(function (data, textStatus, jqxhr) {
          var encryptedPassword = $.md5(password);

          var user = self.store.createRecord('user', {
              id: userId
            , password: encryptedPassword
            , operation: 'login'
          });

          user.save().then(function (foundUser) {
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
        })
        .fail(function (jqxhr, settings, exception) {
          console.error(exception);
        });
    }
  }
});
