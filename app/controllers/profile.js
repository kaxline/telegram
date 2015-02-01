import Ember from 'ember';

export default Ember.Controller.extend({
  isLoggedIn: function () {
    return this.get('session.user') === this.get('model');
  }.property('session.user', 'model'),

  isFollowing: function () {
    if (!this.get('session.user')) {
      return false;
    }
    return this.get('model.isFollowed');
  }.property('session.user', 'model.isFollowed')
});
