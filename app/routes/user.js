import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {
    return this.store.find('user', {username: params.username}).then(function (foundUsers) {
      return foundUsers.get('firstObject');
    });
  }
});
