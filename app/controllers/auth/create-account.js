import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    signup: function () {
      var self = this;
      if (!this.get('isFormComplete')) {
        this.set('errorMsg', 'Please complete all fields.');
        return;
      }
      var user = this.model;
      user.set('id', this.get('username'));
      $.getScript('/js/jquery-md5.js')
        .done(function (data, textStatus, jqxhr) {
          var encryptedPassword = $.md5(user.get('password'));
          user.set('password', encryptedPassword);
          user.save()
            .then(function () {
              self.set('session.user', user);
              self.transitionToRoute('dashboard');
            });
        })
        .fail(function (jqxhr, settings, exception) {
          console.error(exception);
        });
    }
  },

  isFormComplete: function () {
    var self = this;
    var attrToValidate = ['name', 'username', 'email', 'password'];
    var isComplete = true;
    for ( var i = 0; i < attrToValidate.length; i++) {
      var attr = attrToValidate[i];
      if (!self.get(attr)) {
        isComplete = false;
        break;
      }
    }
    return isComplete;
  }.property('name', 'username', 'email', 'password')

});
