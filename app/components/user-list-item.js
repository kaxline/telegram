import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    follow: function () {
      console.log('follow component');
      this.sendAction('follow', this.get('user'));
    },
    unfollow: function () {
      this.sendAction('unfollow', this.get('user'));
    }
  },

  isLoggedIn: function () {
    return this.get('session.user') === this.get('user');
  }.property('session.user', 'user'),

  isFollowing: function () {
    console.log(this.get('session.user'));
    if (!this.get('session.user')) {
      return false;
    }
    return this.get('user.isFollowed');
  }.property('session.user', 'user.isFollowed')
});
