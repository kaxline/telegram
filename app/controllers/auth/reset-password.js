import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    passwordReset: function () {
      var self = this;
      $.ajax({
        url: '/api/admin/password-reset',
        data: {
          email: this.get('email')
        }
      })
        .done(function (data, textStatus, jqxhr) {
          console.log('email sent');
          self.transitionToRoute('auth.login');
        })
        .fail(function () {
          console.error('error sending email');
        })
    }
  }
});
