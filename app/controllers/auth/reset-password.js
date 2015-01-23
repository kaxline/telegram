import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    passwordReset: function () {
      $.ajax({
        url: '/api/admin/password-reset',
        data: {
          email: this.get('email')
        }
      })
        .done(function (data, textStatus, jqxhr) {
          console.log('yeah');
        });
    }
  }
});
