import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {
    var self = this;
    console.log('testing');
    return self.store.find('user', params.user_id).then(function (foundUser) {
      console.log('test');
      return foundUser;
    });
  }
});
