import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    var user = this.modelFor('profile');
    var userName = user.get('id');
    var following = user.get('following');
    return this.store.find('user');
  }
});
