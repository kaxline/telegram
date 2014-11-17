import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    logout: function () {
      this.get('session').set('user', null);
      this.transitionToRoute('auth.login');
    }
  }
});
