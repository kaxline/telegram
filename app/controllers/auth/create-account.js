import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    signup: function () {
      if (!this.get('isFormComplete')) {
        this.set('errorMsg', 'Please complete all fields.');
        return;
      }
      var user = this.model;
      user.set('id', this.get('username'));
      user.save();
      this.get('session').set('user', user);
      this.transitionToRoute('dashboard');
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
