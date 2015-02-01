import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    var userId = this.modelFor('profile').get('id');
    return this.store.find('user', {operation: 'followers', userId: userId});
  }
});
