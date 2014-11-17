import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    signup: function () {
      var user = this.model;
      user.set('id', this.get('username'));
      user.save();
      this.get('session').set('user', user);
      this.transitionToRoute('dashboard');
    }
  },
  username: function () {
    var id = this.get('id');
    if (id.indexOf('fixture-') !== -1) {
      id = null;
    }
    return id;
  }.property('id')

});
