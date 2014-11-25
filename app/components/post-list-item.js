import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    showRepost: function () {
      this.set('hover', true);
    },
    hideRepost: function () {
      this.set('hover', false);
    },
    repost: function () {
      this.get('post.repostedBy').pushObject(this.get('loggedInUser'));
      this.send('hideRepost');
    }
  },

  loggedInUserOwnsPost: function () {
    return this.get('loggedInUser.id') === this.get('post.author.id');
  }.property('loggedInUser'),

  loggedInUserHasReposted: function () {
    var repostedBy = this.get('post.repostedBy');
    var loggedInUserId = this.get('loggedInUser');
    console.log(repostedBy.indexOf(loggedInUserId) !== -1);
    return repostedBy.indexOf(loggedInUserId) !== -1;
  }.property('post.repostedBy.length'),

  hasReposts: function () {
    console.log(this.get('post.repostedBy'));
    return this.get('post.repostedBy').length;
  }.property('post.repostedBy.length'),

  repostName: function () {
    console.log(this.get('post.repostedBy'));
    var firstRepostUser = this.get('post.repostedBy').get('firstObject');
    return firstRepostUser.get('name');
  }.property('post.repostedBy'),

  displayRepostOption: function () {
    return this.get('loggedInUserOwnsPost') || this.get('loggedInUserHasReposted');
  }.property('loggedInUserOwnsPost', 'loggedInUserHasReposted')


});
