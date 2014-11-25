import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function () {
    var self = this;
    // these lines are for testing only
    var testUser = this.store.find('user', 'kaxline');
    return testUser.then(function (fulfilledUser) {
      self.set('session.user', fulfilledUser);
    });
    //
  },

  model: function (params) {
    return this.store.find('post', params.post_id);
  }
});
