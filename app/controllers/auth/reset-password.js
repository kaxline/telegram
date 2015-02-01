import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    passwordReset: function () {
      var self = this;
      self.setProperties({
          successMsg: null
        , errorMsg: null
      });
      var user = self.store.createRecord('user', {
        email: self.get('email'),
        operation: 'passwordReset'
      });

      user.save().then(function () {
        console.log('email sent');
        self.set('successMsg', 'Email sent');
        setTimeout(function () {
          self.set('email', null);
          self.transitionToRoute('auth.login');
        }, 2000);
      }, function () {
        console.error('error sending email');
        self.set('errorMsg', 'Error sending email');
      });
    }
  }
});
