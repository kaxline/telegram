import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {
    var userId = this.modelFor('profile').get('id');
    return this.store.find('user', {operation: 'following', userId: userId});
  }
});
